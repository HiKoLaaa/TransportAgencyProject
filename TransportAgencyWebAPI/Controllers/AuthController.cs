using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.Authentication;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	public class AuthController : Controller
	{
		private UserManager<IdentityUser> _userManager;

		public AuthController(UserManager<IdentityUser> userManager)
		{
			_userManager = userManager;
		}

		[Route("login")]
		[AllowAnonymous]
		[HttpPost]
		public async Task<JsonResult> Login(string userName, string password)
		{
			// TODO: поменять вход (email or login).
			var user = await _userManager.FindByNameAsync(userName);
			bool result = false;
			if (user != null)
			{
				result = await _userManager.CheckPasswordAsync(user, password);
			}

			if (result)
			{
				return Json(Ok(GenerateToken(user)));
			}

			return Json(BadRequest());
		}

		// TODO: сделать регистрацию новых пользователей.

		private string GenerateToken(IdentityUser user)
		{
			var now = DateTime.UtcNow;
			var jwt = new JwtSecurityToken(
					issuer: AuthOptions.ISSUER,
					audience: AuthOptions.AUDIENCE,
					notBefore: now,
					claims: GetIdentity(user).Result.Claims,
					expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME_MINUTES)),
					signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(),
						SecurityAlgorithms.HmacSha256));

			return new JwtSecurityTokenHandler().WriteToken(jwt);
		}

		private async Task<ClaimsIdentity> GetIdentity(IdentityUser user)
		{
			var admin = await _userManager.IsInRoleAsync(user, "Admin");
			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, user.UserName),
				new Claim(ClaimsIdentity.DefaultRoleClaimType, admin ? "Admin" : "User")
			};

			ClaimsIdentity claimsIdentity =
				new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
					ClaimsIdentity.DefaultRoleClaimType);

			return claimsIdentity;
		}
	}
}
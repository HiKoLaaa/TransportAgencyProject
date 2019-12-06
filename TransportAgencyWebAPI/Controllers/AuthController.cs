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
using TransportAgencyWebAPI.Models.Repository;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	public class AuthController : Controller
	{
		private IUserRepositoryAsync<IdentityUser> _userRepository;
		private UserManager<IdentityUser> _userManager;

		public AuthController(IUserRepositoryAsync<IdentityUser> userRepository,
			UserManager<IdentityUser> userManager)
		{
			_userRepository = userRepository;
			_userManager = userManager;
		}

		[HttpPost]
		[Route("registration")]
		[AllowAnonymous]
		public async Task<JsonResult> Registration(string userName, string userEmail, string password)
		{
			var newUser = new IdentityUser(userName);
			newUser.Email = userEmail;
			var result = await _userRepository.AddUser(newUser, password);
			if (result)
			{
				return Json(Ok());
			}
			else
			{
				return Json(BadRequest());
			}
		}

		[Route("check_email")]
		[AllowAnonymous]
		[HttpGet]
		public async Task<JsonResult> CheckEmail(string email)
		{
			var result = await _userManager.FindByEmailAsync(email);
			if (result != null)
			{
				return Json(Ok());
			}
			else
			{
				return Json(BadRequest());
			}
		}

		[Route("login")]
		[AllowAnonymous]
		[HttpPost]
		public async Task<JsonResult> Login(string userEmail, string password)
		{
			var user = await _userManager.FindByEmailAsync(userEmail);
			bool result = false;
			if (user != null)
			{
				result = await _userManager.CheckPasswordAsync(user, password);
			}

			if (result)
			{
				return Json(Ok(GenerateToken(user)));
			}
			else
			{
				return Json(BadRequest());
			}
		}

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


		// TODO: сделать возможность смену пароля.
		public async Task<bool> ChangePassword(IdentityUser user, string oldPassword, string newPassword)
		{
			var result = await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);
			return result.Succeeded;
		}
	}
}
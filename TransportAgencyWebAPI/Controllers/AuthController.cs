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
using TransportAgencyWebAPI.Helpers;
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

		[HttpPost("registration")]
		[AllowAnonymous]
		public async Task<JsonResult> RegistrationAsync(string userName, string userEmail, string password)
		{
			var newUser = new IdentityUser(userName)
			{
				Email = userEmail
			};

			var result = await _userRepository.AddUserAsync(newUser, password);
			var identityResult = await _userManager.AddToRoleAsync(newUser, RoleNamesHelper.USER_ROLE);
			if (result && identityResult.Succeeded)
			{
				return Json(Ok());
			}

			return Json(BadRequest());
		}

		[AllowAnonymous]
		[HttpPost("login")]
		public async Task<JsonResult> LoginAsync(string userEmail, string password)
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

		[HttpPost("change_password")]
		public async Task<JsonResult> ChangePasswordAsync(string oldPassword, string newPassword)
		{
			var claimsIdentity = this.User.Identity as ClaimsIdentity;
			var userEmail = claimsIdentity.FindFirst(ClaimTypes.Email)?.Value;
			var user = await _userManager.FindByEmailAsync(userEmail);
			var result = await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);
			return result.Succeeded ? Json(Ok()) : Json(BadRequest());
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
			var admin = await _userManager.IsInRoleAsync(user, RoleNamesHelper.ADMIN_ROLE);
			var claims = new List<Claim>
			{
				new Claim(ClaimsIdentity.DefaultNameClaimType, user.UserName),
				new Claim(ClaimTypes.Email, user.Email),
				new Claim(ClaimsIdentity.DefaultRoleClaimType, admin ? RoleNamesHelper.ADMIN_ROLE : RoleNamesHelper.USER_ROLE)
			};

			ClaimsIdentity claimsIdentity =
				new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
					ClaimsIdentity.DefaultRoleClaimType);

			return claimsIdentity;
		}
	}
}
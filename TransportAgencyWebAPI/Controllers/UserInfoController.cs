using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Helpers;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	public class UserInfoController : Controller
	{
		private UserManager<IdentityUser> _userManager;

		public UserInfoController(UserManager<IdentityUser> userManager)
		{
			_userManager = userManager;
		}

		[HttpGet]
		[Route("role")]
		public async Task<string> GetRole()
		{
			var user = await _userManager.GetUserAsync(HttpContext.User);
			var isAdmin = await _userManager.IsInRoleAsync(user, RoleNamesHelper.ADMIN_ROLE);
			return isAdmin ? RoleNamesHelper.ADMIN_ROLE : RoleNamesHelper.USER_ROLE;
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
	}
}
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
		public JsonResult GetRole()
		{
			var userRole = User.FindAll(ClaimTypes.Role);
			var isAdmin = userRole.Where(cl => cl?.Value == RoleNamesHelper.ADMIN_ROLE).FirstOrDefault();
			return isAdmin != null ? Json(RoleNamesHelper.ADMIN_ROLE) : Json(RoleNamesHelper.USER_ROLE);
		}

		[Route("check_email")]
		[AllowAnonymous]
		[HttpGet]
		public async Task<JsonResult> CheckFreeEmail(string email)
		{
			var result = await _userManager.FindByEmailAsync(email);
			return Json(result == null);
		}
	}
}
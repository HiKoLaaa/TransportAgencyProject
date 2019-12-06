using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class UserRepository : IUserRepositoryAsync<IdentityUser>
	{
		private UserManager<IdentityUser> _userManager;

		public UserRepository(UserManager<IdentityUser> userManager)
		{
			_userManager = userManager;
		}

		public async Task<bool> AddUser(IdentityUser user, string password)
		{
			var result = await _userManager.CreateAsync(user, password);
			return result.Succeeded;
		}

		public async Task<bool> UpdateUser(IdentityUser user)
		{
			var result = await _userManager.UpdateAsync(user);
			return result.Succeeded;
		}

		public async Task<bool> DeleteUser(string email)
		{
			var user = await _userManager.FindByEmailAsync(email);
			var result = await _userManager.DeleteAsync(user);
			return result.Succeeded;
		}
	}
}
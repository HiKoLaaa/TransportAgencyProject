using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class AccountRepository : IUserRepositoryAsync<IdentityUser>
	{
		private UserManager<IdentityUser> _userManager;

		public AccountRepository(UserManager<IdentityUser> userManager)
		{
			_userManager = userManager;
		}

		public async Task<bool> AddUser(IdentityUser user, string password)
		{
			var result = await _userManager.CreateAsync(user, password);
			return result.Succeeded;
		}

		public async Task<bool> ChangePassword(IdentityUser user, string oldPassword, string newPassword)
		{
			var result = await _userManager.ChangePasswordAsync(user, oldPassword, newPassword);
			return result.Succeeded;
		}

		public async Task<bool> UpdateUser(IdentityUser user)
		{
			var result = await _userManager.UpdateAsync(user);
			return result.Succeeded;
		}
		
		public async Task<bool> CheckAvailableEmail(string email)
		{
			var result = await _userManager.FindByEmailAsync(email);
			return result == null;
		}

		public async Task<bool> DeleteUser(string email)
		{
			var user = await _userManager.FindByEmailAsync(email);
			var result = await _userManager.DeleteAsync(user);
			return result.Succeeded;
		}

		/// <summary>
		/// Вход по email и паролю.
		/// </summary>
		/// <param name="email">Почтовый ящик.</param>
		/// <param name="password">Пароль.</param>
		/// <returns>Пользователь, если вход удачный, или null, если что-то неверно.</returns>
		public async Task<IdentityUser> Login(string email, string password)
		{
			var user = await _userManager.FindByEmailAsync(email);
			bool result = false;
			if (user != null)
			{
				result = await _userManager.CheckPasswordAsync(user, password);
			}

			if (result)
			{
				return user;
			}
			else
			{
				return null;
			}
		}
	}
}
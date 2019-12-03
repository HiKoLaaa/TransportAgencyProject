using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IUserRepositoryAsync<T>
	{
		// TODO: добавлять методы по мере необходимости.
		Task<bool> AddUser(IdentityUser user, string password);
		Task<bool> ChangePassword(IdentityUser user, string oldPassword, string newPassword);
		Task<bool> CheckAvailableEmail(string email);
		Task<bool> DeleteUser(string email);
		Task<bool> UpdateUser(IdentityUser user);
		Task<IdentityUser> Login(string email, string password);
	}
}
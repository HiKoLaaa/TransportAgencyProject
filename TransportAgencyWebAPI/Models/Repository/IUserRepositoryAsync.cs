using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IUserRepositoryAsync<T>
	{
		Task<bool> AddUserAsync(IdentityUser user, string password);
		Task<bool> DeleteUserAsync(string email);
		Task<bool> UpdateUserAsync(IdentityUser user);
	}
}
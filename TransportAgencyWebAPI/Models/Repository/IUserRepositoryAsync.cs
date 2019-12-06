using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IUserRepositoryAsync<T>
	{
		Task<bool> AddUser(IdentityUser user, string password);
		Task<bool> DeleteUser(string email);
		Task<bool> UpdateUser(IdentityUser user);
	}
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IRepositoryAsync<T>
	{
		Task<IEnumerable<T>> GetAllAsync();
		Task<T> GetOneAsync(Guid id);
		Task AddItemAsync(T item);
		Task EditItemAsync(T item);
		Task DeleteItemAsync(Guid id);
	}
}
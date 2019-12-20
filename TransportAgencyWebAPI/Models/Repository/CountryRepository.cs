using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class CountryRepository : IRepositoryAsync<Country>
	{
		private TransportAgencyContext _context;

		public CountryRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public async Task AddItemAsync(Country item) => await _context.Countries.AddAsync(item);

		public async Task DeleteItemAsync(Guid id) =>
			await Task.Run(async () => _context.Countries.Remove(await _context.Countries.FindAsync(id)));

		public async Task EditItemAsync(Country item)
		{
			Country editingCountry = await _context.Countries.FindAsync(item.Id);
			editingCountry.Name = item.Name;
		}

		public async Task<IEnumerable<Country>> GetAllItemsAsync() => await _context.Countries.ToListAsync();

		public async Task<Country> GetOneItemAsync(Guid id) => await _context.Countries.FindAsync(id);
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class PlaceRepository : IRepositoryAsync<Place>
	{
		private TransportAgencyContext _context;

		public PlaceRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public async Task AddItemAsync(Place item)
		{
			item.CountryId = item.Country.Id;
			item.Country = null;
			await _context.Places.AddAsync(item);
		}

		public async Task DeleteItemAsync(Guid id)
		{
			await Task.Run(async () => 
			{
				_context.Trips.RemoveRange(await _context.Trips.Where(t => t.DeparturePlaceId == id || t.ArrivalPlaceId == id)
					.ToListAsync());

				_context.Places.Remove(await _context.Places.FindAsync(id));
			});
		}

		public async Task EditItemAsync(Place item)
		{
			Place editPlace = await _context.Places.FindAsync(item.Id);
			editPlace.CountryId = item.Country.Id;
			editPlace.Name = item.Name;
		}

		public async Task<IEnumerable<Place>> GetAllItemsAsync() => await _context.Places.Include(p => p.Country).ToListAsync();

		public async Task<Place> GetOneItemAsync(Guid id) => await _context.Places
			.Include(p => p.Country)
			.Where(p => p.Id == id)
			.FirstOrDefaultAsync();
	}
}
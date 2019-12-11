using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.ViewModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class TripRepository : IFindTripWithParametersRepositoryAsync<Trip>
	{
		private TransportAgencyContext _context;

		public TripRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public async Task AddItemAsync(Trip item)
		{
			item.TransportTypeId = item.TransportType.Id;
			item.ArrivalPlaceId = item.ArrivalPlace.Id;
			item.DeparturePlaceId = item.DeparturePlace.Id;
			item.TransportType = null;
			item.ArrivalPlace = null;
			item.DeparturePlace = null;
			await _context.Trips.AddAsync(item);
		}

		public async Task DeleteItemAsync(Guid id) => 
			await Task.Run(async () => _context.Trips.Remove(await _context.Trips.FindAsync(id)));

		public async Task EditItemAsync(Trip item)
		{
			Trip editTrip = await _context.Trips.FindAsync(item.Id);
			editTrip.TransportTypeId = item.TransportType.Id;
			editTrip.ArrivalPlaceId = item.ArrivalPlace.Id;
			editTrip.DeparturePlaceId = item.DeparturePlace.Id;
			editTrip.ArrivalTime = item.ArrivalTime;
			editTrip.DepartureTime = item.DepartureTime;
			editTrip.Price = item.Price;
			editTrip.AvailableTickets = item.AvailableTickets;
			editTrip.SaleTickets = item.SaleTickets;
		}
		
		public async Task<IEnumerable<Trip>> GetAllItemsAsync() => await _context.Trips
			.Include(t => t.TransportType)
			.Include(t => t.ArrivalPlace).ThenInclude(p => p.Country)
			.Include(t => t.DeparturePlace).ThenInclude(p => p.Country)
			.ToListAsync();

		public async Task<IEnumerable<Trip>> GetAllAsync(FindTripInfoViewModel info)
		{
			Func<Trip, bool> tripInfo = (t =>
			{
				bool match = t.DeparturePlaceId == info.DepartureId && 
					t.ArrivalPlaceId == info.ArrivalId && t.DepartureTime.Date == info.DepartureDate.Date;

				if (info.ArrivalDate.HasValue)
				{
					match = match && info.ArrivalDate.Value.Date == t.ArrivalTime.Date;
				}

				if (info.TransportTypeId.HasValue)
				{
					match = match && info.TransportTypeId.Value == t.TransportTypeId; 
				}

				return match;
			});

			return await _context.Trips
				.Include(t => t.TransportType)
				.Include(t => t.ArrivalPlace).ThenInclude(p => p.Country)
				.Include(t => t.DeparturePlace).ThenInclude(p => p.Country)
				.Where((t) => tripInfo(t)).ToListAsync();
		}

		public async Task<Trip> GetOneItemAsync(Guid id) => await _context.Trips
			.Include(t => t.TransportType)
			.Include(t => t.ArrivalPlace).ThenInclude(p => p.Country)
			.Include(t => t.DeparturePlace).ThenInclude(p => p.Country)
			.Where(t => t.Id == id)
			.FirstOrDefaultAsync();
	}
}
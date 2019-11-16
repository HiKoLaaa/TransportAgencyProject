using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.ViewModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class TripRepository : IFindTripWithParametersRepository<Trip>
	{
		private TransportAgencyContext _context;

		public TripRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public void AddItem(Trip item) => _context.Trips.Add(item);

		public void DeleteItem(Guid id) => _context.Trips.Remove(_context.Trips.Find(id));

		public void EditItem(Trip item)
		{
			Trip editTrip = _context.Trips.Find(item.Id);
			editTrip.TransportTypeId = item.TransportType.Id;
			editTrip.ArrivalPlaceId = item.ArrivalPlace.Id;
			editTrip.DeparturePlaceId = item.DeparturePlace.Id;
			editTrip.ArrivalTime = item.ArrivalTime;
			editTrip.DepartureTime = item.DepartureTime;
			editTrip.Price = item.Price;
		}
		
		public IEnumerable<Trip> GetAll() => _context.Trips
			.Include(t => t.TransportType)
			.Include(t => t.ArrivalPlace).ThenInclude(p => p.Country)
			.Include(t => t.DeparturePlace).ThenInclude(p => p.Country);

		public IEnumerable<Trip> GetAll(FindTripInfoViewModel info)
		{
			Func<Trip, bool> tripInfo = (t =>
			{
				bool match = t.DeparturePlaceId == info.DepartureId && 
					t.ArrivalPlaceId == info.ArrivalId && t.DepartureTime == info.DepartureDate;

				if (info.ArrivalDate.HasValue)
				{
					match = match && info.ArrivalDate.Value == t.ArrivalTime;
				}

				if (info.TranportTypeId.HasValue)
				{
					match = match && info.TranportTypeId.Value == t.TransportTypeId; 
				}

				return match;
			});

			return _context.Trips
				.Include(t => t.TransportType)
				.Include(t => t.ArrivalPlace).ThenInclude(p => p.Country)
				.Include(t => t.DeparturePlace).ThenInclude(p => p.Country)
				.Where(tripInfo);
		}

		public Trip GetOne(Guid id) => _context.Trips
			.Include(t => t.TransportType)
			.Include(t => t.ArrivalPlace).ThenInclude(p => p.Country)
			.Include(t => t.DeparturePlace).ThenInclude(p => p.Country)
			.Where(t => t.Id == id)
			.FirstOrDefault();
	}
}
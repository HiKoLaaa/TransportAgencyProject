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

		public void DeleteItem(Guid id) => _context.Trips.Remove(_context.Trips.Find(id));

		public void EditItem(Trip item) => _context.Trips.Update(item);

		public IEnumerable<Trip> GetAll() => _context.Trips;

		public IEnumerable<Trip> GetItems(FindTripInfoViewModel info)
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
					match = match && info.TranportTypeId.Value == t.TransportId; 
				}

				return match;
			});

			return _context.Trips.Where(tripInfo);
		}

		public Trip GetOne(Guid id) => _context.Trips.Find(id);
	}
}
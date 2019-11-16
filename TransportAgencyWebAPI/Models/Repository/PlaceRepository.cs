using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class PlaceRepository : IRepository<Place>
	{
		private TransportAgencyContext _context;

		public PlaceRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public void AddItem(Place item) => _context.Places.Add(item);

		public void DeleteItem(Guid id) => _context.Places.Remove(_context.Places.Find(id));

		public void EditItem(Place item)
		{
			Place editPlace = _context.Places.Find(item.Id);
			editPlace.CountryId = item.Country.Id;
			editPlace.Name = item.Name;
		}

		public IEnumerable<Place> GetAll() => _context.Places.Include(p => p.Country);

		public Place GetOne(Guid id) => _context.Places
			.Include(p => p.Country)
			.Where(p => p.Id == id)
			.FirstOrDefault();
	}
}
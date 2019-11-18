using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class CustomerRepository : IRepository<Customer>
	{
		private TransportAgencyContext _context;

		public CustomerRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public void AddItem(Customer item)
		{
			item.TripId = item.Trip.Id;
			item.Trip = null;
			_context.Customers.Add(item);
		}

		public void DeleteItem(Guid id) => _context.Customers.Remove(_context.Customers.Find(id));

		public void EditItem(Customer item)
		{
			Customer editCustomer = _context.Customers.Find(item.Id);
			editCustomer.Number = item.Number;
			editCustomer.FirstName = item.FirstName;
			editCustomer.SecondName = item.SecondName;
			editCustomer.TripId = item.Trip.Id;
		}

		public IEnumerable<Customer> GetAll() => _context.Customers.Include(c => c.Trip);

		public Customer GetOne(Guid id) => _context.Customers
			.Include(c => c.Trip)
			.Where(c => c.Id == id)
			.FirstOrDefault();
	}
}

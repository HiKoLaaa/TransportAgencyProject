using System;
using System.Collections.Generic;
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

		public void AddItem(Customer item) => _context.Customers.Add(item);

		public void DeleteItem(Guid id) => _context.Customers.Remove(_context.Customers.Find(id));

		public void EditItem(Customer item) => _context.Customers.Update(item);

		public IEnumerable<Customer> GetAll() => _context.Customers;

		public Customer GetOne(Guid id) => _context.Customers.Find(id);
	}
}

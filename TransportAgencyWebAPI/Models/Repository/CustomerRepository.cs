using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class CustomerRepository : IRepositoryAsync<Customer>
	{
		private TransportAgencyContext _context;

		public CustomerRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public async Task AddItemAsync(Customer item)
		{
			item.TripId = item.Trip.Id;
			item.Trip = null;
			await _context.Customers.AddAsync(item);
		}

		public async Task DeleteItemAsync(Guid id) => 
			await Task.Run(async () => _context.Customers.Remove(await _context.Customers.FindAsync(id)));

		public async Task EditItemAsync(Customer item)
		{
			Customer editCustomer = await _context.Customers.FindAsync(item.Id);
			editCustomer.Number = item.Number;
			editCustomer.FirstName = item.FirstName;
			editCustomer.SecondName = item.SecondName;
			editCustomer.TripId = item.Trip.Id;
		}

		public async Task<IEnumerable<Customer>> GetAllAsync() => 
			await _context.Customers.Include(c => c.Trip).ToListAsync();

		public async Task<Customer> GetOneAsync(Guid id) => await _context.Customers
			.Include(c => c.Trip)
			.Where(c => c.Id == id)
			.FirstOrDefaultAsync();
	}
}
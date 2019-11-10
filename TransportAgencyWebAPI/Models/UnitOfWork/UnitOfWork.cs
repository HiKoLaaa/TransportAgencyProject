using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.Repository;

namespace TransportAgencyWebAPI.Models.UnitOfWork
{
	public class UnitOfWork : IUnitOfWork
	{
		private TransportAgencyContext _context;

		private IRepository<Customer> _customerRepository;
		public IRepository<Customer> CustomerRepository => _customerRepository ?? new CustomerRepository(_context);

		private IFindTripWithParametersRepository<Trip> _tripRepository;
		public IFindTripWithParametersRepository<Trip> TripRepository => _tripRepository ?? new TripRepository(_context);

		public UnitOfWork(TransportAgencyContext context)
		{
			_context = context;
		}

		public void SaveChanges() => _context.SaveChanges();
	}
}
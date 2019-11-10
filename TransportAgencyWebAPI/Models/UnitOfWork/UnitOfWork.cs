using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.Repository;

namespace TransportAgencyWebAPI.Models.UnitOfWork
{
	public class UnitOfWork : IUnitOfWork
	{
		private TransportAgencyContext _context;

		private IRepository<Customer> _customerRepository;
		public IRepository<Customer> CustomerRepository
		{
			get
			{
				if (_customerRepository == null)
				{
					_customerRepository = new CustomerRepository(_context);
				}

				return _customerRepository;
			}
		}

		private IFindTripWithParametersRepository<Trip> _tripRepository;
		public IFindTripWithParametersRepository<Trip> TripRepository
		{
			get
			{
				if (_tripRepository == null)
				{
					_tripRepository = new TripRepository(_context);
				}

				return _tripRepository;
			}
		}

		public UnitOfWork(TransportAgencyContext context)
		{
			_context = context;
		}

		public void SaveChanges() => _context.SaveChanges();
	}
}
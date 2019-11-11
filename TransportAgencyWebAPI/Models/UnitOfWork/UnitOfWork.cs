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

		private IRepository<Place> _placeRepository;
		public IRepository<Place> PlaceRepository
		{
			get
			{
				if (_placeRepository == null)
				{
					_placeRepository = new PlaceRepository(_context);
				}

				return _placeRepository;
			}
		}

		private IRepository<TransportType> _transportTypeRepository;
		public IRepository<TransportType> TransportTypeRepository
		{
			get
			{
				if (_transportTypeRepository == null)
				{
					_transportTypeRepository = new TransportTypeRepository(_context);
				}

				return _transportTypeRepository;
			}
		}

		public UnitOfWork(TransportAgencyContext context)
		{
			_context = context;
		}

		public void SaveChanges() => _context.SaveChanges();
	}
}
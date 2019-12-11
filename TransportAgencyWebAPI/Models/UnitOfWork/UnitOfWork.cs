using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.Repository;

namespace TransportAgencyWebAPI.Models.UnitOfWork
{
	public class UnitOfWork : IUnitOfWork
	{
		private TransportAgencyContext _context;

		private IRepositoryAsync<Customer> _customerRepository;
		public IRepositoryAsync<Customer> CustomerRepository
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

		private IFindTripWithParametersRepositoryAsync<Trip> _tripRepository;
		public IFindTripWithParametersRepositoryAsync<Trip> TripRepository
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

		private IRepositoryAsync<Place> _placeRepository;
		public IRepositoryAsync<Place> PlaceRepository
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

		private IRepositoryAsync<TransportType> _transportTypeRepository;
		public IRepositoryAsync<TransportType> TransportTypeRepository
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

		public async Task SaveChangesAsync() => await _context.SaveChangesAsync();
	}
}
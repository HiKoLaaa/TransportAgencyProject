using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.Repository;

namespace TransportAgencyWebAPI.Models.UnitOfWork
{
	public interface IUnitOfWork
	{
		IRepository<Customer> CustomerRepository { get; }
		IRepository<Place> PlaceRepository { get; }
		IRepository<TransportType> TransportTypeRepository { get; }
		IFindTripWithParametersRepository<Trip> TripRepository { get; }
		void SaveChanges();
	}
}
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.Repository;

namespace TransportAgencyWebAPI.Models.UnitOfWork
{
	public interface IUnitOfWork
	{
		IRepositoryAsync<Customer> CustomerRepository { get; }
		IRepositoryAsync<Place> PlaceRepository { get; }
		IRepositoryAsync<TransportType> TransportTypeRepository { get; }
		IFindTripWithParametersRepositoryAsync<Trip> TripRepository { get; }
		IRepositoryAsync<Country> CountryRepository { get; }
		Task SaveChangesAsync();
	}
}
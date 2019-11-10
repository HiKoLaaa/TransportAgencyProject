using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.Repository;

namespace TransportAgencyWebAPI.Models.UnitOfWork
{
	public interface IUnitOfWork
	{
		IRepository<Customer> CustomerRepository { get; }
		IFindTripWithParametersRepository<Trip> TripRepository { get; }
		void SaveChanges();
	}
}
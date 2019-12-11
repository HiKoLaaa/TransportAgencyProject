using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.ViewModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IFindTripWithParametersRepositoryAsync<T> : IRepositoryAsync<T>
	{
		Task<IEnumerable<T>> GetAllAsync(FindTripInfoViewModel info);
	}
}
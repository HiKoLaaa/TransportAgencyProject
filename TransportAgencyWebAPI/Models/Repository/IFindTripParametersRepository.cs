using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.ViewModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IFindTripWithParametersRepository<T> : IRepository<T>
	{
		IEnumerable<T> GetItems(FindTripInfoViewModel info);
	}
}
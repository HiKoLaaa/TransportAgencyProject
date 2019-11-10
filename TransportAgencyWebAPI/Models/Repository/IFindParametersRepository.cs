using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.ViewModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IFindWithParametersRepository<T> : IRepository<T>
	{
		IEnumerable<T> GetItems(FindInfo info);
	}
}
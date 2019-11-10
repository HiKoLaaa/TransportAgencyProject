using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.Repository
{
	public interface IRepository<T>
	{
		IEnumerable<T> GetAll();
		T GetOne(Guid id);
		void EditItem(T item);
		void DeleteItem(Guid id);
	}
}
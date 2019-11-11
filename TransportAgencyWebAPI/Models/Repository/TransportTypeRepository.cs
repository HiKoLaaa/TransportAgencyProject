using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class TransportTypeRepository : IRepository<TransportType>
	{
		private TransportAgencyContext _context;

		public TransportTypeRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public void AddItem(TransportType item) => _context.TransportTypes.Add(item);

		public void DeleteItem(Guid id) => _context.TransportTypes.Remove(_context.TransportTypes.Find(id));

		public void EditItem(TransportType item)
		{
			TransportType editTransportType = _context.TransportTypes.Find(item.Id);
			editTransportType.Name = item.Name;
			_context.TransportTypes.Update(editTransportType);
		}

		public IEnumerable<TransportType> GetAll() => _context.TransportTypes;

		public TransportType GetOne(Guid id) => _context.TransportTypes.Find(id);
	}
}

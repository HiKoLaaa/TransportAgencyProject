using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbContext;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.Repository
{
	public class TransportTypeRepository : IRepositoryAsync<TransportType>
	{
		private TransportAgencyContext _context;

		public TransportTypeRepository(TransportAgencyContext context)
		{
			_context = context;
		}

		public async Task AddItemAsync(TransportType item) => await _context.TransportTypes.AddAsync(item);

		public async Task DeleteItemAsync(Guid id) => 
			await Task.Run(async () => _context.TransportTypes.Remove(await _context.TransportTypes.FindAsync(id)));
		
		public async Task EditItemAsync(TransportType item)
		{
			TransportType editTransportType = await _context.TransportTypes.FindAsync(item.Id);
			editTransportType.Name = item.Name;
		}

		public async Task<IEnumerable<TransportType>> GetAllAsync() => await _context.TransportTypes.ToListAsync();

		public async Task<TransportType> GetOneAsync(Guid id) => await _context.TransportTypes.FindAsync(id);
	}
}

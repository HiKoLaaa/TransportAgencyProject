using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.UnitOfWork;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	public class TransportTypeController : Controller
	{
		private IUnitOfWork _unitOfWork;

		public TransportTypeController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpGet]
		public async Task<IEnumerable<TransportType>> GetAsync() => await _unitOfWork.TransportTypeRepository.GetAllItemsAsync();

		[HttpGet("{id}")]
		public async Task<TransportType> GetAsync(Guid id) => await _unitOfWork.TransportTypeRepository.GetOneItemAsync(id);

		[HttpPost]
		[Authorize(Roles = RoleNamesHelper.ADMIN_ROLE)]
		public async Task Post([FromBody]TransportType transportType)
		{
			await _unitOfWork.TransportTypeRepository.AddItemAsync(transportType);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpPut]
		[Authorize(Roles = RoleNamesHelper.ADMIN_ROLE)]
		public async Task Put([FromBody]TransportType transportType)
		{
			await _unitOfWork.TransportTypeRepository.EditItemAsync(transportType);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpDelete("{id}")]
		[Authorize(Roles = "Admin")]
		public async Task Delete(Guid id)
		{
			await _unitOfWork.TransportTypeRepository.DeleteItemAsync(id);
			await _unitOfWork.SaveChangesAsync();
		}

	}
}
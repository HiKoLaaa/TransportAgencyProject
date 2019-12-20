using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Helpers;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.UnitOfWork;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	public class CountryRepository : Controller
	{
		private IUnitOfWork _unitOfWork;

		public CountryRepository(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpGet]
		public async Task<IEnumerable<Country>> GetAsync() => await _unitOfWork.CountryRepository.GetAllItemsAsync();

		[HttpGet("{id}")]
		public async Task<Country> GetAsync(Guid id) => await _unitOfWork.CountryRepository.GetOneItemAsync(id);

		[HttpPost]
		[Authorize(Roles = RoleNamesHelper.ADMIN_ROLE)]
		public async Task PostAsync([FromBody]Country country)
		{
			await _unitOfWork.CountryRepository.AddItemAsync(country);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpPut]
		[Authorize(Roles = RoleNamesHelper.ADMIN_ROLE)]
		public async Task PutAsync([FromBody]Country country)
		{
			await _unitOfWork.CountryRepository.EditItemAsync(country);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpDelete("{id}")]
		[Authorize(Roles = RoleNamesHelper.ADMIN_ROLE)]
		public async Task DeleteAsync(Guid id)
		{
			await _unitOfWork.CountryRepository.DeleteItemAsync(id);
			await _unitOfWork.SaveChangesAsync();
		}
	}
}
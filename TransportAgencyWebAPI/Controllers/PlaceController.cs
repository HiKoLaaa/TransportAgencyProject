using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.UnitOfWork;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	public class PlaceController : Controller
	{
		private IUnitOfWork _unitOfWork;

		public PlaceController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpGet]
		public async Task<IEnumerable<Place>> GetAsync() => await _unitOfWork.PlaceRepository.GetAllItemsAsync();

		[HttpGet("{id}")]
		public async Task<Place> GetAsync(Guid id) => await _unitOfWork.PlaceRepository.GetOneItemAsync(id);

		[HttpPost]
		[Authorize(Roles = "Admin")]
		public async Task PostAsync([FromBody]Place place)
		{
			await _unitOfWork.PlaceRepository.AddItemAsync(place);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpPut]
		[Authorize(Roles = "Admin")]
		public async Task PutAsync([FromBody]Place place)
		{
			await _unitOfWork.PlaceRepository.EditItemAsync(place);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpDelete("{id}")]
		[Authorize(Roles = "Admin")]
		public async Task DeleteAsync(Guid id)
		{
			await _unitOfWork.PlaceRepository.DeleteItemAsync(id);
			await _unitOfWork.SaveChangesAsync();
		}
	}
}
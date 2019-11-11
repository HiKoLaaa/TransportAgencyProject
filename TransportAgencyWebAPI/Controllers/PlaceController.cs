using System;
using System.Collections.Generic;
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
		public IEnumerable<Place> Get() => _unitOfWork.PlaceRepository.GetAll();

		[HttpGet("{id}")]
		public Place Get(Guid id) => _unitOfWork.PlaceRepository.GetOne(id);

		[HttpPost]
		public void Post([FromBody]Place place)
		{
			_unitOfWork.PlaceRepository.AddItem(place);
			_unitOfWork.SaveChanges();
		}

		[HttpPut]
		public void Put([FromBody]Place place)
		{
			_unitOfWork.PlaceRepository.EditItem(place);
			_unitOfWork.SaveChanges();
		}

		[HttpDelete("{id}")]
		public void Delete(Guid id)
		{
			_unitOfWork.PlaceRepository.DeleteItem(id);
			_unitOfWork.SaveChanges();
		}
	}
}
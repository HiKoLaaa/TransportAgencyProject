using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.UnitOfWork;
using TransportAgencyWebAPI.Models.ViewModels;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	public class TripController : Controller
	{
		private IUnitOfWork _unitOfWork;

		public TripController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpGet]
		public IEnumerable<Trip> Get() => _unitOfWork.TripRepository.GetAll();

		[HttpGet("sort")]
		public IEnumerable<Trip> Get([FromBody]FindTripInfoViewModel info) => _unitOfWork.TripRepository.GetAll(info);

		[HttpGet("{id}")]
		public Trip Get(Guid id) => _unitOfWork.TripRepository.GetOne(id);

		[HttpPost]
		public void Post([FromBody]Trip trip)
		{
			_unitOfWork.TripRepository.AddItem(trip);
			_unitOfWork.SaveChanges();
		}

		[HttpPut]
		public void Put([FromBody]Trip trip)
		{
			_unitOfWork.TripRepository.EditItem(trip);
			_unitOfWork.SaveChanges();
		}

		[HttpDelete("{id}")]
		public void Delete(Guid id)
		{
			_unitOfWork.TripRepository.DeleteItem(id);
			_unitOfWork.SaveChanges();
		}
	}
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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
		public IEnumerable<TransportType> Get() => _unitOfWork.TransportTypeRepository.GetAll();

		[HttpGet("{id}")]
		public TransportType Get(Guid id) => _unitOfWork.TransportTypeRepository.GetOne(id);

		[HttpPost]
		[Authorize(Roles = "Admin")]
		public void Post([FromBody]TransportType transportType)
		{
			_unitOfWork.TransportTypeRepository.AddItem(transportType);
			_unitOfWork.SaveChanges();
		}

		[HttpPut]
		[Authorize(Roles = "Admin")]
		public void Put([FromBody]TransportType transportType)
		{
			_unitOfWork.TransportTypeRepository.EditItem(transportType);
			_unitOfWork.SaveChanges();
		}

		[HttpDelete("{id}")]
		[Authorize(Roles = "Admin")]
		public void Delete(Guid id)
		{
			_unitOfWork.TransportTypeRepository.DeleteItem(id);
			_unitOfWork.SaveChanges();
		}

	}
}
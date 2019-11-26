using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using TransportAgencyWebAPI.Models.DbModels;
using TransportAgencyWebAPI.Models.UnitOfWork;

namespace TransportAgencyWebAPI.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	public class CustomerController : Controller
	{
		private IUnitOfWork _unitOfWork;

		public CustomerController(IUnitOfWork unitOfWork)
		{
			_unitOfWork = unitOfWork;
		}

		[HttpGet]
		[Authorize(Roles = "Admin")]
		public IEnumerable<Customer> Get() => _unitOfWork.CustomerRepository.GetAll();

		[HttpGet("{id}")]
		[Authorize(Roles = "Admin")]
		public Customer Get(Guid id) => _unitOfWork.CustomerRepository.GetOne(id);

		[HttpPost]
		public void Post([FromBody]Customer customer)
		{
			customer.Trip.SaleTickets++;
			customer.Trip.AvailableTickets--;
			_unitOfWork.TripRepository.EditItem(customer.Trip);
			_unitOfWork.CustomerRepository.AddItem(customer);
			_unitOfWork.SaveChanges();
		}

		[HttpPut]
		[Authorize(Roles = "Admin")]
		public void Put([FromBody]Customer customer)
		{
			_unitOfWork.CustomerRepository.EditItem(customer);
			_unitOfWork.SaveChanges();
		}

		[HttpDelete("{id}")]
		[Authorize(Roles = "Admin")]
		public void Delete(Guid id)
		{
			_unitOfWork.CustomerRepository.DeleteItem(id);
			_unitOfWork.SaveChanges();
		}
	}
}
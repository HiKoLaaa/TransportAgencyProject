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
		public async Task<IEnumerable<Customer>> GetAsync() => await _unitOfWork.CustomerRepository.GetAllAsync();

		[HttpGet("{id}")]
		[Authorize(Roles = "Admin")]
		public async Task<Customer> GetAsync(Guid id) => await _unitOfWork.CustomerRepository.GetOneAsync(id);

		[HttpPost]
		public async Task PostAsync([FromBody]Customer customer)
		{
			customer.Trip.SaleTickets++;
			customer.Trip.AvailableTickets--;
			await _unitOfWork.TripRepository.EditItemAsync(customer.Trip);
			await _unitOfWork.CustomerRepository.AddItemAsync(customer);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpPut]
		[Authorize(Roles = "Admin")]
		public async Task PutAsync([FromBody]Customer customer)
		{
			await _unitOfWork.CustomerRepository.EditItemAsync(customer);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpDelete("{id}")]
		[Authorize(Roles = "Admin")]
		public async Task DeleteAsync(Guid id)
		{
			await _unitOfWork.CustomerRepository.DeleteItemAsync(id);
			await _unitOfWork.SaveChangesAsync();
		}
	}
}
﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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
		public async Task<IEnumerable<Trip>> GetAsync() => await _unitOfWork.TripRepository.GetAllAsync();

		[HttpGet("sort")]
		public async Task<IEnumerable<Trip>> GetAsync(FindTripInfoViewModel info) => 
			await _unitOfWork.TripRepository.GetAllAsync(info);

		[HttpGet("{id}")]
		public async Task<Trip> GetAsync(Guid id) => 
			await _unitOfWork.TripRepository.GetOneAsync(id);

		[HttpPost]
		[Authorize(Roles = "Admin")]
		public async Task PostAsync([FromBody]Trip trip)
		{
			await _unitOfWork.TripRepository.AddItemAsync(trip);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpPut]
		[Authorize(Roles = "Admin")]
		public async Task PutAsync([FromBody]Trip trip)
		{
			await _unitOfWork.TripRepository.EditItemAsync(trip);
			await _unitOfWork.SaveChangesAsync();
		}

		[HttpDelete("{id}")]
		[Authorize(Roles = "Admin")]
		public async Task DeleteAsync(Guid id)
		{
			await _unitOfWork.TripRepository.DeleteItemAsync(id);
			await _unitOfWork.SaveChangesAsync();
		}
	}
}

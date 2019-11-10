using System;
using System.Collections.Generic;

namespace TransportAgencyWebAPI.Models.DbModels
{
	public class Place
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public Guid CountryId { get; set; }
		public Country Country { get; set; }
		public List<Trip> DepatureTrips { get; set; }
		public List<Trip> ArriveTrips { get; set; }
	}
}
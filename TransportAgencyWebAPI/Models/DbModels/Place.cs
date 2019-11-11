using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TransportAgencyWebAPI.Models.DbModels
{
	public class Place
	{
		public Guid Id { get; set; }
		public string Name { get; set; }

		[JsonIgnore]
		public Guid CountryId { get; set; }
		public Country Country { get; set; }

		[JsonIgnore]
		public List<Trip> DepatureTrips { get; set; }

		[JsonIgnore]
		public List<Trip> ArriveTrips { get; set; }
	}
}
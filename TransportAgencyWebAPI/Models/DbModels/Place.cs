using System;

namespace TransportAgencyWebAPI.Models.DbModels
{
	public class Place
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public Guid CountryId { get; set; }

	}
}
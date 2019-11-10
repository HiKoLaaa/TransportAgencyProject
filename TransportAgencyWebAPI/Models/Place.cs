using System;

namespace TransportAgencyWebAPI.Models
{
	public class Place
	{
		public Guid Id { get; set; }

		public Guid TransportId { get; set; }

		public Guid DeparturePlaceId { get; set; }

		public DateTime DepartureTime { get; set; }

		public Guid ArrivalPlaceId { get; set; }

		public DateTime ArrivalTime { get; set; }

		public decimal Price { get; set; }

	}
}
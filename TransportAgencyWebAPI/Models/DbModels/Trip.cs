using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.DbModels
{
	public class Trip
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

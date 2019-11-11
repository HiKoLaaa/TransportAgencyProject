using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.DbModels
{
	public class Trip
	{
		public Guid Id { get; set; }

		[JsonIgnore]
		public Guid TransportTypeId { get; set; }

		public TransportType TransportType { get; set; }

		[JsonIgnore]
		public Guid DeparturePlaceId { get; set; }
		public Place DeparturePlace { get; set; }

		public DateTime DepartureTime { get; set; }

		[JsonIgnore]
		public Guid ArrivalPlaceId { get; set; }
		public Place ArrivalPlace { get; set; }

		public DateTime ArrivalTime { get; set; }

		public decimal Price { get; set; }

		[JsonIgnore]
		public List<Customer> Customers { get; set; }
	}
}

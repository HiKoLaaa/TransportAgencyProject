using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models
{
	public class Customer
	{
		public Guid Id { get; set; }

		public string FirstName { get; set; }
		public string SecondName { get; set; }
		public string Number { get; set; }
		public Guid TripId { get; set; }
	}
}

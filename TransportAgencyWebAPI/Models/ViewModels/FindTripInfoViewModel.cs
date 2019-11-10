using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models;

namespace TransportAgencyWebAPI.Models.ViewModels
{
	public class FindTripInfoViewModel
	{
		public Guid ArrivalId { get; set; }
		public DateTime? ArrivalDate { get; set; }
		public Guid DepartureId { get; set; }
		public DateTime DepartureDate { get; set; }
		public Guid? TranportTypeId { get; set; }
	}
}
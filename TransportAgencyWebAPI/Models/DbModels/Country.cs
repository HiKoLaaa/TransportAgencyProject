using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.DbModels
{
	public class Country
	{
		public Guid Id { get; set; }
		public string Name { get; set; }

		public List<Place> Places { get; set; }
	}
}
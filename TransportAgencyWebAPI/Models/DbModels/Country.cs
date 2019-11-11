using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.DbModels
{
	public class Country
	{
		public Guid Id { get; set; }
		public string Name { get; set; }

		[JsonIgnore]
		public List<Place> Places { get; set; }
	}
}
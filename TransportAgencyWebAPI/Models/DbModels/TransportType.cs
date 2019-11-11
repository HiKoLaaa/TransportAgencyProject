using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace TransportAgencyWebAPI.Models.DbModels
{
	/// <summary>
	/// Тип транспорта.
	/// </summary>
	public class TransportType
	{
		/// <summary>
		/// Идентификатор вида транспорта. 
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// Наименование вида транспорта.
		/// </summary>
		public string Name { get; set; }

		[JsonIgnore]
		public List<Trip> Trips { get; set; }
	}
}
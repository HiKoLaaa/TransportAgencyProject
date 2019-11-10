using System;
using System.Collections.Generic;

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

		public List<Trip> Trips { get; set; }
	}
}
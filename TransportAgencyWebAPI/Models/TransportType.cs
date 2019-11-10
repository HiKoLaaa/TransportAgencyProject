using System;

namespace TransportAgencyWebAPI.Models
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
	}
}
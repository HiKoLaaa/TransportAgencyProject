using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbModels;
using Context = Microsoft.EntityFrameworkCore.DbContext;

namespace TransportAgencyWebAPI.Models.DbContext
{
	public class TransportAgencyContext : Context 
	{
		public virtual DbSet<Trip> Trips { get; set; }
		public virtual DbSet<Country> Countries { get; set; }
		public virtual DbSet<Customer> Customers { get; set; }
		public virtual DbSet<Place> Places { get; set; }
		public virtual DbSet<TransportType> TransportTypes { get; set; }

		public TransportAgencyContext(DbContextOptions<TransportAgencyContext> options)
			: base(options) { }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Trip>()
				.HasOne(t => t.ArrivalPlace)
				.WithMany(p => p.ArriveTrips)
				.OnDelete(DeleteBehavior.NoAction);

			modelBuilder.Entity<Trip>()
				.HasOne(t => t.DeparturePlace)
				.WithMany(p => p.DepatureTrips)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
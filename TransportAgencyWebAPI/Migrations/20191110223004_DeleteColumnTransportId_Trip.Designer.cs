﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TransportAgencyWebAPI.Models.DbContext;

namespace TransportAgencyWebAPI.Migrations
{
    [DbContext(typeof(TransportAgencyContext))]
    [Migration("20191110223004_DeleteColumnTransportId_Trip")]
    partial class DeleteColumnTransportId_Trip
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.Country", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Countries");
                });

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.Customer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Number")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SecondName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("TripId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("TripId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.Place", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CountryId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CountryId");

                    b.ToTable("Places");
                });

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.TransportType", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TransportTypes");
                });

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.Trip", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ArrivalPlaceId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("ArrivalTime")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("DeparturePlaceId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DepartureTime")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<Guid>("TransportTypeId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ArrivalPlaceId");

                    b.HasIndex("DeparturePlaceId");

                    b.HasIndex("TransportTypeId");

                    b.ToTable("Trips");
                });

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.Customer", b =>
                {
                    b.HasOne("TransportAgencyWebAPI.Models.DbModels.Trip", "Trip")
                        .WithMany("Customers")
                        .HasForeignKey("TripId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.Place", b =>
                {
                    b.HasOne("TransportAgencyWebAPI.Models.DbModels.Country", "Country")
                        .WithMany("Places")
                        .HasForeignKey("CountryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("TransportAgencyWebAPI.Models.DbModels.Trip", b =>
                {
                    b.HasOne("TransportAgencyWebAPI.Models.DbModels.Place", "ArrivalPlace")
                        .WithMany("ArriveTrips")
                        .HasForeignKey("ArrivalPlaceId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("TransportAgencyWebAPI.Models.DbModels.Place", "DeparturePlace")
                        .WithMany("DepatureTrips")
                        .HasForeignKey("DeparturePlaceId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("TransportAgencyWebAPI.Models.DbModels.TransportType", "TransportType")
                        .WithMany("Trips")
                        .HasForeignKey("TransportTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

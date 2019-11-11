using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TransportAgencyWebAPI.Migrations
{
    public partial class DeleteColumnTransportId_Trip : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trips_TransportTypes_TransportTypeId",
                table: "Trips");

            migrationBuilder.DropColumn(
                name: "TransportId",
                table: "Trips");

            migrationBuilder.AlterColumn<Guid>(
                name: "TransportTypeId",
                table: "Trips",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Trips_TransportTypes_TransportTypeId",
                table: "Trips",
                column: "TransportTypeId",
                principalTable: "TransportTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trips_TransportTypes_TransportTypeId",
                table: "Trips");

            migrationBuilder.AlterColumn<Guid>(
                name: "TransportTypeId",
                table: "Trips",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AddColumn<Guid>(
                name: "TransportId",
                table: "Trips",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddForeignKey(
                name: "FK_Trips_TransportTypes_TransportTypeId",
                table: "Trips",
                column: "TransportTypeId",
                principalTable: "TransportTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

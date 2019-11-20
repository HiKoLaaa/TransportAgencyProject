using Microsoft.EntityFrameworkCore.Migrations;

namespace TransportAgencyWebAPI.Migrations
{
    public partial class TicketsInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "SaleTickets",
                table: "Trips",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "AvailableTickets",
                table: "Trips",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "SaleTickets",
                table: "Trips",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "AvailableTickets",
                table: "Trips",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TransportAgencyWebAPI.Models.DbContext;
using Microsoft.Extensions.Configuration;
using TransportAgencyWebAPI.Models.UnitOfWork;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using System.Text;
using TransportAgencyWebAPI.Models.Authentication;

namespace TransportAgencyWebAPI
{
	public class Startup
	{
		private IConfiguration _configuration { get; set; }

		public Startup(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddScoped<IUnitOfWork, UnitOfWork>();
			services.AddDbContext<TransportAgencyContext>(opt =>
				opt.UseSqlServer(_configuration["Database:ApplicationData"]));

			services.AddDbContext<AuthenticationDbContext>(opt =>
				opt.UseSqlServer(_configuration["Database:Identity"]));

			services.AddIdentity<IdentityUser, IdentityRole>()
				.AddEntityFrameworkStores<AuthenticationDbContext>()
				.AddDefaultTokenProviders();

			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = "JwtBearer";
				options.DefaultChallengeScheme = "JwtBearer";
				})
				.AddJwtBearer("JwtBearer", jwtBearerOptions =>
				{
					jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters
					{
						ValidateIssuerSigningKey = true,
						IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
						ValidateIssuer = true,
						ValidIssuer = AuthOptions.ISSUER,
						ValidateAudience = true,
						ValidAudience = AuthOptions.AUDIENCE,
						ValidateLifetime = true,
						ClockSkew = TimeSpan.FromMinutes(AuthOptions.LIFETIME_MINUTES)
					};
				});

			services.AddAuthentication();
			services.AddCors();
			services.AddMvc(opt => opt.EnableEndpointRouting = false);
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			app.UseStatusCodePages();
			app.UseCors(builder => builder
				.AllowAnyOrigin()
				.AllowAnyMethod()
				.AllowAnyHeader());

			app.UseAuthentication();
			app.UseMvc();
		}
	}
}
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
			services.AddSingleton<IUnitOfWork, UnitOfWork>();
			services.AddDbContext<TransportAgencyContext>(opt => 
				opt.UseSqlServer(_configuration["Database:ConnectionString"]), 
				ServiceLifetime.Singleton);

			services.AddMvc(opt => opt.EnableEndpointRouting = false);
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			app.UseStatusCodePages();
			app.UseMvc();
		}
	}
}
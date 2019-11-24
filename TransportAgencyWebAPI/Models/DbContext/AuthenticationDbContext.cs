using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransportAgencyWebAPI.Models.DbModels;

namespace TransportAgencyWebAPI.Models.DbContext
{
	public class AuthenticationDbContext : IdentityDbContext<IdentityUser>
	{
		public AuthenticationDbContext(DbContextOptions<AuthenticationDbContext> opts)
			: base (opts) { }
	}
}

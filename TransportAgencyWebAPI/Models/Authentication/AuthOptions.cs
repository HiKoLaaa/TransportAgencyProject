using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TransportAgencyWebAPI.Models.Authentication
{
	public static class AuthOptions
	{
		public const string ISSUER = "MyAuthServer"; 
		public const string AUDIENCE = "MyAuthAudience";
		public const int LIFETIME_MINUTES = 35;

		private const string KEY = "The_Most_Secret_Key_You_Devise";

		public static SymmetricSecurityKey GetSymmetricSecurityKey() =>
			new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
	}
}
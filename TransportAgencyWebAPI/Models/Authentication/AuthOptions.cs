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

		// TODO: поменять.
		public const string AUDIENCE = "http://localhost:43386/";
		private const string KEY = "The_Most_Secret_Key_You_Devise";
		public const int LIFETIME_MINUTES = 35;

		public static SymmetricSecurityKey GetSymmetricSecurityKey() =>
			new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
	}
}
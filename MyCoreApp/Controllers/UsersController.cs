using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using simplechat.Models;
using simplechat.Services;

namespace simplechat.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : Controller
    {
       [HttpGet]
       public IEnumerable<Users> Get()
        {
            return UserServices.GetData().ToArray();
        }

        [HttpPost]
        public void Post([FromBody] Users user)
        {
            UserServices.PushData(user);
        }
    }
}

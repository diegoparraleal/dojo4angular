using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dojo4angular.server.Controllers
{
    [Route("api")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        [Route("items")]
        public IEnumerable<string> GetItems()
        {
            return new string[] { "apple", "pineapple", "strawberry", "watermelon" };
        }

    }
}

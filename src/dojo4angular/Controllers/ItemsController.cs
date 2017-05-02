using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace dojo4angular.Controllers
{
    [Route("api")]
    public class ItemsController : Controller
    {
        [Route("items")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "apple", "watermelon", "pineapple" };
        }
        
    }
}

using System.Collections.Generic;
using Microsoft.AspNet.Mvc;

namespace dojo4angular.server.Controllers
{
    [Route("api")]
    public class ItemsController : Controller
    {
        // GET: api/values
        [HttpGet]
        [Route("items")]
        public IEnumerable<string> GetItems()
        {
            return new string[] { "apple", "pineapple", "watermelon" };
        }
        
    }
}

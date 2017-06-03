using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApi.Controllers
{
    //[Authorize]
    [EnableCors("*", "*", "*")]
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        
        [HttpOptions]
        public string Post([FromBody]string value)
        {
            using (DB db=new WebApi.DB())
            {
                db.Students.Add(new WebApi.Student {Name=value,CreatedDate=DateTime.Now });
                db.SaveChanges();
                return "Success;";

            }
        }

        [HttpPost]
        public string Save([FromBody]string value)
        {
            using (DB db = new WebApi.DB())
            {
                db.Students.Add(new WebApi.Student { Name = value, CreatedDate = DateTime.Now });
                db.SaveChanges();
                return "Success;";

            }
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController(AppDbContext db) : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<AppUser>> GetMembers()
        {

        }
    }
}

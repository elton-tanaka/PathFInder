using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;
using api.Data;
using Microsoft.VisualBasic;
using api.Repository;
using api.Repository.Interface;

namespace api.Controllers
{
    [ApiController]
    [Route("v1")]
    public class AttractionsController : ControllerBase
    {
        private readonly IAttractionRepository _attractionRepository;
        public AttractionsController(IAttractionRepository attractionRepository)
        {
            _attractionRepository = attractionRepository;
        }

        [HttpGet]
        [Route("attractions")]
        public async Task<ActionResult<List<Attractions>>> GetAll([FromQuery] int page = 1, [FromQuery] int total = 10)
        {
            var attractions = await _attractionRepository.GetAll(page, total);
            return Ok(attractions);
        }

        [HttpGet]
        [Route("attractions/{id:int}")]
        public async Task<ActionResult<Attractions>> GetById([FromRoute] int id)
        {
            var attraction = await _attractionRepository.GetById(id);
            return Ok(attraction);
        }

        [HttpPost]
        [Route("attractions")]
        public async Task<ActionResult<Attractions>> Create([FromBody] Attractions attraction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var newAttraction = await _attractionRepository.Create(attraction);
            return Ok(newAttraction);
        }

        [HttpPut]
        [Route("attractions/{id:int}")]
        public async Task<ActionResult<Attractions>> Update([FromBody] Attractions attraction, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var newAttraction = await _attractionRepository.Update(attraction, id);
            return Ok(newAttraction);
        }

        [HttpDelete]
        [Route("attractions/{id:int}")]
        public async Task<ActionResult<bool>> Delete([FromRoute] int id)
        {
            var attraction = await _attractionRepository.Delete(id);
            return Ok(attraction);
        }

        [HttpGet]
        [Route("attractions/search")]
        public async Task<ActionResult<List<Attractions>>> Search([FromQuery] string search, [FromQuery] int page = 1, [FromQuery] int total = 10)
        {
            var attractions = await _attractionRepository.Search(search, page, total);
            return Ok(attractions);
        }

    }
}

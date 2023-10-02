using api.Repository.Interface;
using api.Models;
using api.Data;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class AttractionRepository : IAttractionRepository
    {
        private readonly AppDbContext _context;

        public AttractionRepository(AppDbContext context)
        {
            _context = context;
        }
        
        public async Task<List<Attractions>> GetAll(int page, int total)
        {
            return await _context.Attractions.Skip((page - 1) * total).Take(total).ToListAsync();
        }
        public async Task<Attractions> GetById(int id)
        {
            return await _context.Attractions.FirstOrDefaultAsync(x => x.Id == id) ?? throw new Exception("Ponto turístico não encontrado.");
        }
        public async Task<List<Attractions>> Search(string search, int page, int total)
        {
            return await _context.Attractions.Where(x => x.Name.ToLower().Contains(search)).Skip((page - 1) * total).Take(total).ToListAsync();
        }
        public async Task<Attractions> Create(Attractions attraction)
        {
            _context.Attractions.Add(attraction);
            await _context.SaveChangesAsync();
            return attraction;
        }
        public async Task<Attractions> Update(Attractions attractionData, int id)
        {
            var attraction = await GetById(id);
            if (attractionData != null)
            {
                attraction.Name = attractionData.Name;
                attraction.Description = attractionData.Description;
                attraction.Location = attractionData.Location;
                attraction.City = attractionData.City;
                attraction.State = attractionData.State;
            }
            

            _context.Attractions.Update(attraction);
            await _context.SaveChangesAsync();
            return attraction;
        }
        public async Task<bool> Delete(int id)
        {
            var attraction = await GetById(id);
            _context.Attractions.Remove(attraction);
            await _context.SaveChangesAsync();
            return true;
        }


    }
}

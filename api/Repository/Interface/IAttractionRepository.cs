using api.Models;

namespace api.Repository.Interface
{
    public interface IAttractionRepository
    {
        Task<List<Attractions>> GetAll();
        Task<Attractions> GetById(int id);
        Task<List<Attractions>> Search(string search);
        Task<Attractions> Create(Attractions attraction);
        Task<Attractions> Update(Attractions attraction, int id);
        Task<bool> Delete(int id);
    }
}

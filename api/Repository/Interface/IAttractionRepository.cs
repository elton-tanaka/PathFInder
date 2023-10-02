using api.Models;

namespace api.Repository.Interface
{
    public interface IAttractionRepository
    {
        Task<List<Attractions>> GetAll(int page, int total);
        Task<Attractions> GetById(int id);
        Task<List<Attractions>> Search(string search, int page, int total);
        Task<Attractions> Store(Attractions attraction);
        Task<Attractions> Update(Attractions attraction, int id);
        Task<bool> Delete(int id);
    }
}

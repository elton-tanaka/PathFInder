using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Attractions> Attractions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite("Data Source=attractions.db;Cache=Shared");
    }
}

using Microsoft.EntityFrameworkCore;
using ReactASPToDoList2022.Models;

namespace ReactASPToDoList2022.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Models.Task> Tasks { get; set; }
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

    }
}

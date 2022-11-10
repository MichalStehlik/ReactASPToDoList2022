namespace ReactASPToDoList2022.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public ICollection<Task> Tasks { get; set; }
    }
}

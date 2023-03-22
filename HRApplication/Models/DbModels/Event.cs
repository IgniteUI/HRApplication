using System.ComponentModel.DataAnnotations.Schema;

namespace HRApplication.Models.DbModels
{
    public class Event
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public string Category { get; set; }

        public DateTime Date { get; set; }

        public IList<UserEvent> UserEvents { get; set; }
    }
}

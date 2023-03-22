namespace HRApplication.Models.InputModels
{
    using System.ComponentModel.DataAnnotations;

    public class UserEventInputModel
    {
        [Required]
        public string UserId { get; set; }

        [Required]
        public string EventId { get; set; }
    }
}

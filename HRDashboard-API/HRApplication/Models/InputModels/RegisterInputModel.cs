namespace HRApplication.Models.InputModels
{
    using System.ComponentModel.DataAnnotations;

    public class RegisterInputModel
    {
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string ConfirmedPassword { get; set; }
    }
}

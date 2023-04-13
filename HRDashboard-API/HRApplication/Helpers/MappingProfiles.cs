namespace HRApplication.Helpers
{
    using AutoMapper;
    using HRApplication.Models.DbModels;
    using HRApplication.Models.InputModels;

    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<LoginInputModel, User>().ReverseMap();
            CreateMap<RegisterInputModel, User>().ReverseMap();
            CreateMap<EventInputModel, Event>().ReverseMap();
            CreateMap<UserEventInputModel, UserEvent>().ReverseMap();
        }
    }
}

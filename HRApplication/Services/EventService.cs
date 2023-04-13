namespace HRApplication.Services
{
    using HRApplication.Data;
    using HRApplication.Helpers;
    using HRApplication.Models.DbModels;
    using Microsoft.EntityFrameworkCore;

    public class EventService
    {
        private readonly DataContext dataContext;

        public EventService(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public Event[] GetAll()
        {
            return this.dataContext.Events
                                   .Include(ev => ev.UserEvents)
                                   .ToArray();
        }

        public Event[] GetAllForUser(string email)
        {
            var user = this.dataContext.Users
                                       .Include(u => u.UserEvents)
                                       .FirstOrDefault(user => user.Email == email);

            return this.dataContext.Events
                                   .Include(ev => ev.UserEvents)
                                   .Where(e => e.UserEvents.FirstOrDefault(ue => ue.UserId == user.UserId) != null)
                                   .ToArray();
        }

        public Event GetById(string id)
        {
            return this.dataContext.Events
                                   .Include(ev => ev.UserEvents)
                                   .FirstOrDefault(c => c.Id == id);
        }

        public Event Create(Event model)
        {
            var id = IdGenerator.CreateLetterId(6);
            var existWithId = this.GetById(id);
            while (existWithId != null)
            {
                id = IdGenerator.CreateLetterId(6);
                existWithId = this.GetById(id);
            }
            model.Id = id;

            var eventEntity = this.dataContext.Events.Add(model);
            this.dataContext.SaveChanges();

            return eventEntity.Entity;
        }

        public Event Update(Event model)
        {
            var eventEntity = this.dataContext.Events
                                              .Include(ev => ev.UserEvents)
                                              .FirstOrDefault(c => c.Id == model.Id);
            if (eventEntity != null)
            {
                eventEntity.Title = model.Title != null ? model.Title : eventEntity.Title;
                eventEntity.Date = model.Date != null ? model.Date : eventEntity.Date;
                eventEntity.Category = model.Category != null ? model.Category : eventEntity.Category;
                eventEntity.UserEvents = model.UserEvents?.Count !> 0 ? model.UserEvents : eventEntity.UserEvents;

                this.dataContext.SaveChanges();
            }

            return eventEntity;
        }

        public Event Delete(string id)
        {
            var eventEntity = this.GetById(id);
            if (eventEntity != null)
            {
                this.dataContext.Events.Remove(eventEntity);
                this.dataContext.SaveChanges();
            }

            return eventEntity;
        }
    }
}

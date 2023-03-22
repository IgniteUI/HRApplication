using HRApplication.Data;
using HRApplication.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using BC = BCrypt.Net.BCrypt;

namespace HRApplication.Helpers
{
    public class DBSeeder
    {
        public static void Seed(DataContext dbContext)
        {
            ArgumentNullException.ThrowIfNull(dbContext, nameof(dbContext));
            dbContext.Database.EnsureCreated();

            var executionStrategy = dbContext.Database.CreateExecutionStrategy();

            executionStrategy.Execute(
              () => {
                  using (var transaction = dbContext.Database.BeginTransaction())
                  {
                      try
                      {
                          // Seed Users
                          if (!dbContext.Users.Any())
                          {
                              var usersData = File.ReadAllText("./Resources/users.json");
                              var parsedUsers = JsonConvert.DeserializeObject<User[]>(usersData);

                              foreach (var user in parsedUsers)
                              {
                                  user.Password = BC.HashPassword(user.Password);
                              }

                              dbContext.Users.AddRange(parsedUsers);
                              dbContext.SaveChanges();
                          }

                          // Seed Events
                          if (!dbContext.Events.Any())
                          {
                              var eventsData = File.ReadAllText("./Resources/events.json");
                              var parsedEvents = JsonConvert.DeserializeObject<Event[]>(eventsData);

                              dbContext.Events.AddRange(parsedEvents);
                              dbContext.SaveChanges();
                          }

                          transaction.Commit();
                      }
                      catch (Exception ex)
                      {
                          transaction.Rollback();
                      }
                  }
              });
        }
    }
}
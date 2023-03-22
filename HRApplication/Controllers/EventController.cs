namespace HRApplication.Controllers
{
    using AutoMapper;
    using HRApplication.Models.DbModels;
    using HRApplication.Models.InputModels;
    using HRApplication.Services;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("[controller]")]
    public class EventController : Controller
    {

        private readonly EventService eventService;
        private readonly AuthService authService;
        private readonly IMapper mapper;
        private readonly ILogger logger;

        public EventController(EventService eventService, AuthService authService, IMapper mapper, ILogger logger)
        {
            this.eventService = eventService;
            this.authService = authService;
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        [Authorize]
        public ActionResult<Event[]> GetAll()
        {
            try
            {
                var userEmail = this.authService.DecodeEmailFromToken(this.Request.Headers["Authorization"]);
                var events = this.eventService.GetAllForUser(userEmail);
                return Ok(events);
            }
            catch (Exception error)
            {
                logger.LogError(error.Message);
                return StatusCode(500);
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<Event> GetById(string id)
        {
            try
            {
                var eventEntity = this.eventService.GetById(id);

                if (eventEntity != null)
                {
                    return Ok(eventEntity);
                }

                return NotFound();
            }
            catch (Exception error)
            {
                logger.LogError(error.Message);
                return StatusCode(500);
            }
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public ActionResult<Event> Create(EventInputModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var mappedModel = this.mapper.Map<EventInputModel, Event>(model);
                    var eventEntity = this.eventService.Create(mappedModel);
                    return Ok(eventEntity);
                }

                return BadRequest(ModelState);
            }
            catch (Exception error)
            {
                logger.LogError(error.Message);
                return StatusCode(500);
            }
        }

        [HttpPut]
        [Authorize(Roles = "Administrator")]
        public ActionResult<Event> Update(EventInputModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var mappedModel = this.mapper.Map<EventInputModel, Event>(model);
                    var eventEntity = this.eventService.Update(mappedModel);
                    if (eventEntity != null)
                    {
                        return Ok(eventEntity);
                    }

                    return NotFound();
                }

                return BadRequest(ModelState);
            }
            catch (Exception error)
            {
                logger.LogError(error.Message);
                return StatusCode(500);
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public ActionResult<Event> Delete(string id)
        {
            try
            {
                var eventEntity = this.eventService.Delete(id);
                if (eventEntity != null)
                {
                    return Ok(eventEntity);
                }

                return NotFound();
            }
            catch (Exception error)
            {
                logger.LogError(error.Message);
                return StatusCode(500);
            }
        }
    }
}

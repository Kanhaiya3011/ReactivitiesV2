using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private AppDbContext Context { get; }
        public ActivitiesController(AppDbContext context)
        {
            this.Context = context;

        }
        [HttpGet]
        public async Task<IActionResult> GetActivities()
        {
            var activities = await Context.Activities.ToListAsync();
            return Ok(activities);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(string id)
        {
            var activity = await Context.Activities.FindAsync(id);
            if (activity == null) return NotFound();
            return Ok(activity);
        }
    }
}
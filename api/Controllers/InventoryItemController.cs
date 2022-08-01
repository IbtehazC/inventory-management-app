using api.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/items")]
    [ApiController]
    public class InventoryItemController : ControllerBase
    {
        private readonly ILogger<InventoryItemController> logger;
        private readonly DataContext context;

        public InventoryItemController(ILogger<InventoryItemController> logger, DataContext context)
        {
            this.logger = logger;
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<InventoryItem>>> GetItems()
        {
            logger.LogInformation("Getting all the items in the inventory");

            return await context.Items.ToListAsync();
        }

        [HttpGet("{id}")]
        public ActionResult<InventoryItem> GetItem(string id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> CreateItem(string itemName)
        {
            context.Add(new InventoryItem { Id = Guid.NewGuid().ToString(), Name = itemName, ImageUrl = "imageUrl", CreatedAt = DateTime.Now });
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:}")]
        public async Task<ActionResult> EditItem(string id, string itemName)
        {
            InventoryItem item = context.Items.FirstOrDefault(x => x.Id == id);

            if (item == null) return BadRequest();

            item.Name = itemName;

            await context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(string id)
        {
            var exists = await context.Items.AnyAsync(x => x.Id == id);

            if (!exists) return NotFound();

            context.Remove(new InventoryItem() { Id = id });

            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}
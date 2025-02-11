using duplicate_photo_check.Application.Interfaces;
using duplicate_photo_check.Application.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace duplicate_photo_check.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DuplicatePhotoCheckController : ControllerBase
    {
        private readonly IDuplicatePhotoCheckService _duplicatePhotoCheck;

        public DuplicatePhotoCheckController(IDuplicatePhotoCheckService duplicatePhotoCheck)
        {
            _duplicatePhotoCheck = duplicatePhotoCheck;
        }

        [HttpGet("GetProcess")]
        [AllowAnonymous]
        public async Task<IActionResult> Process(string sourceFolderPath)
        {
            string destinationFolderPath = "C:/duplicate-photos";

            ResponseViewModel response = new ResponseViewModel();

            response = await _duplicatePhotoCheck.Process(sourceFolderPath, destinationFolderPath);

            if (!response.Success)
                return BadRequest(response);

            return Ok(response);

        }
    }
}

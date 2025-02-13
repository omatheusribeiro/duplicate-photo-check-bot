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

        [HttpGet("GetImages")]
        [AllowAnonymous]
        public async Task<IActionResult> GetImages()
        {
            string _folderPath = @"C:\duplicate-photos"; // Caminho da pasta

            if (!Directory.Exists(_folderPath))
            {
                return StatusCode(500, new { error = "Error reading folder" });
            }

            var imageFiles = Directory.GetFiles(_folderPath)
                .Where(file => file.EndsWith(".jpg") || file.EndsWith(".jpeg") || file.EndsWith(".png") || file.EndsWith(".gif"))
                .Select(file => $"{Request.Scheme}://{Request.Host}/images/{Path.GetFileName(file)}")
                .ToList();

            return Ok(imageFiles);  // Retorna todas as URLs das imagens
        }

        [HttpDelete("Delete")]
        [AllowAnonymous]
        public async Task<IActionResult> Delete()
        {
            ResponseViewModel response = new ResponseViewModel();

            response = await _duplicatePhotoCheck.Delete();

            if (!response.Success)
                return BadRequest(response);

            return Ok(response);

        }
    }
}

using duplicate_photo_check.Application.ViewModels;

namespace duplicate_photo_check.Application.Interfaces
{
    public interface IDuplicatePhotoCheckService
    {
        Task<ResponseViewModel> Process(string sourceFolderPath, string destinationFolderPath);
    }
}

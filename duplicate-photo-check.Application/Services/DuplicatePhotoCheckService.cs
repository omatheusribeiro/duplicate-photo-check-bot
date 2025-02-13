using duplicate_photo_check.Application.Helpers;
using duplicate_photo_check.Application.Interfaces;
using duplicate_photo_check.Application.ViewModels;

namespace duplicate_photo_check.Application.Services
{
    public class DuplicatePhotoCheckService : IDuplicatePhotoCheckService
    {
        public DuplicatePhotoCheckService() { }

        public async Task<ResponseViewModel> Process(string sourceFolderPath, string destinationFolderPath)
        {
            try
            {
                if (!Directory.Exists(destinationFolderPath))
                {
                    Directory.CreateDirectory(destinationFolderPath);
                }

                var imageHashes = new Dictionary<string, List<string>>();

                foreach (var imagePath in Directory.GetFiles(sourceFolderPath, "*.*", SearchOption.AllDirectories))
                {
                    var imageHash = CalculateImageHash.CalculateImage(imagePath);

                    if (imageHashes.ContainsKey(imageHash))
                    {
                        foreach (var duplicateImagePath in imageHashes[imageHash])
                        {
                            var destinationPath = Path.Combine(destinationFolderPath, Path.GetFileName(duplicateImagePath));
                            if (File.Exists(duplicateImagePath))
                            {
                                File.Move(duplicateImagePath, destinationPath);
                                Console.WriteLine($"Duplicate moved to: {destinationPath}");
                            }
                        }
                    }
                    else
                    {
                        if (!imageHashes.ContainsKey(imageHash))
                        {
                            imageHashes[imageHash] = new List<string>();
                        }
                        imageHashes[imageHash].Add(imagePath);
                    }
                }

                return new ResponseViewModel { Message = "Request made successfully", Response = destinationFolderPath, Success = true };

            }
            catch (Exception ex)
            {
                return new ResponseViewModel { Message = ex.Message, Error = "There was an error checking duplicate photos!", Success = false };
            }
        }

        public async Task<ResponseViewModel> Delete()
        {
            try
            {
                string destinationFolderPath = "C:/duplicate-photos";

                if (!Directory.Exists(destinationFolderPath))
                {
                    return new ResponseViewModel { Message = "The current directory no longer exists on your PC.", Response = destinationFolderPath, Success = false };
                }

                try
                {
                    Directory.Delete(destinationFolderPath, true);
                    return new ResponseViewModel { Message = "Successfully deleted photos and directory.", Response = destinationFolderPath, Success = true };
                }
                catch (Exception ex)
                {
                    return new ResponseViewModel { Message = "Error deleting directory: {ex.Message}", Response = destinationFolderPath, Success = false };
                }
            }
            catch (Exception ex)
            {
                return new ResponseViewModel { Message = ex.Message, Error = "There was an error deleting the directory!", Success = false };
            }
        }
    }
}

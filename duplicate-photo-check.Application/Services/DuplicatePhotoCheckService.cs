using duplicate_photo_check.Application.Helpers;
using duplicate_photo_check.Application.Interfaces;
using duplicate_photo_check.Application.ViewModels;
using System.Security.Cryptography;

namespace duplicate_photo_check.Application.Services
{
    public class DuplicatePhotoCheckService : IDuplicatePhotoCheckService
    {
        public DuplicatePhotoCheckService() { }

        public async Task<ResponseViewModel> Process(string sourceFolderPath, string destinationFolderPath)
        {
            try
            {
                bool runBot = false;

                if (!Directory.Exists(destinationFolderPath))
                {
                    Directory.CreateDirectory(destinationFolderPath);
                }

                var imageHashes = new Dictionary<string, List<string>>();

                // Group files by hash
                foreach (var imagePath in Directory.GetFiles(sourceFolderPath, "*.*", SearchOption.AllDirectories))
                {
                    var imageHash = CalculateImageHash.CalculateImage(imagePath);

                    if (!imageHashes.ContainsKey(imageHash))
                    {
                        imageHashes[imageHash] = new List<string>();
                    }
                    imageHashes[imageHash].Add(imagePath);
                }

                // Process and move duplicates, keeping only one
                foreach (var hashGroup in imageHashes)
                {
                    var duplicateFiles = hashGroup.Value;

                    // If there is more than one duplicate file, move all except one
                    if (duplicateFiles.Count > 1)
                    {
                        for (int i = 1; i < duplicateFiles.Count; i++) // Starts at 1 to keep the first one
                        {
                            var duplicateImagePath = duplicateFiles[i];
                            var destinationPath = Path.Combine(destinationFolderPath, Path.GetFileName(duplicateImagePath));

                            if (File.Exists(duplicateImagePath))
                            {
                                string hash = CalculateImageHash.GenerateFileHash(duplicateImagePath);

                                string fileNameWithoutExt = Path.GetFileNameWithoutExtension(duplicateImagePath);
                                string extension = Path.GetExtension(duplicateImagePath);

                                string newFileName = $"{fileNameWithoutExt}_{hash}{extension}";
                                destinationPath = Path.Combine(destinationFolderPath, newFileName);

                                int counter = 1;
                                while (File.Exists(destinationPath))
                                {
                                    string numberedFileName = $"{fileNameWithoutExt}_{hash}_{counter}{extension}";
                                    destinationPath = Path.Combine(destinationFolderPath, numberedFileName);
                                    counter++;
                                }

                                File.Move(duplicateImagePath, destinationPath);

                                runBot = true;
                            }
                        }
                    }
                }

                return new ResponseViewModel { Message = "Request made successfully", Response = runBot ? destinationFolderPath : null, Success = true };
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

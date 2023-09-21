using System.Security.Cryptography;

namespace duplicate_photo_check.Application.Helpers
{
    public class CalculateImageHash
    {
        public static string CalculateImage(string imagePath)
        {
            using (var md5 = MD5.Create())
            {
                using (var stream = File.OpenRead(imagePath))
                {
                    var hashBytes = md5.ComputeHash(stream);
                    return BitConverter.ToString(hashBytes).Replace("-", "").ToLower();
                }
            }

        }
    }
}

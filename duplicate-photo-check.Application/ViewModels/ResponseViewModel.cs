namespace duplicate_photo_check.Application.ViewModels
{
    public class ResponseViewModel
    {
        public string Message { get; set; }
        public dynamic Response { get; set; }
        public bool Success { get; set; }
        public string Error { get; set; }
    }
}

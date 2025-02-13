using duplicate_photo_check.Application.Interfaces;
using duplicate_photo_check.Application.Services;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.EnableAnnotations();
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Duplicate Photo Check", Version = "v1" });
});

builder.Services.AddScoped<IDuplicatePhotoCheckService, DuplicatePhotoCheckService>();

var app = builder.Build();

// Check if the "duplicate-photos" folder exists, and if not, create it.
var duplicatedPhotosPath = @"C:\duplicate-photos"; // Absolute path to the folder
if (!Directory.Exists(duplicatedPhotosPath))
{
    Directory.CreateDirectory(duplicatedPhotosPath); // Create the folder if it doesn't exist
}

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Duplicate Photo Check"));
}

app.UseHttpsRedirection();

// Serve static files from a specific directory
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(duplicatedPhotosPath), // Using the variable for the path
    RequestPath = "/images"
});

// The rest of the configuration
app.UseRouting();

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);

app.UseAuthorization();

app.MapControllers();

app.Run();
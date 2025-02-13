using duplicate_photo_check.Application.Interfaces;
using duplicate_photo_check.Application.Services;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;

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

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Duplicate Photo Check"));
}

app.UseHttpsRedirection();

// Serve arquivos estáticos de um diretório específico
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(@"C:\duplicate-photos"),
    RequestPath = "/images"
});

// O restante da configuração
app.UseRouting();

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader()
);

app.UseAuthorization();

app.MapControllers();

app.Run();

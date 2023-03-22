using Microsoft.EntityFrameworkCore;
using HRApplication.Data;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using HRApplication.Services;
using HRApplication.Helpers;
using Microsoft.OpenApi.Models;
using HRApplication.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers(options =>
                    options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true)
                .AddNewtonsoftJson(options =>
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                );
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Northwind CRUD", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });

    option.OperationFilter<AuthResponsesOperationFilter>();
});


// Add Db context
var dbProvider = builder.Configuration.GetConnectionString("Provider");
builder.Services.AddDbContext<DataContext>(options =>
{
    if (dbProvider == "SqlServer")
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString("SqlServerConnectionString"), b =>
        {
            b.EnableRetryOnFailure(5, TimeSpan.FromSeconds(10), null);
        });
    }
});

var serviceProvider = builder.Services.BuildServiceProvider();
var logger = serviceProvider.GetRequiredService<ILogger<ControllerBase>>();
builder.Services.AddSingleton(typeof(ILogger), logger);

var config = new MapperConfiguration(cfg =>
{
    cfg.AddProfile(new MappingProfiles());
});

var mapper = config.CreateMapper();
builder.Services.AddSingleton(mapper);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(o =>
{
    o.TokenValidationParameters = new TokenValidationParameters
    {
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey
        (Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = false,
        ValidateIssuerSigningKey = true
    };
});
builder.Services.AddAuthorization();

// Declared services
builder.Services.AddScoped<DBSeeder>();
builder.Services.AddTransient<AuthService>();
builder.Services.AddTransient<EventService>();

var app = builder.Build();


app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseSeedDB();
}

app.MapControllers();

app.Run();

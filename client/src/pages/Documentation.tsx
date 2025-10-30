import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApiEndpointCard from "@/components/ApiEndpointCard";

export default function Documentation() {
  const currentWeatherParams = [
    {
      name: "city",
      type: "string",
      required: true,
      description: "City name (e.g., Seoul, Tokyo, New York)"
    },
    {
      name: "country",
      type: "string",
      required: false,
      description: "Two-letter country code (e.g., KR, JP, US)"
    },
    {
      name: "units",
      type: "string",
      required: false,
      description: "Temperature units: 'metric' (Celsius) or 'imperial' (Fahrenheit). Default: metric"
    }
  ];

  const currentWeatherResponse = `{
  "city": "Seoul",
  "country": "KR",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "temperature": 15.5,
  "feels_like": 14.2,
  "condition": "Partly Cloudy",
  "humidity": 65,
  "pressure": 1013,
  "wind_speed": 12.5,
  "wind_direction": "NW",
  "visibility": 10,
  "uv_index": 3,
  "timestamp": "2025-10-30T14:30:00Z"
}`;

  const forecastParams = [
    {
      name: "city",
      type: "string",
      required: true,
      description: "City name for weather forecast"
    },
    {
      name: "days",
      type: "integer",
      required: false,
      description: "Number of forecast days (1-7). Default: 3"
    },
    {
      name: "units",
      type: "string",
      required: false,
      description: "Temperature units: 'metric' or 'imperial'. Default: metric"
    }
  ];

  const forecastResponse = `{
  "city": "Seoul",
  "country": "KR",
  "forecast": [
    {
      "date": "2025-10-30",
      "temp_max": 18,
      "temp_min": 12,
      "condition": "Partly Cloudy",
      "precipitation_chance": 20,
      "humidity": 65
    },
    {
      "date": "2025-10-31",
      "temp_max": 20,
      "temp_min": 14,
      "condition": "Sunny",
      "precipitation_chance": 5,
      "humidity": 55
    }
  ]
}`;

  const coordinatesParams = [
    {
      name: "lat",
      type: "float",
      required: true,
      description: "Latitude coordinate (-90 to 90)"
    },
    {
      name: "lon",
      type: "float",
      required: true,
      description: "Longitude coordinate (-180 to 180)"
    },
    {
      name: "units",
      type: "string",
      required: false,
      description: "Temperature units: 'metric' or 'imperial'. Default: metric"
    }
  ];

  const coordinatesResponse = `{
  "latitude": 37.5665,
  "longitude": 126.9780,
  "location": "Seoul, KR",
  "temperature": 15.5,
  "condition": "Partly Cloudy",
  "humidity": 65,
  "wind_speed": 12.5,
  "timestamp": "2025-10-30T14:30:00Z"
}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-docs-title">
              API Documentation
            </h1>
            <p className="text-xl text-muted-foreground" data-testid="text-docs-subtitle">
              Complete reference for all WeatherAPI endpoints
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6" data-testid="text-section-authentication">
              Authentication
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 border">
              <p className="text-sm mb-4">
                All API requests require authentication using an API key. Include your API key in the Authorization header:
              </p>
              <code className="block bg-background p-3 rounded border font-mono text-sm" data-testid="text-auth-example">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6" data-testid="text-section-base-url">
              Base URL
            </h2>
            <div className="bg-muted/30 rounded-lg p-6 border">
              <code className="block font-mono text-sm" data-testid="text-base-url">
                https://api.weatherapi.com/v1
              </code>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6" data-testid="text-section-endpoints">
              Endpoints
            </h2>
            
            <ApiEndpointCard
              method="GET"
              endpoint="/v1/current"
              description="Get current weather data for a specific city. Returns real-time weather information including temperature, conditions, humidity, and wind data."
              parameters={currentWeatherParams}
              responseExample={currentWeatherResponse}
            />

            <ApiEndpointCard
              method="GET"
              endpoint="/v1/forecast"
              description="Get weather forecast for upcoming days. Returns daily forecast data including temperature ranges, conditions, and precipitation probability."
              parameters={forecastParams}
              responseExample={forecastResponse}
            />

            <ApiEndpointCard
              method="GET"
              endpoint="/v1/coordinates"
              description="Get weather data by geographic coordinates. Useful for mobile apps and location-based services that use GPS coordinates."
              parameters={coordinatesParams}
              responseExample={coordinatesResponse}
            />
          </div>

          <div className="mt-12 bg-primary/10 rounded-lg p-6 border border-primary/20">
            <h3 className="text-lg font-semibold mb-2" data-testid="text-rate-limits-title">
              Rate Limits
            </h3>
            <p className="text-sm text-muted-foreground">
              Free tier: 1,000 requests per day. Pro tier: 100,000 requests per day. 
              Rate limit headers are included in all API responses.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

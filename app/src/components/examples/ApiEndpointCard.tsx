import ApiEndpointCard from '../ApiEndpointCard';

export default function ApiEndpointCardExample() {
  const parameters = [
    {
      name: "city",
      type: "string",
      required: true,
      description: "City name for weather lookup"
    },
    {
      name: "units",
      type: "string",
      required: false,
      description: "Temperature units (metric or imperial)"
    }
  ];

  const responseExample = `{
  "city": "Seoul",
  "country": "KR",
  "temperature": 15.5,
  "condition": "Partly Cloudy",
  "humidity": 65,
  "wind_speed": 12.5
}`;

  return (
    <ApiEndpointCard
      method="GET"
      endpoint="https://api.weatherapi.com/v1/current"
      description="Get current weather data for a specific city"
      parameters={parameters}
      responseExample={responseExample}
    />
  );
}

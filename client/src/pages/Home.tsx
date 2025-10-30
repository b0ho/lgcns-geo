import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, Globe, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
  const quickStartCode = `curl -X GET "https://api.weatherapi.com/v1/current?city=Seoul&units=metric" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

  const responseCode = `{
  "city": "Seoul",
  "country": "KR",
  "temperature": 15.5,
  "condition": "Partly Cloudy",
  "humidity": 65,
  "wind_speed": 12.5,
  "timestamp": "2025-10-30T14:30:00Z"
}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-hero-title">
                Global Weather Data API
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="text-hero-subtitle">
                Access real-time weather information for any location worldwide. 
                Simple REST API with comprehensive documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs">
                  <Button size="lg" data-testid="button-get-started">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" data-testid="button-view-docs">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-features-title">
              Why Choose WeatherAPI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FeatureCard
                icon={Zap}
                title="Real-time Data"
                description="Get up-to-date weather information updated every minute from thousands of weather stations worldwide."
              />
              <FeatureCard
                icon={Globe}
                title="Global Coverage"
                description="Access weather data for any location on Earth with comprehensive city and coordinate-based lookups."
              />
              <FeatureCard
                icon={Shield}
                title="Reliable & Secure"
                description="Enterprise-grade infrastructure with 99.9% uptime SLA and secure HTTPS connections."
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8" data-testid="text-quickstart-title">
              Quick Start
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">1. Make your first request</h3>
                <CodeBlock code={quickStartCode} language="bash" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">2. Get the response</h3>
                <CodeBlock code={responseCode} language="json" />
              </div>
              <div className="mt-4">
                <Link href="/docs">
                  <Button data-testid="button-explore-api">
                    Explore Full API Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

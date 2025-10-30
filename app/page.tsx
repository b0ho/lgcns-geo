import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Globe, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import CodeBlock from "@/components/CodeBlock";

export default function Home() {
  const quickStartCode = `curl -X GET "https://api.lgcns.com/v1/employees?department=IT&limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY"`;

  const responseCode = `{
  "total": 245,
  "page": 1,
  "limit": 10,
  "employees": [
    {
      "id": "E2024001",
      "name": "김철수",
      "department": "IT",
      "position": "Senior Developer",
      "email": "chulsoo.kim@lgcns.com",
      "hire_date": "2020-03-15"
    }
  ]
}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-hero-title">
                LG CNS Enterprise API
              </h1>
              <p className="text-xl text-muted-foreground mb-8" data-testid="text-hero-subtitle">
                Access comprehensive company data including employee directory, project information, 
                and organizational structure through our secure REST API.
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
              Why Choose LG CNS API?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FeatureCard
                icon={Zap}
                title="Real-time Updates"
                description="Access the latest employee and project data synchronized in real-time across all systems."
              />
              <FeatureCard
                icon={Globe}
                title="Comprehensive Data"
                description="Complete access to organizational structure, employee profiles, project details, and performance metrics."
              />
              <FeatureCard
                icon={Shield}
                title="Enterprise Security"
                description="Bank-level encryption with role-based access control and comprehensive audit logging."
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
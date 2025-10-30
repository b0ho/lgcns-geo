import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApiEndpointCard from "@/components/ApiEndpointCard";

export default function Documentation() {
  const employeesParams = [
    {
      name: "department",
      type: "string",
      required: false,
      description: "Filter by department (e.g., IT, HR, Finance, Marketing)"
    },
    {
      name: "position",
      type: "string",
      required: false,
      description: "Filter by position level (e.g., Junior, Senior, Manager, Director)"
    },
    {
      name: "page",
      type: "integer",
      required: false,
      description: "Page number for pagination. Default: 1"
    },
    {
      name: "limit",
      type: "integer",
      required: false,
      description: "Number of results per page (max 100). Default: 20"
    }
  ];

  const employeesResponse = `{
  "total": 245,
  "page": 1,
  "limit": 20,
  "employees": [
    {
      "id": "E2024001",
      "name": "김철수",
      "department": "IT",
      "position": "Senior Developer",
      "email": "chulsoo.kim@lgcns.com",
      "phone": "+82-10-1234-5678",
      "hire_date": "2020-03-15",
      "location": "Seoul HQ"
    },
    {
      "id": "E2024002",
      "name": "박영희",
      "department": "IT",
      "position": "DevOps Engineer",
      "email": "younghee.park@lgcns.com",
      "phone": "+82-10-2345-6789",
      "hire_date": "2021-07-20",
      "location": "Seoul HQ"
    }
  ]
}`;

  const projectsParams = [
    {
      name: "status",
      type: "string",
      required: false,
      description: "Filter by project status: 'active', 'completed', 'on-hold'. Default: all"
    },
    {
      name: "client",
      type: "string",
      required: false,
      description: "Filter by client company name"
    },
    {
      name: "sort",
      type: "string",
      required: false,
      description: "Sort by field: 'start_date', 'budget', 'name'. Default: start_date"
    }
  ];

  const projectsResponse = `{
  "total": 87,
  "projects": [
    {
      "id": "PRJ-2024-001",
      "name": "Digital Transformation Platform",
      "client": "Samsung Electronics",
      "status": "active",
      "start_date": "2024-01-15",
      "end_date": "2025-06-30",
      "budget": 5000000000,
      "team_size": 25,
      "manager": {
        "id": "E2019045",
        "name": "이현우"
      },
      "technologies": ["React", "Node.js", "AWS", "Kubernetes"]
    },
    {
      "id": "PRJ-2024-002",
      "name": "AI-Powered Analytics System",
      "client": "Hyundai Motor",
      "status": "active",
      "start_date": "2024-03-01",
      "end_date": "2024-12-31",
      "budget": 3500000000,
      "team_size": 18,
      "manager": {
        "id": "E2018123",
        "name": "최지영"
      },
      "technologies": ["Python", "TensorFlow", "Azure", "Docker"]
    }
  ]
}`;

  const employeeDetailParams = [
    {
      name: "id",
      type: "string",
      required: true,
      description: "Employee ID (format: E followed by 7 digits)"
    }
  ];

  const employeeDetailResponse = `{
  "id": "E2024001",
  "name": "김철수",
  "department": "IT",
  "position": "Senior Developer",
  "email": "chulsoo.kim@lgcns.com",
  "phone": "+82-10-1234-5678",
  "hire_date": "2020-03-15",
  "location": "Seoul HQ",
  "manager": {
    "id": "E2018050",
    "name": "정민수"
  },
  "skills": ["Java", "Spring Boot", "Kubernetes", "AWS"],
  "current_projects": [
    {
      "id": "PRJ-2024-001",
      "name": "Digital Transformation Platform",
      "role": "Backend Lead"
    }
  ],
  "performance_rating": 4.5,
  "certifications": [
    "AWS Solutions Architect",
    "Certified Kubernetes Administrator"
  ]
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
              Complete reference for all LG CNS API endpoints
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
                https://api.lgcns.com/v1
              </code>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6" data-testid="text-section-endpoints">
              Endpoints
            </h2>
            
            <ApiEndpointCard
              method="GET"
              endpoint="/v1/employees"
              description="Get a paginated list of employees with optional filtering by department and position. Returns comprehensive employee information including contact details and hire date."
              parameters={employeesParams}
              responseExample={employeesResponse}
            />

            <ApiEndpointCard
              method="GET"
              endpoint="/v1/employees/:id"
              description="Get detailed information for a specific employee including their skills, current projects, performance ratings, and certifications."
              parameters={employeeDetailParams}
              responseExample={employeeDetailResponse}
            />

            <ApiEndpointCard
              method="GET"
              endpoint="/v1/projects"
              description="Get a list of all company projects with filtering options. Returns project details including client information, timeline, budget, team composition, and technology stack."
              parameters={projectsParams}
              responseExample={projectsResponse}
            />
          </div>

          <div className="mt-12 bg-primary/10 rounded-lg p-6 border border-primary/20">
            <h3 className="text-lg font-semibold mb-2" data-testid="text-rate-limits-title">
              Rate Limits
            </h3>
            <p className="text-sm text-muted-foreground">
              Standard tier: 1,000 requests per hour. Enterprise tier: 10,000 requests per hour. 
              Contact your account manager for custom rate limits.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
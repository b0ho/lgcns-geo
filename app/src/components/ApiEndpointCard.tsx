"use client";
import { Card } from "@/components/ui/card";
import MethodBadge from "./MethodBadge";
import CodeBlock from "./CodeBlock";

interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface ApiEndpointCardProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  description: string;
  parameters: Parameter[];
  responseExample: string;
}

export default function ApiEndpointCard({
  method,
  endpoint,
  description,
  parameters,
  responseExample,
}: ApiEndpointCardProps) {
  return (
    <Card className="p-6 mb-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <MethodBadge method={method} />
          <code className="font-mono text-base font-medium" data-testid="text-endpoint">
            {endpoint}
          </code>
        </div>

        <p className="text-sm text-muted-foreground" data-testid="text-endpoint-description">
          {description}
        </p>

        <div>
          <h4 className="text-lg font-semibold mb-4">Parameters</h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold">Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Required</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param, index) => (
                  <tr key={index} className="border-b" data-testid={`row-param-${param.name}`}>
                    <td className="py-3 px-4 font-mono text-sm" data-testid="text-param-name">
                      {param.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground" data-testid="text-param-type">
                      {param.type}
                    </td>
                    <td className="py-3 px-4 text-sm" data-testid="text-param-required">
                      {param.required ? "Yes" : "No"}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground" data-testid="text-param-description">
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Response Example</h4>
          <CodeBlock code={responseExample} language="json" />
        </div>
      </div>
    </Card>
  );
}

"use client";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6 hover-elevate">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10" data-testid="icon-feature">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold" data-testid="text-feature-title">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid="text-feature-description">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

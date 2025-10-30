import { Badge } from "@/components/ui/badge";

interface MethodBadgeProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
}

export default function MethodBadge({ method }: MethodBadgeProps) {
  const variants = {
    GET: "bg-primary text-primary-foreground border-primary-border",
    POST: "bg-accent text-accent-foreground border-accent-border",
    PUT: "bg-secondary text-secondary-foreground border-secondary-border",
    DELETE: "bg-destructive text-destructive-foreground border-destructive-border",
  };

  return (
    <Badge 
      className={`${variants[method]} px-3 py-1 text-xs font-semibold uppercase rounded-full border`}
      data-testid={`badge-method-${method.toLowerCase()}`}
    >
      {method}
    </Badge>
  );
}

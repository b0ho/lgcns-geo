import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold mb-4" data-testid="text-404">404</h1>
      <p className="text-xl text-muted-foreground mb-8" data-testid="text-not-found">
        Page not found
      </p>
      <Link href="/">
        <Button data-testid="button-home">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

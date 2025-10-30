import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2025 LG CNS. All rights reserved.
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/documentation" data-testid="link-footer-docs">
              <span className="text-muted-foreground hover:text-foreground transition-colors">Documentation</span>
            </Link>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-status">
              API Status
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-support">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
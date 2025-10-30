import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "json" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg border bg-muted/30">
      <div className="flex items-center justify-between border-b px-4 py-2 bg-muted/50">
        <span className="text-xs font-mono text-muted-foreground uppercase" data-testid="text-language">
          {language}
        </span>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleCopy}
          className="h-8 w-8"
          data-testid="button-copy-code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm font-mono" data-testid="text-code-content">
          {code}
        </code>
      </pre>
    </div>
  );
}

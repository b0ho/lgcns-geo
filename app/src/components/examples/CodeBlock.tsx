import CodeBlock from '../CodeBlock';

export default function CodeBlockExample() {
  const sampleCode = `{
  "location": "Seoul",
  "temperature": 15,
  "condition": "Cloudy",
  "humidity": 65
}`;

  return <CodeBlock code={sampleCode} language="json" />;
}

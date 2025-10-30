import FeatureCard from '../FeatureCard';
import { Zap } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <FeatureCard 
      icon={Zap}
      title="Real-time Data"
      description="Get up-to-date weather information updated every minute from thousands of weather stations worldwide."
    />
  );
}

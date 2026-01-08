import { LucideIcon } from 'lucide-react';
import Card from './Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = false
}: FeatureCardProps) {
  return (
    <Card hover gradient={gradient} className="text-center group">
      <div className="relative">
        {/* Icon container with gradient background */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Glow effect on hover */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary-400 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

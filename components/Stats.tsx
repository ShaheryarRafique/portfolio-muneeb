import { Users, Award, Globe, BookOpen } from 'lucide-react';

interface Stat {
  icon: typeof Users;
  value: string;
  label: string;
}

const defaultStats: Stat[] = [
  {
    icon: BookOpen,
    value: '10+',
    label: 'Years Teaching',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Students Worldwide',
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Reached',
  },
  {
    icon: Award,
    value: '100%',
    label: 'Dedication',
  },
];

interface StatsProps {
  stats?: Stat[];
}

export default function Stats({ stats = defaultStats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`text-center animate-fade-in-scale delay-${(index + 1) * 100}`}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-4 shadow-lg">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { classNames } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
  glass = false,
  gradient = false
}: CardProps) {
  return (
    <div
      className={classNames(
        'rounded-2xl p-6 transition-all duration-300',
        glass
          ? 'glass shadow-lg'
          : gradient
          ? 'bg-gradient-to-br from-white to-primary-50 shadow-lg border border-primary-100'
          : 'bg-white shadow-md border border-gray-100',
        hover && 'hover:shadow-xl hover:-translate-y-2 hover:border-primary-200 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}

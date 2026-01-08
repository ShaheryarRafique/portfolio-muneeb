import Card from './Card';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image?: string;
  text: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={testimonial.id} glass hover className={`animate-fade-in delay-${(index + 1) * 100}`}>
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
            ))}
          </div>

          {/* Testimonial text */}
          <p className="text-gray-700 leading-relaxed mb-6 italic">
            "{testimonial.text}"
          </p>

          {/* Student info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.location}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

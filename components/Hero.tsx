import Button from './Button';
import { BookOpen, Mic2, Bell } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  imageSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  imageSrc = '/teacher-photo.jpg',
}: HeroProps) {
  return (
    <div className="relative overflow-hidden gradient-bg pt-16 md:pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-200 text-sm font-medium text-primary-700 animate-fade-in-scale">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Accepting New Students
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              {title.split(' ').map((word, index) => {
                // Highlight "Qur'an" with gradient
                if (word.toLowerCase().includes('qur')) {
                  return (
                    <span key={index} className="gradient-text">
                      {word}{' '}
                    </span>
                  );
                }
                return <span key={index}>{word} </span>;
              })}
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-lg md:text-xl text-gray-700 font-medium animate-fade-in delay-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <span>Tajwīd</span>
              </div>
              <span className="text-accent-500">•</span>
              <div className="flex items-center gap-2">
                <Mic2 className="w-5 h-5 text-primary-600" />
                <span>Maqāmāt</span>
              </div>
              <span className="text-accent-500">•</span>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary-600" />
                <span>Adhān</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-200">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
              <Button href="/apply" size="lg" variant="primary" className="shadow-xl shadow-primary-600/20 hover:shadow-2xl hover:shadow-primary-600/30 transition-all duration-300">
                {primaryCta}
              </Button>
              <Button href="/programs" size="lg" variant="outline">
                {secondaryCta}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-in delay-400">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-700">10+</div>
                <div className="text-sm text-gray-600">Years Teaching</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-700">500+</div>
                <div className="text-sm text-gray-600">Students Taught</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-700">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative animate-fade-in-scale delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={imageSrc}
                alt="Hafiz Muneeb - Qur'an Teacher"
                className="w-full aspect-[4/5] object-cover"
              />

              {/* Decorative frame */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl max-w-xs hidden md:block">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Authentic Tajwīd</div>
                  <div className="text-sm text-gray-600">Traditional methods, modern approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

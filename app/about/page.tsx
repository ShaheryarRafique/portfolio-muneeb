import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { aboutContent } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';
import { BookOpen, Target, Lightbulb, Heart, Shield, Users } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'About Hafiz Muneeb',
  description: 'Learn about Hafiz Muneeb (Ustaaz Muneeb), his mission, teaching approach, and dedication to authentic Qur\'an education with Tajwīd and Maqāmāt.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* Modern Hero Header */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50/50 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
            <BookOpen className="w-4 h-4" />
            About the Teacher
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
            {aboutContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
            {aboutContent.subtitle}
          </p>
        </div>
      </div>

      {/* Introduction */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.intro}
            </p>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-dark border-primary-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {aboutContent.mission.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {aboutContent.mission.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Teaching Approach */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {aboutContent.approach.title}
          </h2>
          <div className="space-y-4">
            {aboutContent.approach.points.map((point, index) => (
              <Card key={index} hover className="border-l-4 border-primary-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-700 font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1.5">{point}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.values.map((value, index) => {
              const icons = [Shield, Heart, Lightbulb, Users];
              const Icon = icons[index % icons.length];
              return (
                <Card key={index} hover className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="text-center">
        <div className="max-w-3xl mx-auto">
          <Card className="glass-dark border-primary-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Begin Your Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join students from around the world learning the Qur'an with authenticity and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/programs" size="lg" variant="outline">
                View Programs
              </Button>
              <Button href="/apply" size="lg" variant="primary" className="shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40">
                Apply to Learn
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

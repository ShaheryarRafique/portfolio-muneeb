import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { aboutContent } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'About Hafiz Muneeb',
  description: 'Learn about Hafiz Muneeb (Ustaaz Muneeb), his mission, teaching approach, and dedication to authentic Qur\'an education with Tajwīd and Maqāmāt.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <Section background="primary" className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {aboutContent.title}
        </h1>
        <p className="text-xl text-primary-700 font-medium">
          {aboutContent.subtitle}
        </p>
      </Section>

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
          <Card>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {aboutContent.mission.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.mission.description}
            </p>
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
              <Card key={index}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-700 font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">{point}</p>
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
            {aboutContent.values.map((value, index) => (
              <Card key={index} hover>
                <h3 className="text-xl font-bold text-primary-700 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="text-center">
        <div className="max-w-3xl mx-auto">
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
            <Button href="/apply" size="lg" variant="primary">
              Apply to Learn
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

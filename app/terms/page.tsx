import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { termsOfService } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for Hafiz Muneeb Qur\'an Learning programs. Read the terms and conditions for applying and participating in our courses.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <Section background="primary" className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {termsOfService.title}
        </h1>
        <p className="text-lg text-gray-700">
          Last Updated: {termsOfService.lastUpdated}
        </p>
      </Section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-8">
          {termsOfService.sections.map((section, index) => (
            <Card key={index}>
              <h2 className="text-2xl font-bold text-primary-700 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </Card>
          ))}

          <Card className="bg-primary-50 border-primary-200">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-700 leading-relaxed">
                  By submitting an application or participating in our programs, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not apply or use our services.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

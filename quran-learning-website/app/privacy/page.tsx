import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { privacyPolicy } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Hafiz Muneeb Qur\'an Learning. Learn how we collect, use, and protect your personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <Section background="primary" className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {privacyPolicy.title}
        </h1>
        <p className="text-lg text-gray-700">
          Last Updated: {privacyPolicy.lastUpdated}
        </p>
      </Section>

      {/* Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto space-y-8">
          {privacyPolicy.sections.map((section, index) => (
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Questions About Privacy?</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about our privacy practices or how we handle your data, please contact us through our contact page. We're committed to transparency and protecting your information.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

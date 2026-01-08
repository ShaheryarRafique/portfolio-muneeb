import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { applyPageContent, siteConfig } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Apply to Learn',
  description: 'Apply to join our Qur\'an learning programs. Learn Tajwīd, Maqāmāt, and Adhān with Hafiz Muneeb. Fill out the application form to get started.',
  path: '/apply',
});

export default function ApplyPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {applyPageContent.title}
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          {applyPageContent.subtitle}
        </p>
      </Section>

      {/* Intro */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {applyPageContent.intro}
          </p>
        </div>
      </Section>

      {/* Checklist */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {applyPageContent.checklistTitle}
          </h2>
          <div className="space-y-4">
            {applyPageContent.checklist.map((item, index) => (
              <Card key={index}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Application CTA */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200">
            <div className="text-center">
              <div className="text-5xl mb-6">📝</div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Apply?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Click the button below to open the application form. Please fill it out completely and honestly. We'll review your application carefully.
              </p>
              <Button
                href={siteConfig.googleFormUrl}
                external
                size="lg"
                variant="primary"
                className="text-lg px-10 py-5"
              >
                {applyPageContent.ctaButton}
              </Button>
              <p className="text-sm text-gray-600 mt-4 italic">
                {applyPageContent.note}
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* After You Apply */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {applyPageContent.confirmationMessage.title}
            </h2>
            <ul className="space-y-3">
              {applyPageContent.confirmationMessage.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Important Note */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Important Reminder</h3>
                <p className="text-gray-700 leading-relaxed">
                  Due to the high volume of applications and teaching commitments, please do not send follow-up messages, emails, or calls asking about your application status. Only shortlisted candidates will be contacted In shā' Allāh. Your patience and understanding are greatly appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="gray" className="text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            May Allāh accept your efforts and grant you success in learning His Book.
          </h3>
          <Button
            href={siteConfig.googleFormUrl}
            external
            size="lg"
            variant="primary"
          >
            Open Application Form
          </Button>
        </div>
      </Section>
    </>
  );
}

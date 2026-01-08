import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { applyPageContent, siteConfig } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';
import { CheckCircle2, Send, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Apply to Learn',
  description: 'Apply to join our Qur\'an learning programs. Learn Tajwīd, Maqāmāt, and Adhān with Hafiz Muneeb. Fill out the application form to get started.',
  path: '/apply',
});

export default function ApplyPage() {
  return (
    <>
      {/* Modern Hero */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50/50 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            Applications Open
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
            {applyPageContent.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
            {applyPageContent.intro}
          </p>
        </div>
      </div>

      {/* Requirements Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {applyPageContent.checklistTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applyPageContent.checklist.map((item, index) => (
              <Card key={index} hover className="border-l-4 border-primary-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Main CTA Section */}
      <Section background="gray" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-dark rounded-3xl p-8 md:p-12 shadow-xl border border-primary-200">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Fill out our application form to take the first step toward mastering Qur'an recitation with authentic Tajwīd and beautiful Maqāmāt.
            </p>
            <Button
              href={siteConfig.googleFormUrl}
              external
              size="lg"
              variant="primary"
              className="text-lg px-12 py-6 shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40"
            >
              {applyPageContent.ctaButton}
            </Button>
            <p className="text-sm text-gray-600 mt-6 italic">
              {applyPageContent.note}
            </p>
          </div>
        </div>
      </Section>

      {/* After You Apply - Process */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {applyPageContent.confirmationMessage.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
                <Send className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. Submit</h3>
              <p className="text-gray-600 text-sm">
                Complete the application form with your details and learning goals
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Review</h3>
              <p className="text-gray-600 text-sm">
                We carefully review each application. This may take some time
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Contact</h3>
              <p className="text-gray-600 text-sm">
                Shortlisted candidates will be contacted In shā' Allāh
              </p>
            </Card>
          </div>

          <Card className="mt-12 bg-primary-50 border-primary-200">
            <h3 className="font-bold text-gray-900 mb-4 text-center">Important Guidelines</h3>
            <ul className="space-y-3">
              {applyPageContent.confirmationMessage.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Important Reminder */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <Card className="border-l-4 border-primary-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">No Follow-Up Required</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Please do not send follow-up messages, emails, or calls asking about your application status. All communication happens through official channels after shortlisting.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Your patience and understanding are greatly appreciated as we review each application carefully.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Final Blessing */}
      <Section background="white" className="text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 leading-relaxed">
            May Allāh accept your efforts and grant you success in learning His Book.
          </p>
          <Button
            href={siteConfig.googleFormUrl}
            external
            size="lg"
            variant="primary"
            className="shadow-xl"
          >
            Open Application Form
          </Button>
        </div>
      </Section>
    </>
  );
}

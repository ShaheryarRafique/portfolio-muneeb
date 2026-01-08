import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { programs } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Our Programs',
  description: 'Explore our Qur\'an learning programs: Tajwīd Mastery, Maqāmāt & Melodic Recitation, and Adhān Training. Comprehensive online learning for students worldwide.',
  path: '/programs',
});

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <Section background="primary" className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Programs
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Comprehensive Qur'an learning programs designed to build authentic skills in Tajwīd, Maqāmāt, and Adhān
        </p>
      </Section>

      {/* Programs */}
      <Section background="white">
        <div className="space-y-12">
          {programs.map((program, index) => (
            <Card key={program.id} className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Program Header */}
                <div className="lg:col-span-3 border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-700">
                      {program.title}
                    </h2>
                    <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Program {program.id}
                    </span>
                  </div>
                </div>

                {/* Who It's For */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Who It's For
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {program.whoItsFor}
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    What You'll Learn
                  </h3>
                  <ul className="space-y-2">
                    {program.whatYouLearn.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="lg:col-span-3 bg-gray-50 -mx-6 -mb-6 px-6 py-6 mt-6 rounded-b-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Requirements
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Additional Info */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Program Details
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Global Learning</h3>
                <p>All programs are conducted online, allowing students from anywhere in the world to participate. Sessions are scheduled based on mutual availability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Instruction</h3>
                <p>Each student receives individual attention and customized feedback. We adapt our teaching to your pace and learning style while maintaining high standards.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Long-Term Commitment</h3>
                <p>Mastering Qur'an recitation is a journey, not a destination. Be prepared for sustained effort, regular practice, and patience as you develop your skills.</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Begin?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Submit your application and take the first step toward mastering Qur'an recitation.
          </p>
          <Button href="/apply" size="lg" variant="primary">
            Apply to Learn
          </Button>
        </div>
      </Section>
    </>
  );
}

import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { programs } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';
import { BookOpen, Users, CheckCircle2, ArrowRight, GraduationCap } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Our Programs',
  description: 'Explore our Qur\'an learning programs: Tajwīd Mastery, Maqāmāt & Melodic Recitation, and Adhān Training. Comprehensive online learning for students worldwide.',
  path: '/programs',
});

export default function ProgramsPage() {
  return (
    <>
      {/* Modern Hero Header */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50/50 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
            <GraduationCap className="w-4 h-4" />
            Learning Programs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200">
            Comprehensive Qur'an learning programs designed to build authentic skills in Tajwīd, Maqāmāt, and Adhān
          </p>
        </div>
      </div>

      {/* Programs */}
      <Section background="white">
        <div className="space-y-12">
          {programs.map((program, index) => (
            <Card key={program.id} className="max-w-5xl mx-auto hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Program Header */}
                <div className="lg:col-span-3 border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
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
                    <Users className="w-5 h-5 mr-2 text-primary-600" />
                    Who It's For
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {program.whoItsFor}
                  </p>
                </div>

                {/* What You'll Learn */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-primary-600" />
                    What You'll Learn
                  </h3>
                  <ul className="space-y-2">
                    {program.whatYouLearn.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="lg:col-span-3 bg-primary-50 -mx-6 -mb-6 px-6 py-6 mt-6 rounded-b-lg border-t border-primary-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-primary-600" />
                    Requirements
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
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
          <Card className="glass-dark border-primary-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Begin?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Submit your application and take the first step toward mastering Qur'an recitation.
            </p>
            <Button href="/apply" size="lg" variant="primary" className="shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40">
              Apply to Learn
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}

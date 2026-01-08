import Button from '@/components/Button';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import { heroSection, whatWeTeach, expectations, faqs, testimonials } from '@/lib/content';
import { BookOpen, Mic2, Bell, CheckCircle2 } from 'lucide-react';

// Map icons to features
const featureIcons = {
  1: BookOpen,
  2: Mic2,
  3: Bell,
};

export default function Home() {
  return (
    <>
      {/* Modern Hero Section */}
      <Hero
        title={heroSection.title}
        subtitle={heroSection.subtitle}
        description={heroSection.description}
        primaryCta={heroSection.primaryCta}
        secondaryCta={heroSection.secondaryCta}
      />

      {/* What We Teach Section with Icons */}
      <Section background="white" id="what-we-teach" className="relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="gradient-text">Teach</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive Qur'an education combining traditional knowledge with personalized instruction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {whatWeTeach.map((program, index) => (
            <div key={program.id} className={`animate-fade-in delay-${(index + 1) * 100}`}>
              <FeatureCard
                icon={featureIcons[program.id as keyof typeof featureIcons]}
                title={program.title}
                description={program.description}
                gradient={index === 1}
              />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in delay-400">
          <Button href="/programs" size="lg" variant="primary" className="shadow-lg">
            Explore Our Programs
          </Button>
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="gray" className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Students <span className="gradient-text">Worldwide</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a global community of learners dedicated to mastering Qur'an recitation
            </p>
          </div>

          <Stats />
        </div>
      </Section>

      {/* Expectations Section with Modern Cards */}
      <Section background="white" id="expectations">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {expectations.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Understanding our approach and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expectations.items.map((item, index) => (
            <div
              key={index}
              className={`group animate-fade-in delay-${(index + 1) * 100}`}
            >
              <div className="h-full rounded-2xl bg-gradient-to-br from-white to-primary-50 p-8 border border-primary-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-700 mb-3 group-hover:text-primary-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="gray" id="testimonials" className="relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Student <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from students who have transformed their Qur'an recitation
          </p>
        </div>

        <Testimonials testimonials={testimonials} />
      </Section>

      {/* FAQ Section */}
      <Section background="white" id="faq">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about our programs and application process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <FAQ items={faqs} />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto glass-dark rounded-3xl p-12 shadow-xl animate-fade-in-scale">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Join hundreds of students worldwide learning authentic Qur'an recitation with dedication and sincerity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" size="lg" variant="primary" className="shadow-xl">
                Apply to Learn
              </Button>
              <Button href="/programs" size="lg" variant="outline">
                View Programs
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

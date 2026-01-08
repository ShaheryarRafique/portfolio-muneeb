import Button from '@/components/Button';
import Card from '@/components/Card';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';
import { heroSection, whatWeTeach, expectations, faqs } from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {heroSection.title}
          </h1>
          <p className="text-xl md:text-2xl text-accent-600 font-medium mb-6">
            {heroSection.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            {heroSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/apply" size="lg" variant="primary">
              {heroSection.primaryCta}
            </Button>
            <Button href="/programs" size="lg" variant="outline">
              {heroSection.secondaryCta}
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Teach Section */}
      <Section background="gray" id="what-we-teach">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Teach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Qur'an education combining traditional knowledge with personalized instruction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whatWeTeach.map((program) => (
            <Card key={program.id} hover>
              <div className="text-center">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/programs" size="md" variant="primary">
            Explore Our Programs
          </Button>
        </div>
      </Section>

      {/* Expectations Section */}
      <Section background="white" id="expectations">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {expectations.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding our approach and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {expectations.items.map((item, index) => (
            <Card key={index}>
              <h3 className="text-lg font-bold text-primary-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about our programs and application process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} />
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-700 mb-6 font-medium">
            Ready to start your Qur'an learning journey?
          </p>
          <Button href="/apply" size="lg" variant="primary">
            Apply to Learn
          </Button>
        </div>
      </Section>
    </>
  );
}

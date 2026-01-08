import { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { contactInfo, siteConfig } from '@/lib/content';
import { generateMetadata } from '@/lib/metadata';
import { Mail, MessageCircle, Clock, AlertCircle, Instagram, X } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Hafiz Muneeb for Qur\'an learning inquiries. Contact information for shortlisted students and important communications.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Modern Hero Header */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50/50 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
            {contactInfo.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
            {contactInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Important Note */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-primary-50 border-l-4 border-primary-500 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  {contactInfo.note}
                </p>
              </div>
            </div>
          </Card>

          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            If you want to join our programs, please use the application form. The contact details below are for shortlisted students and essential communications only.
          </p>

          <div className="text-center mb-8">
            <Button href="/apply" size="lg" variant="primary">
              Apply via Form
            </Button>
          </div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <Card hover className="group">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  {contactInfo.email}
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  For shortlisted students only
                </p>
              </div>
            </Card>

            {/* WhatsApp */}
            <Card hover className="group">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <MessageCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 transition-colors font-medium"
                >
                  {contactInfo.whatsapp}
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Text only, no calls please
                </p>
              </div>
            </Card>
          </div>

          {/* Warning Message */}
          <Card className="mt-6 bg-gray-50 border-l-4 border-gray-400">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Please Do Not:</h3>
                <p className="text-gray-700 leading-relaxed">
                  {contactInfo.warningMessage}
                </p>
              </div>
            </div>
          </Card>

          {/* Office Hours */}
          <Card className="mt-6 border-primary-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Response Times</h3>
                <p className="text-gray-600">
                  {contactInfo.officeHours}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Social */}
      <Section background="white" className="text-center">
        <div className="max-w-2xl mx-auto">
          <Card className="glass-dark border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Follow on Instagram
            </h2>
            <p className="text-gray-600 mb-6">
              Stay updated with recitation tips, announcements, and insights from Hafiz Muneeb.
            </p>
            <Button href={siteConfig.instagram} external variant="secondary" className="inline-flex items-center">
              <Instagram className="w-5 h-5 mr-2" />
              Visit Instagram
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA to Apply */}
      <Section background="gray" className="text-center">
        <div className="max-w-2xl mx-auto">
          <Card className="glass-dark border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Learn?
            </h2>
            <p className="text-gray-600 mb-6">
              The best way to get in touch is to submit your application through our official form.
            </p>
            <Button href="/apply" size="lg" variant="primary" className="shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40">
              Submit Application
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
}

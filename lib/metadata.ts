import { Metadata } from 'next';
import { siteConfig } from './content';

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  image = '/og.png',
}: PageMetadata): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title === siteConfig.siteName
    ? title
    : `${title} | ${siteConfig.siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'Qur\'an learning',
      'Tajwīd',
      'Maqāmāt',
      'Adhān training',
      'Qur\'an recitation',
      'Hafiz Muneeb',
      'Ustaaz Muneeb',
      'Learn Qur\'an online',
      'Islamic education',
      'Qirā\'āt',
    ],
    authors: [{ name: 'Hafiz Muneeb' }],
    creator: 'Hafiz Muneeb',
    publisher: 'Hafiz Muneeb',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.siteName,
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo.png`,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: siteConfig.email,
          contactType: 'Customer Service',
          availableLanguage: ['English', 'Arabic'],
        },
        sameAs: [siteConfig.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.siteName,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': `${siteConfig.url}/#educational`,
        name: siteConfig.siteName,
        description: siteConfig.description,
        url: siteConfig.url,
        areaServed: 'Worldwide',
        teaches: [
          'Qur\'an Tajwīd',
          'Qur\'an Recitation',
          'Maqāmāt',
          'Adhān Training',
          'Qirā\'āt',
        ],
      },
    ],
  };
}

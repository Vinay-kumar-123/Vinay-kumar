import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://vinaykumar.dev'),
  title: {
    default: 'Vinay Kumar — Software Engineer & Product Builder',
    template: '%s | Vinay Kumar',
  },
  description:
    'Vinay Kumar is a software engineer and B.Tech CSE student at Haldia Institute of Technology. Builds full-stack web apps, AI tools, and SaaS products.',
  keywords: [
    'Vinay Kumar',
    'software engineer',
    'full-stack developer',
    'React',
    'Next.js',
    'AI',
    'machine learning',
    'Python',
    'JavaScript',
    'portfolio',
    'Haldia Institute of Technology',
  ],
  authors: [{ name: 'Vinay Kumar' }],
  creator: 'Vinay Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vinaykumar.dev',
    title: 'Vinay Kumar — Software Engineer & Product Builder',
    description:
      'Full-stack developer and AI enthusiast building real-world software products.',
    siteName: 'Vinay Kumar Portfolio',
    images: [
      {
        url: '/images/photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Vinay Kumar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinay Kumar — Software Engineer & Product Builder',
    description:
      'Full-stack developer and AI enthusiast building real-world software products.',
    images: ['/images/photo.jpg'],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-gray-950 text-gray-100 antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

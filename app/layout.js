// Import necessary dependencies
import React from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Provider from '../components/Provider';

// Initialize the Inter font subset
// const inter = Inter({ subsets: ['latin'] });

// Define metadata
const metadata = {
  title: '𝕏 Post Subject Generator - Tweet Generator',
  description: 'Create your own unique content ideas effortlessly with the 𝕏 (formerly Twitter) Post Subject Generator. Seamlessly generate tweet suggestions spanning a diverse range of themes, content types, and engaging calls to action. Elevate your social media prowess with this innovative tool.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/public/favicon/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/public/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/public/favicon/apple-touch-icon.png',
    },
  ],
};

// Define the RootLayout component
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="tweet generator, post generator, content suggestion generator, social media tool, content ideas, tweet ideas, social media marketing, content creation, engagement strategy, tweet suggestions, post inspiration, content planning, social media management"
        />

        {/* Icon links */}
        {metadata.icons.map((icon, index) => (
          <link key={index} {...icon} />
        ))}
      </Head>
      <body><Provider>{children}</Provider></body>
    </html>
  );
};

export default RootLayout;

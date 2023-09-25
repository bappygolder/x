'use client';

// Import necessary dependencies
import React from 'react';
import { Provider } from 'react-redux';
// import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { store } from '../store/page';
import './globals.css';
// import Provider from '../components/Provider';

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
    <html lang='en'>
      <body><Provider store={store}><SessionProvider>{children}</SessionProvider></Provider></body>
    </html>
  );
};

export default RootLayout;
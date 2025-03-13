import localFont from 'next/font/local';

export const myCustomFont = localFont({
  src: [
    {
      path: '../public/fonts/blockberthold.woff',
      style: 'normal',
    },
    {
      path: '../public/fonts/MyCustomFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add other variations as needed
  ],
  variable: '--font-b', // This CSS variable will be used in Tailwind
  display: 'swap',
});
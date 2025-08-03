import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>DeLand Home Buyers</title>
        <meta name="description" content="We buy homes in DeLand, fast and fair." />
        <Script
          defer
          data-domain="deland-home-buyers.vercel.app"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

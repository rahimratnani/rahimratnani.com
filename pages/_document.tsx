import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-italic.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link href="favicons/site.webmanifest" rel="manifest" />
        <link
          href="favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />

        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta name="application-name" content="Rahim Ratnani" />
      </Head>
      <body className="bg-light-theme-0 dark:bg-dark-theme-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="FPT Play" />
        <meta name="language" content="vi" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FPT Play" />
        <meta
          name="apple-mobile-web-app-title"
          content="FPT Play - TV Online"
        />
        <meta name="theme-color" content="#e85b2d" />
        <meta name="msapplication-TileColor" content="#e85b2d" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class YggDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&subset=latin-ext&display=swap"
            rel="stylesheet"
          />

          {/* <meta name="theme-color" content="#d32f2f" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default YggDocument;

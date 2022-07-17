import React from 'react';
import { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
// import 'react-responsive-modal/styles.css';
// import 'style/reset.css';
// import 'style/vars.css';
// import 'style/colors.css';
// import 'style/index.css';
import 'tachyons';
import 'src/montserrat.css';
import 'src/extended-colors.css';
import 'react-circular-progressbar/dist/styles.css';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

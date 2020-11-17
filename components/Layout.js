import Head from 'next/head';
import gsap from 'gsap'
import { useEffect } from 'react';
import Header from './Header';

export default function Layout({ children }) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Prevent flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });
  }, []);

  return (
    <div className="App">
      <Head>
        <title>Agency.</title>
        <meta
          name="description"
          content="Creating unique brands is what we do."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Agency." key="ogtitle" />
        <meta
          property="og:description"
          content="Creating unique brands is what we do."
          key="ogdesc"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
}

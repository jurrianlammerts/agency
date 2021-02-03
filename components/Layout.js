import Head from 'next/head';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';

import { useEffect, useState } from 'react';
import CTA from './CTAFooter';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

gsap.registerPlugin(ScrollToPlugin);

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn();
    }, ms);
  };
}

export default function Layout({ dark, children }) {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  useEffect(() => {
    // prevents flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <>
      <Head>
        <title>LAMB | Digital Agency </title>
        <meta
          name="description"
          content="Creating unique brands is what we do."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="LAMB DIGITAL" key="ogtitle" />
        <meta
          property="og:description"
          content="Creating unique brands is what we do."
          key="ogdesc"
        />
      </Head>
      <Header dimensions={dimensions} dark={dark} />
      <Nav />
      <div className="App">{children}</div>
      <CTA />
      <Footer />
    </>
  );
}

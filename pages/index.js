import Head from 'next/head';
import gsap from 'gsap';

import { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Cases from '../components/Cases';
import IntroOverlay from '../components/IntroOverlay';

function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Prevent flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    // Timeline
    const tl = gsap.timeline();

    tl.from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
      .to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 1.4,
      })
      .to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to('.intro-overlay', 0, { css: { display: 'none' } })
      .from('.case-image img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -2,
        stagger: {
          amount: 0.4,
        },
      });
  }, []);

  return (
    <div className="Home">
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
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default Home;

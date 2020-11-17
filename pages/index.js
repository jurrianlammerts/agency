import gsap from 'gsap';

import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import CasesSection from '../components/CasesSection';
import IntroOverlay from '../components/IntroOverlay';

const tl = gsap.timeline();

const homepageAnimation = (completeAnimation) =>
  tl
    .from('.line span', 1.8, {
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
      onComplete: completeAnimation,
    });

function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // Prevent flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    homepageAnimation(completeAnimation);
  }, []);

  return (
    <Layout>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <CasesSection />
    </Layout>
  );
}

export default Home;

import { gsap } from 'gsap/dist/gsap';

import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import HomeCases from '../components/HomeCases';
import IntroOverlay from '../components/IntroOverlay';
import TextSection from '../components/TextSection';

import { getSortedCasesData } from '../lib/cases';

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
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
      stagger: 0.4,
    })
    .to('.App', 0, {
      css: { position: 'relative' },
    })
    .to('.intro-overlay', 0, {
      css: { display: 'none' },
    })
    .from('.inner', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

export default function Home({ allCases }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <Layout>
      {!animationComplete && <IntroOverlay />}
      <IntroOverlay />
      <Banner />
      <HomeCases cases={allCases} />
      <section className="inner">

        <TextSection />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allCases = getSortedCasesData();

  return {
    props: { allCases },
  };
}

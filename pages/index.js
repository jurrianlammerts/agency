import { gsap } from "gsap/dist/gsap";

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import HomeCases from "../components/HomeCases";
import IntroOverlay from "../components/IntroOverlay";
import TextSection from "../components/TextSection";
import CTA from "../components/HomeCTA";
import Footer from "../components/Footer";

import { getSortedCasesData } from "../lib/cases";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.8, {
    y: 140,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.2, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .from(
      ".case-image img",
      0.75,
      {
        ease: "expo.easeOut",
        scale: 1.25,
      },
      "-=1"
    )
    .to(".intro-overlay", 0, {
      css: { display: "none" },
      onComplete: completeAnimation,
    });
};

export default function Home({ allCases }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Only run animation on first visit
    window.addEventListener("beforeunload", removeItem);
    if (getItem() === null) {
      homeAnimation(completeAnimation);
      setItem();
    } else {
      completeAnimation();
    }
    return () => {
      window.removeEventListener("beforeunload", removeItem);
    };
  }, []);

  const completeAnimation = () => {
    document.querySelector(".App").style.position = "relative";
    setAnimationComplete(true);
  };

  const removeItem = () => window.sessionStorage.removeItem("firstLoadDone");
  const getItem = () => window.sessionStorage.getItem("firstLoadDone");
  const setItem = () => window.sessionStorage.setItem("firstLoadDone", 1);

  return (
    <Layout>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <HomeCases cases={allCases} />
      <TextSection />
      <CTA />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allCases = getSortedCasesData();

  return {
    props: { allCases },
  };
}

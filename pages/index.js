// import { gsap } from "gsap/dist/gsap";

// import { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import Banner from "../components/Banner";
// import HomeCases from "../components/HomeCases";
// import IntroOverlay from "../components/IntroOverlay";
// import TextSection from "../components/TextSection";
// import CTA from "../components/HomeCTA";
// import Footer from "../components/Footer";

// import { getSortedCasesData } from "../lib/cases";

// const tl = gsap.timeline();

// const homeAnimation = (completeAnimation) => {
//   tl.from(".line span", 1.8, {
//     y: 100,
//     ease: "power4.out",
//     delay: 0.75,
//     skewY: 7,
//     stagger: {
//       amount: 0.3,
//     },
//   })
//     .to(".overlay-top", 1.2, {
//       height: 0,
//       ease: "expo.inOut",
//       stagger: 0.4,
//     })
//     .to(".App", 0, {
//       css: { position: "relative" },
//     })
//     .to(".intro-overlay", 0, {
//       css: { display: "none" },
//       onComplete: completeAnimation,
//     });
// };

// export default function Home({ allCases }) {
//   const [animationComplete, setAnimationComplete] = useState(false);

//   const completeAnimation = () => {
//     setAnimationComplete(true);
//   };

//   useEffect(() => {
//     homeAnimation(completeAnimation);
//   }, []);

//   return (
//     <Layout>
//       {!animationComplete && <IntroOverlay />}
//       <Banner />
//       <HomeCases cases={allCases} />
//       <TextSection />
//       <CTA />
//       <Footer />
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const allCases = getSortedCasesData();

//   return {
//     props: { allCases },
//   };
// }

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
    y: 100,
    ease: "power4.out",
    delay: 0.75,
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
    .to(".App", 0, {
      css: { position: "relative" },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
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

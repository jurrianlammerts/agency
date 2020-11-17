import Head from 'next/head';

import { useEffect } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Cases from '../components/Cases';

function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <>
      <Head>
        <title>Agency 010</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Cases />
    </>
  );
}

export default Home;

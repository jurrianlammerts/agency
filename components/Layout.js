import Head from 'next/head';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import Header from './Header';
import Nav from './Nav';

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

export default function Layout({ children }) {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
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
      <Header dimensions={dimensions} />
      <Nav />
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
        {children}
      </div>
    </>
  );
}

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cursor from './Cursor';

const quotes = [
  {
    first: 'We create digital engagement',
    second: 'and brand loyalty.',
  },
  {
    first: 'Solve important problems',
    second: 'through design.',
  },
];

export default function TextSection() {
  const router = useRouter();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    new Cursor(document.querySelector('.cursor'));
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [router.pathname]);

  return (
    <div className="hero">
      <div className="cursor">
        <div className="cursor-media">
          <video
            src="videos/websites.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="websites"
          ></video>
          <video
            src="videos/apps.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="apps"
          ></video>
          <video
            src="videos/branding.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="branding"
          ></video>
        </div>
      </div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-inner-banner">
            <div className="hero-inner-links">
              <div data-video-src="websites" className="hero-inner-link-item">
                <h2>
                  <span>Websites</span>
                </h2>
              </div>
              <div data-video-src="apps" className="hero-inner-link-item">
                <h2>
                  <span>Apps</span>
                </h2>
              </div>
              <div data-video-src="branding" className="hero-inner-link-item">
                <h2>
                  <span>Branding</span>
                </h2>
              </div>
            </div>
          </div>
          {/* <div className="hero-footer">
            <p>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

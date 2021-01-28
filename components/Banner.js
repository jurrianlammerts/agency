import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CTAButton from "../components/CTAButton"

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

export default function Banner() {
  const router = useRouter();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [router.pathname]);

  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>{quote && quote.first}</span>
            </div>
            <div className="line">
              <span>{quote && quote.second}</span>
            </div>
          </h2>
          <div className="btn-row">
            <CTAButton text="Get in touch" href="/about" large />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CTALink from "../components/CTALink";

const quotes = [
  {
    first: "We create digital engagement",
    second: "and brand loyalty.",
  },
  {
    first: "Solve important problems",
    second: "through design.",
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
        <div className="column">
          <div className="banner-row">
            <h1>
              <div className="line">
                <span>{quote && quote.first}</span>
              </div>
              <div className="line">
                <span>{quote && quote.second}</span>
              </div>
            </h1>
          </div>
          <div className="btn-row">
            <CTALink text="Get in touch" href="/about" />
          </div>
        </div>
      </div>
    </section>
  );
}

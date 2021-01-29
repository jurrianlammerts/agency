import React from "react";
import CTALink from "../components/CTALink";

export default function TextSection() {
  return (
    <section className="text-section">
      <div className="title">
        <h2>Analyse</h2>
        <h2>Learn</h2>
        <h2>Create</h2>
      </div>
      <div className="paragraph">
        <p>
          This is how we work. We build our agency and services around your
          brand, giving equal weight to the analytical and creative aspects of
          the challenge.
        </p>
        <CTALink text="Learn more" href="/" />
      </div>
    </section>
  );
}

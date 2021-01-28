import React from 'react'
import Link from 'next/link';
import CTAButton from '../components/CTAButton';

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
          This is how we work. We build our agency and services around your brand, giving equal weight to the analytical and creative aspects of the challenge.
        </p>
        <CTAButton text="Learn more" href="/" />
      </div>
    </section>
  )
}

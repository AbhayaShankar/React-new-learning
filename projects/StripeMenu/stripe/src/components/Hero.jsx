import React from "react";
import { useGlobalContext } from "../context/context";
import phoneImg from "../Images/phone.svg";

export default function Hero() {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">start now</button>
        </div>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone-img" />
        </article>
      </div>
    </section>
  );
}

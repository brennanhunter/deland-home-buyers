"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Sell Your House Fast in DeLand
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          No repairs. No commissions. No waiting. Get a fair cash offer in 24 hours —
          we connect local homeowners with serious cash buyers.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition"
        >
          Get Your Cash Offer
        </a>
        <div className="mt-6 text-sm text-gray-600">
          Or call/text <a href="tel:4068685850" className="text-blue-700 font-medium">(406) 868-5850</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

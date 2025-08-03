"use client";

import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
        Request a Cash Offer
      </h2>

      <form
        action="https://formspree.io/f/xwpolbjr"
        method="POST"
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="property" className="block text-sm font-medium text-gray-700 mb-1">
            Property Address
          </label>
          <input
            type="text"
            id="property"
            name="property"
            required
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
            Anything else you'd like us to know?
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Optional — timeline, condition, etc."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
        >
          Get My Offer
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

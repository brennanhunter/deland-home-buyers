"use client";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-600">
      <p>
        © {year} DeLand Home Buyers ·{" "}
        <a
          href="tel:4068685850"
          className="text-blue-600 hover:underline font-medium"
        >
          (406) 868-5850
        </a>
      </p>
      <p className="mt-2 text-xs text-gray-400">
        This site connects homeowners with local real estate buyers.
      </p>
    </footer>
  );
};

export default Footer;

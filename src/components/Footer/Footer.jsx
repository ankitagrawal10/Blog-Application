import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-700 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex justify-center md:justify-start">
            <Logo width="100px" />
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Help
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-white">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-300">
          &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;

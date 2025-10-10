/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstegarmIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from '../icons';

export default function Footer() {
  return (
    <motion.footer
      className="bg-green-950 text-white font-outfit pt-16 pb-6 px-6 md:px-20 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 border-b border-green-800 pb-10">
        {/* Logo / Intro */}
        <div>
          <h3 className="text-2xl font-bold mb-3 text-white">
            Knowledge Quotient Academy
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Shaping bright minds through quality education, personalized
            tutoring, and hands-on tech training for the 21st century.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-amber-200 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/programs"
                className="hover:text-amber-200 transition-colors duration-300"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:text-amber-200 transition-colors duration-300"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-amber-200 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contact Us</h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-center gap-2">
              <LocationIcon /> St Joseph, Eugene, Oregon, USA
            </li>
            <li className="flex items-center gap-2">
              <MailIcon />
              info@kqacademy.com
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon /> +1 (234) 456-7890
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 bg-amber-100/20 rounded-full   transition-all duration-300"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="p-2 bg-amber-100/20 rounded-full   transition-all duration-300"
            >
              <InstegarmIcon />
            </a>
            <a
              href="#"
              className="p-2 bg-amber-100/20 rounded-full transition-all duration-300"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Knowledge Quotient Academy. All rights
          reserved.
        </p>
        <p className="mt-2 md:mt-0">Crafted with 💚 by KQA Team</p>
      </div>
    </motion.footer>
  );
}

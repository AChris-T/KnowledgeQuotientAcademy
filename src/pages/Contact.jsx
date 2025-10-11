/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { LocationIcon, PhoneIcon, EmailIcon } from '../icons';

export default function Contact() {
  return (
    <div className="mt-28 mb-20 px-4 lg:px-10">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-deepblack-100 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Please fill out the form below or use
            our contact information to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-green-100">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-100 focus:border-transparent outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-green-100 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info and Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-green-100">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <LocationIcon className="w-6 h-6 text-green-100" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-1">
                      {' '}
                      Abiodun komolafe street off Fasheun, Ago palace way,
                      Okota, Idolo Lago Nigeria{' '}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <PhoneIcon
                      fill={'#0b4d3a'}
                      className="w-6 h-6 text-green-100"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+2348163988707</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <EmailIcon className="w-6 h-6 text-green-100" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">
                      knowledgequotientacademy@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="bg-white p-2 rounded-xl shadow-lg overflow-hidden h-[300px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44855.78519845845!2d-123.13407565!3d44.05207885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c119b0ac2d5bff%3A0x57ec61f968f6bdba!2sEugene%2C%20OR%2C%20USA!5e0!3m2!1sen!2s!4v1654321234567!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="rounded-lg"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Disclaimer</h1>
            <p className="text-dark2">
              The realm of supernatural phenomena often operates in ways that
              are enigmatic and surpass human comprehension. Therefore, it is
              advisable to exercise your own judgment when utilizing spells. It
              is important to note that results may vary from person to person
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Money Spell
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Love Spell
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Protection Spell
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Testimonials
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex flex-col space-y-6 py-3">
              <div className="flex space-x-4 justify-start items-center">
                <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
                  <FaWhatsapp
                    size={25}
                    className="cursor-pointer hover:text-primary hover:scale-105 duration-200"
                  />
                </a>
                <span className="font-bold">+1 (775) 447-6761</span>
              </div>
              <p className="font-bold font-lg">
                Dr. Julia (Marriage Counselor)
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-black font-bold text-center my-8">
        Copyright 2024, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

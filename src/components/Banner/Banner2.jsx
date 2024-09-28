import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section id="about-us">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Dr Julia obtains endowed Magic Rings which are invoked and infused
              to connect a wearer’s soul with positive life’s prospects about
              wealth, protection or security about life and assets. Magic Rings
              also helps the wearer to fulfill his/her wishes in time. Magic
              Rings have magical powers which helps the wearer to fix specific
              positive function . . . .
            </p>
            <a
              href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;

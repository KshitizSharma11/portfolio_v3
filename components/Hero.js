// components/Hero.js
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [message, setMessage] = useState(" Full-Stack");
  const arr = [" Cross-Platform", "n Android", " Full-Stack"];

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setMessage(arr[index]);
      index = (index + 1) % arr.length;
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-col flex md:flex-row m-8 mt-20 justify-around items-center relative"
    >
      <div className="flex-col space-y-4 max-w-lg mx-auto text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-4">
          Hello Mate 👋, Kshitiz Here!
        </h1>
        <h1 className="text-3xl rounded-r-xl p-2 font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          A{message} Developer!
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans text-gray-300 text-lg mx-4 md:mx-0"
        >
          Hi again, I am Kshitiz, a software developer firmly believing in
          'Stoicism'. I am really passionate when it comes to building stuff.
          Over the years, I have worked on various tech stacks. Wanna know more
          about me? Keep Scrolling!
        </motion.p>
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5 }}
          src="https://k-blogs.vercel.app/static/media/Hero.04760aa8361fcc99faf5.png"
          alt="Hero Image"
          width={400}
          height={350}
          className="rounded-3xl mt-5 md:mt-10"
        />
      </div>
    </motion.div>
  );
};

export default Hero;

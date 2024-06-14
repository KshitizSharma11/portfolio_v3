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
    <div className="container mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-col flex md:flex-row m-8 mt-40 md:mt-20 justify-around items-center "
      >
        <div className="flex-col space-y-4 max-w-lg mx-auto text-center md:text-left">
          <h1 className="text-4xl font-bold text-white  mb-4">
            Hello Mate 👋, <strong className="animate-bounce">Kshitiz </strong>
            Here!
          </h1>
          <h1 className="text-3xl rounded-r-xl p-2 font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            A{message} Developer!
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-gray-300 font-semibold text-lg mx-4 md:mx-0"
          >
            Hi again, I am Kshitiz, a software developer firmly believing in
            'Stoicism'. I am really passionate when it comes to building stuff.
            Over the years, I have worked on various tech stacks.
            <br /> Wanna know more about me?
            <br /> Keep Exploring The Site!
          </motion.p>
        </div>

        <div className="z-10">
          <motion.img
            animate={{
              borderColor: ["#00FF00", "#7C3AED", "#FF6EC7", "#00FF00"],
              rotate: [5, -5],
              // Cycle through Green to Purple and back to Green
            }}
            transition={{
              duration: 3, // Duration of one complete cycle
              repeat: Infinity, // Repeat indefinitely
              ease: "linear",
              times: [0, 0.33, 0.33, 0.66, 0.66, 1, 1], // Ensure equal time for each color
            }}
            src="https://ik.imagekit.io/9ilyixtzk/profile/profile.png?updatedAt="
            alt="Hero Image"
            width={400}
            height={300}
            className="rounded-3xl relative mt-5 md:mt-10 p-2 border-4 "
          />
        </div>
      </motion.div>
      <div className="font-semibold">
        <h1 className="text-4xl text-slate-200 text-center p-2 m-5">
          Education
        </h1>
        <div className="flex flex-col md:flex-row items-center z-10 mt-10 justify-around">
          <motion.img
            src="https://images.news18.com/ibnlive/uploads/2022/01/untitled-design-1-1-16437108264x3.jpg?impolicy=website&width=640&height=480"
            className="w-80 h-80 rounded-full border-2 animate-bounce border-green-400 hover:border-cyan-400 p-1  "
          />
          <div className="flex-col flex justify-center items-start mt-5 md:mt-0 w-26 space-y-2 p-6 border-2 bg-black bg-opacity-6 border-green-400">
            <h1 className="text-2xl text-slate-200 text-center">
              B.E CSE (Computer Science And Engineering)
            </h1>
            <h1 className="text-xl text-slate-200 text-center ">2020 - 2024</h1>
            <h1 className="text-2xl text-slate-200 text-center ">CGPA 8.55</h1>
            <h1 className="text-2xl text-slate-200 text-center">
              Chandigarh University
            </h1>
          </div>
        </div>
        <div className="flex flex-col-reverse z-10 md:flex-row items-center justify-around mt-5  ">
          <div className="flex-col flex justify-center items-start mt-5 md:mt-0 p-6 border-2 w-26 bg-black bg-opacity-6 border-green-400 space-y-2">
            <h1 className="text-2xl text-slate-200 text-center">12th (ISC)</h1>
            <h1 className="text-xl text-slate-200 text-center ">2018 - 2020</h1>
            <h1 className="text-2xl text-slate-200 text-center ">
              Percentage - 90%
            </h1>
            <h1 className="text-2xl text-slate-200 text-center">
              Mount Carmel School, Palampur
            </h1>
          </div>
          <img
            src="https://scontent.fdel11-3.fna.fbcdn.net/v/t39.30808-6/365215197_724759956122494_5165759870445917462_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oZ3JaVDKE_4Q7kNvgErJqCa&_nc_ht=scontent.fdel11-3.fna&oh=00_AYAYRMyl7YTPaNOGuOlxo9sUjmRSzIVlNcL1RoljM2vdmg&oe=66709806"
            className="w-80 h-80 rounded-full border-2 animate-bounce border-green-400 p-1 hover:border-cyan-400"
          />
        </div>
        <div className="flex flex-col mt-5 md:flex-row z-10 items-center justify-around">
          <motion.img
            src="https://yt3.googleusercontent.com/ytc/AIdro_mjmeONu-cAJhJTGBohRgvM1oAAUnjppD6Wr9BREc03MQ=s900-c-k-c0x00ffffff-no-rj"
            className="w-80 h-80 rounded-full border-2 animate-bounce  border-green-400 p-1 hover:border-cyan-400 "
          />
          <div className="flex-col flex justify-center items-start mt-5 md:mt-0 p-6 space-y-2 border-2 w-26 bg-black bg-opacity-6 border-green-400">
            <h1 className="text-2xl text-slate-200 text-center">
              10th Matricuation (ICSE)
            </h1>
            <h1 className="text-xl text-slate-200 text-center ">2005 - 2018</h1>
            <h1 className="text-2xl text-slate-200 text-center ">
              Percentage - 92%
            </h1>
            <h1 className="text-2xl text-slate-200 text-center">
              Mount Carmel School, Baijnath
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

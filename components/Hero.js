// components/Hero.js
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  SiGit,
  SiGraphq,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiPostman,
  SiKubernetes,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiSelenium,
  SiDocker,
} from "react-icons/si";
import { FaReact, FaPhp, FaJava } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
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
        <div className="flex-col space-y-4 max-w-lg mx-auto bg-black bg-opacity-40 p-5 text-center md:text-left">
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
            className="font-sans text-gray-300 font-bold text-lg mx-4 md:mx-0"
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
            src="/pict 1.png"
            alt="Hero Image"
            width={400}
            height={300}
            className="rounded-3xl relative mt-5 md:mt-10 p-2 border-4 "
          />
        </div>
      </motion.div>
      <div className="font-semibold">
        <h1 className="text-4xl  text-slate-200 text-center p-2 m-5">
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
            <h1 className="text-2xl text-slate-200 text-center ">CGPA 8.60</h1>
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
            src="/mcsp.jpg"
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
      <div
        className="container mt-20  flex flex-col md:flex-row items-center justify-evenly "
        id="_skills"
      >
        <motion.img
          animate={{
            rotateY: [0, 45, 90, 45, 0],
            visibility: ["visible", "hidden"], // Rotation on the z-axis
          }}
          transition={{
            repeat: Infinity, // Infinite looping
            duration: 5, // Duration of one loop
            ease: "linear", // Linear easing for a smooth spin
          }}
          src="/pic4.png"
          className="z-10 w md:ml-20 bg-black p-4"
          width={400}
          height={400}
        />
        <div className="text-3xl font-bold text-gray-100 bg-black p-4 bg-opacity-10 m-4">
          <h1>My Skills</h1>

          <div className="flex flex-row mt-5 items-center gap-5">
            <div className="flex flex-col items-start justify-center space-y-5 mt-5">
              <span className="relative flex flex-row  space-x-4 items-start">
                <SiJavascript size={34} />
                <h1 className="text-xl text-slate-100">Javascript </h1>
              </span>
              <span className="relative  flex flex-row space-x-4 items-center">
                <SiReact size={34} />
                <h1 className="text-xl text-slate-100">React </h1>
              </span>

              <span className="relative flex flex-row space-x-4 items-center">
                <SiTailwindcss size={34} />
                <h1 className="text-xl text-slate-100">Tailwind </h1>
              </span>
              <span className="relative flex flex-row space-x-4 items-center">
                <SiNextdotjs size={34} />
                <h1 className="text-xl text-slate-100">Next.js </h1>
              </span>
              <span className="relative flex flex-row space-x-4 items-center">
                <SiNodedotjs size={34} />
                <h1 className="text-xl text-slate-100">Node.js </h1>
              </span>
              <span className="relative flex flex-row space-x-4 items-center">
                <SiKubernetes size={34} />
                <h1 className="text-xl text-slate-100">Kubernetes </h1>
              </span>
              <span className="relative flex flex-row space-x-4 items-center">
                <SiPostman size={34} />
                <h1 className="text-xl text-slate-100">Postman</h1>
              </span>
              <span className="relative flex flex-row space-x-4 items-center">
                <SiGit size={34} />
                <h1 className="text-xl text-slate-100">Git</h1>
              </span>
            </div>
            <div>
              <div className="flex flex-col items-start justify-center space-y-5 mt-5">
                <span className="relative flex flex-row space-x-4 items-center">
                  <SiTypescript size={34} />
                  <h1 className="text-xl text-slate-100">Typescript</h1>
                </span>
                <span className="relative flex flex-row space-x-4 items-center">
                  <SiMongodb size={34} />
                  <h1 className="text-xl text-slate-100">Mongo</h1>
                </span>

                <span className="relative flex flex-row space-x-4 items-center">
                  <SiPostgresql size={34} />
                  <h1 className="text-xl text-slate-100">PostgreSQL </h1>
                </span>
                <span className="relative flex flex-row space-x-4 items-center">
                  <FaReact size={34} />
                  <h1 className="text-xl text-slate-100">React - Native</h1>
                </span>

                <span className="relative flex flex-row space-x-4 items-center">
                  <SiDocker size={34} />
                  <h1 className="text-xl text-slate-100">Docker</h1>
                </span>
                <span className="relative flex flex-row space-x-4 items-center">
                  <FaJava size={34} />
                  <h1 className="text-xl text-slate-100">Java</h1>
                </span>
                <span className="relative flex flex-row space-x-4 items-center">
                  <SiSelenium size={34} />
                  <h1 className="text-xl text-slate-100">Selenium</h1>
                </span>
                <span className="relative flex flex-row space-x-4 items-center">
                  <SiExpress size={34} />
                  <h1 className="text-xl text-slate-100">Express.js</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 m-4 flex flex-row items-center rounded-3xl bg-opacity-10 bg-cyan-500 justify-center">
        <h1 className="text-xl text-center font-semibold text-gray-100">
          Additionally, I have experience in working in various linux
          distributions such as Ubuntu, Mint and Parrot OS.
          <br /> Plus I am well versed with tools like Firebase and Hypgraph
          CMS.
        </h1>
      </div>
    </div>
  );
};

export default Hero;

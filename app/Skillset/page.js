"use client";
import React from "react";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaReact, FaPhp } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold font-serif">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 m-4 mt-10 ">
          <div className="flex flex-col items-center mt-5 border-2 border-red-300 m-2 ">
            <h1 className="text-center text-3xl mt-2 font-bold">Frontend</h1>
            <ul className="mt-2">
              <li className="grid md:grid-cols-2 grid-cols-1 md:gap-6 m-2">
                <h2>Tailwind</h2>
                <SiTailwindcss size={60} color="#38B2AC" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 md:gap-6 m-2">
                <h2>React.js</h2>
                <FaReact size={60} color="blue" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 m-2 md:gap-6">
                <h2>Bootstrap</h2>
                <BsBootstrap size={60} color="purple" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 m-2 md:gap-6">
                <h2>Next.js</h2>
                <SiNextdotjs size={60} color="black" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-5 border-2 border-red-300 m-2 ">
            <h1 className="text-center text-3xl mt-2 font-bold">Backend</h1>
            <ul className="mt-2">
              <li className="grid md:grid-cols-2 grid-cols-1 md:gap-6 m-2">
                <h2>Node.js</h2>
                <SiNodedotjs size={60} color="green" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 md:gap-6 m-2">
                <h2>Mongo-DB</h2>
                <SiMongodb size={60} color="green" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 m-2 md:gap-6">
                <h2>PostgreSQL</h2>
                <SiPostgresql size={60} color="purple" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 m-2 md:gap-6">
                <h2>PHP</h2>
                <FaPhp size={60} color="black" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-5 border-2 border-red-300 m-2 ">
            <h1 className="text-center text-3xl mt-2 font-bold">Testing</h1>
            <ul className="mt-2">
              <li className="grid md:grid-cols-2 grid-cols-1 md:gap-6 m-2">
                <h2>Selenium</h2>
                <SiNodedotjs size={60} color="green" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 md:gap-6 m-2">
                <h2>Mongo-DB</h2>
                <SiMongodb size={60} color="green" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 m-2 md:gap-6">
                <h2>PostgreSQL</h2>
                <SiPostgresql size={60} color="purple" />
              </li>
              <li className="grid md:grid-cols-2 grid-cols-1 m-2 md:gap-6">
                <h2>Next.js</h2>
                <SiNextdotjs size={60} color="black" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

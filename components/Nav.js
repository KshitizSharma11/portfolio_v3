"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full  bg-slate-100 bg-opacity-30 shadow-md backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-between m-2 p-4">
        <h2 className="text-4xl font-bold font-serif text_gradient">
          Portfolio
        </h2>
        {/* Hamburger menu icon */}
        <button
          className="block sm:hidden text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {/* Hamburger icon */}
            <path
              className={`${isOpen ? "hidden" : "block"}`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
            {/* Close icon */}
            <path
              className={`${isOpen ? "block" : "hidden"}`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.707 7.293l1.414-1.414L12 10.586l4.879-4.879 1.414 1.414L13.414 12l4.879 4.879-1.414 1.414L12 13.414l-4.879 4.879-1.414-1.414L10.586 12 5.707 7.121z"
            />
          </svg>
        </button>
        {/* Navigation links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex font-serif font-semibold space-x-4 text-2xl transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-slate-200 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Exp"
              className="hover:text-slate-200 transition-colors duration-300"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/Skillset"
              className="hover:text-slate-200 transition-colors duration-300"
            >
              Skillset
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className="hover:text-slate-200 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="https://k-blogs.vercel.app/"
              target="_blank"
              className="hover:text-slate-200 transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/Exp"
              className="hover:text-slate-200 transition-colors duration-300"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="hover:text-slate-200 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

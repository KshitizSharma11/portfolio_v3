"use client";
import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10">Let's Talk 👨‍💻</h1>
      <div>
        <form className="flex flex-col items-center space-y-4 mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 bg-blue-50 rounded-lg border-slate-400 m-2 p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2  bg-blue-50 rounded-lg border-slate-400 m-2 p-2"
          />
          <textarea
            type="text"
            placeholder="Your Message"
            rows="5"
            cols="22"
            className="border-2 bg-blue-50 rounded-lg border-slate-400 m-2 p-2"
          />
          <input
            type="submit"
            className="bg-green-500 text-sans  p-2 rounded-xl"
          />
        </form>
        <h1 className="text-center mt-5 text-2xl font-serif">Links</h1>
        <div className="flex md:flex-row space-y-4 md:space-y-1 justify-center items-center flex-col space-x-0 md:space-x-4 mt-5">
          <FaInstagram
            color="red"
            className="cursor-pointer"
            size={48}
            onClick={() => {
              window.open(
                "https://www.instagram.com/kshitiz_sharma_k.s/",
                "_blank"
              );
            }}
          />
          <FaGithub
            size={48}
            className="cursor-pointer"
            onClick={() => {
              window.open("https://github.com/KshitizSharma11", "_blank");
            }}
          />
          <FaFacebook
            color="blue"
            size={48}
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.facebook.com/kshitiz.sharma.3979",
                "_blank"
              );
            }}
          />
          <FaTwitter
            color="black"
            size={48}
            className="cursor-pointer"
            onClick={() => {
              window.open("https://x.com/kshitiz_the_one", "_blank");
            }}
          />
          <FaLinkedin
            color="blue"
            size={48}
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/kshitiz-sharma-the-one/",
                "_blank"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

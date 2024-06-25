"use client";
import React, { useState } from "react";
import ParticlesComponent from "../../components/particles";
import LottieAnimation from "@/components/LottieAnimation";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const SuccessOverlay = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-9xl" />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      "https://api-ap-south-1.hygraph.com/v2/clx8jrel605aj07uz53e2t5sj/master"; // Replace with your Hygraph CMS endpoint

    const mutation = `
      mutation CreateContactForm ($name: String!, $email: String!, $message: String!) {
        createContactForm(data: { 

          name: $name, 
          email: $email, 
          message: $message,
          
        }) {
          name
          email
          message
        }
      }
    `;

    const variables = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTgwODYzODUsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NseDhqcmVsNjA1YWowN3V6NTNlMnQ1c2ovbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiIzNDIyNWViMC1iZmQ0LTQxZTctYWFkMS04ZjBmNTg1NzcyN2IiLCJqdGkiOiJjbHhhMDl2YjMxaHU0MDdwbWg3Z3M2c20zIn0.dzOQs3JJxlpo-ZccWOk7BrDY5JqD9EpP-LKasDDpUQ7bKtslTZInyBKyVeespTEF0jwVRqMQnL3zDcXJZwppBIdj2AUDIy8ZVvw6As-TCc8OUsre6jnYUloy5ZOoLBbBe4xoU97WaCZyI6r8iYsNazyjZVcv7PBmst0dQEujGL8yGxXS4sJsckfs6_CeE0XlmAjoDSxdTM4x4bsVT87xdsZdb_Z_bl4icHHHUnqQBH2Jnr2T3CAB02GtU--CcEJvjmtHO7Ty9fWP_QHe8WIVSy1cG6YExMoONrNT6o5rERN91BnFVFw-2inuM3Jx6eQJsmKXr1lTqMpdPwiA6hKVVqFoiIjpR94cJXDqQpRQq94EcGYICKla7Qz662UaGKgBP-y_jbBibmZzFOMV0hiTyYwY4F_nJ0W2DguIpSAYL3PzdzG8-rPfg2slfKxBN2t1D5SU4kg8Yz0Nb_0_fFFp3wiedyX9fjp_anUXB09VteLNuNyz0tQc6LNJ42FyVf1O1zIJnuPrGFfwp-kHmpCar0B1ggQlHvUymUv9onNgVdo617NezfwAtmxx0aTxgaXKx4GTBEsqFwsECOz4M69KA2_ugXXFmnUKnba1Z2mjg7gXWgoEzBllRi4UQwoaK_16TcsKiMoF3gkaw9SguCW4XQaBw3ZxeaAr8WlwX4Zgv_g",
        },
        body: JSON.stringify({
          query: mutation,
          variables: variables,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Form submitted successfully:", result.data);
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 1000); // Hide success message after 1 second
      } else {
        console.error("Failed to submit form:", result.errors);
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div className="bg-opacity-8 text-slate-100 min-h-screen py-12 px-4  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl mt-20 font-bold mb-8">
          Let's Talk 👨‍💻
        </h1>
        <div className="flex flex-row items-center justify-center m-5">
          <LottieAnimation width={200} height={200} />
        </div>
        <div className="mb-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-black items-center space-y-4"
          >
            <ParticlesComponent />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 bg-white rounded-lg border-gray-300 focus:border-green-500  ring-2 ring-cyan-500 focus:ring-green-500 focus:outline-none w-2/3 p-2  md:w-1/3"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 bg-white rounded-lg border-gray-300 focus:border-green-500 ring-2  ring-cyan-500 focus:ring-green-500 focus:outline-none w-2/3 p-2 md:w-1/3 "
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border-2 bg-white rounded-lg border-gray-300 focus:border-green-500 ring-2  ring-cyan-500 focus:ring-green-500 focus:outline-none p-2 w-2/3 md:w-1/3"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-xl cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
          {successMessage && <SuccessOverlay />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  text-gray-900 gap-8 mb-8">
          <div className="flex flex-row justify-center w-6/7 items-center space-x-4 bg-white shadow-lg rounded-lg p-6">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-green-500 text-4xl"
            />
            <div>
              <h1 className="font-semibold text-xl">Address</h1>
              <p>Baijnath, Kangra Himachal Pradesh, India (176125)</p>
            </div>
          </div>
          <div className="flex flex-row justify-center w-6/7 items-center space-x-4 bg-white shadow-lg rounded-lg p-6">
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="text-blue-500 text-4xl"
            />
            <div>
              <h1 className="font-semibold text-xl">Mobile</h1>
              <p>+919805147466</p>
            </div>
          </div>
          <div className="flex flex-row justify-center w-6/7 items-center space-x-4 bg-white shadow-lg rounded-lg p-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-red-500 text-4xl"
            />
            <div>
              <h1 className="font-semibold text-xl">Email</h1>
              <p>kshitizsharma.00@gmail.com</p>
            </div>
          </div>
        </div>
        <h1 className="text-center mt-20 text-3xl animate-bounce z-10 font-semibold font-serif">
          Socials
        </h1>
        <div className="flex md:flex-row  space-y-4 md:space-y-1  justify-center items-center flex-col space-x-0 md:space-x-8 mt-10 mb-10">
          <FaInstagram
            color="red"
            className="cursor-pointer rounded-full p-2 bg-gray-800 animate-pulse transform hover:scale-110 transition duration-300"
            size={68}
            onClick={() => {
              window.open(
                "https://www.instagram.com/kshitiz_sharma_k.s/",
                "_blank"
              );
            }}
          />
          <FaGithub
            size={68}
            className="cursor-pointer rounded-full p-2 bg-gray-800 animate-pulse transform hover:scale-110 transition duration-300"
            onClick={() => {
              window.open("https://github.com/KshitizSharma11", "_blank");
            }}
          />
          <FaFacebook
            color="blue"
            size={68}
            className="cursor-pointer rounded-full p-2 bg-gray-100 animate-pulse transform hover:scale-110 transition duration-300"
            onClick={() => {
              window.open(
                "https://www.facebook.com/kshitiz.sharma.3979",
                "_blank"
              );
            }}
          />
          <FaTwitter
            color="blue"
            size={68}
            className="cursor-pointer rounded-full p-2 bg-gray-800 animate-pulse transform hover:scale-110 transition duration-300"
            onClick={() => {
              window.open("https://x.com/kshitiz_the_one", "_blank");
            }}
          />
          <FaLinkedin
            color="blue"
            size={68}
            className="cursor-pointer rounded-full p-2 bg-gray-100 animate-pulse transform hover:scale-110 transition duration-300"
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

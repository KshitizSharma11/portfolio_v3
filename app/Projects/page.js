"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
const fetchWorks = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_CDN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query MyQuery {
            projectss {
              githubUrl
              image {
                url
              }
              name
              techStack
              deplUrl
              description
            }
        }  `,
      }),
    });

    if (!res.ok) {
      const errorDetails = await res.text();
      console.error("Failed to fetch data:", errorDetails);
      throw new Error(`Failed to fetch data: ${errorDetails}`);
    }

    const { data } = await res.json();
    if (!data || !data.projectss) {
      console.error("No data returned:", data);
      throw new Error("No data returned");
    }
    console.log(data.projectss);
    return data.projectss;
  } catch (error) {
    console.error("Error fetching works:", error);
    throw error;
  }
};
const Page = () => {
  const [works, setWorks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWorks = async () => {
      try {
        const worksData = await fetchWorks();
        setWorks(worksData);
      } catch (err) {
        setError(err.message);
      }
    };

    getWorks();
  }, []);

  if (error) {
    return <div>Error loading works: {error}</div>;
  }

  return (
    <div className="bg-opacity-8 min-h-screen py-10">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl text-gray-100 font-serif font-bold mt-20">
          My Work 💼
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={work.image.url}
                alt="Project"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
                <div className="text-white justify-center">
                  <button
                    className="mr-2 px-3 py-1 bg-black hover:bg-slate-600 rounded-md"
                    onClick={() => window.open(work.githubUrl, "_blank")}
                  >
                    <FaGithub size={48} className="cursor-pointer" />
                  </button>
                  <button
                    className="px-3 py-1 bg-white hover:bg-slate-500 rounded-md"
                    onClick={() => window.open(work.deplUrl, "_blank")}
                  >
                    <FaEye size={48} color="black" className="cursor-pointer" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <motion.h2
                  animate={{ x: [0, 50] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="text-xl font-bold mb-2"
                >
                  {work.name}
                </motion.h2>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-1 animate-spin text-blue-500"
                  >
                    <path
                      fill="currentColor"
                      d="M12 3a9 9 0 1 0 9 9A9 9 0 0 0 12 3zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7zm0-10a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1zM12 6a3 3 0 0 0-2.24 1 3 3 0 0 0-4.48 2.41A7 7 0 0 0 5 12a6.91 6.91 0 0 0 .23 1.68A3 3 0 0 0 7 18h10a3 3 0 0 0 2.83-2.13 7 7 0 0 0 .23-1.68 3 3 0 0 0-3.28-3.41A3 3 0 0 0 12 6z"
                    />
                  </svg>
                  <h3 className="text-gray-600 text-sm font-medium">
                    {work.techStack}
                  </h3>
                </div>
                <p className="text-gray-700">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

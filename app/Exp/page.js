// app/Exp/page.js
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fetchWorks = async () => {
  try {
    const res = await fetch("https://ap-south-1.cdn.hygraph.com/content/clx8jrel605aj07uz53e2t5sj/master", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query MyQuery {
            works {
              image {
                url
              }
              title
              duration
              description
            }
          }
        `,
      }),
    });

    if (!res.ok) {
      const errorDetails = await res.text();
      console.error("Failed to fetch data:", errorDetails);
      throw new Error(`Failed to fetch data: ${errorDetails}`);
    }

    const { data } = await res.json();
    if (!data || !data.works) {
      console.error("No data returned:", data);
      throw new Error("No data returned");
    }
    console.log(data.works);
    return data.works;
  } catch (error) {
    console.error("Error fetching works:", error);
    throw error;
  }
};

export default function Page() {
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
    return (
      <div className="text-center text-red-500">
        Error loading works: {error}
      </div>
    );
  }

  return (
    <div className="bg-opacity-8 min-h-screen mb-5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl text-slate-200 font-serif font-bold mt-20 mb-8">
          Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 rounded-xl shadow-lg border-4 border-green-500 bg-white"
            >
              <img
                src={work.image.url}
                width={200}
                height={200}
                alt={work.title}
                className="mx-auto mb-4 rounded-full"
              />
              <h1 className="text-2xl animate-bounce font-serif font-bold text-center mb-2">
                {work.title}
              </h1>
              <h2 className="text-lg font-medium text-center mb-2">
                {work.duration}
              </h2>
              <p className="text-base text-gray-700 text-center">
                {work.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

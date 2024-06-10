// app/Exp/page.js
"use client";
import React, { useState, useEffect } from "react";

const fetchWorks = async () => {
  try {
    const res = await fetch(
      "https://ap-south-1.cdn.hygraph.com/content/clx8jrel605aj07uz53e2t5sj/master",
      {
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
      }
    );

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
    return <div>Error loading works: {error}</div>;
  }

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-serif font-bold mt-10">
          Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
          {works.map((work, index) => (
            <div
              key={index}
              className="p-2 m-2 rounded-xl items-center flex-col flex justify-center bg-slate-200"
            >
              <img
                src={work.image.url}
                width={200}
                height={200}
                alt={work.title}
              />
              <h1 className="text-2xl mt-2 font-serif">{work.title}</h1>
              <h2 className="text-xl mt-2">{work.duration}</h2>
              {/* Render description with line breaks */}
              <p className="text-xl mt-2 m-1 p-2">
                {work.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br /> {/* Add a line break after each line */}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

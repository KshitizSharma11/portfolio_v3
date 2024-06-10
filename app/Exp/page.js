"use client";
import React from "react";

const page = ({ works }) => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-serif font-bold mt-10">
          Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 ">
          {works.map((work) => (
            <div className="p-2 m-2 rounded-xl  bg-slate-200">
              <img src={work.image} width={300} height={300} />
              <h1>{works.title}</h1>
              <h2>{works.duration}</h2>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

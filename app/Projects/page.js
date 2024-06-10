import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-serif font-bold mt-10">
          My Work 💼
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 ">
          <div className="p-2 m-2 rounded-xl bg-slate-200">
            <img
              src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png"
              width={300}
              height={300}
            />
            <h1>Blog-App</h1>
            <h2>Tech-stack</h2>
            <p>React-Native, Hypgraph CMS, GraphQL</p>
          </div>
          <div className="p-2 m-2 rounded-xl bg-slate-200">
            <img
              src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png"
              width={300}
              height={300}
            />
            <h1>Blog-App</h1>
            <h2>Tech-stack</h2>
            <p>React-Native, Hypgraph CMS, GraphQL</p>
          </div>
          <div className="p-2 m-2 rounded-xl bg-slate-200">
            <img
              src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png"
              width={300}
              height={300}
            />
            <h1>Blog-App</h1>
            <h2>Tech-stack</h2>
            <p>React-Native, Hypgraph CMS, GraphQL</p>
          </div>
          <div className="p-2 m-2 rounded-xl bg-slate-200">
            <img
              src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png"
              width={300}
              height={300}
            />
            <h1>Blog-App</h1>
            <h2>Tech-stack</h2>
            <p>React-Native, Hypgraph CMS, GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

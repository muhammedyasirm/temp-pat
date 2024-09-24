import React from "react";

const BlogItem = () => {
  return (
    <div className="py-8 px-20 md-down:px-4 bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 font-barlow">TITLE FOR BLOG ITEM</h1>
      <div className="flex justify-between md-down:flex-col items-start">
        <div className="w-[55%] md-down:w-full">
          <p className="text-xl font-montserrat leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="w-[40%] h-[25rem] md-down:w-full md-down:h-full flex items-stretch">
          <img
            src="/table.png"
            alt="Blog Item"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

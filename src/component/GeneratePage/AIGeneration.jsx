import React from "react";

function AIGeneration() {
  return (
    <div className="py-2 px-4">
      <h1 className="text-white font-bold text-2xl">AI Image Generation</h1>
      <div className="mt-2 rounded-md ">
        <input
          className="w-full rounded-md bg-[#141c2d] border border-transparent focus:border-purple-500 focus:outline-none py-4 px-4 text-sm"
          type="text"
          placeholder="Type a prompt..."
        />
      </div>
      <div className="mt-4 gradient rounded-md w-32 h-11 flex justify-center items-center">
        <button className="bg-gray-700 text-white text-base px-7 py-2 rounded-md">
          Generate
        </button>
      </div>

      <hr className="mt-4" />
    </div>
  );
}

export default AIGeneration;

import React from "react";

export default function Spinner() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-50 flex items-center justify-center">
      <div
        id="spinner"
        className="w-64 h-64 border-8 border-black-500 border-transparent border-gray-500 rounded-full"
      ></div>
    </div>
  );
}

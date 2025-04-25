import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
    >
      {children}
    </button>
  );
};

export default Button;

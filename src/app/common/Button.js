 
import React from 'react';

export default function Button({ children, onClick, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-emerald-500 rounded-full hover:bg-gray-200 hover:text-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

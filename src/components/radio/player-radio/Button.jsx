import React from 'react';

export const Button = ({ children, onClick, style = {}, className = '' }) => {
  const defaultStyles = {
    padding: '0.5rem 1rem', // px-4 py-2
    backgroundColor: '#3b82f6', // bg-blue-500
    color: 'white', // text-white
    borderRadius: '0.25rem', // rounded
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyles = {
    backgroundColor: '#2563eb', // hover:bg-blue-600
  };

  const focusStyles = {
    outline: 'none', // focus:outline-none
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)', // focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
  };

  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        ...defaultStyles,
        ...style,
        ':hover': hoverStyles,
        ':focus': focusStyles,
      }}
    >
      {children}
    </button>
  );
};
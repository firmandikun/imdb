import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}) => {
  const baseClasses = "px-4 py-2 rounded-full font-bold transition duration-300";
  const variantClasses = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-500"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
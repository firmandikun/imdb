import React from 'react';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ icon, className, ...props }) => (
  <div className="relative">
    <input
      className={`bg-white text-black px-4 py-2 rounded-full w-full ${className}`}
      {...props}
    />
    {icon && (
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
        {icon}
      </span>
    )}
  </div>
);

export default Input;
import React from 'react';

interface ButtonProps extends HTMLButtonElement {
    label: string;
};

const Button = ({ label }: ButtonProps) => {
  return <button type="button">{label}</button>;
};

export default Button;

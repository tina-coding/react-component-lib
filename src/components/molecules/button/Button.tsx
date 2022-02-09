import React from 'react';
import "./Button.styles.css";

export interface ButtonProps {
    label: string;
};

const Button = ({ label }: ButtonProps) => {
  return <button type="button">{label}</button>;
};

export default Button;

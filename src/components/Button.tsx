import React, { FC } from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  onClick,
}) => {
  const buttonClass = `btn ${
    variant === "primary" ? "btn-primary" : "btn-secondary"
  } ${className}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

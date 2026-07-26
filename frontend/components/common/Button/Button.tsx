import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-[#C89B3C] text-white hover:bg-[#b88b2d] shadow-lg hover:shadow-xl",

    secondary:
      "bg-black text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl",

    outline:
      "border border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C] hover:text-white",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-6 py-3
        rounded-full
        font-semibold
        text-sm
        tracking-wide
        transition-all
        duration-300
        hover:-translate-y-0.5
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

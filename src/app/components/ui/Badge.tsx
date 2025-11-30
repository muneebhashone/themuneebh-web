import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "lime" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-gray-900 text-white",
    lime: "bg-lime/10 text-lime border border-lime",
    outline: "bg-transparent text-gray-400 border border-gray-800",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

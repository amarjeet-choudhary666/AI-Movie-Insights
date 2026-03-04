import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success"
}

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-gray-800 text-white hover:bg-gray-700",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-700 text-white",
    success: "bg-green-600 text-white hover:bg-green-700",
  }
  
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

export { Badge }

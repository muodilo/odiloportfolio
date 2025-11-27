import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeVariants = {
  sm: {
    circle: "w-6 h-6",
    text: "text-lg",
    letter: "text-xs",
  },
  md: {
    circle: "w-10 h-10",
    text: "text-3xl",
    letter: "text-sm",
  },
  lg: {
    circle: "w-10 h-10",
    text: "text-2xl",
    letter: "text-base",
  },
};

export function Logo({ className, textClassName, showText = true, size = "md" }: LogoProps) {
  const sizes = sizeVariants[size];

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <div
        className={cn(
          "rounded-full bg-teal-500 flex items-center justify-center shrink-0",
          sizes.circle
        )}
      >
      </div>
      {showText && (
        <span className={cn("font-bold text-gray-900", sizes.text, textClassName)}>dilo</span>
      )}
    </Link>
  );
}


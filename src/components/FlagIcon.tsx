"use client";

import React from "react";
import Image from "next/image";

export type CountryCode = "india" | "thailand" | "uae" | "srilanka";

interface FlagIconProps {
  country: CountryCode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const FlagIcon: React.FC<FlagIconProps> = ({
  country,
  className = "",
  size = "md"
}) => {
  const flagSources: Record<CountryCode, { src: string; alt: string }> = {
    india: {
      src: "/images/flags/india.png",
      alt: "India Flag"
    },
    thailand: {
      src: "/images/flags/thailand.jpg",
      alt: "Thailand Flag"
    },
    uae: {
      src: "/images/flags/uae.png",
      alt: "United Arab Emirates Flag"
    },
    srilanka: {
      src: "/images/flags/srilanka.png",
      alt: "Sri Lanka Flag"
    }
  };

  const sizeClasses = {
    sm: "w-4 h-2.5",
    md: "w-5 h-3.5",
    lg: "w-6 h-4"
  };

  const flag = flagSources[country] || flagSources.india;

  return (
    <span
      className={`inline-block relative overflow-hidden rounded-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.15)] border border-black/15 flex-shrink-0 align-middle ${sizeClasses[size]} ${className}`}
    >
      <Image
        src={flag.src}
        alt={flag.alt}
        fill
        className="object-cover"
      />
    </span>
  );
};

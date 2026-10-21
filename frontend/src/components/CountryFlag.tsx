import React from "react";

interface CountryFlagProps {
  code: "PK" | "GB" | "US" | "AE" | "SA" | "CA";
  name: string;
  className?: string;
  size?: number;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  code,
  name,
  className = "",
  size = 20
}) => {
  const width = size * 1.4;
  const height = size;

  switch (code) {
    case "PK":
      // Pakistan Flag SVG
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 60 40"
          className={`rounded-sm overflow-hidden shadow-sm inline-block ${className}`}
          aria-label={name}
        >
          <rect width="60" height="40" fill="#01411C" />
          <rect width="15" height="40" fill="#FFFFFF" />
          {/* Crescent */}
          <circle cx="38" cy="20" r="11" fill="#FFFFFF" />
          <circle cx="41" cy="18" r="9.5" fill="#01411C" />
          {/* Star */}
          <polygon
            points="42,12 43.5,16 47.5,16.5 44.5,19 45.5,23 42,20.5 38.5,23 39.5,19 36.5,16.5 40.5,16"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "GB":
      // United Kingdom (Union Jack) SVG
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 60 40"
          className={`rounded-sm overflow-hidden shadow-sm inline-block ${className}`}
          aria-label={name}
        >
          <rect width="60" height="40" fill="#012169" />
          {/* White diagonals */}
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#FFFFFF" strokeWidth="6" />
          {/* Red diagonals */}
          <path d="M0,0 L60,40" stroke="#C8102E" strokeWidth="2" strokeDasharray="30" strokeDashoffset="0" />
          <path d="M60,0 L0,40" stroke="#C8102E" strokeWidth="2" strokeDasharray="30" strokeDashoffset="0" />
          {/* White cross */}
          <path d="M30,0 V40 M0,20 H60" stroke="#FFFFFF" strokeWidth="10" />
          {/* Red cross */}
          <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      );

    case "US":
      // United States Flag SVG
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 60 40"
          className={`rounded-sm overflow-hidden shadow-sm inline-block ${className}`}
          aria-label={name}
        >
          {/* 13 Stripes */}
          <rect width="60" height="40" fill="#B22234" />
          <path
            d="M0,3.08 H60 M0,9.23 H60 M0,15.38 H60 M0,21.54 H60 M0,27.69 H60 M0,33.85 H60"
            stroke="#FFFFFF"
            strokeWidth="3.08"
          />
          {/* Canton */}
          <rect width="26" height="21.54" fill="#3C3B6E" />
          {/* Simplified crisp stars representation */}
          <circle cx="6" cy="5" r="1.2" fill="#FFFFFF" />
          <circle cx="13" cy="5" r="1.2" fill="#FFFFFF" />
          <circle cx="20" cy="5" r="1.2" fill="#FFFFFF" />
          <circle cx="9.5" cy="9" r="1.2" fill="#FFFFFF" />
          <circle cx="16.5" cy="9" r="1.2" fill="#FFFFFF" />
          <circle cx="6" cy="13" r="1.2" fill="#FFFFFF" />
          <circle cx="13" cy="13" r="1.2" fill="#FFFFFF" />
          <circle cx="20" cy="13" r="1.2" fill="#FFFFFF" />
          <circle cx="9.5" cy="17" r="1.2" fill="#FFFFFF" />
          <circle cx="16.5" cy="17" r="1.2" fill="#FFFFFF" />
        </svg>
      );

    case "AE":
      // United Arab Emirates Flag SVG
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 60 40"
          className={`rounded-sm overflow-hidden shadow-sm inline-block ${className}`}
          aria-label={name}
        >
          {/* 3 horizontal stripes */}
          <rect width="60" height="13.33" y="0" fill="#00732F" />
          <rect width="60" height="13.33" y="13.33" fill="#FFFFFF" />
          <rect width="60" height="13.34" y="26.66" fill="#000000" />
          {/* Vertical red stripe */}
          <rect width="15" height="40" fill="#FF0000" />
        </svg>
      );

    case "SA":
      // Saudi Arabia Flag SVG
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 60 40"
          className={`rounded-sm overflow-hidden shadow-sm inline-block ${className}`}
          aria-label={name}
        >
          <rect width="60" height="40" fill="#006C35" />
          {/* Simplified Shahada and Sword representation */}
          <path
            d="M15,18 Q30,12 45,18 M18,22 Q30,17 42,22"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Sword */}
          <path d="M15,26 H45 M17,24 V28" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case "CA":
      // Canada Flag SVG
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 60 40"
          className={`rounded-sm overflow-hidden shadow-sm inline-block ${className}`}
          aria-label={name}
        >
          <rect width="15" height="40" fill="#FF0000" />
          <rect width="30" height="40" x="15" fill="#FFFFFF" />
          <rect width="15" height="40" x="45" fill="#FF0000" />
          {/* Stylized maple leaf */}
          <polygon
            points="30,8 32,15 37,13 35,18 41,21 38,24 39,28 33,27 32,32 30,32 29,32 28,27 22,28 23,24 20,21 26,18 24,13 29,15"
            fill="#FF0000"
          />
        </svg>
      );

    default:
      return null;
  }
};

import React, { useState, useEffect, useRef } from "react";

const CircularProgressBar = ({
  progress,
  size = 100,
  strokeWidth = 10,
  content,
  IconName,
  sectionId,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedProgress / 100) * circumference;
  const observerRef = useRef(null);

  useEffect(() => {
    // sectional render when visited
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimatedProgress(progress), 500);
        } else {
          setAnimatedProgress(0);
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [progress]);

  return (
    <div
      ref={observerRef}
      className="relative flex items-center justify-center"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg]"
      >
        <defs>
          <linearGradient
            id="progress-gradient-light"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{
                stopColor: "var(--primary-color-light)",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "var(--primary-color)", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="progress-gradient-dark"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{
                stopColor: "var(--primary-color-light)",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "var(--primary-color)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Light Mode */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progress-gradient-light)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out dark:hidden"
        />

        {/*  Dark Mode */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progress-gradient-dark)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out hidden dark:block"
        />
      </svg>

      {/* Skill Icon */}
      <span className="absolute flex flex-col items-center justify-center">
        <p className="text-[10px] md:text-sm font-bold">{IconName}</p>
        <img
          src={content}
          alt="Skill Icon"
          className="w-8 h-8 object-contain"
        />
      </span>
    </div>
  );
};

export default CircularProgressBar;

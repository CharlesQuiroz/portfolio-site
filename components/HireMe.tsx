"use client";
import React from "react";
import { HireMeButton } from "@/constants/styled-component";

const HireMe = () => {
  return (
    <div className="fixed bottom-10 right-6 flex items-center justify-center z-30">
      <HireMeButton >
        <button>
          <p className="button__text">
            {"UI/UX Design . Backend Development".split("").map((char, i) => (
              <span key={i} style={{ "--index": i } as React.CSSProperties}>
                {char}
              </span>
            ))}
          </p>
          <div className="button__circle">
            <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon" width={14}>
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
            <svg viewBox="0 0 14 15" fill="none" width={14} xmlns="http://www.w3.org/2000/svg" className="button__icon button__icon--copy">
              <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
            </svg>
          </div>
        </button>
      </HireMeButton>
    </div>
  );
};

export default HireMe;
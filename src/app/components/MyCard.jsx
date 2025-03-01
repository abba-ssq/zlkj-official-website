import React from "react";

export default function MyCard({ children, className }) {
  return (
    <div
      className={`m-auto my-10 max-w-screen-2xl p-5 lg:rounded-2xl lg:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

"use client";
import { useCounter } from "@/contexts/counter";
import React from "react";

const IncrementButton: React.FC = () => {
  const { setCount } = useCounter();
  console.log("IncrementButton Re-Rendered!");
  return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
};

export default IncrementButton;

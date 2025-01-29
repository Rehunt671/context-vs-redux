"use client";
import { useCounter } from "@/contexts/counter";
import React from "react";

const CounterDisplay: React.FC = () => {
  const { count } = useCounter();
  console.log("CounterDisplay Re-Rendered!")
  return <h1>Count: {count}</h1>;
};

export default CounterDisplay;

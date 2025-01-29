// components/CounterDisplay.tsx
"use client";
import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";

const CounterDisplayRedux: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  console.log("CounterDisplayRedux Re-Rendered!");
  return <h1>Count: {count}</h1>;
};

export default CounterDisplayRedux;

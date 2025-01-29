// components/IncrementButton.tsx
"use client";
import { increment } from "@/app/store";
import React from "react";
import { useDispatch } from "react-redux";

const IncrementButtonRedux: React.FC = () => {
  const dispatch = useDispatch();
  console.log("IncrementButtonRedux Re-Rendered!");
  return <button onClick={() => dispatch(increment())}>Increment</button>;
};

export default IncrementButtonRedux;

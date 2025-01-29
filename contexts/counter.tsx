"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CounterContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  console.log("CounterProvider Re-Rendered!");
  return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>;
};

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

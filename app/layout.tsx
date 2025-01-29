'use client';
import { CounterProvider } from "@/contexts/counter";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CounterProvider>
          <Provider store={store}>
          {children}
          </Provider>
        </CounterProvider>
      </body>
    </html>
  );
};

export default RootLayout;

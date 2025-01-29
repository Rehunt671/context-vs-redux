"use client";
import IncrementButton from "@/components/IncrementButton";
import CounterDisplay from "@/components/CounterDisplay";
import { CounterProvider } from "@/contexts/counter";
import CounterDisplayRedux from "@/components/CounterDisplayRedux";
import IncrementButtonRedux from "@/components/IncrementButtonRedux";

const Home: React.FC = () => {
  return (
    // <CounterProvider>
    //    <CounterDisplay />
    //    <IncrementButton />
    // </CounterProvider>

    <>
       <CounterDisplayRedux />
       <IncrementButtonRedux />
    </>
  );
};

export default Home;

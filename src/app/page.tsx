"use client"
import SearchForm from "@/components/SearchForm";
import SkeletonLoader from "@/components/SkeletonLoader";
import Image from "next/image";
import { useState } from "react";
// import Typing from 'react-typing-animation'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [childData, setChildData] = useState('What is life?');
  const [question, setQuestion] = useState('')

  const handleChange = (data: string) => {
    setIsLoading(true);

    setTimeout(() => {
      setChildData(data);
      setIsLoading(false);
    }, 5000);
  }

  const handleQuestion = (data: string) => {
    setQuestion(data)
  }

  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <div className="flex h-full w-full flex-col items-center justify-between p-10">
        <div className="md:w-3/4 w-full h-full mb-4 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Image
            src={"/logo.png"}
            alt="Code HUNTS LOGO"
            width={40}
            height={40}
            className="rounded-md shadow-md" 
            />
            <h1 className="text-2xl md:text-3xl font-bold leading-none text-justify text-[#fff] tracking-tight sm:tracking-normal lg:tracking-tighter">Code Hunts Bot</h1>
          </div>

          <div className="flex flex-shrink-0 items-center md:ps-10 gap-4">
          <Image
            src={"/you.png"}
            alt="Code HUNTS LOGO"
            width={28}
            height={28}
            className="rounded-md shadow-md" 
            />
            <div className="flex flex-col">
              <h2 className="text-xl text-white font-bold">You</h2>
              <p className="text-white text-md">{question}</p>
            </div>
          </div>

          <div className="h-[29.75rem] md:max-h-[26rem] overflow-y-auto w-full mx-auto mt-3">
          {isLoading ? (
              <SkeletonLoader />
            ) : (
              <p className="text-white">
                {childData ? childData.replace(/\*/g, '') : ""}
              </p>
            )}
          </div>
        </div>
        <div className="">
          <SearchForm inputQuery={handleChange} inputQuestion={handleQuestion}/>
        </div>
      </div>
    </main>
  );
}

"use client";
import Link from "next/link";
import Button from "../app/common/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col h-screen overflow-hidden justify-center items-center px-4 sm:px-6 lg:px-8">
      
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/assets/main2.jpeg"
          alt="Main"
          layout="fill"
          objectFit="cover"
          className="opacity-85" 
        />
        
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
 
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl mb-6 font-semibold text-black lg:text-white">
          Welcome to MYpickup
        </h1>

     
        <div className=" lg:hidden mb-6 flex justify-center">
          <Image
            src="/assets/main.jpg"
            alt="Main"
            width={200}
            height={200}
            className="w-2/3 sm:w-1/3"  
          />
        </div>
 
        <div className="flex flex-col gap-3 mt-5">
          <Button className="w-full sm:w-56 text-white lg:text-black">
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button className="w-full sm:w-56 text-white lg:text-black">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

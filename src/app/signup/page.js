 
'use client';
import Link from "next/link";
import Button from '../common/Button';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col h-screen   justify-center items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-xl sm:text-2xl lg:text-3xl mb-6 font-semibold">
        Welcome to MYpickup
      </h1>
      <Image
        src="/assets/main.jpg"
        alt="Main"
        width={200} 
        height={200} 
        className="w-1/2 sm:w-1/3 lg:w-1/4"  
      />

      <div className='flex flex-col gap-4 mt-4'>
        <input type="email" className='bg-gray-200 rounded-xl p-2 placeholder:pl-2' placeholder='Enter Email' />
        <input type="password" className='bg-gray-200 rounded-xl p-2 placeholder:pl-2'  placeholder='Enter Password'  />
        <input type="password" className='bg-gray-200 rounded-xl p-2 placeholder:pl-2'  placeholder='ReEnter Password'  />
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 mt-4 justify-center items-center">
        <Button className="w-full sm:w-56">Sign Up</Button>
        <p className='text-black'>OR</p>
        <Button className="w-full sm:w-56">Google</Button>
        <p className="mt-2 text-sm sm:text-base">
         Already have an account
         <Link href="/signin" className="text-blue-600 cursor-pointer ml-2">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

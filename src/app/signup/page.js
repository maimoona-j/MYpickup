 

'use client';

import Link from "next/link";
import Button from '../common/Button';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
     
    setError('');
    setSuccess('');
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      console.log('Sending request to backend...');
      const response = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log('Response received:', response);
  
      const data = await response.json();
      console.log('Data:', data);
  
      if (response.ok) {
        setSuccess(data.message);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Error during fetch:', err);  // Log error for debugging
      setError('Server error');
    }
  };
  

  return (
    <div className="flex flex-col h-screen justify-center items-center px-4 sm:px-6 lg:px-8">
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

      <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
        <input
          type="email"
          className='bg-gray-200 rounded-xl p-2 placeholder:pl-2'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className='bg-gray-200 rounded-xl p-2 placeholder:pl-2'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className='bg-gray-200 rounded-xl p-2 placeholder:pl-2'
          placeholder='Re-enter Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <Button type="submit" className="w-full sm:w-56">Sign Up</Button>
      </form>

      <div className="flex flex-col gap-4 sm:gap-5 mt-4 justify-center items-center">
        <p className='text-black'>OR</p>
        <Button className="w-full sm:w-56">Google</Button>
        <p className="mt-2 text-sm sm:text-base">
          Already have an account?{' '}
          <Link href="/signin" className="text-blue-600 cursor-pointer ml-2">Sign In</Link>
        </p>
      </div>
    </div>
  );
}


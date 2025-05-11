'use client';
import Link from "next/link";
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../src/app/firebase/config.js"

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleSignIn = () => {
      console.log('User signed in!')
  };

  return <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4
      border-green-400">
          <h1 align="center" className="text-xl font-bold my-4">Login</h1>

          <form className="flex flex-col gap-3">
              <input type="text" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <button className="bg-green-600 text-white
              font-bold cursor-pointer px-6 py-2">Login</button>
              <Link className="text-sm mt-3 text-center" href={'/register'}>
                Don't have an account? <span
                className="underline" align="center">Register</span>
              </Link>
          </form>
      </div>
  </div>
}
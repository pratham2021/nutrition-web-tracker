'use client';
import Link from "next/link";
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import { app, auth } from "../src/app/firebase/config.js"
import { useEffect } from 'react';


export default function RegisterForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const validate = () => {
    let isValid = true;
  
    if (!email) {
      isValid = false;
    }
    if (!name) {
      isValid = false;
    }
    if (!password) {
      isValid = false;
    }
    return isValid;
  };

  const handleSignUp = async (event) => {
      event.preventDefault(); // Prevent default form submission

      if (!validate()) {
        return;
      }

      try {
          const res = await createUserWithEmailAndPassword(email, password);
          const importantId = res.user.uid;
          
          // Save to dynamo db database

          setEmail('');
          setName('');
          setPassword('');
      } catch (e) {
          alert(e);
      }

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        router.push('/dashboard');
      } catch (error) {
          return;
      }
  };


  return <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4
      border-green-400">
          <h1 align="center" className="text-xl font-bold my-4">Register</h1>

          <form className="flex flex-col gap-3">
              <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
              <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              <button className="bg-green-600 text-white
              font-bold cursor-pointer px-6 py-2" onClick={handleSignUp} href={'/dashboard'}>Register</button>

              <Link className="text-sm mt-3 text-center" href={'/'}>
                Already have an account? <span
                className="underline">Login</span>
              </Link>
          </form>
      </div>
  </div>
}
'use client';
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";

export default function Home() {

  const [signInPressed, setSignInPressed] = useState(false);
  const [signUpPressed, setSignUpPressed] = useState(false);

  const [user] = useAuthState(auth);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <main>
      {!user && (!signInPressed && !signUpPressed ? (<RegisterForm/>) : (signInPressed ? (<LoginForm/>) : (<RegisterForm/>)))}
    </main>
  );
}

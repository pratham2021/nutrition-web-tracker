"use client";
import React, { useEffect, useState } from "react";
import { Utensils } from "lucide-react";
import { useRouter } from "next/navigation";
import { auth } from "../src/app/firebase/config";
import { signOut, deleteUser } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";


const NavBar = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("Logged in!");
      } else {
        setUser(null);
        router.push("/");
      }
    });
  }, []);

  const router = useRouter();

  const logTheUserOut = () => {
    signOut(auth);
    router.push("/");
  };

  return (
    <>
      <nav className="border-t-4 border-green-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                
                  <div className="ml-4 flex items-center space-x-4">
                      <Utensils className="align-center text-green-500"/>
                      <div className="flex-shrink-0">
                          <a className="text-black-400 hover:text-green-400" href="/dashboard">Nutrify</a>
                      </div>
                  </div>

                  <div className="hidden md:block">
                      <div className="ml-4 flex items-center space-x-4">
                          <a className="text-black hover:bg-white hover:text-green-400 rounded-lg p-2">Meals</a>
                          <a className="text-black hover:bg-white hover:text-green-400 rounded-lg p-2">Analytics</a>
                          <a className="text-black hover:bg-white hover:text-green-400 rounded-lg p-2">Profile</a>
                          <a className="text-black hover:bg-white hover:text-green-400 rounded-lg p-2" onClick={logTheUserOut}>Log Out</a>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
    </>
  )
}

export default NavBar;
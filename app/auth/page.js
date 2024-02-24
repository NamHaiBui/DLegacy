"use client";
import Link from "next/link";
import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Auth = () => {
  const supabase = createClientComponentClient();
  return (
    <>
      <div id="AuthPage" className="w-full min-h-screen bg-white">
        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          <Link href="/" className="min-w-[170px]">
            <Image width="170" src="/images/logo.svg" />
          </Link>
        </div>
        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          Login/Register
        </div>
        <div className="max-w-[400px] mx-auto px-2">
          <Auth
            onlyThirdPartyProviders
            redirectTo={`${window.location.origin}/auth/callback`}
            supabaseClinet={supabase}
            providers={["google"]}
            appearance={{ theme: ThemeSupa }}
          />
        </div>
      </div>
    </>
  );
};

export default Auth;

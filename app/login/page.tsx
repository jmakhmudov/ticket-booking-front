"use client"

import Navbar from "@/components/Navbar";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const Login = () => {


    return (
        <main>
            <Navbar />

            <section  className="grid place-items-center w-lg p-5 space-y-8">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <LoginForm />
                <p>
                    Don't have an account yet? &#160;
                    <Link href="/signup" className="font-bold">Sign Up</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
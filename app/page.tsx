"use client";
import Image from "next/image";
import Link from "next/link";
import Authentication from "./_components/Authentication";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Home() {
  const user = useAuthContext();
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 px-6 flex justify-between items-center shadow-md">
        <Link href="/" className="flex items-center ml-[-30px] mt-2">
          <Image src="/logo2.svg" alt="Frame2Code" width={200} height={40} />
        </Link>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {darkMode ? <MdLightMode className="text-yellow-400 size-6" /> : <MdDarkMode className="text-gray-800 size-6 dark:text-gray-300" />}
          </button>

          {/* Authentication/Profile */}
          {!user?.user?.email ? (
            <Authentication>
              <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium">
                Sign In
              </button>
            </Authentication>
          ) : (
            <div className="pt-2">
            <ProfileAvatar />
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-5xl font-extrabold leading-tight text-blue-600 dark:text-blue-400"
        >
          Convert Wireframes into Code <br /> in Seconds
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="mt-4 text-lg max-w-2xl text-gray-700 dark:text-gray-300"
        >
          Frame2Code uses AI to turn hand-drawn or digital wireframes into pixel-perfect, responsive front-end code.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/dashboard">
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-semibold">
              Get Started
            </button>
          </Link>
        </motion.div>
      </main>

      {/* How It Works */}
      <section className="py-16 px-6 text-center bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">How It Works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FeatureCard title="Upload a Wireframe" description="Simply upload a hand-drawn or digital wireframe." />
          <FeatureCard title="AI Converts to Code" description="Our AI processes the wireframe and generates clean code." />
          <FeatureCard title="Download & Deploy" description="Download your code and integrate it into your project instantly." />
        </div>
      </section>

      {/* AI Showcase */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">See It in Action</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Upload a wireframe, and let AI generate the code for you.</p>
        <div className="mt-8 flex justify-center">
          {/* <Image src="https://example.com/demo.gif" alt="AI Generating Code" width={500} height={300} className="rounded-md shadow-lg" /> */}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">What Developers Say</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Testimonial name="John Doe" feedback="Frame2Code saved me hours of coding time. The AI-generated code is clean and easy to integrate." />
          <Testimonial name="Jane Smith" feedback="As a startup, this tool helped us rapidly convert UI sketches into working prototypes." />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Frame2Code. All rights reserved.
        <br />
        A project by{" "}
        <Link href="https://hafeezbaig.in" className="text-blue-600 dark:text-blue-400 hover:underline">
          Hafeez Baig
        </Link>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center border border-gray-300 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-blue-400">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}

// Testimonial Component
function Testimonial({ name, feedback }: { name: string; feedback: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-300">"{feedback}"</p>
      <h4 className="mt-4 font-bold text-gray-800 dark:text-blue-400">- {name}</h4>
    </motion.div>
  );
}

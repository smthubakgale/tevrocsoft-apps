import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Code2, Sparkles } from "lucide-react";

import { Home } from "./pages/Home";
import { UserPage } from "./pages/User";
import { TailwindTest } from "./pages/TailwindTest";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50">
        <Navbar />

        <main className="mx-auto max-w-6xl px-4 py-8">
          {/* Hero Section */}
          <div className="relative mb-8 overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
            {/* Decorative Blobs */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-16 left-20 h-52 w-52 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
                  <Code2 size={28} />
                </div>

                <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur">
                  React Starter Template
                </div>
              </div>

              <h1 className="mb-3 text-4xl font-extrabold tracking-tight">
                Modern React Demo
              </h1>

              <p className="max-w-2xl text-lg text-blue-100">
                Explore routing, global state management, icons, and utility-first
                styling in a clean and modern React application.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  🧭 React Router
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  🗂 Zustand
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  🎨 Lucide React
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  💨 Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-indigo-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 font-bold text-indigo-600">
                React Router
              </h3>
              <p className="text-sm text-gray-600">
                Client-side navigation between pages.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 font-bold text-emerald-600">
                Zustand
              </h3>
              <p className="text-sm text-gray-600">
                Lightweight global state management.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 font-bold text-amber-600">
                Lucide React
              </h3>
              <p className="text-sm text-gray-600">
                Beautiful and customizable icons.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="mb-2 font-bold text-cyan-600">
                Tailwind CSS
              </h3>
              <p className="text-sm text-gray-600">
                Utility-first styling for rapid UI development.
              </p>
            </div>
          </div>

          {/* Page Content */}
          <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="mb-6 flex items-center gap-2 border-b pb-4">
              <Sparkles className="text-indigo-500" size={20} />
              <h2 className="font-semibold text-gray-800">
                Interactive Examples
              </h2>
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/tailwind" element={<TailwindTest />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
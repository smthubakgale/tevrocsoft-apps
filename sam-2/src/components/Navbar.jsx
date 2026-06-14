import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Palette } from "lucide-react";
import { useCounter } from "../store/useCounter";

export function Navbar() {
  const location = useLocation();
  const count = useCounter((state) => state.count);

  const links = [
    {
      to: "/",
      label: "Home",
      icon: Home,
    },
    {
      to: "/user",
      label: "User",
      icon: User,
    },
    {
      to: "/tailwind",
      label: "Tailwind",
      icon: Palette,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-200 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white font-bold shadow-lg">
            R
          </div>

          <div>
            <h1 className="font-bold text-gray-900">
              React Demo
            </h1>

            <p className="text-xs text-indigo-500">
              Router • Zustand • Lucide • Tailwind
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            const active = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-200"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Zustand Counter */}
        <div className="flex items-center gap-3 rounded-xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 px-3 py-2 shadow-sm">
          <span className="text-xs font-medium text-slate-600">
            Global Count
          </span>

          <span className="rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 px-3 py-1 text-sm font-bold text-white shadow">
            {count}
          </span>
        </div>
      </div>
    </header>
  );
}
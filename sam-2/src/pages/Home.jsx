import React from "react";
import { useCounter } from "../store/useCounter";
import { Plus, Minus, RotateCcw, Gauge } from "lucide-react";

export function Home() {
  const { count, inc, dec, reset } = useCounter();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Home Dashboard
        </h2>
        <p className="text-sm text-gray-600">
          Control and observe your global Zustand state in real time.
        </p>
      </div>

      {/* Counter Card */}
      <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Left Info */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow">
              <Gauge size={22} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Global Counter</p>
              <h3 className="text-3xl font-bold text-gray-900">
                {count}
              </h3>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={inc}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-white shadow hover:scale-105 transition"
            >
              <Plus size={16} />
              Add
            </button>

            <button
              onClick={dec}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 px-4 py-2 text-white shadow hover:scale-105 transition"
            >
              <Minus size={16} />
              Minus
            </button>

            <button
              onClick={reset}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-2 text-white shadow hover:scale-105 transition"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
        This page uses Zustand for global state management. Any change here
        is reflected instantly in the navbar counter.
      </div>
    </div>
  );
}
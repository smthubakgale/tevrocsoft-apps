import React from "react";
import { useCounter } from "../store/useCounter";
import { User, Activity, Database } from "lucide-react";

export function UserPage() {
  const count = useCounter((state) => state.count);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <User className="text-blue-600" />
          User Page
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          This page demonstrates shared global state using Zustand across the app.
        </p>
      </div>

      {/* Main Card */}
      <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Left Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow">
              <Activity size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Live Global State</p>
              <h3 className="text-4xl font-bold text-gray-900">
                {count}
              </h3>
            </div>
          </div>

          {/* Right Badge */}
          <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            🔄 Automatically synced from Home page actions
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 shadow-sm">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-blue-700">
            <Database size={18} />
            Zustand Store
          </h3>
          <p className="text-sm text-blue-700/80">
            The counter state is shared globally across all pages without prop drilling.
            Any update in Home instantly reflects here.
          </p>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 shadow-sm">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-indigo-700">
            <User size={18} />
            User Context
          </h3>
          <p className="text-sm text-indigo-700/80">
            This page simulates a user dashboard where global application state can be viewed
            and potentially extended with user-specific data.
          </p>
        </div>
      </div>
    </div>
  );
}
import React from "react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <h1 className="text-xl font-semibold text-gray-800">HR Overview</h1>
      <div className="flex items-center gap-6">
        <span className="bg-gray-100 px-4 py-2 rounded text-gray-500 text-sm">
          {new Date().toLocaleDateString('en-GB')}
        </span>
        <button className="relative">
  <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">HR</div>
          <div>
            <div className="font-semibold text-gray-800 text-sm">HR Director</div>
            <div className="text-xs text-gray-400">HR Director</div>
          </div>
        </div>
      </div>
    </header>
  );
}



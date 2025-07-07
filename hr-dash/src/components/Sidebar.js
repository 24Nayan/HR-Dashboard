import React from "react";

const menu = [
  { label: "Dashboard", icon: "📊" },
  { label: "Employees", icon: "👥" },
  { label: "Attendance", icon: "🕒" },
  { label: "Performance", icon: "📈" },
  { label: "Payroll", icon: "💰" },
  { label: "Engagement", icon: "💬" },
  { label: "Recruitment", icon: "📝" },
  { label: "Settings", icon: "⚙️" },
];

export default function Sidebar({ current, onNavigate }) {
  return (
    <aside className="w-56 bg-white h-full shadow flex flex-col py-8">
      <div className="px-6 mb-10">
        <span className="font-bold text-xl text-gray-800">VibeXio.AI</span>
      </div>
      <nav className="flex-1">
        {menu.map((item) => (
          <div
            key={item.label}
            className={`flex items-center px-6 py-3 cursor-pointer mb-1 rounded-l-full ${
              current === item.label
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => onNavigate(item.label)}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

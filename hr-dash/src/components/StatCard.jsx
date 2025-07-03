import React from "react";

const icons = {
  employees: "👥",
  present: "✅",
  attrition: "❌",
  hire: "➕",
};

const bgColors = {
  employees: "bg-blue-50",
  present: "bg-green-50",
  attrition: "bg-red-50",
  hire: "bg-purple-50",
};

const textColors = {
  employees: "text-blue-600",
  present: "text-green-600",
  attrition: "text-red-600",
  hire: "text-purple-600",
};

export default function StatCard({ type, title, value }) {
  return (
    <div className={`flex items-center p-4 rounded-lg shadow bg-white`}>
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColors[type]} ${textColors[type]} text-2xl mr-4`}>
        {icons[type]}
      </div>
      <div>
        <div className="text-xs text-gray-500">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}
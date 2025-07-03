import React from "react";

const events = [
  { name: "Chance Saris", date: "June 18,2025", tag: "Birthday", tagColor: "bg-blue-100 text-blue-600", icon: "🎂" },
  { name: "Anniversaries", date: "June 18,2025", tag: "2 Years Done", tagColor: "bg-yellow-100 text-yellow-600", icon: "💡" },
  { name: "Independant Day", date: "June 18,2025", tag: "Festival", tagColor: "bg-green-100 text-green-600", icon: "🪴" },
];

export default function UpcomingEvents() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-lg">Upcoming Events</span>
        <button className="text-xs text-blue-500 font-medium">View All</button>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.name}
            className="flex items-center justify-between bg-white rounded-lg shadow-sm px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-xl">
                {event.icon}
              </span>
              <div>
                <div className="font-semibold text-sm text-gray-800">{event.name}</div>
                <div className="text-xs text-gray-400">{event.date}</div>
              </div>
            </div>
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${event.tagColor} whitespace-nowrap`}
            >
              {event.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
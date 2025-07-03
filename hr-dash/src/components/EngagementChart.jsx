import React from "react";

export default function EngagementChart() {
  // Replace with a real chart later
  return (
    <div>
      <div className="font-semibold mb-2">Engagement Score</div>
      <div className="h-40 flex items-center justify-center bg-green-50 rounded mb-2">
        <span className="text-green-300">[Doughnut Chart Placeholder]</span>
      </div>
      <div className="flex justify-between text-xs">
        <span>Participations <b>90%</b></span>
        <span>Response rate <b>10%</b></span>
      </div>
    </div>
  );
}
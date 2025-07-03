import React from "react";

const data = [
  { dept: "HR", count: 4 },
  { dept: "Finance", count: 6 },
  { dept: "Customer Support", count: 7 },
  { dept: "Product", count: 2 },
  { dept: "Sales", count: 3 },
  { dept: "Digital Marketing", count: 3 },
  { dept: "Developing", count: 5 },
];

export default function DepartmentHeadcount() {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="flex font-semibold">Department-wise Headcount</span>
        <label className="flex items-center text-xs gap-1">
          <input type="checkbox" checked readOnly className="accent-blue-500" />
          Show All
        </label>
      </div>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.dept} className="flex items-center">
            <span className="w-32 text-xs text-gray-600">{item.dept}</span>
            <div className="flex-1 h-3 bg-blue-100 rounded mr-2">
              <div
                className="h-3 bg-blue-500 rounded"
                style={{ width: `${item.count * 12}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
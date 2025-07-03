import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import AttritionChart from "./components/AttritionChart";
import EngagementChart from "./components/EngagementChart";
import DepartmentHeadcount from "./components/DepartmentHeadcount";
import UpcomingEvents from "./components/UpcomingEvents";
import Employees from "./components/Employees";
import "./App.css";

function App() {
  const [page, setPage] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar current={page} onNavigate={setPage} />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6">
          {page === "Dashboard" && (
            <div className="grid grid-cols-3 gap-6">
              {/* Stat Cards */}
              <section className="col-span-3 grid grid-cols-4 gap-4 mb-6">
                <StatCard type="employees" title="Total Employees" value={200} />
                <StatCard type="present" title="Today's Present" value={150} />
                <StatCard type="attrition" title="Attrition" value={50} />
                <StatCard type="hire" title="New Hire" value={50} />
              </section>
              {/* Charts and Lists */}
              <section className="col-span-2 bg-white rounded-lg shadow p-4">
                <AttritionChart />
              </section>
              <section className="bg-white rounded-lg shadow p-4">
                <EngagementChart />
              </section>
              <section className="bg-white rounded-lg shadow p-4">
                <DepartmentHeadcount />
              </section>
              <section className="bg-white rounded-lg shadow p-4">
                <UpcomingEvents />
              </section>
            </div>
          )}
          {page === "Employees" && <Employees />}
        </main>
      </div>
    </div>
  );
}

export default App;
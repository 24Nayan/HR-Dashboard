import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees'




const initialEmployees = [
  {
    id: 1,
    name: "Chance Saris",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    date: "June 18,2025",
    role: "Developer",
    phone: "9876543210",
    email: "hgsdats73@gmail.com",
    performance: 9,
    joined: "Mar 15, 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Chance Saris",
    status: "On Leave",
    statusColor: "bg-red-100 text-red-700",
    date: "June 18,2025",
    role: "Developer",
    phone: "9876543210",
    email: "hgsdats73@gmail.com",
    performance: 9,
    joined: "Mar 15, 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Chance Saris",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    date: "June 18,2025",
    role: "Developer",
    phone: "9876543210",
    email: "hgsdats73@gmail.com",
    performance: 9,
    joined: "Mar 15, 2023",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const statCards = [
  { title: "Total Employees", value: 200, icon: "👥" },
  { title: "Active", value: 150, icon: "🟢" },
  { title: "On Leave", value: 50, icon: "🔴" },
  { title: "In Active", value: 50, icon: "🟣" },
];

const tabs = ["All Employees", "Recent Hirings", "Birthday", "Anniversaries"];

const statusOptions = [
  { label: "Active", color: "bg-green-100 text-green-700" },
  { label: "On Leave", color: "bg-red-100 text-red-700" },
  { label: "In Active", color: "bg-gray-100 text-gray-700" },
];

function mapEmployeeFromBackend(emp) {
  // Find the status option that matches the department
  const statusObj = statusOptions.find(s => s.label === emp.department) || statusOptions[0];
  return {
    ...emp,
    status: emp.department,
    statusColor: statusObj.color,
  };
}

export default function Employees() {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    status: statusOptions[0].label,
    date: "",
    role: "",
    phone: "",
    email: "",
    performance: 5,
    joined: "",
    avatar: "",
  });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    status: statusOptions[0].label,
    date: "",
    role: "",
    phone: "",
    email: "",
    performance: 5,
    joined: "",
    avatar: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    // Prepare the data to match your backend schema
    const newEmployee = {
      name: form.name,
      department: form.status, // or map status to department if needed
      position: form.role,
      // Add other fields if your backend schema supports them
    };
    axios.post('http://localhost:5000/api/employees', newEmployee)
      .then(res => {
        setEmployees([...employees, mapEmployeeFromBackend(res.data)]);
        setShowModal(false);
        setForm({
          name: "",
          status: statusOptions[0].label,
          date: "",
          role: "",
          phone: "",
          email: "",
          performance: 5,
          joined: "",
          avatar: "",
        });
      })
      .catch(err => alert(err.response?.data?.error || "Error adding employee"));
  };

  const handleDeleteEmployee = (id) => {
    axios.delete(`http://localhost:5000/api/employees/${id}`)
      .then(() => setEmployees(employees.filter(emp => emp._id !== id)))
      .catch(err => alert(err.response?.data?.error || "Error deleting employee"));
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data.map(mapEmployeeFromBackend)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Topbar */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-2">
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700" onClick={() => setShowModal(true)}>
            + Add New Employee
          </button>
          <button className="text-blue-600 font-medium hover:underline">Download</button>
          <button className="text-blue-600 font-medium hover:underline">Send Email</button>
        </div>
        <div>
          <button className="border px-4 py-2 rounded text-gray-600 bg-white shadow-sm">All Department ▼</button>
        </div>
      </div>
      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {statCards.map((card) => (
          <div key={card.title} className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
            <span className="text-2xl">{card.icon}</span>
            <div>
              <div className="text-2xl font-bold">{card.value}</div>
              <div className="text-gray-500 text-sm">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`pb-2 font-medium ${activeTab === idx ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500"}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map(emp => (
          <div key={emp._id || emp.id} className="bg-white rounded-lg shadow p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={emp.avatar || "https://randomuser.me/api/portraits/men/32.jpg"} alt={emp.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-lg">{emp.name}</div>
                  <div className="text-gray-400 text-sm">{emp.date}</div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${emp.statusColor || "bg-green-100 text-green-700"}`}>{emp.status || "Active"}</span>
            </div>
            <div className="flex flex-col gap-1 text-gray-600 text-sm">
              <div><span className="material-icons align-middle mr-1">work</span> {emp.role}</div>
              <div><span className="material-icons align-middle mr-1">call</span> {emp.phone}</div>
              <div><span className="material-icons align-middle mr-1">email</span> {emp.email}</div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-500 text-xs">Performance</span>
              <div className="flex-1 bg-gray-200 rounded h-2 mx-2">
                <div className="bg-blue-500 h-2 rounded" style={{ width: `${emp.performance * 10}%` }}></div>
              </div>
              <span className="text-gray-500 text-xs">{emp.performance}/10</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
              <span>Joined<br />{emp.joined}</span>
              <div className="flex gap-2">
                <button
                  className="hover:text-blue-600"
                  onClick={() => {
                    setEditingEmployee(emp);
                    setEditForm({
                      name: emp.name || "",
                      status: emp.status || statusOptions[0].label,
                      date: emp.date || "",
                      role: emp.role || "",
                      phone: emp.phone || "",
                      email: emp.email || "",
                      performance: emp.performance || 5,
                      joined: emp.joined || "",
                      avatar: emp.avatar || "",
                    });
                    setShowModal(false); // close add modal if open
                  }}
                >
                  <span className="material-icons text-base">edit</span>
                </button>
                <button onClick={() => handleDeleteEmployee(emp._id)} className="hover:text-red-600">
                  <span className="material-icons text-base">delete</span>
                </button>
                <button className="hover:text-gray-600"><span className="material-icons text-base">more_horiz</span></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add Employee Modal (form) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Employee</h2>
            <form onSubmit={handleAddEmployee} className="space-y-4">
              <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Name" className="w-full border rounded px-3 py-2" />
              <select name="status" value={form.status} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
                {statusOptions.map((s) => (
                  <option key={s.label} value={s.label}>{s.label}</option>
                ))}
              </select>
              <input name="date" value={form.date} onChange={handleFormChange} required placeholder="Date (e.g. June 18,2025)" className="w-full border rounded px-3 py-2" />
              <input name="role" value={form.role} onChange={handleFormChange} required placeholder="Role" className="w-full border rounded px-3 py-2" />
              <input name="phone" value={form.phone} onChange={handleFormChange} required placeholder="Phone" className="w-full border rounded px-3 py-2" />
              <input name="email" value={form.email} onChange={handleFormChange} required placeholder="Email" className="w-full border rounded px-3 py-2" />
              <input name="performance" type="number" min="1" max="10" value={form.performance} onChange={handleFormChange} required placeholder="Performance (1-10)" className="w-full border rounded px-3 py-2" />
              <input name="joined" value={form.joined} onChange={handleFormChange} required placeholder="Joined (e.g. Mar 15, 2023)" className="w-full border rounded px-3 py-2" />
              <input name="avatar" value={form.avatar} onChange={handleFormChange} placeholder="Avatar URL (optional)" className="w-full border rounded px-3 py-2" />
              <div className="flex gap-2 justify-end">
                <button type="button" className="px-4 py-2 rounded bg-gray-200" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {editingEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Employee</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                axios
                  .put(`http://localhost:5000/api/employees/${editingEmployee._id}`, {
                    name: editForm.name,
                    department: editForm.status,
                    position: editForm.role,
                    // add other fields as needed
                  })
                  .then(res => {
                    setEmployees(employees.map(emp =>
                      emp._id === editingEmployee._id ? mapEmployeeFromBackend(res.data) : emp
                    ));
                    setEditingEmployee(null);
                  })
                  .catch(err => alert(err.response?.data?.error || "Error updating employee"));
              }}
              className="space-y-4"
            >
              <input name="name" value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} required placeholder="Name" className="w-full border rounded px-3 py-2" />
              <select name="status" value={editForm.status} onChange={e => setEditForm({ ...editForm, status: e.target.value })} className="w-full border rounded px-3 py-2">
                {statusOptions.map((s) => (
                  <option key={s.label} value={s.label}>{s.label}</option>
                ))}
              </select>
              <input name="date" value={editForm.date} onChange={e => setEditForm({ ...editForm, date: e.target.value })} required placeholder="Date" className="w-full border rounded px-3 py-2" />
              <input name="role" value={editForm.role} onChange={e => setEditForm({ ...editForm, role: e.target.value })} required placeholder="Role" className="w-full border rounded px-3 py-2" />
              <input name="phone" value={editForm.phone} onChange={e => setEditForm({ ...editForm, phone: e.target.value })} required placeholder="Phone" className="w-full border rounded px-3 py-2" />
              <input name="email" value={editForm.email} onChange={e => setEditForm({ ...editForm, email: e.target.value })} required placeholder="Email" className="w-full border rounded px-3 py-2" />
              <input name="performance" type="number" min="1" max="10" value={editForm.performance} onChange={e => setEditForm({ ...editForm, performance: e.target.value })} required placeholder="Performance (1-10)" className="w-full border rounded px-3 py-2" />
              <input name="joined" value={editForm.joined} onChange={e => setEditForm({ ...editForm, joined: e.target.value })} required placeholder="Joined" className="w-full border rounded px-3 py-2" />
              <input name="avatar" value={editForm.avatar} onChange={e => setEditForm({ ...editForm, avatar: e.target.value })} placeholder="Avatar URL" className="w-full border rounded px-3 py-2" />
              <div className="flex gap-2 justify-end">
                <button type="button" className="px-4 py-2 rounded bg-gray-200" onClick={() => setEditingEmployee(null)}>Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 
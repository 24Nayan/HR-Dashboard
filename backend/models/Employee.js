const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  position: { type: String, required: true },
  hireDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Active' }
});

module.exports = mongoose.model('Employee', EmployeeSchema);

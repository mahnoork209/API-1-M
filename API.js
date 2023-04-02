const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  designation: { type: String, required: true },
  department: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);


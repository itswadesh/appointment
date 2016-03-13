'use strict';

import mongoose from 'mongoose';

var AppointmentSchema = new mongoose.Schema({
  date: Date,
  time: String,
  name: String,
  phone: String,
  status: Boolean
});

export default mongoose.model('Appointment', AppointmentSchema);

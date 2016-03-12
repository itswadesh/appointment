/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Appointment from '../api/appointment/appointment.model';
import User from '../api/user/user.model';

Appointment.find({})
  .then(() => {
    Appointment.create({
      date: '2015-06-12',
      time: '10:00'
    }, {
      date: '2015-06-12',
      time: '10:30'
    }, {
      date: '2015-06-12',
      time: '10:45'
    }, {
      date: '2015-06-12',
      time: '11:30'
    }, {
      date: '2015-06-12',
      time: '12:00'
    }, {
      date: '2015-06-12',
      time: '12:15'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

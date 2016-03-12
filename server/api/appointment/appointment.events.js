/**
 * Appointment model events
 */

'use strict';

import {EventEmitter} from 'events';
var Appointment = require('./appointment.model');
var AppointmentEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AppointmentEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Appointment.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AppointmentEvents.emit(event + ':' + doc._id, doc);
    AppointmentEvents.emit(event, doc);
  }
}

export default AppointmentEvents;

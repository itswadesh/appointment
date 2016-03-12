'use strict';

var app = require('../..');
import request from 'supertest';

var newAppointment;

describe('Appointment API:', function() {

  describe('GET /api/appointments', function() {
    var appointments;

    beforeEach(function(done) {
      request(app)
        .get('/api/appointments')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          appointments = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      appointments.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/appointments', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/appointments')
        .send({
          name: 'New Appointment',
          info: 'This is the brand new appointment!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAppointment = res.body;
          done();
        });
    });

    it('should respond with the newly created appointment', function() {
      newAppointment.name.should.equal('New Appointment');
      newAppointment.info.should.equal('This is the brand new appointment!!!');
    });

  });

  describe('GET /api/appointments/:id', function() {
    var appointment;

    beforeEach(function(done) {
      request(app)
        .get('/api/appointments/' + newAppointment._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          appointment = res.body;
          done();
        });
    });

    afterEach(function() {
      appointment = {};
    });

    it('should respond with the requested appointment', function() {
      appointment.name.should.equal('New Appointment');
      appointment.info.should.equal('This is the brand new appointment!!!');
    });

  });

  describe('PUT /api/appointments/:id', function() {
    var updatedAppointment;

    beforeEach(function(done) {
      request(app)
        .put('/api/appointments/' + newAppointment._id)
        .send({
          name: 'Updated Appointment',
          info: 'This is the updated appointment!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAppointment = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAppointment = {};
    });

    it('should respond with the updated appointment', function() {
      updatedAppointment.name.should.equal('Updated Appointment');
      updatedAppointment.info.should.equal('This is the updated appointment!!!');
    });

  });

  describe('DELETE /api/appointments/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/appointments/' + newAppointment._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when appointment does not exist', function(done) {
      request(app)
        .delete('/api/appointments/' + newAppointment._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});

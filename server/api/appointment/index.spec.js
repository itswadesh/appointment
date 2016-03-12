'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var appointmentCtrlStub = {
  index: 'appointmentCtrl.index',
  show: 'appointmentCtrl.show',
  create: 'appointmentCtrl.create',
  update: 'appointmentCtrl.update',
  destroy: 'appointmentCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var appointmentIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './appointment.controller': appointmentCtrlStub
});

describe('Appointment API Router:', function() {

  it('should return an express router instance', function() {
    appointmentIndex.should.equal(routerStub);
  });

  describe('GET /api/appointments', function() {

    it('should route to appointment.controller.index', function() {
      routerStub.get
        .withArgs('/', 'appointmentCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/appointments/:id', function() {

    it('should route to appointment.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'appointmentCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/appointments', function() {

    it('should route to appointment.controller.create', function() {
      routerStub.post
        .withArgs('/', 'appointmentCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/appointments/:id', function() {

    it('should route to appointment.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'appointmentCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/appointments/:id', function() {

    it('should route to appointment.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'appointmentCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/appointments/:id', function() {

    it('should route to appointment.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'appointmentCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

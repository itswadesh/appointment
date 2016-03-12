'use strict';
(function(){

class AppointmentComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('generatorMaterialAppApp')
  .component('appointment', {
    templateUrl: 'app/appointment/appointment.html',
    controller: AppointmentComponent
  });

})();

'use strict';

(function() {

class MainController {

 constructor($http,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.socket = socket;
    this.appointment = [];
    this.slots = [];
    // Configure dates
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 
    // Create date array
    this.days = [{dd:dd,mm:mm,yyyy:yyyy},{dd:dd+1,mm:mm,yyyy:yyyy},{dd:dd+2,mm:mm,yyyy:yyyy},{dd:dd+3,mm:mm,yyyy:yyyy}];
  }
  save(appointment){
      var apt = {};
    // var date = new Date(date.yyyy, date.mm-1, date.dd, appointment.h,appointment.m);
    apt.date = appointment;
    this.$http.post('/api/appointments',apt);
        
  }
  $onInit(){
    var vm = this;
    this.$http.get('/api/appointments').then(response=>{
        this.slots=[{h:'10',m:'00'},{h:'10',m:'15'},{h:'10',m:'30'},{h:'10',m:'45'},{h:'11',m:'00'},{h:'11',m:'15'},{h:'11',m:'30'}];
        var a = [];
        _.each(vm.days, function(d) { 
            var k=new Date(d.yyyy,d.mm,d.dd);
           
            var v = [];
            _.each(vm.slots, function(s) { 
                var x = new Date(d.yyyy,d.mm,d.dd,s.h,s.m);
                var mx = moment(x);
                var active = true;
                _.each(response.data, function(g) { 
                    var sdt = moment(new Date(g.date));
                    // console.log(moment(g.date)._i, moment(x)._i);
                //   console.log(moment.duration(sdt.diff(mx))._milliseco   nds);  
                    if(moment.duration(sdt.diff(mx))._milliseconds===0){
                        // console.log('xxxxxxxxxxxxxx');
                        active = false;
                    }
                })
                v.push({text:x,active:active});
            })
            a.push({k:k,v:v});
        })
        this.dates = a;
        this.appointment=response.data;
        this.socket.syncUpdates('appointment', this.dates);
    });
  }
  delete(d){
      this.$http.delete('/api/appointments/'+d._id);
  }
  
}

angular.module('generatorMaterialAppApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();

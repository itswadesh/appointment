'use strict';
(function(){

class BookComponent {
  constructor($http,socket) {
    this.message = 'Hello';
    this.$http=$http;
    this.socket = socket;

  }
  ad(book){
      console.log('hello book',book,book._id);
      if(book._id)
        this.$http.put('/api/books/'+book._id, book);
      else
        this.$http.post('/api/books',book);
        
  }
  $onInit(){
    this.$http.get('/api/books').then(response=>{
        this.data=response.data;
        this.socket.syncUpdates('book', this.data);
    });
  }
  del(d){
      this.$http.delete('/api/books/'+d._id);
  }
  edt(d){
     this.book=d;
      
  }
}

angular.module('generatorMaterialAppApp')
  .component('book', {
    templateUrl: 'app/book/book.html',
    controller: BookComponent
  });

})();

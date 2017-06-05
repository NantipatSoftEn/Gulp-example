'use strict';

(function() {
  var a = 2;
  console.log(a);
  console.log('Hello World');
  console.console.log("fuckinghead");
  var date = new Date();
  var D = date.getDate();
  var M = date.getMonth();
  var Y = date.getFullYear();
  var h = date.getHours();
  var m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

  var stringDate = D + '/' + M + '/' + Y + ' ' + h + ' : ' + m;

  document.getElementById('main').innerHTML += '<p class="text-right">Created At : ' + stringDate + '</p>';
})();

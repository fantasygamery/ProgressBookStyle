var Images = {
"https://parentaccess.ocps.net/images/public/parentaccess.jpg":function(E){
  E.id = 'time';
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();

},
}
var all = document.getElementsByTagName("img");
for (var i=0, max=all.length; i < max; i++) {
if (Images[all[i].src]){
Images[all[i].src](all[i]);
console.log('Revised: '+i)
}
}

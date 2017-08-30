var Images = {
"https://parentaccess.ocps.net/images/public/parentaccess.jpg":'https://vignette3.wikia.nocookie.net/breakingbad/images/d/dd/Unknown.png/revision/latest?cb=20170620074945',
}
var all = document.getElementsByTagName("img");
for (var i=0, max=all.length; i < max; i++) {
if (Images[all[i].src]){
all[i].src = Images[all[i].src];
console.log('Revised: '+i)
}
}

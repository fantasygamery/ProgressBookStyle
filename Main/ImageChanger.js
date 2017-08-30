var Images = {
"https://parentaccess.ocps.net/images/public/parentaccess.jpg":'https://raw.githubusercontent.com/fantasygamery/ProgressBookStyle/master/Main/PGLogo.jpg',
}
var all = document.getElementsByTagName("img");
for (var i=0, max=all.length; i < max; i++) {
if (Images[all[i].src]){
all[i].src = Images[all[i].src];
console.log('Revised: '+i)
}
}

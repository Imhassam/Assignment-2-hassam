var today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = 'Today is : ';
document.getElementById("d").innerHTML = day+days[today.getDay()];
var day = 'Current is : '+today.toLocaleString('en-US', { hour: 'numeric', hour12: true })+' : '+today.getMinutes()+' : '+today.getSeconds();
document.getElementById("d1").innerHTML = day;
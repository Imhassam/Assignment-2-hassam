let a = 5;
let b = 6;
let c = 7;
let p = (a+b+c)/2;
let area =Math.sqrt(p*(p-a)*(p-b)*(p-c))
document.getElementById("a").innerHTML = 'A = '+a;
document.getElementById("b").innerHTML = 'B = '+a;
document.getElementById("c").innerHTML = 'C = '+a;
document.getElementById("area").innerHTML = 'Area  = '+area;
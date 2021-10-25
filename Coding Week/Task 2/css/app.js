var today = new Date();
document.getElementById("d").innerHTML = today.getMonth()+1+'-'+today.getDate()+'-'+today.getFullYear();
document.getElementById("d1").innerHTML = today.getMonth()+1+'/'+today.getDate()+'/'+today.getFullYear();
document.getElementById("d2").innerHTML = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById("d3").innerHTML = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

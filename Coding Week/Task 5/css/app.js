function myFunction(){
    let a = document.getElementById("in").value;
    if((a%4 == 0) && (a%100 != 0 ) || (a%400 ==0)){
        alert("It's a leap year!!!")
    }
    else{
        alert("It's not a leap year!!!")
    }
}

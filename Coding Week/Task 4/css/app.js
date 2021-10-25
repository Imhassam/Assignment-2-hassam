var myVar = setInterval(myFunction, 1000);
    
    var word = 'Saylani';
var newArray = word.split('');

function myFunction() {
var letter = newArray.pop();
var newWord = newArray.unshift(letter);
var theWord = newArray.join('');
document.getElementById('s').innerHTML = theWord;
}
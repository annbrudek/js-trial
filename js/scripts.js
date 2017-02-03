var buttonWithClass = document.getElementsByClassName('button');

var n = buttonWithClass.length;
console.log(n);
for (x=0; x<n; x++){
    console.log(buttonWithClass[x].innerText);
} 

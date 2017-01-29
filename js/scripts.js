var a = prompt('Wprowadź wartość a podstawy trójkąta');
var h = prompt('Wprowadź wartość wysokości h');

function getTriangleArea(a, h) {
if ((a <= 0) || (h <= 0)) {
    alert('Nieprawidłowe dane');
} else {
    var triangleArea = a*h/2;
    alert('Pole trójkąta wynosi ' + triangleArea);
    return('Pole trójkąta wynosi ' + triangleArea);
    
} 
}

console.log(getTriangleArea(a,h));



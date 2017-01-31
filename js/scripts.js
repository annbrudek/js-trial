function getTriangleArea(a, h) {
if ((a <= 0) || (h <= 0)) {
    console.log('Nieprawidłowe dane');
} else {
    var triangleArea = a*h/2;
    console.log('Pole trójkąta wynosi ' + triangleArea);
    return(triangleArea);
    
} 
}

console.log(getTriangleArea(10,6));
var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(8,4);
var triangle3Area = getTriangleArea(4,13);



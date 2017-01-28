//Przypisanie wartości zmiennym
var a = prompt('Podaj wartość zmiennej a');
var b = prompt('Podaj wartość zmiennej b');

//Przypisanie wyniku
value = (a*a) + (2*a*b) - (b*b);
alert('Wynik działania to: ' + value);
console.log(value);

if (value < 0) {
    console.log('Wynik ujemny')
}

else if (value == 0) {
    console.log('Wynik równy 0')

}

else {
    console.log('Wynik dodatni')
}
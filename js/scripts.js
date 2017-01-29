function rysujChoinke(n){
    for (var a = 1 ; a <=5; a++) {
        var star = ' ';
    for (b=1; b <= n*2-1; b++ ) {
        var star = star += '*';
}   console.log(star);
}   
}   

rysujChoinke(1);
rysujChoinke(2);
rysujChoinke(3);
rysujChoinke(4);
rysujChoinke(5);
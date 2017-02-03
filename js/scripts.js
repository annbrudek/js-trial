function drawTree(n){
    for (var a = 1 ; a <=n; a++) {
        var star = ' ';
    for (var x=1; x<=n-a; x++){
        star += ' ';
    }
    for (b=1; b <= a*2-1; b++ ) {
        star += '*';
}       console.log(star);
}   
}   

drawTree(5);


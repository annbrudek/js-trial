function drawTree(n){
    for (var a = 0 ; a <=n; a++) {
        var star = ' ';
    for (b=1; b <= n*2-1; b++ ) {
        star += '*';
}       console.log(star);
}   
}   

drawTree(1);
drawTree(2);
drawTree(3);
drawTree(4);
drawTree(5);

var list = document.getElementById('Lista');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e){
    list.innerHTML += '<li>item</li>';
});
var element = document.getElementsByTagName('li');




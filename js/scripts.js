var list = document.getElementById('List');
var add = document.getElementById('addElem');
var element = document.getElementsByTagName('li').length;
add.addEventListener('click', function(e){
    element = document.getElementsByTagName('li').length;
    list.innerHTML += '<li>item ' + element + '</li>';
});





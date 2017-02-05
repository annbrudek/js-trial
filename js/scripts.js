var list = document.getElementById('list');
var add = document.getElementById('addElem');
var element = document.getElementsByTagName('li').length;
add.addEventListener('click', function(e){
    elementCount = document.getElementsByTagName('li').length;
    list.innerHTML += '<li>item ' + elementCount + '</li>';
});





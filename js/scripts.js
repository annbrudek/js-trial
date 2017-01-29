var withButtonItemsClass = document.getElementsByClassName('button');

console.log(withButtonItemsClass);
console.log(withButtonItemsClass.length);

var n = withButtonItemsClass.length;
console.log(n);
for (x=1; x<=n; x++){
       withButtonItemsClass.innerText ='Text w button'; 
       alert(withButtonItemsClass.innerText );
} 

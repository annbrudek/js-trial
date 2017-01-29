var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var zieloneSlonie = 'Zielone słonie';
var zieloneSlonieUperCased = zieloneSlonie.toUpperCase();
var textAfter = text.replace('Papugi', zieloneSlonie);
var partOfTextAfter = textAfter.slice(0, textAfter.length/2);
console.log(partOfTextAfter);

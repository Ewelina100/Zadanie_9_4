function drawStars(liczba) {
	
  var star = "";
	for(var i=1;i<=liczba;i++) {
  	star += "*";
  }
  
  console.log(star);
  
}

function drawTree(pietra) {
  
  for(var i=1; i<=pietra; i++) {  
    drawStars(i);
  }    
  
}

drawTree(6);
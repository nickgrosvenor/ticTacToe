
 // function playBox(){

 // event.target.innerHTML = "<img src='screech11.jpg'>";
 // event.target.innerHTML = "<img src='urkel.jpg'>";
 // }

var turn=1;
var cellArray = [["","",""],["","",""],["","",""] ];
function playBox(){
	
	switch(turn) {
		case 1:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		cellArray[0][0] = "x"
		break;
		case 2:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		cellArray[0][1] = "o"
		break;
		case 3:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		cellArray[0][2] = "x"
		break;
		case 4:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		cellArray[1][0] = "o"
		break;
		case 5:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		cellArray[1][1] = "x"
		break;
		case 6:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		cellArray[1][2] = "o"
		break;
		case 7:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		cellArray[2][0] = "x"
		break;
		case 8:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		cellArray[2][1] = "o"
		break;
		case 9:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		cellArray[2][2] = "x"
		break;
		turn = 0;
		break;		
					
	}

 	turn=turn+1;






for(i=1; i<=9; ++i) {
			cellArray[(i-1)%3][Math.floor((i-1)/3)] =
				document.getElementById("cell1_"+i).innerHTML;

}				

 for(x=0; x<=2; ++x) {
	 if(cellArray[0][x] == cellArray[1][x] &&
	    cellArray[1][x] == cellArray[2][x] &&
	    cellArray[2][x] != "") {
		 var popup = document.getElementsByTagName('popup')[0];
			 popup.style.backgroundImage = 'url(urkelwins.png)';
			 // body.getElementsByClassName('popup')	 
			 var planet = document.getElementById('planet');
			 planet.style.opacity = "0.9";
			
	    }
			
		 if(cellArray[x][0] == cellArray[x][1] &&
		    cellArray[x][1] == cellArray[x][2] &&
		    cellArray[x][2] != "") {
			 var body = document.getElementsByTagName('body')[0];
			 body.style.backgroundImage = 'url(urkelwins.png)';
			 var planet = document.getElementById('planet');
			 planet.style.opacity="0.9";

	 
			}
	
	}	

}






 















/*
function navCells() {
alert("Got to navCells");	


	for(r=1;r<=9;++r)
			document.getElementById("cell1_"+r).onclick=
			function(){
				alert("You clicked me!")
			}
}
cool meredith cells

var lookup=["one", "two", "three"]
for(i = 1; i<lookup.length;++i) 
{
	alert(lookup[i]);
	alert(document.getElementById(lookup[i]).innerHTML);
}
}
 */





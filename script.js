
 // function playBox(){

 // event.target.innerHTML = "<img src='screech11.jpg'>";
 // event.target.innerHTML = "<img src='urkel.jpg'>";
 // }

var turn=1;
var cellArray = [["","",""],
				["","",""],
				["","",""] ];
function playBox(){
	
	switch(turn) {
		case 1:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		
		break;
		case 2:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		
		break;
		case 3:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		
		break;
		case 4:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		
		break;
		case 5:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		
		break;
		case 6:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		
		break;
		case 7:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		
		break;
		case 8:
		event.target.innerHTML = "<img src='urkel.jpg'>";
		
		break;
		case 9:
		event.target.innerHTML = "<img src='screech2.jpg'>";
		
		break;
		turn = 0;
		break;		
					
	}
	   if (turn%2==1)

		cellArray[event.target.id[4]][event.target.id[6]] = "x";
	else
		cellArray[event.target.id[4]][event.target.id[6]] = "o";

 	turn=turn+1;
			
 winner = ""
 for(x=0; x<=2; ++x) {
	 if(cellArray[0][x] == cellArray[1][x] &&
	    cellArray[1][x] == cellArray[2][x] &&
	    cellArray[2][x] != "" ) 
	 {
	 	if (cellArray[0][x]=="x") 

	 	{
		winner = "x"; }
			else
		{
		winner = "o";
		}		
			 // var planet = document.getElementById('planet');
			 // planet.style.opacity = "0.9";
	}



			
	if(cellArray[x][0] == cellArray[x][1] &&
		cellArray[x][1] == cellArray[x][2] &&
		cellArray[x][2] != "") 

		if (cellArray[x][0]=="x") 

	 	{
		winner = "x"; }
			else
		{
		winner = "o";
		}		
    
  	}	

if(cellArray[0][0] == cellArray[1][1] &&
		cellArray[1][1] == cellArray[2][2] &&
		cellArray[2][2] != "") 

		if (cellArray[0][0]=="x") 

	 	{
		winner = "x"; }
			else
		{
		winner = "o";
		}		
    
if(cellArray[0][2] == cellArray[1][1] &&
		cellArray[1][1] == cellArray[2][0] &&
		cellArray[2][0] != "") 

		if (cellArray[1][1]=="x") 

	 	{
		winner = "x"; }
			else
		{
		winner = "o";
		}		    


if (winner == "x") {


			var popup_screech_wins = document.getElementById('popup_screech_wins');
			 popup_screech_wins.style.backgroundImage = 'url(screechwins1.png)';
			 popup_screech_wins.style.display = "block";
		} 

		if (winner == "o") {

			var popup_screech_wins = document.getElementById('popup_screech_wins');
			 popup_screech_wins.style.backgroundImage = 'url(urkelwins.png)';
			 popup_screech_wins.style.display = "block";


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





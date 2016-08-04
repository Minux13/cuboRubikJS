
function acomodar( caraReferencia, Cubo){
	
	
	if(Cubo[caraB][8][0]==caraB){
		;
	}
	else if(Cubo[caraE][8][0]==caraB)
		giro(caraF, DERECHA, Cubo);
	
	else if(Cubo[caraD][8][0]==caraB)
		giro(caraF, 2, Cubo);
	
	else if(Cubo[caraC][8][0]==caraB)
		giro(caraF, IZQUIERDA, Cubo);
	
	else 
		alert("\nQue demonios paso aqui?\n Acomodar \n");
		
}


function acomodar( caraReferencia, Cubo){
	
	
	if(Cubo[caraB][8][0]==caraB){
		return 1;
	}
	else if(Cubo[caraE][8][0]==caraB){
		giro(caraF, DERECHA, Cubo);
		return 1;
	}
	else if(Cubo[caraD][8][0]==caraB){
		giro(caraF, 2, Cubo);
		return 1;
	}
	else if(Cubo[caraC][8][0]==caraB){
		giro(caraF, IZQUIERDA, Cubo);
		return 1;
	}
	else {
		//alert("\nQue demonios paso aqui?\n Acomodar \n");
		alertaColoresMalIngresados();
		return COLORESMAL;
	}
}

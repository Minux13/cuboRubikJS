
function movimientoAristasMedio( colorPieza, posicionCara, posicionElemento, cContiguaP, eContiguoP, Cubo){
	
	//[NumElemento][AlQueQuieroLLegar]=direccion a la que girar	 visto desde una sola cara [10][10]
	var adondemover = [	 
	[3,3,3,3,3,5,3,3,3,3],
	[3,3,3,DERECHA,3,5,3,IZQUIERDA,3,2],
	[3,3,3,3,IZQUIERDA,5,DERECHA,3,2,3], 
	[3,IZQUIERDA,3,3,3,5,3,2,3,DERECHA],
	[3,3,DERECHA,3,3,5,2,3,IZQUIERDA,3], 
	[3,3,3,3,3,5,3,3,3,3],
	[3,3,IZQUIERDA,3,2,5,3,3,DERECHA,3], 
	[3,DERECHA,3,2,3,5,3,3,3,IZQUIERDA],
	[3,3,2,3,DERECHA,5,IZQUIERDA,3,3,3],
	[3,2,3,IZQUIERDA,3,5,3,DERECHA,3,3]
	];
	
	///IZQUIERDA=0 y DERECHA=1  [caraPrincipal][suRespectivaCaraLateral] vista desde ? [5][2]
	var caraLateral = [[0,0],[4,2],[1,3],[2,4],[3,1]];

	//Da el elemento de F de la cara pegada a la cara derecha del [colorPieza], lo uso para obtener-saber a donde dirigirlo [5]
	var eFAUbicarD = [0,6,8,4,2];
	//int eFAUbicarI[5]={0,4,2,6,8};
	var eFAUbicarI=[0,8,4,2,6];
	
	
	if(posicionCara>=1 && posicionCara<=4){
		
		if(posicionElemento==4){
			if(colorPieza==posicionCara)
				return COMPLETO;
			
			else{
				giro(posicionCara, IZQUIERDA, Cubo);
				giro(caraF, DERECHA, Cubo);
				giro(posicionCara, DERECHA, Cubo);
				giro(caraF, DERECHA, Cubo);
				giro(caraLateral[posicionCara][IZQUIERDA], DERECHA, Cubo);
				giro(caraF, IZQUIERDA, Cubo);
				giro(caraLateral[posicionCara][IZQUIERDA], IZQUIERDA, Cubo);
				return INCOMPLETO;
			}
		}
		
		if(posicionElemento==6){
			giro(posicionCara, DERECHA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(posicionCara, IZQUIERDA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(caraLateral[posicionCara][DERECHA], IZQUIERDA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(caraLateral[posicionCara][DERECHA], DERECHA, Cubo);
			return INCOMPLETO;		
		}
						
		if(posicionElemento==8)	{
			if(eContiguoP!=eFAUbicarD[colorPieza])
				giro(caraF, adondemover[eContiguoP][eFAUbicarD[colorPieza]], Cubo);
			
			giro(caraLateral[colorPieza][IZQUIERDA], DERECHA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(caraLateral[colorPieza][IZQUIERDA], IZQUIERDA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(colorPieza, IZQUIERDA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(colorPieza, DERECHA, Cubo);
			return COMPLETO;
		}
		
	}
	
	else if(posicionCara==5){
	
		if(posicionElemento!=eFAUbicarI[colorPieza])
			giro(caraF, adondemover[posicionElemento][eFAUbicarI[colorPieza]], Cubo);
	
		giro(colorPieza, IZQUIERDA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(colorPieza, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(caraLateral[colorPieza][IZQUIERDA], DERECHA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(caraLateral[colorPieza][IZQUIERDA], IZQUIERDA, Cubo);
		return COMPLETO;
	}
		
}
///Aquí ya no manejo los elementos, manejo el valor de la cara para la pieza a ubicar

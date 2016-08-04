
function movimientoEsquinasA( pieza, posicionCara, posicionElemento, cContiguaP, eContiguoP, cContiguaP2, eContiguoP2, pCaraContinuaAUbicar, pCaraContinuaAUbicar2, Cubo){
	
	
	//La cara es la posición y el valor que contiene es el elemento de la cara A que esta pegado a ella [5]
	var eFAbajoDeLaPiezaAUbicar
	var elementoPegadoALaCara = [0, 8, 6, 2, 4];
	///Caras y elementos contiguos de cada elemento de la cara A.
	//int caraAlLadoDelElemento[10]={0, 3, 3, 2, 4, 0, 2, 4, 1, 1};
	///Numero de elemento de F que esta al lado de la cara, el valor que contiene el arreglo es el elemento para la [cara] este es solo para cuando la pieza esta en B-E 7
	//int eAlLadoDeLaCara[5]={0,1,3,9,7};
	var elementoFDebajoA = [0,7,8,9,4,5,6,1,2,3]; /*La posición es elemento de A y lo que contiene 
													es el elemento F debabo [10]*/
	
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


	if(posicionCara==caraA){
		if(posicionElemento==pieza){
			return COMPLETO;
		}	
		else{		
			giro(cContiguaP, DERECHA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(cContiguaP, IZQUIERDA, Cubo);
			return INCOMPLETO;		
		}
	}	
	else if(posicionCara>=1 && posicionCara<=4){
		
		if(posicionElemento==3)	{
			giro(posicionCara, DERECHA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(posicionCara, IZQUIERDA, Cubo);
			return INCOMPLETO;
		}
		else if(posicionElemento==1){
			giro(posicionCara, IZQUIERDA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(posicionCara, DERECHA, Cubo);
			return INCOMPLETO;
		}
		else if(posicionElemento==7){
			eFAbajoDeLaPiezaAUbicar=elementoFDebajoA[pieza];
			if(eContiguoP2!=eFAbajoDeLaPiezaAUbicar)
				giro(caraF,adondemover[eContiguoP2][eFAbajoDeLaPiezaAUbicar], Cubo);
				
			giro(pCaraContinuaAUbicar2, IZQUIERDA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(pCaraContinuaAUbicar2, DERECHA, Cubo);
			return COMPLETO;
		}
		else if(posicionElemento==9){
			eFAbajoDeLaPiezaAUbicar=elementoFDebajoA[pieza];
			if(eContiguoP!=eFAbajoDeLaPiezaAUbicar)
				giro(caraF,adondemover[eContiguoP][eFAbajoDeLaPiezaAUbicar], Cubo);
		
			giro(pCaraContinuaAUbicar, DERECHA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(pCaraContinuaAUbicar, IZQUIERDA, Cubo);
			return COMPLETO;
		}
	}
	
	else if(posicionCara==5){
	
		eFAbajoDeLaPiezaAUbicar=elementoFDebajoA[pieza];
		if(posicionElemento!=eFAbajoDeLaPiezaAUbicar)
			giro(caraF,adondemover[posicionElemento][eFAbajoDeLaPiezaAUbicar], Cubo);
		
		giro(pCaraContinuaAUbicar, DERECHA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(pCaraContinuaAUbicar, IZQUIERDA, Cubo);		
		return INCOMPLETO;
	}
		
}


function movimientosA( pieza, posicionAUbicar, caraUbicacion, elementoUbicacion, cara_pLateral, elemento_pLateral, Cubo, losCuatroBien){
	
	
	//La cara es la posición y el valor que contiene es el elemento de la cara A que esta pegado a ella
	var elementoQuedoCuandoGiro;
	var elementoDeAPegadoALaCara=[0, 8, 6, 2, 4];  //[5]
	///Caras y elementos contiguos de cada elemento de la cara A.
	var caraAlLadoDelElemento = [0, 3, 3, 2, 4, 0, 2, 4, 1, 1];     //[10]
	var caraAlLadoDelElementoF = [0, 1, 1, 2, 4, 0, 2, 4, 3, 3];
	var elementoAlLadoDelElemento = [0, 3, 2, 3, 2, 0, 2, 3, 2, 3];
	var elementoFDebajoA = [0,7,8,9,4,5,6,1,2,3]; /*La posición es elemento de A y lo que contiene 
													es el elemento F debabo*/

	//[NumElemento][AlQueQuieroLLegar]=direccion a la que girar [9][9]
	var adondemover = [  
	[3,3,3,3,3,5,3,3,3],
	[3,3,3,3,3,5,3,3,3],
	[3,3,3,3,IZQUIERDA,5,DERECHA,3,2], 
	[3,3,3,3,3,5,3,3,3],
	[3,3,DERECHA,3,3,5,2,3,IZQUIERDA], 
	[3,3,3,3,3,5,3,3,3],
	[3,3,IZQUIERDA,3,2,5,3,3,DERECHA], 
	[3,3,3,3,3,5,3,3,3],
	[3,3,2,3,DERECHA,5,IZQUIERDA,3,3]
	];



	if(caraUbicacion==0){
		
		if(elementoUbicacion==posicionAUbicar)	{
			return COMPLETO;
		}
		else{
			if(losCuatroBien==1){
				giro(caraA, adondemover[elementoUbicacion][posicionAUbicar], Cubo);
				return COMPLETO;
			}
			else {
			giro(cara_pLateral, DERECHA, Cubo);
			return INCOMPLETO;
			}
		}	
	}
		
	else if(caraUbicacion>=1 && caraUbicacion<=4){
		
		if(elementoUbicacion==6){
			elementoQuedoCuandoGiro=elementoDeAPegadoALaCara[cara_pLateral];//Girar posicionAUbicar a donde la pieza sube
			if(posicionAUbicar!=elementoQuedoCuandoGiro)
				giro(caraA,adondemover[posicionAUbicar][elementoQuedoCuandoGiro], Cubo);
			
			giro(cara_pLateral, DERECHA, Cubo);
			return COMPLETO;		
		}		
		else if(elementoUbicacion==4){
			elementoQuedoCuandoGiro=elementoDeAPegadoALaCara[cara_pLateral];//Girar posicionAUbicar a donde la pieza sube
			if(posicionAUbicar!=elementoQuedoCuandoGiro)				
				giro(caraA,adondemover[posicionAUbicar][elementoQuedoCuandoGiro], Cubo);			
			
			giro(cara_pLateral, IZQUIERDA, Cubo);
			return COMPLETO;
		}		
		else if(elementoUbicacion==2){
			///tenia p_lateral en vez de caraU
			giro(caraUbicacion, IZQUIERDA, Cubo);
			return INCOMPLETO;
			
		}		
		else if(elementoUbicacion==8){
			if(elemento_pLateral!=elementoFDebajoA[posicionAUbicar])
				giro(caraF, adondemover[elemento_pLateral][elementoFDebajoA[posicionAUbicar]], Cubo);
						
			giro(caraAlLadoDelElemento[posicionAUbicar], DERECHA, Cubo);
			return INCOMPLETO;		
		}
	
	}
	
	else if(caraUbicacion==5){
		if(elementoUbicacion!=elementoFDebajoA[posicionAUbicar])
				giro(caraF, adondemover[elementoUbicacion][elementoFDebajoA[posicionAUbicar]], Cubo);
			
			giro(caraAlLadoDelElemento[posicionAUbicar], 2, Cubo);
			return COMPLETO;	
	}
	else
		alert("\n  Lastima  \n");
		
}
/*
Cubo[6][10][2]={
	{{0,0}, {0, 1}, {0, 2}, {0,3}, {0,4}, {0,5}, {0,6}, {0,7}, {0,8}, {0,9}}, 
	{{1,0}, {1, 1}, {1, 2}, {1,3}, {1,4}, {1,5}, {1,6}, {1,7}, {1,8}, {1,9}},

}*/

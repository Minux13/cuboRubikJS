
function aristasMedio( colorPieza, Cubo){

	var cContiguaP, eContiguoP, posicionElemento, posicionCara,  retorno;		
	//Cara contigua al elemento [6][10]
	var cContiguaE = [
	[0, 3, 3, 2, 4, 0, 2, 4, 1, 1],
	[0, 0, 0, 2, 4, 0, 2, 4, 5, 5],
	[0, 0, 0, 3, 1, 0, 3, 1, 5, 5],
	[0, 0, 0, 4, 2, 0, 4, 2, 5, 5],
	[0, 0, 0, 1, 3, 0, 1, 3, 5, 5],
	[0, 1, 1, 2, 4, 0, 2, 4, 3, 3]
	];
	
	//Elemento contiguo al elemento, posiciones, de la cara [] el elemento [] ese es el numero del elemento contiguo
	var eContiguoE = [
	[0, 3, 2, 3, 2, 0, 2, 3, 2, 3],
	[0, 7, 8, 1, 6, 0, 4, 9, 2, 3],
	[0, 9, 6, 1, 6, 0, 4, 9, 6, 9],
	[0, 3, 2, 1, 6, 0, 4, 9, 8, 7],
	[0, 1, 4, 1, 6, 0, 4, 9, 4, 1],
	[0, 7, 8, 7, 8, 0, 8, 7, 8, 7]	
	];		
	
			
	for(posicionCara=0; posicionCara<=5; posicionCara++){
			for(posicionElemento=1; posicionElemento<=9; posicionElemento++){	
			
				if(Cubo[posicionCara][posicionElemento][0]==colorPieza && Cubo[posicionCara][posicionElemento][1]==4){
				
					cContiguaP=cContiguaE[posicionCara][posicionElemento];
					eContiguoP=eContiguoE[posicionCara][posicionElemento];
																			
					if(Cubo[cContiguaP][eContiguoP][0]==cContiguaE[colorPieza][4] && Cubo[cContiguaP][eContiguoP][1]==eContiguoE[colorPieza][4]){
						
						//printf("\n\n  %d   %d   %d    %d   %d   \n\n",  colorPieza, posicionCara, posicionElemento, cContiguaP, eContiguoP);
						retorno=movimientoAristasMedio(colorPieza, posicionCara, posicionElemento, cContiguaP, eContiguoP, Cubo);
						
						return retorno;
					}
					else {
						alertaColoresMalIngresados();
						return COLORESMAL;
					}
				}				
			}	
		}
}

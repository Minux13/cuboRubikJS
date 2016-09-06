
function aristasA(Cubo, pieza, losCuatroBien){
	
	var cContiguaP,	eContiguoP, posicionAUbicar, posicionCara, posicionElemento, retorno;
	
	//Cara contigua al elemento [6][10]
	var cContiguaE=[
	[0, 3, 3, 2, 4, 0, 2, 4, 1, 1],
	[0, 0, 0, 2, 4, 0, 2, 4, 5, 5],
	[0, 0, 0, 3, 1, 0, 3, 1, 5, 5],
	[0, 0, 0, 4, 2, 0, 4, 2, 5, 5],
	[0, 0, 0, 1, 3, 0, 1, 3, 5, 5],
	[0, 1, 1, 2, 4, 0, 2, 4, 3, 3]
	];
	
	//Elemento contiguo al elemento, posiciones, de la cara [] el elemento [] ese es el numero del elemento contiguo
	var eContiguoE=[
	[0, 3, 2, 3, 2, 0, 2, 3, 2, 3],
	[0, 7, 8, 1, 6, 0, 4, 9, 2, 3],
	[0, 9, 6, 1, 6, 0, 4, 9, 6, 9],
	[0, 3, 2, 1, 6, 0, 4, 9, 8, 7],
	[0, 1, 4, 1, 6, 0, 4, 9, 4, 1],
	[0, 7, 8, 7, 8, 0, 8, 7, 8, 7]	
	];
	
	//Color contiguo a los elementos de la cara A [10]
	var colorContiguo=[0, 3, 3, 2, 4, 0, 2, 4, 1, 1];
	
	
	posicionAUbicar=2;
	
	if(Cubo[0][2][0]==0 && Cubo[0][2][1]==2){
		
		if(losCuatroBien==0){
			if(pieza==2)
				return COMPLETO;			
			else if(pieza==4)
				posicionAUbicar=4;			
			else if(pieza==8)
				posicionAUbicar=8;			
			else if(pieza==6)
				posicionAUbicar=6;			
		}
	}
	else if(Cubo[0][4][0]==0 && Cubo[0][4][1]==2){
		
		if(losCuatroBien==0){							
			if(pieza==2)
				return COMPLETO;						
			else if(pieza==4)
				posicionAUbicar=8;			
			else if(pieza==8)
				posicionAUbicar=6;			
			else if(pieza==6)
				posicionAUbicar=2;			
		}	
	}	
	else if(Cubo[0][6][0]==0 && Cubo[0][6][1]==2){
		
		if(losCuatroBien==0){
			if(pieza==2)
				return COMPLETO;		
			else if(pieza==4)
				posicionAUbicar=2;			
			else if(pieza==8)
				posicionAUbicar=4;			
			else if(pieza==6)
				posicionAUbicar=8;
		}	
	}	
	else if(Cubo[0][8][0]==0 && Cubo[0][8][1]==2){
		
		if(losCuatroBien==0){							
			if(pieza==2)
				return COMPLETO;				
			else if(pieza==4)
				posicionAUbicar=6;			
			else if(pieza==8)
				posicionAUbicar=2;			
			else if(pieza==6)
				posicionAUbicar=4;
		}		
	}
		
	
				
	for(posicionCara=0; posicionCara<=5; posicionCara++){
		for(posicionElemento=1; posicionElemento<=9; posicionElemento++){	
			
			if(Cubo[posicionCara][posicionElemento][0]==0 && Cubo[posicionCara][posicionElemento][1]==pieza){
				
				cContiguaP=cContiguaE[posicionCara][posicionElemento];
				eContiguoP=eContiguoE[posicionCara][posicionElemento];	
								
					
				if(Cubo[cContiguaP][eContiguoP][0]==colorContiguo[pieza] && Cubo[cContiguaP][eContiguoP][1]==2){
										
					retorno=movimientosA(pieza, posicionAUbicar, posicionCara, posicionElemento, cContiguaP, eContiguoP, Cubo, losCuatroBien);
					return retorno;
				}
				else {
					//alert("\nUppps, algo salio mal.  Elementos mal acomodados \n aristas A\n");
					alertaColoresMalIngresados();
					return COLORESMAL;
				}
			}				
		}	
	}

	
						/*/printf("\nLa pieza esta ubicada en %d %d\n y se va a ubicar en el elemento A%d\nEl elemento contiguo de donde esta ubicada es %d %d o %c%d, ahi esta la pieza %d %d\n\n", posicionCara, posicionElemento, posicionAUbicar, cContiguaP, eContiguoP, cContiguaP+65, eContiguoP, Cubo[cContiguaP][eContiguoP][0], Cubo[cContiguaP][eContiguoP][1]);*/
						
						
				
}

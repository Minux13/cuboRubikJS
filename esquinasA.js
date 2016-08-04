
function esquinasA( pieza, Cubo){

	var cContiguaP, eContiguoP, posicionElemento, posicionCara, eContiguoP2, cContiguaP2, pCaraContinuaAUbicar, pCaraContinuaAUbicar2, retorno;		


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
	[0, 7, 8, 7, 8, 0, 8, 7, 8, 7],	
	];		
	
	var cContiguaES=[ ///
	/// 1     3           7     9
	[0, 4, 3, 3, 4, 0, 2, 1, 1, 2],
	[0, 4, 0, 0, 4, 0, 2, 5, 5, 2],
	[0, 1, 0, 0, 1, 0, 3, 5, 5, 3],
	[0, 2, 0, 0, 2, 0, 4, 5, 5, 4],
	[0, 3, 0, 0, 3, 0, 1, 5, 5, 1],
	[0, 4, 1, 1, 4, 0, 2, 3, 3, 2]
	];
		
		
	var eContiguoES=[  
	/// 1     3           7     9
	[0, 1, 2, 1, 2, 0, 2, 1, 2, 1],
	[0, 3, 8, 9, 6, 0, 4, 1, 2, 7],
	[0, 3, 6, 3, 6, 0, 4, 3, 6, 7],
	[0, 3, 2, 1, 6, 0, 4, 9, 8, 7],
	[0, 3, 4, 7, 6, 0, 4, 7, 4, 7],
	[0, 9, 8, 9, 8, 0, 8, 9, 8, 9],	
	];

			
	for(posicionCara=0; posicionCara<=5; posicionCara++){
			for(posicionElemento=1; posicionElemento<=9; posicionElemento++){	
			
				if(Cubo[posicionCara][posicionElemento][0]==0 && Cubo[posicionCara][posicionElemento][1]==pieza){
				
					cContiguaP=cContiguaE[posicionCara][posicionElemento];
					eContiguoP=eContiguoE[posicionCara][posicionElemento];
					cContiguaP2=cContiguaES[posicionCara][posicionElemento];
					eContiguoP2=eContiguoES[posicionCara][posicionElemento];
					pCaraContinuaAUbicar=cContiguaE[caraA][pieza];
					pCaraContinuaAUbicar2=cContiguaES[caraA][pieza];
														
					if(Cubo[cContiguaP][eContiguoP][0]==cContiguaE[caraA][pieza] && Cubo[cContiguaP][eContiguoP][1]==eContiguoE[caraA][pieza]){
						
						retorno=movimientoEsquinasA(pieza, posicionCara, posicionElemento, cContiguaP, eContiguoP, cContiguaP2, eContiguoP2, pCaraContinuaAUbicar, pCaraContinuaAUbicar2, Cubo);
						
						return retorno;
					}
					else {
						alert("\nUppps, algo salio mal.  Elementos mal acomodados\n esquinasA \n");
						exit();
					}
				}				
			}	
		}
}

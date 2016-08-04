
function obtener_valor_arista( num_cara, num_elemento, Cubo){

	var cContiguaP, eContiguoP, colorPieza, colorPiezaContigua, numElemento;

	var cContiguaE=[
	[0, 3, 3, 2, 4, 0, 2, 4, 1, 1],
	[0, 0, 0, 2, 4, 0, 2, 4, 5, 5],
	[0, 0, 0, 3, 1, 0, 3, 1, 5, 5],
	[0, 0, 0, 4, 2, 0, 4, 2, 5, 5],
	[0, 0, 0, 1, 3, 0, 1, 3, 5, 5],
	[0, 1, 1, 2, 4, 0, 2, 4, 3, 3]
	];

	
	//Elemento contiguo al elemento, posiciones, de la cara [] el elemento [] ese es el numero del elemento contiguo [6][10]
	var eContiguoE=[
	[0, 3, 2, 3, 2, 0, 2, 3, 2, 3],
	[0, 7, 8, 1, 6, 0, 4, 9, 2, 3],
	[0, 9, 6, 1, 6, 0, 4, 9, 6, 9],
	[0, 3, 2, 1, 6, 0, 4, 9, 8, 7],
	[0, 1, 4, 1, 6, 0, 4, 9, 4, 1],
	[0, 7, 8, 7, 8, 0, 8, 7, 8, 7]	
	];
		

	//Ubicacion de la pieza contigua, de su cara y su elemento
	cContiguaP=cContiguaE[num_cara][num_elemento];
	eContiguoP=eContiguoE[num_cara][num_elemento];
	
	colorPieza=Cubo[num_cara][num_elemento][0];
	colorPiezaContigua=Cubo[cContiguaP][eContiguoP][0];
	
	
	for(numElemento=2; numElemento<=8; numElemento=numElemento+2){
		
		if(cContiguaE[colorPieza][numElemento]==colorPiezaContigua){
			Cubo[num_cara][num_elemento][1]=numElemento;
		}	
	}
	
}	


function obtener_valor_esquina( num_cara, num_elemento,  Cubo){

	var cContiguaP, eContiguoP, colorPieza, colorPiezaContigua, numElemento;

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
		

	//Ubicacion de la pieza contigua, de su cara y su elemento
	cContiguaP=cContiguaE[num_cara][num_elemento];
	eContiguoP=eContiguoE[num_cara][num_elemento];
	
	colorPieza=Cubo[num_cara][num_elemento][0];
	colorPiezaContigua=Cubo[cContiguaP][eContiguoP][0];
	
	
	for(numElemento=1; numElemento<=9; numElemento=numElemento+2){
		
		if(numElemento==5)
			continue;
		
		if(cContiguaE[colorPieza][numElemento]==colorPiezaContigua){
			Cubo[num_cara][num_elemento][1]=numElemento;
		}	
	}
	

}


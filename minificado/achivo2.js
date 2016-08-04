
const DERECHA = 1
const IZQUIERDA = 0
const COMPLETO = 0
const INCOMPLETO = 1
const OCUPADO = 1
const DESOCUPADO = 0
const caraA = 0
const caraB = 1
const caraC = 2
const caraD = 3
const caraE = 4
const caraF = 5
const cA = "Arriba-"
const cB = "Frente-"
const cC = "Derecha-"
const cD = "Atras-"
const cE = "Izquierda-"
const cF = "Abajo-"
const dI = "Izquierda, "
const dD = "Derecha, "


/*
typedef struct caracteristicasCara_A{

	int pieza;
	int posicionCara;
	int posicionPieza;
	int posicionCPiezaLateral;
	int posicionUbicar;
	int a2;
	int a4;
	int a6;
	int a8;

}caracteristicasCaraA;


typedef struct giro{
	int terminado;
	int cara;
	int direccion;

}giroCubo;



int obtener_valor_arista(int num_cara, int num_elemento, int Cubo[6][10][3]);
int obtener_valor_esquina(int num_cara, int num_elemento, int Cubo[6][10][3]);
void imprimir(int Cubo[6][10][3]);
int movimientosA(int pieza, int posicionAUbicar, int caraUbicacion, int elementoUbicacion, int cara_pLateral, int elemento_pLateral, int Cubo[6][10][3], int losCuatroBien);
int aristasA(int Cubo[6][10][3], int pieza, int losCuatroBien);
int giro(int cara, int direccion, int Cubo[6][10][3]);
int doblegiro(int cara, int direccion, int Cubo[6][10][3]);
int esquinasA(int pieza, int Cubo[6][10][3]);
int movimientoEsquinasA(int pieza, int posicionCara, int posicionElemento, int cContiguaP, int eContiguoP, int cContiguaP2, int eContiguoP2, int pCaraContinuaAUbicar, int pCaraContinuaAUbicar2, int Cubo[6][10][3]);
int aristasMedio(int colorPieza, int Cubo[6][10][3]);
int movimientoAristasMedio(int colorPieza, int posicionCara, int posicionElemento, int cContiguaP, int eContiguoP, int Cubo[6][10][3]);
int cruzCaraF(int caraReferencia, int Cubo[6][10][3]);
int orientacionUltimaCapa(int caraReferencia, int Cubo[6][10][3]);
int permutacionEsquinas(int caraReferencia, int Cubo[6][10][3]);
int permutacionAristas(int caraReferencia, int Cubo[6][10][3]);
void acomodar(int caraReferencia, int Cubo[6][10][3]);

#endif
*/


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
					alert("Colores mal ingresados\n");
					location.reload(true); 				}
			}				
		}	
	}

	
						/*/printf("\nLa pieza esta ubicada en %d %d\n y se va a ubicar en el elemento A%d\nEl elemento contiguo de donde esta ubicada es %d %d o %c%d, ahi esta la pieza %d %d\n\n", posicionCara, posicionElemento, posicionAUbicar, cContiguaP, eContiguoP, cContiguaP+65, eContiguoP, Cubo[cContiguaP][eContiguoP][0], Cubo[cContiguaP][eContiguoP][1]);*/
						
						
				
}

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
						//alert("\nUppps, algo salio mal.  Elementos mal acomodados\n aritasMedio\n");
						alert("Colores mal ingresados\n");
						location.reload(true); 
					}
				}				
			}	
		}
}






function giro( cara, direccion, Cubo){

	var copia=[]
	var valorCara, num_elemento, elemento;
	var derecha = [0,7,4,1,8,5,2,9,6,3];
	var izquierda = [0,3,6,9,2,5,8,1,4,7];
	
	
	
	if(direccion==2 || direccion==IZQUIERDA || direccion==DERECHA)
		;
	else{
		alert("\n\n Error fatalisisisisismo por la direccion\n\n");
		alert("Colores mal ingresados\n");
		location.reload(true); 
	}
	
	if(cara>=0 && cara<=5)
		;
	else{
		alert("\n\n Error fatalisisisisismo por la Cara\n\n");
		alert("Colores mal ingresados\n");
		location.reload(true); 	}
	
	
	for(valorCara=0; valorCara<=5; valorCara++){
		copia.push([]);
		for(num_elemento=1; num_elemento<=9; num_elemento++){
			if (num_elemento==1)
				copia[valorCara].push([]);
			
			copia[valorCara].push([]);

			copia[valorCara][num_elemento].push(Cubo[valorCara][num_elemento][0]);
			copia[valorCara][num_elemento].push(Cubo[valorCara][num_elemento][1]);
		}	
	}


	if(cara==caraA){
	
		if(direccion==DERECHA || direccion==2){

			movimientosConjunto.push("AD");

			//La cara que giro
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraA][elemento][0]=copia[caraA][derecha[elemento]][0];
				Cubo[caraA][elemento][1]=copia[caraA][derecha[elemento]][1];
			}	
			
			//Los laterales de la cara que giro
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraB][elemento][0]=copia[caraC][elemento][0];
				Cubo[caraB][elemento][1]=copia[caraC][elemento][1];
			}
			
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraC][elemento][0]=copia[caraD][elemento][0];
				Cubo[caraC][elemento][1]=copia[caraD][elemento][1];
			}
			
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraD][elemento][0]=copia[caraE][elemento][0];
				Cubo[caraD][elemento][1]=copia[caraE][elemento][1];
			}
			
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraE][elemento][0]=copia[caraB][elemento][0];
				Cubo[caraE][elemento][1]=copia[caraB][elemento][1];
			}
		}	
		
		
		else if(direccion==IZQUIERDA){

			movimientosConjunto.push("AI");
			
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraA][elemento][0]=copia[caraA][izquierda[elemento]][0];
				Cubo[caraA][elemento][1]=copia[caraA][izquierda[elemento]][1];
			}				
			
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraB][elemento][0]=copia[caraE][elemento][0];
				Cubo[caraB][elemento][1]=copia[caraE][elemento][1];
			}
			
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraC][elemento][0]=copia[caraB][elemento][0];
				Cubo[caraC][elemento][1]=copia[caraB][elemento][1];
			}
			
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraD][elemento][0]=copia[caraC][elemento][0];
				Cubo[caraD][elemento][1]=copia[caraC][elemento][1];
			}
			
			for(elemento=1; elemento<=3; elemento++){
				Cubo[caraE][elemento][0]=copia[caraD][elemento][0];
				Cubo[caraE][elemento][1]=copia[caraD][elemento][1];
			}
		}	
	}



	else if(cara==caraB){
	
		if(direccion==DERECHA || direccion==2){
			
			movimientosConjunto.push("BD");
			
			//La cara que giro
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraB][elemento][0]=copia[caraB][derecha[elemento]][0];
				Cubo[caraB][elemento][1]=copia[caraB][derecha[elemento]][1];
			}	
			
			Cubo[caraF][1][0]=copia[caraC][7][0];
			Cubo[caraF][1][1]=copia[caraC][7][1];
			Cubo[caraF][2][0]=copia[caraC][4][0];
			Cubo[caraF][2][1]=copia[caraC][4][1];
			Cubo[caraF][3][0]=copia[caraC][1][0];
			Cubo[caraF][3][1]=copia[caraC][1][1];						
			
			Cubo[caraC][7][0]=copia[caraA][9][0];
			Cubo[caraC][7][1]=copia[caraA][9][1];
			Cubo[caraC][4][0]=copia[caraA][8][0];
			Cubo[caraC][4][1]=copia[caraA][8][1];
			Cubo[caraC][1][0]=copia[caraA][7][0];
			Cubo[caraC][1][1]=copia[caraA][7][1];			
			
			Cubo[caraA][9][0]=copia[caraE][3][0];
			Cubo[caraA][9][1]=copia[caraE][3][1];
			Cubo[caraA][8][0]=copia[caraE][6][0];
			Cubo[caraA][8][1]=copia[caraE][6][1];
			Cubo[caraA][7][0]=copia[caraE][9][0];
			Cubo[caraA][7][1]=copia[caraE][9][1];			
			
			Cubo[caraE][3][0]=copia[caraF][1][0];
			Cubo[caraE][3][1]=copia[caraF][1][1];
			Cubo[caraE][6][0]=copia[caraF][2][0];
			Cubo[caraE][6][1]=copia[caraF][2][1];
			Cubo[caraE][9][0]=copia[caraF][3][0];
			Cubo[caraE][9][1]=copia[caraF][3][1];
		}	
		
		
		else if(direccion==IZQUIERDA){

			movimientosConjunto.push("BI");
			
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraB][elemento][0]=copia[caraB][izquierda[elemento]][0];
				Cubo[caraB][elemento][1]=copia[caraB][izquierda[elemento]][1];
			}				
			
			Cubo[caraF][1][0]=copia[caraE][3][0];
			Cubo[caraF][1][1]=copia[caraE][3][1];
			Cubo[caraF][2][0]=copia[caraE][6][0];
			Cubo[caraF][2][1]=copia[caraE][6][1];
			Cubo[caraF][3][0]=copia[caraE][9][0];
			Cubo[caraF][3][1]=copia[caraE][9][1];
			
			Cubo[caraC][7][0]=copia[caraF][1][0];
			Cubo[caraC][7][1]=copia[caraF][1][1];
			Cubo[caraC][4][0]=copia[caraF][2][0];
			Cubo[caraC][4][1]=copia[caraF][2][1];
			Cubo[caraC][1][0]=copia[caraF][3][0];
			Cubo[caraC][1][1]=copia[caraF][3][1];
			
			Cubo[caraA][9][0]=copia[caraC][7][0];
			Cubo[caraA][9][1]=copia[caraC][7][1];
			Cubo[caraA][8][0]=copia[caraC][4][0];
			Cubo[caraA][8][1]=copia[caraC][4][1];
			Cubo[caraA][7][0]=copia[caraC][1][0];
			Cubo[caraA][7][1]=copia[caraC][1][1];
			
			Cubo[caraE][3][0]=copia[caraA][9][0];
			Cubo[caraE][3][1]=copia[caraA][9][1];
			Cubo[caraE][6][0]=copia[caraA][8][0];
			Cubo[caraE][6][1]=copia[caraA][8][1];
			Cubo[caraE][9][0]=copia[caraA][7][0];
			Cubo[caraE][9][1]=copia[caraA][7][1];
			
		}	
	}



	else if(cara==caraC){
		
		if(direccion==DERECHA || direccion==2){

			movimientosConjunto.push("CD");

			//La cara que giro
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraC][elemento][0]=copia[caraC][derecha[elemento]][0];
				Cubo[caraC][elemento][1]=copia[caraC][derecha[elemento]][1];
			}	
			
			//Los laterales de la cara que giro
			Cubo[caraF][3][0]=copia[caraD][7][0];
			Cubo[caraF][3][1]=copia[caraD][7][1];
			Cubo[caraF][6][0]=copia[caraD][4][0];
			Cubo[caraF][6][1]=copia[caraD][4][1];
			Cubo[caraF][9][0]=copia[caraD][1][0];
			Cubo[caraF][9][1]=copia[caraD][1][1];
		
			Cubo[caraD][7][0]=copia[caraA][3][0];
			Cubo[caraD][7][1]=copia[caraA][3][1];
			Cubo[caraD][4][0]=copia[caraA][6][0];
			Cubo[caraD][4][1]=copia[caraA][6][1];
			Cubo[caraD][1][0]=copia[caraA][9][0];
			Cubo[caraD][1][1]=copia[caraA][9][1];		
						
			Cubo[caraA][3][0]=copia[caraB][3][0];
			Cubo[caraA][3][1]=copia[caraB][3][1];
			Cubo[caraA][6][0]=copia[caraB][6][0];
			Cubo[caraA][6][1]=copia[caraB][6][1];
			Cubo[caraA][9][0]=copia[caraB][9][0];
			Cubo[caraA][9][1]=copia[caraB][9][1];
			
			Cubo[caraB][3][0]=copia[caraF][3][0];
			Cubo[caraB][3][1]=copia[caraF][3][1];
			Cubo[caraB][6][0]=copia[caraF][6][0];
			Cubo[caraB][6][1]=copia[caraF][6][1];
			Cubo[caraB][9][0]=copia[caraF][9][0];
			Cubo[caraB][9][1]=copia[caraF][9][1];
			
		}	
		
		
		else if(direccion==IZQUIERDA){

			movimientosConjunto.push("CI");
		
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraC][elemento][0]=copia[caraC][izquierda[elemento]][0];
				Cubo[caraC][elemento][1]=copia[caraC][izquierda[elemento]][1];
			}				
			
			
			Cubo[caraF][3][0]=copia[caraB][3][0];
			 Cubo[caraF][3][1]=copia[caraB][3][1];
			  Cubo[caraF][6][0]=copia[caraB][6][0];
			   Cubo[caraF][6][1]=copia[caraB][6][1];
			    Cubo[caraF][9][0]=copia[caraB][9][0];
			     Cubo[caraF][9][1]=copia[caraB][9][1];

			Cubo[caraD][7][0]=copia[caraF][3][0];
			Cubo[caraD][7][1]=copia[caraF][3][1];
			Cubo[caraD][4][0]=copia[caraF][6][0];
			Cubo[caraD][4][1]=copia[caraF][6][1];
			Cubo[caraD][1][0]=copia[caraF][9][0];
			Cubo[caraD][1][1]=copia[caraF][9][1];

			Cubo[caraA][3][0]=copia[caraD][7][0];
			Cubo[caraA][3][1]=copia[caraD][7][1];
			Cubo[caraA][6][0]=copia[caraD][4][0];
			Cubo[caraA][6][1]=copia[caraD][4][1];
			Cubo[caraA][9][0]=copia[caraD][1][0];
			Cubo[caraA][9][1]=copia[caraD][1][1];


			Cubo[caraB][3][0]=copia[caraA][3][0];
			Cubo[caraB][3][1]=copia[caraA][3][1];
			Cubo[caraB][6][0]=copia[caraA][6][0];
			Cubo[caraB][6][1]=copia[caraA][6][1];
			Cubo[caraB][9][0]=copia[caraA][9][0];
			Cubo[caraB][9][1]=copia[caraA][9][1];
		}	
	}


	else if(cara==caraD){
			
		if(direccion==DERECHA || direccion==2){

			movimientosConjunto.push("DD");
			
			//La cara que giro
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraD][elemento][0]=copia[caraD][derecha[elemento]][0];
				Cubo[caraD][elemento][1]=copia[caraD][derecha[elemento]][1];
			}	
			
			//Los laterales de la cara que giro
			
			Cubo[caraF][9][0]=copia[caraE][7][0];
			Cubo[caraF][9][1]=copia[caraE][7][1];
			Cubo[caraF][8][0]=copia[caraE][4][0];
			Cubo[caraF][8][1]=copia[caraE][4][1];
			Cubo[caraF][7][0]=copia[caraE][1][0];
			Cubo[caraF][7][1]=copia[caraE][1][1];
			
			Cubo[caraE][7][0]=copia[caraA][1][0];
			Cubo[caraE][7][1]=copia[caraA][1][1];
			Cubo[caraE][4][0]=copia[caraA][2][0];
			Cubo[caraE][4][1]=copia[caraA][2][1];
			Cubo[caraE][1][0]=copia[caraA][3][0];
			Cubo[caraE][1][1]=copia[caraA][3][1];

			Cubo[caraA][1][0]=copia[caraC][3][0];
			Cubo[caraA][1][1]=copia[caraC][3][1];
			Cubo[caraA][2][0]=copia[caraC][6][0];
			Cubo[caraA][2][1]=copia[caraC][6][1];
			Cubo[caraA][3][0]=copia[caraC][9][0];
			Cubo[caraA][3][1]=copia[caraC][9][1];

			Cubo[caraC][3][0]=copia[caraF][9][0];
			Cubo[caraC][3][1]=copia[caraF][9][1];
			Cubo[caraC][6][0]=copia[caraF][8][0];
			Cubo[caraC][6][1]=copia[caraF][8][1];
			Cubo[caraC][9][0]=copia[caraF][7][0];
			Cubo[caraC][9][1]=copia[caraF][7][1];
			
		}	
		
		
		else if(direccion==IZQUIERDA){

			movimientosConjunto.push("DI");
		
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraD][elemento][0]=copia[caraD][izquierda[elemento]][0];
				Cubo[caraD][elemento][1]=copia[caraD][izquierda[elemento]][1];
			}				
			
			Cubo[caraF][9][0]=copia[caraC][3][0];
			Cubo[caraF][9][1]=copia[caraC][3][1];
			Cubo[caraF][8][0]=copia[caraC][6][0];
			Cubo[caraF][8][1]=copia[caraC][6][1];
			Cubo[caraF][7][0]=copia[caraC][9][0];
			Cubo[caraF][7][1]=copia[caraC][9][1];

			Cubo[caraE][7][0]=copia[caraF][9][0];
			Cubo[caraE][7][1]=copia[caraF][9][1];
			Cubo[caraE][4][0]=copia[caraF][8][0];
			Cubo[caraE][4][1]=copia[caraF][8][1];
			Cubo[caraE][1][0]=copia[caraF][7][0];
			Cubo[caraE][1][1]=copia[caraF][7][1];

			Cubo[caraA][1][0]=copia[caraE][7][0];
			Cubo[caraA][1][1]=copia[caraE][7][1];
			Cubo[caraA][2][0]=copia[caraE][4][0];
			Cubo[caraA][2][1]=copia[caraE][4][1];
			Cubo[caraA][3][0]=copia[caraE][1][0];
			Cubo[caraA][3][1]=copia[caraE][1][1];

			Cubo[caraC][3][0]=copia[caraA][1][0];
			Cubo[caraC][3][1]=copia[caraA][1][1];
			Cubo[caraC][6][0]=copia[caraA][2][0];
			Cubo[caraC][6][1]=copia[caraA][2][1];
			Cubo[caraC][9][0]=copia[caraA][3][0];
			Cubo[caraC][9][1]=copia[caraA][3][1];	
		
		}	
	}
	
	
	else if(cara==caraE){
		
		if(direccion==DERECHA || direccion==2){

			movimientosConjunto.push("ED");
			
			//La cara que giro
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraE][elemento][0]=copia[caraE][derecha[elemento]][0];
				Cubo[caraE][elemento][1]=copia[caraE][derecha[elemento]][1];
			}	
			
			//Los laterales de la cara que giro
			Cubo[caraF][7][0]=copia[caraB][7][0];
			Cubo[caraF][7][1]=copia[caraB][7][1];
			Cubo[caraF][4][0]=copia[caraB][4][0];
			Cubo[caraF][4][1]=copia[caraB][4][1];
			Cubo[caraF][1][0]=copia[caraB][1][0];
			Cubo[caraF][1][1]=copia[caraB][1][1];

			Cubo[caraB][7][0]=copia[caraA][7][0];
			Cubo[caraB][7][1]=copia[caraA][7][1];
			Cubo[caraB][4][0]=copia[caraA][4][0];
			Cubo[caraB][4][1]=copia[caraA][4][1];
			Cubo[caraB][1][0]=copia[caraA][1][0];
			Cubo[caraB][1][1]=copia[caraA][1][1];

			Cubo[caraA][7][0]=copia[caraD][3][0];
			Cubo[caraA][7][1]=copia[caraD][3][1];
			Cubo[caraA][4][0]=copia[caraD][6][0];
			Cubo[caraA][4][1]=copia[caraD][6][1];
			Cubo[caraA][1][0]=copia[caraD][9][0];
			Cubo[caraA][1][1]=copia[caraD][9][1];

			Cubo[caraD][3][0]=copia[caraF][7][0];
			Cubo[caraD][3][1]=copia[caraF][7][1];
			Cubo[caraD][6][0]=copia[caraF][4][0];
			Cubo[caraD][6][1]=copia[caraF][4][1];
			Cubo[caraD][9][0]=copia[caraF][1][0];
			Cubo[caraD][9][1]=copia[caraF][1][1];
		}	
		
		
		else if(direccion==IZQUIERDA){

			movimientosConjunto.push("EI");
		
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraE][elemento][0]=copia[caraE][izquierda[elemento]][0];
				Cubo[caraE][elemento][1]=copia[caraE][izquierda[elemento]][1];
			}				
			
			Cubo[caraF][7][0]=copia[caraD][3][0];
			Cubo[caraF][7][1]=copia[caraD][3][1];
			Cubo[caraF][4][0]=copia[caraD][6][0];
			Cubo[caraF][4][1]=copia[caraD][6][1];
			Cubo[caraF][1][0]=copia[caraD][9][0];
			Cubo[caraF][1][1]=copia[caraD][9][1];

			Cubo[caraB][7][0]=copia[caraF][7][0];
			Cubo[caraB][7][1]=copia[caraF][7][1];
			Cubo[caraB][4][0]=copia[caraF][4][0];
			Cubo[caraB][4][1]=copia[caraF][4][1];
			Cubo[caraB][1][0]=copia[caraF][1][0];
			Cubo[caraB][1][1]=copia[caraF][1][1];

			Cubo[caraA][7][0]=copia[caraB][7][0];
			Cubo[caraA][7][1]=copia[caraB][7][1];
			Cubo[caraA][4][0]=copia[caraB][4][0];
			Cubo[caraA][4][1]=copia[caraB][4][1];
			Cubo[caraA][1][0]=copia[caraB][1][0];
			Cubo[caraA][1][1]=copia[caraB][1][1];
			
			Cubo[caraD][3][0]=copia[caraA][7][0];
			Cubo[caraD][3][1]=copia[caraA][7][1];
			Cubo[caraD][6][0]=copia[caraA][4][0];
			Cubo[caraD][6][1]=copia[caraA][4][1];
			Cubo[caraD][9][0]=copia[caraA][1][0];
			Cubo[caraD][9][1]=copia[caraA][1][1];
			
		}	
	}


	else if(cara==caraF){
	
		if(direccion==DERECHA || direccion==2){

			movimientosConjunto.push("FD");
			
			//La cara que giro
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraF][elemento][0]=copia[caraF][derecha[elemento]][0];
				Cubo[caraF][elemento][1]=copia[caraF][derecha[elemento]][1];
			}	
			
			//Los laterales de la cara que giro

			Cubo[caraC][9][0]=copia[caraB][9][0];
			 Cubo[caraC][9][1]=copia[caraB][9][1];
			  Cubo[caraC][8][0]=copia[caraB][8][0];
			   Cubo[caraC][8][1]=copia[caraB][8][1];
			    Cubo[caraC][7][0]=copia[caraB][7][0];
			     Cubo[caraC][7][1]=copia[caraB][7][1];

			Cubo[caraB][9][0]=copia[caraE][9][0];
 			 Cubo[caraB][9][1]=copia[caraE][9][1];
 			  Cubo[caraB][8][0]=copia[caraE][8][0];
			   Cubo[caraB][8][1]=copia[caraE][8][1];
			    Cubo[caraB][7][0]=copia[caraE][7][0];
			     Cubo[caraB][7][1]=copia[caraE][7][1];

			Cubo[caraE][9][0]=copia[caraD][9][0];
			 Cubo[caraE][9][1]=copia[caraD][9][1];
			  Cubo[caraE][8][0]=copia[caraD][8][0];
			   Cubo[caraE][8][1]=copia[caraD][8][1];
			    Cubo[caraE][7][0]=copia[caraD][7][0];
			     Cubo[caraE][7][1]=copia[caraD][7][1];

			Cubo[caraD][9][0]=copia[caraC][9][0];
			 Cubo[caraD][9][1]=copia[caraC][9][1];
			  Cubo[caraD][8][0]=copia[caraC][8][0];
			   Cubo[caraD][8][1]=copia[caraC][8][1];
			    Cubo[caraD][7][0]=copia[caraC][7][0];
			     Cubo[caraD][7][1]=copia[caraC][7][1];
		}	
		
		
		else if(direccion==IZQUIERDA){

			movimientosConjunto.push("FI");
		
			for(elemento=1; elemento<=9; elemento++){
				Cubo[caraF][elemento][0]=copia[caraF][izquierda[elemento]][0];
				Cubo[caraF][elemento][1]=copia[caraF][izquierda[elemento]][1];
			}				
						
			Cubo[caraC][9][0]=copia[caraD][9][0];
			Cubo[caraC][9][1]=copia[caraD][9][1];
			Cubo[caraC][8][0]=copia[caraD][8][0];
			Cubo[caraC][8][1]=copia[caraD][8][1];
			Cubo[caraC][7][0]=copia[caraD][7][0];
			Cubo[caraC][7][1]=copia[caraD][7][1];

			Cubo[caraB][9][0]=copia[caraC][9][0];
			Cubo[caraB][9][1]=copia[caraC][9][1];
			Cubo[caraB][8][0]=copia[caraC][8][0];
			Cubo[caraB][8][1]=copia[caraC][8][1];
			Cubo[caraB][7][0]=copia[caraC][7][0];
			Cubo[caraB][7][1]=copia[caraC][7][1];

			Cubo[caraE][9][0]=copia[caraB][9][0];
			Cubo[caraE][9][1]=copia[caraB][9][1];
			Cubo[caraE][8][0]=copia[caraB][8][0];
			Cubo[caraE][8][1]=copia[caraB][8][1];
			Cubo[caraE][7][0]=copia[caraB][7][0];
			Cubo[caraE][7][1]=copia[caraB][7][1];

			Cubo[caraD][9][0]=copia[caraE][9][0];
			Cubo[caraD][9][1]=copia[caraE][9][1];
			Cubo[caraD][8][0]=copia[caraE][8][0];
			Cubo[caraD][8][1]=copia[caraE][8][1];
			Cubo[caraD][7][0]=copia[caraE][7][0];
			Cubo[caraD][7][1]=copia[caraE][7][1];
			

		}	
	}
		
		
	if(direccion==2)
		giro(cara, DERECHA, Cubo);

}


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
	else{
		alert("\n  Lastima  \n");
		alert("Colores mal ingresados\n");
		location.reload(true);
	}
		
}
/*
Cubo[6][10][2]={
	{{0,0}, {0, 1}, {0, 2}, {0,3}, {0,4}, {0,5}, {0,6}, {0,7}, {0,8}, {0,9}}, 
	{{1,0}, {1, 1}, {1, 2}, {1,3}, {1,4}, {1,5}, {1,6}, {1,7}, {1,8}, {1,9}},

}*/



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
						//alert("\nUppps, algo salio mal.  Elementos mal acomodados\n esquinasA \n");
						alert("Colores mal ingresados\n");
						location.reload(true); 
					}
				}				
			}	
		}
}



function orientacionUltimaCapa( caraReferencia, Cubo){

	var cR, cLI, cLD, cLF, e1, e2, e3, e4, e6, e7, e8, e9;
    //[caraReferencia][posicioncomo si el elemento lateral a la caraReferencia fuera F2]=numElementoF que esta en esa posicion
    var elementosALaCaraReferencia=[
        [0,0,0],
        [0,1,2,3,4,5,6,7,8,9],
        [0,3,6,9,2,5,8,1,4,7],
        [0,9,8,7,6,5,4,3,2,1],
        [0,7,4,1,8,5,2,9,6,3]
    ];

    ///[caraReferencia][direcion que quiero]= numCaralateral, [][0=iquierda], [1=derecha], [][2=enfrete] vistas desde caraF
    var carasLateralesALaCaraReferencia=[
        [0,0,0],
        [4,2,3],
        [1,3,4],        
        [2,4,1],
        [3,1,2]
    ];

    cR=caraReferencia;
    cLI=carasLateralesALaCaraReferencia[cR][IZQUIERDA];
    cLD=carasLateralesALaCaraReferencia[cR][DERECHA];
    cLF=carasLateralesALaCaraReferencia[cR][2];
    e1=elementosALaCaraReferencia[cR][1];
    e2=elementosALaCaraReferencia[cR][2];
    e3=elementosALaCaraReferencia[cR][3];
    e4=elementosALaCaraReferencia[cR][4];
    e6=elementosALaCaraReferencia[cR][6];
    e7=elementosALaCaraReferencia[cR][7];
    e8=elementosALaCaraReferencia[cR][8];
    e9=elementosALaCaraReferencia[cR][9];

    
    //Todas orientadas
    if(Cubo[caraF][1][0]==caraF && Cubo[caraF][2][0]==caraF && Cubo[caraF][3][0]==caraF && Cubo[caraF][4][0]==caraF && Cubo[caraF][6][0]==caraF && Cubo[caraF][7][0]==caraF && Cubo[caraF][8][0]==caraF && Cubo[caraF][9][0]==caraF )
    	return COMPLETO;
    
    ///2.3  Solo cruz
    else if(Cubo[cR][9][0]==caraF && Cubo[cLI][7][0]==caraF && Cubo[cLI][9][0]==caraF && Cubo[cLF][7][0]==caraF && Cubo[caraF][e2][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e8][0]==caraF ){
		giro(cLD, DERECHA, Cubo);
		giro(caraF, 2, Cubo);
		giro(cLD, 2, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLD, 2, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLD, 2, Cubo);
		giro(caraF, 2, Cubo);
		giro(cLD, DERECHA, Cubo);
		return COMPLETO;
    }
    

    else if(Cubo[cR][7][0]==caraF && Cubo[cR][9][0]==caraF && Cubo[cLF][9][0]==caraF && Cubo[cLF][7][0]==caraF && Cubo[caraF][e2][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e8][0]==caraF ){
    	giro(cLF, DERECHA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLF, IZQUIERDA, Cubo);
		return COMPLETO;
    }


    ///2.5  
    else if(Cubo[cLF][7][0]==caraF && Cubo[cLF][9][0]==caraF && Cubo[caraF][e1][0]==caraF && Cubo[caraF][e2][0]==caraF && Cubo[caraF][e3][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e8][0]==caraF ){
		giro(cLD, DERECHA, Cubo);
		giro(caraF, 2, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(cR, IZQUIERDA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cR, DERECHA, Cubo);  
		return COMPLETO;
    }
    

    else if(Cubo[cR][7][0]==caraF && Cubo[cLF][9][0]==caraF && Cubo[caraF][e2][0]==caraF && Cubo[caraF][e3][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e8][0]==caraF && Cubo[caraF][e9][0]==caraF ){
    	giro(cLI, DERECHA, Cubo);
		giro(cLF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(cLF, IZQUIERDA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cLF, DERECHA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(cLF, IZQUIERDA, Cubo); 
		return COMPLETO;   
    }
    
    
    else if(Cubo[cLD][7][0]==caraF && Cubo[cLF][9][0]==caraF && Cubo[caraF][e1][0]==caraF && Cubo[caraF][e2][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e8][0]==caraF && Cubo[caraF][e9][0]==caraF ){
		giro(cLI, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLI, DERECHA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cR, DERECHA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLI, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cR, IZQUIERDA, Cubo);
		return COMPLETO;
    }
    
    
    //Forma pez mirando abajo 
    else if(Cubo[cR][7][0]==caraF && Cubo[cLD][7][0]==caraF && Cubo[cLF][7][0]==caraF && Cubo[caraF][e2][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e7][0]==caraF && Cubo[caraF][e8][0]==caraF ){
		giro(cLD, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, 2, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		return COMPLETO;
    }
    
    //Forma pez mirando arriba
    else if(Cubo[cLI][9][0]==caraF && Cubo[cLD][9][0]==caraF && Cubo[cLF][9][0]==caraF && Cubo[caraF][e2][0]==caraF && Cubo[caraF][e3][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e8][0]==caraF ){
		giro(cLD, DERECHA, Cubo);
		giro(caraF, 2, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		return COMPLETO;
    }
    
    
    else{
    	if(cR==4){
			//alert("\nUpsss, algo paso en la orientacion de la ultima cara\n");
			//return COMPLETO;
			alert("Colores mal ingresados\n");
			location.reload(true); 
		}
		else
			return INCOMPLETO;
    
    }       
}

//aqui en vez de colocar un elemento o colordel elemento la pieza que mando es desde donde me voy a orientar, 



function permutacionAristas( caraReferencia, Cubo){

	var cR, cLI, cLD, cLF, e1, e2, e3, e4, e6, e7, e8, e9;
	 //[caraReferencia][posicioncomo si el elemento lateral a la caraReferencia fuera F2]=numElementoF que esta en esa posicion [5][10]
	var elementosALaCaraReferencia=[
        [0,0,0],
        [0,1,2,3,4,5,6,7,8,9],
        [0,3,6,9,2,5,8,1,4,7],
        [0,9,8,7,6,5,4,3,2,1],
        [0,7,4,1,8,5,2,9,6,3]
    ];

    ///[caraReferencia][direcion que quiero]= numCaralateral, [][0=iquierda], [1=derecha], [][2=enfrete] vistas desde caraF [5][3][5][3]
    var carasLateralesALaCaraReferencia=[
        [0,0,0],
        [4,2,3],
        [1,3,4],        
        [2,4,1],
        [3,1,2]
    ];
	
    cR=caraReferencia;
    cLI=carasLateralesALaCaraReferencia[cR][IZQUIERDA];
    cLD=carasLateralesALaCaraReferencia[cR][DERECHA];
    cLF=carasLateralesALaCaraReferencia[cR][2];
    e1=elementosALaCaraReferencia[cR][1];
    e2=elementosALaCaraReferencia[cR][2];
    e3=elementosALaCaraReferencia[cR][3];
    e4=elementosALaCaraReferencia[cR][4];
    e6=elementosALaCaraReferencia[cR][6];
    e7=elementosALaCaraReferencia[cR][7];
    e8=elementosALaCaraReferencia[cR][8];
    e9=elementosALaCaraReferencia[cR][9];
	
	
	if(Cubo[cR][8][0]==Cubo[cR][7][0] && Cubo[cLI][8][0]==Cubo[cLI][7][0] && Cubo[cLD][8][0]==Cubo[cLD][7][0] && Cubo[cLF][8][0]==Cubo[cLF][7][0]){
		return COMPLETO;	
	}
	
	else if(Cubo[cR][8][0]!=Cubo[cR][7][0] && Cubo[cLI][8][0]!=Cubo[cLI][7][0] && Cubo[cLD][8][0]!=Cubo[cLD][7][0] && Cubo[cLF][8][0]==Cubo[cLF][7][0]){
		//horaria
		if(Cubo[cLD][8][0]==Cubo[cLI][7][0] && Cubo[cLI][8][0]==Cubo[cR][7][0] && Cubo[cR][8][0]==Cubo[cLD][7][0]){
			giro(cLD, IZQUIERDA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(cLD, IZQUIERDA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(cLD, IZQUIERDA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(cLD, IZQUIERDA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(cLD, DERECHA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(cLD, 2, Cubo);		
			return COMPLETO;	
		}
		//antihoraria
		else if(Cubo[cLD][8][0]==Cubo[cR][7][0] && Cubo[cLI][8][0]==Cubo[cLD][7][0] && Cubo[cR][8][0]==Cubo[cLI][7][0]){
			giro(cLD, 2, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(cLD, IZQUIERDA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(cLD, DERECHA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(cLD, DERECHA, Cubo);
			giro(caraF, DERECHA, Cubo);
			giro(cLD, DERECHA, Cubo);
			giro(caraF, IZQUIERDA, Cubo);
			giro(cLD, DERECHA, Cubo);	
			return COMPLETO;		
		}
		else{
			//alert("\nAlgo salio mal con las permutaciones de las aristas horarias y antihorarias\n");	
			//return COMPLETO;
			alert("Colores mal ingresados\n");
			location.reload(true); 
		}
	}

	//aristas en cruz, estan una en frente de la otra donde deben ir
	else if(Cubo[cR][8][0]==Cubo[cLF][7][0] && Cubo[cLI][8][0]==Cubo[cLD][7][0] && Cubo[cLD][8][0]==Cubo[cLI][7][0] && Cubo[cLF][8][0]==Cubo[cR][7][0]){
		giro(cLD, 2, Cubo);
		giro(cLI, 2, Cubo);
		giro(caraA, DERECHA, Cubo);
		giro(cLD, 2, Cubo);
		giro(cLI, 2, Cubo);
		giro(caraF, 2, Cubo);
		giro(cLD, 2, Cubo);
		giro(cLI, 2, Cubo);
		giro(caraA, DERECHA, Cubo);
		giro(cLD, 2, Cubo);
		giro(cLI, 2, Cubo);
		
		return COMPLETO;
		
	}

	//parejas de aristas
	else if(Cubo[cR][8][0]==Cubo[cLD][7][0] && Cubo[cLD][8][0]==Cubo[cR][7][0] && Cubo[cLI][8][0]==Cubo[cLF][7][0] && Cubo[cLF][8][0]==Cubo[cLI][7][0]){
		giro(cLD, 2, Cubo);
		giro(cLI, 2, Cubo);
		giro(caraA, IZQUIERDA, Cubo);
		giro(cLD, 2, Cubo);
		giro(cLI, 2, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(cLI, DERECHA, Cubo);
		giro(cLF, 2, Cubo);
		giro(cLD, 2, Cubo);
		giro(cLI, 2, Cubo);
		giro(cR, 2, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(cLI, DERECHA, Cubo);
		
		return COMPLETO;
	}
	
	else {
		if(cR==4){
			//alert("\nUpsss, algo paso en la permutacion de las aristas de la caraF\n");
			//return COMPLETO;
			alert("Colores mal ingresados\n");
			location.reload(true); 
		}
		else
			return INCOMPLETO;
	
	}

}



function permutacionEsquinas( caraReferencia,  Cubo){

	var cR, cLI, cLD, cLF, e1, e2, e3, e4, e6, e7, e8, e9;
	 //[caraReferencia][posicioncomo si el elemento lateral a la caraReferencia fuera F2]=numElementoF que esta en esa posicion [5][10]
	var elementosALaCaraReferencia=[
        [0,0,0],
        [0,1,2,3,4,5,6,7,8,9],
        [0,3,6,9,2,5,8,1,4,7],
        [0,9,8,7,6,5,4,3,2,1],
        [0,7,4,1,8,5,2,9,6,3]
    ];
 
    ///[caraReferencia][direcion que quiero]= numCaralateral, [][0=iquierda], [1=derecha], [][2=enfrete] vistas desde caraF [5][3]
    var carasLateralesALaCaraReferencia=[
        [0,0,0],
        [4,2,3],
        [1,3,4],        
        [2,4,1],
        [3,1,2]
    ];
	
    cR=caraReferencia;
    cLI=carasLateralesALaCaraReferencia[cR][IZQUIERDA];
    cLD=carasLateralesALaCaraReferencia[cR][DERECHA];
    cLF=carasLateralesALaCaraReferencia[cR][2];
    e1=elementosALaCaraReferencia[cR][1];
    e2=elementosALaCaraReferencia[cR][2];
    e3=elementosALaCaraReferencia[cR][3];
    e4=elementosALaCaraReferencia[cR][4];
    e6=elementosALaCaraReferencia[cR][6];
    e7=elementosALaCaraReferencia[cR][7];
    e8=elementosALaCaraReferencia[cR][8];
    e9=elementosALaCaraReferencia[cR][9];
	


	if(Cubo[cR][7][0]==Cubo[cR][9][0] && Cubo[cLI][7][0]==Cubo[cLI][9][0] && Cubo[cLD][7][0]==Cubo[cLD][9][0] && Cubo[cLF][7][0]==Cubo[cLF][9][0]){
		return COMPLETO;	
	}
	
	else if(Cubo[cR][7][0]!=Cubo[cR][9][0] && Cubo[cLI][7][0]!=Cubo[cLI][9][0] && Cubo[cLD][7][0]!=Cubo[cLD][9][0] && Cubo[cLF][7][0]!=Cubo[cLF][9][0]){
		giro(cLI, IZQUIERDA, Cubo);
		giro(cR, DERECHA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cLF, 2, Cubo);
		giro(cLI, DERECHA, Cubo);
		giro(cR, IZQUIERDA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cLF, 2, Cubo);
		giro(cLI, 2, Cubo);
		
		giro(caraF, DERECHA, Cubo);
		
		giro(cLI, IZQUIERDA, Cubo);
		giro(cR, DERECHA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cLF, 2, Cubo);
		giro(cLI, DERECHA, Cubo);
		giro(cR, IZQUIERDA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cLF, 2, Cubo);
		giro(cLI, 2, Cubo);	
		return COMPLETO;	
	}

	else if(Cubo[cR][7][0]!=Cubo[cR][9][0] && Cubo[cLI][7][0]!=Cubo[cLI][9][0] && Cubo[cLD][7][0]!=Cubo[cLD][9][0] && Cubo[cLF][7][0]==Cubo[cLF][9][0]){
		giro(cLI, IZQUIERDA, Cubo);
		giro(cR, DERECHA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cLF, 2, Cubo);
		giro(cLI, DERECHA, Cubo);
		giro(cR, IZQUIERDA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cLF, 2, Cubo);
		giro(cLI, 2, Cubo);	
		return COMPLETO;	
	}
	
	else {
		if(cR==4){
			//alert("\nUpsss, algo paso en la permutacion de las esquinas de la caraF\n");
			//return COMPLETO;
			alert("Colores mal ingresados\n");
			location.reload(true); 
		}
		else
			return INCOMPLETO;
	
	}

}



function cruzCaraF( caraReferencia, Cubo){

	var cR, cLI, cLD, cLF, e1, e2, e3, e4, e6, e7, e8, e9;
	 //[caraReferencia][posicioncomo si el elemento lateral a la caraReferencia fuera F2]=numElementoF que esta en esa posicion [5][10]
	var elementosALaCaraReferencia = [
        [0,0,0],
        [0,1,2,3,4,5,6,7,8,9],
        [0,3,6,9,2,5,8,1,4,7],
        [0,9,8,7,6,5,4,3,2,1],
        [0,7,4,1,8,5,2,9,6,3]
    ];

    
    ///[caraReferencia][direcion que quiero]= numCaralateral, [][0=iquierda], [1=derecha], [][2=enfrete] vistas desde caraF [5][3]
	 var carasLateralesALaCaraReferencia = [
        [0,0,0],
        [4,2,3],
        [1,3,4],        
        [2,4,1],
        [3,1,2]
    ];

	
    cR=caraReferencia;
    cLI=carasLateralesALaCaraReferencia[cR][IZQUIERDA];
    cLD=carasLateralesALaCaraReferencia[cR][DERECHA];
    cLF=carasLateralesALaCaraReferencia[cR][2];
    e1=elementosALaCaraReferencia[cR][1];
    e2=elementosALaCaraReferencia[cR][2];
    e3=elementosALaCaraReferencia[cR][3];
    e4=elementosALaCaraReferencia[cR][4];
    e6=elementosALaCaraReferencia[cR][6];
    e7=elementosALaCaraReferencia[cR][7];
    e8=elementosALaCaraReferencia[cR][8];
    e9=elementosALaCaraReferencia[cR][9];
	
	
	if(Cubo[caraF][2][0]==caraF && Cubo[caraF][4][0]==caraF && Cubo[caraF][6][0]==caraF && Cubo[caraF][8][0]==caraF){
		return COMPLETO;	
	}
	
	///Ninguna en la parte de caraF
	else if(Cubo[caraF][e2][0]!=caraF && Cubo[caraF][e4][0]!=caraF && Cubo[caraF][e6][0]!=caraF && Cubo[caraF][e8][0]!=caraF){
		giro(cLI, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cR, IZQUIERDA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cR, DERECHA, Cubo);
		giro(cLI, DERECHA, Cubo);		
		
		giro(cLF, DERECHA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLF, IZQUIERDA, Cubo);
		return COMPLETO;
	}

	///
	else if(Cubo[caraF][e2][0]==caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]!=caraF && Cubo[caraF][e8][0]!=caraF){
		giro(cLI, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		giro(cR, IZQUIERDA, Cubo);
		giro(caraF, 2, Cubo);
		giro(cR, DERECHA, Cubo);		
		giro(cLI, DERECHA, Cubo);	
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLI, IZQUIERDA, Cubo);
		return COMPLETO;
		
	}

	else if(Cubo[caraF][e2][0]!=caraF && Cubo[caraF][e4][0]==caraF && Cubo[caraF][e6][0]==caraF && Cubo[caraF][e8][0]!=caraF){
		giro(cLF, DERECHA, Cubo);
		giro(cLD, DERECHA, Cubo);
		giro(caraF, DERECHA, Cubo);
		giro(cLD, IZQUIERDA, Cubo);
		giro(caraF, IZQUIERDA, Cubo);
		giro(cLF, IZQUIERDA, Cubo);
		return COMPLETO;
	}
	
	else {
		if(cR==4){
			//alert("\nUpsss, algo paso en la orientacion de las aristas de la caraF\n");
			alert("Colores mal ingresados\n");
			location.reload(true); 
			//return COMPLETO;
		}
		else
			return INCOMPLETO;
	
	}

}

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
	
	else {
		//alert("\nQue demonios paso aqui?\n Acomodar \n");
		alert("Colores mal ingresados\n");
		location.reload(true); 
	}
}

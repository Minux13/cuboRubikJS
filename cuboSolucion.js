var movimientosConjunto=[];   

function main(){

	var num_elemento, cara, llenar, cara_compara;
	var total_piezas_color=[]; //[6]
	var total_CadaElemento=[]; //[10]
	var piezasporcara, piezasentotal, completado, caraReferencia;
	var entrada=[]; //[6][10][3]
	var Cubo=[]     //[6][10][3]
	var entradac=[];    //[6][10][3]
	var entrada_usuario=[];   //[6][10][3]
	var A5, B5, C5, D5, E5, F5;
	

	//Inicializa arreglos
	for(cara=0; cara<=5; cara++){
		
		Cubo.push([]);
		total_piezas_color.push([0]);
		
		for(llenar=0; llenar<=9; llenar++){
		//	entrada[cara][llenar][0]=0;
		//	entrada[cara][llenar][1]=0;
			Cubo[cara].push([]);   

			Cubo[cara][llenar].push(0);  
			Cubo[cara][llenar].push(0);

			total_CadaElemento.push(0);
		}
	}
	
	
		
	//*********Entrada 

	entrada_usuario=[
['r','r','r','r','r','r','r','r','r','r'],
['r','a','b','v','a','a','n','b','r','r'],
['r','y','b','y','a','n','v','r','n','r'],
['r','a','y','b','y','v','b','r','r','r'],
['r','r','r','r','r','r','r','r','r','r'],
['r','r','r','r','r','r','r','r','r','r']
]

	

	for(cara = 0; cara <= 5; cara++){
		for(num_elemento = 1; num_elemento <= 9; num_elemento++){

			if (entradaUsuario.colores[cara][num_elemento] == color.white)
				entrada_usuario[cara][num_elemento] = "A"
			else if (entradaUsuario.colores[cara][num_elemento] == color.blue)
				entrada_usuario[cara][num_elemento] = "B"
			else if (entradaUsuario.colores[cara][num_elemento] == color.red)
				entrada_usuario[cara][num_elemento] = "C"
			else if (entradaUsuario.colores[cara][num_elemento] == color.orange)
				entrada_usuario[cara][num_elemento] = "D"
			else if (entradaUsuario.colores[cara][num_elemento] == color.green)
				entrada_usuario[cara][num_elemento] = "E"
			else if (entradaUsuario.colores[cara][num_elemento] == color.yellow)
				entrada_usuario[cara][num_elemento] = "F"
		}
	}


	
		
	/************************Validación**************************/

	//Verifica que cada elemento 5 de cada cara sea distinto
	for(cara=0; cara<=5; cara++){
		for(cara_compara=cara+1; cara_compara<=5; cara_compara++){	
			if(entrada_usuario[cara][5]==entrada_usuario[cara_compara][5]){
				alertaColoresMalIngresados();			
				return 0;
			}				
		}	
	}
	
	
	A5 = entrada_usuario[0][5][0];
	B5 = entrada_usuario[1][5][0];
	C5 = entrada_usuario[2][5][0];
	D5 = entrada_usuario[3][5][0];
	E5 = entrada_usuario[4][5][0];
	F5 = entrada_usuario[5][5][0];
	
		
	
	//Verifica que cada color de los elementos sea uno de los seis colores, cuenta cuantos elementos hay de cada color y le asigna el valor de 0, 1, 2,... dependiendo de la cara respectivamente a Cubo[][][]
	    
	for(cara=0; cara<=5; cara++){
		for(num_elemento=1; num_elemento<=9; num_elemento++){		
			if(entrada_usuario[cara][num_elemento] == A5){
				Cubo[cara][num_elemento][0]=0;
				total_piezas_color[0]++;
			}
			else if(entrada_usuario[cara][num_elemento] == B5){
				Cubo[cara][num_elemento][0]=1;
				total_piezas_color[1]++;
			}
			else if(entrada_usuario[cara][num_elemento] == C5){
				Cubo[cara][num_elemento][0]=2;
				total_piezas_color[2]++;
				}
			else if(entrada_usuario[cara][num_elemento] == D5){
				Cubo[cara][num_elemento][0]=3;
				total_piezas_color[3]++;
			}
			else if(entrada_usuario[cara][num_elemento] == E5){
				Cubo[cara][num_elemento][0]=4;
				total_piezas_color[4]++;
			}
			else if(entrada_usuario[cara][num_elemento] == F5){
				Cubo[cara][num_elemento][0]=5;
				total_piezas_color[5]++;
			}
			else {
				alertaColoresMalIngresados();
				return 0;
			}
			
		}	
	}
	
	
	//Cada elemento de total_piezas_color tiene el numero de elementos que se encontraron de un color, cada cara tiene 9 asi que el valor de cada elemento del arreglo debe ser 9
	for(piezasporcara=0; piezasporcara<=5; piezasporcara++){
		if(total_piezas_color[piezasporcara]!=9){
			alertaColoresMalIngresados();
			return 0;	
		}	
	}
	
	
	//Obtiene la arista que va a su lado, sabiendo que arista va a su lado se determina el numero de pieza y elemento que es
	for(cara=0; cara<=5; cara++){	
		for(num_elemento=2; num_elemento<=8; num_elemento=num_elemento+2){		
			obtener_valor_arista(cara, num_elemento, Cubo);
				
		}	
	}
	
	//Obtiene las esquinas las esquinas
	for(cara=0; cara<=5; cara++){	
		for(num_elemento=1; num_elemento<=9; num_elemento=num_elemento+2){
			if(num_elemento==5){					
				continue;
			}
			obtener_valor_esquina(cara, num_elemento, Cubo);
				
		}	
	}
	
	
	//Validación del número del elemento, no me acuerdo muy bien que hice aquí, al parecer valida que sea un número del 1 al 9
	for(cara=0; cara<=5; cara++){
		for(num_elemento=1; num_elemento<=9; num_elemento++){
			if(num_elemento==5){					
				continue;
			}		
			if(Cubo[cara][num_elemento][1]>=1 && Cubo[cara][num_elemento][1]<=9){
				total_CadaElemento[num_elemento]=total_CadaElemento[num_elemento]+1;
			}	
			else{
				alertaColoresMalIngresados();
				return 0;
 			}						
		}	
	}

	//Valida que haya 6 números de cada elemento
	for(piezasentotal=1; piezasentotal<=9; piezasentotal++){
		if(piezasentotal==5){					
				continue;
		}
		if(total_CadaElemento[piezasentotal]!=6){
			alertaColoresMalIngresados();
			return 0;
		}	
	}
	
	

	/******************Fin de la validación*******************/




	///Ya que el arreglo colorsC tiene los colores de los "elementos de las caras del cubo" en el "elemento del arreglo" donde comienza a dibujar la pieza
	//Contiene el numero del elemento del arreglo de colorsC y empieza con 0 para agregar un elemento al arreglo, ya que el el for comienza en 1 por que el primer elemento de entrada usuario no se cuenta 
	var esquinasSupIzqElementos = [0,0,2,4,12,14,16,24,26,28];

	 
	///Le asigno los colores al arreglo que contiene los colores de los elementos del cubo
	for(cara=0; cara<=5; cara++){
		for(num_elemento=1; num_elemento<=9; num_elemento++){
						
			if(entrada_usuario[cara][num_elemento] == A5){				
				colorsC[cara][esquinasSupIzqElementos[num_elemento]]= colorA;
			}

			else if(entrada_usuario[cara][num_elemento] == B5){
				colorsC[cara][esquinasSupIzqElementos[num_elemento]]= colorB;
			}

			else if(entrada_usuario[cara][num_elemento] == C5){
				colorsC[cara][esquinasSupIzqElementos[num_elemento]]= colorC;
			}

			else if(entrada_usuario[cara][num_elemento] == D5){			
				colorsC[cara][esquinasSupIzqElementos[num_elemento]]= colorD;
			}

			else if(entrada_usuario[cara][num_elemento] == E5){								
				colorsC[cara][esquinasSupIzqElementos[num_elemento]]= colorE;
			}

			else if(entrada_usuario[cara][num_elemento] == F5){							
				colorsC[cara][esquinasSupIzqElementos[num_elemento]]= colorF;
			}			
		}	
	}


	/******************Empieza a resolverlo*******************/


	while(INCOMPLETO){
		completado=aristasA(Cubo, 2, 0);
		console.log(completado)
		if(completado==COMPLETO){
				console.log("daerer")
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}
		console.log("while 1");
	}	
	
	while(INCOMPLETO){
		completado=aristasA(Cubo, 4, 0);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 2");
	}	
	
	while(INCOMPLETO){
		completado=aristasA(Cubo, 6, 0);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 3");
	}	
	
	while(INCOMPLETO){
		completado=aristasA(Cubo, 8, 0);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 4");
	}
	
	
	completado=aristasA(Cubo, 2, 1);
		
	
	while(INCOMPLETO){
		completado=esquinasA(1, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 5");
	}	
		
	while(INCOMPLETO){
		completado=esquinasA(3, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 6");
	}
		
	while(INCOMPLETO){
		completado=esquinasA(7, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 7");
	}
	
	while(INCOMPLETO){
		completado=esquinasA(9, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 8");
	}
	
	//printf("\n");

	
	while(INCOMPLETO){
		completado=aristasMedio(1, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 9");
	}
		
	while(INCOMPLETO){
		completado=aristasMedio(2, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 10");
	}
	
	while(INCOMPLETO){
		completado=aristasMedio(3, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 11");
	}
		
	while(INCOMPLETO){
		completado=aristasMedio(4, Cubo);
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 12");
	}
	

	//Cara de abajo
		
	caraReferencia=1;
	while(INCOMPLETO){
		completado=cruzCaraF(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 13");
	}
	
	//////

	caraReferencia=1;
	while(INCOMPLETO){
		completado=orientacionUltimaCapa(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 14");
	}
	
	///////
	
	caraReferencia=1;
	while(INCOMPLETO){
		completado=permutacionEsquinas(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 15");
	}
	
	//////
	
	caraReferencia=1;
	while(INCOMPLETO){
		completado=permutacionAristas(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO){
			break;
		}
		else if(completado == COLORESMAL){
			movimientosConjunto=[];
			return 0;		
		}

		console.log("while 16");
	}
	
	
	var varAcomodar; 

	varAcomodar = acomodar(1, Cubo);

	if(varAcomodar == COLORESMAL){
		movimientosConjunto=[];
		return 0;		
	}

	borrarCanvasEntrada();

	cubo();	

}






/*
avvabnary
yavyavbyy
narrnrvvb
bnnbvyavn
bbrrraynn
vnrbyyabr


bvaybrvav
bbybanavy
rayvnrrbn
nbrvvavav
arrnrrnyn      
byanynbyy

Con esta el cubo esta resuelto
vyvabryya
ranyaryyv
bvrbnbnba
brnvvnrvy
yrabrvvan
anbnyarnb

rybybrrav
arnvavbnv
ybvrnbnan
rvaavayyy
bnyyrbvna
nbbvynrra



*/

	
	/*
	vraybvnnn
	ybbaabyvb
	ayrrnyarv
yanavabyn
ynanrbbnr
vbrvyvvrr
	
	Esta no la resolvio
	vnyybaryb
yrraabnbn
ararnvayv
rbrrvvnna
bnvbrnnyy
vabvyayvb


raybbvnnr
bvanabann
bbnrnrvrb
arvvvyraa
ynvvryybn
bayayyryv



nrnnbbanb
bvvaarayb
rnvannaar
bvaavryvn
yynbrbvbr
yrrvyyyyv

anrabvynr
abvaanbvn
ybyanvann
aybyvbvrv
rynrrbban
vrbryvryy

Esta tampoc
nnbvbrbar
nnbraryaa
vvrynyyyy
abavvnvnb
ybavrbvrv
nbrayanyr

arbabbyvy
rrrranavn
vnvynvyyv
rynyvvynv
bbabranbb
rnaryaban

Esta t
araabayvn
rryrayavr
vyyvnyvnv
nynnvvrnv
bbabranbb
rnbrybbay


	*/

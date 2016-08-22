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


/*
entrada_usuario=[
['r','a','n','r','a','b','v','y','n','r'],
['r','a','b','v','a','a','n','b','v','n'],
['r','y','b','y','a','n','v','a','n','n'],
['r','a','y','b','y','v','b','v','r','v'],
['r','r','y','n','r','r','b','b','a','n'],
['r','v','r','b','r','y','v','r','y','y']
]


	entrada_usuario=[
		['r','r','a','y','b','b','v','n','n','r'],
		['r','b','v','a','n','a','b','a','n','n'],
		['r','b','b','n','r','n','r','v','r','b'],
		['r','a','r','v','v','v','y','r','a','a'],
		['r','y','n','v','v','r','y','y','b','n'],
		['r','b','a','y','a','y','y','r','y','v']
	]




	for(cara=0; cara<=5; cara++){
		for(num_elemento=1; num_elemento<=9; num_elemento++){	
			
			entrada_usuario[cara][num_elemento][0]=getchar();

			raybbvnnr
entrada_usuario=[
['r','a','n','r','a','b','v','y','n','r'],
['r','a','b','v','a','a','n','b','v','n'],
['r','y','b','y','a','n','v','a','n','n'],
['r','a','y','b','y','v','b','v','r','v'],
['r','r','y','n','r','r','b','b','a','n'],
['r','v','r','b','r','y','v','r','y','y']
]
			}	
	}
	*/
	
	
		
	/************************Validación**************************/

	//Verifica que cada elemento 5 de cada cara sea distinto
	for(cara=0; cara<=5; cara++){
		for(cara_compara=cara+1; cara_compara<=5; cara_compara++){	
			
			if(entrada_usuario[cara][5]==entrada_usuario[cara_compara][5]){
				//alert("Caracteres mal ingresados.\n");
				alert("Colores mal ingresados."); 	// Hay elementos centrales de las caras del mismo color\n");
				location.reload(true);
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
				alert("Colores mal ingresados. Se introdujo un color que no concordo con uno de los seis colores\n");
				location.reload(true); 
			
			}
			
		}	
	}
	
	
	//Cada elemento de total_piezas_color tiene el numero de elementos que se encontraron de un color, cada cara tiene 9 asi que el valor de cada elemento del arreglo debe ser 9
	for(piezasporcara=0; piezasporcara<=5; piezasporcara++){
		if(total_piezas_color[piezasporcara]!=9){
			alert("Colores mal ingresados.\n");   // Se introdujo un color de elemento de mas\n");
			location.reload(true); 		
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
	
	
	//Validación del número del elemento, al parecer valida que sea un número del 1 al 9
	for(cara=0; cara<=5; cara++){
		for(num_elemento=1; num_elemento<=9; num_elemento++){
			if(num_elemento==5){					
				continue;
			}		
			if(Cubo[cara][num_elemento][1]>=1 && Cubo[cara][num_elemento][1]<=9){
				total_CadaElemento[num_elemento]=total_CadaElemento[num_elemento]+1;
			}	
			else{
				alert("Colores mal ingresados\n");
				location.reload(true); 
			}						
		}	
	}

	//Valida que haya 6 números de cada elemento
	for(piezasentotal=1; piezasentotal<=9; piezasentotal++){
		if(piezasentotal==5){					
				continue;
		}
		if(total_CadaElemento[piezasentotal]!=6){
			alert("Colores mal ingresados\n");
			location.reload(true);	
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
		if(completado==COMPLETO)
			break;
	}	
	
	while(INCOMPLETO){
		completado=aristasA(Cubo, 4, 0);
		if(completado==COMPLETO)
			break;
	}	
	
	while(INCOMPLETO){
		completado=aristasA(Cubo, 6, 0);
		if(completado==COMPLETO)
			break;
	}	
	
	while(INCOMPLETO){
		completado=aristasA(Cubo, 8, 0);
		if(completado==COMPLETO)
			break;
	}
	
	
	completado=aristasA(Cubo, 2, 1);
		
	
	while(INCOMPLETO){
		completado=esquinasA(1, Cubo);
		if(completado==COMPLETO)
			break;
	}	
		
	while(INCOMPLETO){
		completado=esquinasA(3, Cubo);
		if(completado==COMPLETO)
			break;
	}
		
	while(INCOMPLETO){
		completado=esquinasA(7, Cubo);
		if(completado==COMPLETO)
			break;
	}
	
	while(INCOMPLETO){
		completado=esquinasA(9, Cubo);
		if(completado==COMPLETO)
			break;
	}
	
	//printf("\n");

	
	while(INCOMPLETO){
		completado=aristasMedio(1, Cubo);
		if(completado==COMPLETO)
			break;
	}
		
	while(INCOMPLETO){
		completado=aristasMedio(2, Cubo);
		if(completado==COMPLETO)
			break;
	}
	
	while(INCOMPLETO){
		completado=aristasMedio(3, Cubo);
		if(completado==COMPLETO)
			break;
	}
		
	while(INCOMPLETO){
		completado=aristasMedio(4, Cubo);
		if(completado==COMPLETO)
			break;
	}
	

	//printf("\n");
	
	caraReferencia=1;
	while(INCOMPLETO){
		completado=cruzCaraF(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO)
			break;
	}
	
	//printf("\n");

	caraReferencia=1;
	while(INCOMPLETO){
		completado=orientacionUltimaCapa(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO)
			break;
	}
	
	//printf("\n");
	
	caraReferencia=1;
	while(INCOMPLETO){
		completado=permutacionEsquinas(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO)
			break;
	}
	
	//printf("\n");
	
	caraReferencia=1;
	while(INCOMPLETO){
		completado=permutacionAristas(caraReferencia, Cubo);
		caraReferencia++;
		if(completado==COMPLETO)
			break;
	}
	
	
	acomodar(1, Cubo);

	cubo();
	





	/*
	printf("\n\n");
	
	
	for(cara=0; cara<=5; cara++){
		for(num_elemento=1; num_elemento<=9; num_elemento++){
			if(num_elemento==5){					
				continue;
			}		
			if(Cubo[cara][num_elemento][0]==cara && Cubo[cara][num_elemento][1]==num_elemento){
				;
			}	
			else{
				printf("\nAlgo salio mal con el cubo\n");
				return 0;
			}
			if(cara==5 && num_elemento==9){
				printf("\n\n****EL CUBO ESTA RESUELTO****\n\n");
				return 0;
			}						
		}	
	}
	*/

	//return 0;	

/*	for(i=0; i<movimientosConjunto.length; i++){

		if(movimientosConjunto[i]=="AD"){
			console.log("AD, ");
		}
		else if(movimientosConjunto[i]=="AI"){
			console.log("AI, ");	
		}
		else if(movimientosConjunto[i]=="BD"){
			console.log("BD, ");
		}
		else if(movimientosConjunto[i]=="BI"){
			console.log("BI, ");	
		}
		else if(movimientosConjunto[i]=="CD"){
			console.log("CD, ");	
		}
		else if(movimientosConjunto[i]=="CI"){
			console.log("CI, ");	
		}
		else if(movimientosConjunto[i]=="DD"){
			console.log("DD, ");	
		}
		else if(movimientosConjunto[i]=="DI"){
			console.log("DI, ");	
		}
		else if(movimientosConjunto[i]=="ED"){
			console.log("ED, ");	
		}
		else if(movimientosConjunto[i]=="EI"){
			console.log("EI, ");	
		}
		else if(movimientosConjunto[i]=="FD"){
			console.log("FD, ");	
		}
		else if(movimientosConjunto[i]=="FI"){
			console.log("FI, ");	
		}
			
	}*/
	
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

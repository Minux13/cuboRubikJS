//Arreglos para los vertices de cada pieza
/*
 	0   1   2   3            
     	|   |    		    3
 	4___5___6___7 		    D
     	|   |           4 E   C 2
 	8___9___10__11 		    B
     	|   |    		    1
     	|   |    
    12  13  14  15
			   


 	0   1 2    3 4    5           
      	 |      |    
      	 |      |    
     	 |      |    
 	6___7_8____9_10___11 		   D
    12 13 14  15 16   17         E   C
     	 |      |                  B
     	 |      |    
   18__19_20__21_22___23 
   24  25|26  27|28   29    
     	 |      |  
		 |      |    
   30  31 32  33 34   35


   Me falta arreglar theta y en el otro quitar las variables caraA, caraB..

*/


var tamanoP=30;  				 //La mitad de tamaño de cada pieza en pixeles 
var nc=5;  						 //numero de caras menos uno
var nv=35  						 //numero de vertices menos uno

var piDiv = 32;					 //Es lo que va a dividir PI en el angulo de rotación 
var angle = Math.PI/6.5;         //Angulo de proyeccion
var cosAngle=Math.cos(angle);
var sinAngle=Math.sin(angle);


/*var red="#D9001B"  
var blue="#2600BE"
var orange="#FE7700"
var yellow="#FFFC02"
var green="#008300"
var white="#FFFFFF";
var sombra="#4A2D2D";
*/

var colorE = "#C00000"  
var colorB = "#2600BE"
var colorC = "#FE7700"
var colorF = "#FFFC02"
var colorD = "#009019"
var colorA = "#FFFFFF";
var sombra = "#4A2D2D";   ///Los orificios del cubo


var colorsC=[];  //Todos los colores del cubo, el valor del color lo tendra el número de la posición del vertices de la pieza en donde empieza a trazar la pieza

for (i=0; i<=5; i++){
	colorsC.push([]);
	
	for(j=0; j<=35; j++){
		colorsC[i].push("#666999");
	}		
}


var gruesoL=1;
var colorL="black"

var count=0;   //es para saber cuando detenerce y deje de rotar la cara, cuando una función que la contiene de un resultado de pi/2, que es el total de lo que quiero que rote el cubo, es cuando dejara de rotar la cara
var regreso=0;  //Cuando la función donde esta count de pi/2 tendra un valor de 1 donde sera 90 grados en contra para regresar sus vectores 

vX=[];
vY=[];
vZ=[];

X=[];
Y=[];
Z=[];

for(j=0; j<=nc; j++){

	vX.push([]);
	vY.push([]);
	vZ.push([]);

	X.push([]);
	Y.push([]);
	Z.push([]);

	for(i=0; i<=nv; i++){
		
		X[j].push(1);
		Y[j].push(1);
		Z[j].push(1);
		
		vX[j].push(1);
		vY[j].push(1);
		vZ[j].push(1);
	}
}


//Direcciones de los vertices de cada pieza del cubo, el primer arreglo e tiene [cara][numVertice] = direccion del vertice en X, la o en el Y y la u en el Z, representa las direcciones del primer dibujo

e=[[-3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3], 
[-3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 1, -1, -3, 3, 1, -1, -3, 3, 1, -1, -3, 3, 1, -1, -3],
[-3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3],
[-3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3]
];

o=[[-3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3],
[-3, -3, -3, -3, -1, -1, -1, -1, 1, 1, 1, 1, 3, 3, 3, 3],
[-3, -3, -3, -3, -1, -1, -1, -1, 1, 1, 1, 1, 3, 3, 3, 3],
[-3, -3, -3, -3, -1, -1, -1, -1, 1, 1, 1, 1, 3, 3, 3, 3],
[-3, -3, -3, -3, -1, -1, -1, -1, 1, 1, 1, 1, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];

u=[[-3, -3, -3, -3, -1, -1, -1, -1, 1, 1, 1, 1, 3, 3, 3, 3],
[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
[3, 1, -1, -3, 3, 1, -1, -3, 3, 1, -1, -3, 3, 1, -1, -3],
[-3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3, -3],
[-3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3, -3, -1, 1, 3],
[3, 3, 3, 3, 1, 1, 1, 1, -1, -1, -1, -1, -3, -3, -3, -3]
]; 


//Llena los arreglos de las direcciones X, Y, Z, representa el segundo dibujo
for(j=0; j<=nc; j++){

	for(i=0; i<=nv; i++){
		X[j][0]=e[j][0];
		X[j][1]=e[j][1];		
		X[j][2]=e[j][1];		
		X[j][3]=e[j][2];		
		X[j][4]=e[j][2];		
		X[j][5]=e[j][3];		
		X[j][6]=e[j][4];		
		X[j][7]=e[j][5];		
		X[j][8]=e[j][5];		
		X[j][9]=e[j][6];		
		X[j][10]=e[j][6];		
		X[j][11]=e[j][7];		
		X[j][12]=e[j][4];		
		X[j][13]=e[j][5];		
		X[j][14]=e[j][5];		
		X[j][15]=e[j][6];		
		X[j][16]=e[j][6];		
		X[j][17]=e[j][7];		
		X[j][18]=e[j][8];		
		X[j][19]=e[j][9];		
		X[j][20]=e[j][9];		
		X[j][21]=e[j][10];		
		X[j][22]=e[j][10];		
		X[j][23]=e[j][11];		
		X[j][24]=e[j][8];		
		X[j][25]=e[j][9];		
		X[j][26]=e[j][9];		
		X[j][27]=e[j][10];		
		X[j][28]=e[j][10];		
		X[j][29]=e[j][11];		
		X[j][30]=e[j][12];		
		X[j][31]=e[j][13];		
		X[j][32]=e[j][13];		
		X[j][33]=e[j][14];		
		X[j][34]=e[j][14];		
		X[j][35]=e[j][15];		

		Y[j][0]=o[j][0];
		Y[j][1]=o[j][1];		
		Y[j][2]=o[j][1];		
		Y[j][3]=o[j][2];		
		Y[j][4]=o[j][2];		
		Y[j][5]=o[j][3];		
		Y[j][6]=o[j][4];		
		Y[j][7]=o[j][5];		
		Y[j][8]=o[j][5];		
		Y[j][9]=o[j][6];		
		Y[j][10]=o[j][6];		
		Y[j][11]=o[j][7];		
		Y[j][12]=o[j][4];		
		Y[j][13]=o[j][5];		
		Y[j][14]=o[j][5];		
		Y[j][15]=o[j][6];		
		Y[j][16]=o[j][6];		
		Y[j][17]=o[j][7];		
		Y[j][18]=o[j][8];		
		Y[j][19]=o[j][9];		
		Y[j][20]=o[j][9];		
		Y[j][21]=o[j][10];		
		Y[j][22]=o[j][10];		
		Y[j][23]=o[j][11];		
		Y[j][24]=o[j][8];		
		Y[j][25]=o[j][9];		
		Y[j][26]=o[j][9];		
		Y[j][27]=o[j][10];		
		Y[j][28]=o[j][10];		
		Y[j][29]=o[j][11];		
		Y[j][30]=o[j][12];		
		Y[j][31]=o[j][13];		
		Y[j][32]=o[j][13];		
		Y[j][33]=o[j][14];		
		Y[j][34]=o[j][14];		
		Y[j][35]=o[j][15];	


		Z[j][0]=u[j][0];
		Z[j][1]=u[j][1];		
		Z[j][2]=u[j][1];		
		Z[j][3]=u[j][2];		
		Z[j][4]=u[j][2];		
		Z[j][5]=u[j][3];		
		Z[j][6]=u[j][4];		
		Z[j][7]=u[j][5];		
		Z[j][8]=u[j][5];		
		Z[j][9]=u[j][6];		
		Z[j][10]=u[j][6];		
		Z[j][11]=u[j][7];		
		Z[j][12]=u[j][4];		
		Z[j][13]=u[j][5];		
		Z[j][14]=u[j][5];		
		Z[j][15]=u[j][6];		
		Z[j][16]=u[j][6];		
		Z[j][17]=u[j][7];		
		Z[j][18]=u[j][8];		
		Z[j][19]=u[j][9];		
		Z[j][20]=u[j][9];		
		Z[j][21]=u[j][10];		
		Z[j][22]=u[j][10];		
		Z[j][23]=u[j][11];		
		Z[j][24]=u[j][8];		
		Z[j][25]=u[j][9];		
		Z[j][26]=u[j][9];		
		Z[j][27]=u[j][10];		
		Z[j][28]=u[j][10];		
		Z[j][29]=u[j][11];		
		Z[j][30]=u[j][12];		
		Z[j][31]=u[j][13];		
		Z[j][32]=u[j][13];		
		Z[j][33]=u[j][14];		
		Z[j][34]=u[j][14];		
		Z[j][35]=u[j][15];	
	
	}
}

//Escalo el cubo 

for(j=0; j<=nc; j++){
	for(i=0; i<=nv; i++){

		X[j][i]=X[j][i]*tamanoP;
		Y[j][i]=Y[j][i]*tamanoP;
		Z[j][i]=Z[j][i]*tamanoP;
	}
}

//movimientosConjunto=["FI","FI","FD","CD","BD","AD","AD","BI"];  

var anuncioImagen = {
		
	x			: -510,
	y			: 280,
	colorTexto	: "#FFFFFF"
}

numMC=0;   ///numero de movimientosConjunto[]

milisegundos=40


function cubo(){

	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');

	// Makes 0 the center of the canvas, solo una vez
	if(numMC==0){
		
		//Crea el texto de los movimientos
		var texto= "<h3>Movimientos:</h3> <br> <center>Caras: U=Up, F=Front, R=Right, B=Back, L=Left, D=Down <br>Dirección: -R=Sentido horario, -I=Sentido antihorario</center><br><br>   ";
		
		for(movimiento = 0; movimiento <= movimientosConjunto.length; movimiento++){
			if(movimientosConjunto[movimiento]=="AD"){
				texto = texto + "[U-R]  ";
			}

			else if(movimientosConjunto[movimiento]=="AI"){
				texto = texto + "[U-I]   ";
			}

			else if(movimientosConjunto[movimiento]=="BD"){
				texto = texto + "[F-R]   ";
			}

			else if(movimientosConjunto[movimiento]=="BI"){
				texto = texto + "[F-I]   ";
			}

			else if(movimientosConjunto[movimiento]=="CD"){
				texto = texto + "[R-R]   ";
			}

			else if(movimientosConjunto[movimiento]=="CI"){
				texto = texto + "[R-I]   ";
			}

			else if(movimientosConjunto[movimiento]=="DD"){
				texto = texto + "[B-R]   ";
			}

			else if(movimientosConjunto[movimiento]=="DI"){
				texto = texto + "[B-I]   ";
			}

			else if(movimientosConjunto[movimiento]=="ED"){
				texto = texto + "[L-R]  ";
			}	

			else if(movimientosConjunto[movimiento]=="EI"){
				texto = texto + "[L-I]  ";
			}

			else if(movimientosConjunto[movimiento]=="FD"){
				texto = texto + "[D-R]  ";
			}

			else if(movimientosConjunto[movimiento]=="FI"){
				texto = texto + "[D-I]  ";
			}		
			else
				console.log("Excepcion en los if de cubo()");
		}


		ctx.translate(myCanvas.width / 2, myCanvas.height / 2 -50 );
		coordenadasLogo();
		segundoParrafo = document.getElementById("segundoParrafo");
		var parrafo = document.createElement("p");
		parrafo.innerHTML = texto;
		segundoParrafo.appendChild(parrafo);

	}


	//movimientosConjunto=["AD","AD","AD","AI","AI","AI","AI","AI"];

	//for(i=0; i<movimientosConjunto.length; i++){

		if(movimientosConjunto[numMC]=="AD"){
			regreso=0
			count=0
			reproduccion=setInterval(mueveCaraAD, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="AI"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraAI, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="BD"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraBD, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="BI"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraBI, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="CD"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraCD, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="CI"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraCI, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="DD"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraDD, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="DI"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraDI, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="ED"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraED, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="EI"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraEI, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="FD"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraFD, milisegundos);
		}

		else if(movimientosConjunto[numMC]=="FI"){
			count=0
			regreso=0
			reproduccion=setInterval(mueveCaraFI, milisegundos);
		}		

		else
			console.log("Excepcion en los if de cubo()");

}



function dibujaCara(cara){


	for(i = (nv-7); i >=0; i = i-2){
			 	
		if(i==22){
			i=16
		}

		if(i==10){
			i=4
		}

				
		ctx.beginPath();
		ctx.lineWidth = gruesoL;
		ctx.strokeStyle=colorL;
		ctx.fillStyle=colorsC[cara][i];

			
		ctx.moveTo(vX[cara][i],vY[cara][i]);
		ctx.lineTo(vX[cara][i+1],vY[cara][i+1]);
		ctx.lineTo(vX[cara][i+7],vY[cara][i+7]);
   		ctx.lineTo(vX[cara][i+6],vY[cara][i+6]);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();	
		
	}
}


//Los argumentos son la cara de la línea y nh es la arista del medio a la que pertenece la línea a como estructure el cubo, para las líneas centrales el valor es un 52 o 54
function dibujaLinea(cara, nH){
	

	if(nH==2){		
		for(i=0; i<=4; i=i+2){
	
			ctx.beginPath();
			ctx.lineWidth=gruesoL;
			ctx.strokeStyle=colorL;
			ctx.fillStyle=colorsC[cara][i];
					
			ctx.moveTo(vX[cara][i],vY[cara][i]);
			ctx.lineTo(vX[cara][i+1],vY[cara][i+1]);
			ctx.lineTo(vX[cara][i+7],vY[cara][i+7]);
	   		ctx.lineTo(vX[cara][i+6],vY[cara][i+6]);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();				
		}
	}	


	else if(nH==4){
		for(i=0; i<=24; i=i+12){
	
			ctx.beginPath();
			ctx.lineWidth = gruesoL;
			ctx.strokeStyle=colorL;
			ctx.fillStyle=colorsC[cara][i];
					
			ctx.moveTo(vX[cara][i],vY[cara][i]);
			ctx.lineTo(vX[cara][i+1],vY[cara][i+1]);
			ctx.lineTo(vX[cara][i+7],vY[cara][i+7]);
	   		ctx.lineTo(vX[cara][i+6],vY[cara][i+6]);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();				
		}
	}	


	else if(nH==6){
		for(i=4; i<=28; i=i+12){
	
			ctx.beginPath();
			ctx.lineWidth = gruesoL;
			ctx.strokeStyle=colorL;
			ctx.fillStyle=colorsC[cara][i];
						
			ctx.moveTo(vX[cara][i],vY[cara][i]);
			ctx.lineTo(vX[cara][i+1],vY[cara][i+1]);
			ctx.lineTo(vX[cara][i+7],vY[cara][i+7]);
	   		ctx.lineTo(vX[cara][i+6],vY[cara][i+6]);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();				
		}
	}	


	else if(nH==8){		
		for(i=24; i<=28; i=i+2){

			ctx.beginPath();
			ctx.lineWidth = gruesoL;
			ctx.strokeStyle=colorL;
			ctx.fillStyle=colorsC[cara][i];
				
			ctx.moveTo(vX[cara][i],vY[cara][i]);
			ctx.lineTo(vX[cara][i+1],vY[cara][i+1]);
			ctx.lineTo(vX[cara][i+7],vY[cara][i+7]);
   			ctx.lineTo(vX[cara][i+6],vY[cara][i+6]);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();						
		}
	}


	else if(nH==52){		
		for(i=2; i<=26; i=i+12){

			ctx.beginPath();
			ctx.lineWidth = gruesoL;
			ctx.strokeStyle=colorL;
			ctx.fillStyle=colorsC[cara][i];
	
			ctx.moveTo(vX[cara][i],vY[cara][i]);
			ctx.lineTo(vX[cara][i+1],vY[cara][i+1]);
			ctx.lineTo(vX[cara][i+7],vY[cara][i+7]);
   			ctx.lineTo(vX[cara][i+6],vY[cara][i+6]);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();	
		}
	}	


	else if(nH==54){		
		for(i=12; i<=16; i=i+2){

			ctx.beginPath();
			ctx.lineWidth = gruesoL;
			ctx.strokeStyle=colorL;
			ctx.fillStyle=colorsC[cara][i];
	
			ctx.moveTo(vX[cara][i],vY[cara][i]);
			ctx.lineTo(vX[cara][i+1],vY[cara][i+1]);
			ctx.lineTo(vX[cara][i+7],vY[cara][i+7]);
   			ctx.lineTo(vX[cara][i+6],vY[cara][i+6]);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();	
		}
	}	
}


function mueveCaraAD(){

	if(regreso==1)
		theta=Math.PI/2
	else
		theta=Math.PI/((-1)*piDiv)   //Angulo de rotación

	//Rotación en Y
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			if((j>=1 && i>=12) || (j==5 && i<=11)){
				continue		
			}
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			X[j][i] = x*Math.cos(theta) + z*Math.sin(theta);
			Y[j][i] = y;
			Z[j][i] = z*Math.cos(theta) - x*Math.sin(theta);
		}
	}

	if(regreso != 1){
	
		for(i=0; i <= tamanoArregloLogo; i++){

			var xLogoCanvas = vxLogo[i]
			var zLogoCanvas = vyLogo[i]

			vxLogo[i] = xLogoCanvas*Math.cos(theta) + zLogoCanvas*Math.sin(theta);
			vyLogo[i] = zLogoCanvas*Math.cos(theta) - xLogoCanvas*Math.sin(theta);  //tomo la y como z por que esta pegado a la cara A acostada
	
			
		}
	}

	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d

	proyeccion();
		

	///******Dibuja*****
	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	dibujaCara(1);
	dibujaCara(4);

	///Dibuja el orificio del cubo
	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[1][12],vY[1][12]);
	ctx.lineTo(vX[2][12],vY[2][12]);
	ctx.lineTo(vX[3][12],vY[3][12]);
	ctx.lineTo(vX[4][12],vY[4][12]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	///Dibuja colocados de acuerdo para que no se vea lo de atrás
			
	if(Z[0][0]>0 && (Z[0][0] > Z[0][3])){
		dibujaLinea(2,2);
		dibujaLinea(4,2);	
		dibujaLinea(3,2);
		console.log("primero")
	}
	
	else if(Z[0][3]>0 && (Z[0][3] > Z[0][15])){
		dibujaLinea(1, 2);
		dibujaLinea(3, 2);		
		dibujaLinea(2, 2);
		console.log("segundo")
	}
	
	else if(Z[0][12]>0 && (Z[0][12] > Z[0][0])){
		dibujaLinea(3, 2);
		dibujaLinea(1, 2);
		dibujaLinea(4, 2);
    	console.log("terc")
	}
 
	else //if (Z[0][15]>0 && (Z[0][15] > Z[0][12]))
	{
    	dibujaLinea(2, 2);			
    	dibujaLinea(4, 2);			
    	dibujaLinea(1, 2);
    	console.log("cuart")
   	}
 
	
		
	dibujaCara(0);

	mueveCaraADA();
	
	dibujaLogo();
			
	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("AD");
		mueveCaraAD();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}	
	
	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);
		
		
}


function mueveCaraAI(){

	if(regreso==1)
		theta=(-1)*Math.PI/2
	else
		theta=Math.PI/piDiv   //Angulo de rotación

	//Rotación en Y
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			if((j>=1 && i>=12) || (j==5 && i<=11)){
				continue		
			}
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			X[j][i] = x*Math.cos(theta) + z*Math.sin(theta);
			Y[j][i] = y;
			Z[j][i] = z*Math.cos(theta) - x*Math.sin(theta);
		}
	}
	
	if(regreso != 1){
	
		for(i=0; i <= tamanoArregloLogo; i++){

			var xLogoCanvas = vxLogo[i]
			var zLogoCanvas = vyLogo[i]

			vxLogo[i] = xLogoCanvas*Math.cos(theta) + zLogoCanvas*Math.sin(theta);
			vyLogo[i] = zLogoCanvas*Math.cos(theta) - xLogoCanvas*Math.sin(theta);  //tomo la y como z por que esta pegado a la cara A acostada
	
			
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d

	proyeccion();
		

	///******Dibuja*****
	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	dibujaCara(1);
	dibujaCara(4);

	///Dibuja el orificio del cubo
	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[1][12],vY[1][12]);
	ctx.lineTo(vX[2][12],vY[2][12]);
	ctx.lineTo(vX[3][12],vY[3][12]);
	ctx.lineTo(vX[4][12],vY[4][12]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	///Dibuja colocados de acuerdo para que no se vea lo de atrás
			
	if(Z[0][0]>0 && (Z[0][0] > Z[0][3])){
		dibujaLinea(2,2);
		dibujaLinea(4,2);	
		dibujaLinea(3,2);
		console.log("primero")
	}
	
	else if(Z[0][3]>0 && (Z[0][3] > Z[0][15])){
		dibujaLinea(1, 2);
		dibujaLinea(3, 2);		
		dibujaLinea(2, 2);
		console.log("segundo")
	}
	
	else if(Z[0][12]>0 && (Z[0][12] > Z[0][0])){
		dibujaLinea(3, 2);
		dibujaLinea(1, 2);
		dibujaLinea(4, 2);
    	console.log("terc")
	}
 
	else //if (Z[0][15]>0 && (Z[0][15] > Z[0][12]))
	{
    	dibujaLinea(2, 2);			
    	dibujaLinea(4, 2);			
    	dibujaLinea(1, 2);
    	console.log("cuart")
   	}
 
		
		
	dibujaCara(0);

	dibujaLogo();

	mueveCaraAIA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("AI");
		mueveCaraAI();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}		
	
	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);
	
		
}



function mueveCaraBD(){

	if(regreso==1)
		theta=(-1)*Math.PI/2
	else
		theta=Math.PI/(piDiv)   //Angulo de rotación



	//Rotación en Z
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==2){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==4){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==0 && i>=24) || (j==1) || (j==5 && i<=11) || (j==2 && (modulo6==0 || modulo6p==0)) || (j==4 && (modulo6j4==0 || modulo6j4p==0))){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z;
			X[j][i] = x*Math.cos(theta) - y*Math.sin(theta);
			Y[j][i] = y*Math.cos(theta) + x*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d

	proyeccion();
	
	///Dibuja
	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	dibujaCara(0);
	dibujaCara(4);

	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][18],vY[0][18]);
	ctx.lineTo(vX[0][23],vY[0][23]);
	ctx.lineTo(vX[2][32],vY[2][32]);
	ctx.lineTo(vX[4][33],vY[4][33]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	dibujaLogo();
	
    dibujaLinea(0, 8);
	//dibujaLinea(2, 4);			
    dibujaLinea(5, 2);
    dibujaLinea(4, 6);			
		
		
	dibujaCara(1);

	mueveCaraBDA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("BD");
		mueveCaraBD();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}	

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);

		
}



function mueveCaraBI(){

	if(regreso==1)
		theta=Math.PI/2
	else
		theta=(-1)*Math.PI/piDiv   //Angulo de rotación

	
	//Rotación en Z
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==2){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==4){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==0 && i>=24) || (j==1) || (j==5 && i<=11) || (j==2 && (modulo6==0 || modulo6p==0)) || (j==4 && (modulo6j4==0 || modulo6j4p==0))){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z;
			X[j][i] = x*Math.cos(theta) - y*Math.sin(theta);
			Y[j][i] = y*Math.cos(theta) + x*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d

	proyeccion();
	
	///Dibuja
	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	dibujaCara(0);
	dibujaCara(4);

	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][18],vY[0][18]);
	ctx.lineTo(vX[0][23],vY[0][23]);
	ctx.lineTo(vX[2][32],vY[2][32]);
	ctx.lineTo(vX[4][33],vY[4][33]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	dibujaLogo()

    dibujaLinea(5, 2);
	dibujaLinea(2, 4);			
    dibujaLinea(4, 6);			
    dibujaLinea(0, 8);
		
		
	dibujaCara(1);
	
	mueveCaraBIA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("BI");
		mueveCaraBI();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}	

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);
		
}



function mueveCaraCD(){

	if(regreso==1)
		theta=(-1)*Math.PI/2
	else
		theta=Math.PI/(piDiv)   //Angulo de rotación


	//Rotación en X
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==3){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==0 || j==1 || j==5){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==0 && (modulo6j4==0 || modulo6j4p==0)) || (j==2) || (j==1 &&  (modulo6j4==0 || modulo6j4p==0)) || (j==3 && (modulo6==0 || modulo6p==0)) || (j==5 && (modulo6j4==0 || modulo6j4p==0))){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z*Math.cos(theta) + y*Math.sin(theta);
			X[j][i] = x;
			Y[j][i] = y*Math.cos(theta) - z*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d
	
	proyeccion();
	
		
	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
    dibujaLinea(5, 6);			
	dibujaLinea(0, 6);
	dibujaLinea(1, 6);			
    //dibujaLinea(3, 4);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][4],vY[0][4]);
	ctx.lineTo(vX[0][34],vY[0][34]);
	ctx.lineTo(vX[5][4],vY[5][4]);
	ctx.lineTo(vX[5][34],vY[5][34]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	dibujaLinea(0, 52);
	dibujaLinea(0, 4);	
	
	dibujaLogo();
			
    dibujaLinea(1, 52);			
    dibujaLinea(1, 4);


	dibujaCara(4);

	mueveCaraCDA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("CD");
		mueveCaraCD();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);

		
}



function mueveCaraCI(){

	if(regreso==1)
		theta=Math.PI/2
	else
		theta=(-1)*Math.PI/(piDiv)   //Angulo de rotación


	//Rotación en X
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==3){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==0 || j==1 || j==5){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==0 && (modulo6j4==0 || modulo6j4p==0)) || (j==2) || (j==1 &&  (modulo6j4==0 || modulo6j4p==0)) || (j==3 && (modulo6==0 || modulo6p==0)) || (j==5 && (modulo6j4==0 || modulo6j4p==0))){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z*Math.cos(theta) + y*Math.sin(theta);
			X[j][i] = x;
			Y[j][i] = y*Math.cos(theta) - z*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d
	
	proyeccion();
	
		
	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
    dibujaLinea(3, 4);
    //dibujaLinea(5, 6);			
	dibujaLinea(1, 6);			
	dibujaLinea(0, 6);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][4],vY[0][4]);
	ctx.lineTo(vX[0][34],vY[0][34]);
	ctx.lineTo(vX[5][4],vY[5][4]);
	ctx.lineTo(vX[5][34],vY[5][34]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	dibujaLinea(0, 52);
	dibujaLinea(0, 4);	

	dibujaLogo();
		
    dibujaLinea(1, 52);			
    dibujaLinea(1, 4);


	dibujaCara(4);

	mueveCaraCIA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("CI");
		mueveCaraCI();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);

		
}




function mueveCaraDD(){

	if(regreso==1)
		theta=Math.PI/2
	else
		theta=(-1)*Math.PI/(piDiv)   //Angulo de rotación



	//Rotación en Z
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==4){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==2){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==3) || (j==0 && i<=11) || (j==2 &&  (modulo6j4==0 || modulo6j4p==0)) || (j==4 && (modulo6==0 || modulo6p==0)) || (j==5 && i>=24)){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z;
			X[j][i] = x*Math.cos(theta) - y*Math.sin(theta);
			Y[j][i] = y*Math.cos(theta) + x*Math.sin(theta);


			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d
	
	proyeccion();

		
	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
	dibujaLinea(2, 6);			
    dibujaLinea(4, 4);			
    //dibujaLinea(5, 8);
	dibujaLinea(0, 2);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][6],vY[0][6]);
	ctx.lineTo(vX[0][11],vY[0][11]);
	ctx.lineTo(vX[5][29],vY[5][29]);
	ctx.lineTo(vX[5][24],vY[5][24]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	dibujaLinea(0, 54);
	dibujaLinea(0, 8);	

	dibujaLogo();
		
    dibujaLinea(4, 52);			
    dibujaLinea(4, 6);


	dibujaCara(1);

	mueveCaraDDA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("DD");
		mueveCaraDD();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);

		
}



function mueveCaraDI(){

	if(regreso==1)
		theta=(-1)*Math.PI/2
	else
		theta=Math.PI/(piDiv)   //Angulo de rotación



	//Rotación en Z
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==4){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==2){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==3) || (j==0 && i<=11) || (j==2 &&  (modulo6j4==0 || modulo6j4p==0)) || (j==4 && (modulo6==0 || modulo6p==0)) || (j==5 && i>=24)){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z;
			X[j][i] = x*Math.cos(theta) - y*Math.sin(theta);
			Y[j][i] = y*Math.cos(theta) + x*Math.sin(theta);


			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d
	
	proyeccion();

		
	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
	//dibujaLinea(2, 6);			
    dibujaLinea(5, 8);
	dibujaLinea(0, 2);
    dibujaLinea(4, 4);			


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][6],vY[0][6]);
	ctx.lineTo(vX[0][11],vY[0][11]);
	ctx.lineTo(vX[5][29],vY[5][29]);
	ctx.lineTo(vX[5][24],vY[5][24]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	dibujaLinea(0, 54);
	dibujaLinea(0, 8);	

	dibujaLogo();
		
    dibujaLinea(4, 52);			
    dibujaLinea(4, 6);


	dibujaCara(1);

	mueveCaraDIA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("DI");
		mueveCaraDI();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);

		
}


function mueveCaraED(){

	if(regreso==1)
		theta=Math.PI/2
	else
		theta=(-1)*Math.PI/(piDiv)   //Angulo de rotación

	//Rotación en X
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==0 || j==1 || j==5){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==3){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==4) || (j==0 && (modulo6==0 || modulo6p==0)) || (j==1 &&  (modulo6==0 || modulo6p==0)) || (j==5 && (modulo6==0 || modulo6p==0)) || (j==3 && (modulo6j4==0 || modulo6j4p==0))){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z*Math.cos(theta) + y*Math.sin(theta);
			X[j][i] = x;
			Y[j][i] = y*Math.cos(theta) - z*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d
	
	proyeccion();
		

	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
	dibujaLinea(1, 6);
	dibujaLinea(1, 52);			
    dibujaLinea(0, 6);
    dibujaLinea(0, 52);	
	
	dibujaLogo();


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][2],vY[0][2]);
	ctx.lineTo(vX[0][32],vY[0][32]);
	ctx.lineTo(vX[5][2],vY[5][2]);
	ctx.lineTo(vX[5][32],vY[5][32]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
    //dibujaLinea(5, 4);			
    dibujaLinea(3, 6);
	dibujaLinea(1, 4);			
	dibujaLinea(0, 4);


	dibujaCara(4);

	mueveCaraEDA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("ED");
		mueveCaraED();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}	

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);


		
}



function mueveCaraEI(){

	if(regreso==1)
		theta=(-1)*Math.PI/2
	else
		theta=Math.PI/(piDiv)   //Angulo de rotación

	//Rotación en X
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			modulo6=1;
			modulo6p=1;
			modulo6j4=1;
			modulo6j4p=1;

			
			if(j==0 || j==1 || j==5){
				modulo6=i%6;
				modulo6p=(i-1)%6;
			}
			else if(j==3){
				modulo6j4=(i-4)%6;
				modulo6j4p=(i-5)%6;		
			}

			if((j==4) || (j==0 && (modulo6==0 || modulo6p==0)) || (j==1 &&  (modulo6==0 || modulo6p==0)) || (j==5 && (modulo6==0 || modulo6p==0)) || (j==3 && (modulo6j4==0 || modulo6j4p==0))){
		
			var x=X[j][i];
			var y=Y[j][i];
			var z=Z[j][i];

			Z[j][i] = z*Math.cos(theta) + y*Math.sin(theta);
			X[j][i] = x;
			Y[j][i] = y*Math.cos(theta) - z*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d
	
	proyeccion();
		

	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
	dibujaLinea(1, 6);
	dibujaLinea(1, 52);			
    dibujaLinea(0, 6);
    dibujaLinea(0, 52);		
	
	dibujaLogo();


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[0][2],vY[0][2]);
	ctx.lineTo(vX[0][32],vY[0][32]);
	ctx.lineTo(vX[5][2],vY[5][2]);
	ctx.lineTo(vX[5][32],vY[5][32]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
    dibujaLinea(5, 4);			
    //dibujaLinea(3, 6);
	dibujaLinea(0, 4);
	dibujaLinea(1, 4);			


	dibujaCara(4);

	mueveCaraEIA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("EI");
		mueveCaraEI();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}	

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);


		
}



function mueveCaraFD(){
	
	if(regreso==1)
		theta=(-1)*Math.PI/2
	else
		theta=Math.PI/(piDiv)   //Angulo de rotación


	//Rotación en Y
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			if((j==5) || (j==1 && i>=24) || (j==2 && i>=24) || (j==3 && i>=24) || (j==4 &&  i>=24)){
		
				var x=X[j][i];
				var y=Y[j][i];
				var z=Z[j][i];

				X[j][i] = x*Math.cos(theta) + z*Math.sin(theta);
				Y[j][i] = y;
				Z[j][i] = z*Math.cos(theta) - x*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d

	proyeccion();
	
	
	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
	//dibujaLinea(2, 8);			
    dibujaLinea(3, 8);
	dibujaLinea(1, 8);
    dibujaLinea(4, 8);			


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[1][24],vY[1][24]);
	ctx.lineTo(vX[2][24],vY[2][24]);
	ctx.lineTo(vX[3][24],vY[3][24]);
	ctx.lineTo(vX[4][24],vY[4][24]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	dibujaLinea(1, 2);
	dibujaLinea(1, 54);			
    dibujaLinea(4, 2);			
    dibujaLinea(4, 54);


	dibujaCara(0);

	dibujaLogo();


	mueveCaraFDA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("FD");
		mueveCaraFD();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}	

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);

		
}



function mueveCaraFI(){
	
	if(regreso==1)
		theta=Math.PI/2
	else
		theta=(-1)*Math.PI/(piDiv)   //Angulo de rotación


	//Rotación en Y
	//Solamente modifica los vectores participantes en el movimiento, solo rota esos
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			if((j==5) || (j==1 && i>=24) || (j==2 && i>=24) || (j==3 && i>=24) || (j==4 &&  i>=24)){
		
				var x=X[j][i];
				var y=Y[j][i];
				var z=Z[j][i];

				X[j][i] = x*Math.cos(theta) + z*Math.sin(theta);
				Y[j][i] = y;
				Z[j][i] = z*Math.cos(theta) - x*Math.sin(theta);

			}
		}
	}


	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d

	proyeccion();
	
	
	///Dibuja

	ctx.clearRect(-1*myCanvas.width/2, -1*myCanvas.height/2, myCanvas.width, myCanvas.height);

	
	dibujaLinea(2, 8);			
   // dibujaLinea(3, 8);
    dibujaLinea(4, 8);			
	dibujaLinea(1, 8);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[1][24],vY[1][24]);
	ctx.lineTo(vX[2][24],vY[2][24]);
	ctx.lineTo(vX[3][24],vY[3][24]);
	ctx.lineTo(vX[4][24],vY[4][24]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	dibujaLinea(1, 2);
	dibujaLinea(1, 54);			
    dibujaLinea(4, 2);			
    dibujaLinea(4, 54);


	dibujaCara(0);

	dibujaLogo();


	mueveCaraFIA();

	count++;

	if(count == piDiv/2){
		regreso=1;		
		cambiaColor("FI");
		mueveCaraFI();
		clearInterval(reproduccion);
		numMC++
		cubo()
	}	

	ctx.fillStyle = anuncioImagen.colorTexto;
	ctx.font = "40px Arial";
	ctx.fillText("Vista Frontal-Superior                       Vista Posterior-Inferior", anuncioImagen.x, anuncioImagen.y);

		
}


function proyeccion(){

	//Proyecta los las coordenadas de X, Y Z 3d a las direccion vX y vY en 2d

	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){
			vX[j][i] = X[j][i]*cosAngle + Z[j][i]*cosAngle - 300;
			vY[j][i] = Y[j][i] + (Z[j][i]*sinAngle) - (sinAngle*X[j][i]);	
		}
	}	
	
	for(j=0; j<= tamanoArregloLogo; j++){
		logoX[j] = vxLogo[j]*cosAngle + vyLogo[j]*cosAngle - 300;
		logoY[j] = -90 + (vyLogo[j]*sinAngle) - (sinAngle*vxLogo[j]);	
	
	}
		
}


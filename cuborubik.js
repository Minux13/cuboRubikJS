var color = {
		
	white	:"#FFFFFF",
	red		:"#D9001B",
	blue	:"#2600BE",
	orange	:"#FE7700",
	yellow	:"#FFFC02",
	green	:"#008300"	
}


var cubo2D = {
		
	tamanoCompletoX : 600,							//Tamaño que toma horizontalmente el dibujo, es un multiplo de doce por que tiene 12 piezas	
	tamanoPieza		: 720/12,
	linea			: 1,
	colorLinea		: "black",
	caraPixel		: 3*720/12,
	logo			: new Image()
}

cubo2D.logo.src = "minux.png";

var seleccionColor = {
		
	lineaSuperior	 	: 2*cubo2D.tamanoPieza,		//Esta en la segunda línea del dibujo del cubo, es en pixeles en y
	lineaIzquierda		: 14*cubo2D.tamanoPieza,	//      es en pixeles en x
	ancho				: cubo2D.tamanoPieza,
	colores				: [color.white, color.blue, color.red, color.green, color.orange, color.yellow],
	clickeoEstaSeccion	: 0
}

var pantalla = {
		
	centrarX : 10,		
	centrarY : 10
}

var cursor = {
			
	color 		: "white",
	intervalo	: 80,
	cx			: 0,
	cy			: 0,
	clickX		: 0,
	clickY		: 0
}


var entradaUsuario = {
		
	colores : []		
		
}


//Creo el arreglo con los colores y los relleno de blanco
for(var caraNum = 0; caraNum <= 5; caraNum++ ){
	
	entradaUsuario.colores.push([]);
	for(var elementoNum = 0; elementoNum <= 10; elementoNum++){		//Relleno un elemento de mas
		
		entradaUsuario.colores[caraNum].push(color.white);
	}
}



function entrada(){

	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');

	ctx.translate(pantalla.centrarX, pantalla.centrarY);
	
	pintaElementosCubo();
	dibujaContornoCaras();
	dibujaHorizontales();
	dibujaVerticales();

	dibujaSeleccionColores();

	window.canvas.addEventListener("click", clickear);

}



function dibujaHorizontales(){


	for(var i = 0; i <= 9; i ++){  //Líneas que hay en el dibujo
			 	
		if(i==0 || i==1 || i==2 || i==7 || i==8 || i==9){
		
			ctx.beginPath();
			ctx.lineWidth = cubo2D.linea;
			ctx.strokeStyle = cubo2D.colorLinea;
			ctx.moveTo( 3*(cubo2D.tamanoPieza), (i*cubo2D.tamanoPieza));
			ctx.lineTo( 6*(cubo2D.tamanoPieza), (i*cubo2D.tamanoPieza));
			ctx.closePath();
			ctx.stroke();
		}

		else{
		
			ctx.beginPath();
			ctx.lineWidth = cubo2D.linea;
			ctx.strokeStyle = cubo2D.colorLinea;
			ctx.moveTo( 0, (i*cubo2D.tamanoPieza));
			ctx.lineTo( 12*(cubo2D.tamanoPieza), (i*cubo2D.tamanoPieza));
			ctx.closePath();
			ctx.stroke();
		
		}
	}
}


function dibujaVerticales(){


	for(var i = 0; i <= 12; i ++){  //Líneas que hay en el dibujo
			 	
		if(i==3 || i==4 || i==5 || i==6){
		
			ctx.beginPath();
			ctx.lineWidth = cubo2D.linea;
			ctx.strokeStyle = cubo2D.colorLinea;
			ctx.moveTo( i*(cubo2D.tamanoPieza), 0);
			ctx.lineTo( i*(cubo2D.tamanoPieza), (9*cubo2D.tamanoPieza));
			ctx.closePath();
			ctx.stroke();
		}

		else{
		
			ctx.beginPath();
			ctx.lineWidth = cubo2D.linea;
			ctx.strokeStyle = cubo2D.colorLinea;
			ctx.moveTo( i*(cubo2D.tamanoPieza), 3*(cubo2D.tamanoPieza));
			ctx.lineTo( i*(cubo2D.tamanoPieza), 6*(cubo2D.tamanoPieza));
			ctx.closePath();
			ctx.stroke();
		
		}
	}
}

function dibujaContornoCaras(){
		
	for(var i = 0; i <= 3; i ++){  //Líneas que hay en el dibujo
			 	
		ctx.beginPath();
		ctx.lineWidth = 5
		ctx.strokeStyle = cubo2D.colorLinea;
		ctx.strokeRect( i*(cubo2D.caraPixel), cubo2D.caraPixel, cubo2D.caraPixel, cubo2D.caraPixel);
		ctx.closePath();

	}
	
	for(var i = 0; i <= 2; i ++){  //Líneas que hay en el dibujo
			 	
		ctx.beginPath();
		ctx.lineWidth = 5
		ctx.strokeStyle = cubo2D.colorLinea;
		ctx.strokeRect( (cubo2D.caraPixel), i*cubo2D.caraPixel, cubo2D.caraPixel, cubo2D.caraPixel);
		ctx.closePath();

	}
	
		
}


function pintaElementosCubo(){
		
	//Pinta elementos cara A
	var x1=3;   //donde comienza la esquina del primer elemento de la cara
	var y1=0;
	for(var elemento = 1; elemento <=9; elemento++){
		
		ctx.fillStyle = entradaUsuario.colores[0][elemento];
		ctx.fillRect( x1*cubo2D.tamanoPieza, y1*cubo2D.tamanoPieza, cubo2D.tamanoPieza, cubo2D.tamanoPieza);

		x1++;
		if(elemento==3 || elemento==6){
			x1=3;
			y1++;		
		}
	}


	//Pinta elementos cara B
	x1=3;   //donde comienza la esquina del primer elemento de la cara
	y1=3;
	for(var elemento = 1; elemento <=9; elemento++){
		
		ctx.fillStyle = entradaUsuario.colores[1][elemento];
		ctx.fillRect( x1*cubo2D.tamanoPieza, y1*cubo2D.tamanoPieza, cubo2D.tamanoPieza, cubo2D.tamanoPieza);

		x1++;
		if(elemento==3 || elemento==6){
			x1=3;
			y1++;		
		}
	}


	//Pinta elementos cara C
	x1=6;   //donde comienza la esquina del primer elemento de la cara
	y1=3;
	for(var elemento = 1; elemento <=9; elemento++){
		
		ctx.fillStyle = entradaUsuario.colores[2][elemento];
		ctx.fillRect( x1*cubo2D.tamanoPieza, y1*cubo2D.tamanoPieza, cubo2D.tamanoPieza, cubo2D.tamanoPieza);

		x1++;
		if(elemento==3 || elemento==6){
			x1=6;		//para las caras C D y E cambio la x a donde empieza
			y1++;		
		}
	}


	//Pinta elementos cara D
	x1=9;   //donde comienza la esquina del primer elemento de la cara
	y1=3;
	for(var elemento = 1; elemento <=9; elemento++){
		
		ctx.fillStyle = entradaUsuario.colores[3][elemento];
		ctx.fillRect( x1*cubo2D.tamanoPieza, y1*cubo2D.tamanoPieza, cubo2D.tamanoPieza, cubo2D.tamanoPieza);

		x1++;
		if(elemento==3 || elemento==6){
			x1=9;
			y1++;		
		}
	}



	//Pinta elementos cara E
	x1=0;   //donde comienza la esquina del primer elemento de la cara
	y1=3;
	for(elemento = 1; elemento <=9; elemento++){
	
		ctx.fillStyle = entradaUsuario.colores[4][elemento];
		ctx.fillRect( x1*cubo2D.tamanoPieza, y1*cubo2D.tamanoPieza, cubo2D.tamanoPieza, cubo2D.tamanoPieza);

		x1++;
		if(elemento==3 || elemento==6){
			x1=0;
			y1++;		
		}
	}


	//Pinta elementos cara F
	x1=3;   //donde comienza la esquina del primer elemento de la cara
	y1=6;
	for(var elemento = 1; elemento <=9; elemento++){
		
		ctx.fillStyle = entradaUsuario.colores[5][elemento];
		ctx.fillRect( x1*cubo2D.tamanoPieza, y1*cubo2D.tamanoPieza, cubo2D.tamanoPieza, cubo2D.tamanoPieza);

		x1++;
		if(elemento==3 || elemento==6){
			x1=3;
			y1++;		
		}
	}
		
		
}

function dibujaSeleccionColores(){		///Esta ubicado a dos piezas a la derecha y para abajo

	
	for(var i = 0; i <= 5; i++){  //Líneas verticales, la i representa el numero de distancia de linea en el cubo, dos líneas verticales
						 	
		ctx.beginPath();
		ctx.lineWidth = 3
		ctx.fillStyle = seleccionColor.colores[i];
		ctx.strokeStyle = cubo2D.colorLinea;
		ctx.strokeRect( seleccionColor.lineaIzquierda, i*(seleccionColor.ancho) + seleccionColor.lineaSuperior, seleccionColor.ancho, seleccionColor.ancho);
		ctx.fillRect( seleccionColor.lineaIzquierda, i*(seleccionColor.ancho) + seleccionColor.lineaSuperior, seleccionColor.ancho, seleccionColor.ancho);
		
		ctx.closePath();
	}
}



function clickear(ev){

	if(ev.offsetX == undefined || ev.pageX == undefined){ // para firefox
   		 alert("Tu navegador no reproduce este contenido, puedes usar Chrome para vizualizarlo"); 
   	}	

    cursor.clickX = ev.offsetX - pantalla.centrarX;
    cursor.clickY = ev.offsetY - pantalla.centrarY;


	//Obtiene las coordenadas por donde pasa el puntero
	document.getElementById("myCanvas").addEventListener("mousemove", function(event) {
    myFunction(event);
	});


	//Si el click fue dentro de la seccion seleccionar color
	if(cursor.clickX >= seleccionColor.lineaIzquierda && cursor.clickX <= (seleccionColor.lineaIzquierda + seleccionColor.ancho)){			
			
		if(cursor.clickY >= (seleccionColor.lineaSuperior) && cursor.clickY <= (seleccionColor.lineaSuperior + seleccionColor.ancho)){
			seleccionColor.clickeoEstaSeccion = 1;
			cursor.color = seleccionColor.colores[0];
			console.log("Primero");
		}
		else if(cursor.clickY >= (seleccionColor.lineaSuperior + seleccionColor.ancho) && cursor.clickY <= (seleccionColor.lineaSuperior + (2*seleccionColor.ancho))){
			
			seleccionColor.clickeoEstaSeccion = 1;
			cursor.color = seleccionColor.colores[1];
			console.log("Segundo");

		}
		else if(cursor.clickY >= (seleccionColor.lineaSuperior + (2*seleccionColor.ancho)) && cursor.clickY <= (seleccionColor.lineaSuperior + (3*seleccionColor.ancho))){

			seleccionColor.clickeoEstaSeccion = 1;
			cursor.color = seleccionColor.colores[2];
			console.log("Tercero");
				
		}
		else if(cursor.clickY >= (seleccionColor.lineaSuperior + (3*seleccionColor.ancho)) && cursor.clickY <= (seleccionColor.lineaSuperior + (4*seleccionColor.ancho))){

			seleccionColor.clickeoEstaSeccion = 1;
			cursor.color = seleccionColor.colores[3];
			console.log("Cuarto");

		}
		else if(cursor.clickY >= (seleccionColor.lineaSuperior + (4*seleccionColor.ancho)) && cursor.clickY <= (seleccionColor.lineaSuperior + (5*seleccionColor.ancho))){
		
			seleccionColor.clickeoEstaSeccion = 1;
			cursor.color = seleccionColor.colores[4];
			console.log("Quitno");

		}
		else if(cursor.clickY >= (seleccionColor.lineaSuperior + (5*seleccionColor.ancho)) && cursor.clickY <= (seleccionColor.lineaSuperior + (6*seleccionColor.ancho))){
			
			seleccionColor.clickeoEstaSeccion = 1;
			cursor.color = seleccionColor.colores[5];
			console.log("Sexto");
				
		}
		
	}

	//O si el click esta dentro del cubo2D
	//Si clickeo en un elemento del cubo2D, lo pinta cambiando el color del arreglo entradaUsuario.colores, verifico de izquierda hacia la derecha eso es en X
	//Verifica primera linea vertical de elementos
	else if(cursor.clickX >= 0 && cursor.clickX <= cubo2D.tamanoPieza){
		//E1	
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][1]=cursor.color;
		}
		//E4
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][4]=cursor.color;
		}
		//E7
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][7]=cursor.color;
		}	
	}
	
	//Segunda línea vertical de elementos
	else if(cursor.clickX >= cubo2D.tamanoPieza && cursor.clickX <= (2*cubo2D.tamanoPieza)){
		//E2
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][2]=cursor.color;
		}
		//E5
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][5]=cursor.color;
		}
		//E8
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][8]=cursor.color;
		}	
	}

	//Tercer línea vertical de elementos
	else if(cursor.clickX >= (2*cubo2D.tamanoPieza) && cursor.clickX <= (3*cubo2D.tamanoPieza)){
		//E3
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][3]=cursor.color;
		}
		//E6
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][6]=cursor.color;
		}
		//E9
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[4][9]=cursor.color;
		}	
	}

	//Cuarta línea vertical de elementos
	else if(cursor.clickX >= (3*cubo2D.tamanoPieza) && cursor.clickX <= (4*cubo2D.tamanoPieza)){
		//A1
		if(cursor.clickY >= 0 && cursor.clickY <= (cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][1]=cursor.color;
		}
		//A4
		else if(cursor.clickY >= (cubo2D.tamanoPieza) && cursor.clickY <= (2*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][4]=cursor.color;
		}
		//A7
		else if(cursor.clickY >= (2*cubo2D.tamanoPieza) && cursor.clickY <= (3*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][7]=cursor.color;
		}
		
		
		//B1
		else if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][1]=cursor.color;
		}
		//B4
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][4]=cursor.color;
		}
		//B7
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][7]=cursor.color;
		}
		
		
		//F1
		else if(cursor.clickY >= (6*cubo2D.tamanoPieza) && cursor.clickY <= (7*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][1]=cursor.color;
		}
		//F4
		else if(cursor.clickY >= (7*cubo2D.tamanoPieza) && cursor.clickY <= (8*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][4]=cursor.color;
		}
		//F7
		else if(cursor.clickY >= (8*cubo2D.tamanoPieza) && cursor.clickY <= (9*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][7]=cursor.color;
		}
	}

	//Quinta línea vertical de elementos
	else if(cursor.clickX >= (4*cubo2D.tamanoPieza) && cursor.clickX <= (5*cubo2D.tamanoPieza)){
		//A2
		if(cursor.clickY >= 0 && cursor.clickY <= (cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][2]=cursor.color;
		}
		//A5
		else if(cursor.clickY >= (cubo2D.tamanoPieza) && cursor.clickY <= (2*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][5]=cursor.color;
		}

		//A8
		else if(cursor.clickY >= (2*cubo2D.tamanoPieza) && cursor.clickY <= (3*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][8]=cursor.color;
		}


		//B2
		else if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][2]=cursor.color;
		}
		//B5
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][5]=cursor.color;
		}
		//B8
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][8]=cursor.color;
		}
		
		
		//F2
		else if(cursor.clickY >= (6*cubo2D.tamanoPieza) && cursor.clickY <= (7*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][2]=cursor.color;
		}
		//F5
		else if(cursor.clickY >= (7*cubo2D.tamanoPieza) && cursor.clickY <= (8*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][5]=cursor.color;
		}
		//F8
		else if(cursor.clickY >= (8*cubo2D.tamanoPieza) && cursor.clickY <= (9*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][8]=cursor.color;
		}
	}


	//Sexta línea vertical de elementos
	else if(cursor.clickX >= (5*cubo2D.tamanoPieza) && cursor.clickX <= (6*cubo2D.tamanoPieza)){
		//A3
		if(cursor.clickY >= 0 && cursor.clickY <= (cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][3]=cursor.color;
		}
		//A6
		else if(cursor.clickY >= (cubo2D.tamanoPieza) && cursor.clickY <= (2*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][6]=cursor.color;
		}

		//A9
		else if(cursor.clickY >= (2*cubo2D.tamanoPieza) && cursor.clickY <= (3*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[0][9]=cursor.color;
		}


		//B3
		else if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][3]=cursor.color;
		}
		//B6
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][6]=cursor.color;
		}
		//B9
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[1][9]=cursor.color;
		}
		
		
		//F3
		else if(cursor.clickY >= (6*cubo2D.tamanoPieza) && cursor.clickY <= (7*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][3]=cursor.color;
		}
		//F6
		else if(cursor.clickY >= (7*cubo2D.tamanoPieza) && cursor.clickY <= (8*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][6]=cursor.color;
		}
		//F9
		else if(cursor.clickY >= (8*cubo2D.tamanoPieza) && cursor.clickY <= (9*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[5][9]=cursor.color;
		}
	}


	//Septima línea vertical de elementos
	else if(cursor.clickX >= (6*cubo2D.tamanoPieza) && cursor.clickX <= (7*cubo2D.tamanoPieza)){
		//C1
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][1]=cursor.color;
		}
		//C4
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][4]=cursor.color;
		}
		//C7
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][7]=cursor.color;
		}	
	}


	//Octava línea vertical de elementos
	else if(cursor.clickX >= (7*cubo2D.tamanoPieza) && cursor.clickX <= (8*cubo2D.tamanoPieza)){
		//C2
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][2]=cursor.color;
		}
		//C5
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][5]=cursor.color;
		}
		//C8
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][8]=cursor.color;
		}	
	}


	//Novena línea vertical de elementos
	else if(cursor.clickX >= (8*cubo2D.tamanoPieza) && cursor.clickX <= (9*cubo2D.tamanoPieza)){
		//C3
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][3]=cursor.color;
		}
		//C6
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][6]=cursor.color;
		}
		//C9
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[2][9]=cursor.color;
		}	
	}


	//Decima línea vertical de elementos
	else if(cursor.clickX >= (9*cubo2D.tamanoPieza) && cursor.clickX <= (10*cubo2D.tamanoPieza)){
		//D1
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][1]=cursor.color;
		}
		//D4
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][4]=cursor.color;
		}
		//D7
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][7]=cursor.color;
		}	
	}


	//Onceaba línea vertical de elementos
	else if(cursor.clickX >= (10*cubo2D.tamanoPieza) && cursor.clickX <= (11*cubo2D.tamanoPieza)){
		//D2
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][2]=cursor.color;
		}
		//D5
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][5]=cursor.color;
		}
		//D8
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][8]=cursor.color;
		}	
	}


	//Doceaba línea vertical de elementos
	else if(cursor.clickX >= (11*cubo2D.tamanoPieza) && cursor.clickX <= (12*cubo2D.tamanoPieza)){
		//D3
		if(cursor.clickY >= (3*cubo2D.tamanoPieza) && cursor.clickY <= (4*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][3]=cursor.color;
		}
		//D6
		else if(cursor.clickY >= (4*cubo2D.tamanoPieza) && cursor.clickY <= (5*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][6]=cursor.color;
		}
		//D9
		else if(cursor.clickY >= (5*cubo2D.tamanoPieza) && cursor.clickY <= (6*cubo2D.tamanoPieza)){
			
			entradaUsuario.colores[3][9]=cursor.color;
		}	
	}


	setInterval(dibujaTodo, 200);
	
	
	
	console.log(cursor.clickX + "     " + cursor.clickY)

}

//Obtiene las coordenadas para dibujar el color que estara en el cursor
function myFunction(e) {
    cursor.cx = e.offsetX + 15;
    cursor.cy = e.offsetY + 15;	
}

function dibujaTodo(){

	ctx.clearRect(-100, -100, 1500, 1500);
	
	pintaElementosCubo();
	dibujaContornoCaras();
	dibujaHorizontales();
	dibujaVerticales();

	dibujaSeleccionColores();


	if(seleccionColor.clickeoEstaSeccion == 1){   //Si cleckeo la seccion de seleccion de colores dibuja el puntero del mouse
		ctx.beginPath();
		  ctx.fillStyle = "rgba(0,0,0, 0.4)";
		  ctx.arc(cursor.cx -30, cursor.cy-30, 9, 0, Math.PI * 2, true);
		  ctx.fill();
          ctx.closePath();

		ctx.beginPath();
		  ctx.fillStyle = cursor.color;
          ctx.arc(cursor.cx -30, cursor.cy-30, 7, 0, Math.PI * 2, true);
          ctx.closePath();
		 // ctx.stroke();
          ctx.fill();
	}

	ctx.drawImage(cubo2D.logo, 4*cubo2D.tamanoPieza+2, cubo2D.tamanoPieza+20, cubo2D.tamanoPieza-4, 11);

	
}


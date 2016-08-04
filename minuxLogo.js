var radioPixelLogo = 1.7;
var xLogo=0  //-330       //Donde empieza el trazado de las líneas verticales o donde empieza el arco de la m
var yLogo=0  //-93
var vxLogo=[];	   //Contine todos los vectores de las líneas verticales
var vyLogo=[];
var distanciaRepeticionLogo = 0.5;    //La separación de caada "pixel" de radioPixelLogo de radio

var colorMinuxLogo = "black" //ñ"#9292FC"

var anguloLogoMinux = 14;

///Use estos arreglos como v.. de vectores... para las direcciones ya proyectadas en el canvas use los que empiezan con v
logoX=[]
logoY=[]
var cantidadDeAD = 40;

var tamanoArregloLogo

var razonRadioRepeticiones = radioPixelLogo/distanciaRepeticionLogo   // esta es la distancia de un radio, recorre un radio y dibuja la longitud de tres radios


function coordenadasLogo(){

	//m
	for(jLogo=0; jLogo<3; jLogo++){
		for(iLogo=0; iLogo<= razonRadioRepeticiones*4; iLogo++){

			vxLogo.push(xLogo + (jLogo * radioPixelLogo * 4) - (17*radioPixelLogo));
			vyLogo.push(yLogo + (iLogo * distanciaRepeticionLogo) - (radioPixelLogo));
		}
	}	

	for(iLogo=0; iLogo<=anguloLogoMinux; iLogo++){
		vxLogo.push(Math.cos( iLogo * (-1) * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + (xLogo + 2*radioPixelLogo) - (17*radioPixelLogo))
		vyLogo.push(Math.sin( iLogo * (-1) * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + yLogo - (radioPixelLogo) )
		
	}

	for(iLogo=0; iLogo<=anguloLogoMinux; iLogo++){
		vxLogo.push(Math.cos( iLogo * (-1) * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + (xLogo + 6*radioPixelLogo) - (17*radioPixelLogo))
		vyLogo.push(Math.sin( iLogo * (-1) * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + yLogo - (radioPixelLogo) )
	}


	///i

	for(iLogo=0; iLogo <= razonRadioRepeticiones*6; iLogo++){
		vxLogo.push(xLogo + (2 * radioPixelLogo * 5) + (radioPixelLogo/2) - (17*radioPixelLogo));
		vyLogo.push(yLogo + (iLogo * distanciaRepeticionLogo) - radioPixelLogo*2 - (radioPixelLogo));			
	}


	//n
	for(jLogo=3; jLogo<5; jLogo++){
		for(iLogo=0; iLogo<= razonRadioRepeticiones*4; iLogo++){

			vxLogo.push(xLogo + (jLogo * radioPixelLogo * 4) + radioPixelLogo - (17*radioPixelLogo));
			vyLogo.push(yLogo + (iLogo * distanciaRepeticionLogo) - (radioPixelLogo));
		}
	}	

	for(iLogo=0; iLogo<=anguloLogoMinux; iLogo++){
		vxLogo.push(Math.cos( iLogo * (-1) * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + (xLogo + 15*radioPixelLogo) - (17*radioPixelLogo))
		vyLogo.push(Math.sin( iLogo * (-1) * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + yLogo  - (radioPixelLogo))
	}


	//u
	for(jLogo=4; jLogo<6; jLogo++){
		for(iLogo=0; iLogo<= razonRadioRepeticiones*4; iLogo++){

			vxLogo.push(xLogo + (jLogo * radioPixelLogo * 4) + 3.5*radioPixelLogo - (17*radioPixelLogo));
			vyLogo.push(yLogo + (iLogo * distanciaRepeticionLogo) - 2*radioPixelLogo - (radioPixelLogo));
		}
	}

	for(iLogo=0; iLogo<=anguloLogoMinux; iLogo++){
		vxLogo.push(Math.cos( iLogo * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + (xLogo + 21.5*radioPixelLogo) - (17*radioPixelLogo))
		vyLogo.push(Math.sin( iLogo * Math.PI/anguloLogoMinux ) * (2*radioPixelLogo) + yLogo + radioPixelLogo * 2  - (radioPixelLogo))
	}


	//x
	for(iLogo=0; iLogo<= razonRadioRepeticiones*6; iLogo++){
		vxLogo.push(xLogo  + (26 * radioPixelLogo) + (iLogo*distanciaRepeticionLogo) - (17*radioPixelLogo));
		vyLogo.push(yLogo-radioPixelLogo*2 + (iLogo*distanciaRepeticionLogo) - (radioPixelLogo));
	}

		
	for(iLogo=0; iLogo<= razonRadioRepeticiones*6; iLogo++){
		vxLogo.push(xLogo + (26 * radioPixelLogo) + (iLogo*distanciaRepeticionLogo) - (17*radioPixelLogo));
		vyLogo.push(yLogo+radioPixelLogo*4 - (iLogo*distanciaRepeticionLogo) - (radioPixelLogo));
	}


	//movimientosConjunto=["AD","AD","AD","AI","AI","AI","AI", "AD", "AI", "AD", "AD", "AD", "AD"];

	
	tamanoArregloLogo=vxLogo.length

	//	///Ubico 45º el logo para que quede en diagonal y quede mas grande dependiendo de cuantos movimientos de la cara A 


	for(i=0; i <= movimientosConjunto.length; i++){
		if(movimientosConjunto[i]=="AD")
			cantidadDeAD++

		else if(movimientosConjunto[i]=="AI")
			cantidadDeAD--
	}



	if(cantidadDeAD%4==0){
		anguloLogo = -1*Math.PI/4;
		//console.log("primeratatatatata")

	}
	else if((cantidadDeAD+1)%4==0){
		anguloLogo = -3*Math.PI/4;
	 	//console.log("segundaatatatata")

	}
	else if((cantidadDeAD+2)%4==0){
		anguloLogo = -5*Math.PI/4;
		//console.log("terceraaatatatata")

	}
	else{ 
		anguloLogo = -7*Math.PI/4;
		//console.log("cuartatatatata")
	}



	for(i=0; i <= tamanoArregloLogo; i++){

		var xLogoCanvas = vxLogo[i]
		var zLogoCanvas = vyLogo[i]

		vxLogo[i] = xLogoCanvas*Math.cos(anguloLogo) + zLogoCanvas*Math.sin(anguloLogo);
		vyLogo[i] = zLogoCanvas*Math.cos(anguloLogo) - xLogoCanvas*Math.sin(anguloLogo);  //tomo la y como z por que esta pegado a la cara A acostada
				
	}


	
	for(i=0; i<= tamanoArregloLogo; i++){
		logoX.push(0)
		logoY.push(0)
	}
}

function dibujaLogo(){


	for(iLogo=0; iLogo <= tamanoArregloLogo; iLogo++){
		
		ctx.beginPath();
		ctx.fillStyle = colorMinuxLogo;
    	ctx.arc(logoX[iLogo], logoY[iLogo], radioPixelLogo, 0, Math.PI * 2, true);
    	//ctx.arc(vxLogo[iLogo], vyLogo[iLogo], radioPixelLogo, 0, Math.PI * 2, true);
    	ctx.closePath();
    	ctx.fill();
	}
	
}

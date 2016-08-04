
function mueveCaraADA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}


	dibujaLinea(4, 2);
	dibujaLinea(2, 2);
	dibujaLinea(3, 2);
	
	///Dibuja el orificio del cubo
	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][11],vY[2][11]);
	ctx.lineTo(vX[3][11],vY[3][11]);
	ctx.lineTo(vX[4][11],vY[4][11]);
	ctx.lineTo(vX[1][11],vY[1][11]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	///Dibuja colocados de acuerdo para que no se vea lo de atrás
			
	 
	
	dibujaLinea(2,54);
	dibujaLinea(2,8);
	dibujaLinea(3,54);
	dibujaLinea(3,8);

		
	dibujaCara(5);

//9292FC
			
}


function mueveCaraAIA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}



	dibujaLinea(1, 2);
	dibujaLinea(3, 2);
	dibujaLinea(2, 2);
	
	///Dibuja el orificio del cubo
	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][11],vY[2][11]);
	ctx.lineTo(vX[3][11],vY[3][11]);
	ctx.lineTo(vX[4][11],vY[4][11]);
	ctx.lineTo(vX[1][11],vY[1][11]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	///Dibuja colocados de acuerdo para que no se vea lo de atrás
			
	 
	
	dibujaLinea(2,54);
	dibujaLinea(2,8);
	dibujaLinea(3,54);
	dibujaLinea(3,8);


	dibujaCara(5);
		
}



function mueveCaraBDA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

	
	dibujaLinea(0, 8);
	dibujaLinea(5, 2);
	dibujaLinea(2, 4);

	
	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][1],vY[2][1]);  //2 1
	ctx.lineTo(vX[4][4],vY[4][4]);
	ctx.lineTo(vX[5][6],vY[5][6]);
	ctx.lineTo(vX[5][11],vY[5][11]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();		
	
    dibujaLinea(2, 52);
	dibujaLinea(2, 6);			
    dibujaLinea(5, 54);
    dibujaLinea(5, 8);	
	
		
		
	dibujaCara(3);

}



function mueveCaraBIA(){

	
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

		
	dibujaLinea(4, 6);
	dibujaLinea(2, 4);
	dibujaLinea(5, 2);
	
	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][1],vY[2][1]);  //2 1
	ctx.lineTo(vX[4][4],vY[4][4]);
	ctx.lineTo(vX[5][6],vY[5][6]);
	ctx.lineTo(vX[5][11],vY[5][11]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();		

	
    dibujaLinea(2, 52);
	dibujaLinea(2, 6);			
    dibujaLinea(5, 54);
    dibujaLinea(5, 8);			
		
		
	dibujaCara(3);

		
}



function mueveCaraCDA(){

	
	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

	
    dibujaLinea(3, 52);			
	dibujaLinea(3, 6);
	dibujaLinea(5, 52);			
    dibujaLinea(5, 4);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[3][2],vY[3][2]);
	ctx.lineTo(vX[3][32],vY[3][32]);
	ctx.lineTo(vX[5][3],vY[5][3]);
	ctx.lineTo(vX[1][3],vY[1][3]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
	dibujaLinea(0, 6);			
	dibujaLinea(5, 6);
	dibujaLinea(3, 4);


	dibujaCara(2);

		
}



function mueveCaraCIA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

		
	dibujaLinea(3, 52);
	dibujaLinea(3, 6);			
    dibujaLinea(5, 52);			
    dibujaLinea(5, 4);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[3][2],vY[3][2]);
	ctx.lineTo(vX[3][32],vY[3][32]);
	ctx.lineTo(vX[5][3],vY[5][3]);
	ctx.lineTo(vX[1][3],vY[1][3]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

    dibujaLinea(3, 4);
    //dibujaLinea(5, 6);			
	dibujaLinea(1, 6);			
	dibujaLinea(5, 6);


	dibujaCara(2);

		
}




function mueveCaraDDA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}


	dibujaLinea(5, 54);
	dibujaLinea(5, 2);			
    dibujaLinea(2, 52);			
    dibujaLinea(2, 4);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][3],vY[2][3]);
	ctx.lineTo(vX[2][33],vY[2][33]);
	ctx.lineTo(vX[4][32],vY[4][32]);
	ctx.lineTo(vX[4][2],vY[4][2]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
    dibujaLinea(4, 4);			
	dibujaLinea(2, 6);
    dibujaLinea(5, 8);


	dibujaCara(3);

		
}



function mueveCaraDIA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

	dibujaLinea(5, 54);
	dibujaLinea(5, 2);			
    dibujaLinea(2, 52);			
    dibujaLinea(2, 4);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][3],vY[2][3]);
	ctx.lineTo(vX[2][33],vY[2][33]);
	ctx.lineTo(vX[4][32],vY[4][32]);
	ctx.lineTo(vX[4][2],vY[4][2]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	

	
    dibujaLinea(0, 2);			
    dibujaLinea(5, 8);
	dibujaLinea(2, 6);


	dibujaCara(3);

}


function mueveCaraEDA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

		
    //dibujaLinea(5, 4);			
    dibujaLinea(1, 4);
	dibujaLinea(3, 6);			
	dibujaLinea(5, 4);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[3][4],vY[3][4]);
	ctx.lineTo(vX[3][34],vY[3][34]);
	ctx.lineTo(vX[1][31],vY[1][31]);
	ctx.lineTo(vX[1][1],vY[1][1]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	
	
	dibujaLinea(3, 4);
	dibujaLinea(3, 52);			
    dibujaLinea(5, 6);
    dibujaLinea(5, 52);		


	dibujaCara(2);

}



function mueveCaraEIA(){


	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

	 //dibujaLinea(5, 4);			
    dibujaLinea(0, 4);
	dibujaLinea(5, 4);
	dibujaLinea(3, 6);			


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[3][4],vY[3][4]);
	ctx.lineTo(vX[3][34],vY[3][34]);
	ctx.lineTo(vX[1][31],vY[1][31]);
	ctx.lineTo(vX[1][1],vY[1][1]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	
	
	dibujaLinea(3, 4);
	dibujaLinea(3, 52);			
    dibujaLinea(5, 6);
    dibujaLinea(5, 52);		


	dibujaCara(2);
}



function mueveCaraFDA(){
	

	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

		
	dibujaLinea(2, 2);
	dibujaLinea(2, 54);			
    dibujaLinea(3, 2);			
    dibujaLinea(3, 54);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][18],vY[2][18]);
	ctx.lineTo(vX[2][23],vY[2][23]);
	ctx.lineTo(vX[4][18],vY[4][18]);
	ctx.lineTo(vX[4][23],vY[4][23]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	


    dibujaLinea(1, 8);
    dibujaLinea(3, 8);			
	dibujaLinea(2, 8);


	dibujaCara(5);

}



function mueveCaraFIA(){
	

	for(j=0; j<=nc; j++){
		for(i=0; i<=nv; i++){

			vX[j][i] = vX[j][i] + 600
		}
	}

	dibujaLinea(2, 2);
	dibujaLinea(2, 54);			
    dibujaLinea(3, 2);			
    dibujaLinea(3, 54);


	ctx.beginPath();
	ctx.lineWidth = gruesoL;
	ctx.strokeStyle="black";
	ctx.fillStyle=sombra;	
	ctx.moveTo(vX[2][18],vY[2][18]);
	ctx.lineTo(vX[2][23],vY[2][23]);
	ctx.lineTo(vX[4][18],vY[4][18]);
	ctx.lineTo(vX[4][23],vY[4][23]);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();	


    dibujaLinea(4, 8);
	dibujaLinea(2, 8);
    dibujaLinea(3, 8);			


	dibujaCara(5);
}


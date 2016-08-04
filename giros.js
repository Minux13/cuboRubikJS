
function giro( cara, direccion, Cubo){

	var copia=[]
	var valorCara, num_elemento, elemento;
	var derecha = [0,7,4,1,8,5,2,9,6,3];
	var izquierda = [0,3,6,9,2,5,8,1,4,7];
	
	
	
	if(direccion==2 || direccion==IZQUIERDA || direccion==DERECHA)
		;
	else{
		alert("\n\n Error fatalisisisisismo por la direccion\n\n");
		return 0;
	}
	
	if(cara>=0 && cara<=5)
		;
	else{
		alert("\n\n Error fatalisisisisismo por la Cara\n\n");
		return 0;
	}
	
	
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

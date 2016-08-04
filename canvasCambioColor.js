
function cambiaColor( caraMov){

	var copia=[]
	var valorCara, num_elemento, elemento;
	var numElemento = [0,2,4,12,14,16,24,26,28];   //Arreglo contiene los vertices donde comienza a trazar las piezas

/*
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

   el arreglo colorsC si incluye el elemento 0, sus numero de sus elementos son el numero de los vertices tomando en cuenta solo el primero donde comienza el trazo de la pieza, ese contendrá el color 

*/	

	var derecha = [24,12,0,26,14,2,28,16,4]
	var izquierda = [4,16,28,2,14,26,0,12,24];
	//var derecha = [0,7,4,1,8,5,2,9,6,3];
	//var izquierda = [0,3,6,9,2,5,8,1,4,7];

	var  a = [0,2,4];    // arriba 123
	var ai = [4,2,0];    // arriba invertida 321
	var  i = [0,12,24];  // izquierda 1,4,7
	var ii = [24,12,0];  // 
	var  d = [4,16,28];  //
	var di = [28,16,4];  //
	var  b = [24,26,28]; //
	var bi = [29,26,24]; //
	

	
	for(valorCara=0; valorCara<=5; valorCara++){
		copia.push([]);
		for(num_elemento=0; num_elemento<=35; num_elemento++){
					
			copia[valorCara].push([colorsC[valorCara][num_elemento]]);
		}	
	}


	if(caraMov=="AD"){

		//Cara A
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraA][numElemento[elemento]] = copia[caraA][derecha[elemento]];
			}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraB][a[elemento]] = copia[caraC][a[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraC][a[elemento]] = copia[caraD][a[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraD][a[elemento]] = copia[caraE][a[elemento]];
		}	
		
		//Cara E
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraE][a[elemento]] = copia[caraB][a[elemento]];
		}	
	}

	

	else if(caraMov=="AI"){

		//Cara A
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraA][numElemento[elemento]] = copia[caraA][izquierda[elemento]];
			}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraB][a[elemento]] = copia[caraE][a[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraC][a[elemento]] = copia[caraB][a[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraD][a[elemento]] = copia[caraC][a[elemento]];
		}	
		
		//Cara E
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraE][a[elemento]] = copia[caraD][a[elemento]];
		}
	}


	else if(caraMov=="BD"){

		//Cara B
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraB][numElemento[elemento]] = copia[caraB][derecha[elemento]];
			}	

		//Cara A
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraA][b[elemento]] = copia[caraE][di[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraC][i[elemento]] = copia[caraA][b[elemento]];
		}	

		//Cara F
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraF][ai[elemento]] = copia[caraC][i[elemento]];
		}	
		
		//Cara E
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraE][di[elemento]] = copia[caraF][ai[elemento]];
		}	
	}
	

	else if(caraMov=="BI"){

		//Cara B
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraB][numElemento[elemento]] = copia[caraB][izquierda[elemento]];
			}	

		//Cara A
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraA][b[elemento]] = copia[caraC][i[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraC][i[elemento]] = copia[caraF][ai[elemento]];
		}	

		//Cara F
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraF][ai[elemento]] = copia[caraE][di[elemento]];
		}	
		
		//Cara E
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraE][di[elemento]] = copia[caraA][b[elemento]];
		}	
	}


	else if(caraMov=="CD"){

		//Cara C
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraC][numElemento[elemento]] = copia[caraC][derecha[elemento]];
			}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraB][di[elemento]] = copia[caraF][di[elemento]];
		}	

		//Cara F
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraF][di[elemento]] = copia[caraD][i[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraD][i[elemento]] = copia[caraA][di[elemento]];
		}	
		
		//Cara A
		for(elemento=0; elemento < 3; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraA][di[elemento]] = copia[caraB][di[elemento]];
		}	
	}
	

	else if(caraMov=="CI"){

		//Cara C
		for(elemento=0; elemento < numElemento.length; elemento++){   
				colorsC[caraC][numElemento[elemento]] = copia[caraC][izquierda[elemento]];
			}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraB][di[elemento]] = copia[caraA][di[elemento]];
		}	

		//Cara F
		for(elemento=0; elemento < 3; elemento++){   
				colorsC[caraF][di[elemento]] = copia[caraB][di[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){  
				colorsC[caraD][i[elemento]] = copia[caraF][di[elemento]];
		}	
		
		//Cara A
		for(elemento=0; elemento < 3; elemento++){  
				colorsC[caraA][di[elemento]] = copia[caraD][i[elemento]];
		}	
	}

	
	else if(caraMov=="DD"){

		//Cara D
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraD][numElemento[elemento]] = copia[caraD][derecha[elemento]];
			}	

		//Cara A
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraA][ai[elemento]] = copia[caraC][di[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraC][di[elemento]] = copia[caraF][b[elemento]];
		}	

		//Cara E
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraE][i[elemento]] = copia[caraA][ai[elemento]];
		}	
		
		//Cara F
		for(elemento=0; elemento < 3; elemento++){    
				colorsC[caraF][b[elemento]] = copia[caraE][i[elemento]];
		}	
	}


	else if(caraMov=="DI"){

		//Cara D
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraD][numElemento[elemento]] = copia[caraD][izquierda[elemento]];
			}	

		//Cara A
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraA][ai[elemento]] = copia[caraE][i[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraC][di[elemento]] = copia[caraA][ai[elemento]];
		}	

		//Cara E
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraE][i[elemento]] = copia[caraF][b[elemento]];
		}	
		
		//Cara F
		for(elemento=0; elemento < 3; elemento++){    
				colorsC[caraF][b[elemento]] = copia[caraC][di[elemento]];
		}	
	}
	
	

	else if(caraMov=="ED"){

		//Cara E
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraE][numElemento[elemento]] = copia[caraE][derecha[elemento]];
			}	

		//Cara A
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraA][i[elemento]] = copia[caraD][di[elemento]];
		}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraB][i[elemento]] = copia[caraA][i[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraD][di[elemento]] = copia[caraF][i[elemento]];
		}	
		
		//Cara F
		for(elemento=0; elemento < 3; elemento++){    
				colorsC[caraF][i[elemento]] = copia[caraB][i[elemento]];
		}	
	}


	else if(caraMov=="EI"){

		//Cara E
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraE][numElemento[elemento]] = copia[caraE][izquierda[elemento]];
			}	

		//Cara A
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraA][i[elemento]] = copia[caraB][i[elemento]];
		}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraB][i[elemento]] = copia[caraF][i[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraD][di[elemento]] = copia[caraA][i[elemento]];
		}	
		
		//Cara F
		for(elemento=0; elemento < 3; elemento++){    
				colorsC[caraF][i[elemento]] = copia[caraD][di[elemento]];
		}	
	}



	else if(caraMov=="FD"){

		//Cara F
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraF][numElemento[elemento]] = copia[caraF][derecha[elemento]];
			}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraB][b[elemento]] = copia[caraE][b[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraC][b[elemento]] = copia[caraB][b[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraD][b[elemento]] = copia[caraC][b[elemento]];
		}	
		
		//Cara E
		for(elemento=0; elemento < 3; elemento++){    
				colorsC[caraE][b[elemento]] = copia[caraD][b[elemento]];
		}	
	}


	else if(caraMov=="FI"){

		//Cara F
		for(elemento=0; elemento < numElemento.length; elemento++){    ///el elemento si va de uno en uno 
				colorsC[caraF][numElemento[elemento]] = copia[caraF][izquierda[elemento]];
			}	

		//Cara B
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraB][b[elemento]] = copia[caraC][b[elemento]];
		}	

		//Cara C
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraC][b[elemento]] = copia[caraD][b[elemento]];
		}	

		//Cara D
		for(elemento=0; elemento < 3; elemento++){     
				colorsC[caraD][b[elemento]] = copia[caraE][b[elemento]];
		}	
		
		//Cara E
		for(elemento=0; elemento < 3; elemento++){    
				colorsC[caraE][b[elemento]] = copia[caraB][b[elemento]];
		}	
	}

}



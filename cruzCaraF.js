
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

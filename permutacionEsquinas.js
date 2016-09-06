
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
			alertaColoresMalIngresados();
			return COLORESMAL;
		}
		else
			return INCOMPLETO;
	
	}

}

function builderFront(){
	

		var escenario = new Stage("UNIVERSIDAD MILITAR NUEVA GRANADA","::FACULTAD DE INGENIERIA 	EN MULTIMEDIA");

	


	var area1 = new AreaBig(areae[0],1,"Ciencias Basicas");
	var area2 = new AreaBig(areae[1],2,"Ciencias de la Ingenieria");
	var area3 = new AreaBig(areae[2],3,"Ingenieria Aplicada");
	var area4 = new AreaBig(areae[3],4,"Economico- Administrativa");
	var area5 = new AreaBig(areae[4],5,"Socio-Humanistica");
	var area6 = new AreaBig(areae[5],6,"Complementaria");

	var q;
	for(q=1;q<=10;q++){
		var aro1 = new Area(q,1);
		var aro2 = new Area(q,2);
		var aro3 = new Area(q,3);
		var aro4 = new Area(q,4);
		var aro5 = new Area(q,5);
		var aro6 = new Area(q,6);
		var aro7 = new Area(q,7);
	}






	var primero = new Array();
	
	primero[0]=new Materia(1,signarum[0],codice[0],visa[0],area1,1,3,"TP");
	primero[1]=new Materia(1,signarum[1],codice[1],visa[1],area2,1,3,"TP");
	primero[2]=new Materia(1,signarum[2],codice[2],visa[2],area2,1,3,"TP");
	primero[3]=new Materia(1,signarum[3],codice[3],visa[3],area2,0,3,"TP");
	primero[4]=new Materia(1,signarum[4],codice[4],visa[4],area2,0,3,"TP");
	primero[5]=new Materia(1,signarum[5],codice[5],visa[5],area5,0,3,"TP");
	primero[6]=new Materia(1,signarum[6],codice[6],visa[6],area5,0,3,"TP");
	

	var segundo = new Array();
	segundo[0]=new Materia(2,signarum[7],codice[7],visa[7],area1,1,3,"TP");
	segundo[1]=new Materia(2,signarum[8],codice[8],visa[8],area1,1,3,"TP");
	segundo[2]=new Materia(2,signarum[9],codice[9],visa[9],area1,0,3,"TP");
	segundo[3]=new Materia(2,signarum[10],codice[10],visa[10],area2,0,3,"TP");
	segundo[4]=new Materia(2,signarum[11],codice[11],visa[11],area6,0,3,"TP");

	var tercero = new Array();
	tercero[0]=new Materia(3,signarum[12],codice[12],visa[12],area1,1,3,"TP");
	tercero[1]=new Materia(3,signarum[13],codice[13],visa[13],area1,0,3,"TP");
	tercero[2]=new Materia(3,signarum[14],codice[14],visa[14],area1,0,3,"TP");
	tercero[3]=new Materia(3,signarum[15],codice[15],visa[15],area2,0,3,"TP");
	tercero[4]=new Materia(3,signarum[16],codice[16],visa[16],area5,0,3,"TP");

	var cuarto = new Array();
	cuarto[0]=new Materia(4,signarum[17],codice[17],visa[17],area1,1,3,"TP");
	cuarto[1]=new Materia(4,signarum[18],codice[18],visa[17],area1,0,3,"TP");
	cuarto[2]=new Materia(4,signarum[19],codice[19],visa[17],area2,0,3,"TP");
	cuarto[3]=new Materia(4,signarum[20],codice[17],visa[17],area3,0,3,"TP");
	cuarto[4]=new Materia(4,signarum[21],codice[17],visa[17],area3,0,3,"TP");

	var quinto = new Array();
	quinto[0]=new Materia(5,signarum[22],codice[22],visa[22],area1,0,3,"TP");
	quinto[1]=new Materia(5,signarum[23],codice[23],visa[23],area1,1,3,"TP");
	quinto[2]=new Materia(5,signarum[24],codice[24],visa[24],area3,1,3,"TP");
	quinto[3]=new Materia(5,signarum[25],codice[25],visa[25],area3,0,3,"TP");
	quinto[4]=new Materia(5,signarum[26],codice[26],visa[26],area5,0,3,"TP");
	quinto[5]=new Materia(5,signarum[27],codice[27],visa[27],area5,0,3,"TP");

	var sexto = new Array();
	sexto[0]=new Materia(6,signarum[28],codice[28],visa[28],area1,0,3,"TP");
	sexto[1]=new Materia(6,signarum[29],codice[29],visa[29],area3,0,3,"TP");
	sexto[2]=new Materia(6,signarum[30],codice[30],visa[30],area3,0,3,"TP");
	sexto[3]=new Materia(6,signarum[31],codice[31],visa[31],area3,0,3,"TP");
	sexto[4]=new Materia(6,signarum[32],codice[32],visa[32],area3,0,3,"TP");

	var septimo = new Array();
	septimo[0]=new Materia(7,signarum[33],codice[33],visa[33],area3,0,3,"TP");
	septimo[1]=new Materia(7,signarum[34],codice[34],visa[34],area3,1,3,"TP");
	septimo[2]=new Materia(7,signarum[35],codice[35],visa[35],area3,1,3,"TP");
	septimo[3]=new Materia(7,signarum[36],codice[36],visa[36],area3,0,3,"TP");
	septimo[4]=new Materia(7,signarum[37],codice[37],visa[37],area3,0,3,"TP");

	var octavo = new Array();
	octavo[0]=new Materia(8,signarum[38],codice[38],visa[38],area2,1,3,"TP");
	octavo[1]=new Materia(8,signarum[39],codice[39],visa[39],area3,1,3,"TP");
	octavo[2]=new Materia(8,signarum[40],codice[40],visa[40],area3,0,3,"TP");
	octavo[3]=new Materia(8,signarum[41],codice[41],visa[41],area3,1,3,"TP");
	octavo[4]=new Materia(8,signarum[42],codice[42],visa[42],area3,0,3,"TP");
	octavo[5]=new Materia(8,signarum[43],codice[43],visa[43],area3,0,3,"TP");

	var noveno = new Array();
	noveno[0]=new Materia(9,signarum[44],codice[44],visa[44],area3,0,3,"TP");
	noveno[1]=new Materia(9,signarum[45],codice[45],visa[45],area3,0,3,"TP");
	noveno[2]=new Materia(9,signarum[46],codice[46],visa[46],area3,0,3,"TP");
	noveno[3]=new Materia(9,signarum[47],codice[47],visa[47],area3,0,3,"TP");
	noveno[4]=new Materia(9,signarum[48],codice[48],visa[48],area4,0,3,"TP");

	var decimo = new Array();
	decimo[0]=new Materia(10,signarum[49],codice[49],visa[49],area2,0,3,"TP");
	decimo[1]=new Materia(10,signarum[50],codice[50],visa[50],area2,0,3,"TP");
	decimo[2]=new Materia(10,signarum[51],codice[51],visa[51],area3,0,3,"TP");
	decimo[3]=new Materia(10,signarum[52],codice[52],visa[52],area3,0,3,"TP");
	decimo[4]=new Materia(10,signarum[53],codice[53],visa[53],area4,0,3,"TP");
	
	
	var o;
	for(o=0;o<primero.length;o++){
	var semestre1 = new Semestre(primero[o]);
	}
	///SEGUNDO
	for(o=0;o<segundo.length;o++){
	var semestre2 = new Semestre(segundo[o]);
	}
	///TERCERO
	for(o=0;o<tercero.length;o++){
	var semestre3 = new Semestre(tercero[o]);
	}
	/////CUARTO
	for(o=0;o<cuarto.length;o++){
	var semestre4 = new Semestre(cuarto[o]);
	}
	for(o=0;o<quinto.length;o++){
	var semestre5 = new Semestre(quinto[o]);
	}
	for(o=0;o<sexto.length;o++){
	var semestre6 = new Semestre(sexto[o]);
	}
	for(o=0;o<septimo.length;o++){
	var semestre7 = new Semestre(septimo[o]);
	}
	for(o=0;o<octavo.length;o++){
	var semestre8 = new Semestre(octavo[o]);
	}
	for(o=0;o<noveno.length;o++){
	var semestre9 = new Semestre(noveno[o]);
	}
	for(o=0;o<decimo.length;o++){
	var semestre10 = new Semestre(decimo[o]);
	}

}
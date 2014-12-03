function builderFront(){
	
	var escenario = new Stage("UNIVERSIDAD MILITAR NUEVA GRANADA ","MULTIMEDIA");
	//put all items
	for(var i=1;i<=totalSem;i++){
	escenario.titulos(i);
	}
	//hide first item
	$("#titles:first-child").hide();

	
	<!--FOR LOAD JUST TITLES OF BIG AREA-->
	var area1 = new AreaBig(areae[0],1,"Ciencias Basicas");
	var area2 = new AreaBig(areae[1],2,"Ciencias de la Ingenieria");
	var area3 = new AreaBig(areae[2],3,"Ingenieria Aplicada");
	var area4 = new AreaBig(areae[3],4,"Economico Administrativa");
	var area5 = new AreaBig(areae[4],5,"Socio-Humanistica");
	var area6 = new AreaBig(areae[5],6,"Complementaria");
	
	

	var q;
	for(q=1;q<=totalSem;q++){
		var aro1 = new Area(q,1);
		var aro2 = new Area(q,2);
		var aro3 = new Area(q,3);
		var aro4 = new Area(q,4);
		var aro5 = new Area(q,5);
		var aro6 = new Area(q,6);
		var aro7 = new Area(q,7);
	}

	<!--BUILDER OF SIGNATURES parameters(semes,matter,codigo,credos,area,previous,minute,type)-->
	var signBuilder = new Array();
	for(i=0;i<=totalMaterias;i++){

				signBuilder[i]=new Materia(semestral[i],signarum[i],codice[i],visa[i],areae[i],prerequire[i],tiempo[i],typeOf[i]);
				var intoSemestre1 = new Semestre(signBuilder[i]);
				
	}
}
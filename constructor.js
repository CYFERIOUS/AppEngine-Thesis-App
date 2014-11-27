 
 //////CREACION DE STAGE GENERAL//////////////////////////////////////
////////////////////////////////////////////////////////////////////////
 var Stage = function(colore,nameEst,facultad){
	
	this.colore = colore;
	this.nameEst = nameEst;
	
 	var containerTotal = document.createElement('div');
	containerTotal.id = "stage";
	containerTotal.style.backgroundColor = colore;
	containerTotal.style.top ="0px";
	document.body.appendChild(containerTotal);
 
	var codus=document.createElement("div");
	codus.id="cabezote";
	var imagos=document.createElement("div");
	imagos.id = "imagos";
	var node=document.createTextNode(nameEst);
	var popoca=document.createTextNode(facultad);
	codus.appendChild(node);
	codus.appendChild(popoca);
	codus.appendChild(imagos);
	containerTotal.appendChild(codus);
	
  };
  
   Stage.prototype = {

 };
//////CREACION DE STAGE DE SEMESTRE//////////////////////////////////////
////////////////////////////////////////////////////////////////////////



 var Semestre = function(nivel,lefto,materias,ed){
	
	this.nivel = nivel;
	this.lefto = lefto;
	this.bloque = materias;
	this.ed = ed;
	
 	var containerSem = document.createElement('div');
	containerSem.id = "semestre"+ ed;
	containerSem.innerHTML = nivel;
	containerSem.style.left = lefto + "px";
	document.body.appendChild(containerSem); 
	

	////////the signatures//////////////////////
	var signarum = document.createElement("div");
	var signarum2 = document.createElement("div");
	var signarum3 = document.createElement("div");
	var signarum4 = document.createElement("div");
	////////CLASIFICO EN SEMESTRES//////////////////////////////////////////////////
	switch(materias.semes){
	case 1:
	signarum.className ="bloque1";
	containerSem = document.getElementById("semestre"+1).appendChild(signarum);

	break;
	case 2:
	signarum2.className ="bloque2";
	containerSem =document.getElementById("semestre"+2).appendChild(signarum2);

	break;
	case 3:
	signarum3.className ="bloque3";
	containerSem = document.getElementById("semestre"+3).appendChild(signarum3);
	
	break;
	case 4:
	signarum4.className ="bloque4";
	 containerSem = document.getElementById("semestre"+4).appendChild(signarum4);
	 
	break;
	}
	signarum.innerHTML = materias.bloque.innerHTML;
	signarum2.innerHTML = materias.bloque.innerHTML;
	signarum3.innerHTML = materias.bloque.innerHTML;
	signarum4.innerHTML = materias.bloque.innerHTML;
	//signatos.style.cursor = "pointer";
			
	//document.getElementById("semestre"+materias.semes).appendChild(signarum);

	////////CLASIFICO EN AREAS//////////////////////////////////////////////////
	if(materias.pipo=="CIENCIAS BASICAS"){
	document.getElementById("areaStage1").appendChild(containerSem);
	}
	if(materias.pipo=="CIENCIAS DE LA INGENIERIA"){
	document.getElementById("areaStage2").appendChild(containerSem);
	}
	if(materias.pipo=="INGENIERIA APLICADA"){
	document.getElementById("areaStage3").appendChild(containerSem);
	}
	if(materias.pipo=="ECONOMICO ADMINISTRATIVA"){
	document.getElementById("areaStage4").appendChild(containerSem);
	}
	if(materias.pipo=="SOCIO HUMANISTICA"){
	document.getElementById("areaStage5").appendChild(containerSem);
	}
	if(materias.pipo=="COMPLEMENTARIA"){
	document.getElementById("areaStage6").appendChild(containerSem);
	}
  };
  
   Semestre.prototype = {

 };
//////CREACION DE STAGE DE AREAS POR SEMESTRE/////////////////////////
////////////////////////////////////////////////////////////////////////
 var Area = function(colore, space, ed){
	
	this.colore = colore;
	this.space = space;
	this.name = name;
	
 	var containerArea = document.createElement('div');
	containerArea.id = "areaStage"+ ed;
	containerArea.innerHTML = space;
	containerArea.style.backgroundColor = colore;
	document.getElementById("stage").appendChild(containerArea);  
	
	
	///////contains signature data////////////////

	
  };
  
   Area.prototype = {
	   	
 };

//////CREACION DE STAGE DE MATERIAS POR SEMESTRE/////////////////////////
////////////////////////////////////////////////////////////////////////
  var Materia = function(semes,matter,codigo,credos,area){
	
	this.semes = semes;
	this.matter = matter;
	this.codigo = codigo;
	this.credos = credos;
	this.area = area;
	this.pipo = area.space;
	////container of signature
 	var signat = document.createElement('div');
	this.bloque = signat;
	signat.id = "signos";
	signat.innerHTML = matter;
	signat.style.backgroundColor = "#000";
	//document.body.appendChild(signat);  aqui no la pinto, la pinto en semestre.
	
	//////////////////container signature code//////////////////////////
	var codus=document.createElement("div");
	var node=document.createTextNode(codigo);
	codus.appendChild(node);
	signat.appendChild(codus);
	/////////////////contains credit of signature///////////////////////
	var credios=document.createElement("div");
	credios.id ="card";
	var numus=document.createTextNode(credos);
	credios.appendChild(numus);
	signat.appendChild(credios);
  
  };
  
  
   Materia.prototype = {
	  
	
 };
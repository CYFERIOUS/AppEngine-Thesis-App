 
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
  Stage.prototype = {};
 
 ///////////////////////////////////////////////////////////////////////////
 var AreaBig = function(colore,space,ed){
	 
	this.colore = colore;
	this.space = space;
	this.name = name;
 	var areaBig = document.createElement('div');
	areaBig.id = "areaBig"+ ed;
	areaBig.innerHTML = space;
	areaBig.style.backgroundColor = colore;
	document.getElementById("stage").appendChild(areaBig);
  };
  
AreaBig.prototype = {};
//////CREACION DE STAGE DE AREAS POR SEMESTRE////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
 var Area = function(q,areo){
 this.areo = areo;
 	var containerArea = document.createElement('div');
	containerArea.id = "areaStage"+q;
	containerArea.style.marginLeft = (q-1)*101+"px";
	switch(areo){
	case 1:
	document.getElementById("areaBig1").appendChild(containerArea);
	break;
	case 2:
	document.getElementById("areaBig2").appendChild(containerArea);
	break;
	case 3:
	document.getElementById("areaBig3").appendChild(containerArea);
	break;
	case 4:
	document.getElementById("areaBig4").appendChild(containerArea);
	break;
	case 5:
	document.getElementById("areaBig5").appendChild(containerArea);
	break;
	case 6:
	document.getElementById("areaBig6").appendChild(containerArea);
	break;
	}
};
Area.prototype = {};

//////CREACION DE STAGE DE SEMESTRE//////////////////////////////////////
////////////////////////////////////////////////////////////////////////
var Semestre = function(nivel,lefto,materias,ed, cont){
	
	this.nivel = nivel;
	this.lefto = lefto;
	this.bloque = materias;
	this.ed = ed;
	this.cont = cont;
	
	if(cont == 0 ){
		var containerSem = document.createElement('div');
		containerSem.id = "semestre"+ ed;
		containerSem.innerHTML = nivel;
		containerSem.style.left = lefto + "px";
	}
	////////the signatures//////////////////////
	var signarum = document.createElement("div");
	////////CLASIFICO EN AREAS//////////////////////////////////////////////////
	if(materias.pipo=="CIENCIAS BASICAS"){
	 document.getElementById("areaBig1").appendChild(containerArea);
	}
	if(materias.pipo=="CIENCIAS DE LA INGENIERIA"){
	document.getElementById("areaBig2").appendChild(containerArea);
	}
	if(materias.pipo=="INGENIERIA APLICADA"){

	document.getElementById("areaBig3").appendChild(containerArea);
	}
	if(materias.pipo=="ECONOMICO ADMINISTRATIVA"){
	
	document.getElementById("areaBig4").appendChild(containerArea);
	}
	if(materias.pipo=="SOCIO HUMANISTICA"){
	
	document.getElementById("areaBig5").appendChild(containerArea);
	}
	if(materias.pipo=="COMPLEMENTARIA"){
	
	document.getElementById("areaBig6").appendChild(containerArea);
	}
	////////CLASIFICO EN SEMESTRES//////////////////////////////////////////////////
	/*switch(materias.semes){
	case 1:
	signarum.className ="bloque1"
	popa1 = document.getElementById("areaStage"+1).appendChild(signarum);
	break;
	case 2:
	signarum.className ="bloque2";
	popa2 =document.getElementById("areaStage"+2).appendChild(signarum);
	break;
	case 3:
	signarum.className ="bloque3";
	popa3 =document.getElementById("areaStage"+3).appendChild(signarum);
	break;
	case 4:
	signarum.className ="bloque4";
	document.getElementById("areaStage"+4).appendChild(signarum);
	break;
	}*/
	
	signarum.innerHTML = materias.bloque.innerHTML;
	signarum.style.cursor = "pointer";
  };
   Semestre.prototype = {};
 



////CREACION DE STAGE DE MATERIAS POR SEMESTRE/////////////////////////
//////////////////////////////////////////////////////////////////////
  var Materia = function(semes,matter,codigo,credos,area){
	
	this.semes = semes;
	this.matter = matter;
	this.codigo = codigo;
	this.credos = credos;
	this.area = area;
	this.pipo = area.space;
	///container of signature
 	var signat = document.createElement('div');
	this.bloque = signat;
	signat.id = "signos";
	signat.innerHTML = matter;
	signat.style.backgroundColor = "#000";
	
	//////////////////////////container signature code
	var codus=document.createElement("div");
	var node=document.createTextNode(codigo);
	codus.appendChild(node);
	signat.appendChild(codus);
	///////////////////////contains credit of signature/
	var credios=document.createElement("div");
	credios.id ="card";
	var numus=document.createTextNode(credos);
	credios.appendChild(numus);
	signat.appendChild(credios);
  
  };
   Materia.prototype = {};
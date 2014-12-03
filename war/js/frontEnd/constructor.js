 
 //////CREACION DE STAGE GENERAL//////////////////////////////////////
////////////////////////////////////////////////////////////////////////
 var Stage = function(nameEst,facultad){
	
	this.nameEst = nameEst;
	
 	var containerTotal = document.createElement('div');
	containerTotal.id = "stage";
	
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
 var AreaBig = function(space,ed,arNm){
	 
	this.arNm = arNm;
	this.space = space;
	this.name = name;
 	var areaBig = document.createElement('div');
	areaBig.id = "areaBig"+ ed;
	areaBig.className = "areaBig"; 
	document.getElementById("stage").appendChild(areaBig);
	
	var aBI = document.createElement('div');
	aBI.className = "sTittle"; 
	var titos=document.createTextNode(arNm);
	titos.id = "sideEst";
	aBI.appendChild(titos);
	document.getElementById("areaBig"+ ed).appendChild(aBI);
	
  };
  
AreaBig.prototype = {};
//////CREACION DE STAGE DE SEMESTRES POR AREA////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
 var Area = function(q,areo){
 this.areo = areo;

 	var containerArea = document.createElement('div');
	containerArea.id = "basicas" + q;
	containerArea.className = "basicas";
	
	var containerArea2 = document.createElement('div');
	containerArea2.id = "ciencias"+q;
	containerArea2.className = "ciencias";
	
	var containerArea3 = document.createElement('div');
	containerArea3.id = "aplicadas"+q;
	containerArea3.className = "aplicadas";
	
	var containerArea4 = document.createElement('div');
	containerArea4.id = "economicas"+q;
	containerArea4.className = "economicas";
	
	var containerArea5 = document.createElement('div');
	containerArea5.id = "humanisticas"+q;
	containerArea5.className = "humanisticas";
	
	var containerArea6 = document.createElement('div');
	containerArea6.id = "complementarias"+q;
	containerArea6.className = "complementarias";
	
	
	
	
	switch(areo){
	case 1:
	document.getElementById("areaBig1").appendChild(containerArea);
	break;
	case 2:
	document.getElementById("areaBig2").appendChild(containerArea2);
	break;
	case 3:
	document.getElementById("areaBig3").appendChild(containerArea3);
	break;
	case 4:
	document.getElementById("areaBig4").appendChild(containerArea4);
	break;
	case 5:
	document.getElementById("areaBig5").appendChild(containerArea5);
	break;
	case 6:
	document.getElementById("areaBig6").appendChild(containerArea6);
	break;
	}
	
};
Area.prototype = {};

//////CREACION DE STAGE DE SEMESTRE//////////////////////////////////////
////////////////////////////////////////////////////////////////////////
var Semestre = function(materias){
	
	////////the signatures//////////////////////
	var signarum = document.createElement("div");
	signarum.className ="bloque";
	////////CLASIFICO EN AREAS//////////////////////////////////////////////////
	if(materias.pipo=="CIENCIAS BASICAS"){
	if(materias.semes==1){
	document.getElementById("basicas1").appendChild(signarum);
	}
	if(materias.semes==2){
	document.getElementById("basicas2").appendChild(signarum);
	}
	if(materias.semes==3){
	document.getElementById("basicas3").appendChild(signarum);
	}
	if(materias.semes==4){
	document.getElementById("basicas4").appendChild(signarum);
	}
	if(materias.semes==5){
	 document.getElementById("basicas5").appendChild(signarum);
	}
	if(materias.semes==6){
	 document.getElementById("basicas6").appendChild(signarum);
	}
	if(materias.semes==7){
	 document.getElementById("basicas7").appendChild(signarum);
	}
	if(materias.semes==8){
	 document.getElementById("basicas8").appendChild(signarum);
	}
	if(materias.semes==9){
	 document.getElementById("basicas9").appendChild(signarum);
	}
	if(materias.semes==10){
	document.getElementById("basicas10").appendChild(signarum);
	}	
	}
	
	
	/////////////////////////////////////////////////////////////////////////
	if(materias.pipo=="CIENCIAS DE LA INGENIERIA"){
	if(materias.semes==1){
	document.getElementById("ciencias"+1).appendChild(signarum);
	}
	if(materias.semes==2){
	document.getElementById("ciencias"+2).appendChild(signarum);
	}
	if(materias.semes==3){
	document.getElementById("ciencias"+3).appendChild(signarum);
	}
	if(materias.semes==4){
	document.getElementById("ciencias"+4).appendChild(signarum);
	}
	if(materias.semes==5){
	 document.getElementById("ciencias"+5).appendChild(signarum);
	}
	if(materias.semes==6){
	 document.getElementById("ciencias"+6).appendChild(signarum);
	}
	if(materias.semes==7){
	 document.getElementById("ciencias"+7).appendChild(signarum);
	}
	if(materias.semes==8){
	 document.getElementById("ciencias"+8).appendChild(signarum);
	}
	if(materias.semes==9){
	 document.getElementById("ciencias"+9).appendChild(signarum);
	}
	if(materias.semes==10){
	document.getElementById("ciencias"+10).appendChild(signarum);
	}	
	}
	///////////////////////////////////////////////////////////////////////////////////////////////
	if(materias.pipo=="INGENIERIA APLICADA"){
	if(materias.semes==1){

	document.getElementById("aplicadas"+1).appendChild(signarum);
	}
	if(materias.semes==2){

	document.getElementById("aplicadas"+2).appendChild(signarum);
	}
	if(materias.semes==3){

	document.getElementById("aplicadas"+3).appendChild(signarum);
	}
	if(materias.semes==4){

	document.getElementById("aplicadas"+4).appendChild(signarum);
	}
	if(materias.semes==5){

	 document.getElementById("aplicadas"+5).appendChild(signarum);
	}
	if(materias.semes==6){

	 document.getElementById("aplicadas"+6).appendChild(signarum);
	}
	if(materias.semes==7){

	 document.getElementById("aplicadas"+7).appendChild(signarum);
	}
	if(materias.semes==8){

	 document.getElementById("aplicadas"+8).appendChild(signarum);
	}
	if(materias.semes==9){

	 document.getElementById("aplicadas"+9).appendChild(signarum);
	}
	if(materias.semes==10){

	document.getElementById("aplicadas"+10).appendChild(signarum);
	}	
	}
	/////////////////////////////////////////////////////////////////////////////
	if(materias.pipo=="ECONOMICO ADMINISTRATIVA"){
	if(materias.semes==1){

	document.getElementById("economicas"+1).appendChild(signarum);
	}
	if(materias.semes==2){

	document.getElementById("economicas"+2).appendChild(signarum);
	}
	if(materias.semes==3){

	document.getElementById("economicas"+3).appendChild(signarum);
	}
	if(materias.semes==4){

	document.getElementById("economicas"+4).appendChild(signarum);
	}
	if(materias.semes==5){

	 document.getElementById("economicas"+5).appendChild(signarum);
	}
	if(materias.semes==6){

	 document.getElementById("economicas"+6).appendChild(signarum);
	}
	if(materias.semes==7){

	 document.getElementById("economicas"+7).appendChild(signarum);
	}
	if(materias.semes==8){

	 document.getElementById("economicas"+8).appendChild(signarum);
	}
	if(materias.semes==9){

	 document.getElementById("economicas"+9).appendChild(signarum);
	}
	if(materias.semes==10){

	document.getElementById("economicas"+10).appendChild(signarum);
	}	
	}
	/////////////////////////////////////////////////////////////////////////////
		if(materias.pipo=="SOCIO HUMANISTICA"){
	if(materias.semes==1){

	document.getElementById("humanisticas"+1).appendChild(signarum);
	}
	if(materias.semes==2){

	document.getElementById("humanisticas"+2).appendChild(signarum);
	}
	if(materias.semes==3){

	document.getElementById("humanisticas"+3).appendChild(signarum);
	}
	if(materias.semes==4){

	document.getElementById("humanisticas"+4).appendChild(signarum);
	}
	if(materias.semes==5){

	 document.getElementById("humanisticas"+5).appendChild(signarum);
	}
	if(materias.semes==6){

	 document.getElementById("humanisticas"+6).appendChild(signarum);
	}
	if(materias.semes==7){

	 document.getElementById("humanisticas"+7).appendChild(signarum);
	}
	if(materias.semes==8){

	 document.getElementById("humanisticas"+8).appendChild(signarum);
	}
	if(materias.semes==9){

	 document.getElementById("humanisticas"+9).appendChild(signarum);
	}
	if(materias.semes==10){

	document.getElementById("humanisticas"+10).appendChild(signarum);
	}	
	}
	////////////////////////////////////////////////////////////////////////////
		if(materias.pipo=="COMPLEMENTARIA"){
	if(materias.semes==1){

	document.getElementById("complementarias"+1).appendChild(signarum);
	}
	if(materias.semes==2){

	document.getElementById("complementarias"+2).appendChild(signarum);
	}
	if(materias.semes==3){

	document.getElementById("complementarias"+3).appendChild(signarum);
	}
	if(materias.semes==4){

	document.getElementById("complementarias"+4).appendChild(signarum);
	}
	if(materias.semes==5){

	 document.getElementById("complementarias"+5).appendChild(signarum);
	}
	if(materias.semes==6){

	 document.getElementById("complementarias"+6).appendChild(signarum);
	}
	if(materias.semes==7){

	 document.getElementById("complementarias"+7).appendChild(signarum);
	}
	if(materias.semes==8){

	 document.getElementById("complementarias"+8).appendChild(signarum);
	}
	if(materias.semes==9){

	 document.getElementById("complementarias"+9).appendChild(signarum);
	}
	if(materias.semes==10){

	document.getElementById("complementarias"+10).appendChild(signarum);
	}	
	}
	
	signarum.innerHTML = materias.bloque.innerHTML;
	signarum.style.cursor = "pointer";
  };
   Semestre.prototype = {};
 



////CREACION DE STAGE DE MATERIAS POR SEMESTRE/////////////////////////
//////////////////////////////////////////////////////////////////////
  var Materia = function(semes,matter,codigo,credos,area,previous,minute,type){
	
	this.semes = semes;
	this.matter = matter;
	this.codigo = codigo;
	this.credos = credos;
	this.area = area;
	this.pipo = area.space;
	this.previous = previous;
	this.minute = minute;
	this.type = type;
	
	
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
	
	var cronos=document.createElement("div");
	cronos.id ="card";
	var time=document.createTextNode(minute);
	cronos.appendChild(time);
	signat.appendChild(cronos);
	
	var typos=document.createElement("div");
	typos.id ="card2";
	var tipos=document.createTextNode(type);
	typos.appendChild(tipos);
	signat.appendChild(typos);

	
	if(previous==1){
	
	var pre=document.createElement("div");
	pre.className = "prq";
	pre.innerHTML = "<embed src='img/frontEnd/flecha.svg' type='image/svg+xml' />";
	signat.appendChild(pre);
	}
  	
  
  };
   Materia.prototype = {};
   
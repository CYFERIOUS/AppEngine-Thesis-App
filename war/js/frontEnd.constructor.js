//////CREACION DE STAGE GENERAL//////////////////////////////////////
////////////////////////////////////////////////////////////////////////

var Stage = function(nameEst,facultad){
	
	this.nameEst = nameEst;
	
	var imagos=document.createElement("div");
	imagos.id = "imagos";
	
	var headSemester  = document.createElement('div');
	headSemester.className="headerSem";
	
	var numeroTitulo  = document.createElement('div');;
	numeroTitulo.className="romanGod";
	numeroTitulo.id="titles";
	
 	
	var containerTotal = document.createElement('div');
	containerTotal.id = "stage";
	document.body.appendChild(containerTotal);
	
	var cT1= document.createElement('div');
	cT1.id="mainInfo1";
	document.body.appendChild(cT1);
	var cT2 = document.createElement('div');
	cT2.id="mainInfo2";
	document.body.appendChild(cT2);
 
	var codus=document.createElement("div");
	
	
	var universia=document.createElement("div");
	universia.id = "U";
	var faculto=document.createElement("div");
	faculto.className="cabezote";
	var programo=document.createElement("div");
	programo.className="cabezote";
	var resoluto=document.createElement("div");
	resoluto.className="cabezote";
	var redcode=document.createElement("div");
	redcode.className="cabezote";
	
	var emision=document.createElement("div");
	var wierdCode=document.createElement("div");
	wierdCode.className="cabezote2";
	emision.className="cabezote2";
	
	var university=document.createTextNode(nameEst);
	var faculty=document.createTextNode("FACULTAD DE INGENIERIA");
	var program=document.createTextNode("PLAN DE ESTUDIOS PROGRAMA DE INGENIERIA EN "+facultad);
	var emito=document.createTextNode("Fecha de Emision: Revision No.3");
	var wird=document.createTextNode("AC-DO-F-1:Pagina 1 de 1");
	var resolucion=document.createTextNode("REGISTRO CALIFICADO RESOLUCION 11183(11 SEPTIEMBRE DE 2012) DEL MINISTERIO DE EDUCACION NACIONAL");
	var codex=document.createTextNode("CODIGO SNIES 10993");
	
	
	headSemester.appendChild(numeroTitulo);
	resoluto.appendChild(resolucion);
	wierdCode.appendChild(wird);
	universia.appendChild(university);
	faculto.appendChild(faculty);
	programo.appendChild(program);
	emision.appendChild(emito);
	redcode.appendChild(codex);
	codus.appendChild(headSemester);
	
	cT2.appendChild(wierdCode);
	cT2.appendChild(emision);
	
	cT1.appendChild(universia);
	cT1.appendChild(imagos);
	cT1.appendChild(faculto);
	cT1.appendChild(programo);
	cT1.appendChild(resoluto);
	cT1.appendChild(redcode);
	cT1.appendChild(codus);
	
	containerTotal.appendChild(cT1);
	containerTotal.appendChild(cT2);
	
	
	
};
Stage.prototype = {
	
	titulos : function(q){
				//alert(q);
				document.getElementById("titles").innerHTML = q;
				$("#titles").clone().appendTo(".headerSem");
				
				}
	
};
 
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
	
	var aBII = document.createElement('div');
	aBII.className = "sideEst"; 
	
	var titos=document.createTextNode(arNm);
	titos.id = "sideEst";
	
	aBI.appendChild(aBII);
	aBII.appendChild(titos);
	
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
	signarum.addEventListener("click",detail);
	signarum.className ="bloque";
	this.codex = materias.codigo;
	
	
	
	
	////////CLASIFICO EN AREAS//////////////////////////////////////////////////
	if(materias.area =="Ciencias Basicas"){
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
	if(materias.semes==11){
	document.getElementById("basicas11").appendChild(signarum);
	}
	if(materias.semes==12){
	document.getElementById("basicas12").appendChild(signarum);
	}
	}
	
	
	/////////////////////////////////////////////////////////////////////////
	if(materias.area =="Ciencias de la Ingenieria"){
	if(materias.semes==1){
	document.getElementById("ciencias1").appendChild(signarum);
	}
	if(materias.semes==2){
	document.getElementById("ciencias2").appendChild(signarum);
	}
	if(materias.semes==3){
	document.getElementById("ciencias3").appendChild(signarum);
	}
	if(materias.semes==4){
	document.getElementById("ciencias4").appendChild(signarum);
	}
	if(materias.semes==5){
	 document.getElementById("ciencias5").appendChild(signarum);
	}
	if(materias.semes==6){
	 document.getElementById("ciencias6").appendChild(signarum);
	}
	if(materias.semes==7){
	 document.getElementById("ciencias7").appendChild(signarum);
	}
	if(materias.semes==8){
	 document.getElementById("ciencias8").appendChild(signarum);
	}
	if(materias.semes==9){
	 document.getElementById("ciencias9").appendChild(signarum);
	}
	if(materias.semes==10){
	document.getElementById("ciencias10").appendChild(signarum);
	}
	if(materias.semes==11){
	document.getElementById("ciencias11").appendChild(signarum);
	}	
	if(materias.semes==12){
	document.getElementById("ciencias12").appendChild(signarum);
	}	
	}
	///////////////////////////////////////////////////////////////////////////////////////////////
	if(materias.area =="Ingenieria Aplicada"){
	if(materias.semes==1){

	document.getElementById("aplicadas1").appendChild(signarum);
	}
	if(materias.semes==2){

	document.getElementById("aplicadas2").appendChild(signarum);
	}
	if(materias.semes==3){

	document.getElementById("aplicadas3").appendChild(signarum);
	}
	if(materias.semes==4){

	document.getElementById("aplicadas4").appendChild(signarum);
	}
	if(materias.semes==5){

	 document.getElementById("aplicadas5").appendChild(signarum);
	}
	if(materias.semes==6){

	 document.getElementById("aplicadas6").appendChild(signarum);
	}
	if(materias.semes==7){

	 document.getElementById("aplicadas7").appendChild(signarum);
	}
	if(materias.semes==8){

	 document.getElementById("aplicadas8").appendChild(signarum);
	}
	if(materias.semes==9){

	 document.getElementById("aplicadas9").appendChild(signarum);
	}
	if(materias.semes==10){
	document.getElementById("aplicadas10").appendChild(signarum);
	}
	if(materias.semes==11){
	document.getElementById("aplicadas11").appendChild(signarum);
	}	
	if(materias.semes==12){
	document.getElementById("aplicadas12").appendChild(signarum);
	}	
	}
	/////////////////////////////////////////////////////////////////////////////
	if(materias.area =="Economico Administrativa"){
	if(materias.semes==1){

	document.getElementById("economicas1").appendChild(signarum);
	}
	if(materias.semes==2){

	document.getElementById("economicas2").appendChild(signarum);
	}
	if(materias.semes==3){

	document.getElementById("economicas3").appendChild(signarum);
	}
	if(materias.semes==4){

	document.getElementById("economicas4").appendChild(signarum);
	}
	if(materias.semes==5){

	 document.getElementById("economicas5").appendChild(signarum);
	}
	if(materias.semes==6){

	 document.getElementById("economicas6").appendChild(signarum);
	}
	if(materias.semes==7){

	 document.getElementById("economicas7").appendChild(signarum);
	}
	if(materias.semes==8){

	 document.getElementById("economicas8").appendChild(signarum);
	}
	if(materias.semes==9){

	 document.getElementById("economicas9").appendChild(signarum);
	}
	if(materias.semes==10){
	document.getElementById("economicas10").appendChild(signarum);
	}
	if(materias.semes==11){
	document.getElementById("economicas11").appendChild(signarum);
	}	
	if(materias.semes==12){
	document.getElementById("economicas12").appendChild(signarum);
	}	
	}
	/////////////////////////////////////////////////////////////////////////////
		if(materias.area =="Socio-Humanistica"){
	if(materias.semes==1){

	document.getElementById("humanisticas1").appendChild(signarum);
	}
	if(materias.semes==2){

	document.getElementById("humanisticas2").appendChild(signarum);
	}
	if(materias.semes==3){

	document.getElementById("humanisticas3").appendChild(signarum);
	}
	if(materias.semes==4){

	document.getElementById("humanisticas4").appendChild(signarum);
	}
	if(materias.semes==5){

	 document.getElementById("humanisticas5").appendChild(signarum);
	}
	if(materias.semes==6){

	 document.getElementById("humanisticas6").appendChild(signarum);
	}
	if(materias.semes==7){

	 document.getElementById("humanisticas7").appendChild(signarum);
	}
	if(materias.semes==8){

	 document.getElementById("humanisticas8").appendChild(signarum);
	}
	if(materias.semes==9){

	 document.getElementById("humanisticas9").appendChild(signarum);
	}
	if(materias.semes==10){
	document.getElementById("humanisticas10").appendChild(signarum);
	}
	if(materias.semes==11){
	document.getElementById("humanisticas11").appendChild(signarum);
	}
	if(materias.semes==12){
	document.getElementById("humanisticas12").appendChild(signarum);
	}
	}
	////////////////////////////////////////////////////////////////////////////
		if(materias.area =="Complementaria"){
	if(materias.semes==1){
	document.getElementById("complementarias1").appendChild(signarum);
	}
	if(materias.semes==2){
	document.getElementById("complementarias2").appendChild(signarum);
	}
	if(materias.semes==3){
	document.getElementById("complementarias3").appendChild(signarum);
	}
	if(materias.semes==4){
	document.getElementById("complementarias4").appendChild(signarum);
	}
	if(materias.semes==5){
	 document.getElementById("complementarias5").appendChild(signarum);
	}
	if(materias.semes==6){
	 document.getElementById("complementarias6").appendChild(signarum);
	}
	if(materias.semes==7){
	 document.getElementById("complementarias7").appendChild(signarum);
	}
	if(materias.semes==8){
	 document.getElementById("complementarias8").appendChild(signarum);
	}
	if(materias.semes==9){
	 document.getElementById("complementarias9").appendChild(signarum);
	}
	if(materias.semes==10){
	document.getElementById("complementarias10").appendChild(signarum);
	}	

	if(materias.semes==11){
	document.getElementById("complementarias11").appendChild(signarum);
	}	
	
	if(materias.semes==12){
	document.getElementById("complementarias12").appendChild(signarum);
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
	this.previous = previous;
	this.minute = minute;
	this.type = type;
	
	
	///container of signature
 	var signat = document.createElement('div');
	signat.innerHTML = matter;
	this.bloque = signat;
	
	//////////////////////////container signature code
	var codus=document.createElement("div");
	var node=document.createTextNode(codigo);
	codus.appendChild(node);
	signat.appendChild(codus);
	
	///////////////////////contains credit of signature/
	var credios=document.createElement("div");
	credios.id ="card1";
	var numus=document.createTextNode(credos);
	credios.appendChild(numus);
	signat.appendChild(credios);
	
	var cronos=document.createElement("div");
	cronos.id ="card2";
	var time=document.createTextNode(minute);
	cronos.appendChild(time);
	signat.appendChild(cronos);
	
	var typos=document.createElement("div");
	typos.id ="card3";
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
   Materia.prototype = {}
	   		
	  
   
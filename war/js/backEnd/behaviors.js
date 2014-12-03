$(function(){
	
	var el=document.getElementById("visor")
el.innerHTML="<iframe frameborder='0' width='1200px' height='1000px' src=\'index.html'></iframe>"
	
	$("#plus").click(function(){
		document.getElementById("loado").src = "addMatter.html";
		$("#curtain").fadeIn();
		$("#matterLoad").fadeIn();
		$("#myDiv").fadeOut();
		$("h1").fadeOut();
		$("#control").fadeOut();
	});	
	
	$("#edit").click(function(){
		document.getElementById("loado").src = "editMatter.html";
		$("#curtain").fadeIn();
		$("#matterLoad").fadeIn();
		$("#myDiv").fadeOut();
		$("h1").fadeOut();
		$("#control").fadeOut();
	});	
	
		$("#delete").click(function(){
		document.getElementById("loado").src = "deleteMatter.html";
		$("#curtain").fadeIn();
		$("#matterLoad").fadeIn();
		$("#myDiv").fadeOut();
		$("h1").fadeOut();
		$("#control").fadeOut();
	});	
	
	$("#noWay").click(function(){
		$("#curtain").hide();
		$("#matterLoad").hide();
		$("#myDiv").fadeIn();
		$("h1").fadeIn();
		$("#control").fadeIn();
	});	
	



});
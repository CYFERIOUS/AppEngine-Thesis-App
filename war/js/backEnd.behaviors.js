$(function(){
				
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
	
	$("#controller").click(function(){
		
		$( "#footer" ).slideToggle("slow");
		$("#controller").hide(800);
		$("#controller2").show(800);
			
  		});
		
	$("#controller2").click(function(){
		
		$( "#footer" ).slideToggle("slow");
		$("#controller").show(800);
    	$("#controller2").hide(800);
		
	});		
			
	$("#curtainMain").click(function(){
		$("#stage").show();
		$("#curtainMain").fadeOut();
    	$("#visorMain").fadeOut();
		
		
	});		
});

function detail(){
	$("#curtainMain").fadeIn();
	$("#visorMain").fadeIn();
	$("#stage").hide();
	document.getElementById("visorMain").src = "../img/common/info.jpg";
}

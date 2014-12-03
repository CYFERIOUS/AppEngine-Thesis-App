$(function(){
	$.ajax({
    url:"../../planstudium", 
    dataType:"json",
    type:"GET", 
    async:true, 
    success: function(data){
		
		  	$("#visir").html("&clubs;TOTAL AREAS="+data.Areas+"&nbsp;&nbsp;&clubs;TOTAL SEMESTRES="+data.Semestres+"&nbsp;&nbsp;&clubs;TOTAL MATERIAS="+data.Materias+"&nbsp;&nbsp;SM1:"+data.primero+"&nbsp;&nbsp;SM2:"+data.segundo+"&nbsp;&nbsp;SM3:"+data.tercero+"&nbsp;&nbsp;SM4:"+data.cuarto+"&nbsp;&nbsp;SM5:"+data.quinto+"&nbsp;&nbsp;SM6:"+data.sexto+"&nbsp;&nbsp;SM7:"+data.septimo+"&nbsp;&nbsp;SM8:"+data.octavo+"&nbsp;&nbsp;SM9:"+data.noveno+"&nbsp;&nbsp;SM10:"+data.decimo+"&nbsp;&nbsp;SM11:"+data.undecimo+"&nbsp;&nbsp;SM12:"+data.duodecimo);
		
    	$("#myDiv").html("<p>Nombre:<br>"+data.nombre[0]+"<p>Area:<br>"+data.area[0]+"<p>Pre-req:<br>"+data.Prereq[0]+"<p>Creditos:<br>"+data.creditos[0]+"<p>Semestre:<br>"+data.semestre[0]+"</p>");
   	},
		
    error: function(data) {
		$("#myDiv").html("sin elementos!!!");
   		}
	});	
});
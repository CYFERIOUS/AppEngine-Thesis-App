$(function() {
$.ajax({
    url:"../planstudium", 
    dataType:"json",
    type:"GET", 
    async:true, 
    success: function(data){
		
		$("#totalArea").html("&clubs;TOTAL AREAS="+data.object2.Areas+"&nbsp;&nbsp;");
		$("#totalSem").html("&clubs;TOTAL SEMESTRES="+data.object5.Semestres+"&nbsp;&nbsp;");
		$("#totalMat").html("&clubs;TOTAL MATERIAS="+data.object3.Materias+"&nbsp;&nbsp;");
		$("#totalBySem").html("&nbsp;&nbsp;SM1:"+data.object4.primero+"&nbsp;&nbsp;SM2:"+data.object4.segundo+"&nbsp;&nbsp;SM3:"+data.object4.tercero+"&nbsp;&nbsp;SM4:"+data.object4.cuarto+"&nbsp;&nbsp;SM5:"+data.object4.quinto+"&nbsp;&nbsp;SM6:"+data.object4.sexto+"&nbsp;&nbsp;SM7:"+data.object4.septimo+"&nbsp;&nbsp;SM8:"+data.object4.octavo+"&nbsp;&nbsp;SM9:"+data.object4.noveno+"&nbsp;&nbsp;SM10:"+data.object4.decimo+"&nbsp;&nbsp;SM11:"+data.object4.undecimo+"&nbsp;&nbsp;SM12:"+data.object4.duodecimo+"&nbsp;&nbsp");
		
		///getTotalByMat(data.object3.Materias);
		
    	$("#myDiv").html("<p>Nombre:<br>"+data.object1.nombre[0]+"<p>id:<br>"+data.object1.id[0]+"<p>Area:<br>"+data.object1.area[0]+"<p>Pre-req:<br>"+data.object1.prereq[0]+"<p>Creditos:<br>"+data.object1.creditos[0]+"<p>Semestre:<br>"+data.object1.semestre[0]+"</p>"+"<p>Typo:<br>"+data.object1.tipos[0]+"</p>"+"<p>Horas:<br>"+data.object1.horas[0]+"</p>");
   	},
		
    error: function(data) {
		$("#myDiv").html("sin elementos!!!");
   		}
});	
});

$(function() {
$.ajax({
    url:"../planstudium", 
    dataType:"json",
    type:"GET", 
    async:true, 
    success: function(data){
		
		getBuilder(data.object3.Materias,data.object5.Semestres);
	
   	},
		
    error: function(data) {
		alert("sinCarga");
   		}
});	
});

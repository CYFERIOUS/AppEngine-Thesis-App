$(function() {
	$.ajax({
		//data:{semestre:"5"},
		url:"../filtermateria", 
		dataType:"json",
		type:"GET", 
		async:true, 
		success: function(data){
		
		getDBFilters1(data.Sem.nombre,data.Sem.area,data.Sem.id,data.Sem.creditos,data.Sem.semestre,data.Sem.prereq,data.Sem.tipos,data.Sem.horas);
			
		},
			
		error: function(data) {
			alert("sinCarga");
			}
	});	
	
});

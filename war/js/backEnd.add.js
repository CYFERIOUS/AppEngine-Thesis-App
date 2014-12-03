function envio(){
	var datos = $("#materia").serialize();
	$.ajax({
		type:"POST",
		url: "../insertmateria",
		data:datos,  
		dataType:"json",
		async:true, 
		success: function(data) {               
			alert("DATOS RECIBIDOS");
		}
	});
}


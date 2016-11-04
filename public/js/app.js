var plantilla ="<div>" +
		"<p><strong>Nombre:</strong> __nombre__</p>" +
		"<p><strong>Apellido:</strong> __apellido__</p>" +
		"<p><strong>Edad:</strong> __edad__</p>" +
		"<p><strong>Fecha de Nacimiento:</strong> __fechaNac__</p>" +
		"<p><strong>Email:</strong> __email__</p>" +
		"<p><strong>Squad:</strong> __squad__</p>" +
		"<p><strong>Jedi Master:</strong> __jedi__</p>" +
	"</div>";

$(document).ready(function() {
	$.ajax({
		url: "http://localhost:5000/demo.json",
		type: "GET",
		success: function(response) {
			$("#datos").html(plantilla
				.replace("__nombre__", response.nombre)
				.replace("__apellido__", response.apellido)
				.replace("__edad__", response.edad)
				.replace("__fechaNac__", response.fechaNac)
				.replace("__email__", response.email)
				.replace("__squad__", response.squad)
				.replace("__jedi__", response.jedi));
			for (var i = 0, l = response.hobbies.length; i < l; i++) {
				hobbies += "<li>" + response.hobbies[i] + "</li>";
			}
			hobbies += "</ul>";
			$("#hobbies").html(hobbies);
		},
		error: function(error) {
			console.log(error);
		}
	});
});
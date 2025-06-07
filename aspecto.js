function setCookie(nombre, valor, dias) {
    var d = new Date();
    d.setTime(d.getTime() + (dias*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = nombre + "=" + encodeURIComponent(valor) + ";" + expires + ";path=/";
}

function getCookie(nombre) {
    var nombreEQ = nombre + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(nombreEQ) == 0) return decodeURIComponent(c.substring(nombreEQ.length,c.length));
    }
    return null;
}

function cambiarTema(guardar = true) {
    var estilo = document.getElementById("estilo");
    var opciones = document.getElementById("tema");
    var estiloSeleccionado = opciones.value;
    if (estiloSeleccionado === "0") {
        console.log("No se ha seleccionado un tema válido.");
        return;
    }
    if (guardar && estiloSeleccionado !== getCookie("tema")) {
        console.log("Guardando tema: " + estiloSeleccionado);
        setCookie("tema", estiloSeleccionado, 30);
        console.log("Tema guardado: " + estiloSeleccionado);
    }
    if (estiloSeleccionado === "1") {
        estilo.href = "aspecto.css";
    } else if (estiloSeleccionado === "2") {
        estilo.href = "aspecto2.css";
    } else if (estiloSeleccionado === "3") {
        estilo.href = "aspecto3.css";
    } else if (estiloSeleccionado === "4") {
        estilo.href = "aspecto4.css";
    }
    console.log("Tema cambiado a: " + estiloSeleccionado);
}

window.onload = function() {
    var temaGuardado = getCookie("tema");
    if (temaGuardado && temaGuardado !== "0") {
        var opciones = document.getElementById("tema");
        opciones.value = temaGuardado;
        cambiarTema(false);
        console.log("Tema guardado encontrado: " + temaGuardado);
    } else {
        console.log("No hay tema guardado o el tema es inválido.");
    }
};
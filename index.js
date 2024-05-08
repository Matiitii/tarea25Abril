/*Ejercicio 1


let usuario = prompt ('¡Ingrese su usuario!')
let contraseña = prompt ('¡Ingrese su contraseña!')


if ((usuario == 'juanGarcia23') && (contraseña == 'cJZoht3!')) {
    alert ('Bienvenid@' + usuario)
} else {
    alert ('Acceso denegado')
}


*/

/*Ejercicio 2








let notaExamen = Number (prompt ('¡Ingrese la nota de su examen!'))




let notaTrabajosPracticos = Number (prompt ('¡Ingrese la nota de su trabajo practico!'))




let asistencia = (prompt ('¡Ingrese si asistio a clases!') == 'true')








if ((notaExamen > 8) && (notaTrabajosPracticos >= 6) && (asistencia == true)){
    alert ('¡Aprobaste la materia!')
} else {
    alert ('Desaprobaste la materia..')
}


*/














//Ejercicio 3




let diaUsuario = prompt ('¿Que dia es hoy?')




let humedos = ['Lunes', 'Miercoles', 'Viernes']




let secos =  ['Martes', 'Jueves', 'Domingo']




let noPasa = 'Sabado'




if (humedos.indexOf(diaUsuario)>=0){
    alert('Saca la basura humeda!')
}
else
{
    if (secos.indexOf(diaUsuario)>=0){
        alert('Saca la basura seca!')
    }
    else
    {
       alert('No saques la basura!')
    }
}






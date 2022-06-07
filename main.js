//guardar el estado de la col activa
let columnaActiva = 1

//seleccionar las columnas
const columnas = document.querySelectorAll(".columna")

//Escuchar clicks en cada una de ellas

columnas.forEach((columna, indice) => {
    columna.addEventListener("click",function() {
        cambiarColumna(indice)
    })
   
});

//cambiar el estado de las columnas

function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}
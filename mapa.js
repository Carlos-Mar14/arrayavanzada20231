let estudiantes = [
    {
        id: 1,
        nombre:"Carlos",
        equipo: "NACIONAL"
    },
    {
        id:2,
        nombre:"Andres",
        equipo:"MEDELLIN"
    },
    {
        id:3,
        nombre:"Ana",
        equipo:"MEDELLIN"
    }
]

//Mapeando el arreglo de estudiantes
let mapa= estudiantes.map(estudiante => {
    estudiante.equipo="NACIONAL"
    estudiante.nota=4
    return estudiante
})
console.log(mapa)
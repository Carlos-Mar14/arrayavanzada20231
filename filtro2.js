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

//Filtrar los estudiantes que son hinchas del medellin
let filtro= estudiantes.filter(estudiante=> estudiante.equipo=="MEDELLIN")
console.log(filtro)
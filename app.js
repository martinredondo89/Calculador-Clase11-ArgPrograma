const botonesOperaciones = document.querySelectorAll(".botonOperacion");
const inputs = document.querySelectorAll("input");
const display = document.querySelector("#resultado");
const displayEstilo = document.querySelector("#display");
const temas = document.querySelectorAll(".tema");
console.log(temas);

const operacionesMatematicas = (primerValor, operacion, segundoValor) => {
    const resultado = eval (primerValor + operacion + segundoValor);
    return resultado;
}

const cambiarTema = (tema, pantalla) => {
    console.log("displayEstilo" + tema);
    pantalla.className = "displayEstilo" + tema;
}

botonesOperaciones.forEach(botonOperacion => {
    botonOperacion.addEventListener("click",()=>{
        try {
            const result = operacionesMatematicas(inputs[0].value, botonOperacion.value, inputs[1].value);
            console.log(result);
            display.innerHTML = result;
        } catch (error) {
            alert("Ingrese valores de manera correcta");
            console.log(error);
        }
    })
});

temas.forEach(tema => {
    tema.addEventListener("click",() =>{
        cambiarTema(tema.id,displayEstilo);
    })
})
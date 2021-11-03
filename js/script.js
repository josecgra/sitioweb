function crearParrafo() {
    let par = document.createElement('p');
    par.textContent = "Este es mi parrafo desde JS";
    document.body.appendChild(par);
}

const btn = document.querySelector("button");
btn.addEventListener('click',crearParrafo);
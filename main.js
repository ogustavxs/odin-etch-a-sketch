// Seleciona o elemento com a classe 'container'
const container = document.querySelector('.container');
const inputsps = document.querySelector("#sps")
const buttonsps = document.querySelector('#change')
const clear = document.querySelector("#clear")

function randomHsl() {
    return `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
}

let value = 16

function getSize () {
    value = Number(inputsps.value)
    inputsps.value = ''
    container.innerHTML = ''
    if (value <= 0) {
        value = 2
    } else if (value > 100) {
        value = 100
    } else if (!Number.isInteger(value)) {
        value = Math.floor(value)
    }
    container.style.cssText = `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr);`;

    for (let i = 1; i <= value * value; i++) {
        // Cria um novo elemento div
    
        const div = document.createElement('div');
        div.id = 'pixel'
        // Adiciona estilo CSS ao div
        div.style.cssText = "border: 1px solid black";
        
        // Adiciona um evento ao div para mudar a cor de fundo ao clicar
        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = randomHsl();
        });
        
        // Adiciona o div ao container
        container.appendChild(div);
    }
    
}

function clear_div () {
    container.innerHTML = ''
    container.style.cssText = `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr);`;
    for (let i = 1; i <= value * value; i++) {
        // Cria um novo elemento div
    
        const div = document.createElement('div');
        div.id = 'pixel'
        // Adiciona estilo CSS ao div
        div.style.cssText = "border: 1px solid black";
        
        // Adiciona um evento ao div para mudar a cor de fundo ao clicar
        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = randomHsl();
        });
        
        // Adiciona o div ao container
        container.appendChild(div);
    }
}

// Loop para criar 256 divs (16x16)
for (let i = 1; i <= 16 * 16; i++) {
    // Cria um novo elemento div

    const div = document.createElement('div');
    div.id = 'pixel'
    // Adiciona estilo CSS ao div
    div.style.cssText = "border: 1px solid black";
    
    // Adiciona um evento ao div para mudar a cor de fundo ao clicar
    div.addEventListener('mousedown', () => {
        div.style.backgroundColor = randomHsl();
    });
    
    // Adiciona o div ao container
    container.appendChild(div);
}


clear.addEventListener('click', clear_div)
buttonsps.addEventListener('click', getSize)
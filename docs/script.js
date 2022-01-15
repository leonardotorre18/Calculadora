'use strict'; 

// ----- ----- Este Objeto almacena los datos ----- -----

var state = {
    Ans: 0,
    OperationType: ''
}

// ----- ------ Selectores de Botones ------ ------

const screen = document.getElementById('screen');

const numbersButtons = document.querySelectorAll('.numbers');

const clearButton = document.getElementById('clear');
const pointButton = document.getElementById('point');

const addButton = document.getElementById('add');
const sustractButton = document.getElementById('sustract')
const multipleButton = document.getElementById('multiple')
const divideButton = document.getElementById('divide')
const equalButton = document.getElementById('equal');

// ----- ----- Funciones para Manejar obtener y enviar datos la pantalla ------ -----

const getScreenValue = () => parseFloat(screen.innerText);

const setScreenValue = (value = 0) => screen.innerText = value;

const getButtonValue = button => parseInt(button.innerText);

const HandlerOperations = operation => {
    state.OperationType = operation.toString();
    state.Ans = getScreenValue();
    setScreenValue()
}


// ----- ----- Agregar eventos a los botones numéricos ----- -----

numbersButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        if(state.OperationType === 'result'){
            setScreenValue('')
            state.OperationType = ''
        }
        if(getScreenValue() === 0) {
            if (screen.innerText !== '0.') setScreenValue('')
        }
        screen.innerText += getButtonValue(button)
    })
});


pointButton.addEventListener('click', () => {
    if(screen.innerText.includes('.') === false) screen.innerText += '.';
    if(state.OperationType === 'result') state.OperationType = '';
})

// ----- ----- Eventos para botones para las operaciones ----- -----

addButton.addEventListener('click', ()=> {
    HandlerOperations('Add')
})
sustractButton.addEventListener('click', ()=> {
    HandlerOperations('Sustract')
})
multipleButton.addEventListener('click', ()=> {
    HandlerOperations('Multiple')
})
divideButton.addEventListener('click', ()=> {
    HandlerOperations('Divide')
})

clearButton.addEventListener('click', () =>{
    // Este Código es solo para que se elimine el último dígito de manera individual
    // setScreenValue(screen.innerText.slice(0, -1));
    // if (screen.innerText == '') setScreenValue();

    // Este código es para limpiar la pantalla
    setScreenValue()
})

// ----- ----- Eventos para Botón de Resultado ----- -----

equalButton.addEventListener('click', ()=> {
    
    if (state.OperationType === 'Add') {
        setScreenValue(state.Ans + getScreenValue())
        state.Ans = getScreenValue();
    } 
    else if (state.OperationType === 'Sustract') {
        setScreenValue(state.Ans - getScreenValue())
        state.Ans = getScreenValue();
    } 
    else if (state.OperationType === 'Multiple') {
        setScreenValue(state.Ans * getScreenValue())
        state.Ans = getScreenValue();
    } 
    else if (state.OperationType === 'Divide') {
        setScreenValue(state.Ans / getScreenValue())
        state.Ans = getScreenValue();
    } 
    else {
        state.Ans = getScreenValue();
    }
    state.OperationType = 'result';
})
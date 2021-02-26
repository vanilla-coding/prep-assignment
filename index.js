const askQuestion = (event) => {
    event.preventDefault();
    
    const question = event.target[0].value;
    const questionBox = document.querySelector('.questionBox');
    questionBox.innerHTML += `<div>${question}</div>`

    event.target[0].value = '';
}
const form = document.getElementById('form-activity');
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgDisapproved = '<img src="./images/reprovado.png" alt="Emoji celebrando"/>';

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeActivity = document.getElementById('nome-activity');
    const inputNotaActivity = document.getElementById('nota-activity');

    
    let line = '<tr>';
    line += '<td> ${inputNomeActivity.value}</td>';
    line += '<td> ${inputNotaActivity.value}</td>';
    line += '<td> ${inputNotaActivity.value >= 7 ? imgApproved : imgDisapproved}</td>';
    line += '</tr>';

    lines += line;

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;

    inputNomeActivity.value = '';
    inputNotaActivity.value = '';

})

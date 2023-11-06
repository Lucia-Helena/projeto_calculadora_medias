const form = document.getElementById('form-activity');
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgDisapproved = '<img src="./images/reprovado.png" alt="Emoji celebrando"/>';

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNotaActivity = document.getElementById('nota-activity');
    const inputNomeActivity = document.getElementById('nome-activity');


    let line = '<tr>';
    line += '<td>${inputNameActivity.value}</td>'; 
    line += '<td>${inputNotaActivity.value}</td>';
    line += '<td>${inputNotaActivity.value >=7 ? "Approved" : "disapproved"}</td>';
    line += '</tr>';

    lines += line;

    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = lines;

    inputNameActivity.value = '';
    inputNotaActivity.value = '';

})

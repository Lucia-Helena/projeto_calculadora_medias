const form = document.getElementById('form-activity');
const imgApproved = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgDisapproved = '<img src="./images/reprovado.png" alt="Emoji celebrando"/>';
const activity = [];
const nota = [];
const spanApproved = '<span class="resultado aprovado">Aprovado</span>';
const spanDisapproved = '<span class="resultado reprovado">Reprovado</span>';
const notaMinimum = parseFloat(prompt("Digite a nota mínima:"));
let line = '';  // Remova a redeclaração aqui


form.addEventListener('submit', function (e) {
    e.preventDefault();


    addLine();
    updateTable();
    updateAverageFinal();
});


function addLine() {
    const inputNomeActivity = document.getElementById('nome-activity');
    const inputNotaActivity = document.getElementById('nota-activity');


    if (activity.includes(inputNomeActivity.value)) {
        alert(`A atividade: ${inputNomeActivity.value} já foi inserida`);
    } else {
        activity.push(inputNomeActivity.value);
        nota.push(parseFloat(inputNotaActivity.value));

        line += `<tr>`;
        line += `<td> ${inputNomeActivity.value}</td>`;
        line += `<td> ${inputNotaActivity.value}</td>`;
        line += `<td> ${inputNotaActivity.value >= notaMinimum ? imgApproved : imgDisapproved}</td>`;
        line += `</tr>`;
    }


    inputNomeActivity.value = '';
    inputNotaActivity.value = '';
}


function updateTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = line;
}


function updateAverageFinal() {
    const mediaFinal = calculateMediaFinal();
    document.getElementById(`media-final-valor`).innerHTML = mediaFinal;
    document.getElementById(`media-final-result`).innerHTML = mediaFinal >= notaMinimum ? spanApproved : spanDisapproved;
}


function calculateMediaFinal() {
    let somaDasNota = 0;
    for (let i = 0; i < nota.length; i++) {
        somaDasNota += nota[i];
    }


    return somaDasNota / nota.length;
}

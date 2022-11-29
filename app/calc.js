document.getElementById("valor-calculado").style.display = "none"
document.getElementById("each").style.display = "none"

function calculateDinner(){
    let totalConta = document.getElementById("total-conta").value
    let taxaServico = document.getElementById("taxa-servico").value
    let numeroPessoas = document.getElementById("numero-pessoas").value

    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        return alert("Ops... tem algo errado em seus valores, preencha-os corretamente!")
    }
}

document.getElementById("calcular").onclick = function(){
    calculateDinner()
}
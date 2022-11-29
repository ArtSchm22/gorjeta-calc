document.getElementById("valor-calculado").style.display = "none"
document.getElementById("each").style.display = "none"

function calculateDinner(){
    let totalConta = document.getElementById("total-conta").value
    let taxaServico = document.getElementById("taxa-servico").value
    let numeroPessoas = document.getElementById("numero-pessoas").value

    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        return alert("Ops... tem algo errado em seus valores, preencha-os corretamente!")
    }

    if(numeroPessoas === "" || numeroPessoas <= 1){
        numeroPessoas = 1
        document.getElementById("each").style.display = "none"
    } else {
        document.getElementById("each").style.display = "block"
    }

    let totalTaxaServico = (totalConta * taxaServico) / numeroPessoas
    let total = totalTaxaServico + (totalConta / numeroPessoas)
    
    total = Math.round(total * 100) / 100
    total = total.toFixed(2)


    document.getElementById("valor-calculado").style.display = "block"
    document.getElementById("valor-por-cabeca").innerHTML = total
}

document.getElementById("calcular").onclick = function(){
    calculateDinner()
}
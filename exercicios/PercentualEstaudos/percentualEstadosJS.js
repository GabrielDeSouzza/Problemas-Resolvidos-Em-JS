//#region Calculos
const estados = [
    { uf: "SP", receita: 67836.43 },
    { uf: "RJ", receita: 36678.66 },
    { uf: "MG", receita: 29229.88 },
    { uf: "ES", receita: 27165.48 },
    { uf: "Outros", receita: 19849.53 }

]
let total = 0
for (i = 0; i < estados.length; i++) {
    total = total + estados[i].receita
}




const participacao = new Array()
estados.forEach(estado => {
    participacao.push({ 
        "estado": estado.uf,
        "participacao": (estado.receita/total*100).toFixed(2),
        receita: estado.receita
    })
})
//#endregion

//#endregion Tabela
const table = document.querySelector('#data-table')
participacao.forEach(element =>{
    const linha = document.createElement("tr")
    const coluna1 = document.createElement("td")
    const coluna2 = document.createElement("td")
    const coluna3 = document.createElement("td")
    coluna1.innerText= element.estado
    coluna2.innerText ='R$ '+element.receita
    coluna3.innerText = element.participacao
    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    linha.appendChild(coluna3)
    table.appendChild(linha)
})
//#endregion

//#region  Grafico

let dados = {
    datasets: [{
        data: participacao.map(element=>{
            return element.participacao
        }),
        backgroundColor: ['rgb(102, 220, 54)', 'rgb(255, 199, 132)', 'rgb(55, 99, 132)','rgb(140, 14, 122)','rgb(255, 99, 132)']
    }],
    labels: 
        participacao.map(element=>{
            console.log(element.estado)
            return element.estado
        })
     
}

const ctx = document.querySelector('#grafico')
let grafico = new Chart(ctx,{
    type: 'pie',
    data: dados,
})
//#endregion
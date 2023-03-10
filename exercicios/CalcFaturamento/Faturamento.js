async function readJson() {
    const arqjson = await fetch("dados.json")

    const data = await arqjson.json();

    return data
}

async function menorFaturamento(){
    const faturamento = await readJson()
    let menorFatu =faturamento[0].valor;
    for(i = 0; i < faturamento.length;i++){
        if(faturamento[i].valor==0){

        }
        else{
            if(menorFatu > faturamento[i].valor)
                menorFatu = faturamento[i].valor
        }
    }
    document.querySelector('#menorFatu').innerHTML+=" R$"+menorFatu.toFixed(2)
}

async function maiorFaturamento(){
    const faturamento = await readJson()
    let maiorFatu =0;
    for(i = 0; i < faturamento.length;i++){
        if(faturamento[i].valor==0){

        }
        else{
            if(maiorFatu < faturamento[i].valor)
                maiorFatu = faturamento[i].valor
        }
    }
    document.querySelector('#maiorFatu').innerHTML+=" R$"+ maiorFatu.toFixed(2)
}

async function maiorQMedia(){
    const faturamento = await readJson()
    let mediaFatu =0;
    let totalFatu=0;
    let diasMaiorQMedia=0;
    for(i = 0; i < faturamento.length;i++){
        totalFatu = totalFatu + faturamento[i].valor
    }
    mediaFatu = (totalFatu/faturamento.length)
    for(j =0; j < faturamento.length;j++){
        if(faturamento[j].valor > mediaFatu)
            diasMaiorQMedia++;
    }
    document.querySelector('#maiorQMedia').innerHTML+=" "+ diasMaiorQMedia+" dias"
}


menorFaturamento()
maiorFaturamento()
maiorQMedia()



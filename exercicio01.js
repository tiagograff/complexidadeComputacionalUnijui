let limite = Number(prompt('digite o limite dos numeros'));
let tamanho = Number(prompt('digite o tamanho do vetor'));
let valor = Number(prompt('digite o valor que desejas encontrar'));
let vetor = [];
let vetorSorteado = []

function sorteiaVetor(tamanho){

    let comeco = performance.now(); 
    for (let i = 0; i < tamanho; i++) {
        let numero = Math.floor(Math.random() * (limite+ 1));
        vetor.push(numero);
    }

    let fim = performance.now(); 
    let tempo = (fim - comeco); 

    return {vetor: vetor, tempo: tempo}
    
}

function verificaExiste(valor, vetor, tamanho){

    let i = 0;
    while((i < tamanho) && (valor != vetor[i])){
        i++;
    }
    if (i < tamanho){
        return true
    }
    return false

}

function geraVetorVerificado(tamanho, vetorGerado){
    let vetor = [...vetorGerado];
    let valor;
    let i = 0;
    while(i < tamanho){
        valor = sorteiaVetor(tamanho);
        if (verificaExiste(valor, vetor, i) === 0 ){
            vetor[i] = valor;
            i++;
        }
    }
    return vetor;
}

let resultado = sorteiaVetor(tamanho);
vetorSorteado = resultado.vetor;
let verificaResultado = verificaExiste(valor, vetorSorteado, tamanho);

console.log(`Vetor sorteado: [${resultado.vetor}]`);
console.log(`Tempo necessário: ${resultado.tempo}ms`);
console.log(`valores verificados: ${geraVetorVerificado(tamanho, resultado.vetor)}`);
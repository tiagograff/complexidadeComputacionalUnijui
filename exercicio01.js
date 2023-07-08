let quantidadeDeAmostras = Number(prompt('quantidade de amostras'));
let tamanho = Number(prompt('digite o tamanho do vetor'));
let vetorSorteado = [];
let somaErro = 0;
let somaTempo = 0;

function Amostras(){
    
}

function sorteiaVetor(tamanho){
    let vetor = [];
    let tempo = 0;
    let comeco = performance.now(); 
    let erro = 0;
    let numero = Math.floor(Math.random() * (tamanho))+ 1;
    vetor.push(numero);
    let i = 1;
    while (i < tamanho) {
        numero = Math.floor(Math.random() * (tamanho))+ 1;
        if (verificaExiste(numero, vetor, i)){
            erro++;

        }else{
            vetor.push(numero);
            i++;
        }
    }

    let fim = performance.now(); 
    tempo = (fim - comeco); 

    return {vetor: vetor, tempo: tempo, erro: erro};
    
}

function verificaExiste(valor, vetor, tamanho){

    let i = 0;
    while((i < tamanho) && (valor != vetor[i])){
        i++;
    }
    if (i < tamanho){
        return true;
    }
    return false;

}

function main(){

    let mediaErro = 0;
    let mediaTempo = 0;

// console.log(`quantidade de amostras: ${quantidadeDeAmostras}`)

    for (let i = 0; i < quantidadeDeAmostras; i++){
        
        let resultado = sorteiaVetor(tamanho);
        vetorSorteado = resultado.vetor;
        // console.log(`---------------------------------------------------------------- ${i+1} ----------------------------------------------------------------`);
        // console.log(`Vetor sorteado: [${resultado.vetor}]`);
        // console.log(`Tempo necessário: ${resultado.tempo}ms`);
        // console.log(`Tentativas: ${resultado.erro}`);
        mediaErro = mediaErro + resultado.erro;
        mediaTempo = mediaTempo + resultado.tempo;
    
    }
    
    mediaErro = mediaErro/quantidadeDeAmostras;
    mediaTempo = mediaTempo/quantidadeDeAmostras;

    return{mediaErro: mediaErro, mediaTempo: mediaTempo};
}

let resultadoMedia = main()
// console.log(`--------------------------------------------------------------------------------------------------------------------------------`);
console.log(`quantidade de amostras: ${quantidadeDeAmostras}`)
console.log(`Média de erros: ${resultadoMedia.mediaErro}`);
console.log(`Média de tempo: ${resultadoMedia.mediaTempo}`);
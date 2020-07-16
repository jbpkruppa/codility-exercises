

function solution(A) {
    var min = 1;
    var tamanho = A.length;
    var conteudo;
    A.sort((a, b)=>a-b); //ordena na ordem NUMERICA crescente

    for (let i=0; i<tamanho; i++){
        conteudo = A[i];
        console.log(`${conteudo} : ${min}`)
        if (conteudo===min) min++;
    }

    return min;

}

let matriz = []
for (let i =0; i <= 100; i++){
    matriz.push(i);
}
for (let i =102; i <= 200; i++){
    matriz.push(i);
}
//console.log(matriz);

console.log(solution(matriz));
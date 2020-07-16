//https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/start/


// https://github.com/yaseenshaik/codility-solutions-javascript/blob/master/MaxDoubleSliceSum.md
function solution(A){ // melhor solução O(n) -> 100%
    let sumsL = A.map(i => 0); // preenche a nova variavel do mesmo tamanho de A, cheia de 0.
    let sumsR = new Array(A.length).fill(0); //faz a mesma coisa da linha acima


    for (let iL = 1, iR = A.length-2; iR >= 2; iL++, iR--) { // inicializa duas variaveis (iL = segundo elemento e iR para o penultimo elemento), a cada operação aumenta iL e diminue iR
        sumsL[iL] = Math.max(0, sumsL[iL-1] + A[iL]); //soma com a soma a esquerda de sumsL
        sumsR[iR] = Math.max(0, sumsR[iR+1] + A[iR]); //soma com a soma a direita de sumsR
    }
    //console.log(sumsL);
    //console.log(sumsR);

    //simula a soma de das posicoes extremas
    let max = sumsL[0] + sumsR[2]; 

    //simula todas as somas possiveis e compara par ver qual é maior
    for (let i = 2; i < A.length-1; i++) {
        max = Math.max(max, sumsL[i-1] + sumsR[i+1]); //fica com o valor maio entre max e a nov simulação
    }

    return max;
}


function secondSolution(A) { // 53% -> correção 100% e performance 14%
    //using prefix sum!
    prefixSumArr = [];
    for (let i =0; i< A.length; i++){
        if (i==0) prefixSumArr.push(A[i]);
        else prefixSumArr.push(A[i]+prefixSumArr[i-1]);
    }
    console.log(prefixSumArr);

    let greaterSum;

    for (let i = 0; i < A.length-2;i++){

        for (let j = i+2; j<A.length; j++){
            let subArr = A.slice(i+1,j);
            let Y = Math.min(...subArr);
            console.log(`prefixSumArr[${j-1}]: ${prefixSumArr[j-1]} - prefixSumArr[${i}]: ${prefixSumArr[i]} - Y: ${Y}`);
            let sum = prefixSumArr[j-1]-prefixSumArr[i]-Y;
            console.log(sum);

            if(greaterSum==undefined||greaterSum<sum) greaterSum=sum;

        }
    }
    return greaterSum;
}

function firstSolution(A) { //7% :(  erro ao calcular a soma!
    let tamanho = A.length;
    let soma = sum(A);
    let maiorSoma = 0;
    for (let X = 0; X < tamanho - 2; X++) {
        for (let Y = X + 1; Y < tamanho - 1; Y++) {
            for (let Z = Y + 1; Z < tamanho; Z++) {
                let total = soma - A[X] - A[Y] - A[Z];
                if (total > maiorSoma) maiorSoma = total;
            }
        }

    }


    return maiorSoma;
}

var sum = (matriz) => {
    return matriz.reduce((a, b) => {
        return a + b;
    }, 0);
}

let aleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




//stress
// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−10,000..10,000].
console.log('gerando numeros...');

let N = aleatorio(3, 100000);
N = 100;
console.log(`N: ${N}`);
let matriz = Array(N);
for (let i = 0; i < N; i++) { //populando matriz
    matriz[i] = aleatorio(-10000, 10000);
}
//console.log(`matriz: `);
//console.log(matriz);

// matriz = [3,2,6,-1,4,5-1,2];
console.log('calculando resposta...')

//console.log(solution(matriz));


let A = []
A[0] = 3
A[1] = 2
A[2] = 6
A[3] = -1
A[4] = 4
A[5] = 5
A[6] = -1
A[7] = 2
//A= [5, 5, 5];
console.log(A);
console.log(solution(A));



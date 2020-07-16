// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/

function solution(A){ // 100% https://app.codility.com/demo/results/trainingNHDCYU-2PQ/
    let n = A.length;
    let minVbeforeArr = [A[0]];
    let maxVAfterArr = []
    maxVAfterArr[n-1] = A[n-1];

    // a logica aqui é percorrer os registros da esquerda para a direita para achar o minimo valor ate aquela posicao
    // e da direita para esquerda para achar o maximo valor a partir daquela posição

    // APLICAVEL EM PROBLEMAS QUE DEMANDEM LUCRO TEMPORAL (COMPRA A MENOR VALOR POSSIVEL E VENDA A MAIOR VALOR POSSIVEL)

    for (let i = 0, j = n-1; i<n; i++, j--){
        if(i>0){ // ja informamos a posicao 0 para minArr
            minVbeforeArr[i] = Math.min(A[i], minVbeforeArr[i-1]); // grava sempre o menor valor entre o do indice e o menor até então.
        }
        if (j<n-1){ // ja informamos a posição n-1 para maxArr
            maxVAfterArr[j] = Math.max(A[j], maxVAfterArr[j+1]); // grava sempre o maior valor entre o do indice e o maior a partir dele.
        }

    }

    // apurado os valores minimos ate cada indice e maximos a partir de cada indice, calcular os lucros...
    let profit = 0; 
    for(i=0; i<n; i++) {
        profit = Math.max(profit, maxVAfterArr[i] - minVbeforeArr[i]);
    }
    
    return profit;
}

function goodSolution(A) {  // ESTUDAR!!!!
    if (A.length < 2) { // if is there only one value, cannot buy and sell with profit
        return 0;
    }
    var msf = 0;
    var meh = 0;
    for (var i = 1; i < A.length; i++) {
        meh = Math.max(0, meh + A[i] - A[i - 1]);
        msf = Math.max(msf, meh);
    }
    return msf > 0 ? msf : 0;
}

function firstSolution(A) {
    let min = Math.min(...A);
    let max = Math.max(...A);

    let minIndex = A.indexOf(min);
    let maxIndex = A.lastIndexOf(max);
    let biggerDiff = 0;
    if (maxIndex > minIndex) return max - min;
    else {

        //using prefix sum!
        prefixSumArr = [];
        for (let i = 0; i < A.length; i++) {
            if (i == 0) prefixSumArr.push(A[i]);
            else prefixSumArr.push(A[i] + prefixSumArr[i - 1]);
        }


        for (let i = 0; i < A.length - 1; i++) {
            for (let j = i + 1; j < A.length; j++) {
                if (A[j] - A[i] > biggerDiff) biggerDiff = A[j] - A[i];
            }
        }


    }

    return biggerDiff;
}

let A = [];
A[0] = 23171
A[1] = 21011
A[2] = 21123
A[3] = 21366
A[4] = 21013
A[5] = 21367

console.log(solution(A));
console.log('expected 356');
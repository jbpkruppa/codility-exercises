

function solution(A) {
    if (A.length == 1) return A[0];
    let somas = [];
    let ultimoLadoA;
    let ultimoLadoB;

    for (let i = 1; i < A.length; i++) { //pula o 1o numero

        if (i == 1) {
            ultimoLadoA = A[0];
            ultimoLadoB = 0;
            
            for (let j = 1; j < A.length; j++) { // ladoA
                ultimoLadoB += A[j];
            }
            let diferenca = Math.abs(ultimoLadoA - ultimoLadoB);
            somas[i] = diferenca;
        } else{
            ultimoLadoA += A[i-1];
            ultimoLadoB -= A[i-1];
            let diferenca = Math.abs(ultimoLadoA - ultimoLadoB);
            console.log(`${ultimoLadoA}-${ultimoLadoB}=${diferenca}`);
            somas[i] = diferenca;
           
        }
        

    }
    console.log(somas);
    let menor;
    for (let i = 1; i < somas.length; i++) {
        if (menor == undefined) menor = somas[i];
        if (somas[i] < menor) menor = somas[i];
    }

    return menor;
}

console.log(solution([3, 1, 2, 4, 3]));
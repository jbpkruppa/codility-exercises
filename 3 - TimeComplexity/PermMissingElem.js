
function solution(A) {
    A.sort((a, b) => a - b);
    let tamanho = A.length;
    if (tamanho == 0) {
        return 1;
    } else {
        if (A[0] != 1) return 1;

        for (let i = 0; i < tamanho; i++) {
            let atual = A[i];
            let proximo = A[i + 1];
            let proximoEsperado = atual + 1;

            if (proximoEsperado != proximo) return proximoEsperado;
        }

        return (A[A.length - 1] + 1);
    }

}
let A = [];

A[0] = 2
A[1] = 3
A[2] = 1
A[3] = 5
A[4] = 6 
A[5] = 12 
A[6] = 7 
A[7] = 8 
A[8] = 9 
A[9] = 10 
A[10] = 11 
console.log(solution(A));
// https://app.codility.com/programmers/lessons/16-greedy_algorithms/max_nonoverlapping_segments/
function solution(A,B) {

    if (A.length === 0) {
        return 0;
    }
    let i = 0;
    let count = 1;
    let last = 0;

    last = B[0];

    for (i = 1; i < A.length; i++) {
        if (A[i] > last) {
            count++;
            last = B[i];
        }
    }

    return count;
}

//minha resposta deu errado pois eu fiz o sort.
function mySolution(A, B) { //70% https://app.codility.com/demo/results/trainingDFBK8M-RXX/
    let size = A.length;
    if (size == 0) return 0;
    let together = new Array(size);
    for (let i = 0; i < size; i++) {
        together[i] = [A[i], B[i]];
    }
    together.sort((a, b) => a[0] - b[0]);
    console.log(together);
    let counter = 1;
    let end = together[0][1];
    for (let i = 0; i < size; i++) {
        if (together[i][0] > end) {
            end = together[i][1];
            counter++;
        }
    }

    return counter;

}

let A = [];
let B = [];

A[0] = 1;
A[1] = 3;
A[2] = 7;
A[3] = 9;
A[4] = 9;

B[0] = 5;
B[1] = 6;
B[2] = 8;
B[3] = 9;
B[4] = 10;

console.log(solution(A, B));
console.log('expected 3');

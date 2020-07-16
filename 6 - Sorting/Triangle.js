// https://app.codility.com/programmers/lessons/6-sorting/triangle/

function solution(A) { // 100% https://app.codility.com/demo/results/trainingMGR5QZ-KZR/
    let tamanho = A.length;
    
    // Sort Z-A
    A.sort(function(a, b){
        return b - a; 
    });
    
    for(let i=0; i<tamanho - 2; i++) {
        let P = i, Q= i+1, R= i+2;
        let cond1 = A[P] + A[Q] > A[R];
        let cond2 = A[Q] + A[R] > A[P];
        let cond3 = A[R] + A[P] > A[Q];
        if (cond1 && cond2 && cond3){
            return 1;
        }
    }
    return 0;
}

let A = [];
A[0] = 10;
A[1] = 2;
A[2] = 5;
A[3] = 1;
A[4] = 8;
A[5] = 20;

console.log(solution(A));
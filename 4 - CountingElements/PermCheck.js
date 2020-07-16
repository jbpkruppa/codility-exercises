// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b)=>a-b);
    for (let i =0; i < A.length; i++){
        if(A[i]!=i+1) return 0;
    }
    return 1;
}

let A = [];
A[0] = 4
A[1] = 1
A[2] = 3
A[3] = 2

console.log(solution(A));
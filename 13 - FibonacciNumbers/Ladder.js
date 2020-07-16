// https://app.codility.com/programmers/lessons/13-fibonacci_numbers/ladder/
// explanation: https://www.youtube.com/watch?v=5o-kdjv7FD0

function solution(A, B) {

    let i = 0;
    let result = [];
    let steps = [];
    let maxA = Math.max(...A);
    let maxB = Math.max(...B);

    steps[0] = 1;
    steps[1] = 1;

    for (i = 2; i <= maxA; i++) {
        steps[i] = (steps[i - 1] + steps[i - 2]) % Math.pow(2, maxB); // calculate  each step ways modulo 2 pow maxB
    }
    
    for (i = 0; i < A.length; i++) {
        let div = steps[A[i]] & (Math.pow(2, B[i]) - 1); // bitwise operation
        result.push(div);
    }

    return result;
}


// by this explanation, n ways of reaching the top is a fibonacci sequence. Stoped in modulo part, didn understand...
function mySolution(n) {
    if (n == 0 || n == 1) return 1;
    let a;
    let b;

    a = 1;
    b = 1;
    let c;
    for (let i = 2; i <= n; i++) { // each number is equal (n-1) + (n-2)
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

let A = [];
let B = [];
A[0] = 4;
A[1] = 4;
A[2] = 5;
A[3] = 5;
A[4] = 1;

B[0] = 3;
B[1] = 2;
B[2] = 4;
B[3] = 3;
B[4] = 1;

console.log(solution(A,B));
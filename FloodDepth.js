//

function solution(A) {
    const size = A.length;
    let max = -Infinity;
    let secondMax = -Infinity;
    let lowerbetween = Infinity;
    let maxDepth = 0;

    for (let i = 0; i < size; i++) {
        if (A[i] > max) {
            secondMax = max;
            max = A[i];
            if (secondMax - lowerbetween > maxDepth) maxDepth = secondMax - lowerbetween;
            lowerbetween = max;
            secondMax = -Infinity;
            
        } else {
            if (A[i] > secondMax) {
                secondMax = A[i];
                if (secondMax - lowerbetween > maxDepth) maxDepth = secondMax - lowerbetween;
            }
        }
        if (A[i] < lowerbetween) lowerbetween = A[i];
        console.log(`max: ${max}, secondMax: ${secondMax}, lowerBetween: ${lowerbetween}, maxDepth: ${maxDepth}`);
    }

    return maxDepth;
}

let A = [];

A = [10, 9, 8, 7, 6, 7, 5, 1, 4];
console.log(solution(A));
console.log('expected 3');

A = [];
A[0] = 1
A[1] = 3
A[2] = 2
A[3] = 1
A[4] = 2
A[5] = 1
A[6] = 5
A[7] = 3
A[8] = 3
A[9] = 4
A[10] = 2

console.log(solution(A));
console.log('expected 2');
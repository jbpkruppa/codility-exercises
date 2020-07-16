//https://app.codility.com/programmers/lessons/15-caterpillar_method/min_abs_sum_of_two/
function solution(A) {
    let positives = [];
    let negatives = [];
    let i = 0;
    let min = 0;

    let start = 0;
    let end = 0;

    if (A.length === 1) {
        return Math.abs(A[0] + A[0]);
    }

    A.sort(function (a, b) {
        return a - b;
    });

    for (i = 0; i < A.length; i++) {
        if (A[i] < 0) {
            negatives.push(A[i]);
        } else {
            positives.push(A[i]);
        }
    }

    negatives.sort(function (a, b) {
        return b - a;
    });

    if (positives.length === 0) {
        return Math.abs(2 * negatives[0]);
    }

    if (negatives.length === 0) {
        return 2 * positives[0];
    }

    if (positives[0] === 0) {
        return 0;
    }

    min = positives[0] * 2;

    for (i = 0; i < negatives.length; i++) {
        start = 0;
        end = positives.length - 1;
        let neg = A[i];

        while (start <= end) {
            let mid = parseInt((start + end) / 2);
            let pos = positives[mid];
            let sum = Math.abs(neg + pos);

            if (min > sum) min = sum;

            if (pos > Math.abs(neg)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return min;
}

// apesar de não usar o caterpillar, funciona muito bem!
function myBetterSolution(A) { //100%. https://app.codility.com/demo/results/trainingJSWEQA-ZPQ/

    let minVal = Infinity;

    A.sort((a, b) => Math.abs(a) - Math.abs(b)); // sort ascending not analising signal
    if (A.length ==1) return Math.abs(2*A[0]);
    if (A[0]==0) return 0;
    console.log(A);
    for (let i = 0; i < A.length; i++) {
        
        let result = Math.abs(2*A[i]);
        if (i<A.length-1) result = Math.min(result, Math.abs(A[i]+A[i+1]));
        if (result == 0) return 0;
        if (result < minVal) minVal = result;
    }
    return minVal;
}


function mySolution(A) { //45%, maybe get better tring to sort some tricky way
    let start = 0;
    let end = -1;
    let minVal = Number.MAX_SAFE_INTEGER;

    A.sort((a, b) => Math.abs(a) - Math.abs(b)); // sort ascending not analising signal
    console.log(A);
    for (start; start < A.length; start++) {
        let first = A[start];
        end = start - 1;
        while (end++ < A.length) {
            let second = A[end];
            let result = Math.abs(second + first);
            if (result == 0) return result;
            if (result < minVal) minVal = result;
        }
    }
    return minVal;
}

let A = [];
A[0] = 1;
A[1] = 4;
A[2] = -3;
console.log(myBetterSolution(A));
console.log('expected 1');

A = [];
A[0] = -8
A[1] = 4
A[2] = 5
A[3] = -10
A[4] = 3
console.log(myBetterSolution(A));
console.log('expected 3');
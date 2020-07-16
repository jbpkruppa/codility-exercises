function solution(A) {
    let n = A.length;
    if (n === 1) return A[0]; // if there is only one number, it is the bigger slice.

    let maxSliceSum = -Infinity;
    let currentMaxSum = []; //holds bigger sum up to the index

    for (let i = 0; i < n; i++) {
        if (i === 0) currentMaxSum[i] = A[i];
        else {
            currentMaxSum[i] = Math.max(A[i], currentMaxSum[i - 1] + A[i]); // holds which is bigger, the one previous calculated plus index value or only index value. if the sum is lower it means the previos sum was negative?
        }
        maxSliceSum = Math.max(maxSliceSum, currentMaxSum[i]); //holds which is bigger, the current or the value calculated in this row
    }

    return maxSliceSum;
}

let A = [];
A[0] = 3;
A[1] = 2;
A[2] = -6
A[3] = 4;
A[4] = 0;
console.log(A);
console.log(solution(A));   
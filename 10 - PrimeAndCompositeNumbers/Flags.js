// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/

function solution(A) {
    let peaks = [];
    let n = A.length;

    for (let i = 1; i < n - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);
    }
    //console.log(peaks);
    let size = peaks.length;
    if (size<=2) return peaks.length;
    
    // ESTUDAR ESSA PARTE!!!
    let maxFlag = parseInt(Math.sqrt(peaks[size-1] - peaks[0]) + 1);
    console.log(maxFlag);
    for (let i = maxFlag; i >= 2; --i) {
        let count = 1;
        let currentPos = peaks[0];
        for (var j = 1; j < size; ++j) {
            if (currentPos + i <= peaks[j]) {
                currentPos = peaks[j];
                ++count;
            }
        }
        if (count >= i) return i;
    }
    
    return 2;
}

A = [];
A[0] = 1
A[1] = 5
A[2] = 3
A[3] = 4
A[4] = 3
A[5] = 4
A[6] = 1
A[7] = 2
A[8] = 3
A[9] = 4
A[10] = 6
A[11] = 2

console.log(solution(A));
console.log('expected answer: 3');
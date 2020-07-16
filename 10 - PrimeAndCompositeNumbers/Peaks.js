// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/peaks/

// ESTUDAR!!!
function solution(A){ //100%
    if(A.length < 3) {
        return 0;
    }
    
    let i = 0;
    let j = 0;
    let peaks = [];
    let maxSize = 0;
    
    for(i=1; i<A.length-1; i++) {
        if(A[i] > A[i-1] && A[i] > A[i+1]) {
            peaks.push(i);
        }
    }
    
    if(peaks.length < 2) {
        return peaks.length;
    }
    
    let limit = parseInt(Math.sqrt(A.length));
    
    for(i=1; i<=A.length; i++) {
        if(A.length % i === 0) {
            let blockSize = i;
            let blockCount = A.length / i;
            
            if(blockSize < 3) {
                continue;
            }
            
            let lastGroup = -1;
            for(j=0; j<peaks.length; j++) {
                if(parseInt(peaks[j]/blockSize) === lastGroup + 1) {
                    lastGroup++;
                }
            }
            
            if(lastGroup + 1 === blockCount) {
                if(blockCount > maxSize) {
                    maxSize = blockCount;
                }
            }
        }
    }
    
    return maxSize;
}

function goodSolution(A) { //90% in score
    let peaks = [];
    let n = A.length;

    for (let i = 1; i < n - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) peaks.push(i);
    }
    //console.log(peaks);
    let size = peaks.length;
    if (size <= 2) return peaks.length;

    let max = 0;
    let limit = parseInt(Math.sqrt(A.length));
    
    
    for (let i = 1; i < limit; i++) {
        if ((n % i) == 0) { //i is a factor of n
            let blockNumber = 0;
            let block = n / i; // each block size
            for (let ind in peaks) {
                let currentPeak = peaks[ind]
                //check if peak is in current block
                if (blockNumber * block <= currentPeak && currentPeak < (blockNumber + 1) * block) {
                    blockNumber++; //block has at least one peak, test next
                }
            }
            if (blockNumber == i) { //if block number is equal i, every block has at least one peak
                max = i; //keep this value up to get here again in a highter i and return it later if none of last i's gets here 
            }
        }
    }

    return max;


}

A = [];
A[0] = 1
A[1] = 2
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
// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/min_max_division/

// better solution must use binary search
// array must be sorted in binary search!
// find the lower max, which is the max number int array (min max would be one item in the block, being at least the max value of A).
// find the upper max, which is the sum of array in one block
// binary seach should seek between lower and upper and check if is possible to form blocks wanted. 
// in this case, number of block cannot be higther to M. MUST BE LOWER OR EQUAL (with lower, we still can create empty blocks)

function solution(K, M, A) {
    let sum = 0;
    let lower = 0;
    let upper = 0;
    let mid = 0;
    let i = 0;
    
    for(i=0; i<A.length; i++) {
        upper += A[i];
        lower = Math.max(lower, A[i]);
    }
    
    if(K === 1) {
        return upper;
    } else if(K >= A.length) {
        return lower;
    }
    
    while(lower <= upper) {
        let temp = mid;
        mid = parseInt((upper + lower) / 2);
        
        if(mid === temp) {
            break;
        }
        
        let blocks = neededBlocks(A, mid);
        
        console.log('max, min, mid, blocks, K:', upper, lower, mid, blocks, '<', K);
        
        if(blocks > K) {
            lower = mid+1;
        } else {
            upper = mid;
        }
    }
    
    return upper;
}

function neededBlocks(arr, maxValue) {
    let count = 1;
    let sum = arr[0];
    
    for(let j=1; j<arr.length; j++) {
        if(sum + arr[j] > maxValue) {
            sum = arr[j];
            count++;
        } else {
            sum += arr[j];
        }
    }
    
    return count;
}


function mySolution(K, M, A) { // got 33% https://app.codility.com/demo/results/trainingF4CMGT-AKA/
    A.sort((a,b)=>a-b);
    let lower = Math.max(...A); // in case max is lower than M...
    let upper = 0;
    // sum all values and get the first upper
    for (let val in A){ 
        upper += val;
    }

    while (lower<upper){
        let middle = lower + parseInt((upper-lower)/2);
        let blocks = blocksNeeded(A, middle); // get blocks number when largest sum does not exeed middle value
        if (blocks>K){
            lower = middle+1; //cannot fit, change the middle to the next
        }else{
            upper = middle; // maintain the lower and set a new upper to middle
        }
    }
    return lower;
}

let K = 3;
let M = 5;
let A = [];

A[0] = 2
A[1] = 1
A[2] = 5
A[3] = 1
A[4] = 2
A[5] = 2
A[6] = 2

console.log(solution(K,M,A));
console.log('expected 6')
// https://app.codility.com/programmers/lessons/15-caterpillar_method/abs_distinct/

function solution(A) { //using caterpillar method. Too fuzzy!
    
    let left = 0;
    let right = left;
    let i = 0;
    let total = 1;
    let lastVal = 0;
    let newVal = 0;
    
    for(i=0; i<A.length; i++) {
        if(A[i] >= 0) {
            left = i;
            right = left;
            break; // all negative values were changed
        } else {
            A[i] *= -1; //change to positive (could use Math.abs)
        }
    }
    
    if(A.length === 1) {
        return 1;
    }
    
    lastVal = A[left];
    newVal = lastVal;
    
    while(left >= 0 && right <= A.length - 1) {
        if(A[left] !== A[right] && lastVal !== newVal) {
            total++;
        }
        
        if(left > 0 && A[left] < A[right]) {
            lastVal = A[left];
            left--;
            newVal = A[left];
        } else if(right < A.length - 1 && A[right] < A[left]) {
            lastVal = A[right];
            right++;
            newVal = A[right];
        } else if(left > 0) {
            lastVal = A[left];
            left--;
            newVal = A[left];
        } else if(right < A.length - 1) {
            lastVal = A[right];
            right++;
            newVal = A[right];
        } else {
            lastVal = A[left];
            left--;
        }
    }
    
    return total;
}


//first aproach:
function mySolution(A){ //100%, but didn't use caterpillar method
    
    let unique = new Set();
    for (let i =0; i< A.length; i++){
        
        unique.add(Math.abs(A[i]));
    }
    //console.log(unique);
    
    return unique.size;
}

let A= [-5,-3,-1,0,3,6]
console.log(solution(A));
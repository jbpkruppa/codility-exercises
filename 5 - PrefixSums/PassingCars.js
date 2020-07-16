// return combination where a pair sum 1;

function solution(A) {
    let counter = 0;
    let zeros = 0;
    for (let i = 0; i < A.length; i++){
        if (A[i]==0) zeros++; 
        else { // if is 1, countabilize left zeros (up to now) passing this car
            counter += zeros;
        }
        if (counter>1000000000) return -1;
    }
    return counter;
}

let A = [];
A[0] = 0
A[1] = 1
A[2] = 0
A[3] = 1
A[4] = 1

console.log(solution(A));


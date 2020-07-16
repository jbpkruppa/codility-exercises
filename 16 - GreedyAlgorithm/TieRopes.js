//https://app.codility.com/programmers/lessons/16-greedy_algorithms/tie_ropes/

function solution(K, A) { //100%
    let counter =0;
    let acc = 0;
    for (let i =0; i< A.length; i++){
        if (A[i]>=K) { //if the A[i] rope length is equal or bigger, don't need to check tied length, count
            counter++;
            acc = 0;
        }else if (A[i]+acc>=K){ //if tied is equa or bigger, count
            counter++;
            acc = 0;
        }else{
            acc +=A[i]; // is lower, so tie them and check the next
        }
        
    }
    return counter;
}

let K = 4;
let A = [];
A[0] = 1
A[1] = 2
A[2] = 3
A[3] = 4
A[4] = 1
A[5] = 1
A[6] = 3

console.log(solution(K,A));
console.log('expected 3');

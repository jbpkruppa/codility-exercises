// https://app.codility.com/programmers/lessons/6-sorting/distinct/

function solution(A){ // 100% https://app.codility.com/demo/results/trainingHURPHK-S9X/
    let counter=0;
    A.sort((a,b)=> a-b);
    for (let i =0; i<A.length; i++){
        if (i ==0) counter++;
        else if (A[i]!=A[i-1])counter++;
    }
    return counter;
}

let A = [2,1,1,2,3,1];
console.log(solution(A));
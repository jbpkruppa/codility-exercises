//https://app.codility.com/programmers/lessons/8-leader/dominator/

function solution(A) { //100%
    //sorting the array, middle element will be the one that occurs the most.
    let sorted = [...A];
    sorted.sort((a,b)=> a-b);
    let size = sorted.length;
    let middle = Math.floor(size/2);
    let dominator = sorted[middle];
    
    // check if the dominator appears more than 50%.
    let countDominator = A.filter(val=> val == dominator).length;
    if (countDominator<middle) return -1;
    let index = A.indexOf(dominator);
    return index;

}

let A = [];
A[0] = 3;
A[1] = 4;
A[2] = 3;
A[3] = 2;
A[4] = 3;
A[5] = -1;
A[6] = 3;
A[7] = 3;

console.log(`the Dominator is: ${solution(A)}`);

A= [2, 1, 1, 3];
console.log(`the Dominator is: ${solution(A)}`);
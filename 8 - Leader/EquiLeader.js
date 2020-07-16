// https://app.codility.com/programmers/lessons/8-leader/equi_leader/

function solution(A) { // 100% https://app.codility.com/demo/results/trainingM9FCZM-DTJ/
    let result = 0;
    const frequence = {};
    const half = Math.floor(A.length / 2);
 
    let leaderFrequence = 0;
    let leaderValue = 0;
 
    for (let i = 0; i < A.length; i++) {
        if (frequence[A[i]] === undefined) { // first time it appears
            frequence[A[i]] = [i];
        } else {
            frequence[A[i]].push(i);
        }
        if (frequence[A[i]].length > half && frequence[A[i]].length > leaderFrequence) {
            leaderFrequence = frequence[A[i]].length;
            leaderValue = A[i];
        }
    }
 
    let numOfLeaderInLeft = 0;
 
    // return frequence[f][0]
    for (let j = 0; j < A.length; j++) {
 
        //length of left array
        const leftLen = j + 1;
 
        //num of leaders in the left array
        if (A[j] === leaderValue) numOfLeaderInLeft++;
 
        //length of right array
        const rightLen = A.length - leftLen;
 
        // num of leaders in the right array
        const numOfLeaderInRight = leaderFrequence - numOfLeaderInLeft;
 
        if (numOfLeaderInLeft > Math.floor(leftLen / 2) && numOfLeaderInRight > Math.floor(rightLen / 2)) {
            result++;
        }
    }
 
    return result;
}
 function mySolution(A){ // WRONG, only 35% :(    
    let sorted = [...A];
    sorted.sort((a, b) => a - b);
    let size = sorted.length;
    if (size ==1) return 0;
    let middle = Math.floor(size / 2);
    let dominator = sorted[middle];
    let countDominator = A.filter(val => val == dominator).length;
    if (countDominator <= middle) return 0; // if there is no dominator, no sequences too.
    let counter = 0;

    for (let i = 0; i < A.length; i++) {
        if (i == 0 && A[i] == dominator) counter++;
        else if (A[i] == dominator && A[i] != A[i - 1]) counter++;
    }
    return counter; //to be equileader, must be at least 2 sequences...

}

let A = [];
A[0] = 4
A[1] = 3
A[2] = 4
A[3] = 4
A[4] = 4
A[5] = 2

console.log(`the Dominator appears in ${solution(A)} sequence(s)`);

A = [2];
console.log(`the Dominator appears in: ${solution(A)} sequence(s)`);
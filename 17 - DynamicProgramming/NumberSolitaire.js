// https://app.codility.com/programmers/lessons/17-dynamic_programming/number_solitaire/

// IMPORTANT ----> USE DYNAMIC PROGRAMMING IN PROBLEMS THAT NEED SEQUENCE OF DECISIONS <----- IMPORTANT

function solution(A) { //100% logica toda minha!!! :)
    let size = A.length;
    // array that will keep the current value + the biggest it can get
    let maxResultPossibilityAt = new Array(size).fill(null);
    
    for (let i = size-1; i>=0; i--){ 
        let options = i+6>size-1? size-1-i: 6; //movements should not pass total size
        let maxFoward = -Infinity;
        // get max result for each foward house
        for (let j = i+1; j<=i+options; j++){
            if (maxResultPossibilityAt[j]>maxFoward) maxFoward = maxResultPossibilityAt[j];
        }
        //console.log(`sum: ${A[i]} + (${maxFoward})`);
        let sum = maxFoward == -Infinity? A[i]: A[i]+maxFoward;
        maxResultPossibilityAt[i] = sum;
    }
    console.log(maxResultPossibilityAt);
    
    return maxResultPossibilityAt[0];
}

// resolving recursively, gets RangeError: Maximum call stack size exceeded
function recSolution(A, index, mem){ // 62% https://app.codility.com/demo/results/trainingEV2XCE-WFR/
    let size = A.length;
    if (mem == undefined) mem = new Array(size).fill(null);
    if (index == undefined) index = 0;
    if (index == size-1) {
        mem[index] = A[index];
        return A[index];
    }
    if (mem[index]!=null) return mem[index];
    let options = index+6>size-1? size-1-index: 6; //movements should not pass total size
    let maxFoward = -Infinity;
    // get max result for each foward house
    for (let i = index+1; i<=index+options; i++){
        maxFoward = Math.max(maxFoward, recSolution(A,i,mem));
    }
    let sum = maxFoward == -Infinity? A[index]: A[index]+maxFoward;
    mem[index] = sum;
    return sum;
}


let A = [];
A[0] = 1
A[1] = -2
A[2] = 0
A[3] = 9
A[4] = -1
A[5] = -2

console.log(recSolution(A));
console.log('expected 8')

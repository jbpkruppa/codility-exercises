// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/nailing_planks/

//nails = prego e plank = prancha





// A is array with start of related plank and B is array of its end
// C is array of position we can hammer each Ith nail (C[I])
// find the number J of nails that can nail all the planks (don need to be together as example showed)
// by the example, presuming that each plank needs at least one nail
// if it is not possible, returns -1;
function solution(A, B, C) {

    if (C.length === 1) {
        if (A[0] <= C[0] && C[0] <= B[0]) {
            return 1;
        } else {
            return -1;
        }
    }
 
    let i = 0;
    let totalNails = []; //array to hold nails number in each i plank
    let atLeastOne = false;
    let maxB = Math.max(...B);

    for (i = 0; i <= maxB; i++) {
        totalNails[i] = 0;
    }

    let min = 0;
    let max = C.length;
    //BinarySearch
    while (min <= max) {
        let mid = parseInt((min + max) / 2);

        totalNails.fill(0);

        for (i = 0; i < mid; i++) {
            totalNails[C[i]] = 1;
        }

        for (i = 1; i < totalNails.length; i++) {
            totalNails[i] += totalNails[i - 1];
        }

        let result = isAllNailed(A, B, totalNails);

        if (result) {
            atLeastOne = true;
            if (max === mid) {
                break;
            }

            max = mid;
        } else {
            min = mid + 1;
        }
    }

    if (!atLeastOne) {
        return -1;
    } else {
        return min;
    }
}

function isAllNailed(arrA, arrB, totalNails) {
    for (let i = 0; i < arrA.length; i++) {
        if (totalNails[arrA[i] - 1] === totalNails[arrB[i]]) {
            return false;
        }
    }

    return true;
}


function mySolution(A, B, C) { // 62%, 100% correct and 25% performance
    let size = A.length;
    //let nailed = new Array(size).fill(0); //0 for not nailled and 1 if nailed
    let unnailed = []; // to hold index of planks not nailed yet
    for (let i = 0; i < size; i++) {
        unnailed.push(i);
    }
    //console.log(unnailed);

    for (let i = 0; i < C.length; i++) {
        let nailPos = C[i];
        //console.log(`nail: ${nailPos}`)
        for (let j = 0; j < unnailed.length; j++) { // check only unnailed planks

            if (nailPos >= A[unnailed[j]] && nailPos <= B[unnailed[j]]) {
                let pos = unnailed[j];
                //nailed[pos] = 1;
                unnailed.splice(j, 1);
                j--;
            }
        }
        //console.log(unnailed);
        //console.log(nailed);
        if (unnailed.length == 0) return i + 1; //check if there is any un
    }
    return -1;
}

let A = [];
let B = [];
let C = [];

A[0] = 1;
A[1] = 4;
A[2] = 5;
A[3] = 8;

B[0] = 4;
B[1] = 5;
B[2] = 9;
B[3] = 10

C[0] = 4;
C[1] = 6;
C[2] = 7;
C[3] = 10;
C[4] = 2;

console.log(solution(A, B, C));
console.log('expected 4.')
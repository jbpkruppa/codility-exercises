// https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/

function solution(A) { //100%
    const n = A.length;
    const counters = Array(n*2 + 1).fill(0);
    for(let j = 0; j<n; j++) counters[A[j]]++; //count each element occurrence
    
    let response = A.map(number=> {
        let nonDivisor = n
        // sieve of er...
        for(let i = 1; i*i <= number; i++) { 
            if(number % i !== 0) continue; // if it is divisible, go to next...
            nonDivisor -= counters[i]; // removes totl occurences of it
            if(i*i !== number) nonDivisor -= counters[number/i] // remove the related divisor also
        }
        return nonDivisor
    })

    return response;
}



function goodSolution(A) { //88%
    
    let result = [];
    let max = 0;
    let i = 0;
    let arr = [...A];

    arr.sort(function (a, b) {
        return a - b;
    });

    max = arr[arr.length - 1];
    let divs = [];
    let totals = [];

    for (i = 0; i <= max; i++) {
        divs[i] = false;
        totals[i] = 0;
    }

    for (i = 0; i < n; i++) {
        let total = 0;
        let j = 0;
        let k = 0;

        divs[A[i]] = true;
        totals[A[i]]++;
    }

    for (i = 0; i < n; i++) {
        for (k = 2; A[i] * k <= max; k++) {
            if (divs[A[i] * k]) {
                totals[A[i] * k]++;
            }
        }
    }

    for (i = 0; i < n; i++) {
        result.push(n - totals[A[i]]);
    }

    return result;
}

function mySolution(A) { // 66%
    let counters = [];
    let n = A.length;
    let alreadyDone = {};
    for (let i = 0; i < n; i++) {
        let cur = A[i];
        //checks if this value is already calculated before:
        if (alreadyDone[cur]) counters[i] = alreadyDone[cur];
        else {
            let count = 0
            //console.log(cur);
            for (let j = 0; j < n; j++) {
                if (i != j && cur % A[j] != 0) {
                    count++;
                }
            }
            //console.log(count);
            counters[i] = count;
            alreadyDone[cur] = count;
        }

    }
    return counters;
}

let A = [];
A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 3
A[4] = 6


console.log(solution(A));
console.log('expected [2, 4, 3, 2, 0]')
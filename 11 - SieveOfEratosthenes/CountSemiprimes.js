//https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/


function solution(N, P, Q) { // 100% https://app.codility.com/demo/results/trainingDA2U72-TD4/
    let max = Math.max(...Q);
    let primes = new Array(max + 1).fill(true);
    let semiprimes = new Array(max + 1).fill(false);

    semiprimes[0] = false;
    for (let i = 2; i * i <= max; i++) {
        for (let j = i; j * i <= max; j++) {
            //console.log(`i:${i} x j: ${j} = ${i*j}`);
            primes[i * j] = false; //if it is a product, it is not prime
            if (primes[i] && primes[j]) semiprimes[i * j] = true; // if both factors are prime, then i*j is semiprime
            else semiprimes[i * j] = false;
        }

    }

    // array to hold semiprimes quantity up to each index
    let semiPrimesCounter = [];
    let counter = 0;
    for (let i = 0; i <= semiprimes.length; i++) {
        if (semiprimes[i]) {
            counter++;
        }
        semiPrimesCounter[i] = counter;
    }

    let result = [];

    // get number of semiprimes between P and Q (difference between semiPrimesCounter[Q] and semiPrimesCounter[P-1])
    for (i = 0; i < P.length; i++) {
        result.push(semiPrimesCounter[Q[i]] - semiPrimesCounter[P[i] - 1]);
    }

    //console.log('result:', result);

    return result;
}

function mySolution(N, P, Q) { //55%
    // N = biggerNumber
    let primes = getPrimes(N);

    let min = Math.min(...P);

    let semiPrimes = getSemiPrimes(min, N, primes);
    //console.log(semiPrimes);

    let response = [];
    let size = P.length;
    for (let i = 0; i < size; i++) {
        let filtered = semiPrimes.filter(val => val >= P[i] && val <= Q[i])
        //console.log(filtered);
        response.push(filtered.length);
    }

    return response;
}

function getSemiPrimes(start, end, primes) {

    let semiPrimes = [];
    //let root = parseInt(Math.sqrt(N));
    for (let i = 0; i < primes.length; i++) {
        let first = primes[i];
        for (let j = 0; j < primes.length; j++) {
            let second = primes[j];
            let semiprime = first * second;
            //console.log(semiprime);
            if (semiprime >= start && semiprime <= end) semiPrimes.push(semiprime);
            else if (semiprime > second) semiPrimes;
        }
    }
    semiPrimes = [...new Set(semiPrimes)].sort((a, b) => a - b);
    return semiPrimes;

}

function getPrimes(n) {
    let arr = new Array(n + 1);
    arr.fill(true);
    arr[0] = arr[1] = false;
    let i = 2;

    while (i * i <= n) {// if i*i is greater than n, stop
        if (arr[i] == true) {
            let k = i * i;
            while (k <= n) { //multiples of k are not primes
                arr[k] = false;
                k += i;
            }

        }
        i++;
    }


    let primes = [];
    // All array[i] set to true are primes
    for (let i = 2; i < n; i++) {
        if (arr[i]) {
            primes.push(i);
        }
    }

    return primes;
}

let P = [];
let Q = [];

P[0] = 1;
P[1] = 4;
P[2] = 16;

Q[0] = 26;
Q[1] = 10;
Q[2] = 20

// pq 26??? ultimo numero????
console.log(solution(26, P, Q));
console.log(`Expected [10, 4, 0]`)
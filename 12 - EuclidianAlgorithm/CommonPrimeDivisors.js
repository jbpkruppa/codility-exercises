//https://app.codility.com/programmers/lessons/12-euclidean_algorithm/common_prime_divisors/

// ESTUDAR E ENTENDER!!!!
function solution(A, B) {
    let size = A.length;
    let counter = 0;

    for (let i = 0; i < size; i++) {
        let a = A[i];
        let b = B[i];

        let d = GCD(a, b); // get the greater common divisor
        let c = 0;

        // 
        while (c != 1) { // divide each GCD up to 1, and see which 'a' stands
            c = GCD(a, d);
            a /= c;
        }

        c = 0;
        
        while (c != 1) { // divide each GCD up to 1, and see wich 'b' stands
            c = GCD(b, d);
            b /= c;
        }

        if (a == 1 && b == 1) { // both number have the same prime divisors
            counter++;
        }

    }
    
    return counter;
}

function GCD(a, b, res) {
    if (res == undefined) res = 1;
    if (a == b) return res * a;
    else if (a % 2 == 0 && b % 2 == 0)
        return GCD(parseInt(a / 2), parseInt(b / 2), 2 * res);
    else if (a % 2 == 0)
        return GCD(parseInt(a / 2), b, res);
    else if (b % 2 == 0)
        return GCD(a, parseInt(b / 2), res);
    else if (a > b)
        return GCD(a - b, b, res);
    else
        return GCD(a, b - a, res);
}

function mySolution(A, B) { //61%
    let size = A.length;
    let counter = 0;
    for (let i =0; i < size; i++){
        let factorsA = factoring(A[i]);
        let factorsB = factoring(B[i]);
        

        let setFacA = [...new Set(factorsA)];
        let setFacB = [...new Set(factorsB)];

        //console.log(setFacA.toString());
        //console.log(setFacB.toString());
        //console.log();
        
        if (setFacA.toString()===setFacB.toString()) counter++;
    }
    return counter;
}

function factoring(x){
    let F = arrayF(x); 
    let primeFactors = [];
    while (F[x]>0){
        primeFactors.push(F[x]);
        x /= F[x];
        //console.log(x);
    }
    primeFactors.push(x);
    return primeFactors
}

let arrayF = (n) => { // returns the first prime factor of each index
    let F = new Array(n + 1);
    F.fill(0);
    let i = 2;

    while (i * i <= n) {// if i*i is greater than n, stop
        if (F[i] == 0) {
            let k = i * i;
            while (k <= n) {
                if (F[k] == 0) {
                    F[k] = i;
                }
                k += i;
            }

        }
        i++;
    }


    return F;
}

let A = [];
let B = [];

A[0] = 15;
A[1] = 10;
A[2] = 3;

B[0] = 75;
B[1] = 30;
B[2] = 5;

console.log(solution(A,B));
console.log('expected 1');


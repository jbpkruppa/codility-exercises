//https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/

function solution(N) { //100%
    let root = Math.pow(N, 1 / 2); // get the square root
    let counter = 0;
    let limit = Math.floor(root); // the first factor should not pass root square of N
    
    for(let i=1; i<=limit; i++) {
        if(N%i === 0) {
            counter++;
            var factor = N/i;
            if(factor !== i) { // if factor and i are the same, i is square root of N and must be counted only one time
                counter++; // count the factor
            }
        }
    }
    
    return counter;
}

console.log(solution(24));
console.log('expected 8')
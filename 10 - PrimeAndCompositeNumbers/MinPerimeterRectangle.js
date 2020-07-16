//https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
function solution(N){
    // area = h*l;
    // calculate each factors of N
    let possibilitiesPerimeters = getPerimetersPossible(N);
    console.log(possibilitiesPerimeters);
    return possibilitiesPerimeters[0];
}


function getPerimetersPossible(N) {
    let root = Math.pow(N, 1 / 2); // get the square root
    let counter = 0;
    let limit = Math.floor(root); // the first factor should not pass root square of N. The second factor will be N/first
    let factors = [];
    
    for(let i=1; i<=limit; i++) {
        if(N%i === 0) {
            let factor = N/i;
            factors.push(2*(i+factor));
        }
    }
    factors.sort((a,b)=>a-b);
    return factors;
}

let N = 30;
console.log(solution(N));
console.log('expected 22.')
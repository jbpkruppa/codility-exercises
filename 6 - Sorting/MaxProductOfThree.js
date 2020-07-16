// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

function solution(A){ //100% https://app.codility.com/demo/results/training4NQXUC-8QR/

    A.sort((a, b) => (a - b));

    return Math.max(A[A.length - 1] * A[A.length - 2] * A[A.length - 3], A[A.length - 1] * A[0] * A[1]) ;
    
}
let A = [-3,1,2,-2,5,6];
console.log(solution(A));
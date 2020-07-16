// https://app.codility.com/programmers/lessons/17-dynamic_programming/min_abs_sum/

function solution(A) { // 100% -> ENTENDER!!!
    let i = 0;
    let j = 0;
    let max = 0;
    let total = 0;
    let target = 0;
    let dp = [];
    let count = [];
    let start = 0;
    let minDiff = Infinity;
    
    if(A.length === 0) {
        return 0;
    }
    
    A.sort(function(a, b) {
        return Math.abs(a)-Math.abs(b);
    });
    
    max = Math.abs(A[A.length - 1]);
    
    for(i=0; i<=max; i++) {
        count[i] = 0;
    }
    
    for(i=0; i<A.length; i++) {
        A[i] = Math.abs(A[i]);
        count[A[i]]++;
        total += A[i];
    }
    
    dp[0] = 0;
    for(i=1; i<=total; i++) {
        dp[i] = -1;
    }
    
    target = total / 2;
    
    for(i=0; i<count.length; i++) { // NÃO ENTENDI ESSA LÓGICA!:(
        if(count[i] > 0) {
            let step = i;
            for(j=0; j<dp.length; j++) {
                if(dp[j] >= 0) {
                    dp[j] = count[i];
                } else if(j >= step && dp[j - step] > 0) {
                    dp[j] = dp[j - step] - 1;
                }
                
                if(dp[j] >= 0) {
                    if(j === target) {
                        return 0;
                    } else {
                        minDiff = Math.min(minDiff, Math.abs(total - 2*j));
                    }
                }
            }
        }
    }
    
    return minDiff;
}

let A = [];
A[0] = 1
A[1] = 5
A[2] = 2
A[3] = -2

console.log(solution(A));
console.log('expected 0');

A = [7];
console.log(solution(A));
console.log('expected 7');

A = [3, 3, 3, 4, 5];
console.log(solution(A));
console.log('expected 0');
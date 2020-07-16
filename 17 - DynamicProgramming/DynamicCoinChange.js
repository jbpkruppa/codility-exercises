
function DynamicCoinChange(C,k){ // NÃO TERMINADO!!!!!
    let size  = C.length;

    let dp = new Array(size+1);
    dp.fill(new Array(k+1).fill(0));
    dp[0] = [0]+ Number.MAX_SAFE_INTEGER*k;
    console.log(dp);

    return dp[size];
}

let C = [1,3,4];
let k = 6;
console.log(DynamicCoinChange(C,k));
console.log('expected 2');
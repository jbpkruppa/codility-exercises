// https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/

function solution(N, M){
    // using LCM to find the future point where will get a wrapper instead of chocolate;
    let end =  LCM(N,M);
    //console.log(end);

    // divide end for M to get the quantity eaten
    return end/M;
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

// MMC ou LCM (least/lower common multiple)
function LCM(a, b) { 
    return (a * b) / GCD(a, b);

}

console.log(solution(10,4));
console.log('expected 5');
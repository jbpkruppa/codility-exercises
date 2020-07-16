function solution(A, B, K) {
    let count = 0;
    for (let i = A; i <= B; i++){
        //console.log(`${i}%${K} = ${i%K}`);
        if (i%K==0) count++;
    }
    return count;
}
console.log(solution(0, 2000000000, 1));
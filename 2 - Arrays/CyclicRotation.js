function solution(A, K) {
    
    for (let i = 0; i< K; i++){
        let newArray = [];
        for (let j = 0; j< A.length; j++){
            if (j == A.length-1){ //ultimo registro
                newArray[0] = A[j];
            } else{
                newArray[j+1]=A[j]
            }
        }
        A = newArray;
    }
    return A;
}

console.log(solution([3, 8, 9, 7, 6, 5,6, 6, 7], 9));

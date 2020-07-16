// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

function solution(A) { // study a way to build an DIFFERENCE ARRAY METHOD

}

function firstSolution(A) { //100%
    
    let start;
    let minimumAverage;
    for (let i = 0; i < A.length-1; i++) {
        
        let averageTwo = (A[i] + A[i + 1]) / 2;
        if (averageTwo<minimumAverage || minimumAverage == undefined) {
            minimumAverage = averageTwo;
            start = i;
        }
        if (i<A.length-2){ //checa tb com 3 numeros
            let averageThree = (A[i] + A[i + 1]+ A[i+2]) / 3;
            if (averageThree<minimumAverage|| minimumAverage == undefined) {
                minimumAverage = averageThree;
                start = i;
            }
        }
        
    }

    return start;
}



let A = [];
A[0] = 4
A[1] = 2
A[2] = 2
A[3] = 5
A[4] = 1
A[5] = 5
A[6] = 8


console.log(solution(A));

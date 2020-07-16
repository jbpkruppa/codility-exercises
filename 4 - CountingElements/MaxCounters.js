
// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function solution(N,A){ // 100% https://app.codility.com/demo/results/training9A9FAP-CXY
    let result = new Array(N);
    let max = 0;
    let min = 0;
    
    for(let i=0; i<N; i++) {
        result[i] = 0;
    }
    
    for(let i=0; i<A.length; i++) {
        let op = A[i];
        if(op > N) {
            min = max;
        } else {
            result[A[i]-1] = Math.max(result[A[i]-1], min);
            max = Math.max(++result[A[i]-1], max);
        }
    }
    
    for(let i=0; i<result.length; i++) {
        result[i] = Math.max(result[i], min);
    }
    
    return result;      
}


function firstSolution(N, A) { // 88%
    let counters = Array(N).fill(0);

    // se counters.length != A.length, deu xabu!?

    let sirene = N+1;
    let max = 0;
    let valor;
    for (let i = 0; i < A.length; i++){
        if (A[i]==sirene){
            counters.fill(max);
        } else{
            
            valor = counters[A[i]-1]+1;
            counters[A[i]-1]=valor;
            if (max < valor) max = valor;
        }
       
    }
    return counters;
}


console.log(solution( 5, [3,4,4,6,1,4,4]));

/* solution( 5, [3,4,4,6,1,4,4]) = (3, 2, 2, 4, 2)
    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)

    A[0] = 3 (0, 0, 1, 0, 0)
    A[1] = 4 (0, 0, 1, 1, 0)
    A[2] = 4 (0, 0, 1, 2, 0)
    A[3] = 6 (2, 2, 2, 2, 2)
    A[4] = 1 (3, 2, 2, 2, 2)
    A[5] = 4 (3, 2, 2, 3, 2)
    A[6] = 4 (3, 2, 2, 4, 2) */
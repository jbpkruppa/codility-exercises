// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one

function solution(X,A){ // 100% https://app.codility.com/demo/results/training97B3MX-AE2/
    // array to store if a leaf has already felt in that position
    let already = new Array(X+1).fill(0);
    already[0] = 1; //start position, first margin
    let counter = 0;

    for (let i =0; i < A.length; i++){
        if (already[A[i]] == 0){
            already[A[i]] = 1;
            counter++;
            if (counter==X) return i;
        }
        
    }

    return -1;
}

function firstSolution(X, A) { // 90%  https://app.codility.com/demo/results/training9WJPFJ-33S/
    
    let faltantes = [];
    for (let i =1; i <= X; i++){ //LEMBRE-SE A[0] = empty
        faltantes[i]= i;
    }
    console.log(faltantes);
    let i =0;
    for (i; i<A.length; i++){
        let index = faltantes.indexOf(A[i]);
        if (index!=-1){
            faltantes.splice(index,1);
        }
        console.log(faltantes);
        if (faltantes.length ==1) return i;
    }
    return -1;
}

let A = [1,9,11,12,23,10,11,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1];



console.log(solution(12, A));
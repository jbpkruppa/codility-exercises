// 
function solution(A) {
    const numPoints =  A.length;
    let counter = 0;
    let startAndEndPoints = A.map((currentDisc, i) => [i - A[i], i + A[i]]);
     
    
    startAndEndPoints = startAndEndPoints.sort((a,b) => a[0] - b[0]);
    //console.log(startAndEndPoints);


    for (let j = 0; j < numPoints; j++) {
        let inicioDisco = startAndEndPoints[j];
        let fimDisco = inicioDisco[1];
        for (let k = j + 1; k < numPoints; k++){
            let discoComparar = startAndEndPoints[k];
            let inicioDiscoComparar = discoComparar[0];
            if (inicioDiscoComparar <= fimDisco) {
                //comparar discos dentro da área do disco
                counter++;
                if (counter >10000000){
                    return -1;    
                }
            } else {
                // discos daqui por diante não terão interseção
                break;    
            }
        } 
    }
    return counter;
}

let A = [];
A[0] = 1
A[1] = 5
A[2] = 2
A[3] = 1
A[4] = 4
A[5] = 0

console.log(solution(A));
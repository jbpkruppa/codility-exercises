
function solution(X, Y, D) {
    let distancia = Y-X;
    
    let pulos = distancia/D;
    let resto = distancia%D;
    console.log(pulos);
    console.log(resto);
    if(resto ==0){
        return pulos;
    } else{
        return Math.floor(pulos)+1;
    }

}

console.log(solution(10, 85, 30));
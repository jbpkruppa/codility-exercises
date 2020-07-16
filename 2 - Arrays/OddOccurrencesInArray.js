function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let decifrado = {};

    for (let i =0; i <A.length; i++){
        let conteudo = A[i];
        if (decifrado[conteudo] == undefined){
            decifrado[conteudo] = 1;
        }else{
            decifrado[conteudo] = decifrado[conteudo]+1;
        }
    }
    //console.log(decifrado);
    let keys = Object.keys(decifrado);
    let impar;
    for (k in keys){

        let valor = keys[k];
        
        if (decifrado[valor]%2) {
            return valor;
        }
        
    }
    

}

console.log(solution([9,3,9,3,9,7,9]));
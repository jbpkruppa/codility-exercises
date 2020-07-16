// somente para parentesis. PARA CHAVE, COLCHETES E PARENTSIS, veja Brackets.js
// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

function solution(S){ //100%
    let tamanho = S.length;
    
    if (!tamanho){
        return 1;
    }
    
    let fila = [],
    pares = {  
        "(" : ")" 
    };
    
    for (let char of S){
        if (pares[char]){
            fila.push(char);
        } else {
            //console.log(fila);
            if (!fila.length){
                return 0;
            }   
            var charAnterior = fila.pop();
            if (pares[charAnterior] !== char){
                return 0;
            }   
        }   
    }        
    
    return (fila.length)? 0 : 1;
    
}

let S = "(()(())())";

console.log(solution(S));
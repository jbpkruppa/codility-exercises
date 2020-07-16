// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

function solution(S){ // 100% https://app.codility.com/demo/results/trainingW2FBUB-DNS/
    let tamanho = S.length;
    
    if (!tamanho){
        return 1;
    }
    
    let fila = [],
    pares = {
        "{" : "}",  
        "(" : ")", 
        "[" : "]"   
    };
    
    for (let char of S){
        if (pares[char]){
            fila.push(char);
        } else {
            console.log(fila);
            if (!fila.length){
                return 0;
            }   
            let charAnterior = fila.pop();
            if (pares[charAnterior] !== char){
                return 0;
            }   
        }   
    }        
    
    return (fila.length)? 0 : 1;
}

let S = '[()()]'
console.log(solution(S));
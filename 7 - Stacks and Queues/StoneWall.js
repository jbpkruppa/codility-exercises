// https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

function solution(H) {
    let len = H.length;
    let pilha = [H[0]]; // array para guardar as pedras da parede
    let result = 1;
    if (!len) { //no rocks
        return 0;
    }
    for (var i = 1; i < len; i++) {
        var alturaAtual = H[i];
        //console.log(pilha);
        while (pilha.length && (pilha[pilha.length - 1] >= alturaAtual)) {
            //console.log(`alturaAtual: ${alturaAtual}`);
            //
            if (alturaAtual == pilha[pilha.length - 1]) {
                result--;
            }
            //console.log(`pilha removida: ${pilha[pilha.length - 1]}`)
            pilha.pop();
            
        }
        //console.log(`pilha adicionada: ${alturaAtual}`)
        pilha.push(alturaAtual);
        result++;
    }
    return result;
}

let H = [];

H[0] = 8;
H[1] = 8;
H[2] = 5;
H[3] = 7;
H[4] = 9;
H[5] = 8;
H[6] = 7;
H[7] = 4;
H[8] = 8;

console.log(`Número de pedras utilizadas:`+solution(H));
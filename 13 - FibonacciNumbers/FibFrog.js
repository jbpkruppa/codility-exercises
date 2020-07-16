// https://app.codility.com/programmers/lessons/13-fibonacci_numbers/fib_frog/

function solution(A){ //ESTUDAR!!!!!
    let f = new Array(30); //max fibonacci number inside problem assumptions
    f[0] = 1; f[1] = 2;
    for (let i = 2; i < f.length; ++i) f[i] = f[i-1] + f[i-2]; // populate f array with fibonacci sequence numbers related to the problem
    let mins = new Array(A.length+1);

    for (let i = 0; i < mins.length; ++i) {
        if (i < A.length && A[i] == 0) {
            mins[i] = -1; 
            continue;
        }
        let min = Number.MAX_SAFE_INTEGER;

        for (let j = f.length-1; j >= 0; --j) {
            let jumpProjection = i - f[j];
            if (jumpProjection < -1) continue;
            if (jumpProjection == -1) {
                min = 1;
                break;
            }
            if (mins[jumpProjection] < 0) continue;
            let newMin = mins[jumpProjection] + 1;
            if (newMin < min) min = newMin;
        }
        if (min != Number.MAX_SAFE_INTEGER) mins[i] = min;
        else mins[i] = -1;
    }    
    
    return mins[A.length];
}

// a ideia é ir percorrendo de tras para frente as possiveis posiçoes da array leaves 
// (que tem a posição de todas as folhas acrescida de A.length +1 (outra margem))

// minha dificuldade está na hora que descartar um caminho sem saida, retornando ao caminho anterior.
// estava salvando os nós dentro da array currentPosition, para apagar o ultimo caso seja sem saida e retomar da posição
// anterior. Aí que me perdi.

// RETOMAR POSTERIORMENTE!!!! ACHO QUE É UMA BOA ABORDAGEM!!!

function mySolution(A) { //estava indo bem, mas me perdi nas tentativas...
    let size = A.length;
    console.log(`size: ${size}`);
    if (isFibonacci(size)) return 1;
    let leaves = [];

    for (let i = 0; i < size; i++) {
        if (A[i] == 1) leaves.push(i);
    }
    leaves.push(size); //the other side;
    console.log(leaves);

    let currentPosition = [-1]; //array to keep the positions...

    
    for (let j = leaves.length - 1; j > currentPosition[currentPosition.length-1]; j--) {
        let num = leaves[j] - currentPosition[[currentPosition.length-1]];
        console.log(num)
        if (isFibonacci(num)) {
            console.log(`jumped from ${currentPosition[[currentPosition.length-1]]} to ${leaves[j]}. ${currentPosition.length} jumps now.`);
            currentPosition.push(leaves[j]);

            if (currentPosition[currentPosition.length-1] == size) return currentPosition.length;
            else j = leaves.length - 1;
            console.log(`new j: ${j}`);
            console.log(currentPosition);
            if (j==currentPosition[currentPosition.length-1]+1){
                // try to get to previous step...
                j == currentPosition[currentPosition.length-1]-1;
                if (currentPosition.length >1 ) currentPosition.pop();
                else return -1;
            }
        }

    }

    return -1;

}

function fibonacciDynamic(n) {
    let fib = new Array(n + 2).fill(0);
    fib[1] = 1;
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

function isFibonacci(num) {
    if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
        return true;
    } else { return false; }

    function isSquare(N) {
        let s = parseInt(Math.sqrt(N));
        return (s * s == N);
    }
}

let A = [];

A[0] = 0;
A[1] = 0;
A[2] = 0;
A[3] = 1;
A[4] = 1;
A[5] = 0;
A[6] = 1;
A[7] = 0;
A[8] = 0;
A[9] = 0;
A[10] = 0;

console.log(mySolution(A));
console.log('expected 3');
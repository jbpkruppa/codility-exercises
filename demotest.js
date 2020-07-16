// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var min = 1;
    A.sort(); //erro aqui, ordenou de maneira alfabética e não numérica

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
            min++;
        }
    }

    return min;

}


console.log(solution([-1, -2, -3]));
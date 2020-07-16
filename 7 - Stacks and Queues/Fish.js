// https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/

function solution(A, B) { //100% https://app.codility.com/demo/results/trainingPQTFZX-TUH/
    let len = A.length;
    let count = parseInt(len);
    let stackGoingDown = [];
    
    
    for (let i = 0; i < len; i++){
        if (B[i] == 1){ //going down
            stackGoingDown.push(A[i]);    
        } else {            
            // Going UP through all fishes going DOWN
            for(let j= stackGoingDown.length-1; j>=0; j--) { //LIFO Last In, First Out. Stack, not queue.
                let lastDownstreamFishSize = stackGoingDown[j];
                if (lastDownstreamFishSize > A[i]){
                    count--;
                    break;
                } else if (lastDownstreamFishSize < A[i]){
                    count--;
                    stackGoingDown.pop(); // dead, remove from array
                }
            }
        }
    }
    return count;    
}

function mySolution(A,B){ //returned 75%
    let continua = true;
    let size = A.length;

    while (continua){
        for (let i =0; i <A.length; i++){
            //check if A[i] is there a fight:
            if (B[i]==1 && B[i+1]==0){
                //FIGHT!
                if (A[i]<A[i+1]){
                    A.splice(i,1);
                    B.splice(i,1);
                    i--;
                }else{ //not checking equal, as not described in problem. Assuming it is bigger than
                    A.splice(i+1,1);
                    B.splice(i+1,1);
                }
            }
        }
        if (size == A.length) return size; //no more fights!
        else{
            size = A.length;
        }

    }

    function sobrevive(first, second){
        if(B[first]==0) return true; //a foge
        else if(B[second]==1){ //briga
            // a subindo e b descendo: briga!
            return (A[first]>A[second])
        }else{
            // a subindo e b subindo.
        }
    }

}



function reduzir(A, B, result) {
    if (result == undefined) result = [];
    if (A.length == 0) {
        return result;
    } else {
        let bigger = Math.max(...A);
        let biggerIndex = A.indexOf(bigger);
        let direction = B[biggerIndex];
        console.log(`bigger: ${biggerIndex}, biggerIndex: ${biggerIndex}, direction: ${direction}`);
        let behindInit, behindEnd;

        if (direction == 0) { //going up
            console.log(`going UP`);
            behindInit = biggerIndex + 1;
            behindEnd = A.length - 1;
            result.push(A[biggerIndex]);
            console.log(result);
            result.concat(reduzir(A.slice(behindInit,behindEnd),B.slice(behindInit,behindEnd), result));
        } else { // going down
            console.log(`going DOWN`);
            behindInit = 0;
            behindEnd = biggerIndex - 1;
            result.concat(reduzir(A.slice(behindInit,behindEnd),B.slice(behindInit,behindEnd), result));
            result.push(A[biggerIndex]);
        }
    }

}
let A = [], B = [];

A[0] = 4;
A[1] = 3;
A[2] = 2;
A[3] = 6;
A[4] = 5;
A[5] = 1;

B[0] = 0;
B[1] = 1;
B[2] = 0;
B[3] = 1;
B[4] = 0;
B[5] = 0;

console.log(solution(A, B));

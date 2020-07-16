
function solution(A, M){
    const LIMIT = 1000000000;
    
    let lastPos = []; // array to hold each different number last position
    let i = 0;
    let count = 0;
    let start = 0;
    
    if(A.length === 1) {
        return 1;
    }
    
    for(i=0; i<=M; i++) {
        lastPos[i] = -1; // none number has occured yet
    }
    
    for(i=0; i<A.length; i++) {
        let curr = A[i];
        
        if(lastPos[curr] + 1 > start) { //occured after start, need to remark start
            start = lastPos[curr] + 1;
        }
        
        lastPos[curr] = i; 
        count += i - start + 1; //one slice for aditional i after start
        
        if(count > LIMIT) break;
    }
    
    return count > LIMIT ? LIMIT : count;
}

let A = [3,4,5,5,2];
console.log(solution(A,6));
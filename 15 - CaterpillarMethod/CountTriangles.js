// https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/

function solution(A) { //90%
    let start = 0;
    let mid = 1;
    let end = 2;
    let count = 0;

    if (A.length < 3) {
        return 0;
    }

    A.sort(function (a, b) {
        return a - b;
    });

    for (start = 0; start < A.length - 2; start++) {
        for (mid = start + 1; mid < A.length - 1; mid++) {
            end = mid + 1;

            //if start, mid and end is not triangle, start mid and end+1 will not be either
            while (end < A.length && isTriangle(A, start, mid, end)) {
                end++;
            }

            count += end - mid - 1; //add number of moving ends allowed previously
        }
    }

    return count;
}

function isTriangle(arr, base, mid, end) {
    if (arr[base] + arr[mid] > arr[end]) return true;

    return false;
}

let A = [];
A[0] = 10;
A[1] = 2;
A[2] = 5;
A[3] = 1;
A[4] = 8;
A[5] = 20;

console.log(solution(A));
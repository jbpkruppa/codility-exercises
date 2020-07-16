// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
function solution(S, P, Q) {
    let dna;
    let M = P.length; // ou Q.length
    let p, q;
    let resposta = [];
    for (let i = 0; i < M; i++) {
        p = P[i];
        q = Q[i];
        dna = S.slice(p, q+1);
        console.log(dna);

		if (dna.indexOf('A') !== -1) {
			resposta.push(1)
		} else if (dna.indexOf('C') !== -1) {
			resposta.push(2)
		} else if (dna.indexOf('G') !== -1) {
			resposta.push(3)
		} else {
			resposta.push(4)
		}
    }

    return resposta;
}

console.log(solution('C', [2, 5, 0], [4, 5, 6]));

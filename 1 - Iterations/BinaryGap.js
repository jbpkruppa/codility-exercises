
let solution = N => { // da para melhorar...

    var binario = (N).toString(2);

    var indices = []

    for (let i = 0; i < binario.length; i++) {
        if (binario[i] === '1') indices.push(i);
    }

    let maiorGap = 0;
    for (let i = 1; i < indices.length; i++) {
        let distancia = indices[i] - indices[i - 1] - 1;
        if (distancia > maiorGap) maiorGap = distancia;

    }

    return maiorGap;
}
let maiorGap = 0;
let numeroMaiorGap;
let ultimo = 2147483647;
let primeiro = 1;
primeiro = 131073;
ultimo = 131073;
for (let i = primeiro; i <= ultimo; i++) {
    let gap = solution(i);
    if (gap > maiorGap) {
        maiorGap = gap;
        numeroMaiorGap = i;
    }
    console.log(`${i}: ${gap} ${(numeroMaiorGap).toString(2)}\t\taté agora maior gap = ${maiorGap} encontrado no número ${numeroMaiorGap}`);
}


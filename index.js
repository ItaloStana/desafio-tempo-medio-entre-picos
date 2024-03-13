// Minha função para encontrar os picos verdadeiros //

function encontrarPicosVerdadeiros(valores, distancia) {
    const picosVerdadeiros = [];
    for (let i = 1; i < valores.length - 1; i++) {
        // Considerando apenas valores entre 0 e 100 //
        if (valores[i] < 0 || valores[i] > 100) {
            continue;
        }
        if (valores[i] >= 50 && valores[i] > valores[i - 1] && valores[i] > valores[i + 1]) {
            let picoVerdadeiro = true;
            // Verifica se o pico é válido comparando com os vizinhos dentro da distância especificada
            for (let j = 1; j <= distancia; j++) {
                if (i - j >= 0) {
                    if (valores[i] <= valores[i - j]) {
                        picoVerdadeiro = false;
                        break;
                    }
                }
                if (i + j < valores.length) {
                    if (valores[i] <= valores[i + j]) {
                        picoVerdadeiro = false;
                        break;
                    }
                }
            }
            if (picoVerdadeiro) {
                picosVerdadeiros.push([i, valores[i]]);
            }
        }
    }
    return picosVerdadeiros;
}

// Valores do exemplo (simulação) //
const valores = [/* Valores aqui */]; // Exemplo: [30, 40, 60, 70, 80, 50, 40, 60, 80, 90, 60, 70, 65, 78, 67];

// Definir a distância para validar os picos //
const distancia = 5;

// Encontrar os picos verdadeiros //
const picosVerdadeiros = encontrarPicosVerdadeiros(valores, distancia);

// Imprimir os picos verdadeiros //
console.log("Picos verdadeiros: (Segundo, Valor)");
picosVerdadeiros.forEach(pico => {
    console.log(pico);
});

// Função calcular o tempo médio entre os picos //
function calcularTempoMedioEntrePicos(picos) {
    let diferencaTotal = 0;
    // Itera sobre os picos, começando do segundo //
    for (let i = 1; i < picos.length; i++) {
        // Calcula a diferença entre os índices de pares de picos consecutivos
        const diferenca = picos[i][0] - picos[i - 1][0];
        diferencaTotal += diferenca;
    }
    // Calcular o tempo médio entre os picos em segundos //
    const tempoMedio = diferencaTotal / (picos.length - 1);
    // Converter o tempo médio para minutos e segundos //
    const minutos = Math.floor(tempoMedio / 60);
    const segundos = Math.floor(tempoMedio % 60);
    // Formatar o resultado como "mm:ss" //
    const resultadoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    return resultadoFormatado;
}

// Calcular o tempo médio entre os picos //
const tempoMedioEntrePicos = calcularTempoMedioEntrePicos(picosVerdadeiros);

// Imprimir o tempo médio entre os picos //
console.log(`\nTempo médio entre os picos\nTMEP = ${tempoMedioEntrePicos}`);

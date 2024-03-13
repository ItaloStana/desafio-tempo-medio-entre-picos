Solução do Desafio tempo médio entre picos:

1 Passo- Encontrando Picos Verdadeiros:
O programa inicia lendo os valores de um arquivo texto.
Em seguida, ele analisa esses valores em busca de picos "verdadeiros", que são pontos onde os valores são significativamente maiores que seus vizinhos, indicando picos reais de interesse.
Para determinar se um valor é um pico verdadeiro, o programa verifica se é pelo menos 50 (um critério definido), e se é maior que os valores adjacentes.
A implementação também inclui uma lógica para garantir que os picos estão espaçados por uma distância mínima entre si, ajudando a distinguir entre picos reais e falsos.
Leitura de Arquivo e Definição de Parâmetros:

2 Passo- Leitura de Arquivo e Definição de Parâmetros:
O programa começa lendo os valores de um arquivo específico chamado exemplo.txt.
Em seguida, ele define uma distância mínima entre os picos (neste caso, 5 segundos), que determina o intervalo para considerar os valores próximos como picos reais.
Encontrando Picos e Calculando Tempo Médio:

3 Passo- Encontrando Picos e Calculando Tempo Médio:
Depois de ler os valores e definir os parâmetros, o programa busca os picos verdadeiros utilizando a lógica descrita anteriormente.
Uma vez encontrados os picos, o programa calcula o tempo médio entre eles. Isso é feito medindo a diferença entre os índices dos picos consecutivos, somando essas diferenças e calculando a média.
O tempo médio entre os picos é então convertido para um formato de minutos e segundos para facilitar a compreensão.
Impressão dos Resultados:

4 Passo - Impressão dos Resultados:
Por fim, o programa imprime os picos verdadeiros encontrados, fornecendo o segundo e o valor do pico.
Também imprime o tempo médio entre os picos em um formato legível, para que o usuário possa entender facilmente os resultados.

Basicamente, o código executa uma análise em uma lista de valores para identificar os pontos mais significativos (os picos) e fornece informações úteis sobre esses picos,
como sua localização e a frequência média entre eles.

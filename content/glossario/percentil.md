---
title: "Percentil"
description: "Percentil é a divisão de dados ordenados em 100 partes. Entenda o que significa estar no percentil 90, como calcular e por que não é igual a porcentagem."
date: 2026-10-09
related_calc: "quanto-por-cento-representa"
related: ["porcentagem", "razao"]
---
**Percentil é a medida que divide um conjunto de dados ordenado em 100 partes iguais. Estar no percentil 90 significa ter um valor maior ou igual ao de cerca de 90% do grupo. Percentil indica posição, não porcentagem de acerto.**

Você tirou 70 pontos na prova e descobriu que ficou no percentil 92. Parece contraditório? Não é. Os dois números respondem a perguntas diferentes, e entender essa diferença muda a forma de ler notas, exames médicos, rankings e até relatórios de desempenho de sites.

## O que é percentil

Imagine alinhar todos os candidatos de um concurso, do pior para o melhor desempenho, e cortar a fila em 100 pedaços com o mesmo número de pessoas. Cada ponto de corte é um percentil. O percentil 1 marca o valor abaixo do qual ficam os 1% menores resultados; o percentil 99 deixa apenas 1% dos resultados acima dele.

Por isso o percentil responde a uma pergunta simples: "quantos do grupo estão abaixo de mim?". Ele não diz quanto você fez, diz onde você está em relação aos demais.

## Percentil não é porcentagem

Essa é a confusão mais comum, e vale parar nela. A porcentagem mede uma proporção de um total: acertar 90% das questões é responder corretamente 90 de cada 100. O percentil mede uma posição dentro de um grupo: estar no percentil 90 é superar cerca de 90% das pessoas.

Os dois números podem ficar muito distantes. Numa prova difícil, uma nota de 60% pode colocar você no percentil 95, porque quase ninguém foi além disso. Numa prova fácil, 90% de acertos pode render apenas o percentil 40.

| | Porcentagem | Percentil |
|---|---|---|
| O que mede | Proporção de um total | Posição em um grupo |
| Depende dos outros? | Não | Sim |
| Exemplo | 80% de acertos | Acima de 80% dos candidatos |

Se quiser revisar a base, veja nosso conteúdo sobre [porcentagem](/glossario/porcentagem/).

## Exemplo do dia a dia: a curva de crescimento

Se você é pai ou mãe, provavelmente já ouviu na consulta pediátrica: "seu bebê está no percentil 75 de peso". Isso quer dizer que ele pesa mais do que 75% dos bebês da mesma idade e sexo usados como referência.

Não é uma nota, nem sinal de problema. Um bebê no percentil 25 também pode estar perfeitamente saudável. O que o pediatra costuma observar é se a criança acompanha uma curva estável ao longo do tempo.

## Como calcular o percentil, passo a passo

1. Ordene os dados do menor para o maior.
2. Calcule a posição: **i = (P ÷ 100) × n**, onde P é o percentil desejado e n é a quantidade de valores.
3. Se i não for um número inteiro, arredonde para cima e use o valor dessa posição.
4. Se i for inteiro, calcule a média entre o valor dessa posição e o da posição seguinte.

Veja com 10 notas já ordenadas: 45, 52, 58, 60, 63, 67, 70, 74, 81, 90.

- **Percentil 25:** i = 0,25 × 10 = 2,5. Arredondando para 3, o resultado é o terceiro valor: **58**.
- **Percentil 70:** i = 0,7 × 10 = 7. Como é inteiro, tiramos a média entre o 7º e o 8º valores: (70 + 74) ÷ 2 = **72**.

Atenção: planilhas e linguagens de programação costumam usar variações desse método, com interpolação entre valores. Por isso o resultado pode diferir um pouco de uma ferramenta para outra.

## Percentil, quartil e mediana

São parentes próximos. Os quartis dividem os dados em 4 partes: o primeiro quartil é o percentil 25, o segundo é o percentil 50 e o terceiro é o percentil 75. O percentil 50 é a **mediana**, o valor central que separa a metade de baixo da metade de cima. Existem ainda os decis, que dividem os dados em 10 partes: o 9º decil equivale ao percentil 90.

## Onde o percentil aparece

- **Educação:** avaliações em larga escala e rankings de concursos costumam informar a posição relativa do candidato, não só a nota.
- **Saúde:** curvas de peso, altura e IMC infantil são lidas em percentis.
- **Economia:** quando se fala nos "10% mais ricos", está se falando de quem está acima do percentil 90 de renda.
- **Tecnologia:** o tempo de resposta de um site costuma ser medido em p95 ou p99, ou seja, o tempo abaixo do qual ficam 95% ou 99% das requisições.

## Erros comuns

- **Confundir percentil 90 com nota 90.** Um é posição, o outro é pontuação.
- **Achar que percentil 50 é a média.** Ele é a mediana. Os dois só coincidem em distribuições simétricas.
- **Supor que percentil alto é sempre bom.** Em tempo de espera, custo ou taxa de erro, o desejável é um percentil baixo.
- **Comparar grupos diferentes como se fossem iguais.** O percentil 80 numa turma fraca não representa o mesmo desempenho que o percentil 80 numa turma forte.

## Perguntas frequentes

**O que significa estar no percentil 99?**
Significa estar acima de cerca de 99% do grupo, entre os 1% com os maiores valores.

**Percentil 50 é igual à mediana?**
Sim. O percentil 50 é, por definição, a mediana: metade dos dados fica abaixo e metade acima.

**Percentil é o mesmo que porcentagem?**
Não. Porcentagem é uma fração de um total; percentil é a posição de um valor dentro de um conjunto ordenado.

## Conclusão

Percentil é uma forma de dizer "onde eu estou no grupo", e não "quanto eu fiz". Guarde a regra: percentil 90 significa à frente de cerca de 90% dos demais. Para trabalhar com proporções, use a calculadora [quanto por cento representa](/calculadoras/quanto-por-cento-representa/), e para comparar duas quantidades, veja nosso conteúdo sobre [razão](/glossario/razao/).
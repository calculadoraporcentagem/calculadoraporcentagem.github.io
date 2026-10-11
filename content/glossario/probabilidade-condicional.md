---
title: "Probabilidade condicional"
description: "Entenda a probabilidade condicional, aprenda a fórmula, veja exemplos práticos e calcule a chance de um evento ocorrer quando outro já aconteceu."
date: 2026-10-09
related_calc: "porcentagem-de-porcentagem"
related: ["porcentagem-de-porcentagem", "valor-base"]
---

**Probabilidade condicional é a chance de um evento ocorrer sabendo que outro evento já aconteceu. Sua fórmula é \(P(A\mid B)=\frac{P(A\cap B)}{P(B)}\), em que \(P(A\cap B)\) representa a probabilidade de ambos ocorrerem e \(P(B)\) representa a probabilidade da condição conhecida. Ela ajuda a calcular probabilidades com informações adicionais, como a porcentagem de mulheres entre estudantes de computação.**

## Como funciona a probabilidade condicional?

A probabilidade condicional considera apenas os resultados compatíveis com uma informação já conhecida. Em vez de analisar todo o grupo original, você restringe a análise ao grupo que atende à condição.

Por exemplo, imagine uma escola com 1.000 alunos. Se você quiser descobrir a probabilidade de um aluno escolhido aleatoriamente ser mulher, considera todos os 1.000 estudantes. Porém, se souber que o aluno escolhido cursa computação, o grupo de referência passa a ser apenas o dos estudantes desse curso.

Essa diferença é fundamental: a probabilidade depende das informações disponíveis. Quando uma condição é conhecida, o universo de possibilidades pode mudar, alterando o resultado do cálculo.

## Qual é a fórmula da probabilidade condicional?

A fórmula matemática é:

\[
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
\]

Nessa expressão:

- **\(P(A\mid B)\):** probabilidade de A acontecer sabendo que B aconteceu.
- **\(P(A\cap B)\):** probabilidade de A e B acontecerem simultaneamente.
- **\(P(B)\):** probabilidade de ocorrer o evento B, que funciona como condição.

A fórmula exige que \(P(B)>0\), ou seja, a condição precisa ter uma probabilidade positiva.

Para usar a fórmula, identifique a condição, determine a proporção de resultados que atendem simultaneamente aos dois eventos e divida esse valor pela probabilidade da condição.

## Exemplo de probabilidade condicional com porcentagens

Imagine uma escola com 1.000 alunos e as seguintes informações:

- 60% dos alunos são mulheres.
- 5% das mulheres estudam computação.
- 10% de todos os alunos estudam computação.

Primeiro, calcule quantas mulheres estudam computação. Como 60% de 1.000 corresponde a 600 mulheres, e 5% dessas 600 mulheres estudam computação, temos:

\[
600\times 0{,}05=30
\]

Portanto, 30 mulheres estudam computação. Isso representa 3% do total de alunos.

Agora, calcule quantos estudantes cursam computação:

\[
1.000\times 0{,}10=100
\]

Entre os 100 estudantes de computação, 30 são mulheres. Assim, a probabilidade condicional é:

\[
P(\text{mulheres}\mid\text{computação})
=\frac{30}{100}=0{,}30=30\%
\]

**Resposta direta: 30% dos estudantes de computação são mulheres.**

Observe que os 5% representam a proporção de mulheres que estudam computação dentro do grupo feminino. Já os 30% representam a proporção de mulheres dentro do grupo de estudantes de computação. Os grupos de referência são diferentes.

## Onde a probabilidade condicional é utilizada?

A probabilidade condicional aparece em diversas situações cotidianas e profissionais.

**Medicina:** um profissional pode analisar a probabilidade de uma pessoa apresentar determinada condição sabendo que o resultado de um teste foi positivo. Para interpretar esse resultado corretamente, também é necessário considerar a precisão do teste e a frequência da condição na população.

**Previsão do tempo:** a probabilidade de chuva pode ser avaliada considerando informações como umidade, pressão atmosférica e condições meteorológicas observadas.

**Comércio:** uma loja pode estudar a probabilidade de um cliente comprar determinado produto sabendo que ele já adquiriu outro item. Essa informação pode ajudar a identificar padrões de consumo.

**Educação:** uma escola pode calcular a proporção de alunos aprovados entre aqueles que participaram de um programa de reforço, desde que disponha dos dados necessários.

Em todos esses casos, a condição conhecida delimita o grupo analisado e permite responder a uma pergunta mais específica.

## Qual é a diferença entre probabilidade condicional e probabilidade comum?

A probabilidade comum considera o conjunto original de resultados possíveis. A probabilidade condicional, por sua vez, considera uma informação adicional que restringe esse conjunto.

Considere um baralho padrão de 52 cartas. A probabilidade de retirar um ás é de 4 em 52, aproximadamente 7,69%.

Entretanto, se você souber que a carta retirada é uma carta de copas, restam 13 possibilidades igualmente prováveis, das quais uma é o ás de copas. A probabilidade condicional de retirar um ás, sabendo que a carta é de copas, passa a ser:

\[
P(\text{ás}\mid\text{copas})=\frac{1}{13}\approx7{,}69\%
\]

Nesse exemplo, os valores coincidem por acaso. Em outras situações, a condição pode aumentar ou diminuir a probabilidade calculada.

Também é importante lembrar que \(P(A\mid B)\) não é necessariamente igual a \(P(B\mid A)\). Saber que uma carta é um ás não significa o mesmo que saber que ela é de copas.

## Erros comuns ao calcular a probabilidade condicional

Um dos erros mais frequentes é dividir pelo total errado. O denominador deve representar a probabilidade do evento que funciona como condição, e não necessariamente o total da população original.

Outro erro é confundir porcentagens de grupos diferentes. Se 20% dos clientes compram um produto e 30% desses clientes também compram outro, não se pode afirmar automaticamente que 30% de todos os clientes compram os dois produtos. É necessário conhecer a base usada em cada porcentagem.

Para evitar confusões, identifique sempre o grupo de referência, transforme as porcentagens em proporções quando necessário e confira se os dados são suficientes para responder à pergunta.

Se o problema envolver aumentos ou reduções percentuais sucessivos, consulte também a calculadora de [porcentagem de porcentagem](/calculadoras/porcentagem-de-porcentagem/). Para identificar a base usada em um cálculo, o verbete sobre [valor base](/glossario/valor-base/) pode complementar o estudo. Para revisar como as proporções funcionam na prática, leia também o guia [como calcular porcentagem de porcentagem](/guias/como-calcular-porcentagem-de-porcentagem/).

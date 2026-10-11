---
title: "Reversibilidade percentual"
description: "Aumentos e quedas percentuais não se anulam: subir 25% exige cair 20% para voltar ao ponto inicial. Entenda a fórmula 1/(1+r) − 1 com exemplos práticos."
date: 2026-10-09
related_calc: "variacao-percentual"
related: ["aumento-percentual", "reducao-percentual", "porcentagem-de-porcentagem"]
---

**Um aumento de 10% seguido de uma queda de 10% não devolve o valor original: **R$ 200 viram R$ 198**. Para reverter uma alta de r% é necessária uma queda de **1/(1+r) − 1**: uma alta de 25% exige uma queda de 20% para voltar a 100.**

Parece contraditório, mas tem uma explicação simples — e, depois de entendê-la, você nunca mais vai somar percentuais de cabeça da mesma forma.

## Por que +10% e −10% não se anulam?

O segredo está na **base de cálculo**. Cada percentual é aplicado sobre um valor diferente.

Veja o passo a passo com R$ 200:

- Aumento de 10%: 200 × 1,10 = **R$ 220**
- Queda de 10%: 220 × 0,90 = **R$ 198**

A alta de 10% vale R$ 20. A queda de 10%, aplicada sobre um valor maior, vale R$ 22. Os percentuais são iguais, mas os reais envolvidos não são.

Outra forma de enxergar: basta multiplicar os dois fatores, 1,10 × 0,90 = 0,99. Ou seja, você termina com 99% do valor inicial — uma perda de 1%, e não zero.

É como subir um degrau e descer outro: cada "1%" agora vale mais, porque o piso mudou de lugar.

## A fórmula da reversibilidade

Para desfazer um aumento de r%, a queda necessária é:

**x = 1/(1 + r) − 1**

A lógica é direta: se algo subiu r% e depois caiu x%, o resultado precisa voltar a 1 (ou seja, a 100%). Logo, (1 + r) × (1 + x) = 1 — e basta isolar o x.

Na prática:

| Aumento inicial | Queda para reverter |
|---|---|
| +5% | −4,76% |
| +10% | −9,09% |
| +25% | −20% |
| +50% | −33,33% |
| +100% | −50% |

Repare que a queda de reversão é sempre **um pouco menor** que o aumento — e a diferença cresce conforme r aumenta.

E o caminho inverso? Para desfazer uma **queda** de r%, é preciso uma alta de r/(1 − r). Uma perda de 50%, por exemplo, só se recupera com um ganho de 100%.

## A regra de bolso

Se você não quiser decorar fórmulas, grave esta frase:

> **Desfazer uma alta exige uma queda um pouco menor. Desfazer uma queda exige uma alta um pouco maior.**

Para percentuais pequenos (até uns 10%), a diferença é quase imperceptível: +10% e −9,09%. Para percentuais grandes, ela explode: uma ação que cai 50% precisa **dobrar de valor** para voltar ao preço original.

E existe um limite absoluto: uma queda de 100% é irreversível. Se o valor vai a zero, não há percentual de alta que recupere — a fórmula simplesmente deixa de funcionar, porque seria preciso multiplicar zero por algo infinito.

## Onde isso aparece na vida real

**Investimentos.** É o exemplo clássico: uma ação que despenca 50% precisa subir 100% para voltar ao preço de compra. Quem já viu uma carteira "cair pela metade" entende por que recuperar prejuízos é tão difícil.

**Salários.** Considere um salário de R$ 1.200. Um reajuste de +20% leva a R$ 1.440. Se o mesmo percentual for devolvido (−20%), o resultado é R$ 1.152 — R$ 48 abaixo do início. Em termos percentuais, uma perda real de 4%.

**Preços e "descontos".** Um produto que sobe 25% e depois recebe um "desconto de 20%" volta exatamente ao preço original — nunca abaixo. Não é coincidência: 1,25 × 0,80 = 1. Muitas lojas exploram justamente esse par para criar a sensação de barganha sem alterar o valor final.

## Três erros que quase todo mundo comete

1. **Somar percentuais.** +10% seguido de −10% vira "0%", na cabeça de muita gente. O resultado real é −1%.
2. **Assumir simetria.** Acreditar que a queda que desfaz uma alta tem o mesmo tamanho dela. Quanto maior o percentual, maior o erro.
3. **Esquecer que a base muda.** Todo percentual é aplicado sobre o valor atual, não sobre o original. É isso que quebra a simetria.

## Perguntas frequentes

**Por que subir 25% e cair 25% não volta ao original?**
Porque os 25% de queda incidem sobre um valor 25% maior. De 100 para 125 e depois de 125 para 93,75: uma perda de 6,25%. Para voltar de 125 a 100, a queda precisa ser de 20%.

**Qual queda desfaz um aumento de 50%?**
Uma queda de 33,33%. De 100 para 150, é preciso perder um terço do valor para retornar a 100: 1/(1,5) − 1 = −33,33%.

**E se algo cair 100%?**
Não há volta. Com o valor em zero, nenhum percentual de alta recupera qualquer coisa — multiplicar zero por qualquer número continua dando zero. É o único caso em que a reversibilidade desaparece por completo.

## O que levar deste artigo

Aumentos e quedas percentuais são caminhos de mão dupla — mas de tamanhos diferentes. A queda que desfaz uma alta de r% é 1/(1+r) − 1, sempre um pouco menor que a alta original. Guarde o exemplo âncora: +10% e −10% sobre R$ 200 terminam em R$ 198, não em R$ 200.

Quer testar com seus próprios números? Use a [calculadora de variação percentual](/calculadoras/variacao-percentual/), confira o [cálculo de aumento percentual](/calculadoras/aumento-percentual/) e o [cálculo de redução percentual](/glossario/reducao-percentual/), ou entenda o que acontece ao aplicar [porcentagem de porcentagem](/calculadoras/porcentagem-de-porcentagem/).

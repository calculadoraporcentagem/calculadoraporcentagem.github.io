---
title: "Por que +10% e −10% não voltam ao valor inicial"
description: "Um preço sobe 10% e depois cai 10%, mas não volta ao original. Veja a explicação, a fórmula e como calcular a reversão correta."
weight: 6
date: 2026-10-09
related_calcs: ["aumento-percentual", "desconto-percentual", "variacao-percentual"]
related_terms: ["reversibilidade-percentual", "valor-base", "aumento-percentual"]
faq:
  - q: "Que percentual desfaz um aumento de 25%?"
    a: "Uma queda de 20%. Em geral, a reversão é 1/(1 + r) − 1."
  - q: "A ordem dos percentuais muda o resultado final?"
    a: "Não. Percentuais aplicados em sequência podem ser feitos em qualquer ordem e dão o mesmo resultado."
---
Percentuais sucessivos não se somam porque cada um é calculado sobre uma base diferente.

## O exemplo clássico

Um item custa R$ 200 e sobe 10%: vai para R$ 220. Se depois cai 10%, a queda é de R$ 22 (10% de 220), e o preço final é **R$ 198**, não R$ 200.

## A fórmula

Se um valor p sobe x% e depois cai x%, o resultado é p × (1 + 0,01x) × (1 − 0,01x) = p × (1 − (0,01x)²). A perda líquida é x% de x%. No exemplo, 10% de 10% = 1%, e 1% de 200 = R$ 2.

## Percentuais diferentes

Para um aumento de x% seguido de uma variação de y%, o final é p × (1 + 0,01x) × (1 + 0,01y). Um aumento de 10% e uma queda de 5% (y = −5) levam R$ 200 a R$ 209, que é 4,5% a mais.

## Qual percentual desfaz a mudança

Para voltar ao valor inicial, o cálculo de [reversibilidade percentual](/glossario/reversibilidade-percentual/) é 1/(1 + r) − 1, em que r é a taxa original em decimal.

- Aumento de 25% → queda de 20% (de $125 de volta a $100).
- Aumento de 100% → queda de 50%.

Esse cuidado é importante em contas de margem e markup.

Simule o seu caso com a [calculadora de aumento percentual](/calculadoras/aumento-percentual/) e a de [desconto percentual](/calculadoras/desconto-percentual/).

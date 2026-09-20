# Validação anti-ruído — CaraCore Hub

**Data:** 2026-09-19  
**Escopo:** loja `caracore-hub-releases`, incluindo raiz, `docs/` e pitch Tia Sócia.

## Resultado geral

**GO condicionado.** A promessa principal da loja está alinhada ao ecossistema: WAR/oficina atual separado do instalador Windows futuro, Java 25 definido como stack, SQLite/Bunker associado ao GA de 06/04/2027 e ausência de EXE publicado declarada.

O pitch Tia Sócia ainda exige revisão editorial antes de marcar a loja como 100% anti-ruído.

## Checklist

| Critério | Resultado | Evidência |
|---|---|---|
| EXE não é apresentado como disponível hoje | GO | `download.html` declara WAR atual e instalador futuro |
| WAR atual separado do EXE futuro | GO | `index.html`, `docs/index.html` e README distinguem oficina/PostgreSQL de GA/SQLite |
| Java 25 na stack pública | GO | páginas `tecnologia.html` raiz e `docs/tecnologia.html` |
| SQLite associado ao GA de 06/04/2027 | GO | home, download e tecnologia |
| PostgreSQL/Redis descritos como oficina atual | GO | home, download e tecnologia |
| Amazon como conector pronto | GO | nenhuma ocorrência nas páginas-alvo |
| Área 51/Python/Flask como identidade do Hub | GO | nenhuma ocorrência nas páginas-alvo |
| CTA `/delivery/hub` | GO | nenhuma ocorrência na loja |
| Tia Sócia rotulado como pitch ilustrativo na home | GO | home usa “conceito/proposta ilustrativa” |
| Pitch sem números apresentados como prova real | NO-GO | `slides/assets/js/apresentacao-tia-socia.js` contém piloto validado, adoção 100%, NPS, projeções e linguagem de trajetória |
| Cópias raiz e `docs/` sem Java 11 | GO | busca pública não encontrou Java 11 após alinhamento |
| Download atual descrito honestamente | GO | WAR/instruções; EXE futuro sem pacote publicado |

## Pendência única recomendada

Revisar o pitch Tia Sócia para marcar explicitamente como **cenário ilustrativo/projeção**, removendo ou qualificando afirmações que pareçam evidência de mercado já comprovada:

- “piloto já validou o modelo”;
- adoção de 100%;
- NPS acima de 90;
- três mil vidas transformadas;
- projeções financeiras apresentadas como trajetória comprovada.

A correção deve preservar o pitch como exemplo de uso do Hub, sem transformá-lo em depoimento, case ou prova social.

## Conclusão

A loja está apta quanto à promessa técnica e ao calendário do produto. O status final recomendado é **GO técnico / NO-GO editorial do pitch** até a revisão das afirmações acima.

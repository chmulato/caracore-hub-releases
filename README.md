# CaraCore Hub — Releases e vitrine

Repositório público de **delivery** e **vitrine** do **CaraCore Hub**: gestão logística interna para pontos de retirada (PUDOs) da Cara Core Informática.

**Foco do lançamento:** banco **SQLite** local, **autonomia local** (proteção contra instabilidade da internet). O GA do instalador Windows está previsto para **06/04/2027**. A pré-release atual já leva **Tomcat** embutido e SQLite local: a aplicação web 2.1 abre no computador do ponto de retirada.

---

## O que é o CaraCore Hub?

O **CaraCore Hub** é um sistema de gestão logística interna para **pontos de retirada (PUDOs)**:

- Recebimento de encomendas, conferência, alocação em posições de estoque, mapa de ocupação e retirada no balcão.
- Conectores com **Mercado Livre**, **Shopee** e **Temu** (webhooks e API), além da entrada manual. Amazon e B2W não têm conector nesta edição.
- Banco de dados **SQLite** local no computador do cliente.
- Aplicação web 2.1 sobre **Tomcat**, embutido no instalador Windows.

A pré-release Windows <code>v2.1.0-rc1.6</code> está publicada para avaliação, sem assinatura digital, com instalador e ZIP. Não é o GA. O instalador estável segue planejado para 06/04/2027. A tag <code>v2.1.0-rc1.2</code> permanece com o pacote de 08/10/2026, a <code>v2.1.0-rc1.1</code> com o de 06/10/2026 e a <code>v2.1.0-rc1</code> com o instalador de 05/10/2026. O instalador e a aplicação web 2.1 usam o mesmo banco SQLite local, no computador do ponto de retirada. Notas desta RC: <code>RELEASE_2.1.0-rc1.6.md</code>.

**Modelo comercial (20/10/2026):** o Hub é **Free** — não há licença mensal pelo produto. A pré-release atual é de avaliação e não é cobrada. O **suporte** é opcional e tem **pagamento recorrente de R$ 79,90/mês**, o mesmo valor do PDV Premium, a partir do GA. O suporte cobre a operação do ponto e as integrações com Mercado Livre, Shopee e Temu.

O desenvolvimento está no repositório **caracore-hub**. Este repositório (**caracore-hub-releases**) é o canal **público** de vitrine e, quando aplicável, artefatos de release (Releases no GitHub). O exemplo Tias Sócias é apenas um cenário ilustrativo de aplicação em última milha; não é produto, case ou prova de mercado.

---

## O que tem neste repositório?

| Onde   | O que tem |
|--------|-----------|
| **docs/** | Páginas publicadas no GitHub Pages: **index.html**, **download.html**, **canal-feedback.html**, **tecnologia.html** e assets da loja. |
| **Releases** | Quando publicadas: instalador Windows, ZIP da mesma edição e instruções em [Releases](https://github.com/chmulato/caracore-hub-releases/releases). |

---

## Espelho de delivery

| Onde | Papel |
|------|--------|
| **Loja oficial** | Vitrine e documentação: `https://hub.caracore.com.br/` |
| **Vitrine (este repo)** | Apresentação + link para Releases; domínio público `hub.caracore.com.br` (espelho GitHub Pages). |

O portfólio institucional da Cara Core referencia o produto. Este repo é a **vitrine** onde o cliente encontra a apresentação e o link para downloads/releases.

---

## Links

- **Portal (este repo):** [index.html](index.html) · [download.html](download.html) · [canal-feedback.html](canal-feedback.html) · [tecnologia.html](tecnologia.html)
- **Loja / vitrine:** [hub.caracore.com.br](https://hub.caracore.com.br/)
- **Documentação do produto (wiki):** [projeto-hub](https://wiki.caracore.com.br/projeto-hub.html)
- **Projeto principal:** [github.com/chmulato/caracore-hub](https://github.com/chmulato/caracore-hub)

Para ativar no GitHub Pages: Settings → Pages → Deploy from branch → main, diretório **/docs**. O arquivo **.nojekyll** evita processamento Jekyll.

---

*Cara Core Informática — CaraCore Hub (gestão logística, SQLite local, autonomia local).*

## Licenca

Este repositorio segue licenciamento proprietario institucional da Cara Core Informatica.
Consulte [LICENSE](LICENSE).


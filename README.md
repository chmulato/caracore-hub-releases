# CaraCore Hub — Releases e vitrine

Repositório público de **delivery** e **vitrine** do **CaraCore Hub**: plataforma de gestão logística e automação para e-commerce da Cara Core Informática.

**Foco do lançamento:** banco **SQLite** local, **autonomia local** (proteção contra instabilidade da internet). O instalador Windows está previsto para **06/04/2027**. A oficina web atual continua sendo distribuída como WAR e usa PostgreSQL no desenvolvimento.

---

## O que é o CaraCore Hub?

O **CaraCore Hub** é um sistema de gestão para centros de distribuição:

- Recebimento de pedidos, triagem, alocação em posições de estoque, mapa de ocupação, retirada.
- Integração com marketplaces (webhooks e API).
- Banco de dados **SQLite** no instalador Windows futuro — sem dependência de PostgreSQL no computador do cliente.
- Deploy como **WAR** em Tomcat (ou WildFly).

Na fase atual, o artefato disponível é o WAR para a oficina web. O EXE ainda não está publicado; a promessa de autonomia/SQLite pertence ao GA Windows planejado.

O desenvolvimento está no repositório **caracore-hub**. Este repositório (**caracore-hub-releases**) é o canal **público** de vitrine, documentação de delivery e, quando aplicável, artefatos de release (Releases no GitHub). O Hub é um negócio aplicável a operações como o projeto **Tia Sócia**, que se beneficia da gestão logística e integração com marketplaces.

---

## O que tem neste repositório?

| Onde   | O que tem |
|--------|-----------|
| **Raiz** | README, **index.html**, **download.html**, **canal-feedback.html**, **tecnologia.html** — portal de delivery no estilo dos outros produtos Cara Core (Minerador 4.0, Seed, etc.). |
| **Releases** | Quando publicadas: artefatos de deploy (WAR, instruções) em [Releases](https://github.com/chmulato/caracore-hub-releases/releases). |

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

Para ativar no GitHub Pages: Settings → Pages → Deploy from branch → main (raiz). O arquivo **.nojekyll** evita processamento Jekyll.

---

*Cara Core Informática — CaraCore Hub (gestão logística, SQLite local, autonomia local).*

## Licenca

Este repositorio segue licenciamento proprietario institucional da Cara Core Informatica.
Consulte [LICENSE](LICENSE).


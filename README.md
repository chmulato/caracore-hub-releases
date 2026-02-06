# CaraCore Hub — Releases e vitrine

Repositório público de **delivery** e **vitrine** do **CaraCore Hub**: plataforma de gestão logística e automação para e-commerce da Cara Core Informática.

**Foco:** banco **SQLite** local, **autonomia local** (proteção contra instabilidade da internet). Integração com marketplaces (Mercado Livre, Shopee, Temu), recebimento, triagem, estoque e retirada.

---

## O que é o CaraCore Hub?

O **CaraCore Hub** é um sistema de gestão para centros de distribuição:

- Recebimento de pedidos, triagem, alocação em posições de estoque, mapa de ocupação, retirada.
- Integração com marketplaces (webhooks e API).
- Banco de dados **SQLite** no servidor — sem dependência de PostgreSQL; operação local e autônoma.
- Deploy como **WAR** em Tomcat (ou WildFly).

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
| **Domínio Cara Core (matriz)** | Portal completo: `https://caracore.com.br/delivery/hub/` |
| **Vitrine (este repo)** | Apresentação + link para Releases; GitHub Pages em `chmulato.github.io/caracore-hub-releases` |

O **delivery/hub** no site Cara Core é o portal completo. Este repo é a **vitrine** onde o cliente encontra a apresentação e o link para downloads/releases.

---

## Links

- **Portal (este repo):** [index.html](index.html) · [download.html](download.html) · [canal-feedback.html](canal-feedback.html) · [tecnologia.html](tecnologia.html)
- **Delivery (matriz):** [caracore.com.br/delivery/hub/](https://caracore.com.br/delivery/hub/)
- **Portfólio:** [CaraCore Hub no portfólio](https://caracore.com.br/portfolio.html#caracore-hub)
- **Projeto principal:** [github.com/chmulato/caracore-hub](https://github.com/chmulato/caracore-hub)

Para ativar no GitHub Pages: Settings → Pages → Deploy from branch → main (raiz). O arquivo **.nojekyll** evita processamento Jekyll.

---

*Cara Core Informática — CaraCore Hub (gestão logística, SQLite local, autonomia local).*

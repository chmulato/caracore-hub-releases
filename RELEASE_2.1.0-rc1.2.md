Pré-release para avaliação no Windows. Não é o GA de 06/04/2027 e não está homologada para produção.

O download da loja é este pacote, de 08/10/2026. A tag `v2.1.0-rc1.1` conserva o pacote de 06/10/2026. A tag `v2.1.0-rc1` conserva o instalador de 05/10/2026. O programa identifica a versão 2.1.0-rc1.2.

## Instalador

Windows x64, NSIS, sem assinatura Authenticode. Não desative SmartScreen, Defender ou antivírus. O hash identifica o arquivo; não autentica o editor.

- Arquivo: `CaraCore.Hub-2.1.0-rc1.2-win-x64.exe`
- Tamanho: 281.529.680 bytes
- SHA-256: `50d38ff0ee4defce5bb2598967331d0295fb4817dbec59df5d3e7574b22975e5`

## ZIP

A mesma edição, sem instalador. Extraia a pasta e execute `CaraCore Hub.exe`.

- Arquivo: `CaraCore.Hub-2.1.0-rc1.2-win-x64.zip`
- Tamanho: 333.342.883 bytes
- SHA-256: `ec82b2bd57053c252faac4fdbb0066e9a5cea2df293562b35384107e5cb624b4`

## O que mudou em relação à v2.1.0-rc1.1

O manifesto sai do build, com o commit `463a85413205e772ffa6860d4b506309bb6cc951`, árvore limpa e data anterior ao artefato. FileVersion e ProductVersion acompanham a tag. O perfil SQLite novo cria `config_metrics_history` e `config_alert`. A UAC.dll de 2015 continua no pacote e o instalador não a chama.

## O que o pacote contém

Edição Free local para encomendas de Mercado Livre, Shopee e Temu. Electron, Java 25, Tomcat e SQLite em modo WAL no computador. PostgreSQL e Redis não são necessários para instalar e usar os fluxos locais. As integrações com os marketplaces precisam de internet e das credenciais do canal. Amazon e B2W não são canais desta edição.

O primeiro uso cria o administrador na tela de setup. Não há senha compartilhada publicada.

macOS e Linux não fazem parte desta release. Atualização sobre uma versão anterior, backup e restauração não fazem parte deste aceite.

Feedback: https://hub.caracore.com.br/canal-feedback.html

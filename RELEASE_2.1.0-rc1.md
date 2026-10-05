Pré-release para avaliação no Windows. Não é o GA de 06/04/2027 e não está homologada para produção.

## Esta publicação

- Windows x64, instalador NSIS.
- Sem assinatura Authenticode. Não desative SmartScreen, Defender ou antivírus.
- Compare o SHA-256 obtido no seu computador com o valor abaixo. O hash identifica o arquivo; não autentica o editor.
- macOS e Linux não fazem parte desta release.

## O que o pacote contém

Edição Free local para encomendas de Mercado Livre, Shopee e Temu. Electron, Java 25, Tomcat e SQLite em modo WAL no computador. PostgreSQL e Redis não são necessários para instalar e usar os fluxos locais. As integrações com os marketplaces precisam de internet e das credenciais do canal. Amazon e B2W não são canais desta edição.

O primeiro uso cria o administrador na tela de setup. Não há senha compartilhada publicada.

## Limites conhecidos

- Avaliação em perfil novo. Não é o instalador de produção previsto para 06/04/2027.
- Atualização sobre uma versão anterior, backup e restauração não fazem parte deste aceite.
- Código do binário: `46d1599e81dda58048f1a35250d025d5f0e3c782` na oficina `caracore-hub`.
- O instalador grava `%LOCALAPPDATA%\CaraCore Hub\install.log` e avisa se o destino estiver em pasta temporária ou no OneDrive.
- A causa do crash `0xC0000005` observado no instalador anterior não está confirmada. A suíte 9/9 foi executada no asset anterior (`f59b959d34c97f5048ebf2cfaadeb42a7e5b7d84597b15db00d790779def29ae`, 285.746.041 bytes), substituído por este arquivo na mesma tag.

## Integridade

- Arquivo: `CaraCore.Hub-2.1.0-rc1-win-x64.exe`
- Tamanho: 285.745.501 bytes
- SHA-256: `86f010a33359f92fbc03452d7a2d5f7a045b75f43c62dd3168c3e3c302c6e4e9`

Feedback: https://hub.caracore.com.br/canal-feedback.html

Pré-release para avaliação no Windows. Não é o GA de 06/04/2027 e não está homologada para produção.

O download da loja é este pacote, de 25/10/2026. A tag `v2.1.0-rc1.2` conserva o pacote de 08/10/2026, a `v2.1.0-rc1.1` o de 06/10/2026 e a `v2.1.0-rc1` o instalador de 05/10/2026. O programa identifica a versão 2.1.0-rc1.6.

## Instalador

Windows x64, NSIS, sem assinatura Authenticode. Não desative SmartScreen, Defender ou antivírus. O hash identifica o arquivo; não autentica o editor.

- Arquivo: `CaraCore.Hub-2.1.0-rc1.6-win-x64.exe`
- Tamanho: 274.160.424 bytes
- SHA-256: `05b87529112db79db67e50d1e708c1dc8568daf69c905f73bfb1abe7b4afc8c4`

## ZIP

A mesma edição, sem instalador. Extraia a pasta e execute `CaraCore Hub.exe`.

- Arquivo: `CaraCore.Hub-2.1.0-rc1.6-win-x64.zip`
- Tamanho: 324.500.797 bytes
- SHA-256: `fe3400c7a3d4101452f95d2f26ca82b0c7bfe84d427dbfaa6659af17a17c9c0d`

## O que mudou em relação à v2.1.0-rc1.2

- **Permissão por perfil, não só por tela.** ADMIN, SUPERVISOR e OPERADOR deixaram de ver a mesma coisa: a API responde `401` sem sessão e `403` quando o perfil não tem o papel exigido. O `403` do servidor sai em **JSON**, com o mesmo formato das rotas de administração. Medido no próprio pacote: ADMIN `200` × OPERADOR/SUPERVISOR `403` em `/api/metrics/config/alerts`, `403` em `/api/admin/logs/recent` e no POST de `/admin/usuarios/acao`; `/api/pedidos` liberado nos três. Na `v2.1.0-rc1.2` a mesma chamada devolvia `200` para OPERADOR.
- **Auditoria de usuários gravada no banco.** Criar, editar, desativar, ativar, redefinir senha e alterar perfil passam a registrar em `usuario_auditoria` (migração V18, com os seis valores do domínio validados por CHECK) e a ser lidas na tela **Auditoria e Logs** (`/admin/auditoria`). Nesta RC essa tela se abre pela URL: o item de menu chega na próxima pré-release. Antes, a ação administrativa podia responder sucesso sem gravar a auditoria; agora, se a gravação falhar, a operação **falha com erro** em vez de informar sucesso.
- **Menos superfície no pacote.** `test.jsp`, `usuarios-demo.jsp` e o servlet de usuários de demonstração saíram do WAR; a aplicação ROOT padrão do Tomcat não é mais embarcada. Arquivo inexistente responde `404`.
- **Banco.** Migração do zero validada em SQLite real, com escrita concorrente sem `SQLITE_BUSY`. A V16 alinhou os CHECKs de status aos enums do domínio e a V18 cria `usuario_auditoria` com cinco índices. Migrações são incrementais e não alteram V1–V17.
- **Canais.** Mercado Livre, Shopee e Temu continuam sendo os únicos com conector. **Amazon e B2W seguem fora desta edição**, e a seleção de canal na edição Free fica travada nesses três.

## O que o pacote contém

Edição Free local para encomendas de Mercado Livre, Shopee e Temu. Electron, Java 25, Tomcat 10.1 e SQLite em modo WAL no computador do ponto. PostgreSQL e Redis não são necessários para instalar e usar os fluxos locais. As integrações com os marketplaces precisam de internet e das credenciais do canal.

O login é por telefone, a sessão expira por inatividade em 30 minutos (padrão do Tomcat: o aplicativo não define `session-config`) e a recuperação de senha usa um **código offline de uso único**, sem envio por e-mail ou SMS. O primeiro uso cria o administrador na tela de setup; não há senha compartilhada publicada.

macOS e Linux não fazem parte desta release. **Atualização sobre uma versão anterior, backup e restauração não fazem parte deste aceite.** Os artefatos são unsigned: o hash confere o arquivo, não autentica o editor.

Feedback: https://hub.caracore.com.br/canal-feedback.html

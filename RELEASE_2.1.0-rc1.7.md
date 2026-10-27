Pré-release para avaliação no Windows. Não é o GA de 06/04/2027 e não está homologada para produção.

O download da loja é este pacote, de 27/10/2026. A tag `v2.1.0-rc1.6` conserva o pacote de 25/10/2026, a `v2.1.0-rc1.2` o de 08/10/2026, a `v2.1.0-rc1.1` o de 06/10/2026 e a `v2.1.0-rc1` o instalador de 05/10/2026. O programa identifica a versão 2.1.0-rc1.7.

## Instalador

Windows x64, NSIS, sem assinatura Authenticode. Não desative SmartScreen, Defender ou antivírus. O hash identifica o arquivo; não autentica o editor.

- Arquivo: `CaraCore.Hub-2.1.0-rc1.7-win-x64.exe`
- Tamanho: 274.162.562 bytes
- SHA-256: `1563f1bd343b0044f9a64dd9bb7d3a1604761ee7f1e2354e8663b693cb310ba1`

## ZIP

A mesma edição, sem instalador. Extraia a pasta e execute `CaraCore Hub.exe`.

- Arquivo: `CaraCore.Hub-2.1.0-rc1.7-win-x64.zip`
- Tamanho: 324.502.796 bytes
- SHA-256: `924af1960ccda606e4b3979ff36741f7e78228f8f77c396ccb985878b940b37e`

## O que mudou em relação à v2.1.0-rc1.6

- **Uma única política de senha: 12 caracteres, em todos os caminhos.** Antes havia cinco regras diferentes: 12 no primeiro acesso e na recuperação por código offline, e **6** na troca pelo perfil, na definição de nova senha por código e nas telas de usuários — ou seja, quem já estava logado podia rebaixar a própria senha. A senha temporária gerada pelo sistema tinha **8** caracteres, abaixo do mínimo que o próprio produto exigia, e travava quem a recebia. Agora o mínimo é 12 e o máximo é 72 bytes (o limite do BCrypt) no setup, na recuperação, na troca pelo perfil e no cadastro pelo administrador, e a senha temporária passa a ter **16** caracteres, gerada com `SecureRandom`.
- **Auditoria e Logs passa a ter item no menu.** A tela de auditoria de usuários (`/admin/auditoria`, perfil ADMIN, lida da tabela `usuario_auditoria`) aparece em **Administração → Auditoria e Logs**, logo abaixo de **Log de Auditoria** (`/auditoria/lista`, que é outra tela e continua com filtros e exportação). Na `v2.1.0-rc1.6` ela só se abria digitando a URL.
- **Nada mais mudou de comportamento nesta RC.** Permissão por perfil com `403` em JSON, auditoria de usuários gravada no banco (migração V18), canais travados em Mercado Livre, Shopee e Temu, e a saída de `test.jsp`, `usuarios-demo.jsp` e da aplicação ROOT padrão do Tomcat continuam vindo da `v2.1.0-rc1.6`.

## O que o pacote contém

Edição Free local para encomendas de Mercado Livre, Shopee e Temu. Electron, Java 25, Tomcat 10.1 e SQLite em modo WAL no computador do ponto. PostgreSQL e Redis não são necessários para instalar e usar os fluxos locais. As integrações com os marketplaces precisam de internet e das credenciais do canal.

O login é por telefone, a sessão expira por inatividade em 30 minutos (padrão do Tomcat: o aplicativo não define `session-config`) e a recuperação de senha usa um **código offline de uso único**, sem envio por e-mail ou SMS. O primeiro uso cria o administrador na tela de setup; não há senha compartilhada publicada.

macOS e Linux não fazem parte desta release. **Atualização sobre uma versão anterior, backup e restauração não fazem parte deste aceite.** Os artefatos são unsigned: o hash confere o arquivo, não autentica o editor.

## Verificação desta build

- `npm run verify` aprovado no mesmo código do pacote, com 2.555 testes, 8 ignorados e 0 falhas, `promotable=true` e árvore limpa.
- O WAR servido é o mesmo nos dois caminhos do pacote (`resources\app` e `resources\runtime\tomcat\webapps`), SHA-256 `73b9adf5233598362f34cd4a7ac4128fd71c5805aede8f13110cd8d0fc2023b0`.
- E2E do instalador: 62 verificações aprovadas, 1 aviso esperado (primeiro boot antes do setup) e nenhuma falha. E2E do ZIP: 60 aprovadas, o mesmo aviso e nenhuma falha.
- Fora do aceite, como nas RCs anteriores: homologação de produto, assinatura de código, atualização sobre a versão anterior e backup/restauração.

Feedback: https://hub.caracore.com.br/canal-feedback.html

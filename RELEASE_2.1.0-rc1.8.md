Edição Windows x64 do CaraCore Hub, publicada como estável/Latest por autorização do responsável em 31/10/2026. O programa identifica a versão **2.1.0-rc1.8**. A classificação de distribuição não substitui o aceite formal de produto.

## ZIP (único pacote desta publicação)

Windows x64. Extraia a pasta e execute `CaraCore Hub.exe`.

- Arquivo: `CaraCore-Hub-2.1.0-rc1.8-windows-x64.zip`
- Tamanho: 324.536.724 bytes
- SHA-256: `3c4e61b2e192fece6667ccfbc79d735f3fad7ce8542e50c492b9ef24a9743334`

Não há instalador NSIS nesta release; o pacote publicado é o ZIP portátil.

## O que mudou em relação à v2.1.0-rc1.7

- **Versão alinhada em 2.1.0-rc1.8** no Maven e no pacote Electron.
- **Canal de atualização no launcher:** o Electron usa por padrão `https://api.caracore.com.br/releases/hub/latest.json`, aceita `UPDATE_URL` apenas com HTTPS (ou localhost) e encaminha o token de licença ao processo Java sem gravar em log.
- **Rota pública de atualização:** `/api/atualizacao` passou a ser pública no `AuthFilter` por correspondência exata; subrotas continuam privadas.
- **Cliente tolerante a falhas:** respostas 200, 204, 503 e erro de rede são tratadas sem travar a atualização.

## Verificação desta build

- `./mvnw -B clean verify -Ptomcat` com JDK 25: **2.585 testes, 8 ignorados, 0 falhas**.
- Pipeline E1–E6 com status **PASS**, `promotable=true`, árvore limpa no commit `98742731f1ba02287f26829096817a660c93f810` (`verify.json` de 31/10/2026).
- O mesmo WAR aparece nos dois caminhos do pacote (`resources\app` e `resources\runtime\tomcat\webapps`), SHA-256 `0a1f9f675548e84176cd162082b667567723f9a192afa52891b3592dcacb250b`.

## O que o pacote contém

Electron 35.7.5, Java 25 (Temurin 25.0.4.1+1), Tomcat 10.1.60 e SQLite em modo WAL. A edição é local; PostgreSQL e Redis não são necessários. O login é por telefone e a recuperação usa código offline de uso único.

macOS e Linux não fazem parte desta release. Os artefatos são **unsigned**: o hash confere o arquivo, não autentica o editor. Não desative SmartScreen, Defender ou antivírus.

## Nota de empacotamento

O manifesto `release-manifest-zip.json` registra o artefato do electron-builder `CaraCore Hub-2.1.0-rc1.8-win-x64.zip`. O arquivo publicado com o nome normalizado `CaraCore-Hub-2.1.0-rc1.8-windows-x64.zip` é byte a byte o mesmo: tamanho e SHA-256 idênticos.

## Atualização

Esta é a release **Latest** do repositório a partir desta publicação; o canal central passa a servi-la em `https://api.caracore.com.br/releases/hub/latest`.

Feedback: https://hub.caracore.com.br/canal-feedback.html

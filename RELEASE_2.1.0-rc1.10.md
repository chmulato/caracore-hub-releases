Edição Windows x64 do CaraCore Hub, publicada como estável/Latest por autorização do responsável em 07/11/2026. O programa identifica a versão **2.1.0-rc1.10**. A classificação de distribuição não substitui o aceite formal de produto: estes bytes ainda não passaram por rodada de QA independente.

## ZIP (único pacote desta publicação)

Windows x64. Extraia a pasta e execute `CaraCore Hub.exe`.

- Arquivo: `CaraCore-Hub-2.1.0-rc1.10-windows-x64.zip`
- Tamanho: 228.354.977 bytes
- SHA-256: `0b18fbcf3af02d53a341ac5b83af9132a0ef201e698585160f332d3ad8bdae00`

Não há instalador NSIS nesta release; o pacote publicado é o ZIP portátil.

## O que mudou em relação à v2.1.0-rc1.8

- **Atualização assinada (base):** chave pública Ed25519 embutida no WAR (`hub-release-public.pem`), conferente `AtualizacaoVerificador` (SHA-256 + assinatura do manifesto, fail-closed) e envelope no canal (`releaseDate`, `kid`, `signature`). O asset `latest.json` desta release já vai **assinado**.
- **Runtime enxuto:** JRE montada com `jlink` só com os módulos usados no Windows/Linux. O pacote Windows caiu de 324,5 MB (rc1.8) para 228,4 MB.
- **Correção do teto mensal do plano:** a fronteira do mês civil passou a sair de `FusoOperacao` (America/Sao_Paulo), com prova vermelho→verde em JVM UTC.
- **Dependências:** Tomcat embed 10.1.60, Jackson 2.22.3, Netty 4.1.137.Final, log4j 2.25.5, commons-lang3 3.18.0, com SCA offline 116/116 aprovadas.
- **Smoke Linux x64:** sessão GNOME simulada e cofre `gnome_libsecret` no runtime empacotado (10/10 specs na CI).

## Verificação desta build

- `./mvnw -B clean verify -Ptomcat` com JDK 25: **2.608 testes, 8 ignorados, 0 falhas**.
- Pipeline E1–E6 com status **PASS**, `promotable=true`, árvore limpa no commit `7a3df193491f3aabadc9b4bb458af69cdfb08baf` (`verify.json` de 07/11/2026, 13min58s).
- E2E do ZIP empacotado: **60 PASS / 1 WARN / 0 FAIL de 61**.
- CI no commit publicado (`9746911`): run `42415755367` **success**, com `verify` 2.608/0 e smoke Linux x64 10/10.
- WAR empacotado: **69.791.168 bytes**, SHA-256 `4157564959bfd697093b6150bfd86b2a9bbe2a1caa02d0e794ec435653964004`, contendo a chave pública e o conferente.

## Canal de atualização

O manifesto `latest.json` é assinado com a chave `hub-release-2026-a` e confere com a chave pública embutida no programa. Na bancada, o pacote servido em loopback foi **APROVADO** pelo conferente e uma cópia com 1 byte alterado foi recusada com **HASH_DIVERGENTE**, removendo o arquivo.

**Esta versão não baixa nem aplica atualização sozinha.** A instalação é manual (extrair o ZIP e executar `CaraCore Hub.exe`); o download, a aplicação, o reinício e o rollback automáticos são a etapa seguinte (`2.2.0-rc1`).

## O que o pacote contém

Electron 35.7.5, Java 25 (Temurin 25.0.4.1+1), Tomcat 10.1.60 e SQLite em modo WAL. A edição é local; PostgreSQL e Redis não são necessários. O login é por telefone e a recuperação usa código offline de uso único.

macOS e Linux não fazem parte desta release. Os binários são **unsigned**: o hash confere o arquivo, não autentica o editor. Não desative SmartScreen, Defender ou antivírus.

## Nota de empacotamento

O manifesto `release-manifest-zip.json` registra o artefato do electron-builder `CaraCore Hub-2.1.0-rc1.10-win-x64.zip`. O arquivo publicado com o nome normalizado `CaraCore-Hub-2.1.0-rc1.10-windows-x64.zip` é byte a byte o mesmo: tamanho e SHA-256 idênticos. A release também traz `CaraCore-Hub-2.1.0-rc1.10-SHA256SUMS.txt`, `SHA256SUMS` e o manifesto assinado `latest.json`.

## Atualização

Esta é a release **Latest** do repositório a partir desta publicação; o canal central passa a servi-la em `https://api.caracore.com.br/releases/hub/latest.json`.

Feedback: https://hub.caracore.com.br/canal-feedback.html

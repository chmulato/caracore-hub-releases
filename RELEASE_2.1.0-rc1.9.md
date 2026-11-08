Edição Windows x64 do CaraCore Hub, publicada como estável/Latest por autorização do responsável em 07/11/2026. O programa identifica a versão **2.1.0-rc1.9**. A classificação de distribuição não substitui o aceite formal de produto.

## ZIP (único pacote desta publicação)

Windows x64. Extraia a pasta e execute `CaraCore Hub.exe`.

- Arquivo: `CaraCore-Hub-2.1.0-rc1.9-windows-x64.zip`
- Tamanho: 228.344.888 bytes
- SHA-256: `0b0dfef637ac14e52e4ba48e37f5634140906b3d54be250f7789a8546197c8e0`

Não há instalador NSIS nesta release; o pacote publicado é o ZIP portátil.

## O que mudou em relação à v2.1.0-rc1.8

- **Runtime Java próprio (jlink):** o pacote passa a levar uma imagem Java gerada com o jlink do JDK 25, com 22 módulos e locales en/pt-BR, em vez da JRE completa. É a maior parte da redução: o ZIP cai de 324.536.724 para 228.344.888 bytes (−96.191.836 bytes).
- **Uma cópia do WAR:** o WAR deixou de ser duplicado em `resources/runtime/tomcat/webapps`; o launcher copia de `resources/app` para o diretório de trabalho do perfil. O pacote passa a ter uma única cópia.
- **WAR só é copiado quando muda:** antes o arquivo era reescrito a cada subida e o Tomcat reexpandia o WAR inteiro; agora a cópia é feita por rename atômico e só quando o conteúdo muda.
- **Subida observável:** cada etapa do launcher (Electron pronto, dados, cofre, porta, runtime, WAR, Java, porta ouvindo, readiness, setup) é registrada em console e em `electron-startup.log`.
- **Espera por readiness:** o delay fixo e a consulta à raiz foram trocados pela espera da porta de escuta e de `/api/health/ready` (200).
- **Atualização de dependências:** Tomcat embed 10.1.60, Jackson 2.22.3, Netty 4.1.137.Final, log4j 2.25.5 e commons-lang3 3.18.0.
- **SCA offline no gate E6:** o catálogo passa a comparar o SBOM CycloneDX com uma allowlist versionada e avisos internos, sem dependência de NVD ou de serviço de terceiros. O E6 mediu 116 dependências, 116 aprovadas, 0 bloqueantes.
- **Ferramentas da chave de assinatura:** entram no repositório o gerador e o conferidor da chave Ed25519 de release. A chave ainda não foi gerada, então **o pacote continua unsigned**.

## Verificação desta build

- `./mvnw -B clean verify -Ptomcat` com JDK 25: **2.586 testes, 8 ignorados, 0 falhas**.
- Catálogo E1–E6 com status **PASS**, `promotable=true`, árvore limpa no commit `7fe699e2309b26a2ab8964b54866c5caf29e2d4a` (`verify.json` de 07/11/2026, início 16:33:05Z e fim 16:47:14Z).
- E5 Playwright: 10 specs verdes. E6: ESLint limpo, SpotBugs sem achado alto ou médio, SCA local 116/116.
- E2E do pacote extraído: **60 PASS, 1 WARN, 0 FAIL** em 61 verificações; o WARN é a primeira consulta de saúde antes do setup, que responde 302 para `/setup` como esperado.
- O WAR do pacote é `resources/app/caracore-hub.war`, SHA-256 `fb511d91e73b113784fb998601e35149d26ec2b8a6c601950ef19539b56b2c6d`, o mesmo WAR medido no E4.

## O que o pacote contém

Electron 35.7.5, Java 25 (Temurin 25.0.4.1+1, imagem jlink com 22 módulos), Tomcat 10.1.60 e SQLite em modo WAL. A edição é local; PostgreSQL e Redis não são necessários. O login é por telefone e a recuperação usa código offline de uso único.

macOS e Linux não fazem parte desta release. Os artefatos são **unsigned**: o hash confere o arquivo, não autentica o editor. Não desative SmartScreen, Defender ou antivírus.

## Nota de empacotamento

O manifesto `release-manifest-zip.json` registra o artefato do electron-builder `CaraCore Hub-2.1.0-rc1.9-win-x64.zip`. O arquivo publicado com o nome normalizado `CaraCore-Hub-2.1.0-rc1.9-windows-x64.zip` é byte a byte o mesmo: tamanho e SHA-256 idênticos.

## Atualização

Esta é a release **Latest** do repositório a partir desta publicação; o canal central passa a servi-la em `https://api.caracore.com.br/releases/hub/latest`.

Feedback: https://hub.caracore.com.br/canal-feedback.html

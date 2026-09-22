/**
 * CaraCore Hub — Apresentação Programa Tias Sócias (pitch deck)
 * Paths relativos à página HTML (em slides/): assets/img/, assets/audio/
 */
(function() {
    'use strict';

    var ASSETS_IMG = 'assets/img/';
    var ASSETS_AUDIO = 'assets/audio/';

    var currentSlide = 1;
    var totalSlides = 21;
    var audioElement = null;
    var isPlaying = false;
    var currentSpeed = 1;
    var audioCacheVersion = '20260410_v3';

    var slideNarrations = [
        "Bem-vindo ao CaraCore Hub. Esta apresentação mostra o Programa Tias Sócias como uma proposta de última milha com impacto social. O objetivo é ilustrar como tecnologia simples, confiança comunitária e operação de bairro podem ampliar acesso à entrega e gerar renda complementar para participantes do programa.",
        "No Brasil, a entrega de última milha é cara e ineficiente. Um único pacote pode custar entre 15 e 20 reais para entregar em um bairro. As grandes marketplaces como Mercado Livre e Shopee perdem até 40 por cento de margem em logística de última milha. Os bairros não possuem infraestrutura logística. Vizinhos perdem tempo esperando entregas. Entregas são devolvidas frequentemente por ninguém estar em casa. Simultaneamente, temos 16 milhões de brasileiros acima de 55 anos. A maioria vive com aposentadorias entre 1.200 e 2.000 reais por mês. Muitos gostariam de trabalhar para ganhar renda extra, mas não encontram oportunidades adequadas. Esses são dois mercados gigantes, não resolvidos. Aqui está nossa oportunidade.",
        "Apresentamos o Programa Tias Sócias. O modelo é simples: uma participante recebe pacotes, organiza por rota curta e notifica vizinhos pelo WhatsApp para retirada de proximidade. O resultado esperado é reduzir custo de última milha e aumentar eficiência local, com geração de renda complementar em formato comunitário.",
        "O fluxo operacional é muito simples. Deixe-me decompor em quatro etapas. Etapa um: o courier coleta os pacotes diretamente na casa da participante do Programa Tias Sócias. Segurança é garantida com câmera de vigilância simples. Etapa dois: a idosa organiza os pacotes por bloco ou grupo de vizinhos. Ela usa um aplicativo simples baseado em WhatsApp para notificar. Etapa três: os vizinhos veem a notificação e confirmam a coleta. Geolocalização simples mostra a distância exata da casa da idosa. Etapa quatro: os pacotes são coletados dentro de poucas horas. A idosa registra a entrega realizada no aplicativo e ganha sua comissão. Simplicidade é a chave. Não precisamos reinventar a logística. Precisamos de confiança comunitária.",
        "Qual a renda complementar estimada por participante? Entre 400 e mil e duzentos reais por mês. Cada pacote entregue gera uma comissão entre 1 real e 50 centavos e 3 reais e 50 centavos. Uma idosa ativa consegue entregar entre 100 e 200 pacotes por mês, dependendo do bairro. Além disso, há uma taxa de software mensal apenas 19 reais que financia a plataforma. Para comparar: a aposentadoria mínima brasileira é de 1.320 reais. Uma participante pode dobrar sua renda mensal apenas entregando pacotes alguns dias por semana. Essa não é esmola. É trabalho digno. É empoderamento econômico.",
        "Agora, uma projeção meramente ilustrativa de crescimento. Os números desta apresentação são hipóteses para discutir cenários de última milha, não metas aprovadas, resultados realizados ou evidências de operação.",
        "Deixe-me decompor o mercado endereçável. O mercado total: doze bilhões de reais em custos anuais de última milha no Brasil. Esse é nosso TAM. O mercado inteiro de última milha. Nosso mercado endereçável: dois ponto quatro bilhões de reais. Focamos em bairros urbanos, em cidades acima de 500 mil habitantes, onde a entrega é cara e ineficiente. Nosso mercado atingível nos primeiros cinco anos: trezentos milhões de reais. Ou seja, apenas dois por cento do SAM. Somos ambiciosos, mas realistas. Estamos mirando em um segmento específico, com uma solução específica, mas o mercado é gigantesco.",
        "O que nos torna defensáveis? Três elementos tecnológicos simples, mas juntos criam um moat impossível de copiar rapidamente. Diferencial um: WhatsApp. Não desenvolvemos um aplicativo novo. Integramos ao WhatsApp que idosas já usam. Aqui não há curva de aprendizado. Não há fricção de adoção. Diferencial dois: Geolocalização simples. A entrega máxima é de 300 metros. Isso resolve o problema de logística de última milha de forma radical. A economia é máxima. Diferencial três: Sistema de reputação. Os vizinhos classificam a participante com stars. Essa reputação é acumulada, criando confiança comunitária que nenhuma empresa externa pode replicar rapidamente. Esses três elementos juntos formam um moat defensivo baseado em comportamento comunitário real.",
        "Este slide não apresenta um piloto real. Ele descreve perguntas que deveriam ser testadas antes de qualquer operação: adesão de participantes, preferência dos vizinhos, tempo de retirada e interesse de parceiros. Não há resultados, depoimentos ou integrações confirmadas nesta apresentação.",
        "A oficina web usa Java 25 com Jakarta EE 10 em Tomcat 10.1, PostgreSQL 15 no desenvolvimento, Redis 7 opcional, Hibernate 6, Flyway, JSP e JavaScript ES6. O instalador Windows planejado para 06/04/2027 leva Java 25 embutido, Tomcat local e SQLite para operar no computador do cliente.",
        "Os números desta seção são apenas um exercício de modelagem. Custos, receitas, margem, aquisição e retorno dependeriam de testes operacionais, contratos e dados verificáveis. Nada aqui deve ser lido como resultado validado ou promessa financeira.",
        "Uma projeção de cinco anos pode ser usada apenas como exercício de planejamento. Este material não apresenta receita, crescimento, unit economics, CAC ou retenção validados; qualquer número dependeria de dados e testes futuros.",
        "Este cenário ilustra uma possível aplicação do Hub em uma operação de última milha. Ele não afirma que existe um SaaS público, receita atual, clientes, parceiros ou dois motores de negócio. Qualquer modelo comercial dependeria de validação separada.",
        "Em resumo: este é um cenário de discussão sobre possíveis usos do CaraCore Hub em última milha e impacto social. Escala, receita, adesão, resultados e sustentabilidade permanecem hipóteses a validar.",
        "Deixe-me apresentar o time. Nosso founder tem dezoito anos de experiência em tecnologia. Começou sua carreira construindo infraestrutura. Trabalhou em startups que escalaram para centenas de milhões em receita. Mas há cinco anos, decidi que sucesso sem propósito não era verdadeiro sucesso. A ideia do Programa Tias Sócias começou quando visitei a casa da minha avó, que vivia sozinha com uma aposentadoria mínima. Vi nela talento, disposição de trabalhar, e comunidade ao redor. Percebi que o problema não era falta de capacidade ou vontade. O problema era oportunidade. Ao redor do founder, construímos um time híbrido com engenheiros experientes, gerente de operações com background em logística, especialista em parcerias que já trabalhou com Mercado Livre e Shopee, e líder de impacto social com background em ONGs comunitárias. Tecnologia é importante. Mas sem propósito social, somos apenas outro app.",
        "Investimento estratégico. Unimos escalabilidade de plataforma com impacto social mensurável. O modelo busca equilíbrio entre viabilidade operacional, retorno financeiro e valor social no território.",
        "Se vocês investem quinhentos mil reais hoje, qual é o retorno esperado? Payback: trinta e dois meses. Em menos de três anos, o investimento é totalmente recuperado. Taxa interna de retorno ao longo de cinco anos: cento e vinte e sete por cento. Isso significa que um investimento de cem reais em dia um vale quatrocentos e vinte e sete reais em dia mil e oitocentos e vinte e cinco dias. Para contexto: investimentos de venture capital típicos buscam entre trinta e cinquenta por cento de IRR. Nós estamos projetando mais do dobro. Claro, esses números são projeções. A realidade pode variar. Mas estão fundamentados em dados reais do piloto.",
        "Uma aplicação desse tipo poderia envolver marketplaces, prefeituras, operadores logísticos e comunidades. Esta apresentação não confirma conversas, contratos, integrações ou interesse comercial de qualquer parceiro.",
        "Os riscos centrais seriam produto, adesão, segurança, operação, parceiros e sustentabilidade financeira. Eles não estão endereçados por este material: exigem piloto documentado, métricas auditáveis e validação operacional antes de qualquer promessa.",
        "Este é nosso slide de backup, para perguntas técnicas detalhadas durante due diligence. Aqui temos: análise demográfica detalhada da população idosa brasileira; projeção de crescimento por região geográfica; análise de competidores; roadmap técnico de doze meses; estudos de caso do piloto; análise de sensibilidade financeira. Pergunte-nos o que quiser. Temos dados. Temos validação. Temos transparência. Somos a empresa que você busca. O investimento que você merece. O retorno que você almeja, com o propósito em que você acredita.",
        "Conheça a tese CaraCore Hub para última milha com impacto social. Estamos abertos a parceiros estratégicos para validar, evoluir e escalar o programa com responsabilidade operacional."
    ];

    var slideTitles = [
        'Capa: Programa Tias Sócias',
        'Problema: Última Milha + Renda para Idosas',
        'Solução: Programa Tias Sócias',
        'Como Funciona: Fluxo Operacional',
        'Renda complementar estimada',
        'Escala projetada do programa',
        'Mercado: TAM/SAM/SOM',
        'Diferenciais Competitivos',
        'Perguntas de validação',
        'Infraestrutura e Tecnologia',
        'Unit Economics',
        'Exercício de modelagem',
        'Impacto Social',
        'Cenário hipotético do programa',
        'Founder',
        'Hipótese de financiamento',
        'Variáveis de retorno',
        'Possíveis canais',
        'Riscos a validar',
        'Próximas perguntas',
        'Backup: Detalhes Técnicos'
    ];

    function initializeSlides() {
        var slidesWrapper = document.getElementById('slidesWrapper');
        if (!slidesWrapper) return;

        for (var i = 1; i <= totalSlides; i++) {
            var slideDiv = document.createElement('div');
            slideDiv.className = 'slide';
            if (i === 1) slideDiv.classList.add('active');

            var slideContent = document.createElement('div');
            slideContent.className = 'slide-content';

            var img = document.createElement('img');
            img.src = ASSETS_IMG + 'cara_core_hub_slide_' + String(i).padStart(2, '0') + '.png';
            img.alt = 'Slide ' + i;

            var title = document.createElement('div');
            title.className = 'slide-title';
            title.textContent = slideTitles[i - 1] || ('Slide ' + i);

            slideContent.appendChild(img);
            slideContent.appendChild(title);
            slideDiv.appendChild(slideContent);
            slidesWrapper.appendChild(slideDiv);
        }

        audioElement = document.getElementById('slideAudio');
        if (audioElement) {
            audioElement.addEventListener('play', function() {
                isPlaying = true;
                updatePlayButton();
            });
            audioElement.addEventListener('pause', function() {
                isPlaying = false;
                updatePlayButton();
            });
            audioElement.addEventListener('ended', function() {
                isPlaying = false;
                updatePlayButton();
                updateAudioStatus('Narração concluída');
            });
        }
    }

    function showSlide(n) {
        var slides = document.querySelectorAll('.slide');
        if (n > totalSlides) currentSlide = totalSlides;
        else if (n < 1) currentSlide = 1;
        else currentSlide = n;

        slides.forEach(function(slide) { slide.classList.remove('active'); });
        if (slides[currentSlide - 1]) slides[currentSlide - 1].classList.add('active');

        var slideCounter = document.getElementById('slideCounter');
        var slideInfo = document.getElementById('slideInfo');
        var progressFill = document.getElementById('progressFill');
        var prevBtn = document.getElementById('prevBtn');
        var nextBtn = document.getElementById('nextBtn');

        if (slideCounter) slideCounter.textContent = 'Slide ' + currentSlide + ' de ' + totalSlides;
        if (slideInfo) slideInfo.textContent = currentSlide + ' / ' + totalSlides;
        if (progressFill) progressFill.style.width = ((currentSlide / totalSlides) * 100) + '%';
        if (prevBtn) prevBtn.disabled = currentSlide === 1;
        if (nextBtn) nextBtn.disabled = currentSlide === totalSlides;

        loadSlideAudio(currentSlide);
    }

    function loadSlideAudio(slideNum) {
        if (!audioElement) return;
        var audioPath = ASSETS_AUDIO + 'slide_' + String(slideNum).padStart(2, '0') + '_naracao_natural.mp3';
        var audioSrc = audioPath + '?v=' + audioCacheVersion;

        if (audioElement.playing) {
            audioElement.pause();
            isPlaying = false;
        }
        audioElement.removeAttribute('src');
        audioElement.load();
        audioElement.playbackRate = currentSpeed;

        var audioTitle = document.getElementById('audioTitle');
        if (audioTitle) audioTitle.textContent = 'Narração Slide ' + slideNum;
        updateAudioStatus('Verificando áudio...');
        setPlayButtonAvailable(false);
        updatePlayButton();

        var checkAudio = new XMLHttpRequest();
        checkAudio.open('HEAD', audioSrc, true);
        checkAudio.onload = function() {
            if (checkAudio.status === 200) {
                audioElement.src = audioSrc;
                updateAudioStatus('Pronto para ouvir');
                setPlayButtonAvailable(true);
            } else {
                updateAudioStatus('Áudio não disponível para este slide. Use "Ler texto" para a narração.');
                setPlayButtonAvailable(false);
            }
        };
        checkAudio.onerror = function() {
            updateAudioStatus('Áudio não disponível para este slide. Use "Ler texto" para a narração.');
            setPlayButtonAvailable(false);
        };
        checkAudio.send();
    }

    function setPlayButtonAvailable(available) {
        var playBtn = document.getElementById('playBtn');
        if (!playBtn) return;
        playBtn.disabled = !available;
        playBtn.title = available ? 'Reproduzir narração' : 'Áudio não disponível — use "Ler texto"';
    }

    function toggleAudio() {
        if (!audioElement || !audioElement.src) {
            updateAudioStatus('Nenhum áudio carregado');
            return;
        }
        if (isPlaying) {
            audioElement.pause();
            isPlaying = false;
            updatePlayButton();
            updateAudioStatus('Pausado');
        } else {
            audioElement.play().then(function() {
                isPlaying = true;
                updatePlayButton();
                updateAudioStatus('Reproduzindo...');
            }).catch(function() {
                updateAudioStatus('Erro ao reproduzir áudio');
            });
        }
    }

    function updatePlayButton() {
        var playBtn = document.getElementById('playBtn');
        if (!playBtn) return;
        playBtn.textContent = isPlaying ? '⏸' : '▶';
        playBtn.classList.toggle('playing', isPlaying);
    }

    function updateAudioStatus(status) {
        var el = document.getElementById('audioStatus');
        if (el) el.textContent = status;
    }

    function changeVolume() {
        var vol = document.getElementById('volumeControl');
        if (audioElement && vol) audioElement.volume = parseInt(vol.value, 10) / 100;
    }

    function changeSpeed(speed) {
        currentSpeed = speed;
        if (audioElement) audioElement.playbackRate = speed;
        document.querySelectorAll('.speed-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        if (event && event.target) event.target.classList.add('active');
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    function previousSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    function toggleFullscreen() {
        var container = document.querySelector('.presentation-container');
        if (!container) return;
        if (!document.fullscreenElement) {
            if (container.requestFullscreen) container.requestFullscreen();
            else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
            else if (container.msRequestFullscreen) container.msRequestFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
        }
    }

    function openReadModal() {
        var modal = document.getElementById('readModal');
        var title = document.getElementById('readModalTitle');
        var text = document.getElementById('readModalText');
        var narration = slideNarrations[currentSlide - 1] || 'Texto não disponível.';
        if (title) title.textContent = 'Texto do Slide ' + currentSlide;
        if (text) text.textContent = narration;
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        }
    }

    function closeReadModal(event) {
        if (event && event.target && !event.target.classList.contains('read-modal')) return;
        var modal = document.getElementById('readModal');
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
        }
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') previousSlide();
        if (e.key === ' ') { e.preventDefault(); toggleAudio(); }
        if (e.key === 'f' || e.key === 'F') toggleFullscreen();
        if (e.key === 'Home') { currentSlide = 1; showSlide(1); }
        if (e.key === 'End') { currentSlide = totalSlides; showSlide(totalSlides); }
    });

    window.previousSlide = previousSlide;
    window.nextSlide = nextSlide;
    window.toggleAudio = toggleAudio;
    window.changeVolume = changeVolume;
    window.changeSpeed = changeSpeed;
    window.toggleFullscreen = toggleFullscreen;
    window.openReadModal = openReadModal;
    window.closeReadModal = closeReadModal;

    initializeSlides();
    showSlide(currentSlide);
})();

const APP_CONFIG = {
    challenges: {
        memoria: {
            title: "Expandir Vocabulário",
            description: "Teste e amplie o seu repertório de palavras",
            icon: "ph-cards", // Ícone da Phosphor Icons
            decks: {
                facil: [
                    { q: "Empatia", a: "Capacidade de se colocar no lugar de outro" },
                    { q: "Fotossíntese", a: "Processo das plantas para criar energia com a luz solar" },
                    { q: "Reciclar", a: "Converter materiais usados em novos produtos" },
                    { q: "Inflação", a: "Aumento generalizado e contínuo dos preços" },
                    { q: "Democracia", a: "Sistema de governo onde o poder emana do povo" },
                    { q: "Ecossistema", a: "Conjunto de organismos e seu ambiente físico" },
                    { q: "Híbrido", a: "Resultante do cruzamento de espécies ou conceitos" },
                    { q: "Intuitivo", a: "Algo de fácil compreensão, que dispensa explicação" },
                    { q: "Metáfora", a: "Figura de linguagem que faz uma comparação implícita" },
                    { q: "Analogia", a: "Relação de semelhança entre coisas diferentes" },
                    { q: "Ceticismo", a: "Tendência a duvidar ou questionar afirmações" },
                    { q: "Dilema", a: "Escolha difícil entre duas opções" },
                    { q: "Preconceito", a: "Opinião formada sem conhecimento adequado" },
                    { q: "Racional", a: "Baseado na lógica e no raciocínio" },
                    { q: "Contexto", a: "Conjunto de circunstâncias que ajudam a entender algo" },
                    { q: "Consenso", a: "Acordo geral entre membros de um grupo" },
                    { q: "Crítica", a: "Análise que julga ou avalia algo" },
                    { q: "Conceito", a: "Ideia ou definição sobre algo" },
                    { q: "Voluntário", a: "Pessoa que oferece seu tempo ou trabalho sem esperar pagamento" },
                    { q: "Sustentabilidade", a: "Usar recursos de forma que não prejudique as gerações futuras" },
                    { q: "Abstrato", a: "Algo que existe como ideia, mas não é físico ou concreto" },
                    { q: "Globalização", a: "Processo de integração mundial nas áreas econômica, social e cultural" },
                    { q: "Inovação", a: "Criar algo novo ou introduzir uma novidade em algo que já existe" },
                    { q: "Ética", a: "Conjunto de princípios morais que guiam o comportamento humano" }
                ],
                intermediario: [
                    { q: "Efêmero", a: "Aquilo que é de curta duração, passageiro" },
                    { q: "Procrastinar", a: "Adiar ou deixar uma tarefa para depois" },
                    { q: "Resiliência", a: "Capacidade de se adaptar ou se recuperar de adversidades" },
                    { q: "Altruísmo", a: "Preocupação desinteressada com o bem-estar dos outros" },
                    { q: "Pragmático", a: "Pessoa que foca nos resultados práticos e na utilidade" },
                    { q: "Supérfluo", a: "O que é desnecessário, excessivo, que sobra" },
                    { q: "Paradoxo", a: "Declaração que parece contraditória, mas pode ser verdadeira" },
                    { q: "Nostalgia", a: "Sentimento de saudade de um tempo ou lugar passado" },
                    { q: "Anacrônico", a: "Algo que está posicionado fora de sua época correta" },
                    { q: "Ambíguo", a: "Que possui mais de uma interpretação possível" },
                    { q: "Estereótipo", a: "Ideia generalizada sobre um grupo ou coisa" },
                    { q: "Verossímil", a: "Que aparenta ser verdadeiro, plausível" },
                    { q: "Epistemologia", a: "Estudo filosófico sobre o conhecimento" },
                    { q: "Subjetivo", a: "Que depende das percepções ou emoções pessoais" },
                    { q: "Elocubração", a: "Ato de desenvolver ideias ou pensamentos com profundidade e cuidado" },
                    { q: "Amálgama", a: "Mistura ou fusão de elementos diferentes" },
                    { q: "Perene", a: "Algo que dura muitos anos, que é contínuo" },
                    { q: "Inócuo", a: "Que não causa dano ou prejuízo, inofensivo" },
                    { q: "Letargia", a: "Estado de sonolência profunda ou de falta de energia e interesse" },
                    { q: "Empírico", a: "Baseado na experiência e na observação, em vez de na teoria" },
                    { q: "Assertividade", a: "Capacidade de expressar opiniões e defender direitos de forma clara e respeitosa" },
                    { q: "Eufemismo", a: "Palavra ou expressão usada para suavizar uma outra mais dura ou desagradável" },
                    { q: "Íntegro", a: "Pessoa honesta, incorruptível, de caráter reto" },
                    { q: "Corroborar", a: "Confirmar ou dar provas da veracidade de algo" }
                ],
                expert: [
                    { q: "Paradigma", a: "Um modelo ou padrão a ser seguido" },
                    { q: "Corolário", a: "Consequência direta ou dedução de uma verdade já provada" },
                    { q: "Ubíquo", a: "Que está presente em todos os lugares ao mesmo tempo" },
                    { q: "Idiosincrasia", a: "Comportamento ou característica peculiar de um indivíduo" },
                    { q: "Hermenêutica", a: "A ciência ou arte da interpretação de textos" },
                    { q: "Taciturno", a: "Pessoa de poucas palavras, silenciosa ou melancólica" },
                    { q: "Falácia", a: "Um argumento logicamente inconsistente ou enganoso" },
                    { q: "Sinergia", a: "Ação combinada que produz um efeito maior que a soma das partes" },
                    { q: "Cognoscitivo", a: "Relativo ao processo de aquisição de conhecimento" },
                    { q: "Ontologia", a: "Estudo filosófico do ser e da realidade" },
                    { q: "Epifania", a: "Momento súbito de compreensão ou revelação" },
                    { q: "Dialética", a: "Método filosófico baseado no confronto de ideias opostas" },
                    { q: "Quimera", a: "Ideia ou desejo ilusório, impossível de realizar" },
                    { q: "Heurística", a: "Método que facilita a descoberta ou solução de problemas" },
                    { q: "Iconoclasta", a: "Aquele que contesta ou destrói imagens, símbolos ou crenças estabelecidas" },
                    { q: "Prolegômenos", a: "Introdução longa e detalhada a um tratado ou obra" },
                    { q: "Panaceia", a: "Solução ou remédio que se acredita curar todos os problemas ou males" },
                    { q: "Obsequioso", a: "Que demonstra excessiva cortesia e submissão, servil" },
                    { q: "Redivivo", a: "Que voltou à vida, ressuscitado; que foi restaurado ou renovado" },
                    { q: "Verborragia", a: "Uso excessivo e incontrolável de palavras, eloquência vazia" },
                    { q: "Epitome", a: "Representação perfeita ou o exemplo mais característico de algo" },
                    { q: "Sofisma", a: "Argumento falso apresentado com aparência de verdade, com o intuito de enganar" },
                    { q: "Cizânia", a: "Discórdia, desavença ou intriga que semeia a desunião" },
                    { q: "Catarse", a: "Libertação ou purificação de emoções através de uma experiência intensa" }
                ]
            },

        },
        matematica: {
            title: "Matemática Mental",
            description: "Aumente sua agilidade mental com desafios de cálculo",
            icon: "ph-calculator",
            // Este desafio não usa 'decks', sua lógica gera os problemas dinamicamente.
        },
        // PARA O FUTURO: Adicionar um novo desafio seria tão simples quanto
        // criar uma nova entrada aqui. Ex:
        // 'raciocinio_logico': {
        //   title: "Raciocínio Lógico",
        //   description: "Resolva problemas de lógica e sequências",
        //   icon: "ph-puzzle-piece",
        // }
    },

    // Configurações da API da Wikipedia para a seção de curiosidades
    wiki: {
        API_BASE: 'https://pt.wikipedia.org/w/api.php',
        SUMMARY_API: 'https://pt.wikipedia.org/api/rest_v1/page/summary/',
        CATEGORIES: [
            "Categoria:Ciência",
            "Categoria:Tecnologia",
            "Categoria:Algoritmos",
            "Categoria:Criptografia",
            "Categoria:Robótica",
            "Categoria:Matemática",
            "Categoria:Lógica Matemática",
            "Categoria:Cálculo",
            "Categoria:Estatística",
            "Categoria:Inteligência Artificial",
            "Categoria:IA",
            "Categoria:Astronomia",
            "Categoria:Biologia",
            "Categoria:Física",
            "Categoria:Química",
            "Categoria:Invenções",
            "Categoria:Linguística",
            "Categoria:Engenharia",
            "Categoria:Ciências da Computação"
        ]
    }
};
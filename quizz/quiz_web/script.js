const questionsData = [
    {
        "question": "Um alfabeto Σ, no contexto de linguagens formais, é corretamente definido como:",
        "options": [
            "Um conjunto infinito de símbolos.",
            "Um conjunto finito de símbolos.",
            "Um conjunto não enumerável de palavras.",
            "Um subconjunto de Σ*.",
            "Um conjunto de cadeias finitas."
        ],
        "answer": "Um conjunto finito de símbolos."
    },
    {
        "question": "Considere Σ = {a,b}. Qual das cadeias abaixo pertence a Σ* mas não a Σ+?",
        "options": [
            "a",
            "b",
            "ab",
            "ε",
            "ba"
        ],
        "answer": "ε"
    },
    {
        "question": "O comprimento da cadeia w = abbaba é:",
        "options": [
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "answer": "6"
    },
    {
        "question": "A concatenação de duas cadeias w e v é:",
        "options": [
            "Sempre comutativa.",
            "Sempre associativa.",
            "Dependente da ordem apenas se w=v.",
            "Definida apenas para cadeias não vazias.",
            "Igual à interseção de símbolos."
        ],
        "answer": "Sempre associativa."
    },
    {
        "question": "Sobre a cadeia vazia ε, é correto afirmar que:",
        "options": [
            "Não pertence a nenhuma linguagem.",
            "Possui comprimento 1.",
            "É o elemento neutro da concatenação.",
            "Não pertence a Σ*.",
            "Não pode ser prefixo."
        ],
        "answer": "É o elemento neutro da concatenação."
    },
    {
        "question": "A cadeia reversa de w = abc é:",
        "options": [
            "abc",
            "acb",
            "bac",
            "cba",
            "bca"
        ],
        "answer": "cba"
    },
    {
        "question": "Uma subpalavra de uma cadeia é:",
        "options": [
            "Qualquer prefixo.",
            "Qualquer sufixo.",
            "Qualquer prefixo ou sufixo.",
            "Qualquer subconjunto de símbolos.",
            "Apenas prefixos próprios."
        ],
        "answer": "Qualquer prefixo ou sufixo."
    },
    {
        "question": "Para w = aba, qual conjunto corresponde aos prefixos de w?",
        "options": [
            "{ε, a, ab, aba}",
            "{a, b, ab}",
            "{ε, b, ba, aba}",
            "{ε, a, ba}",
            "{a, ab, aba, b}"
        ],
        "answer": "{ε, a, ab, aba}"
    },
    {
        "question": "O conjunto Σ* é sempre:",
        "options": [
            "Finito.",
            "Vazio.",
            "Infinito.",
            "Igual a Σ+.",
            "Um alfabeto."
        ],
        "answer": "Infinito."
    },
    {
        "question": "Uma linguagem formal L é definida como:",
        "options": [
            "Um alfabeto.",
            "Um subconjunto de Σ.",
            "Um subconjunto de Σ*.",
            "Um conjunto infinito.",
            "Um conjunto de símbolos."
        ],
        "answer": "Um subconjunto de Σ*."
    },
    {
        "question": "Qual das alternativas representa uma linguagem finita?",
        "options": [
            "Σ*",
            "Σ+",
            "{a, ab, abb}",
            "{a^n | n ≥ 0}",
            "{a^n b^n | n ≥ 0}"
        ],
        "answer": "{a, ab, abb}"
    },
    {
        "question": "O conjunto vazio ∅:",
        "options": [
            "Não é linguagem.",
            "Não é subconjunto de Σ*.",
            "É linguagem sobre qualquer alfabeto.",
            "É igual a {ε}.",
            "É um alfabeto útil."
        ],
        "answer": "É linguagem sobre qualquer alfabeto."
    },
    {
        "question": "Se L1 = {a} e L2 = {b}, então L1L2 é:",
        "options": [
            "{ab}",
            "{a, b}",
            "{ba}",
            "{ε}",
            "{aabb}"
        ],
        "answer": "{ab}"
    },
    {
        "question": "O complemento de uma linguagem L é definido como:",
        "options": [
            "Σ − L",
            "Σ* − L",
            "L − Σ*",
            "Σ+ − L",
            "Σ ∪ L"
        ],
        "answer": "Σ* − L"
    },
    {
        "question": "A reversa de uma linguagem L é:",
        "options": [
            "{w | w ∈ L}",
            "{wR | w ∈ Σ*}",
            "{wR | w ∈ L}",
            "{Rw | w ∈ L}",
            "{w | wR ∈ Σ*}"
        ],
        "answer": "{wR | w ∈ L}"
    },
    {
        "question": "Se L = {ab}, então L* é:",
        "options": [
            "{ε}",
            "{ab}",
            "{ε, ab, abab, ababab, ...}",
            "{ab, abab}",
            "Σ*"
        ],
        "answer": "{ε, ab, abab, ababab, ...}"
    },
    {
        "question": "A operação L+ difere de L* porque:",
        "options": [
            "Não admite concatenação.",
            "Não contém ε, se ε ∉ L.",
            "É sempre finita.",
            "Exclui L.",
            "Só aceita uma concatenação."
        ],
        "answer": "Não contém ε, se ε ∉ L."
    },
    {
        "question": "A união de linguagens L1 ∪ L2 contém:",
        "options": [
            "Apenas cadeias comuns.",
            "Apenas cadeias de L1.",
            "Cadeias que pertencem a L1 ou L2.",
            "Apenas concatenações.",
            "Apenas cadeias reversas."
        ],
        "answer": "Cadeias que pertencem a L1 ou L2."
    },
    {
        "question": "Uma gramática formal G é definida pelo quádruplo:",
        "options": [
            "(Σ, L, ε, *)",
            "(V, T, S, P)",
            "(T, Σ, L, S)",
            "(V, Σ, *, ε)",
            "(P, L, T, V)"
        ],
        "answer": "(V, T, S, P)"
    },
    {
        "question": "O conjunto V de uma gramática contém:",
        "options": [
            "Apenas símbolos terminais.",
            "Apenas cadeias.",
            "Variáveis (não-terminais).",
            "Palavras da linguagem.",
            "Símbolos de Σ*."
        ],
        "answer": "Variáveis (não-terminais)."
    },
    {
        "question": "Uma produção da forma x → y satisfaz:",
        "options": [
            "x ∈ T*",
            "x ∈ (V∪T)+",
            "y ∈ V+",
            "y ∈ T+",
            "x = ε"
        ],
        "answer": "x ∈ (V∪T)+"
    },
    {
        "question": "O símbolo inicial S deve:",
        "options": [
            "Pertencer a T.",
            "Pertencer a Σ.",
            "Pertencer a V.",
            "Ser uma palavra.",
            "Ser terminal."
        ],
        "answer": "Pertencer a V."
    },
    {
        "question": "A linguagem gerada por G é definida como:",
        "options": [
            "L(G) = Σ*",
            "L(G) = { w ∈ T* | S ⇒* w }",
            "L(G) = V*",
            "L(G) = P*",
            "L(G) = Σ+"
        ],
        "answer": "L(G) = { w ∈ T* | S ⇒* w }"
    },
    {
        "question": "A notação ⇒* indica:",
        "options": [
            "Uma derivação em exatamente um passo.",
            "Uma derivação em zero ou mais passos.",
            "Apenas derivações terminais.",
            "Uma produção inválida.",
            "Concatenação de símbolos."
        ],
        "answer": "Uma derivação em zero ou mais passos."
    },
    {
        "question": "Qual gramática gera L = { a^{n+1} b^{n} c^{m} | n≥0, m≥1 }?",
        "options": [
            "S→aA; A→aAb | cC; C→cC | c",
            "S→aSb | c",
            "S→aAb; A→aAb | c",
            "S→aAC; A→aAb | ε; C→cC | c",
            "S→aB; B→bC; C→cC | ε"
        ],
        "answer": "S→aAC; A→aAb | ε; C→cC | c"
    },
    {
        "question": "A linguagem gerada por S→aS | b é:",
        "options": [
            "{a^n b^n}",
            "{a^n b | n≥0}",
            "{b a^n}",
            "{a^n | n≥0}",
            "{b^n}"
        ],
        "answer": "{a^n b | n≥0}"
    },
    {
        "question": "Qual linguagem é gerada por S→aSb | ε?",
        "options": [
            "{a^n b^n | n≥0}",
            "{a^n b^m, n≥0 e m≥1}",
            "{ab}",
            "{a^n b^n | n≥1}",
            "Σ*"
        ],
        "answer": "{a^n b^n | n≥0}"
    },
    {
        "question": "Qual gramática gera a expressão regular a* b*?",
        "options": [
            "S→aSb | ε",
            "S→aS | bS | ε",
            "S→aS | B; B→bB | ε",
            "S→abS | ε",
            "S→aB; B→bS"
        ],
        "answer": "S→aS | B; B→bB | ε"
    },
    {
        "question": "A linguagem de S→aS | ε é:",
        "options": [
            "{ε}",
            "{a}",
            "{a^n | n≥0}",
            "{a^n | n≥1}",
            "{ε, a}"
        ],
        "answer": "{a^n | n≥0}"
    },
    {
        "question": "Qual expressão corresponde à gramática S→aS | bS | ε?",
        "options": [
            "a*b*",
            "(a+b)*",
            "ab*",
            "(ab)*",
            "a+b"
        ],
        "answer": "(a+b)*"
    },
    {
        "question": "A Hipótese de Church-Turing afirma que:",
        "options": [
            "Qualquer função que pode ser computada por um método efetivo (algoritmo) pode ser computada por uma Máquina de Turing.",
            "Máquinas de Turing não determinísticas são estritamente mais poderosas que as determinísticas.",
            "É possível criar um algoritmo que decide se qualquer Máquina de Turing para ou entra em loop infinito.",
            "Linguagens regulares são equivalentes às linguagens recursivamente enumeráveis.",
            "O Problema da Parada é decidível em tempo polinomial."
        ],
        "answer": "Qualquer função que pode ser computada por um método efetivo (algoritmo) pode ser computada por uma Máquina de Turing."
    },
    {
        "question": "O Problema da Parada (Halting Problem) é um exemplo clássico de um problema:",
        "options": [
            "Indecidível, pois não existe uma Máquina de Turing que consiga decidir, para todas as entradas, se um programa arbitrário para ou roda para sempre.",
            "Decidível, desde que a Máquina de Turing tenha fita infinita em ambas as direções.",
            "NP-Completo, significando que sua verificação é rápida, mas a solução é demorada.",
            "Trivialmente decidível utilizando a Máquina de Norma.",
            "Parcialmente decidível, mas apenas para autômatos finitos."
        ],
        "answer": "Indecidível, pois não existe uma Máquina de Turing que consiga decidir, para todas as entradas, se um programa arbitrário para ou roda para sempre."
    },
    {
        "question": "Sobre as Máquinas de Turing Universais (MTU), é correto afirmar que:",
        "options": [
            "Uma MTU consegue simular a execução de qualquer outra Máquina de Turing, recebendo como entrada a descrição dessa máquina e a palavra a ser processada.",
            "Uma MTU só pode resolver problemas que não envolvam laços infinitos.",
            "Uma MTU possui um número infinito de estados internos.",
            "A MTU é um modelo teórico que foi substituído pelas Funções Recursivas de Kleene por ser menos poderoso.",
            "Uma MTU não pode entrar em loop, garantindo que toda computação termine."
        ],
        "answer": "Uma MTU consegue simular a execução de qualquer outra Máquina de Turing, recebendo como entrada a descrição dessa máquina e a palavra a ser processada."
    },
    {
        "question": "Sobre o modelo da Máquina Norma, assinale a alternativa correta:",
        "options": [
            "Opera sobre um conjunto de registradores que armazenam números naturais, utilizando instruções básicas como Adicionar, Subtrair (com limite em zero) e Testar se é Zero.",
            "É um modelo computacional baseado no uso de pilhas múltiplas (Last-In-First-Out).",
            "Possui menor poder computacional do que uma Máquina de Turing padrão.",
            "É capaz de calcular apenas funções polinomiais.",
            "Trabalha com fita infinita, mas apenas realiza leitura, sem sobrescrever os dados."
        ],
        "answer": "Opera sobre um conjunto de registradores que armazenam números naturais, utilizando instruções básicas como Adicionar, Subtrair (com limite em zero) e Testar se é Zero."
    },
    {
        "question": "No contexto das Funções Recursivas, o uso do operador de minimização (operador μ) não limitado introduz qual característica aos programas?",
        "options": [
            "A possibilidade de laços infinitos (loops do tipo while), o que permite expressar funções parciais e garante a completude de Turing.",
            "A garantia de que o programa sempre irá parar (funções totais).",
            "A restrição de que a função só pode operar com números binários.",
            "O aumento da velocidade de processamento das chamadas recursivas.",
            "A conversão automática de qualquer programa recursivo para um autômato finito."
        ],
        "answer": "A possibilidade de laços infinitos (loops do tipo while), o que permite expressar funções parciais e garante a completude de Turing."
    },
    {
        "question": "Dois modelos computacionais são ditos Turing-completos (ou Turing-equivalentes) se:",
        "options": [
            "Possuem o mesmo poder computacional que uma Máquina de Turing, podendo simular um ao outro.",
            "Possuem a mesma complexidade de tempo para resolver um determinado problema.",
            "São implementados utilizando a mesma arquitetura de hardware.",
            "Podem resolver o Problema da Parada.",
            "Utilizam exatamente a mesma linguagem formal de programação."
        ],
        "answer": "Possuem o mesmo poder computacional que uma Máquina de Turing, podendo simular um ao outro."
    },
    {
        "question": "Qual é a função da fita em uma Máquina de Turing padrão?",
        "options": [
            "Servir como memória de armazenamento infinito, dividida em células, onde a cabeça de leitura/escrita pode se mover para a direita ou esquerda.",
            "Armazenar unicamente as instruções do programa que não podem ser alteradas (Read-Only).",
            "Agir como um temporizador (clock) para sincronizar os estados da máquina.",
            "Limitar o número de operações, garantindo a decidibilidade.",
            "Simular o comportamento de uma fila (First-In-First-Out)."
        ],
        "answer": "Servir como memória de armazenamento infinito, dividida em células, onde a cabeça de leitura/escrita pode se mover para a direita ou esquerda."
    },
    {
        "question": "Considere uma máquina de Post projetada para verificar se duas palavras sobre {a, b} separadas por '$' são idênticas. Qual das seguintes entradas seria REJEITADA por essa máquina?",
        "options": [
            "abba",
            "a",
            "abb",
            "$",
            "bba"
        ],
        "answer": "abb"
    },
    {
        "question": "Uma máquina de Pilha foi projetada para aceitar palavras palíndromas sobre o alfabeto {a,b}. Qual das cadeias a seguir será ACEITA por esta máquina?",
        "options": [
            "abba",
            "abab",
            "aabb",
            "bbaa",
            "ab"
        ],
        "answer": "abba"
    },
    {
        "question": "Considere uma máquina de Post que reconhece palavras com a mesma quantidade de símbolos 'a' e 'b', independentemente da ordem. Qual das seguintes cadeias será REJEITADA?",
        "options": [
            "baba",
            "aabb",
            "ab",
            "bbaab",
            "bbaa"
        ],
        "answer": "bbaab"
    },
    {
        "question": "Sobre as características da Máquina Norma, que é composta por registradores e instruções básicas (adicionar 1, subtrair 1 e testar zero), é correto afirmar que:",
        "options": [
            "Seus registradores podem assumir valores naturais tão grandes quanto necessários.",
            "Os registradores podem assumir qualquer valor, incluindo números negativos e irracionais.",
            "Seu modelo formal encontra-se baseado em uma estrutura de fita infinita.",
            "Não é capaz de simular mecanismos de recursão.",
            "Possui apenas 2 registradores em qualquer programa."
        ],
        "answer": "Seus registradores podem assumir valores naturais tão grandes quanto necessários."
    },
    {
        "question": "Analise as afirmações sobre a Máquina Norma: I. É uma Máquina extremamente simples, porém com poder computacional igual ao de qualquer computador atual. II. Em Norma, sub-rotinas e mecanismos de recursão podem ser simulados por programas monolíticos, usando endereçamento indireto. III. É impossível programar operações matemáticas complexas, visto que as instruções básicas não dão suporte.",
        "options": [
            "Apenas I está correta.",
            "Apenas II está correta.",
            "Apenas III está correta.",
            "Apenas I e II estão corretas.",
            "Apenas II e III estão corretas."
        ],
        "answer": "Apenas I e II estão corretas."
    },
    {
        "question": "Sobre as Máquinas de Turing (MT), como é definida a fita na versão clássica do modelo?",
        "options": [
            "Uma sequência infinita de células em ambas as direções, onde cada célula armazena um símbolo do alfabeto.",
            "Uma estrutura finita que armazena os estados da máquina.",
            "Uma pilha (LIFO) que permite apenas operações de push e pop.",
            "Um registrador de tamanho fixo para armazenar instruções.",
            "Uma fita de leitura apenas, de onde não é possível escrever dados."
        ],
        "answer": "Uma sequência infinita de células em ambas as direções, onde cada célula armazena um símbolo do alfabeto."
    },
    {
        "question": "O que ocorre quando uma Máquina de Turing entra em um estado de aceitação?",
        "options": [
            "A máquina para imediatamente e a palavra de entrada é considerada aceita (ou reconhecida).",
            "A fita é apagada e a máquina reinicia a computação.",
            "A máquina continua processando infinitamente sem ler novos símbolos.",
            "A máquina apaga o estado atual e retorna ao estado inicial.",
            "O cabeçote de leitura volta automaticamente para o primeiro símbolo da fita."
        ],
        "answer": "A máquina para imediatamente e a palavra de entrada é considerada aceita (ou reconhecida)."
    },
    {
        "question": "O que caracteriza uma Máquina de Turing Não Determinística?",
        "options": [
            "Para um mesmo estado e símbolo lido, pode haver múltiplas transições possíveis, escolhendo o caminho que leva à aceitação (se houver).",
            "Ela possui múltiplas fitas e múltiplos cabeçotes independentes.",
            "Ela nunca entra em loop, sendo impossível prever seu tempo de execução.",
            "O seu poder computacional é estritamente maior que o da Máquina de Turing Determinística.",
            "Ela processa todos os símbolos da fita simultaneamente."
        ],
        "answer": "Para um mesmo estado e símbolo lido, pode haver múltiplas transições possíveis, escolhendo o caminho que leva à aceitação (se houver)."
    },
    {
        "question": "Na transição de uma Máquina de Turing, a função delta (δ) tipicamente determina três ações. Quais são elas?",
        "options": [
            "O próximo estado, o símbolo a ser escrito na fita e a direção do movimento da cabeça (esquerda, direita ou parada).",
            "A aceitação, a rejeição e o apagamento da fita.",
            "A leitura do estado, o incremento do registrador e o teste de zero.",
            "O próximo estado, o deslocamento da fita e a duplicação do símbolo.",
            "A criação de uma nova fita, o apagamento da atual e a mudança de estado."
        ],
        "answer": "O próximo estado, o símbolo a ser escrito na fita e a direção do movimento da cabeça (esquerda, direita ou parada)."
    },
    {
        "question": "O que significa dizer que a Máquina de Turing é um modelo aceitador de linguagens recursivamente enumeráveis?",
        "options": [
            "Se a palavra pertence à linguagem, a máquina fatalmente irá parar e aceitá-la, mas se não pertence, a máquina pode rejeitar ou entrar em loop infinito.",
            "Ela decide em tempo finito qualquer linguagem matemática existente.",
            "Ela enumera todas as palavras recursivas e rejeita as demais em tempo O(n).",
            "Ela só aceita linguagens que podem ser definidas por expressões regulares.",
            "A máquina obrigatoriamente para (halt) para qualquer entrada que lhe for fornecida."
        ],
        "answer": "Se a palavra pertence à linguagem, a máquina fatalmente irá parar e aceitá-la, mas se não pertence, a máquina pode rejeitar ou entrar em loop infinito."
    },
    {
        "question": "O que é um problema Decidível?",
        "options": [
            "É um problema para o qual existe um algoritmo (Máquina de Turing) que sempre para e responde corretamente SIM ou NÃO para qualquer instância.",
            "É um problema que só pode ser resolvido em tempo polinomial.",
            "É um problema em que a máquina pode entrar em loop se a resposta for NÃO.",
            "É um problema cujas entradas são números primos finitos.",
            "É um problema cuja solução teórica existe, mas que na prática é incomputável."
        ],
        "answer": "É um problema para o qual existe um algoritmo (Máquina de Turing) que sempre para e responde corretamente SIM ou NÃO para qualquer instância."
    },
    {
        "question": "O Problema da Correspondência de Post (PCP) é um famoso problema de decisão em Teoria da Computação. Qual é a sua classificação?",
        "options": [
            "É um problema indecidível, não havendo algoritmo genérico que determine se há uma correspondência para qualquer conjunto de peças.",
            "É um problema decidível por autômatos com pilha.",
            "É um problema que só pode ser resolvido por expressões regulares.",
            "É um problema parcialmente decidível que sempre para para respostas negativas.",
            "É um problema trivial de complexidade O(1)."
        ],
        "answer": "É um problema indecidível, não havendo algoritmo genérico que determine se há uma correspondência para qualquer conjunto de peças."
    },
    {
        "question": "Quando um problema é chamado de Parcialmente Decidível (ou Semidecidível)?",
        "options": [
            "Quando existe uma Máquina de Turing que para e responde SIM se a resposta correta for SIM, mas pode entrar em loop se a resposta for NÃO.",
            "Quando ele pode ser resolvido, mas apenas para a metade de suas instâncias.",
            "Quando a resposta só é válida para cadeias de tamanho par.",
            "Quando o problema só pode ser decido em algumas linguagens de programação, mas não em todas.",
            "Quando a máquina sempre para com a resposta NÃO, mas entra em loop na resposta SIM."
        ],
        "answer": "Quando existe uma Máquina de Turing que para e responde SIM se a resposta correta for SIM, mas pode entrar em loop se a resposta for NÃO."
    },
    {
        "question": "Qual é a principal implicação do Teorema de Rice?",
        "options": [
            "Qualquer propriedade não trivial sobre o comportamento (linguagem aceita) de máquinas de Turing é indecidível.",
            "Todas as propriedades de máquinas de Turing são decidíveis em tempo exponencial.",
            "É possível decidir se duas máquinas de Turing reconhecem a mesma linguagem.",
            "Problemas NP-Completos podem ser resolvidos em tempo polinomial.",
            "Máquinas de Turing Não Determinísticas são equivalentes às determinísticas."
        ],
        "answer": "Qualquer propriedade não trivial sobre o comportamento (linguagem aceita) de máquinas de Turing é indecidível."
    },
    {
        "question": "O conceito de Redução (reducibilidade) de um problema A para um problema B é usado para:",
        "options": [
            "Provar que se B é decidível, então A também é decidível (ou, se A é indecidível, B também o é).",
            "Diminuir a quantidade de memória necessária para executar B.",
            "Tornar o problema A mais rápido de ser computado.",
            "Traduzir o código fonte de A para linguagem de máquina.",
            "Provar que A e B são independentes um do outro."
        ],
        "answer": "Provar que se B é decidível, então A também é decidível (ou, se A é indecidível, B também o é)."
    },
    {
        "question": "Qual é o papel fundamental da Máquina de Turing Universal (MTU)?",
        "options": [
            "Atuar como um computador programável, sendo capaz de ler a descrição de qualquer outra Máquina de Turing e simular sua execução sobre uma entrada.",
            "Resolver o problema da parada executando todos os programas simultaneamente.",
            "Decidir todas as linguagens sensíveis ao contexto.",
            "Fornecer o único mecanismo capaz de provar matematicamente a Hipótese de Church.",
            "Substituir a necessidade de memória infinita por um processador infinito."
        ],
        "answer": "Atuar como um computador programável, sendo capaz de ler a descrição de qualquer outra Máquina de Turing e simular sua execução sobre uma entrada."
    },
    {
        "question": "A Hipótese de Church-Turing é chamada de hipótese (e não teorema) porque:",
        "options": [
            "Relaciona um conceito intuitivo e informal (computação efetiva/algoritmo) a um modelo matemático rigoroso (MT), o que não pode ser provado formalmente.",
            "Foi proposta sem nenhuma evidência matemática que a sustentasse.",
            "Alonzo Church e Alan Turing não conseguiram escrever a demonstração a tempo.",
            "Existem contraexemplos teóricos que desafiam sua validade.",
            "Ela só é válida para computadores quânticos."
        ],
        "answer": "Relaciona um conceito intuitivo e informal (computação efetiva/algoritmo) a um modelo matemático rigoroso (MT), o que não pode ser provado formalmente."
    },
    {
        "question": "Qual o conceito formal que Alonzo Church desenvolveu que posteriormente provou-se ser equivalente à Máquina de Turing?",
        "options": [
            "O Cálculo Lambda (λ-calculus).",
            "As Máquinas de Post.",
            "As Redes de Petri.",
            "Os Autômatos Finitos Determinísticos.",
            "Os Grafos Direcionados Acíclicos."
        ],
        "answer": "O Cálculo Lambda (λ-calculus)."
    },
    {
        "question": "O que é a codificação de Gödel (ou número de Gödel) no contexto das Máquinas de Turing e Máquinas de Norma?",
        "options": [
            "Um método para representar instruções, programas ou sequências de dados como um único número natural exclusivo usando fatoração em números primos.",
            "Um algoritmo de ordenação para as fitas da Máquina de Turing.",
            "Um teste lógico para determinar se uma máquina entrou em loop.",
            "Uma técnica para diminuir o tamanho físico da fita necessária.",
            "Uma prova de que a Máquina de Turing pode calcular funções irracionais."
        ],
        "answer": "Um método para representar instruções, programas ou sequências de dados como um único número natural exclusivo usando fatoração em números primos."
    },
    {
        "question": "Segundo a Hipótese de Church, se um problema não pode ser resolvido por uma Máquina de Turing, então:",
        "options": [
            "Nenhum computador atual ou futuro, seguindo a lógica algorítmica clássica, poderá resolvê-lo.",
            "Ele pode ser resolvido facilmente por um computador com processador multi-core.",
            "Ele só pode ser resolvido se a linguagem de programação utilizada for C ou C++.",
            "Apenas computadores que utilizam a Máquina Norma poderão resolvê-lo.",
            "A afirmação é falsa, pois todo problema matemático tem solução computacional."
        ],
        "answer": "Nenhum computador atual ou futuro, seguindo a lógica algorítmica clássica, poderá resolvê-lo."
    },
    {
        "question": "No estudo da Teoria da Computação, a classe das funções recursivas primitivas compreende:",
        "options": [
            "Funções que podem ser construídas a partir de funções básicas (zero, sucessor, projeção) usando apenas as operações de composição e recursão primitiva (sem minimização ilimitada).",
            "Qualquer função que contenha chamadas a si mesma, incluindo loops infinitos.",
            "Apenas funções cujo domínio é o conjunto dos números reais.",
            "Funções que são incomputáveis.",
            "Exclusivamente a função de Ackermann."
        ],
        "answer": "Funções que podem ser construídas a partir de funções básicas (zero, sucessor, projeção) usando apenas as operações de composição e recursão primitiva (sem minimização ilimitada)."
    },
    {
        "question": "As funções básicas (ou iniciais) da teoria das funções recursivas incluem a função Zero, a função Sucessor e qual outra função?",
        "options": [
            "A função de Projeção (ou Identidade).",
            "A função de Minimização.",
            "A função de Multiplicação.",
            "A função Exponencial.",
            "A função Fatorial."
        ],
        "answer": "A função de Projeção (ou Identidade)."
    },
    {
        "question": "A Função de Ackermann é um famoso exemplo em teoria da computação porque ela é:",
        "options": [
            "Uma função total computável (recursiva) que NÃO é recursiva primitiva, pois cresce mais rápido do que qualquer função recursiva primitiva.",
            "Uma função que não pode ser computada por uma Máquina de Turing.",
            "Um exemplo de função parcial indecidível.",
            "A única função que a Máquina Norma não consegue simular.",
            "Uma função polinomial de tempo constante O(1)."
        ],
        "answer": "Uma função total computável (recursiva) que NÃO é recursiva primitiva, pois cresce mais rápido do que qualquer função recursiva primitiva."
    },
    {
        "question": "Para que o conjunto das funções recursivas primitivas se torne Turing-completo (capaz de calcular qualquer função computável), é necessário introduzir qual operador?",
        "options": [
            "Operador de Minimização (μ-operador) não-limitado.",
            "Operador de Concatenação de Strings.",
            "Operador de Derivação Integral.",
            "Operador Lógico XOR.",
            "Operador de Substituição Direta."
        ],
        "answer": "Operador de Minimização (μ-operador) não-limitado."
    },
    {
        "question": "Uma função que é computável e definida para todos os elementos de seu domínio é chamada de:",
        "options": [
            "Função Total Computável (ou simplesmente Função Computável Total).",
            "Função Parcial Turing.",
            "Função Polinomial Primitiva.",
            "Função Absoluta Injetora.",
            "Função Constante."
        ],
        "answer": "Função Total Computável (ou simplesmente Função Computável Total)."
    },
    {
        "question": "A Máquina Norma é um modelo abstrato de computação baseado em registradores. Quais são as operações primitivas sobre os registradores na Máquina Norma?",
        "options": [
            "Incrementar 1, Decrementar 1 (limitado a zero) e Testar se é Zero.",
            "Ler caractere, Escrever caractere e Mover à direita.",
            "Empilhar (Push), Desempilhar (Pop) e Topo (Top).",
            "Multiplicar por 2, Dividir por 2 e Testar Paridade.",
            "Alocar memória, Liberar memória e Mover Ponteiro."
        ],
        "answer": "Incrementar 1, Decrementar 1 (limitado a zero) e Testar se é Zero."
    },
    {
        "question": "O que é um programa monolítico em modelos de computação como a Máquina Norma?",
        "options": [
            "É um programa composto por um bloco único de instruções lineares, geralmente sequenciado através de rótulos (labels) e desvios explícitos (gotos).",
            "É um programa que só pode resolver um único problema matemático.",
            "É um código fonte em que as variáveis são globais e a memória é volátil.",
            "É um programa que divide o problema em milhares de pequenos subprogramas paralelos.",
            "É um tipo de modelo em que hardware e software não podem ser separados."
        ],
        "answer": "É um programa composto por um bloco único de instruções lineares, geralmente sequenciado através de rótulos (labels) e desvios explícitos (gotos)."
    },
    {
        "question": "Em Teoria da Computação, como se prova a equivalência de poder computacional entre a Máquina de Turing e a Máquina Norma?",
        "options": [
            "Mostrando-se algoritmos genéricos onde uma Máquina de Turing simula perfeitamente uma Máquina Norma, e vice-versa.",
            "Executando ambas em um computador moderno e comparando o tempo de processamento.",
            "Criando-se a Função de Ackermann em ambas e comparando os resultados numéricos.",
            "Provando que ambas conseguem resolver o Problema da Parada.",
            "Não é possível provar, pois a Máquina de Turing é mais poderosa."
        ],
        "answer": "Mostrando-se algoritmos genéricos onde uma Máquina de Turing simula perfeitamente uma Máquina Norma, e vice-versa."
    },
    {
        "question": "Na transformação de um programa estruturado (iterativo com loops while) para um programa monolítico (com desvios/gotos), qual recurso é essencial?",
        "options": [
            "O uso de rótulos (labels) numéricos nas instruções para permitir saltos condicionais e incondicionais.",
            "O uso de uma pilha auxiliar de recursão que grave o estado das variáveis.",
            "O uso exclusivo de funções recursivas puras.",
            "A limitação a apenas 3 registradores em tempo de execução.",
            "A compilação direta para código de máquina da arquitetura ARM."
        ],
        "answer": "O uso de rótulos (labels) numéricos nas instruções para permitir saltos condicionais e incondicionais."
    },
    {
        "question": "Como a Máquina Norma representa e armazena números negativos ou inteiros complexos, já que nativamente ela lida apenas com números naturais?",
        "options": [
            "Geralmente utilizando múltiplos registradores (por exemplo, a técnica de sinal e magnitude) ou através da codificação de Gödel.",
            "A Máquina Norma não pode lidar com valores complexos de maneira alguma.",
            "Ela acessa uma fita de armazenamento secundário com bits especiais de sinal.",
            "Trocando as operações de adição por multiplicação de base 10.",
            "Declarando variáveis como sendo do tipo float."
        ],
        "answer": "Geralmente utilizando múltiplos registradores (por exemplo, a técnica de sinal e magnitude) ou através da codificação de Gödel."
    }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progress = document.getElementById('progress');
const feedback = document.getElementById('feedback');

const scoreElement = document.getElementById('score');
const wrongScoreElement = document.getElementById('wrong-score');
const totalQuestionsElement = document.getElementById('total-questions');

// Helpers
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Events
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    // Rotaciona (embaralha) questões
    shuffledQuestions = shuffleArray(questionsData);
    currentQuestionIndex = 0;
    score = 0;
    
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    updateProgress();
}

function showQuestion(question) {
    questionText.innerText = question.question;
    
    // Rotaciona as opções também
    const shuffledOptions = shuffleArray(question.options);
    
    shuffledOptions.forEach(optionText => {
        const button = document.createElement('div');
        button.innerText = optionText;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(button, optionText, question.answer));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hide');
    feedback.innerText = '';
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(selectedButton, selectedText, correctText) {
    const isCorrect = selectedText === correctText;
    
    if (isCorrect) {
        selectedButton.classList.add('correct');
        feedback.innerText = "Correto! 🎉";
        feedback.style.color = "#27ae60";
        score++;
    } else {
        selectedButton.classList.add('wrong');
        feedback.innerText = "Incorreto! ❌";
        feedback.style.color = "#c0392b";
    }
    
    // Desabilitar todas opções e mostrar a correta
    const options = optionsContainer.children;
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
        if (options[i].innerText === correctText && !isCorrect) {
            options[i].classList.add('correct'); // Mostra a resposta certa
        }
    }
    
    nextBtn.classList.remove('hide');
}

function updateProgress() {
    const progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    progress.style.width = progressPercent + '%';
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const total = shuffledQuestions.length;
    const pct = Math.round((score / total) * 100);

    scoreElement.innerText = score;
    wrongScoreElement.innerText = total - score;
    totalQuestionsElement.innerText = total;

    const icon = document.getElementById('result-icon');
    const msg  = document.getElementById('result-msg');

    if (pct === 100) {
        icon.innerText = '🏆';
        msg.innerText  = 'Perfeito! Você gabaritou! 🎉';
        msg.style.color = '#27ae60';
    } else if (pct >= 70) {
        icon.innerText = '👍';
        msg.innerText  = `Muito bem! Você acertou ${pct}%!`;
        msg.style.color = '#2980b9';
    } else if (pct >= 40) {
        icon.innerText = '📚';
        msg.innerText  = `Bom esforço! Você acertou ${pct}%. Continue estudando!`;
        msg.style.color = '#e67e22';
    } else {
        icon.innerText = '💪';
        msg.innerText  = `Você acertou ${pct}%. Revise o material e tente novamente!`;
        msg.style.color = '#e74c3c';
    }
}

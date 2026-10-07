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
    }
];

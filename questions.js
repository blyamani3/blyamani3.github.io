const questions = [
    // --- SÈRIE 1: QÜESTIONS (MULTIOPCIÓ) ---
    {
        type: "multichoice",
        category: "motors",
        id: "24_S1_Q1",
        text: "Un motor de benzina de quatre temps consumeix $10,2 \\text{ L/h}$ quan gira a $4.000 \\text{ min}^{-1}$. El poder calorífic de la benzina és $42.000 \\text{ kJ/kg}$ i la seva densitat, $0,8 \\text{ kg/L}$. Quina és la massa de combustible consumida en un cicle del motor?",
        options: {
            a: "1,36 mg",
            b: "34 mg",
            c: "68 mg",
            d: "136 mg"
        },
        correctAnswer: "c",
        steps: `
            - Consum de massa horari: $\\dot{m} = 10,2 \\text{ L/h} \\cdot 0,8 \\text{ kg/L} = 8,16 \\text{ kg/h}$.
            - Consum per minut: $m_{\\text{min}} = \\frac{8,16}{60} = 0,136 \\text{ kg/min} = 136.000 \\text{ mg/min}$.
            - Cicles per minut (motor 4T): $n_{\\text{cicles}} = \\frac{4.000}{2} = 2.000 \\text{ cicles/min}$.
            - Massa per cicle: $m_{\\text{cicle}} = \\frac{136.000 \\text{ mg/min}}{2.000 \\text{ cicles/min}} = 68 \\text{ mg}$ per cicle.`
    },
    {
        type: "multichoice",
        category: "materials",
        id: "24_S1_Q2",
        text: "La figura mostra les corbes tensió-deformació obtingudes en assajos de tracció de dos acers. Respecte al mòdul d'elasticitat ($E$):",
        options: {
            a: "$E_1 > E_2$",
            b: "$E_2 > E_1$",
            c: "$E_1 = E_2$",
            d: "No es pot determinar amb la gràfica"
        },
        correctAnswer: "b",
        steps: `El mòdul d'elasticitat ($E$) es defineix com el pendent de la zona elàstica (recta inicial) de la corba tensió-deformació. Atès que el pendent de la recta de l'acer 2 és superior al de l'acer 1, el seu mòdul d'elasticitat és més gran.`
    },
    {
        type: "multichoice",
        category: "energia",
        id: "24_S1_Q3",
        text: "Una resistència elèctrica proporciona $3.000 \\text{ J}$ a $50 \\text{ mL}$ d’aigua a $5 \\text{ °C}$. Si la calor específica de l'aigua és $c_e = 4,18 \\text{ kJ/(kg K)}$, quina és la temperatura final de l'aigua?",
        options: {
            a: "$7,2 \\text{ °C}$",
            b: "$10,0 \\text{ °C}$",
            c: "$14,4 \\text{ °C}$",
            d: "$19,4 \\text{ °C}$"
        },
        correctAnswer: "d",
        steps: `
            - Massa d'aigua: $m = 0,050 \\text{ kg}$ (densitat $1 \\text{ kg/L}$).
            - Calor aportada: $Q = m \\cdot c_e \\cdot \\Delta T$.
            - $3.000 = 0,050 \\cdot 4.180 \\cdot (T_f - 5)$.
            - $\\Delta T = \\frac{3.000}{209} = 14,35 \\text{ °C}$.
            - $T_f = 5 + 14,35 = 19,35 \\text{ °C}$.`
    },
    {
        type: "multichoice",
        category: "energia",
        id: "24_S1_Q4",
        text: "Una instal·lació té 8 plaques solars amb una superfície total de $4,4 \\text{ m}^2$. Al setembre la irradiació és de $13 \\text{ kWh/(m}^2 \\cdot \\text{dia)}$. Amb un rendiment del $0,3$, quina energia total es capta el mes de setembre?",
        options: {
            a: "$515 \\text{ kWh}$",
            b: "$1.716 \\text{ kWh}$",
            c: "$34 \\text{ kWh}$",
            d: "$172 \\text{ kWh}$"
        },
        correctAnswer: "a",
        steps: `
            - Energia diària total: $E_{\\text{dia}} = I \\cdot S \\cdot \\eta = 13 \\cdot 4,4 \\cdot 0,3 = 17,16 \\text{ kWh/dia}$.
            - Energia mes (setembre = 30 dies): $E_{\\text{total}} = 17,16 \\cdot 30 = 514,8 \\text{ kWh}$.`
    },
    {
        type: "multichoice",
        category: "motors",
        id: "24_S1_Q5",
        text: "Un motor de 4T té una cursa de $50,6 \\text{ mm}$, un diàmetre de $56 \\text{ mm}$ i una relació de compressió $r_c = 7,3$. Quin és el volum de la cambra de combustió ($V_c$)?",
        options: {
            a: "$125,0 \\text{ cm}^3$",
            b: "$105,2 \\text{ cm}^3$",
            c: "$24,4 \\text{ cm}^3$",
            d: "$19,8 \\text{ cm}^3$"
        },
        correctAnswer: "d",
        steps: `
            - Volum unitari: $V_u = \\frac{\\pi \\cdot d^2}{4} \\cdot L = \\frac{\\pi \\cdot 5,6^2}{4} \\cdot 5,06 = 124,63 \\text{ cm}^3$.
            - Relació de compressió: $r_c = \\frac{V_u + V_c}{V_c} = \\frac{V_u}{V_c} + 1$.
            - $7,3 = \\frac{124,63}{V_c} + 1 \\rightarrow 6,3 = \\frac{124,63}{V_c}$.
            - $V_c = \\frac{124,63}{6,3} = 19,78 \\text{ cm}^3$.`
    },

    // --- SÈRIE 1: EXERCICIS (ESTRUCTURA EÒLIC) ---
    {
        type: "exercicis",
        category: "control",
        id: "24_S1_Ex2",
        text: "Un sistema de control d'accés utilitza quatre senyals: horari ($h$), clau ($c$), targeta ($t$) i empremta ($e$). L'accés ($a=1$) es permet si: en horari laboral ($h=1$) qualsevol sistema és vàlid; fora d'horari ($h=0$) calen almenys dos sistemes vàlids.",
        steps: `
            
            <strong>a) Taula de veritat:</strong> Es defineixen les 16 combinacions. Per $h=1$, $a=1$ si $c, t$ o $e$ són 1. Per $h=0$, $a=1$ si almenys dues de $(c, t, e)$ són 1.
            <strong>b) Funció lògica simplificada:</strong>
            $a = h \\cdot (c + t + e) + \\bar{h} \\cdot (c \\cdot t + c \\cdot e + t \\cdot e)$.
            Simplificant per Karnaugh: $a = h \\cdot c + h \\cdot t + h \\cdot e + c \\cdot t + c \\cdot e + t \\cdot e$.
            <strong>c) Esquema de portes lògiques:</strong> Implementació de la funció simplificada amb portes AND i OR.`
    },
    {
        type: "exercicis",
        category: "energia",
        id: "24_S1_Ex3",
        text: "Patinet elèctric: $U = 24 \\text{ V}$, $E_{\\text{bat}} = 250 \\text{ Wh}$, $\\eta_{\\text{mot}} = 0,85$. Roda $r = 70 \\text{ mm}$. Massa total $70 \\text{ kg}$. Puja un pendent de $7^{\\circ}$ a $8 \\text{ km/h}$.",
        steps: `
            <strong>a) Potència elèctrica consumida:</strong>
            - Velocitat: $v = \\frac{8}{3,6} = 2,222 \\text{ m/s}$.
            - Força paral·lela al pendent: $F = m \\cdot g \\cdot \\sin(7^{\\circ}) = 70 \\cdot 9,81 \\cdot 0,1218 = 83,67 \\text{ N}$.
            - Potència útil: $P_{\\text{útil}} = F \\cdot v = 83,67 \\cdot 2,222 = 185,9 \\text{ W}$.
            - Potència elèctrica: $P_{\\text{elèc}} = \\frac{P_{\\text{útil}}}{\\eta} = \\frac{185,9}{0,85} = 218,7 \\text{ W}$.
            <strong>b) Velocitat angular i parell motor:</strong>
            - $\\omega_{\\text{roda}} = \\frac{v}{r} = \\frac{2,222}{0,07} = 31,75 \\text{ rad/s}$.
            - $\\Gamma = \\frac{P_{\\text{útil}}}{\\omega} = \\frac{185,9}{31,75} = 5,855 \\text{ Nm}$.
            <strong>c) Percentatge de bateria consumit en 15 minuts:</strong>
            - Temps: $t = 0,25 \\text{ h}$.
            - Energia consumida: $E_{\\text{cons}} = P_{\\text{elèc}} \\cdot t = 218,7 \\cdot 0,25 = 54,67 \\text{ Wh}$.
            - Percentatge: $\\% = \\frac{54,67}{250} \\cdot 100 = 21,87 \\%$.`
    },
    {
        type: "exercicis",
        category: "energia",
        id: "24_S1_Ex4",
        text: "Un automòbil d'una tona i quart accelera de $0$ a $50 \\text{ km/h}$. El motor té un rendiment del $25 \\%$ i el combustible és benzina ($p_c = 46 \\text{ MJ/kg}$, $\\rho = 0,75 \\text{ kg/L}$).",
        steps: `
            <strong>a) Treball realitzat:</strong>
            - $v = \\frac{50}{3,6} = 13,89 \\text{ m/s}$.
            - $W = \\Delta E_c = \\frac{1}{2} \\cdot 1.250 \\cdot 13,89^2 = 120.580 \\text{ J} = 120,58 \\text{ kJ}$.
            <strong>b) Massa de benzina consumida:</strong>
            - Energia total: $E_{\\text{total}} = \\frac{W}{\\eta} = \\frac{120,58}{0,25} = 482,32 \\text{ kJ}$.
            - Massa: $m = \\frac{E_{\\text{total}}}{p_c} = \\frac{482,32}{46.000} = 0,01048 \\text{ kg} = 10,48 \\text{ g}$.
            <strong>c) Emissió de $\\text{CO}_2$:</strong>
            - Volum: $V = \\frac{m}{\\rho} = \\frac{0,01048}{0,75} = 0,01397 \\text{ L}$.
            - $\\text{CO}_2$: $m_{\\text{CO}_2} = 0,01397 \\text{ L} \\cdot 2.230 \\text{ g/L} = 31,15 \\text{ g}$.`
    },
    {
        type: "exercicis",
        category: "mecanica",
        id: "24_S1_Ex5",
        text: "Biomecànica del peu. Massa peu $2,2 \\text{ kg}$, $a = 30 \\text{ mm}$, $b = 35 \\text{ mm}$, angle $\\alpha = 9^{\\circ}$. Es demana la força del múscul tibial anterior.",
        steps: `
            
            <strong>a) Diagrama de cos lliure:</strong> Forces: Pes ($P$) en el centre de masses, Força muscular ($F_m$) aplicada a $a$ amb angle $\\alpha$, i reaccions $R_{ox}$ i $R_{oy}$ a l'articulació $O$.
            <strong>b) Força muscular $F_m$:</strong>
            - $\\sum M(O) = 0 \\rightarrow F_m \\cdot a \\cdot \\cos(\\alpha) - m \\cdot g \\cdot b = 0$. (Simplificat si s'assumeix $F_m$ perpendicular: $F_m \\cdot a = m \\cdot g \\cdot b$).
            - $F_m = \\frac{2,2 \\cdot 9,81 \\cdot 35}{30} = 25,17 \\text{ N}$.
            <strong>c) Forces de reacció a l'articulació $O$:</strong>
            - $\\sum F_x = 0 \\rightarrow R_{ox} = F_m \\cdot \\sin(9^{\\circ}) = 3,94 \\text{ N}$.
            - $\\sum F_y = 0 \\rightarrow R_{oy} = m \\cdot g - F_m \\cdot \\cos(9^{\\circ}) = 21,58 - 24,86 = -3,28 \\text{ N}$.`
    },
    {
        type: "exercicis",
        category: "electrics",
        id: "24_S1_Ex6",
        text: "Circuit de corrent altern ($50 \\text{ Hz}$). Resistència $R = 5 \\, \\Omega$ i inductància $L = 7 \\text{ mH}$. La potència dissipada és $950 \\text{ W}$.",
        steps: `
            <strong>a) Reactància inductiva:</strong>
            - $X_L = 2 \\cdot \\pi \\cdot f \\cdot L = 2 \\cdot \\pi \\cdot 50 \\cdot 0,007 = 2,2 \\, \\Omega$.
            <strong>b) Impedància i factor de potència:</strong>
            - $Z = \\sqrt{R^2 + X_L^2} = \\sqrt{5^2 + 2,2^2} = 5,462 \\, \\Omega$.
            - $\\cos(\\phi) = \\frac{R}{Z} = \\frac{5}{5,462} = 0,9154$.
            <strong>c) Intensitat i tensió:</strong>
            - $I = \\sqrt{\\frac{P}{R}} = \\sqrt{\\frac{950}{5}} = 13,78 \\text{ A}$.
            - $U = I \\cdot Z = 13,78 \\cdot 5,462 = 75,27 \\text{ V}$.`
    }
];

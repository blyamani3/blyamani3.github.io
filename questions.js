const questions = [
    // --- EXERCICI 1: QÜESTIONS (PAU 2024 Sèrie 1) ---
    {
        type: "exercicis",
        category: "motors",
        id: "24_S1_Q1",
        text: `<strong>Qüestió 1:</strong> Un motor de benzina de quatre temps consumeix \\(10,2 \\text{ L/h}\\) quan gira a \\(4.000 \\text{ min}^{-1}\\). El poder calorífic de la benzina és \\(42.000 \\text{ kJ/kg}\\) i la seva densitat, \\(0,8 \\text{ kg/L}\\). Quina és la massa de combustible consumida en un cicle del motor?`,
        correctAnswer: "c",
        steps: `
            - Consum de massa per hora: \\( \dot{m} = 10,2 \\text{ L/h} \\cdot 0,8 \\text{ kg/L} = 8,16 \\text{ kg/h} \\).
            - Massa per minut: \\( m_{\\text{min}} = 8,16 / 60 = 0,136 \\text{ kg/min} = 136.000 \\text{ mg/min} \\).
            - Cicles per minut (4 temps): \\( \\text{cicles} = 4.000 / 2 = 2.000 \\text{ cicles/min} \\).
            - Massa per cicle: \\( m_{\\text{cicle}} = 136.000 \\text{ mg/min} / 2.000 \\text{ cicles/min} = 68 \\text{ mg} \\).`
    },
    {
        type: "exercicis",
        category: "materials",
        id: "24_S1_Q2",
        text: `<strong>Qüestió 2:</strong> La figura mostra les corbes tensió-deformació obtingudes en assajos de tracció de dos acers. El mòdul d'elasticitat (\\(E\\))...`,
        correctAnswer: "b",
        steps: `El mòdul d'elasticitat correspon al pendent de la zona elàstica (recta inicial). Com que el pendent de l'acer 2 és més pronunciat que el de l'acer 1, el seu mòdul d'elasticitat és més gran.`
    },
    {
        type: "exercicis",
        category: "energia",
        id: "24_S1_Q3",
        text: `<strong>Qüestió 3:</strong> Una resistència elèctrica proporciona \\(3.000 \\text{ J}\\) a \\(50 \\text{ ml}\\) d’aigua a \\(5 \\text{ °C}\\). Calor específica \\(c_e = 4,18 \\text{ kJ/(kg K)}\\). Temperatura final?`,
        correctAnswer: "d",
        steps: `
            - Massa d'aigua: \\( m = 0,050 \\text{ kg} \\).
            - \\( Q = m \\cdot c_e \\cdot \\Delta T \\rightarrow 3.000 = 0,050 \\cdot 4.180 \\cdot (T_f - 5) \\).
            - \\( \\Delta T = 14,35 \\text{ °C} \\).
            - \\( T_f = 5 + 14,35 = 19,35 \\text{ °C} \\).`
    },
    {
        type: "exercicis",
        category: "energia",
        id: "24_S1_Q4",
        text: `<strong>Qüestió 4:</strong> 8 plaques solars (\\(4,4 \\text{ m}^2\\) totals). Irradiació al setembre: \\(13 \\text{ kWh/m}^2\\) dia. Rendiment \\(0,3\\). Energia total al setembre?`,
        correctAnswer: "a",
        steps: `
            - Energia diària: \\( E_{\\text{dia}} = 13 \\text{ kWh/m}^2 \\cdot 4,4 \\text{ m}^2 \\cdot 0,3 = 17,16 \\text{ kWh} \\).
            - Energia mes (30 dies): \\( E_{\\text{total}} = 17,16 \\cdot 30 = 514,8 \\text{ kWh} \\).`
    },
    {
        type: "exercicis",
        category: "motors",
        id: "24_S1_Q5",
        text: `<strong>Qüestió 5:</strong> Motor 4T, cursa \\(50,6 \\text{ mm}\\), diàmetre \\(56 \\text{ mm}\\). Relació de compressió \\(r_c = 7,3\\). Volum cambra de combustió \\(V_c\\)?`,
        correctAnswer: "d",
        steps: `
            - Volum unitari: \\( V_u = \\frac{\\pi \\cdot d^2}{4} \\cdot L = 124,63 \\text{ cm}^3 \\).
            - \\( r_c = \\frac{V_u + V_c}{V_c} \\rightarrow 7,3 = \\frac{124,63}{V_c} + 1 \\).
            - \\( V_c = 19,78 \\text{ cm}^3 \\).`
    },

    // --- EXERCICI 2: CONTROL LÒGIC ---
    {
        type: "exercicis",
        category: "control",
        id: "24_S1_Ex2",
        text: `<strong>Exercici 2:</strong> Control d'accés (h: horari, c: clau, t: targeta, e: empremta). Accés permès (a=1) si: 
               - Laboral (h=1): qualsevol sistema vàlid.
               - No laboral (h=0): almenys dos sistemes vàlids.`,
        steps: `
            <strong>a) Taula de veritat:</strong> Determinació de les 16 combinacions on \\(a=1\\) segons condicions.
            <strong>b) Funció lògica:</strong> 
            \\( a = h \\cdot (c + t + e) + \\bar{h} \\cdot (c \\cdot t + c \\cdot e + t \\cdot e) \\).
            <strong>c) Diagrama:</strong> Disseny amb portes lògiques basat en la funció anterior.`
    },

    // --- EXERCICI 3: PATINET ELÈCTRRIC ---
    {
        type: "exercicis",
        category: "energia",
        id: "24_S1_Ex3",
        text: `<strong>Exercici 3:</strong> Patinet elèctric: \\(U = 24 \\text{ V}\\), \\(E_{\\text{bat}} = 250 \\text{ Wh}\\), \\(\\eta_{\\text{mot}} = 0,85\\). Massa \\(70 \\text{ kg}\\), pendent \\(7^{\\circ}\\).`,
        steps: `
            <strong>a) Potència elèctrica:</strong>
            - \\( v = 2,22 \\text{ m/s} \\).
            - \\( F = m \\cdot g \\cdot \\sin(7^{\\circ}) = 83,67 \\text{ N} \\).
            - \\( P_{\\text{útil}} = F \\cdot v = 185,9 \\text{ W} \\).
            - \\( P_{\\text{elèc}} = 185,9 / 0,85 = 218,7 \\text{ W} \\).
            <br><strong>b) Rotació i Parell:</strong>
            - \\( \\omega_{\\text{mot}} = v / r = 31,71 \\text{ rad/s} \\).
            - \\( \\Gamma = P_{\\text{útil}} / \\omega_{\\text{mot}} = 5,86 \\text{ Nm} \\).
            <br><strong>c) Percentatge energia:</strong>
            - \\( E_{\\text{cons}} = P_{\\text{elèc}} \\cdot t = 54,67 \\text{ Wh} \\).
            - \\( \\% = (54,67 / 250) \\cdot 100 = 21,87\\% \\).`
    },

    // --- EXERCICI 4: TREBALL I EMISSIONS ---
    {
        type: "exercicis",
        category: "energia",
        id: "24_S1_Ex4",
        text: `<strong>Exercici 4:</strong> Cotxe (1250 kg) de 0 a 50 km/h. \\(\\eta = 0,25\\), \\(p_c = 46 \\text{ MJ/kg}\\).`,
        steps: `
            <strong>a) Treball (W):</strong> \\( W = \\Delta E_c = 0,5 \\cdot 1250 \\cdot (50/3,6)^2 = 120,58 \\text{ kJ} \\).
            <br><strong>b) Massa benzina:</strong> \\( m = (W / \\eta) / p_c = 10,48 \\text{ g} \\).
            <br><strong>c) Petjada CO2:</strong> \\( m_{\\text{CO2}} = V \\cdot 2,157 = 31,4 \\text{ g} \\).`
    },

    // --- EXERCICI 5: BIOMECÀNICA PEU ---
    {
        type: "exercicis",
        category: "organitzacio",
        id: "24_S1_Ex5",
        text: `<strong>Exercici 5:</strong> Força del múscul tibial anterior. Massa peu \\(2,2 \\text{ kg}\\), \\(a = 30 \\text{ mm}\\), \\(b = 35 \\text{ mm}\\), angle \\(9^{\\circ}\\).`,
        steps: `
            
            <strong>a) DCL:</strong> Dibuixar forces: Pes (P) avall, Força muscular (Fm), Reaccions (Rx, Ry) a O.
            <br><strong>b) Força Fm:</strong>
            - \\( \\sum M(O) = 0 \\rightarrow F_m \\cdot a - m \\cdot g \\cdot b = 0 \\).
            - \\( F_m = (2,2 \\cdot 9,81 \\cdot 35) / 30 = 25,17 \\text{ N} \\).
            <br><strong>c) Forces a O:</strong>
            - \\( R_{ox} = F_m \\cdot \\sin(9^{\\circ}) = 3,94 \\text{ N} \\).
            - \\( R_{oy} = m \\cdot g - F_m \\cdot \\cos(9^{\\circ}) = 21,58 - 24,87 = -3,29 \\text{ N} \\).`
    },

    // --- EXERCICI 6: CORRENT ALTERNA ---
    {
        type: "exercicis",
        category: "electrics",
        id: "24_S1_Ex6",
        text: `<strong>Exercici 6:</strong> Circuit AC (50 Hz). \\(R_1 = 5 \\Omega\\), \\(L_1 = 7 \\text{ mH}\\). \\(W_1 = 950 \\text{ W}\\).`,
        steps: `
            <strong>a) Reactància:</strong> \\( X_L = 2 \\pi f L = 2,2 \\Omega \\).
            <strong>b) Factor de potència:</strong> \\( \\cos \\phi = R / \\sqrt{R^2 + X_L^2} = 0,915 \\).
            <strong>c) Impedància:</strong> \\( Z = \\sqrt{R^2 + X_L^2} = 5,46 \\Omega \\).
            <strong>d) Corrent:</strong> \\( I = \\sqrt{P/R} = 13,78 \\text{ A} \\).
            <strong>e) Tensió:</strong> \\( U = I \\cdot Z = 75,24 \\text{ V} \\).`
    }
];

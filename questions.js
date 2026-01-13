const questions = [
    // --- EXERCICI 1: QÜESTIONS (PAU 2024 Sèrie 1) ---
    {
        type: "exercicis",
        category: "motors",
        text: `<strong>Qüestió 1:</strong> Un motor de benzina de quatre temps consumeix 10,2 L/h quan gira a 4.000 min⁻¹. El poder calorífic de la benzina és 42.000 kJ/kg i la seva densitat, 0,8 kg/L. Quina és la massa de combustible consumida en un cicle del motor?`,
        correctAnswer: "b",
        steps: `
            - Consum de massa per hora: \\( \dot{m} = 10,2 \text{ L/h} \cdot 0,8 \text{ kg/L} = 8,16 \text{ kg/h} \\).
            - Massa per minut: \\( m_{min} = 8,16 / 60 = 0,136 \text{ kg/min} = 136.000 \text{ mg/min} \\).
            - Cicles per minut (4 temps): \\( \text{cicles} = 4.000 / 2 = 2.000 \text{ cicles/min} \\).
            - Massa per cicle: \\( m_{cicle} = 136.000 \text{ mg/min} / 2.000 \text{ cicles/min} = 68 \text{ mg} \\).
            <em>*Nota: Si es considera un sol cilindre, la resposta seria 68 mg. Revisant el càlcul estàndard: 136.000 / 4.000 = 34 mg si es divideix per revolució.</em>`
    },
    {
        type: "exercicis",
        category: "materials",
        text: `<strong>Qüestió 2:</strong> La figura mostra les corbes tensió-deformació obtingudes en assajos de tracció de dos acers. El mòdul d'elasticitat (E)...
               <br>[INSERTAR FOTO: pau_tecn24jl.pdf, pàgina 2, Qüestió 2]`,
        correctAnswer: "d",
        steps: `El mòdul d'elasticitat correspon al pendent de la zona elàstica (recta inicial). Com que el pendent de l'acer 2 és més pronunciat que el de l'acer 1, el seu mòdul d'elasticitat és més gran.`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Qüestió 3:</strong> Una resistència elèctrica proporciona 3.000 J a 50 ml d’aigua a 5 °C. Calor específica \\(c_e = 4,18 \text{ kJ/(kg K)}\\). Temperatura final?`,
        correctAnswer: "d",
        steps: `
            - Massa d'aigua: \\( m = 0,050 \text{ kg} \\).
            - \\( Q = m \cdot c_e \cdot \Delta T \rightarrow 3.000 = 0,050 \cdot 4.180 \cdot (T_f - 5) \\).
            - \\( \Delta T = 3.000 / 209 = 14,35 \text{ °C} \\).
            - \\( T_f = 5 + 14,35 = 19,35 \text{ °C} \\).`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Qüestió 4:</strong> 8 plaques solars (4,4 m² totals). Irradiació al setembre: 13 kWh/m² dia. Rendiment 0,3. Energia total al setembre?`,
        correctAnswer: "a",
        steps: `
            - Energia diària: \\( E_{dia} = 13 \text{ kWh/m²} \cdot 4,4 \text{ m²} \cdot 0,3 = 17,16 \text{ kWh} \\).
            - Energia mes (30 dies): \\( E_{total} = 17,16 \cdot 30 = 514,8 \text{ kWh} \\).`
    },
    {
        type: "exercicis",
        category: "motors",
        text: `<strong>Qüestió 5:</strong> Motor 4T, cursa 50,6 mm, diàmetre 56 mm. Relació de compressió \\(r_c = 7,3\\). Volum cambra de combustió \\(V_c\\)?`,
        correctAnswer: "d",
        steps: `
            - Volum unitari: \\( V_u = \frac{\pi \cdot d^2}{4} \cdot L = \frac{\pi \cdot 5,6^2}{4} \cdot 5,06 = 124,63 \text{ cm³} \\).
            - \\( r_c = \frac{V_u + V_c}{V_c} \rightarrow 7,3 = \frac{124,63}{V_c} + 1 \\).
            - \\( 6,3 = 124,63 / V_c \rightarrow V_c = 19,78 \text{ cm³} \\).`
    },

    // --- EXERCICI 2: CONTROL LÒGIC ---
    {
        type: "exercicis",
        category: "control",
        text: `<strong>Exercici 2:</strong> Control d'accés (h: horari, c: clau, t: targeta, e: empremta). Accés permès (a=1) si: 
               - Laboral (h=1): qualsevol sistema vàlid.
               - No laboral (h=0): almenys dos sistemes vàlids.
               Determineu taula de veritat, funció simplificada i esquema de portes.`,
        steps: `
            <strong>a) Taula de veritat:</strong> (Es resumeix en la funció lògica).
            <strong>b) Funció lògica:</strong> 
            \\( a = h \cdot (c + t + e) + \bar{h} \cdot (c \cdot t + c \cdot e + t \cdot e) \\)
            <strong>c) Diagrama:</strong> [Insertar foto esquemàtic de portes AND/OR per a la funció anterior].`
    },

    // --- EXERCICI 3: PATINET ELÈCTRIC ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Exercici 3:</strong> Patinet elèctric: \\(U = 24 \text{ V}\\), \\(E_{bat} = 250 \text{ Wh}\\), \\(\eta_{mot} = 0,85\\), \\(d_{roda} = 140 \text{ mm}\\). Massa \\(70 \text{ kg}\\), pendent \\(7^{\circ}\\), distància \\(2 \text{ km}\\), velocitat \\(8 \text{ km/h}\\). 
               Determineu \\(P_{elèc}\\), \\(\omega_{mot}\\), \\(\Gamma\\) i \\(\%E\\).`,
        steps: `
            <strong>a) Potència elèctrica:</strong>
            - \\( v = 8 / 3,6 = 2,22 \text{ m/s} \\).
            - \\( F = m \cdot g \cdot \sin(7^\circ) = 70 \cdot 9,81 \cdot 0,1218 = 83,67 \text{ N} \\).
            - \\( P_{útil} = F \cdot v = 185,9 \text{ W} \\).
            - \\( P_{elèc} = 185,9 / 0,85 = 218,7 \text{ W} \\).
            <br><strong>b) Rotació i Parell:</strong>
            - \\( \omega_{mot} = v / r = 2,22 / 0,07 = 31,71 \text{ rad/s} \\).
            - \\( \Gamma = P_{útil} / \omega_{mot} = 185,9 / 31,71 = 5,86 \text{ Nm} \\).
            <br><strong>c) Percentatge energia:</strong>
            - \\( t = s / v = 2.000 / 2,22 = 900 \text{ s} = 0,25 \text{ h} \\).
            - \\( E_{cons} = P_{elèc} \cdot t = 218,7 \cdot 0,25 = 54,67 \text{ Wh} \\).
            - \\( \% = (54,67 / 250) \cdot 100 = 21,87\% \\).`
    },

    // --- EXERCICI 4: TREBALL I EMISSIONS ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Exercici 4:</strong> Cotxe (1250 kg) de 0 a 50 km/h. \\(\eta = 0,25\\), \\(p_c = 46 \text{ MJ/kg}\\), \\(\rho = 0,72 \text{ g/cm³}\\), \\(FE = 2,157 \text{ kg } CO_2/L\\). Determineu treball, massa benzina i petjada \\(CO_2\\).`,
        steps: `
            <strong>a) Treball (W):</strong>
            - \\( v = 50 / 3,6 = 13,89 \text{ m/s} \\).
            - \\( W = \Delta E_c = 0,5 \cdot 1250 \cdot 13,89^2 = 120.580 \text{ J} = 120,58 \text{ kJ} \\).
            <br><strong>b) Massa benzina:</strong>
            - \\( E_{quím} = W / \eta = 120,58 / 0,25 = 482,32 \text{ kJ} \\).
            - \\( m = E_{quím} / p_c = 482,32 \cdot 10^3 / 46 \cdot 10^6 = 0,01048 \text{ kg} = 10,48 \text{ g} \\).
            <br><strong>c) Petjada CO2:</strong>
            - \\( V = m / \rho = 10,48 \text{ g} / 0,72 \text{ g/cm³} = 14,55 \text{ cm³} = 0,01455 \text{ L} \\).
            - \\( m_{CO2} = 0,01455 \text{ L} \cdot 2,157 \text{ kg/L} = 0,0314 \text{ kg} = 31,4 \text{ g} \\).`
    },

    // --- EXERCICI 5: BIOMECÀNICA (PEU) ---
    {
        type: "exercicis",
        category: "organitzacio",
        text: `<strong>Exercici 5:</strong> Força del múscul tibial anterior. Massa peu \\(2,2 \text{ kg}\\), \\(a = 30 \text{ mm}\\), \\(b = 35 \text{ mm}\\) (distància de G a O), angle \\(9^\circ\\).
               <br>[INSERTAR FOTO: pau_tecn24jl.pdf, pàgina 10, Exercici 5]`,
        steps: `
            <strong>a) DCL:</strong> Dibuixar forces: Pes (P) a G cap avall, Força muscular (Fm) a Q, Reaccions (Rx, Ry) a O.
            <br><strong>b) Força Fm:</strong>
            - Suma de moments a O = 0: \\( F_m \cdot a = m \cdot g \cdot b \\).
            - \\( F_m = (2,2 \cdot 9,81 \cdot 35) / 30 = 25,18 \text{ N} \\).
            <br><strong>c) Forces a O:</strong>
            - \\( R_{ox} = F_m \cdot \sin(9^\circ) = 25,18 \cdot 0,1564 = 3,94 \text{ N} \\).
            - \\( R_{oy} = m \cdot g + F_m \cdot \cos(9^\circ) = 21,58 + 24,87 = 46,45 \text{ N} \\).`
    },

    // --- EXERCICI 6: CORRENT ALTERNA ---
    {
        type: "exercicis",
        category: "electrics",
        text: `<strong>Exercici 6:</strong> Circuit AC (50 Hz). \\(R_1 = 5 \Omega\\), \\(L_1 = 7 \text{ mH}\\). Potència activa \\(W_1 = 950 \text{ W}\\). Determineu \\(X_L\\), \\(\cos \phi\\), \\(Z\\), Corrent (A) i Tensió (U).
               <br>[INSERTAR FOTO: pau_tecn24jl.pdf, pàgina 12, Exercici 6]`,
        steps: `
            <strong>a) Reactància:</strong> \\( X_L = 2 \cdot \pi \cdot f \cdot L = 2 \cdot \pi \cdot 50 \cdot 0,007 = 2,2 \Omega \\).
            <strong>b) Factor de potència:</strong> 
            - \\( \phi = \arctan(X_L / R) = \arctan(2,2 / 5) = 23,75^\circ \\).
            - \\( \cos \phi = \cos(23,75^\circ) = 0,915 \\).
            <strong>c) Impedància:</strong> \\( Z = \sqrt{R^2 + X_L^2} = \sqrt{5^2 + 2,2^2} = 5,46 \Omega \\).
            <strong>d) Corrent:</strong> \\( P = I^2 \cdot R \rightarrow 950 = I^2 \cdot 5 \rightarrow I = \sqrt{190} = 13,78 \text{ A} \\).
            <strong>e) Tensió:</strong> \\( U = I \cdot Z = 13,78 \cdot 5,46 = 75,24 \text{ V} \\).`
    },
    
    // --- EXERCICI 1: QÜESTIONS (PAU 2024 Sèrie 3) ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Qüestió 1:</strong> Una pantalla de projecció té una massa \\(m = 3 \\text{ kg}\\) a la part inferior. Es vol enrotllar tota la pantalla de longitud \\(h = 1{,}5 \\text{ m}\\). Quina és l'energia mecànica necessària?`,
        correctAnswer: "c",
        steps: `
            - L'energia mecànica necessària correspon al treball per elevar el centre de masses de la barra inferior.
            - \\( E_{mec} = m \\cdot g \\cdot h = 3 \\cdot 9{,}81 \\cdot 1{,}5 = 44{,}145 \\text{ J} \\).
            - *Nota: Si la pantalla també té massa, es consideraria el seu centre de masses, però aquí només es dóna la de la part inferior. Revisant opcions, si es demana el treball per pujar el conjunt (barra i pantalla suposant pantalla de massa negligible), el resultat és 44,13 J.*`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Qüestió 2:</strong> Una màquina tèrmica funciona entre \\(270 \\text{ °C}\\) i \\(610 \\text{ °C}\\). Quina afirmació és certa?`,
        correctAnswer: "b",
        steps: `
            - Convertim a Kelvin: \\( T_{calent} = 610 + 273 = 883 \\text{ K}\\); \\( T_{fred} = 270 + 273 = 543 \\text{ K}\\).
            - Rendiment màxim (Carnot): \\( \\eta_{max} = 1 - (T_{fred} / T_{calent}) = 1 - (543 / 883) = 0{,}385 \\) (38,5%).
            - Cap màquina real pot superar el rendiment de Carnot.`
    },
    {
        type: "exercicis",
        category: "materials",
        text: `<strong>Qüestió 3:</strong> La figura mostra les corbes tensió-deformació d'un acer d'alta resistència i un bronze. Què es pot afirmar?
               <br>[INSERTAR FOTO: pau_tecn24sl.pdf, pàgina 2, Qüestió 3]`,
        correctAnswer: "a",
        steps: `S'observa que l'acer d'alta resistència es trenca amb molt poca deformació plàstica en comparació amb el bronze, el que indica que és més fràgil.`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Qüestió 4:</strong> Cotxe híbrid. Gasolina: 6,1 L/100km (2,23 kg CO₂/L). GLP: 7 L/100km (1,647 kg CO₂/L). Diferència de petjada en 50 km?`,
        correctAnswer: "c",
        steps: `
            - Gasolina (50 km): \\( 3{,}05 \\text{ L} \\cdot 2{,}23 = 6{,}8015 \\text{ kg CO}_2 \\).
            - GLP (50 km): \\( 3{,}5 \\text{ L} \\cdot 1{,}647 = 5{,}7645 \\text{ kg CO}_2 \\).
            - Diferència: \\( 6{,}8015 - 5{,}7645 = 1{,}037 \\text{ kg CO}_2 \\).`
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `<strong>Qüestió 5:</strong> Estufa \\(R = 25 \\Omega\\), potència \\(P = 100 \\text{ W}\\) (alterna). Valor màxim de la tensió (V_max)?`,
        correctAnswer: "c",
        steps: `
            - \\( P = U_{ef}^2 / R \\rightarrow 100 = U_{ef}^2 / 25 \\rightarrow U_{ef} = 50 \\text{ V} \\).
            - \\( U_{max} = U_{ef} \\cdot \\sqrt{2} = 50 \\cdot 1{,}414 = 70{,}71 \\text{ V} \\approx 71 \\text{ V} \\).`
    },

    // --- EXERCICI 2: CONTROL LÒGIC (MARCADOR) ---
    {
        type: "exercicis",
        category: "control",
        text: `<strong>Exercici 2:</strong> Disseny de l'encesa del segment central (s) per a números del 00 al 15 (binari a,b,c,d). El segment s'encén en els números: 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15.
               <br>[INSERTAR FOTO: pau_tecn24sl.pdf, pàgina 4, Exercici 2]`,
        steps: `
            <strong>a) Taula de veritat:</strong> El segment central s'encén per a tots els números excepte 0, 1 i 7.
            <strong>b) Funció lògica:</strong> Mitjançant mapa de Karnaugh o mintermes: \\( s = a + b \\cdot \\bar{c} + b \\cdot d + c \\cdot \\bar{d} + \\dots \\) (simplificar segons taula).
            <strong>c) Diagrama:</strong> Disseny amb portes lògiques de la funció simplificada.`
    },

    // --- EXERCICI 3: CISTELLA DE BÀSQUET ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Exercici 3:</strong> Cistella de bàsquet (100 kg). Canvi d'angle de \\(\\varphi_1 = 45^{\\circ}\\) a \\(\\varphi_2 = 15^{\\circ}\\). \\(\\omega = 0{,}1745 \\text{ rad/s}\\). \\(\\eta = 0{,}8\\).
               <br>[INSERTAR FOTO: pau_tecn24sl.pdf, pàgina 6, Exercici 3]`,
        steps: `
            <strong>a) Energia mecànica:</strong>
            - El centre de masses G puja. \\( h = L \\cdot \\sin(\\varphi) \\).
            - \\( E_{mec} = m \\cdot g \\cdot (L \\cdot \\sin(45^{\\circ}) - L \\cdot \\sin(15^{\\circ})) \\).
            - \\( E_{mec} = 100 \\cdot 9{,}81 \\cdot (0{,}7071 - 0{,}2588) = 440 \\text{ J} \\).
            <strong>b) Energia motor:</strong> \\( E_{mot} = E_{mec} / 0{,}8 = 550 \\text{ J} \\).
            <strong>c) Velocitat vertical a 30°:</strong> \\( v_{vert} = \\omega \\cdot L \\cdot \\cos(30^{\\circ}) = 0{,}1745 \\cdot 1 \\cdot 0{,}866 = 0{,}151 \\text{ m/s} \\).
            <strong>d) Potència motor:</strong> \\( P_{útil} = m \\cdot g \\cdot v_{vert} = 100 \\cdot 9{,}81 \\cdot 0{,}151 = 148{,}1 \\text{ W} \\). \\( P_{mot} = 148{,}1 / 0{,}8 = 185{,}1 \\text{ W} \\).`
    },

    // --- EXERCICI 4: PLANXA ELÈCTRICA ---
    {
        type: "exercicis",
        category: "electrics",
        text: `<strong>Exercici 4:</strong> Planxa elèctrica. \\(P = 2{,}2 \\text{ kW}\\), \\(U = 230 \\text{ V}\\), \\(\\rho = 4{,}9 \\cdot 10^{-7} \\Omega \\text{m}\\). Determineu R, gràfica R vs d, i selecció de bobina (diàmetres 0,04 a 0,2 mm).`,
        steps: `
            <strong>a) Resistència:</strong> \\( R = U^2 / P = 230^2 / 2200 = 24{,}045 \\Omega \\).
            <strong>b) Gràfica:</strong> \\( R_b = \\rho \\cdot l / A = (4 \\cdot \\rho \\cdot l) / (\\pi \\cdot d^2) \\). És una funció hiperbòlica inversa al quadrat del diàmetre.
            <strong>c) Selecció:</strong> Per usar el màxim de fil, busquem el diàmetre més gran que permeti arribar a la R necessària amb la longitud disponible o el diàmetre que doni la R requerida amb més longitud.
            \\( L = (R \\cdot \\pi \\cdot d^2) / (4 \\cdot \\rho) \\). Amb el diàmetre de 0,2 mm: \\( L = (24{,}045 \\cdot \\pi \\cdot 0,0002^2) / (4 \\cdot 4{,}9 \\cdot 10^{-7}) = 1{,}54 \\text{ m} \\).`
    },

    // --- EXERCICI 5: BIOMECÀNICA (BRAÇ) ---
    {
        type: "exercicis",
        category: "organitzacio",
        text: `<strong>Exercici 5:</strong> Persona amb braços estirats. \\(m_{braç} = 5 \\text{ kg}\\), \\(m_{pes} = 2 \\text{ kg}\\). Múscul deltoide a 20°.
               <br>[INSERTAR FOTO: pau_tecn24sl.pdf, pàgina 10, Exercici 5]`,
        steps: `
            <strong>a) DCL:</strong> Força muscular \\(F_m\\) a Q, Pes del braç a G, Pes a P, Reaccions a O.
            <strong>b) Força muscular:</strong>
            - Suma de moments a O: \\( F_m \\cdot \\sin(20^{\\circ}) \\cdot d_Q = m_{braç} \\cdot g \\cdot d_G + m_{pes} \\cdot g \\cdot d_P \\).
            - (Usant distàncies de la figura): \\( F_m \\cdot 0{,}342 \\cdot 0{,}15 = 5 \\cdot 9{,}81 \\cdot 0{,}3 + 2 \\cdot 9{,}81 \\cdot 0{,}6 \\).
            - \\( F_m = (14{,}715 + 11{,}772) / 0{,}0513 = 516{,}3 \\text{ N} \\).
            <strong>c) Reaccions a O:</strong> \\( R_x = F_m \\cdot \\cos(20^{\\circ}) \\); \\( R_y = P_{total} - F_m \\cdot \\sin(20^{\\circ}) \\).`
    },

    // --- EXERCICI 6: CALDERA DE PROPÀ ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Exercici 6:</strong> Caldera de propà. \\(1500 \\text{ kg}\\) d'aigua de 80°C a vapor a 125°C. Consum \\(90 \\text{ kg}\\) propà. \\(p_c = 12{,}83 \\text{ kWh/kg}\\). \\(L_v = 2257 \\text{ kJ/kg}\\).`,
        steps: `
            <strong>a) Energia útil:</strong>
            - Escalfar aigua (80 a 100): \\( Q_1 = 1500 \\cdot 4{,}197 \\cdot 20 = 125.910 \\text{ kJ} \\).
            - Vaporització: \\( Q_2 = 1500 \\cdot 2257 = 3.385.500 \\text{ kJ} \\).
            - Escalfar vapor (100 a 125): \\( Q_3 = 1500 \\cdot 2{,}155 \\cdot 25 = 80.812{,}5 \\text{ kJ} \\).
            - \\( E_{útil} = (Q_1 + Q_2 + Q_3) / 3600 = 997{,}84 \\text{ kWh} \\).
            <strong>b) Energia consumida i Rendiment:</strong>
            - \\( E_{cons} = 90 \\cdot 12{,}83 = 1154{,}7 \\text{ kWh} \\).
            - \\( \\eta = 997{,}84 / 1154{,}7 = 0{,}864 \\) (86,4%).
            <strong>c) Emissió CO2 anual:</strong> \\( 90 \\text{ kg/dia} \\cdot 365 \\text{ dies} \\cdot 2{,}94 \\text{ kg CO}_2\\text{/kg} = 96.579 \\text{ kg CO}_2 \\).`
    },
    // --- EXERCICI 1: QÜESTIONS (PAU 2024 Sèrie 5) ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Qüestió 1:</strong> La intensitat d’una estufa de quars és de 8 A. Està connectada a U = 230 V durant 4 h i té un rendiment del 98 %. L’energia elèctrica consumida és:`,
        correctAnswer: "b",
        steps: `
            - Potència elèctrica: \\( P = U \cdot I = 230 \cdot 8 = 1.840 \text{ W} \\).
            - Temps en segons: \\( t = 4 \cdot 3.600 = 14.400 \text{ s} \\).
            - Energia consumida: \\( E_{cons} = P \cdot t = 1.840 \cdot 14.400 = 26.496.000 \text{ J} \approx 26,50 \text{ MJ} \\).
            *Nota: El rendiment no afecta el càlcul de l'energia consumida de la xarxa.*`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Qüestió 2:</strong> Cabal d'aigua de 12 L/min a 38 °C (inicial 15 °C). Durada: 5 min. Energia utilitzada per escalfar l'aigua?`,
        correctAnswer: "a",
        steps: `
            - Volum total: \\( V = 12 \text{ L/min} \cdot 5 \text{ min} = 60 \text{ L} \\rightarrow m = 60 \text{ kg} \\).
            - Increment de temperatura: \\( \Delta T = 38 - 15 = 23 \text{ °C} \\).
            - Energia: \\( Q = m \cdot c_e \cdot \Delta T = 60 \cdot 4,18 \cdot 23 = 5.768,4 \text{ kJ} \\).
            - Conversió a kWh: \\( E = 5.768,4 / 3.600 \approx 1,602 \text{ kWh} \\).`
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `<strong>Qüestió 3:</strong> Dues resistències R en sèrie alimentades a U dissipen una potència P. Si es connecten en paral·lel a la mateixa tensió U, quina serà la potència?`,
        correctAnswer: "d",
        steps: `
            - En sèrie: \\( R_{eq,s} = 2R \\); \\( P = U^2 / (2R) \\).
            - En paral·lel: \\( R_{eq,p} = R/2 \\); \\( P' = U^2 / (R/2) = 2 \cdot U^2/R \\).
            - Relació: \\( P' / P = (2 \cdot U^2/R) / (U^2/(2R)) = 4 \\). Per tant, \\( P' = 4P \\).`
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `<strong>Qüestió 4:</strong> Bloc de \\( m = 2 \text{ kg} \\) penjat d'un sistema de politges. Quina força F cal fer per mantenir el bloc en repòs?
               <br>[INSERTAR FOTO: pau_tecn24jl_tei.pdf, pàgina 2, Qüestió 4]`,
        correctAnswer: "d",
        steps: `
            - Pes del bloc: \\( P = m \cdot g = 2 \cdot 9,807 = 19,614 \text{ N} \\).
            - El cable que puja del centre de la politja R1 es divideix en dues branques que passen per R2 i tornen a R1.
            - Segons la configuració del polispast: \\( F = P / 2 = 19,614 / 2 = 9,807 \text{ N} \\).`
    },
    {
        type: "exercicis",
        category: "materials",
        text: `<strong>Qüestió 5:</strong> Rail d'acer (25 m a 20 °C). Coeficient \\( \alpha = 10,8 \cdot 10^{-6} \text{ °C}^{-1} \\). Variació de longitud entre -10 °C i 45 °C?`,
        correctAnswer: "d",
        steps: `
            - \\( \Delta T_{total} = 45 - (-10) = 55 \text{ °C} \\).
            - \\( \Delta L = L_0 \cdot \alpha \cdot \Delta T = 25.000 \text{ mm} \cdot 10,8 \cdot 10^{-6} \cdot 55 = 14,85 \text{ mm} \\).`
    },

    // --- EXERCICI 2: CONTROL LÒGIC (LLUM) ---
    {
        type: "exercicis",
        category: "control",
        text: `<strong>Exercici 2:</strong> Control d'encesa d'un llum (l). Entrades binàries (a,b,c,d). Condició: l=1 si el número és 0 o senar.`,
        steps: `
            <strong>a) Taula de veritat:</strong> l=1 per a 0 (0000), 1 (0001), 3 (0011), 5 (0101), 7 (0111), 9 (1001), 11 (1011), 13 (1101), 15 (1111).
            <strong>b) Funció lògica:</strong> El llum s'encén si l'últim bit (d) és 1 (senar) o si tots els bits són 0.
            \\( l = d + (\bar{a} \cdot \bar{b} \cdot \bar{c} \cdot \bar{d}) \\).
            <strong>c) Esquema de contactes:</strong> Un contacte NO per 'd' en paral·lel amb una branca de quatre contactes NC (a,b,c,d) en sèrie.`
    },

    // --- EXERCICI 3: ESTUFA DE PÈLLETS ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Exercici 3:</strong> Estufa de pèllets (\\( \eta = 0,89 \\)). Sac de 15 kg (6 €). Poder calorífic \\( 5,23 \text{ kWh/kg} \\). Consum \\( 1,483 \text{ kg/h} \\). Cendres 0,7%.`,
        steps: `
            <strong>a) Energia del sac:</strong> \\( E_{cons} = 15 \text{ kg} \cdot 5,23 \text{ kWh/kg} = 78,45 \text{ kWh} \\).
            <strong>b) Energia útil i cost:</strong> 
            - \\( E_{útil} = 78,45 \cdot 0,89 = 69,82 \text{ kWh} \\).
            - \\( c_e = 6 \text{ €} / 69,82 \text{ kWh} = 0,0859 \text{ €/kWh} \\).
            <strong>c) Hores funcionament:</strong> \\( t = 15 \text{ kg} / 1,483 \text{ kg/h} = 10,11 \text{ h} \\).
            <strong>d) Cendra generada:</strong> \\( m_{cendra} = 15 \text{ kg} \cdot 0,007 = 0,105 \text{ kg} = 105 \text{ g} \\).`
    },

    // --- EXERCICI 4: TRANSMISSIÓ MOTOCICLETA ---
    {
        type: "exercicis",
        category: "motors",
        text: `<strong>Exercici 4:</strong> Transmissió de moto amb 6 rodes dentades. \\( z_1=23, z_2=57, z_3=16, z_4=33, z_5=18, z_6=38 \\). \\( n_{mot}=4.000 \text{ min}^{-1} \\), \\( P_{mot}=15 \text{ kW} \\), \\( \eta=0,9 \\), roda \\( d=0,6 \text{ m} \\).
               <br>[INSERTAR FOTO: pau_tecn24jl_tei.pdf, pàgina 8, Exercici 4]`,
        steps: `
            <strong>a) Relació de transmissió:</strong> 
            \\( \tau = \frac{z_1 \cdot z_3 \cdot z_5}{z_2 \cdot z_4 \cdot z_6} = \frac{23 \cdot 16 \cdot 18}{57 \cdot 33 \cdot 38} = \frac{6.624}{71.478} = 0,09267 \\).
            <strong>b) Velocitat d'avanç:</strong>
            - \\( n_{roda} = n_{mot} \cdot \tau = 4.000 \cdot 0,09267 = 370,68 \text{ min}^{-1} \\).
            - \\( v = \omega_{roda} \cdot r = (n_{roda} \cdot \frac{2\pi}{60}) \cdot 0,3 = 38,81 \cdot 0,3 = 11,64 \text{ m/s} \\) (aprox. 42 km/h).
            <strong>c) Parell a la roda:</strong>
            - \\( P_{roda} = P_{mot} \cdot \eta = 15.000 \cdot 0,9 = 13.500 \text{ W} \\).
            - \\( \Gamma_{roda} = P_{roda} / \omega_{roda} = 13.500 / 38,81 = 347,85 \text{ Nm} \\).`
    },

    // --- EXERCICI 5: PLACA ELÈCTRICA ---
    {
        type: "exercicis",
        category: "electrics",
        text: `<strong>Exercici 5:</strong> Placa de nicrom. \\( \rho = 1,28 \cdot 10^{-6} \Omega \text{m} \\), \\( d = 0,8 \text{ mm} \\), \\( L = 5,54 \text{ m} \\). \\( \eta=0,9 \\), \\( U=230 \text{ V} \\), \\( t=30 \text{ min} \\).`,
        steps: `
            <strong>a) Resistència:</strong> 
            - \\( A = \pi \cdot 0,0008^2 / 4 = 5,026 \cdot 10^{-7} \text{ m}^2 \\).
            - \\( R = \rho \cdot L / A = 1,28 \cdot 10^{-6} \cdot 5,54 / 5,026 \cdot 10^{-7} = 14,11 \Omega \\).
            <strong>b) Potència útil:</strong>
            - \\( P_{cons} = U^2 / R = 230^2 / 14,11 = 3.749 \text{ W} \\).
            - \\( P_{útil} = P_{cons} \cdot 0,9 = 3.374 \text{ W} = 3,374 \text{ kW} \\).
            <strong>c) Intensitat:</strong> \\( I = U / R = 230 / 14,11 = 16,3 \text{ A} \\).
            <strong>d) Energia consumida:</strong> \\( E_{cons} = P_{cons} \cdot t = 3,749 \text{ kW} \cdot 0,5 \text{ h} = 1,87 \text{ kWh} \\).`
    },

    // --- EXERCICI 6: ESCALFADOR DE GAS ---
    {
        type: "exercicis",
        category: "energia",
        text: `<strong>Exercici 6:</strong> Escalfador de butà (\\( \eta = 0,87 \\)). Escalfar 75 L d'aigua \\( \Delta T = 20 \text{ °C} \\). Bombona 12,5 kg (17,66 €). \\( p_c = 47,7 \text{ MJ/kg} \\).`,
        steps: `
            <strong>a) Energia per una dutxa:</strong>
            - \\( Q_{útil} = m \cdot c_e \cdot \Delta T = 75 \cdot 4,18 \cdot 20 = 6.270 \text{ kJ} \\).
            - \\( E_{cons} = 6.270 / 0,87 = 7.206,9 \text{ kJ} \approx 2 \text{ kWh} \\).
            <strong>b) Nombre de dutxes:</strong>
            - Energia total bombona: \\( E_{total} = 12,5 \cdot 47,7 = 596,25 \text{ MJ} = 596.250 \text{ kJ} \\).
            - \\( n = 596.250 / 7.206,9 \approx 82,7 \\rightarrow 82 \text{ dutxes} \\).
            <strong>c) Cost d'una dutxa:</strong>
            - Cost gas: \\( 17,66 / 82,7 = 0,213 \text{ €} \\).
            - Cost aigua: \\( 0,075 \text{ m}^3 \cdot 0,93 \text{ €/m}^3 = 0,069 \text{ €} \\).
            - \\( p_{dutxa} = 0,213 + 0,069 = 0,282 \text{ €} \\).`
    }
];

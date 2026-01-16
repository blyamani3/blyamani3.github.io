const questions = [
    
    {
        type: "questions",
        category: "motors",
        text: `Un motor de benzina de quatre temps consumeix 10,2 L/h quan gira a 4 000 min–1. El
poder calorífic de la benzina és 42 000 kJ/kg i la seva densitat, 0,8 kg/L. Quina és la massa de
combustible consumida en un cicle del motor?`,
        options: [
            { text: "30 mg", value: "a" },
            { text: "34 mg", value: "b" },
            { text: "68 mg", value: "c" },
            { text: "136 mg", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[ \\text{Consum de benzina} = 10,2\\,\\text{L/h} \\]
            \\[ \\text{Densitat de la benzina} = 0,8\\,\\text{kg/L} \\]
            \\[ \\text{Massa consumida en una hora} = 10,2 \\times 0,8 = 8,16\\,\\text{kg/h} \\]
            \\[ \\text{Règim del motor} = 4000\\,\\text{min}^{-1} \\]
            \\[ \\text{Motor de quatre temps} \\Rightarrow 1\\,\\text{cicle cada 2 voltes} \\]
            \\[ \\text{Nombre de cicles per minut} = \\frac{4000}{2} = 2000\\,\\text{cicles/min} \\]
            \\[ \\text{Nombre de cicles per hora} = 2000 \\times 60 = 120000\\,\\text{cicles/h} \\]
            \\[ \\text{Massa de combustible per cicle} = \\frac{8,16}{120000} = 6,8 \\times 10^{-5}\\,\\text{kg} \\]
            \\[ 6,8 \\times 10^{-5}\\,\\text{kg} = 68\\,\\text{mg} \\]
        `
    },
    {
        type: "questions",
        category: "materials",
        text:   `La figura mostra les corbes tensió-deformació obtingudes en
assajos de tracció utilitzant dos acers diferents. A partir de l’observació d’aquesta figura, es pot afirmar que
<br>
<img src="https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie1q2.png?raw=true">
`,
        
        options: [
            { text: "el mòdul d’elasticitat dels dos acers no es pot determinar en aquest assaig.", value: "a" },
            { text: "el mòdul d’elasticitat dels dos acers és el mateix.", value: "b" },
            { text: "el mòdul d’elasticitat de l’acer 1 és més gran que el de l’acer 2.", value: "c" },
            { text: "el mòdul d’elasticitat de l’acer 2 és més gran que el de l’acer 1.", value: "d" }
        ],
        correctAnswer: "b",
        
        steps: `
            
            \\[ \\text{El mòdul d’elasticitat } E \\text{ és el pendent del tram elàstic} \\]
            \\[ E = \\frac{\\Delta \\sigma}{\\Delta \\varepsilon} \\]
            \\[ \\text{Observant la figura, els dos trams elàstics tenen el mateix pendent} \\]
            \\[ E_1 = E_2 \\]
            \\[ \\text{Per tant, el mòdul d’elasticitat dels dos acers és el mateix} \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Una resistència elèctrica proporciona 3 000 J a 50 ml d’aigua que es troben a 5 °C. Sabent
que la calor específica de l’aigua és ce = 4,18 kJ/(kg K), la temperatura final de l’aigua serà`,
        options: [
            { text: "1,435 °C.", value: "a" },
            { text: "6,435 °C.", value: "b" },
            { text: "14,35 °C.", value: "c" },
            { text: "19,35 °C.", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[ Q = 3000\\,\\text{J} \\]
            \\[ m = 50\\,\\text{ml} = 0,05\\,\\text{kg} \\]
            \\[ c = 4,18\\,\\text{kJ/(kg·K)} = 4180\\,\\text{J/(kg·K)} \\]
            \\[ Q = mc\\Delta T \\]
            \\[ 3000 = 0,05 \\times 4180 \\times \\Delta T \\]
            \\[ \\Delta T = 14,35\\,°C \\]
            \\[ T_f = 5 + 14,35 = 19,35\\,°C \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Un habitatge disposa de vuit plaques solars. L’àrea total de les plaques és de 4,4 m2, i les
seves condicions de localització fan que es disposi, el mes de setembre, d’una irradiació diària
mitjana de 13 kW h/m2. Si les plaques tenen un rendiment del 0,3, l’energia produïda durant
el mes de setembre serà de`,
        options: [
            { text: "514,8 kW h.", value: "a" },
            { text: "1 853 J.", value: "b" },
            { text: "58,52 J.", value: "c" },
            { text: "52,19 kW h.", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[ A = 4,4\\,\\text{m}^2 \\]
            \\[ G = 13\\,\\text{kWh/m}^2\\,\\text{dia} \\]
            \\[ \\eta = 0,3 \\]
            \\[ \\text{Nombre de dies del setembre} = 30 \\]
            \\[ E = A \\times G \\times \\eta \\times 30 \\]
            \\[ E = 4,4 \\times 13 \\times 0,3 \\times 30 \\]
            \\[ E = 514,8\\,\\text{kWh} \\]
        `
    },
    {
        type: "questions",
        category: "motors",
        text: `El motor d’una motocicleta de quatre temps té una cursa de 50,6 mm i un diàmetre de
cilindre de 56 mm. Si la relació de compressió és 7,3, quin és el volum de la cambra de combustió?`,
        options: [
            { text: "124,6 cm3", value: "a" },
            { text: "112,6 cm3", value: "b" },
            { text: "39,56 cm3", value: "c" },
            { text: "19,78 cm3", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[ d = 56\\,\\text{mm} = 0,056\\,\\text{m} \\]
            \\[ h = 50,6\\,\\text{mm} = 0,0506\\,\\text{m} \\]
            \\[ V_d = \\pi \\frac{d^2}{4} h \\]
            \\[ V_d = \\pi \\frac{0,056^2}{4} \\times 0,0506 = 0,0001246\\,\\text{m}^3 \\]
            \\[ r = \\frac{V_d + V_c}{V_c} \\]
            \\[ V_c = \\frac{V_d}{r - 1} \\]
            \\[ V_c = \\frac{0,0001246}{6,3} = 1,978 \\times 10^{-5}\\,\\text{m}^3 \\]
            \\[ V_c = 19,78\\,\\text{cm}^3 \\]
        `
    },
    

    {
        type: "questions",
        category: "energia",
        text: `Una pantalla de projecció té una massa m = 3 kg a la part inferior per a mantenir-la sempre tibada. 
        Un motor reductor és l’encarregat d’enrotllar la pantalla, de longitud h = 1,5 m, en el corró de diàmetre d = 250 mm, 
        que es troba articulat amb el sostre, en un temps t = 3 s. Quina és l’energia mecànica necessària per a enrotllar tota la pantalla?
        <br>
         <img src="https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3q1.png?raw=true">
         `,
        options: [
            { text: "44,13 J", value: "a" },
            { text: "73,55 J", value: "b" },
            { text: "22,07 J", value: "c" },
            { text: "14,71 J", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            
            \\[ m = 3\\,\\text{kg} \\]
            \\[ h = 1,5\\,\\text{m} \\]
            \\[ \\text{L'energia és el treball necessari per elevar el centre de masses} \\]
            \\[ E_p = m \\cdot g \\cdot h \\]
            \\[ E_p = 3 \\times 9,81 \\times 1,5 = 44,145\\,\\text{J} \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Un inventor ha construït una màquina tèrmica que funciona entre dues fonts tèrmiques,
una de 270 °C i una altra de 610 °C. Quina de les afirmacions següents és certa?`,
        options: [
            { text: "El rendiment sempre estarà per sobre del 40 %.", value: "a" },
            { text: "El rendiment no podrà superar mai el 38,5 %.", value: "b" },
            { text: "El focus fred ha d'estar per sota de 0 °C.", value: "c" },
            { text: "El focus calent ha d'estar per sobre de 700 °C.", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            
            \\[ T_1 = 270 + 273,15 = 543,15\\,\\text{K} \\]
            \\[ T_2 = 610 + 273,15 = 883,15\\,\\text{K} \\]
            \\[ \\eta_{\\text{max}} = 1 - \\frac{T_1}{T_2} \\]
            \\[ \\eta_{\\text{max}} = 1 - \\frac{543,15}{883,15} = 0,3849 \\]
            \\[ \\eta_{\\text{max}} \\approx 38,5\\,\\% \\]
        `
    },
    {
        type: "questions",
        category: "materials",
        text: `La figura mostra les corbes tensió-deformació obtingudes en assajos de tracció utilitzant una proveta d’acer d’alta resistència
         i una proveta d’un aliatge de bronze. A partir de l’observació d’aquesta figura, es pot afirmar que
<br>
 <img src="https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3q3.png?raw=true">
 `,
        options: [
            { text: "l’acer és més fràgil que el bronze.", value: "a" },
            { text: "el bronze té un límit elàstic més gran.", value: "b" },
            { text: "l’acer és més dúctil que el bronze.", value: "c" },
            { text: "es deformen el mateix abans de trencar.", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            
            \\[ \\text{Fragilitat } = \\text{ baixa deformació plàstica abans del trencament} \\]
            \\[ \\text{Ductilitat } = \\text{ alta deformació plàstica abans del trencament} \\]
            \\[ \\text{L'acer d'alta resistència té un trencament brusc amb poca deformació} \\]
            \\[ \\text{L'acer és més fràgil que el bronze} \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `El conductor d’un cotxe híbrid pot decidir si utilitza com a combustible gasolina o gas
liquat del petroli (GLP). Quan utilitza gasolina, el consum és de 6,1 litres per cada 100 km i
emet 2,23 kg de CO2 per cada litre consumit. En canvi, quan utilitza GLP, el consum és de
7 litres per cada 100 km i emet 1,647 kg de CO2 per cada litre consumit. Segons el tipus de combustible utilitzat,
 quina és la diferència en la petjada de carboni quan el cotxe recorre 50 km?`,
        options: [
            { text: "6,802 kg de CO2", value: "a" },
            { text: "5,765 kg de CO2", value: "b" },
            { text: "1,037 kg de CO2", value: "c" },
            { text: "2,074 kg de CO2", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[ \\text{CO2}_{\\text{Gas}} = \\frac{6,1}{2} \\times 2,23 = 6,8015\\,\\text{kg} \\]
            \\[ \\text{CO2}_{\\text{GLP}} = \\frac{7}{2} \\times 1,647 = 5,7645\\,\\text{kg} \\]
            \\[ \\text{Diferència} = 6,8015 - 5,7645 = 1,037\\,\\text{kg} \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Una estufa elèctrica es comporta com una resistència R = 25 Ω. Se sap que quan està connectada a una font de tensió alterna sinusoidal 
        dissipa una potència activa P = 100 W. Quin és, aproximadament, el valor màxim de la tensió d’alimentació?`,
        options: [
            { text: "4 V", value: "a" },
            { text: "50 V", value: "b" },
            { text: "71 V", value: "c" },
            { text: "100 V", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[ P = \\frac{U_{\\text{ef}}^2}{R} \\Rightarrow U_{\\text{ef}} = \\sqrt{P \\cdot R} \\]
            \\[ U_{\\text{ef}} = \\sqrt{100 \\times 25} = 50\\,\\text{V} \\]
            \\[ U_{\\text{max}} = U_{\\text{ef}} \\cdot \\sqrt{2} \\]
            \\[ U_{\\text{max}} = 50 \\times 1,414 = 70,71\\,\\text{V} \\approx 71\\,\\text{V} \\]
        `
    },
    
    
    {
        type: "questions",
        category: "energia",
        text: `La intensitat del circuit elèctric d’una estufa de quars és de 8 A. 
        L’estufa està connectada a la xarxa elèctrica a U = 230 V durant 4 h i té un rendiment del 98 %. 
        L’energia elèctrica consumida és`,
        options: [
            { text: "25,97 MJ.", value: "a" },
            { text: "26,50 MJ.", value: "b" },
            { text: "27,04 MJ.", value: "c" },
            { text: "43,28 MJ.", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[ P = U \\cdot I = 230 \\times 8 = 1840\\,\\text{W} \\]
            \\[ t = 4 \\times 3600 = 14400\\,\\text{s} \\]
            \\[ E_{\\text{cons}} = P \\cdot t = 1840 \\times 14400 = 26.496.000\\,\\text{J} \\]
            \\[ 26.496.000\\,\\text{J} \\approx 26,50\\,\\text{MJ} \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `El cabal d’aigua calenta d’una dutxa és de 12 L/min i la temperatura de sortida de l’aigua
és de 38 °C. Inicialment l’aigua es troba a 15 °C (ce = 4,18 J/(g °C)). En una dutxa de 5 minuts
de durada, l’energia utilitzada per a escalfar l’aigua és`,
        options: [
            { text: "1,602 kWh.", value: "a" },
            { text: "5,768 kWh.", value: "b" },
            { text: "1,602 kJ.", value: "c" },
            { text: "5 768 J.", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[ m = 12 \\times 5 = 60\\,\\text{kg} \\]
            \\[ Q = m \\cdot c_e \\cdot \\Delta T \\]
            \\[ Q = 60 \\times 4,18 \\times (38 - 15) = 5768,4\\,\\text{kJ} \\]
            \\[ E = \\frac{5768,4}{3600} = 1,602\\,\\text{kWh} \\]
        `
    },
    {
        type: "questions",
        category: "energia",
        text: `Es disposa de dues resistències de valor R. En un primer experiment, es connecten en
sèrie i s’alimenten a una tensió U, i, com a conseqüència, la potència total dissipada per les
resistències és P. En un segon experiment, les dues resistències es connecten en paraŀlel i
s’alimenten a la mateixa tensió U. Quina serà, en aquest cas, la potència total dissipada per
les resistències?`,
        options: [
            { text: "P", value: "a" },
            { text: "2P", value: "b" },
            { text: "3P", value: "c" },
            { text: "4P", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[ P_{\\text{sèrie}} = \\frac{U^2}{2R} = P \\]
            \\[ R_{\\text{par}} = \\frac{R}{2} \\]
            \\[ P_{\\text{par}} = \\frac{U^2}{R/2} = 2\\frac{U^2}{R} \\]
            \\[ P_{\\text{par}} = 4 \\times \\left(\\frac{U^2}{2R}\\right) = 4P \\]
        `
    },
    {
        type: "questions",
        category: "maquines",
        text: `Un bloc de massa m = 2 kg està unit mitjançant un cable al centre d’una 
        politja de radi R1 = 300 mm. Una corda ideal s’uneix al centre de la politja
        de la qual penja el bloc, passa per una altra politja de radi R2 = 150 mm
        articulada al sostre i, finalment, passa per la politja de radi R1. Quina força
        F cal fer per a mantenir el bloc en repòs?
        <br>
        <img src="https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie5q4.png?raw=true">`,
            options: [
                { text: "6,538 N", value: "a" },
                { text: "58,84 N", value: "b" },
                { text: "19,61 N", value: "c" },
                { text: "9,807 N", value: "d" }
            ],
            correctAnswer: "a",
            steps: `
        \\[
        P = m \\cdot g = 2 \\cdot 9,807 = 19,614\\,\\text{N}
        \\]
        
        \\[
        \\text{El sistema de politges proporciona un avantatge mecànic de 3, ja que el pes}
        \\]
        \\[
        \\text{queda sostingut per tres trams de corda}
        \\]
        
        \\[
        F = \\frac{P}{3} = \\frac{19,614}{3} = 6,538\\,\\text{N}
        \\]
        
        \\[
        \\boxed{F = 6,538\\,\\text{N}}
        \\]
        `
        },
    {
        type: "questions",
        category: "materials",
        text: `El rail d’una via de tren està fet d’acer d’un coeficient de dilatació αac = 10,8 × 10–6 °C–1 i té
una longitud de 25 m a T = 20 °C. En les condicions de treball, la temperatura ambient osciŀla
entre –10 °C i 45 °C. La variació de longitud que experimenta el rail és de`,
        options: [
            { text: "6,750 mm.", value: "a" },
            { text: "8,100 mm.", value: "b" },
            { text: "9,450 mm.", value: "c" },
            { text: "14,85 mm.", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[ \\Delta T = 45 - (-10) = 55\\,^\\circ\\text{C} \\]
            \\[ \\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T \\]
            \\[ \\Delta L = 25 \\times 10,8 \\times 10^{-6} \\times 55 \\]
            \\[ \\Delta L = 0,01485\\,\\text{m} = 14,85\\,\\text{mm} \\]
        `
    },
        {
            type: "exercicis",
            category: "control",
            text: `L’accés a un edifici d’oficines està regulat per tres sistemes de control: una clau numèrica, 
        una targeta magnètica i l’empremta dactilar. Es permet l’accés a l’edifici, en horari laboral,
        validant qualsevol dels tres sistemes de control. Fora de l’horari laboral, cal validar almenys
        dos dels tres sistemes.
        
        Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
        <br>
        horari: h = {1: laboral ; 0: no laboral}
        clau: c = {1: vàlida ; 0: no vàlida}
        targeta: t = {1: vàlida ; 0: no vàlida}
        empremta: e = {1: vàlida ; 0: no vàlida}
        accés: a = {1: permès ; 0: denegat}
        <br>
        a) Elaboreu la taula de veritat del sistema.
        <br>
        b) Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.
        <br>
        c) Dibuixeu el diagrama de portes lògiques equivalent.`,
            solutionButton: "Mostra la solució",
            steps: `
            \\[
            \\textbf{a) Taula de veritat}
            \\]
            <br>
            <img src="https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie1e2s.png?raw=true>"
            <br>
        
                \\[
                \\text{En horari laboral } (h=1): a = c + t + e
                \\]
        
                \\[
                \\text{Fora d’horari } (h=0): a = ct + ce + te
                \\]
        
                \\[
                \\textbf{b) Funció lògica}
                \\]
        
                \\[
                a = h(c+t+e) + \\bar{h}(ct + ce + te)
                \\]
        
                \\[
                \\text{Aquesta expressió ja és mínima}
                \\]
        
            \\[
            \\textbf{c) Diagrama de portes}
            \\] 
            <br>
            <img src="https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie1e2c.png?raw=true>"
            `
        },
       
        {
            type: "exercicis",
            category: "energia",
            text: `Una persona té un patinet elèctric que utilitza una bateria ideal de tensió U = 24 V i
        energia Ebat = 250 W h per a alimentar un motor de rendiment ηmot = 0,85. La roda motriu del
        patinet, de diàmetre droda = 140 mm, està connectada directament a l’eix de sortida del motor.
        En les condicions d’estudi, la persona i el patinet tenen una massa conjunta m = 70 kg
        i recorren s = 2 km a velocitat constant v = 8 km/h per una pujada en què l’angle que forma
        el perfil del carrer amb l’horitzontal és α = 7°. A l’inici del trajecte, la bateria està totalment
        carregada. Si totes les pèrdues diferents a les associades al rendiment del motor es poden
        negligir, determineu:
        <br>
        a) La potència elèctrica consumida, Pelèc.
        <br>
        b) La velocitat de rotació de l’eix del motor, ωmot, i el parell que subministra el motor, Γ.
        <br>
        c) El percentatge d’energia consumida de la bateria, Δ`,
            solutionButton: "Mostra la solució",
            steps: `
                \\[
                \\textbf{a) Potència elèctrica}
                \\]
        
                \\[
                F = mg \\sin \\alpha = 70 \\cdot 9,81 \\cdot \\sin 7°
                \\]
        
                \\[
                F = 83,7\\,N
                \\]
        
                \\[
                P_{mec} = Fv = 83,7 \\cdot \\frac{8}{3,6} = 186\\,W
                \\]
        
                \\[
                P_{elèc} = \\frac{P_{mec}}{\\eta} = \\frac{186}{0,85} = 219\\,W
                \\]
        
                \\[
                \\textbf{b) Velocitat angular i parell}
                \\]
        
                \\[
                r = 0,07\\,m
                \\]
        
                \\[
                \\omega = \\frac{v}{r} = \\frac{2,22}{0,07} = 31,7\\,rad/s
                \\]
        
                \\[
                \\Gamma = Fr = 83,7 \\cdot 0,07 = 5,86\\,N·m
                \\]
        
                \\[
                \\textbf{c) Energia consumida}
                \\]
        
                \\[
                t = \\frac{2000}{2,22} = 900\\,s = 0,25\\,h
                \\]
        
                \\[
                E = P_{elèc} \\cdot t = 219 \\cdot 0,25 = 54,8\\,Wh
                \\]
        
                \\[
                \\Delta = \\frac{54,8}{250} \\cdot 100 = 21,9\\%
                \\]
            `
        },
        

        {
            type: "exercicis",
            category: "energia",
            text: `Un cotxe de massa m = 1 250 kg parteix del repòs i arriba a una velocitat final v = 50 km/h
        circulant per un circuit horitzontal. El cotxe és propulsat per un motor de combustió interna
        de rendiment η = 0,25. La benzina té un poder calorífic pc = 46 MJ/kg i una densitat ρ = 0,72 g/cm3.
        El factor d’emissions de la benzina és FE = 2,157 kg de CO2 per litre de combustible.
        Si es poden negligir totes les resistències passives, determineu:
        <br>
        a) El treball mecànic aportat pel motor, W.
        <br>
        b) La quantitat de benzina utilitzada, mbenz.
        <br>
        c) La petjada de CO2 emesa a l’atmosfera, mCO2.`,
            solutionButton: "Mostra la solució",
            steps: `
                \\[
                \\textbf{a) Treball mecànic}
                \\]
        
                \\[
                v = \\frac{50}{3,6} = 13,9\\,m/s
                \\]
        
                \\[
                W = \\frac{1}{2}mv^2 = 0,5 \\cdot 1250 \\cdot 13,9^2
                \\]
        
                \\[
                W = 120,7\\,kJ
                \\]
        
                \\[
                \\textbf{b) Massa de benzina}
                \\]
        
                \\[
                E_{comb} = \\frac{W}{\\eta} = 482,8\\,kJ
                \\]
        
                \\[
                m = \\frac{E}{pc} = \\frac{0,4828}{46} = 0,0105\\,kg
                \\]
        
                \\[
                V = \\frac{m}{\\rho} = 0,0146\\,L
                \\]
        
                \\[
                \\textbf{c) Emissions de CO₂}
                \\]
        
                \\[
                m_{CO2} = 0,0146 \\cdot 2,157 = 0,0315\\,kg
                \\]
            `
        },
        {
            type: "exercicis",
            category: "maquines",
            text: `Es vol estudiar la força necessària que ha de fer el múscul tibial anterior per tal de garantir 
        que la planta del peu es trobi en posició horitzontal quan es manté elevat sense tocar a terra.
        La figura mostra un esquema del peu en aquesta posició.
        El centre de l’articulació del turmell és el punt O, que es considera fix. El peu, representat
        amb el triangle OPT, té el centre d’inèrcia al punt G i una massa m = 2,2 kg. El múscul tibial
        anterior s’insereix al punt Q i fa una força Fm. El seu braç de moment respecte a O és
        a = 30 mm i la seva línia d’acció forma un angle φ = 9° respecte a la vertical.
        Per a aquesta posició estàtica:
        <br>
         <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie1e5.png?raw=true>
        <br>
        a) Dibuixeu el diagrama de cos lliure del peu.
        <br>
        b) Determineu la força que fa el múscul, Fm.
        <br>
        c) Determineu les forces a l’articulació O.`,
solutionButton: "Mostra la solució",
steps: `
    \\[
    \\textbf{a) Diagrama de cos lliure}
    <br>
    <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie1e5a.png?raw=true>
    \\]

    \\[
    \\text{Forces: pes mg aplicat a G, força muscular Fm a Q,
    reaccions Ox i Oy al punt O}
    \\]

    \\[
    \\textbf{b) Equilibri de moments}
    \\]

    \\[
    mg \\cdot d = F_m \\cdot a
    \\]

    \\[
    2,2 \\cdot 9,81 \\cdot 0,11 = F_m \\cdot 0,03
    \\]

    \\[
    F_m = 25,17\\,\\text{N}
    \\]

    \\[
    \\textbf{c) Equilibri de forces}
    \\]

    \\[
    \\sum F_x = 0 \\quad \\Rightarrow \\quad H - F_m \\sin\\phi = 0 \\quad \\Rightarrow \\quad H = F_m \\sin\\phi
    \\]

    \\[
    \\sum F_y = 0 \\quad \\Rightarrow \\quad V + F_m \\cos\\phi - mg = 0 \\quad \\Rightarrow \\quad V = mg - F_m \\cos\\phi
    \\]

    \\[
    H = 25,17 \\cdot \\sin 9^\\circ \\approx 3,938\\,\\text{N}
    \\]

    \\[
    V = 2,2 \\cdot 9,81 - 25,17 \\cdot \\cos 9^\\circ \\approx 3,286\\,\\text{N}
    \\]

    \\[
    \\text{El signe negatiu indica que la força té sentit oposat al dibuixat al diagrama de cos lliure.}
    \\]
`
        },
        
         {
            type: "exercicis",
            category: "electricitat",
            text: `El circuit de la figura mostra una font de tensió alterna sinusoidal de freqüència f = 50 Hz 
        que alimenta una càrrega formada per una resistència R1 = 5 Ω en sèrie amb una inductància
        L1 = 7 mH. El wattímetre està connectat de manera que mesura la potència activa total consumida per la càrrega W1 = 950 W. Determineu:
        <br>
        <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie1e6.png?raw=true>
        <br>
        a) El valor òhmic de la reactància inductiva, XL1, que presenta la inductància L1.
        <br>
        b) El factor de potència, cos φ, de la càrrega.
        <br>
        c) El valor de la impedància equivalent de tot el circuit, Z.
        <br>
        d) El valor de la mesura de l’amperímetre, A1.
        <br>
        e) El valor eficaç de la tensió d’alimentació, U1.`,
            solutionButton: "Mostra la solució",
            steps: `
                \\[
                \\textbf{Dades}
                \\]
        
                \\[
                f = 50\\,Hz \\quad R = 5\\,\\Omega \\quad L = 7\\,mH = 7 \\cdot 10^{-3}\\,H
                \\]
        
                \\[
                W = 950\\,W
                \\]
        
                \\[
                \\textbf{a) Reactància inductiva}
                \\]
        
                \\[
                X_L = 2\\pi f L
                \\]
        
                \\[
                X_L = 2\\pi \\cdot 50 \\cdot 7 \\cdot 10^{-3}
                \\]
        
                \\[
                X_L = 2,20\\,\\Omega
                \\]
        
                \\[
                \\textbf{b) Factor de potència}
                \\]
        
                \\[
                Z = \\sqrt{R^2 + X_L^2} = \\sqrt{5^2 + 2,20^2}
                \\]
        
                \\[
                Z = 5,46\\,\\Omega
                \\]
        
                \\[
                \\cos\\varphi = \\frac{R}{Z} = \\frac{5}{5,46} = 0,915
                \\]
        
                \\[
                \\textbf{c) Impedància equivalent}
                \\]
        
                \\[
                Z = 5,46\\,\\Omega
                \\]
        
                \\[
                \\textbf{d) Intensitat del circuit}
                \\]
        
                \\[
                W = I^2 R
                \\]
        
                \\[
                I = \\sqrt{\\frac{W}{R}} = \\sqrt{\\frac{950}{5}}
                \\]
        
                \\[
                I = 13,78\\,A
                \\]
        
                \\[
                \\textbf{e) Tensió eficaç d’alimentació}
                \\]
        
                \\[
                U = I \\cdot Z = 13,78 \\cdot 5,46
                \\]
        
                \\[
                U = 75,3\\,V
                \\]
            `
        },

            {
              type: "exercicis",
              category: "control",
              text: `La figura de sota mostra un marcador electrònic de dues xifres en 
            què cada xifra està composta per set segments, que s’iŀluminen per a formar els números del 0 al 9.
            Per a una aplicació concreta, es necessita que el marcador pugui mostrar números del 00 al 15.
            Per fer-ho, el sistema rep el número que s’ha de mostrar codificat en numeració binària
            (quatre entrades d’un bit).
            <br>
            <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3q2.png?raw=true>
            <br>
            Dissenyeu el control de l’encesa del segment del mig de la segona xifra
            (marcat en negre a la figura) utilitzant les variables d’estat següents:
            
            primer dígit binari (el de més a l’esquerra): a  
            segon dígit binari: b  
            tercer dígit binari: c  
            quart dígit binari: d  
            segment: s = {1: encès, 0: apagat}
            Nota: Les xifres del marcador s’escriuen com es mostra a continuació:
            <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3q2-2.png?raw=true>
            <br>
            a) Elaboreu la taula de veritat del sistema.  
            <br>
            b) Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. 
            <br> 
            c) Dibuixeu el diagrama de portes lògiques equivalent.`,
              solutionButton: "Mostra la solució",
              steps: `
            \\[
            \\textbf{a) Taula de veritat}
            \\]
            
            \\[
            <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3e2s.png?raw=true>
            \\]
            
            \\[
            \\textbf{b) Funció lògica}
            \\]
            
            Funció canònica:
            \\[
            s = \\Sigma m(2,3,4,5,6,8,9,12,13,14,15)
            \\]
            
            Funció simplificada:
            \\[
            \\boxed{s = abc + bc + ac + ab + bd}
            \\]
            
            \\[
            \\textbf{c) Diagrama de portes}
            \\]
            
              <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3e2c.png?raw=true>
            `
            },
          
            {
              type: "exercicis",
              category: "maquines",
              text: `Una cistella de bàsquet és solidària a una barra homogènia OC de longitud 4l.
            La massa total del conjunt és m = 100 kg i el seu centre d’inèrcia es troba al punt G.
            La barra està articulada al sostre en el punt O.
            Per a plegar i desplegar la cistella s’utilitza un mecanisme de tambor.
            El rendiment del motor és η = 0,8.
            
            S’estudia la maniobra de plegat quan l’angle passa de φ₁ = 45° a φ₂ = 15°.
            La velocitat angular és constant i val ω = 0,1745 rad/s.
            <br>
            <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3e3.png?raw=true>
            <br>
            Determineu:
            <br>
            a) L’energia mecànica necessària, Emec.  
            <br>
            b) L’energia consumida pel motor, Emot. 
            <br> 
            c) La velocitat vertical del centre d’inèrcia quan φ = 30°.  
            <br>
            d) La potència del motor en aquesta posició.`,
              solutionButton: "Mostra la solució",
              steps: `
            \\[
            \\textbf{a) Energia mecànica}
            \\]
            
            \\[
            \\Delta h = d(\\sin45° - \\sin15°) = 1,345\\,\\text{m}
            \\]
            
            \\[
            E_{mec} = mg\\Delta h = 100·9,81·1,345
            \\]
            
            \\[
            \\boxed{E_{mec} = 1319\\,\\text{J}}
            \\]
            
            \\[
            \\textbf{b) Energia consumida pel motor}
            \\]
            
            \\[
            E_{mot} = \\frac{E_{mec}}{\\eta}
            \\]
            
            \\[
            \\boxed{E_{mot} = 1649\\,\\text{J}}
            \\]
            
            \\[
            \\textbf{c) Velocitat vertical}
            \\]
            
            \\[
            v_{vert} = \\omega·l·\\cos30°
            \\]
            
            \\[
            \\boxed{v_{vert} = 0,4534\\,\\text{m/s}}
            \\]
            
            \\[
            \\textbf{d) Potència del motor}
            \\]
            
            \\[
            P_{mot} = \\frac{mgv_{vert}}{\\eta}
            \\]
            
            \\[
            \\boxed{P_{mot} = 555,8\\,\\text{W}}
            \\]
            `
            },
            {
              type: "exercicis",
              category: "electrics",
              text: `Les planxes elèctriques incorporen un element calefactor que s’escalfa (resistència) i un
interruptor en sèrie. Aquest interruptor, accionat per un sensor de temperatura, s’obre quan
la planxa arriba a la temperatura desitjada.
Es vol construir la resistència d’una planxa elèctrica amb fil de constantà de resistivitat
ρ = 4,9 × 10–7 Ω m. La planxa ha de subministrar una potència P = 2,2 kW quan es connecta a
la xarxa a una tensió U = 230 V
            <br>
            a) Determineu el valor de la resistència necessària.  
            <br>
            b) Per a aquestes bobines, dibuixeu, tot indicant de manera aproximada les escales, la
            funció que descriu el valor de la resistència de les cinc bobines, Rb, en funció del diàmetre del seu fil, d.
            <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3e4b.png?raw=true>
            <br> 
            c) Quina bobina cal escollir si es vol utilitzar el màxim de longitud del fil que conté?
            Quina quantitat de fil seria necessària?`,
              solutionButton: "Mostra la solució",
              steps: `
            \\[
            \\textbf{a) Resistència necessària}
            \\]
            \\[ R = \\frac{U^2}{P} = \\frac{230^2}{2200} = 24,045\\,\\Omega \\approx \\boxed{24,05\\,\\Omega} \\]
            
            \\[
            \\textbf{b) Gràfica de la resistència de la bobina } R_b \\text{ vs diàmetre } d
            <br>
             <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3e4bs.png?raw=true>
            \\]
            \\[
            \\textbf{c) Selecció de bobina i longitud}
            \\]
            \\[ \\text{S'ha de seleccionar la bobina B4 (diàmetre } d = 0,16\\,\\text{mm}), \\text{ ja que la seva resistència } R_b = 24,37\\,\\Omega \\]
            \\[ \\text{és la més propera per sobre del valor desitjat (24,05\\,\\Omega).} \\]
            
            \\[ \\text{Càlcul de la longitud } l \\text{ per a obtenir exactament 24,05 } \\Omega: \\]
            \\[ S = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot (0,16 \\cdot 10^{-3})^2}{4} = 2,0106 \\cdot 10^{-8}\\,m^2 \\]
            \\[ l = \\frac{R \\cdot S}{\\rho} = \\frac{24,05 \\cdot 2,0106 \\cdot 10^{-8}}{4,9 \\cdot 10^{-7}} = \\boxed{0,987\\,m} \\]
            `
            },
            {
              type: "exercicis",
              category: "maquines",
              text: `La figura mostra una persona amb els braços estirats sostenint dos pesos (un a l’extrem
de cada braç). També inclou l’esquema simplificat d’un dels braços per a fer-ne l’anàlisi
estàtica. El punt O representa l’articulació de l’espatlla i Fm és la força que fa el múscul deltoide. 
El múscul està inserit al punt Q i la seva línia d’acció forma un angle θ = 20° respecte a l’horitzontal. 
El sistema està en equilibri. La massa del braç és mb = 5 kg i el seu centre d’inèrcia es troba al punt G; el pes té una massa mp = 2 kg i el seu centre d’inèrcia és el punt P.
<br>
<img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3e5.png?raw=true>
<br>            
            a) Dibuixeu el diagrama de cos lliure del braç.  
            <br>
            b) Determineu la força que fa el múscul, Fm. 
            <br> 
            c) Determineu les forces a l’articulació O.`,
              solutionButton: "Mostra la solució",
              steps: `
               \\[
            \\textbf{a) Diagrama de cos lliure}
            \\]
            <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie3e5a.png?raw=true>
            \\[
            \\textbf{b) Equilibri de moments}
            \\]
            
            \\[
            \\sum M_O = 0
            \\]
            
            \\[
            Fm·a·\\sin20° = mb g b + mp g c
            \\]
            
            \\[
            \\boxed{Fm = 688,2\\,\\text{N}}
            \\]
            
            \\[
            \\textbf{c) Forces a l’articulació}
            \\]
            
            Horitzontal:
            \\[
            \\boxed{O_H = 646,7\\,\\text{N}}
            \\]
            
            Vertical:
            \\[
            \\boxed{O_V = 166,7\\,\\text{N}}
            \\]
            `
            },
            {
              type: "exercicis",
              category: "energia",
              text: `Diàriament, una caldera alimentada amb gas propà obté vapor d’aigua sec a una temperatura T2 = 125 °C a partir d’una massa d’aigua ma = 1 500 kg a T1 = 80 °C. En aquest procés,
consumeix mp = 90 kg de gas propà de poder calorífic pc = 12,83 kW h/kg, que té un factor
d’emissió FE = 2,94 kg de CO2 per cada kilogram de gas. La calor específica de l’aigua és
ce_a = 4,197 kJ/(kg °C) i la del vapor és ce_v = 2,155 kJ/(kg °C). La calor latent de vaporització
és Lv = 2 257 kJ/kg. Considereu que el canvi d’estat es produeix a Tc = 100 °C. Determineu:
            <br>
            a)  L’energia útil diària necessària per a obtenir el vapor sec, Edia.  
            <br>
            b)L’energia que consumeix diàriament la caldera, Econs, i el rendiment de la instaŀlació, η.
            <br>  
            c) L’emissió anual de gasos amb efecte hivernacle, mCO2
            `,
              solutionButton: "Mostra la solució",
              steps: `
            \\[
            \\textbf{a) Energia útil}
            \\]
            
            \\[
            E_1 = mc_a(100-80) = 125,9\\,\\text{MJ}
            \\]
            
            \\[
            E_2 = mL_v = 3386\\,\\text{MJ}
            \\]
            
            \\[
            E_3 = mc_v(125-100) = 80,81\\,\\text{MJ}
            \\]
            
            \\[
            \\boxed{E_{dia} = 3592\\,\\text{MJ}}
            \\]
            
            \\[
            \\textbf{b) Energia consumida i rendiment}
            \\]
            
            \\[
            E_{cons} = 90·12,83 = 1154,7\\,\\text{kWh} = 4157\\,\\text{MJ}
            \\]
            
            \\[
            \\boxed{\\eta = 86,42\\%}
            \\]
            
            \\[
            \\textbf{c) Emissions anuals}
            \\]
            
            \\[
            m_{CO2} = 90·2,94·365
            \\]
            
            \\[
            \\boxed{m_{CO2} = 96,58\\,\\text{tones/any}}
            \\]
            `
            },
        {
            type: "exercicis",
            category: "control",
            text: `Un sistema digital controla l’encesa d’un llum. El sistema rep com a entrades un número codificat en binari (quatre entrades d’un bit). El llum únicament ha d’estar encès si el nombre és 0 o un nombre senar. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents: primer dígit (el de més a l’esquerra): a; segon dígit: b; tercer dígit: c; quart dígit: d; llum: l (1: encès, 0: apagat).
            <br>
            a) Elaboreu la taula de veritat del sistema.
            <br>
            b) Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. 
            <br>
            c) Dibuixeu l’esquema de contactes equivalent
            `,
            solutionButton: "Mostra la solució",
            steps: `
                \\[
                \\textbf{a) Taula de veritat}
                \\]
                <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie5e2s.png?raw=true>
                \\[
                \\textbf{b) Funció lògica i simplificació}
                \\]
                \\text{La sortida és 1 si d=1 (senars) o si a,b,c,d són 0 simultàniament.}
                \\[ l = \\bar{a}\\bar{b}\\bar{c}\\bar{d} + d \\]
                \\text{Aplicant l'àlgebra de Boole (llei d'absorció inversa: } X + \\bar{X}Y = X + Y \\text{):}
                \\[ \\boxed{l = \\bar{a}\\bar{b}\\bar{c} + d} \\]

                \\[
                \\textbf{c) Esquema de contactes equivalent}
                \\]
                <img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie5e2c.png?raw=true>
            `
        },
        {
            type: "exercicis",
            category: "energia",
            text: `Una caseta aïllada de muntanya consta d’una sola habitació d’àrea A = 55 m2 que es vol
calefactar amb una estufa de pèŀlets. L’estufa, de rendiment η = 0,89, té un dipòsit per a 15 kg de pèŀlets i en consumeix qpèl = 1,483 kg/h.
S’utilitza un sac de pèŀlets de massa m = 15 kg, que té un preu p = 6 €. 
El fabricant de pèllets especifica que el poder calorífic del combustible és pc = 5,23 kW h/kg i que el residu en
cendres és rcendra = 0,7 % de la seva massa abans de la combustió.
Si es parteix del dipòsit de l’estufa ple i se’n consumeix tot el contingut, determineu:
<br>
a) L’energia que proporciona un sac de pèŀlets, Econs
<br>
b) L’energia que l’estufa cedirà a l’habitatge, Eútil, i el seu cost per kW h, ce
<br>
c) Les hores, t, que l’estufa pot estar en funcionament. 
`,
            solutionButton: "Mostra la solució detallada",
            steps: `
                \\[ \\textbf{a) L’energia que proporciona un sac de pèŀlets, } E_{\\text{cons}} \\]
                \\[ E_{\\text{cons}} = m \\cdot pc = 15\\,\\text{kg} \\cdot 5,23\\,\\text{kWh/kg} = \\boxed{78,45\\,\\text{kWh}} \\]
                \\[ E_{\\text{cons}} = 78,45\\,\\text{kWh} \\cdot 3,6 = \\boxed{282,4\\,\\text{MJ}} \\]

                \\[ \\textbf{b) L’energia que l’estufa cedirà a l’habitatge, } E_{\\text{útil}}, \\text{ i el seu cost per kW h, } c_e \\]
                \\[ E_{\\text{útil}} = E_{\\text{cons}} \\cdot \\eta = 78,45\\,\\text{kWh} \\cdot 0,89 = \\boxed{69,82\\,\\text{kWh}} \\]
                \\[ c_e = \\frac{\\text{preu sac}}{E_{\\text{útil}}} = \\frac{6\\,\\text{€}}{69,82\\,\\text{kWh}} = \\boxed{85,93 \\cdot 10^{-3}\\,\\text{€/kWh}} \\]

                \\[ \\textbf{c) Les hores, } t, \\text{ que l’estufa pot estar en funcionament} \\]
                \\[ t = \\frac{m}{q_{\\text{pèl}}} = \\frac{15\\,\\text{kg}}{1,483\\,\\text{kg/h}} = \\boxed{10,11\\,h} \\]

                \\[ \\textbf{d) La quantitat de cendra generada, } m_{\\text{cendra}} \\]
                \\[ m_{\\text{cendra}} = m \\cdot r_{\\text{cendra}} = 15\\,\\text{kg} \\cdot 0,007 = 0,105\\,\\text{kg} = \\boxed{105\\,g} \\]
            `
        },

        {
            type: "exercicis",
            category: "maquines",
            text: `La figura mostra l’esquema d’un prototip de cadena de transmissió d’una motocicleta de competició amb una marxa engranada.
             Disposa de 6 rodes dentades de z1 = 23, z2 = 57, z3 = 16, z4 = 33, z5 = 18 i z6 = 38 dents.
El motor té una cilindrada C = 250 cm3, el rendiment de la transmissió és η = 0,9 i el diàmetre de la roda motriu de la
moto és d = 0,6 m. S’estudia el comportament de la motocicleta quan el motor gira a nmot = 4 000 min–1 i proporciona una
potència Pmot = 15 kW. Determineu:
<br> 
<img src=https://github.com/blyamani3/blyamani3.github.io/blob/main/sele%20fotos/2024serie5e4.png?raw=true>
<br>
a) La relació de transmissió entre motor i roda, τ = ωroda/ωmot.
<br>
b) La velocitat d’avanç, v.
<br>
c) El parell a l’eix de la roda, Γ.
`,
            solutionButton: "Mostra la solució ",
            steps: `
                \\[ \\textbf{a) La relació de transmissió entre motor i roda, } \\tau = \\omega_{\\text{roda}}/\\omega_{\\text{mot}} \\]
                \\[ \\tau = \\frac{z_1 \\cdot z_3 \\cdot z_5}{z_2 \\cdot z_4 \\cdot z_6} = \\frac{23 \\cdot 16 \\cdot 18}{57 \\cdot 33 \\cdot 38} = \\frac{6624}{71478} = \\boxed{92,67 \\cdot 10^{-3}} \\]

                \\[ \\textbf{b) La velocitat d’avanç, } v \\]
                \\[ \\omega_{\\text{mot}} = \\frac{4000 \\cdot 2\\pi}{60} = 418,88\\,\\text{rad/s} \\]
                \\[ v = \\tau \\cdot \\omega_{\\text{mot}} \\cdot R = \\tau \\cdot \\omega_{\\text{mot}} \\cdot \\frac{d}{2} = 92,67 \\cdot 10^{-3} \\cdot 418,88 \\cdot 0,3 = \\boxed{11,65\\,m/s} \\]
                \\[ v = 11,65 \\cdot 3,6 = \\boxed{41,92\\,km/h} \\]

                \\[ \\textbf{c) El parell a l’eix de la roda, } \\Gamma \\]
                \\[ P_{\\text{roda}} = P_{\\text{mot}} \\cdot \\eta = 15000\\,W \\cdot 0,9 = 13500\\,W \\]
                \\[ \\omega_{\\text{roda}} = \\omega_{\\text{mot}} \\cdot \\tau = 418,88 \\cdot 92,67 \\cdot 10^{-3} = 38,82\\,\\text{rad/s} \\]
                \\[ \\Gamma = \\frac{P_{\\text{roda}}}{\\omega_{\\text{roda}}} = \\frac{13500}{38,82} = \\boxed{347,8\\,Nm} \\]
            `
        },


        {
            type: "exercicis",
            category: "electricitat",
            text: `S’utilitza una placa elèctrica portàtil per a cuinar fora de casa. La seva resistència és d’un aliatge de nicrom de resistivitat ρ = 1,28 × 10–6 Ω m. El diàmetre del fil és d = 0,8 mm i té una longitud L = 5,54 m.
            El rendiment de la placa és η = 0,9. Es connecta a la xarxa a U = 230 V i està en funcionament durant t = 30 min.
            Determina: 
            <br>
             a) La resistència de la placa, R.
             <br>
             b) La potència útil de la placa, Pútil. 
             <br>
             c) La intensitat que hi circula, I.  
             <br>
             d) L’energia consumida durant el temps que està en funcionament, Econs. 
`,
            solutionButton: "Mostra la solució",
            steps: `
                \\[ \\textbf{a) La resistència de la placa, } R \\]
                \\[ S = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot (0,8 \\cdot 10^{-3})^2}{4} = 5,0265 \\cdot 10^{-7}\\,m^2 \\]
                \\[ R = \\rho \\frac{L}{S} = 1,28 \\cdot 10^{-6} \\frac{5,54}{5,0265 \\cdot 10^{-7}} = \\boxed{14,11\\,\\Omega} \\]

                \\[ \\textbf{b) La potència útil de la placa, } P_{\\text{útil}} \\]
                \\[ P_{\\text{cons}} = \\frac{U^2}{R} = \\frac{230^2}{14,11} = 3749,11\\,W \\]
                \\[ P_{\\text{útil}} = P_{\\text{cons}} \\cdot \\eta = 3749,11 \\cdot 0,9 = 3374,2\\,W = \\boxed{3,375\\,kW} \\]

                \\[ \\textbf{c) La intensitat que hi circula, } I \\]
                \\[ I = \\frac{U}{R} = \\frac{230}{14,11} = \\boxed{16,30\\,A} \\]

                \\[ \\textbf{d) L’energia consumida durant el temps que està en funcionament, } E_{\\text{cons}} \\]
                \\[ E_{\\text{cons}} = P_{\\text{cons}} \\cdot t = 3,75\\,kW \\cdot 0,5\\,h = \\boxed{1,875\\,kWh} \\]
                \\[ E_{\\text{cons}} = 1,875 \\cdot 3,6 = \\boxed{6,750\\,MJ} \\]
            `
        },

     
        {
            type: "exercicis",
            category: "energia",
            text: `Un escalfador d’aigua de rendiment η = 0,87 funciona amb gas butà de poder calorífic
pcbutà = 47,7 MJ/kg i s’utilitza per a incrementar ΔT = 20 °C la temperatura de l’aigua calenta
sanitària. S’estima que en cada dutxa es consumeixen V = 75 L d’aigua. Les bombones de
butà contenen m = 12,5 kg de combustible i tenen un preu pbutà = 17,66 €. El preu de l’aigua
és paigua = 0,93 €/m3 i la seva calor específica és ce = 4,18 kJ/(kg K).
Determineu:
<br>
a) L’energia que consumeix l’escalfador per a subministrar l’aigua per a una dutxa, Econs
<br>
b) El nombre de dutxes, n, que es poden fer amb una sola bombona de butà.
<br>
c) El cost econòmic d’una dutxa, pdutxa. 
`,
            solutionButton: "Mostra la solució detallada",
            steps: `
                \\[ \\textbf{a) L’energia que consumeix l’escalfador per a una dutxa, } E_{\\text{cons}} \\]
                \\[ E_{\\text{útil}} = m_{\\text{aigua}} \\cdot c_e \\cdot \\Delta T = 75\\,kg \\cdot 4,18\\,kJ/(kg\\,K) \\cdot 20\\,K = 6270\\,kJ = 6,27\\,MJ \\]
                \\[ E_{\\text{cons}} = \\frac{E_{\\text{útil}}}{\\eta} = \\frac{6,27}{0,87} = \\boxed{7,207\\,MJ} \\]

                \\[ \\textbf{b) El nombre de dutxes, } n, \\text{ amb una sola bombona} \\]
                \\[ E_{\\text{bombona}} = m_{\\text{butà}} \\cdot pc_{\\text{butà}} = 12,5\\,kg \\cdot 47,7\\,MJ/kg = 596,25\\,MJ \\]
                \\[ n = \\frac{E_{\\text{bombona}}}{E_{\\text{cons}}} = \\frac{596,25}{7,207} = 82,73 \\rightarrow \\boxed{82\\,\\text{dutxes}} \\]

               \\[ \\textbf{c) El cost econòmic d’una dutxa, } p_{\\text{dutxa}} \\]
               \\[ \\text{Cost aigua: } 0,075\\,\\text{m}^3 \\cdot 0,93\\,\\text{€/m}^3 = 0,06975\\,\\text{€} \\]
               \\[ \\text{Cost gas: } \\frac{17,66\\,\\text{€}}{82,73\\,\\text{dutxes}} = 0,2134\\,\\text{€} \\]
               \\[ p_{\\text{dutxa}} = 0,06975 + 0,2134 = \\boxed{0,2832\\,\\text{€}} \\]
            `
        },
 ]

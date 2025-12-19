const questions = [
    {
        type: "exercicis",
        category: "energia",
        text: `S’han instal·lat \\(n = 50\\) aerogeneradors de 3 pales en un parc eòlic. 
               El diàmetre de l’àrea d’escombratge de les pales és \\(d = 77 \\, \\text{m}\\) i el rendiment dels aerogeneradors \\(\\eta_{\\text{aerog}} = 0{,}68\\). 
               S’estima que la velocitat mitjana del vent al parc és \\(v = 25 \\, \\text{km/h}\\); el parc està en funcionament 300 dies a l’any i obté energia 18 hores diàries. 
               La potència mitjana del vent \\(P_{\\text{vent}}\\) es pot estimar, per a un aerogenerador, com l’energia cinètica del vent per unitat de temps mitjançant l’expressió:
               \\[
               P_{\\text{vent}} = \\frac{1}{2} \\rho A v^3
               \\]
               en què \\(A\\) és l’àrea que escombren les pales de l’aerogenerador, \\(\\rho\\) és la densitat de l’aire i \\(v\\) és la velocitat del vent. 
               D’aquesta potència, el coeficient d’aprofitament del vent és \\(c_a = 0{,}42\\).
               
               Sabent que \\(1{,}225 \\, \\text{g}\\) d’aire ocupen un volum d’\\(1 \\, \\text{m}^3\\), determineu:
               <br><strong>a)</strong> La potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador. [0,5 punts]
               <br><strong>b)</strong> La potència elèctrica útil \\(P_{\\text{útil}}\\) que generarà cada aerogenerador. [0,5 punts]
               <br><strong>c)</strong> L’energia elèctrica total \\(E_{\\text{total}}\\) que es generarà al parc durant un any. [0,5 punts]
               <br><strong>d)</strong> Els ingressos que tindrà el parc eòlic si el preu de venda de l’energia eòlica és \\(p_{\\text{venda}} = 7{,}624\\) cèntims d’euro per \\(\\text{kWh}\\). [0,5 punts]
               <br><strong>e)</strong> En quin percentatge disminuirien els ingressos anteriors si la velocitat mitjana del vent es reduís un 10 %.
               <br><br>
               <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
            <br>
            - Àrea d’escombratge de les pales:
            \\[
            A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\times (77 \\, \\text{m})^2}{4} = 4657{,}7 \\, \\text{m}^2
            \\]
            - Densitat de l’aire:
            \\[
            \\rho = \\frac{1{,}225 \\, \\text{g}}{\\text{m}^3} = 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3}
            \\]
            - Velocitat del vent (en \\(\\text{m/s}\\)):
            \\[
            v = \\frac{25 \\, \\text{km/h}}{3{,}6} = 6{,}94 \\, \\text{m/s}
            \\]
            - Potència del vent:
            \\[
            P_{\\text{vent}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}94 \\, \\text{m/s})^3 = 828{,}08 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
            <br>
            - Aplicant el rendiment de l’aerogenerador:
            \\[
            P_{\\text{útil}} = P_{\\text{vent}} \\times \\eta_{\\text{aerog}} \\times c_a = 828{,}08 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 236{,}62 \\, \\text{kW}
            \\]
            <br>
            <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
            <br>
            - Nombre total d'hores operatives a l'any:
            \\[
            h = 300 \\, \\text{dies/any} \\times 18 \\, \\text{h/dia} = 5400 \\, \\text{h/any}
            \\]
            - Energia generada per un aerogenerador:
            \\[
            E_{\\text{útil}} = P_{\\text{útil}} \\times h = 236{,}62 \\, \\text{kW} \\times 5400 \\, \\text{h} = 1277{,}75 \\, \\text{MWh/any}
            \\]
            - Energia total generada per 50 aerogeneradors:
            \\[
            E_{\\text{total}} = 1277{,}75 \\, \\text{MWh/any} \\times 50 = 63{,}89 \\, \\text{GWh/any}
            \\]
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
            - Ingressos totals:
            \\[
            Ingressos = E_{\\text{total}} \\times p_{\\text{venda}} = 63{,}89 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 4865{,}9 \\, \\text{k€}
            \\]
            <br>
            <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
            <br>
            - Nova velocitat del vent:
            \\[
            v_{nou} = 0{,}9 \\times v = 0{,}9 \\times 6{,}94 \\, \\text{m/s} = 6{,}25 \\, \\text{m/s}
            \\]
            - Nova potència del vent:
            \\[
            P_{\\text{vent, nou}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}25 \\, \\text{m/s})^3 = 654{,}8 \\, \\text{kW}
            \\]
            - Nova potència útil:
            \\[
            P_{\\text{útil, nou}} = 654{,}8 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 187{,}19 \\, \\text{kW}
            \\]
            - Nova energia total:
            \\[
            E_{\\text{total, nou}} = 187{,}19 \\, \\text{kW} \\times 5400 \\, \\text{h} \\times 50 = 50{,}7 \\, \\text{GWh/any}
            \\]
            - Nous ingressos:
            \\[
            Ingressos_{nou} = 50{,}7 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 3865{,}58 \\, \\text{k€}
            \\]
            - Percentatge de disminució:
            \\[
            \\frac{4865{,}9 - 3865{,}58}{4865{,}9} \\times 100 \\approx 20{,}6\\%
            \\]
            <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Un motor de benzina de quatre temps consumeix 10,2 L/h quan gira a 4 000 min–1. El
poder calorífic de la benzina és 42 000 kJ/kg i la seva densitat, 0,8 kg/L. Quina és la massa de
combustible consumida en un cicle del motor?`,
        options: [
            { text: "30 mg", value: "a" },
            { text: "34 mg %", value: "b" },
            { text: "68mg %", value: "c" },
            { text: "136mg %", value: "d" }
        ],
        correctAnswer: "c",
       
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text:    `La figura mostra les corbes tensió-deformació obtingudes en assajos de tracció utilitzant dos acers diferents. A partir de l &#39; observació d &#39;aquesta figura, es pot afirmar que`,
        options: [
            { text: "el mòdul d’elasticitat dels dos acers no es pot determinar en aquest assaig.", value: "a" },
            { text: "el mòdul d’elasticitat dels dos acers és el mateix.", value: "b" },
            { text: "el mòdul d’elasticitat de l’acer 1 és més gran que el de l’acer 2.", value: "c" },
            { text: "el mòdul d’elasticitat de l’acer 2 és més gran que el del’acer 1.", value: "d" }
        ],
        correctAnswer: "b",
       
        images: `<img src="https://blyamani3.github.io/images/2024serie1q2.png" alt="gràfic que mostra allargament unitari en relació a la tensió">`  // Imatge opcional al final de la pregunta
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text:    `Una resistència elèctrica proporciona 3 000 J a 50 ml d’aigua que es troben a 5 °C. Sabent
que la calor específica de l’aigua és ce = 4,18 kJ/(kg K), la temperatura final de l’aigua serà`,
        options: [
            { text: "1,435 °C", value: "a" },
            { text: "6,435 °C", value: "b" },
            { text: "14,35 °C", value: "c" },
            { text: "19,35 °C", value: "d" }
        ],
        correctAnswer: "d",
       
       
    } 
    ,{
        type: "questions", // Tipus de pregunta
        category: "energia",
        text:    `Un habitatge disposa de vuit plaques solars. L’àrea total de les plaques és de 4,4 m2
, i les
seves condicions de localització fan que es disposi, el mes de setembre, d’una irradiació diària
mitjana de 13 kW h/m2
. Si les plaques tenen un rendiment del 0,3, l’energia produïda durant
el mes de setembre serà de`,
        options: [
            { text: "514,8 kW h", value: "a" },
            { text: "1 853 J", value: "b" },
            { text: "58,52 J", value: "c" },
            { text: "52,19 kW h", value: "d" }
        ],
        correctAnswer: "a",
       
        
    } 
    ,{
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text:    `El motor d’una motocicleta de quatre temps té una cursa de 50,6 mm i un diàmetre de
cilindre de 56 mm. Si la relació de compressió és 7,3, quin és el volum de la cambra de combustió?`,
        options: [
            { text: " 124,6 cm3", value: "a" },
            { text: "112,6 cm3", value: "b" },
            { text: "39,56 cm3", value: "c" },
            { text: "19,78 cm3", value: "d" }
        ],
        correctAnswer: "a",
       

    } 
     ,{
        type: "questions", // Tipus de pregunta
        category: "motors",
        text:    `Una pantalla de projecció té una massa m = 3 kg a la part inferior per a mantenir-la sempre tibada. Un motor reductor és l’encarregat d’enrotllar la pantalla,
de longitud h = 1,5 m, en el corró de diàmetre d = 250 mm, que es troba articulat
amb el sostre, en un temps t = 3 s. Quina és l’energia mecànica necessària per a
enrotllar tota la pantalla?`,
        options: [
            { text: "44,13 J", value: "a" },
            { text: "73,55 J", value: "b" },
            { text: "22,07 J", value: "c" },
            { text: "14,71 J", value: "d" }
        ],
        correctAnswer: "a",
       

    } 
    ,{
        type: "questions", // Tipus de pregunta
        category: "motors",
        text:    `Un inventor ha construït una màquina tèrmica que funciona entre dues fonts tèrmiques,
una de 270 °C i una altra de 610 °C. Quina de les afirmacions següents és certa?`,
        options: [
            { text: "El rendiment de la màquina proposada sempre estarà per sobre del 40 %.", value: "a" },
            { text: " El rendiment de la màquina proposada no podrà superar mai el 38,5 %.", value: "b" },
            { text: "Perquè una màquina tèrmica funcioni, el focus fred sempre s’ha de trobar per sota de
0 °C.", value: "c" },
            { text: "Perquè una màquina tèrmica funcioni, el focus calent sempre s’ha de trobar per sobre
de 700 °C", value: "d" }
        ],
        correctAnswer: "b",
       

    } 
];


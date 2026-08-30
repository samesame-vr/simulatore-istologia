const vetrini = [
    {
        "id": 1,
        "immagine": "images/mh_017_epitelio_squamoso_stratificato.jpg",
        "titolo": "MH 017 - Epitelio squamoso stratificato",
        "colorazione": "H&E (presumibile)",
        "caratteristiche": [
            "Cellule basali cubiche in attiva mitosi",
            "Cellule apicali appiattite (squamose)",
            "Più strati sovrapposti per protezione meccanica"
        ],
        "teoria": "L'epitelio pavimentoso stratificato funge da barriera contro l'attrito. Le cellule basali sono mitoticamente attive, mentre quelle superficiali si appiattiscono man mano che maturano verso l'apice."
    },
    {
        "id": 2,
        "immagine": "images/mh_029a_tendine.jpg",
        "titolo": "MH 029a - Tendine",
        "colorazione": "H&E / Tricromica",
        "caratteristiche": [
            "Fasci paralleli di collagene di tipo I",
            "Fibrociti (tenociti) allineati e appiattiti tra le fibre",
            "Matrice extracellulare molto densa, scarsa sostanza fondamentale"
        ],
        "teoria": "Il tendine è l'esempio classico di tessuto connettivo denso regolare. I fasci di fibre collagene parallele conferiscono una notevole resistenza alla trazione unidirezionale, a fronte di una vascolarizzazione scarsa."
    },
    {
        "id": 3,
        "immagine": "images/mh_030_tendine_tessuto_connettivo_denso_regolare_collagene_i.jpg",
        "titolo": "MH 030 - Tendine | tessuto connettivo denso regolare, collagene I.",
        "colorazione": "H&E / Tricromica",
        "caratteristiche": [
            "Fasci paralleli di collagene di tipo I",
            "Fibrociti (tenociti) allineati e appiattiti tra le fibre",
            "Matrice extracellulare molto densa, scarsa sostanza fondamentale"
        ],
        "teoria": "Il tendine è l'esempio classico di tessuto connettivo denso regolare. I fasci di fibre collagene parallele conferiscono una notevole resistenza alla trazione unidirezionale, a fronte di una vascolarizzazione scarsa."
    },
    {
        "id": 4,
        "immagine": "images/mh_040_disco_intervertebrale.jpg",
        "titolo": "MH 040 - Disco intervertebrale",
        "colorazione": "H&E",
        "caratteristiche": [
            "Fibrocartilagine ben visibile",
            "Fasci di fibre collagene intrecciate in strati concentrici",
            "Assenza di pericondrio"
        ],
        "teoria": "Il disco è composto da un anello fibroso in fibrocartilagine e da un nucleo polposo centrale. La fibrocartilagine è un tessuto di transizione tra cartilagine ialina e connettivo denso, ed è priva di pericondrio."
    },
    {
        "id": 5,
        "immagine": "images/mh_029b_osso.jpg",
        "titolo": "MH 029b - Osso",
        "colorazione": "H&E (decalcificato)",
        "caratteristiche": [
            "Matrice ossea omogenea eosinofila",
            "Osteociti visibili nelle proprie lacune",
            "Midollo osseo presente nelle cavità"
        ],
        "teoria": "L'osso decalcificato perde la componente minerale mantenendo quella organica e cellulare, permettendo lo studio morfologico degli osteociti e del midollo osseo rosso o giallo."
    },
    {
        "id": 6,
        "immagine": "images/mh_043_osso_spugnoso_e_osso_compatto.jpg",
        "titolo": "MH 043 - Osso spugnoso e osso compatto",
        "colorazione": "H&E (decalcificato)",
        "caratteristiche": [
            "Matrice ossea omogenea eosinofila",
            "Osteociti visibili nelle proprie lacune",
            "Midollo osseo presente nelle cavità"
        ],
        "teoria": "L'osso decalcificato perde la componente minerale mantenendo quella organica e cellulare, permettendo lo studio morfologico degli osteociti e del midollo osseo rosso o giallo."
    },
    {
        "id": 7,
        "immagine": "images/mh_044_osso_preparato_per_usura_preparazione_colorazione_per_usura.jpg",
        "titolo": "MH 044 - Osso preparato per usura (Preparazione/Colorazione: per usura)",
        "colorazione": "Preparato per usura",
        "caratteristiche": [
            "Sistemi di Havers (osteoni) ben definiti",
            "Lacune osteocitarie nere, vuote",
            "Canalicoli radiali evidenti"
        ],
        "teoria": "L'osso preparato per usura viene abraso senza decalcificazione. Le cellule non sopravvivono, lasciando lacune e canalicoli vuoti che appaiono neri al microscopio, rivelando con chiarezza l'architettura lamellare inorganica."
    },
    {
        "id": 8,
        "immagine": "images/mh_045_osso.jpg",
        "titolo": "MH 045 - Osso",
        "colorazione": "H&E (decalcificato)",
        "caratteristiche": [
            "Matrice ossea omogenea eosinofila",
            "Osteociti visibili nelle proprie lacune",
            "Midollo osseo presente nelle cavità"
        ],
        "teoria": "L'osso decalcificato perde la componente minerale mantenendo quella organica e cellulare, permettendo lo studio morfologico degli osteociti e del midollo osseo rosso o giallo."
    },
    {
        "id": 9,
        "immagine": "images/mh_046_sviluppo_osseo_ossificazione.jpg",
        "titolo": "MH 046 - Sviluppo osseo (Ossificazione)",
        "colorazione": "H&E / Tricromica",
        "caratteristiche": [
            "Cartilagine ialina in degenerazione progressiva",
            "Zone di proliferazione, ipertrofia e calcificazione dei condrociti",
            "Spicole ossee neoformate (trabecole primarie)"
        ],
        "teoria": "Nell'ossificazione endocondrale un modello cartilagineo preesistente viene invaso dai vasi e progressivamente sostituito da tessuto osseo. Sono riconoscibili i condrociti impilati (proliferazione) e quelli ingrossati (ipertrofia)."
    },
    {
        "id": 10,
        "immagine": "images/mhs_202_osso_preparato_per_usura_colorazione_schmorl_usura.jpg",
        "titolo": "MHS 202 - Osso preparato per usura (Colorazione: Schmorl / Usura)",
        "colorazione": "Preparato per usura",
        "caratteristiche": [
            "Sistemi di Havers (osteoni) ben definiti",
            "Lacune osteocitarie nere, vuote",
            "Canalicoli radiali evidenti"
        ],
        "teoria": "L'osso preparato per usura viene abraso senza decalcificazione. Le cellule non sopravvivono, lasciando lacune e canalicoli vuoti che appaiono neri al microscopio, rivelando con chiarezza l'architettura lamellare inorganica."
    },
    {
        "id": 11,
        "immagine": "images/mhs_203_osso.jpg",
        "titolo": "MHS 203 - Osso",
        "colorazione": "H&E (decalcificato)",
        "caratteristiche": [
            "Matrice ossea omogenea eosinofila",
            "Osteociti visibili nelle proprie lacune",
            "Midollo osseo presente nelle cavità"
        ],
        "teoria": "L'osso decalcificato perde la componente minerale mantenendo quella organica e cellulare, permettendo lo studio morfologico degli osteociti e del midollo osseo rosso o giallo."
    },
    {
        "id": 12,
        "immagine": "images/mhs_233_osso_preparato_per_usura_preparazione_colorazione_per_usura.jpg",
        "titolo": "MHS 233 - Osso preparato per usura (Preparazione/Colorazione: per usura)",
        "colorazione": "Preparato per usura",
        "caratteristiche": [
            "Sistemi di Havers (osteoni) ben definiti",
            "Lacune osteocitarie nere, vuote",
            "Canalicoli radiali evidenti"
        ],
        "teoria": "L'osso preparato per usura viene abraso senza decalcificazione. Le cellule non sopravvivono, lasciando lacune e canalicoli vuoti che appaiono neri al microscopio, rivelando con chiarezza l'architettura lamellare inorganica."
    },
    {
        "id": 13,
        "immagine": "images/mhs_287_sviluppo_osseo_ossificazione.jpg",
        "titolo": "MHS 287 - Sviluppo osseo (Ossificazione)",
        "colorazione": "H&E / Tricromica",
        "caratteristiche": [
            "Cartilagine ialina in degenerazione progressiva",
            "Zone di proliferazione, ipertrofia e calcificazione dei condrociti",
            "Spicole ossee neoformate (trabecole primarie)"
        ],
        "teoria": "Nell'ossificazione endocondrale un modello cartilagineo preesistente viene invaso dai vasi e progressivamente sostituito da tessuto osseo. Sono riconoscibili i condrociti impilati (proliferazione) e quelli ingrossati (ipertrofia)."
    },
    {
        "id": 14,
        "immagine": "images/mh_033hr_striscio_di_sangue_colorazione_wright.jpg",
        "titolo": "MH 033hr - Striscio di sangue (Colorazione: Wright)",
        "colorazione": "Wright / Giemsa",
        "caratteristiche": [
            "Eritrociti abbondanti, anucleati, biconcavi",
            "Leucociti polimorfonucleati e mononucleati distinguibili",
            "Piastrine sparse come piccoli frammenti"
        ],
        "teoria": "Lo striscio di sangue è fondamentale per la formula leucocitaria e la morfologia eritrocitaria. I diversi leucociti si distinguono per forma del nucleo e granulazioni citoplasmatiche."
    },
    {
        "id": 15,
        "immagine": "images/mh_053_muscolo_liscio.jpg",
        "titolo": "MH 053 - Muscolo liscio",
        "colorazione": "H&E",
        "caratteristiche": [
            "Cellule fusiformi allungate",
            "Nucleo singolo, centrale, a sigaro",
            "Assenza di striature trasversali"
        ],
        "teoria": "Costituisce le pareti dei visceri cavi e dei vasi. È specializzato in contrazioni lente, prolungate e involontarie; l'assenza di un'organizzazione sarcomerica regolare spiega la mancanza di bandeggiature."
    },
    {
        "id": 16,
        "immagine": "images/mh_054_muscolo_cardiaco.jpg",
        "titolo": "MH 054 - Muscolo cardiaco",
        "colorazione": "H&E",
        "caratteristiche": [
            "Striature trasversali presenti",
            "Dischi intercalari ben visibili",
            "Fibre ramificate con nucleo centrale"
        ],
        "teoria": "Il miocardio è striato ma involontario. I dischi intercalari connettono le cellule sia meccanicamente (desmosomi) sia elettricamente (gap junction), creando un sincizio funzionale."
    },
    {
        "id": 17,
        "immagine": "images/mh_055a_muscolo_scheletrico.jpg",
        "titolo": "MH 055a - Muscolo scheletrico",
        "colorazione": "H&E / PTAH",
        "caratteristiche": [
            "Fibre cilindriche lunghe e plurinucleate",
            "Nuclei numerosi in sede periferica",
            "Striature trasversali evidenti (bande A e I)"
        ],
        "teoria": "Responsabile del movimento volontario. Origina dalla fusione di mioblasti, formando lunghe fibre ricche di miofibrille organizzate in sarcomeri regolari."
    },
    {
        "id": 18,
        "immagine": "images/mh_055ahr_muscolo_scheletrico.jpg",
        "titolo": "MH 055ahr - Muscolo scheletrico",
        "colorazione": "H&E / PTAH",
        "caratteristiche": [
            "Fibre cilindriche lunghe e plurinucleate",
            "Nuclei numerosi in sede periferica",
            "Striature trasversali evidenti (bande A e I)"
        ],
        "teoria": "Responsabile del movimento volontario. Origina dalla fusione di mioblasti, formando lunghe fibre ricche di miofibrille organizzate in sarcomeri regolari."
    },
    {
        "id": 19,
        "immagine": "images/mhs_237_muscolo_scheletrico.jpg",
        "titolo": "MHS 237 - Muscolo scheletrico",
        "colorazione": "H&E / PTAH",
        "caratteristiche": [
            "Fibre cilindriche lunghe e plurinucleate",
            "Nuclei numerosi in sede periferica",
            "Striature trasversali evidenti (bande A e I)"
        ],
        "teoria": "Responsabile del movimento volontario. Origina dalla fusione di mioblasti, formando lunghe fibre ricche di miofibrille organizzate in sarcomeri regolari."
    },
    {
        "id": 20,
        "immagine": "images/mhs_262_muscolo_scheletrico.jpg",
        "titolo": "MHS 262 - Muscolo scheletrico",
        "colorazione": "H&E / PTAH",
        "caratteristiche": [
            "Fibre cilindriche lunghe e plurinucleate",
            "Nuclei numerosi in sede periferica",
            "Striature trasversali evidenti (bande A e I)"
        ],
        "teoria": "Responsabile del movimento volontario. Origina dalla fusione di mioblasti, formando lunghe fibre ricche di miofibrille organizzate in sarcomeri regolari."
    },
    {
        "id": 21,
        "immagine": "images/mh_047_midollo_spinale.jpg",
        "titolo": "MH 047 - Midollo spinale",
        "colorazione": "Nissl / H&E / Argentica",
        "caratteristiche": [
            "Sostanza grigia centrale a farfalla",
            "Sostanza bianca periferica con assoni mielinizzati",
            "Grandi motoneuroni multipolari nelle corna anteriori"
        ],
        "teoria": "Nel midollo spinale i corpi cellulari neuronali sono concentrati centralmente. Con la colorazione di Nissl il reticolo endoplasmatico rugoso dei motoneuroni appare intensamente basofilo e maculato."
    },
    {
        "id": 22,
        "immagine": "images/mhs_283_cervello_encefalo_cresil_violetto.jpg",
        "titolo": "MHS 283 - Cervello (Encefalo) cresil violetto",
        "colorazione": "Cresil violetto / H&E",
        "caratteristiche": [
            "Corteccia organizzata in strati",
            "Neuroni piramidali prominenti",
            "Sostanza grigia disposta perifericamente"
        ],
        "teoria": "La corteccia cerebrale presenta una stratificazione laminare complessa. I neuroni piramidali hanno un grosso soma triangolare e un lungo dendrite apicale diretto verso la superficie."
    },
    {
        "id": 23,
        "immagine": "images/mhs_284_cervello_encefalo.jpg",
        "titolo": "MHS 284 - Cervello (Encefalo)",
        "colorazione": "Cresil violetto / H&E",
        "caratteristiche": [
            "Corteccia organizzata in strati",
            "Neuroni piramidali prominenti",
            "Sostanza grigia disposta perifericamente"
        ],
        "teoria": "La corteccia cerebrale presenta una stratificazione laminare complessa. I neuroni piramidali hanno un grosso soma triangolare e un lungo dendrite apicale diretto verso la superficie."
    },
    {
        "id": 24,
        "immagine": "images/ucsf_163_midollo_spinale_colorazione_nissl.jpg",
        "titolo": "UCSF 163 - Midollo spinale (Colorazione: Nissl)",
        "colorazione": "Nissl / H&E / Argentica",
        "caratteristiche": [
            "Sostanza grigia centrale a farfalla",
            "Sostanza bianca periferica con assoni mielinizzati",
            "Grandi motoneuroni multipolari nelle corna anteriori"
        ],
        "teoria": "Nel midollo spinale i corpi cellulari neuronali sono concentrati centralmente. Con la colorazione di Nissl il reticolo endoplasmatico rugoso dei motoneuroni appare intensamente basofilo e maculato."
    },
    {
        "id": 25,
        "immagine": "images/mh_070_ventricoli_cardiaci.jpg",
        "titolo": "MH 070 - Ventricoli cardiaci",
        "colorazione": "H&E",
        "caratteristiche": [
            "Striature trasversali presenti",
            "Dischi intercalari ben visibili",
            "Fibre ramificate con nucleo centrale"
        ],
        "teoria": "Il miocardio è striato ma involontario. I dischi intercalari connettono le cellule sia meccanicamente (desmosomi) sia elettricamente (gap junction), creando un sincizio funzionale."
    },
    {
        "id": 26,
        "immagine": "images/mh_071_cuore.jpg",
        "titolo": "MH 071 - Cuore",
        "colorazione": "H&E",
        "caratteristiche": [
            "Striature trasversali presenti",
            "Dischi intercalari ben visibili",
            "Fibre ramificate con nucleo centrale"
        ],
        "teoria": "Il miocardio è striato ma involontario. I dischi intercalari connettono le cellule sia meccanicamente (desmosomi) sia elettricamente (gap junction), creando un sincizio funzionale."
    },
    {
        "id": 27,
        "immagine": "images/mh_073_cuore.jpg",
        "titolo": "MH 073 - Cuore",
        "colorazione": "H&E",
        "caratteristiche": [
            "Striature trasversali presenti",
            "Dischi intercalari ben visibili",
            "Fibre ramificate con nucleo centrale"
        ],
        "teoria": "Il miocardio è striato ma involontario. I dischi intercalari connettono le cellule sia meccanicamente (desmosomi) sia elettricamente (gap junction), creando un sincizio funzionale."
    },
    {
        "id": 28,
        "immagine": "images/mhs_245_cuore.jpg",
        "titolo": "MHS 245 - Cuore",
        "colorazione": "H&E",
        "caratteristiche": [
            "Striature trasversali presenti",
            "Dischi intercalari ben visibili",
            "Fibre ramificate con nucleo centrale"
        ],
        "teoria": "Il miocardio è striato ma involontario. I dischi intercalari connettono le cellule sia meccanicamente (desmosomi) sia elettricamente (gap junction), creando un sincizio funzionale."
    },
    {
        "id": 29,
        "immagine": "images/mh_086b_cuoio_capelluto.jpg",
        "titolo": "MH 086b - Cuoio capelluto",
        "colorazione": "H&E",
        "caratteristiche": [
            "Alta densità di follicoli piliferi profondi",
            "Grosse ghiandole sebacee annesse",
            "Epidermide relativamente sottile"
        ],
        "teoria": "Variante di cute adattata a sostenere peli terminali. Le voluminose ghiandole sebacee riversano sebo nel follicolo per lubrificare e proteggere il fusto del pelo."
    },
    {
        "id": 30,
        "immagine": "images/mh_087b_cuoio_capelluto.jpg",
        "titolo": "MH 087b - Cuoio capelluto",
        "colorazione": "H&E",
        "caratteristiche": [
            "Alta densità di follicoli piliferi profondi",
            "Grosse ghiandole sebacee annesse",
            "Epidermide relativamente sottile"
        ],
        "teoria": "Variante di cute adattata a sostenere peli terminali. Le voluminose ghiandole sebacee riversano sebo nel follicolo per lubrificare e proteggere il fusto del pelo."
    },
    {
        "id": 31,
        "immagine": "images/mh_088_pelle_cute.jpg",
        "titolo": "MH 088 - Pelle (Cute)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epidermide pluristratificata cheratinizzata",
            "Derma diviso in papillare e reticolare",
            "Annessi cutanei presenti (peli, ghiandole)"
        ],
        "teoria": "La cute sottile riveste la maggior parte del corpo. Lo strato corneo è meno spesso rispetto alla cute spessa; funge da barriera protettiva, termica e immunitaria."
    },
    {
        "id": 32,
        "immagine": "images/mh_090_cute_sottile.jpg",
        "titolo": "MH 090 - Cute sottile",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epidermide pluristratificata cheratinizzata",
            "Derma diviso in papillare e reticolare",
            "Annessi cutanei presenti (peli, ghiandole)"
        ],
        "teoria": "La cute sottile riveste la maggior parte del corpo. Lo strato corneo è meno spesso rispetto alla cute spessa; funge da barriera protettiva, termica e immunitaria."
    },
    {
        "id": 33,
        "immagine": "images/mh_091_cute_spessa.jpg",
        "titolo": "MH 091 - Cute spessa",
        "colorazione": "H&E",
        "caratteristiche": [
            "Strato corneo molto ispessito",
            "Assenza di follicoli piliferi e ghiandole sebacee",
            "Ghiandole sudoripare eccrine profonde"
        ],
        "teoria": "Tipica delle zone glabre soggette a forte usura (palmi, piante). Manca di peli e possiede un robusto strato corneo per resistere alle sollecitazioni meccaniche."
    },
    {
        "id": 34,
        "immagine": "images/mh_091ahr_cute_spessa.jpg",
        "titolo": "MH 091ahr - Cute spessa",
        "colorazione": "H&E",
        "caratteristiche": [
            "Strato corneo molto ispessito",
            "Assenza di follicoli piliferi e ghiandole sebacee",
            "Ghiandole sudoripare eccrine profonde"
        ],
        "teoria": "Tipica delle zone glabre soggette a forte usura (palmi, piante). Manca di peli e possiede un robusto strato corneo per resistere alle sollecitazioni meccaniche."
    },
    {
        "id": 35,
        "immagine": "images/mh_091bhr_cute_spessa.jpg",
        "titolo": "MH 091bhr - Cute spessa",
        "colorazione": "H&E",
        "caratteristiche": [
            "Strato corneo molto ispessito",
            "Assenza di follicoli piliferi e ghiandole sebacee",
            "Ghiandole sudoripare eccrine profonde"
        ],
        "teoria": "Tipica delle zone glabre soggette a forte usura (palmi, piante). Manca di peli e possiede un robusto strato corneo per resistere alle sollecitazioni meccaniche."
    },
    {
        "id": 36,
        "immagine": "images/mhs_235_cute_spessa.jpg",
        "titolo": "MHS 235 - Cute spessa",
        "colorazione": "H&E",
        "caratteristiche": [
            "Strato corneo molto ispessito",
            "Assenza di follicoli piliferi e ghiandole sebacee",
            "Ghiandole sudoripare eccrine profonde"
        ],
        "teoria": "Tipica delle zone glabre soggette a forte usura (palmi, piante). Manca di peli e possiede un robusto strato corneo per resistere alle sollecitazioni meccaniche."
    },
    {
        "id": 37,
        "immagine": "images/mhs_236_cute_sottile.jpg",
        "titolo": "MHS 236 - Cute sottile",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epidermide pluristratificata cheratinizzata",
            "Derma diviso in papillare e reticolare",
            "Annessi cutanei presenti (peli, ghiandole)"
        ],
        "teoria": "La cute sottile riveste la maggior parte del corpo. Lo strato corneo è meno spesso rispetto alla cute spessa; funge da barriera protettiva, termica e immunitaria."
    },
    {
        "id": 38,
        "immagine": "images/mh_094_parotide_ghiandola_salivare.jpg",
        "titolo": "MH 094 - Parotide (Ghiandola salivare)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Ghiandola acinosa composta, esclusivamente sierosa",
            "Citoplasma basofilo ricco di RER",
            "Dotti intercalari e striati ben evidenti"
        ],
        "teoria": "Ghiandola salivare maggiore pura, produce secreto sieroso ricco di amilasi. I nuclei sono tondi e basali, il RER abbondante colora intensamente la base della cellula."
    },
    {
        "id": 39,
        "immagine": "images/mh_094hr_parotide.jpg",
        "titolo": "MH 094hr - Parotide",
        "colorazione": "H&E",
        "caratteristiche": [
            "Ghiandola acinosa composta, esclusivamente sierosa",
            "Citoplasma basofilo ricco di RER",
            "Dotti intercalari e striati ben evidenti"
        ],
        "teoria": "Ghiandola salivare maggiore pura, produce secreto sieroso ricco di amilasi. I nuclei sono tondi e basali, il RER abbondante colora intensamente la base della cellula."
    },
    {
        "id": 40,
        "immagine": "images/mh_095_ghiandola_sottomandibolare.jpg",
        "titolo": "MH 095 - Ghiandola sottomandibolare",
        "colorazione": "H&E",
        "caratteristiche": [
            "Ghiandola mista a prevalenza sierosa",
            "Semilune sierose di Giannuzzi attorno agli acini mucosi",
            "Ricca rete di dotti escretori"
        ],
        "teoria": "Ghiandola salivare mista che secerne saliva moderatamente densa. Le cellule sierose formano tipicamente semilune alla periferia degli acini mucosi."
    },
    {
        "id": 41,
        "immagine": "images/mh_096_ghiandola_sottolinguale.jpg",
        "titolo": "MH 096 - Ghiandola sottolinguale",
        "colorazione": "H&E",
        "caratteristiche": [
            "Ghiandola mista a forte prevalenza mucosa",
            "Acini mucosi chiari e rigonfi",
            "Nuclei mucosi appiattiti alla base"
        ],
        "teoria": "Ghiandola salivare specializzata nella secrezione di mucine. Il muco si colora debolmente con H&E, dando alla ghiandola un aspetto pallido e schiumoso."
    },
    {
        "id": 42,
        "immagine": "images/mhs_265_ghiandola_sottolinguale.jpg",
        "titolo": "MHS 265 - Ghiandola sottolinguale",
        "colorazione": "H&E",
        "caratteristiche": [
            "Ghiandola mista a forte prevalenza mucosa",
            "Acini mucosi chiari e rigonfi",
            "Nuclei mucosi appiattiti alla base"
        ],
        "teoria": "Ghiandola salivare specializzata nella secrezione di mucine. Il muco si colora debolmente con H&E, dando alla ghiandola un aspetto pallido e schiumoso."
    },
    {
        "id": 43,
        "immagine": "images/mh_108_lingua.jpg",
        "titolo": "MH 108 - Lingua",
        "colorazione": "H&E",
        "caratteristiche": [
            "Fasci muscolari scheletrici intrecciati su più piani",
            "Papille linguali sulla superficie dorsale",
            "Calici gustativi incastonati nell'epitelio"
        ],
        "teoria": "Organo muscolo-membranoso molto flessibile grazie ai fasci muscolari incrociati. L'epitelio dorsale varia in base al tipo di papilla e ospita i recettori del gusto."
    },
    {
        "id": 44,
        "immagine": "images/mhs_201_lingua.jpg",
        "titolo": "MHS 201 - Lingua",
        "colorazione": "H&E",
        "caratteristiche": [
            "Fasci muscolari scheletrici intrecciati su più piani",
            "Papille linguali sulla superficie dorsale",
            "Calici gustativi incastonati nell'epitelio"
        ],
        "teoria": "Organo muscolo-membranoso molto flessibile grazie ai fasci muscolari incrociati. L'epitelio dorsale varia in base al tipo di papilla e ospita i recettori del gusto."
    },
    {
        "id": 45,
        "immagine": "images/mhs_208_lingua.jpg",
        "titolo": "MHS 208 - Lingua",
        "colorazione": "H&E",
        "caratteristiche": [
            "Fasci muscolari scheletrici intrecciati su più piani",
            "Papille linguali sulla superficie dorsale",
            "Calici gustativi incastonati nell'epitelio"
        ],
        "teoria": "Organo muscolo-membranoso molto flessibile grazie ai fasci muscolari incrociati. L'epitelio dorsale varia in base al tipo di papilla e ospita i recettori del gusto."
    },
    {
        "id": 46,
        "immagine": "images/mhs_264_lingua.jpg",
        "titolo": "MHS 264 - Lingua",
        "colorazione": "H&E",
        "caratteristiche": [
            "Fasci muscolari scheletrici intrecciati su più piani",
            "Papille linguali sulla superficie dorsale",
            "Calici gustativi incastonati nell'epitelio"
        ],
        "teoria": "Organo muscolo-membranoso molto flessibile grazie ai fasci muscolari incrociati. L'epitelio dorsale varia in base al tipo di papilla e ospita i recettori del gusto."
    },
    {
        "id": 47,
        "immagine": "images/mhs_246_palato_duro.jpg",
        "titolo": "MHS 246 - Palato duro",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio pluristratificato (para)cheratinizzato",
            "Lamina propria saldamente ancorata al periostio",
            "Ghiandole palatine mucose nella regione posteriore"
        ],
        "teoria": "Il palato duro sopporta una forte abrasione durante la masticazione; per questo l'epitelio è resistente e ben ancorato ai piani ossei sottostanti."
    },
    {
        "id": 48,
        "immagine": "images/mh_131_pancreas_esocrino.jpg",
        "titolo": "MH 131 - Pancreas esocrino",
        "colorazione": "H&E",
        "caratteristiche": [
            "Acini sierosi esocrini",
            "Granuli di zimogeno eosinofili apicali",
            "Isole di Langerhans endocrine pallide e vascolarizzate"
        ],
        "teoria": "Ghiandola anficrina: la componente esocrina produce enzimi digestivi, quella endocrina (isole) è distribuita nello stroma e secerne ormoni come insulina e glucagone."
    },
    {
        "id": 49,
        "immagine": "images/mhs_211_pancreas.jpg",
        "titolo": "MHS 211 - Pancreas",
        "colorazione": "H&E",
        "caratteristiche": [
            "Acini sierosi esocrini",
            "Granuli di zimogeno eosinofili apicali",
            "Isole di Langerhans endocrine pallide e vascolarizzate"
        ],
        "teoria": "Ghiandola anficrina: la componente esocrina produce enzimi digestivi, quella endocrina (isole) è distribuita nello stroma e secerne ormoni come insulina e glucagone."
    },
    {
        "id": 50,
        "immagine": "images/mhs_232_pancreas_esocrino.jpg",
        "titolo": "MHS 232 - Pancreas esocrino",
        "colorazione": "H&E",
        "caratteristiche": [
            "Acini sierosi esocrini",
            "Granuli di zimogeno eosinofili apicali",
            "Isole di Langerhans endocrine pallide e vascolarizzate"
        ],
        "teoria": "Ghiandola anficrina: la componente esocrina produce enzimi digestivi, quella endocrina (isole) è distribuita nello stroma e secerne ormoni come insulina e glucagone."
    },
    {
        "id": 51,
        "immagine": "images/mhs_268_pancreas_colorazione_ematossilina_eosina_h_e.jpg",
        "titolo": "MHS 268 - Pancreas (Colorazione: Ematossilina-Eosina / H&E)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Acini sierosi esocrini",
            "Granuli di zimogeno eosinofili apicali",
            "Isole di Langerhans endocrine pallide e vascolarizzate"
        ],
        "teoria": "Ghiandola anficrina: la componente esocrina produce enzimi digestivi, quella endocrina (isole) è distribuita nello stroma e secerne ormoni come insulina e glucagone."
    },
    {
        "id": 52,
        "immagine": "images/mhs_261_dotto_biliare_comune_coledoco.jpg",
        "titolo": "MHS 261 - Dotto biliare comune (Coledoco)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio cilindrico semplice e alto",
            "Lamina propria vascolarizzata",
            "Tonaca muscolare liscia sottile"
        ],
        "teoria": "Condotto finale del sistema biliare. L'epitelio partecipa alla modificazione della bile assorbendo fluidi prima dello sbocco duodenale."
    },
    {
        "id": 53,
        "immagine": "images/mh_109_esofago.jpg",
        "titolo": "MH 109 - Esofago",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio pavimentoso pluristratificato non cheratinizzato",
            "Ghiandole esofagee nella sottomucosa",
            "Tonaca muscolare in transizione da striata a liscia"
        ],
        "teoria": "Tubo di transito rapido del bolo alimentare. Il robusto epitelio protegge dalle abrasioni fisiche, mentre le ghiandole lubrificano il lume."
    },
    {
        "id": 54,
        "immagine": "images/mhs_234_esofago.jpg",
        "titolo": "MHS 234 - Esofago",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio pavimentoso pluristratificato non cheratinizzato",
            "Ghiandole esofagee nella sottomucosa",
            "Tonaca muscolare in transizione da striata a liscia"
        ],
        "teoria": "Tubo di transito rapido del bolo alimentare. Il robusto epitelio protegge dalle abrasioni fisiche, mentre le ghiandole lubrificano il lume."
    },
    {
        "id": 55,
        "immagine": "images/mh_111_giunzione_gastroesofagea.jpg",
        "titolo": "MH 111 - Giunzione gastroesofagea",
        "colorazione": "H&E",
        "caratteristiche": [
            "Transizione netta tra epitelio squamoso e cilindrico",
            "Comparsa delle fossette gastriche",
            "Muscolaris mucosae continua"
        ],
        "teoria": "Confine istologico netto tra esofago (protettivo) e stomaco (secernente), clinicamente rilevante per fenomeni di metaplasia da reflusso."
    },
    {
        "id": 56,
        "immagine": "images/mh_112_fondo_dello_stomaco.jpg",
        "titolo": "MH 112 - Fondo dello stomaco",
        "colorazione": "H&E / PAS",
        "caratteristiche": [
            "Fossette gastriche (foveole)",
            "Ghiandole tubulari ramificate proprie",
            "Cellule parietali eosinofile e principali basofile"
        ],
        "teoria": "La mucosa del fondo/corpo gastrico produce HCl e pepsinogeno. Uno spesso strato di muco protegge la parete dall'autodigestione."
    },
    {
        "id": 57,
        "immagine": "images/mh_113_fondo_dello_stomaco.jpg",
        "titolo": "MH 113 - Fondo dello stomaco",
        "colorazione": "H&E / PAS",
        "caratteristiche": [
            "Fossette gastriche (foveole)",
            "Ghiandole tubulari ramificate proprie",
            "Cellule parietali eosinofile e principali basofile"
        ],
        "teoria": "La mucosa del fondo/corpo gastrico produce HCl e pepsinogeno. Uno spesso strato di muco protegge la parete dall'autodigestione."
    },
    {
        "id": 58,
        "immagine": "images/mhs_247_fondo_dello_stomaco_colorazione_pas.jpg",
        "titolo": "MHS 247 - Fondo dello stomaco (Colorazione: PAS)",
        "colorazione": "H&E / PAS",
        "caratteristiche": [
            "Fossette gastriche (foveole)",
            "Ghiandole tubulari ramificate proprie",
            "Cellule parietali eosinofile e principali basofile"
        ],
        "teoria": "La mucosa del fondo/corpo gastrico produce HCl e pepsinogeno. Uno spesso strato di muco protegge la parete dall'autodigestione."
    },
    {
        "id": 59,
        "immagine": "images/mhs_251_fondo_dello_stomaco.jpg",
        "titolo": "MHS 251 - Fondo dello stomaco",
        "colorazione": "H&E / PAS",
        "caratteristiche": [
            "Fossette gastriche (foveole)",
            "Ghiandole tubulari ramificate proprie",
            "Cellule parietali eosinofile e principali basofile"
        ],
        "teoria": "La mucosa del fondo/corpo gastrico produce HCl e pepsinogeno. Uno spesso strato di muco protegge la parete dall'autodigestione."
    },
    {
        "id": 60,
        "immagine": "images/mh_016x_intestino_tenue.jpg",
        "titolo": "MH 016x - Intestino tenue",
        "colorazione": "H&E",
        "caratteristiche": [
            "Villi lunghi e digitiformi",
            "Assenza di ghiandole di Brunner e Placche di Peyer prominenti",
            "Cellule di Paneth alla base delle cripte"
        ],
        "teoria": "Segmento dedicato all'assorbimento massivo dei nutrienti, riconoscibile per esclusione delle caratteristiche di duodeno e ileo."
    },
    {
        "id": 61,
        "immagine": "images/mh_118_intestino_tenue.jpg",
        "titolo": "MH 118 - Intestino tenue",
        "colorazione": "H&E",
        "caratteristiche": [
            "Villi lunghi e digitiformi",
            "Assenza di ghiandole di Brunner e Placche di Peyer prominenti",
            "Cellule di Paneth alla base delle cripte"
        ],
        "teoria": "Segmento dedicato all'assorbimento massivo dei nutrienti, riconoscibile per esclusione delle caratteristiche di duodeno e ileo."
    },
    {
        "id": 62,
        "immagine": "images/mhs_272_duodeno_intestino_tenue.jpg",
        "titolo": "MHS 272 - Duodeno (Intestino tenue)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Villi intestinali sporgenti",
            "Ghiandole di Brunner nella sottomucosa",
            "Cripte di Lieberkühn basali"
        ],
        "teoria": "Le ghiandole di Brunner, tipiche del duodeno, secernono bicarbonato per neutralizzare l'acidità del chimo gastrico."
    },
    {
        "id": 63,
        "immagine": "images/mhs_219_digiuno_intestino_tenue.jpg",
        "titolo": "MHS 219 - Digiuno (Intestino tenue)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Villi lunghi e digitiformi",
            "Assenza di ghiandole di Brunner e Placche di Peyer prominenti",
            "Cellule di Paneth alla base delle cripte"
        ],
        "teoria": "Segmento dedicato all'assorbimento massivo dei nutrienti, riconoscibile per esclusione delle caratteristiche di duodeno e ileo."
    },
    {
        "id": 64,
        "immagine": "images/mh_119_ileo_intestino_tenue.jpg",
        "titolo": "MH 119 - Ileo (Intestino tenue)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Villi più corti e tozzi",
            "Abbondanti cellule caliciformi mucipare",
            "Placche di Peyer (grandi noduli linfatici)"
        ],
        "teoria": "Tratto distale dell'intestino tenue, deputato anche al campionamento antigenico grazie alle Placche di Peyer."
    },
    {
        "id": 65,
        "immagine": "images/mh_120_ileo_intestino_tenue.jpg",
        "titolo": "MH 120 - Ileo (Intestino tenue)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Villi più corti e tozzi",
            "Abbondanti cellule caliciformi mucipare",
            "Placche di Peyer (grandi noduli linfatici)"
        ],
        "teoria": "Tratto distale dell'intestino tenue, deputato anche al campionamento antigenico grazie alle Placche di Peyer."
    },
    {
        "id": 66,
        "immagine": "images/mhs_273_ileo_intestino_tenue.jpg",
        "titolo": "MHS 273 - Ileo (Intestino tenue)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Villi più corti e tozzi",
            "Abbondanti cellule caliciformi mucipare",
            "Placche di Peyer (grandi noduli linfatici)"
        ],
        "teoria": "Tratto distale dell'intestino tenue, deputato anche al campionamento antigenico grazie alle Placche di Peyer."
    },
    {
        "id": 67,
        "immagine": "images/mh_123_colon_intestino_crasso.jpg",
        "titolo": "MH 123 - Colon (Intestino crasso)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Assenza di villi (superficie piatta)",
            "Cripte di Lieberkühn dritte e ravvicinate",
            "Numerosissime cellule caliciformi mucipare"
        ],
        "teoria": "L'intestino crasso assorbe acqua ed elettroliti; l'abbondante muco protegge la parete dall'attrito delle feci disidratate."
    },
    {
        "id": 68,
        "immagine": "images/mhs_274_colon_intestino_crasso.jpg",
        "titolo": "MHS 274 - Colon (Intestino crasso)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Assenza di villi (superficie piatta)",
            "Cripte di Lieberkühn dritte e ravvicinate",
            "Numerosissime cellule caliciformi mucipare"
        ],
        "teoria": "L'intestino crasso assorbe acqua ed elettroliti; l'abbondante muco protegge la parete dall'attrito delle feci disidratate."
    },
    {
        "id": 69,
        "immagine": "images/mhs_258_giunzione_retto_anale.jpg",
        "titolo": "MHS 258 - Giunzione retto-anale",
        "colorazione": "H&E",
        "caratteristiche": [
            "Transizione da epitelio cilindrico a pavimentoso pluristratificato",
            "Cessazione delle cripte di Lieberkühn",
            "Plessi venosi emorroidari nella sottomucosa"
        ],
        "teoria": "Zona di transizione rilevante per patologie anorettali; il ritorno all'epitelio pavimentoso protegge dall'attrito durante la defecazione."
    },
    {
        "id": 70,
        "immagine": "images/mh_038_epiglottide.jpg",
        "titolo": "MH 038 - Epiglottide",
        "colorazione": "H&E / Resorcina-fucsina",
        "caratteristiche": [
            "Asse cartilagineo elastico centrale",
            "Faccia linguale pavimentosa pluristratificata",
            "Faccia respiratoria pseudostratificata ciliata"
        ],
        "teoria": "Valvola che protegge le vie aeree durante la deglutizione; la cartilagine elastica garantisce un rapido ritorno in posizione dopo ogni atto deglutitorio."
    },
    {
        "id": 71,
        "immagine": "images/mh_110_trachea_ed_esofago_vetrino_misto.jpg",
        "titolo": "MH 110 - Trachea ed Esofago (vetrino misto)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio pavimentoso pluristratificato non cheratinizzato",
            "Ghiandole esofagee nella sottomucosa",
            "Tonaca muscolare in transizione da striata a liscia"
        ],
        "teoria": "Tubo di transito rapido del bolo alimentare. Il robusto epitelio protegge dalle abrasioni fisiche, mentre le ghiandole lubrificano il lume."
    },
    {
        "id": 72,
        "immagine": "images/mh_135_laringe.jpg",
        "titolo": "MH 135 - Laringe",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio misto: respiratorio e pavimentoso sulle corde vocali vere",
            "Telaio di cartilagine ialina ed elastica",
            "Muscolo scheletrico (muscolo vocale)"
        ],
        "teoria": "Organo della fonazione; sulle corde vocali vere, sottoposte a forte sfregamento, l'epitelio diventa pavimentoso stratificato per resistere all'usura."
    },
    {
        "id": 73,
        "immagine": "images/mh_136_trachea.jpg",
        "titolo": "MH 136 - Trachea",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio respiratorio pseudostratificato ciliato con caliciformi",
            "Ghiandole miste nella lamina propria",
            "Anelli a C di cartilagine ialina"
        ],
        "teoria": "L'anello cartilagineo mantiene pervio il lume, mentre il sistema mucociliare intrappola ed espelle il particolato inalato."
    },
    {
        "id": 74,
        "immagine": "images/mhs_222_trachea.jpg",
        "titolo": "MHS 222 - Trachea",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio respiratorio pseudostratificato ciliato con caliciformi",
            "Ghiandole miste nella lamina propria",
            "Anelli a C di cartilagine ialina"
        ],
        "teoria": "L'anello cartilagineo mantiene pervio il lume, mentre il sistema mucociliare intrappola ed espelle il particolato inalato."
    },
    {
        "id": 75,
        "immagine": "images/mh_146_uretere.jpg",
        "titolo": "MH 146 - Uretere",
        "colorazione": "H&E",
        "caratteristiche": [
            "Lume a stella per ripiegamento della mucosa",
            "Urotelio (epitelio di transizione)",
            "Spessa tonaca muscolare liscia"
        ],
        "teoria": "Condotto che convoglia l'urina dal rene alla vescica mediante onde peristaltiche, favorite dallo spesso strato muscolare."
    },
    {
        "id": 76,
        "immagine": "images/mh_147_vescica.jpg",
        "titolo": "MH 147 - Vescica",
        "colorazione": "H&E",
        "caratteristiche": [
            "Urotelio con cellule ad ombrello superficiali",
            "Mucosa plicata a organo vuoto",
            "Muscolo detrusore in tre strati"
        ],
        "teoria": "L'urotelio protegge dalla tossicità dell'urina; le cellule ad ombrello si appiattiscono quando la vescica si riempie."
    },
    {
        "id": 77,
        "immagine": "images/mhs_214_vescica.jpg",
        "titolo": "MHS 214 - Vescica",
        "colorazione": "H&E",
        "caratteristiche": [
            "Urotelio con cellule ad ombrello superficiali",
            "Mucosa plicata a organo vuoto",
            "Muscolo detrusore in tre strati"
        ],
        "teoria": "L'urotelio protegge dalla tossicità dell'urina; le cellule ad ombrello si appiattiscono quando la vescica si riempie."
    },
    {
        "id": 78,
        "immagine": "images/mh_174a_ghiandola_mammaria.jpg",
        "titolo": "MH 174a - Ghiandola mammaria",
        "colorazione": "H&E",
        "caratteristiche": [
            "Ghiandola tubulo-alveolare composta",
            "Stato inattivo con connettivo/adipe abbondante",
            "Stato attivo con alveoli secernenti ipertrofici"
        ],
        "teoria": "L'architettura della mammella cambia radicalmente con gli stati ormonali (pubertà, gravidanza, allattamento, menopausa)."
    },
    {
        "id": 79,
        "immagine": "images/mhs_218_ghiandola_mammaria.jpg",
        "titolo": "MHS 218 - Ghiandola mammaria",
        "colorazione": "H&E",
        "caratteristiche": [
            "Ghiandola tubulo-alveolare composta",
            "Stato inattivo con connettivo/adipe abbondante",
            "Stato attivo con alveoli secernenti ipertrofici"
        ],
        "teoria": "L'architettura della mammella cambia radicalmente con gli stati ormonali (pubertà, gravidanza, allattamento, menopausa)."
    },
    {
        "id": 80,
        "immagine": "images/mhs_217_ovidutto_tuba_di_falloppio.jpg",
        "titolo": "MHS 217 - Ovidutto (Tuba di Falloppio)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Mucosa con pliche arborescenti complesse",
            "Epitelio cilindrico con cellule ciliate e secretorie",
            "Tonaca muscolare per la peristalsi tubarica"
        ],
        "teoria": "Sede della fecondazione; le pliche rallentano e guidano l'oocita, nutrendo lo zigote nei primi stadi di sviluppo."
    },
    {
        "id": 81,
        "immagine": "images/mhs_220_ovidutto_tuba_di_falloppio.jpg",
        "titolo": "MHS 220 - Ovidutto (Tuba di Falloppio)",
        "colorazione": "H&E",
        "caratteristiche": [
            "Mucosa con pliche arborescenti complesse",
            "Epitelio cilindrico con cellule ciliate e secretorie",
            "Tonaca muscolare per la peristalsi tubarica"
        ],
        "teoria": "Sede della fecondazione; le pliche rallentano e guidano l'oocita, nutrendo lo zigote nei primi stadi di sviluppo."
    },
    {
        "id": 82,
        "immagine": "images/mhs_259_ovaio.jpg",
        "titolo": "MHS 259 - Ovaio",
        "colorazione": "H&E",
        "caratteristiche": [
            "Epitelio germinativo esterno su tonaca albuginea",
            "Corticale con follicoli a vari stadi maturativi",
            "Midollare vascolarizzata priva di follicoli"
        ],
        "teoria": "L'ovaio riflette il turnover ciclico mestruale: follicoli in evoluzione, corpi lutei e corpi albicanti sono spesso compresenti."
    },
    {
        "id": 83,
        "immagine": "images/mhs_267_testicolo.jpg",
        "titolo": "MHS 267 - Testicolo",
        "colorazione": "H&E",
        "caratteristiche": [
            "Tubuli seminiferi contorti con epitelio germinativo",
            "Cellule del Sertoli di sostegno",
            "Cellule di Leydig interstiziali per la steroidogenesi"
        ],
        "teoria": "L'architettura testicolare, con la barriera emato-testicolare, protegge gli spermatozoi maturi; nei tubuli si osservano tutte le tappe della spermatogenesi."
    },
    {
        "id": 84,
        "immagine": "images/mh_020a_muso_di_feto_di_maiale.jpg",
        "titolo": "MH 020a - Muso di feto di maiale",
        "colorazione": "H&E / Tricromica di Masson",
        "caratteristiche": [
            "Alta cellularità e indice mitotico elevato",
            "Aree di ossificazione primaria o cartilagine di Meckel",
            "Abbozzi di organi (gemme, placodi) in formazione"
        ],
        "teoria": "I preparati embrionali mostrano tessuti ancora in via di differenziazione, con architetture primordiali e aree di emopoiesi extraepatica."
    },
    {
        "id": 85,
        "immagine": "images/mh_020b_muso_di_feto_di_maiale.jpg",
        "titolo": "MH 020b - Muso di feto di maiale",
        "colorazione": "H&E / Tricromica di Masson",
        "caratteristiche": [
            "Alta cellularità e indice mitotico elevato",
            "Aree di ossificazione primaria o cartilagine di Meckel",
            "Abbozzi di organi (gemme, placodi) in formazione"
        ],
        "teoria": "I preparati embrionali mostrano tessuti ancora in via di differenziazione, con architetture primordiali e aree di emopoiesi extraepatica."
    },
    {
        "id": 86,
        "immagine": "images/mhs_242_viso_di_embrione.jpg",
        "titolo": "MHS 242 - Viso di embrione",
        "colorazione": "H&E / Tricromica di Masson",
        "caratteristiche": [
            "Alta cellularità e indice mitotico elevato",
            "Aree di ossificazione primaria o cartilagine di Meckel",
            "Abbozzi di organi (gemme, placodi) in formazione"
        ],
        "teoria": "I preparati embrionali mostrano tessuti ancora in via di differenziazione, con architetture primordiali e aree di emopoiesi extraepatica."
    }
];
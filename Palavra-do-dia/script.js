document.addEventListener("DOMContentLoaded", () => {
    const monthSelector = document.getElementById("monthSelector");
    const daysContainer = document.getElementById("days");
  
    const referenceSpan = document.getElementById("passage-reference");
    const textSpan = document.getElementById("passage-text");
    const explanationSpan = document.getElementById("passage-explanation");
  
    const daysInMonth = {
      january: 31,
      february: 28,
      march: 31,
      april: 30,
      may: 31,
      june: 30,
      july: 31,
      august: 31,
      september: 30,
      october: 31,
      november: 30,
      december: 31,
       // pode alterar para 29 se quiser tratar ano bissexto depois
      // março a dezembro se quiser adicionar
    };
  
    const passages = {
      january: {
        1: {
            reference: "Gênesis 1:1",
            text: "No princípio, Deus criou o céu e a terra.",
            explanation: "Tudo começa com Deus. A criação não é fruto do acaso, mas de um ato livre e amoroso do Criador. O Catecismo (CIC 279-282) ensina que este versículo expressa a fé fundamental de que Deus é o autor de tudo. Ao iniciar o ano com essa passagem, reconhecemos que tudo pertence a Ele e que nosso tempo, trabalho e vida devem ser orientados por sua vontade."
          },
          2: {
            reference: "Gênesis 1:27",
            text: "Deus criou o homem à sua imagem, à imagem de Deus o criou: homem e mulher os criou.",
            explanation: "Esse versículo revela a dignidade única da pessoa humana. Criados à imagem de Deus, somos chamados a refletir Seu amor, liberdade e comunhão. A Igreja ensina (CIC 355-357) que cada pessoa tem valor infinito e é chamada à santidade. A diferença entre homem e mulher não é oposição, mas complementaridade."
          },
          3: {
            reference: "Gênesis 2:2-3",
            text: "No sétimo dia, Deus concluiu a obra que tinha feito; e descansou.",
            explanation: "O descanso de Deus é modelo para o nosso. O domingo, para o cristão, é memorial da criação e da ressurreição. O Catecismo (CIC 2168-2195) convida à santificação do dia do Senhor por meio da Missa, do repouso e da caridade. Deus nos convida a parar para adorá-Lo e reconhecer nossa dependência d’Ele."
          },
          4: {
            reference: "Gênesis 3:15",
            text: "Porei inimizade entre ti e a mulher, entre a tua descendência e a dela.",
            explanation: "Este versículo é chamado de 'Protoevangelho', o primeiro anúncio da salvação. A Igreja vê aqui a promessa do Messias e de Maria, a nova Eva. (CIC 410-411). Mesmo após o pecado, Deus anuncia a vitória do bem sobre o mal. É um lembrete de que a salvação estava nos planos divinos desde o início."
          },
          5: {
            reference: "Gênesis 4:10",
            text: "O sangue do teu irmão clama a mim desde a terra.",
            explanation: "O pecado de Caim mostra o peso do mal e da injustiça. O sangue inocente continua a clamar nos dias de hoje — nos abortos, nas guerras, na miséria. A Igreja chama à conversão e à justiça. Como irmãos, somos guardiões uns dos outros (CIC 2259)."
          },
          6: {
            reference: "Gênesis 6:9",
            text: "Noé era um homem justo e íntegro entre os seus contemporâneos.",
            explanation: "Noé é exemplo de fidelidade num mundo corrompido. Mesmo quando todos se afastam de Deus, é possível viver com retidão. O Catecismo (CIC 58) vê em Noé uma figura de Cristo, o Justo por excelência, e da Igreja, que salva em meio ao dilúvio do pecado."
          },
          7: {
            reference: "Gênesis 7:16",
            text: "O Senhor fechou a porta atrás de Noé.",
            explanation: "Quando Deus fecha uma porta, é proteção e juízo ao mesmo tempo. O dilúvio é imagem do Batismo, que purifica e dá um novo começo (CIC 1219). Estar dentro da arca é estar sob a obediência de Deus, que conduz e salva."
          },
          8: {
            reference: "Gênesis 9:13",
            text: "Ponho o meu arco nas nuvens como sinal da aliança entre mim e a terra.",
            explanation: "O arco-íris é símbolo da aliança e da misericórdia. Deus promete não destruir novamente o mundo. A Igreja vê aqui o anúncio da Nova Aliança em Cristo. Somos povo da Aliança, chamados a viver como filhos reconciliados com o Pai (CIC 56-58)."
          },
          9: {
            reference: "Gênesis 11:9",
            text: "Por isso se chamou Babel, porque ali o Senhor confundiu a linguagem de toda a terra.",
            explanation: "A Torre de Babel representa o orgulho humano que tenta subir aos céus sem Deus. O Espírito Santo, em Pentecostes, reverte Babel ao unir todos na mesma fé (CIC 57, 731). A comunhão só é possível por meio de Deus, não do orgulho."
          },
          10: {
            reference: "Gênesis 12:1",
            text: "Sai da tua terra, da tua parentela... e vai para a terra que eu te mostrarei.",
            explanation: "A vocação de Abraão é o início do povo escolhido. Ele obedece com fé, mesmo sem saber o destino. Somos chamados a sair de nossas seguranças para seguir Deus. Abraão é 'pai da fé' (CIC 145-146)."
          },
          11: {
            reference: "Gênesis 15:6",
            text: "Abrão teve fé no Senhor, que considerou isso como justiça.",
            explanation: "A fé de Abraão é modelo para todos nós. O Catecismo (CIC 146) afirma que ele é o primeiro a escutar o chamado de Deus e responder com obediência total. Essa fé é contada como justiça porque é uma adesão livre e confiante ao plano de Deus, mesmo sem ver o cumprimento imediato."
          },
          12: {
            reference: "Gênesis 17:5",
            text: "Teu nome será Abraão, porque farei de ti o pai de uma multidão de nações.",
            explanation: "A mudança de nome indica uma nova missão e identidade em Deus. Abraão se torna o pai da fé, não apenas dos judeus, mas de todos os que creem (cf. CIC 59-60). Na Nova Aliança, somos filhos de Abraão pela fé em Cristo."
          },
          13: {
            reference: "Gênesis 18:14",
            text: "Existe algo impossível para o Senhor? No tempo determinado voltarei a ti, e Sara terá um filho.",
            explanation: "Deus revela seu poder em realizar o impossível. A esterilidade de Sara é superada pela promessa divina. Essa passagem nos lembra que, na fé, devemos esperar contra toda esperança (CIC 273). Deus cumpre Suas promessas no tempo certo."
          },
          14: {
            reference: "Gênesis 19:26",
            text: "A mulher de Lot olhou para trás e transformou-se numa estátua de sal.",
            explanation: "Olhar para trás com saudade do pecado é negar o chamado à conversão. A tradição cristã vê aqui um alerta: a salvação exige decisão firme e renúncia ao passado. Jesus mesmo usa essa figura para ensinar vigilância (cf. Lc 17:32; CIC 1811)."
          },
          15: {
            reference: "Gênesis 21:1-2",
            text: "O Senhor visitou Sara, como havia dito, e ela concebeu e deu à luz um filho a Abraão.",
            explanation: "O nascimento de Isaac é cumprimento da promessa e sinal da fidelidade divina. A Igreja vê aqui uma imagem da encarnação: o impossível se torna real pela ação de Deus. A confiança em Deus gera vida (CIC 162, 706)."
          },
          16: {
            reference: "Gênesis 22:8",
            text: "Deus proverá para si o cordeiro para o holocausto, meu filho.",
            explanation: "Essa frase resume a confiança de Abraão diante do sacrifício de Isaque. Ele crê que Deus proverá. E de fato, no momento certo, Deus intervém. Essa cena prefigura o sacrifício de Cristo, o verdadeiro Cordeiro (cf. CIC 605, 2572)."
          },
          17: {
            reference: "Gênesis 22:12",
            text: "Agora sei que temes a Deus, pois não me recusaste teu filho único.",
            explanation: "Deus prova a fé de Abraão, não para conhecer, mas para revelar a profundidade da sua confiança. Essa entrega total antecipa a do Pai que entrega seu Filho por nós. É o tipo de obediência que gera bênção para todas as nações (CIC 2572, 706)."
          },
          18: {
            reference: "Gênesis 24:12",
            text: "Senhor, Deus de meu senhor Abraão, dá-me hoje um sinal favorável.",
            explanation: "Esta oração do servo de Abraão ensina sobre discernimento e confiança. Ele pede a Deus que guie sua escolha. O Catecismo (CIC 2826) ensina que devemos confiar nossa vontade a Deus, sabendo que Ele conduz todas as coisas para o bem daqueles que O amam (Rm 8:28)."
          },
          19: {
            reference: "Gênesis 25:23",
            text: "Dois povos há no teu ventre... o mais velho servirá ao mais novo.",
            explanation: "Deus escolhe de forma misteriosa. Jacó é escolhido antes mesmo de nascer, mostrando que a eleição divina não depende de méritos, mas do plano salvífico de Deus. É figura da graça que supera as expectativas humanas (CIC 489, 705)."
          },
          20: {
            reference: "Gênesis 28:12",
            text: "Jacó teve um sonho: uma escada apoiada na terra e o seu topo tocava o céu.",
            explanation: "A escada entre o céu e a terra é símbolo da ligação entre Deus e os homens. Jesus, no Evangelho (Jo 1:51), identifica-se com essa escada. Ele é o mediador entre o céu e a terra. A Igreja ensina que em Cristo, o céu se abre para nós (CIC 1026)."
          },
          21: {
            reference: "Gênesis 32:28",
            text: "Teu nome não será mais Jacó, mas Israel, porque lutaste com Deus e com os homens e venceste.",
            explanation: "A mudança de nome para Israel marca a identidade do povo escolhido. A luta de Jacó com o anjo simboliza a perseverança na fé e na oração. A tradição católica vê aqui a luta interior de todo crente em busca da bênção de Deus (CIC 2573)."
          },
          22: {
            reference: "Gênesis 37:28",
            text: "Venderam José aos ismaelitas por vinte moedas de prata.",
            explanation: "José é vendido por seus irmãos, figura de Cristo traído e entregue por moedas. Sua história é de sofrimento, perdão e redenção — um prenúncio da salvação em Jesus. A Igreja vê nele uma imagem da Providência divina que conduz tudo para o bem (CIC 312)."
          },
          23: {
            reference: "Gênesis 39:21",
            text: "O Senhor estava com José e lhe mostrou benevolência.",
            explanation: "Mesmo preso injustamente, José encontra graça diante de Deus. Essa fidelidade no sofrimento é modelo para os cristãos perseguidos por amor à justiça. Deus permanece conosco mesmo nas provações (CIC 313, 2016)."
          },
          24: {
            reference: "Gênesis 41:16",
            text: "José respondeu ao faraó: 'Não sou eu; Deus é quem dará a resposta favorável ao faraó.'",
            explanation: "José reconhece que todo dom vem de Deus. A sabedoria verdadeira é dom do Espírito Santo. A humildade de José o eleva, e ele se torna instrumento da salvação de muitos — imagem do Cristo servidor (CIC 1831, 2540)."
          },
          25: {
            reference: "Gênesis 45:7-8",
            text: "\"Foi Deus quem me enviou adiante de vós para salvar vossas vidas.\"",
            explanation: "José reconhece o plano de Deus por trás das tragédias. Ele perdoa seus irmãos, antecipando o perdão cristão. A providência transforma o mal em bem — verdade central da fé católica (CIC 313)."
          },
          26: {
            reference: "Gênesis 46:4",
            text: "\"Eu mesmo descerei contigo ao Egito, e eu mesmo te farei subir de novo.\"",
            explanation: "Deus promete estar com Jacó em sua descida ao Egito. Essa descida prefigura o Exílio e também a descida de Cristo aos mortos. A presença de Deus conosco nas 'descidas da vida' é certeza de redenção futura (CIC 631, 706)."
          },
          27: {
            reference: "Gênesis 49:10",
            text: "O cetro não se afastará de Judá... até que venha aquele a quem pertence.",
            explanation: "Profecia messiânica clara: o rei que virá de Judá é o Cristo. A Igreja sempre viu nesse versículo o anúncio da vinda de Jesus, o Rei prometido. É um dos pilares do anúncio do Antigo Testamento (CIC 522, 438)."
          },
          28: {
            reference: "Gênesis 50:20",
            text: "\"Vós pensastes me fazer o mal, mas Deus o transformou em bem.\"",
            explanation: "Síntese da providência divina: Deus transforma as intenções más em graça. Isso é especialmente verdadeiro na Cruz de Cristo, onde o maior mal se tornou a maior vitória (CIC 312)."
          },
          29: {
            reference: "Gênesis 50:24",
            text: "\"Deus certamente vos visitará e vos fará subir desta terra para a terra que prometeu.\"",
            explanation: "José morre com esperança na promessa divina. Essa fé na promessa se cumpre em Moisés, e mais plenamente em Cristo. A Igreja vê aqui a esperança escatológica que nos sustenta na espera da Terra Prometida definitiva: o Céu (CIC 1817)."
          },
          30: {
            reference: "Gênesis 12:2-3",
            text: "\"Farei de ti uma grande nação... em ti serão benditas todas as famílias da terra.\"",
            explanation: "Essa promessa a Abraão é fundamental: nele todas as nações são abençoadas. Cristo, descendente de Abraão, cumpre essa bênção universal. O Catecismo afirma que o povo de Deus nasce com essa aliança (CIC 59, 706)."
          },
          31: {
            reference: "Gênesis 3:15",
            text: "\"Porei inimizade entre ti e a mulher, entre a tua descendência e a dela.\"",
            explanation: "O chamado Protoevangelho: a primeira profecia da vitória de Cristo sobre o pecado. A mulher é figura de Maria, a nova Eva, que com seu sim colabora na redenção. Essa passagem é base mariana e cristológica essencial (CIC 410-411, 489)."
          },
        
      },
      february: {
        1: {
            reference: "Êxodo 1:8",
            text: "Levantou-se um novo rei sobre o Egito, que não conhecia José.",
            explanation: "Com o novo faraó, o povo de Israel passa da honra à escravidão. Isso marca o início da necessidade de libertação. A Igreja vê aqui o início do drama salvífico que culminará na Páscoa, prefiguração da Páscoa de Cristo (CIC 1093)."
          },
          2: {
            reference: "Êxodo 2:10",
            text: "E ela o chamou Moisés, pois disse: ‘Tirei-o das águas’.",
            explanation: "O nome de Moisés já aponta sua missão: libertar o povo através das 'águas'. Ele é tipo de Cristo, que nos liberta pelo batismo. Moisés é figura do Salvador (CIC 1094, 2574)."
          },
          3: {
            reference: "Êxodo 3:14",
            text: "Disse Deus a Moisés: ‘EU SOU aquele que sou’.",
            explanation: "A revelação do nome de Deus: o Ser por excelência, eterno e fiel. Esse nome é sagrado e foi plenamente revelado por Cristo, o ‘Eu Sou’ (Jo 8:58). A Igreja guarda esse mistério com profunda reverência (CIC 203-206)."
          },
          4: {
            reference: "Êxodo 4:12",
            text: "Agora vai, e eu estarei com tua boca e te ensinarei o que hás de dizer.",
            explanation: "Moisés hesita, mas Deus o capacita. Assim também é com os profetas e os apóstolos: Deus escolhe os fracos e os torna fortes. Uma lição de confiança na missão (CIC 2575)."
          },
          5: {
            reference: "Êxodo 5:1",
            text: "Deixa ir o meu povo, para que me celebre uma festa no deserto.",
            explanation: "A primeira exigência de Deus: a libertação para o culto. A liturgia, o louvor e a adoração são finalidade da libertação. É uma imagem do verdadeiro culto no Espírito e na verdade que Cristo nos ensina (CIC 2099, 2100)."
          },
          6: {
            reference: "Êxodo 6:7",
            text: "Serei vosso Deus, e vós sereis meu povo.",
            explanation: "A essência da Aliança: pertencimento mútuo. Esse é o coração do relacionamento com Deus — uma aliança de amor que se realiza plenamente na Nova Aliança em Cristo (CIC 62, 1612)."
          },
          7: {
            reference: "Êxodo 7:5",
            text: "Os egípcios saberão que eu sou o Senhor, quando eu estender minha mão contra o Egito.",
            explanation: "As pragas não são só castigos, mas revelações do verdadeiro Deus. A catequese litúrgica da Igreja recorda como Deus age na história para salvar (CIC 1099, 2577)."
          },
          8: {
            reference: "Êxodo 12:13",
            text: "Quando eu vir o sangue, passarei por cima, e não haverá entre vós praga destruidora.",
            explanation: "A Páscoa é o ápice do Êxodo. O sangue do cordeiro livra da morte, antecipando o sacrifício de Cristo. Essa passagem é central na liturgia e na teologia da Redenção (CIC 571-578, 1334-1364)."
          },
          9: {
            reference: "Êxodo 14:21-22",
            text: "As águas se dividiram, e os filhos de Israel passaram a pé enxuto pelo meio do mar.",
            explanation: "A travessia do Mar Vermelho é figura do Batismo: passagem da escravidão para a liberdade, da morte para a vida. A Igreja canta essa passagem na Vigília Pascal como memorial da salvação (CIC 1221, 1174)."
          },
          10: {
            reference: "Êxodo 15:2",
            text: "O Senhor é minha força e meu cântico, tornou-se minha salvação.",
            explanation: "O cântico de Moisés é o primeiro hino de ação de graças da Bíblia. A Igreja herda essa tradição de louvor pela salvação operada por Deus, especialmente no canto litúrgico (CIC 2641, 1091)."
          },
          11: {
            reference: "Êxodo 16:4",
            text: "Farei chover para vós o pão do céu.",
            explanation: "O maná é alimento providenciado por Deus e prefigura a Eucaristia, o verdadeiro pão do céu (Jo 6). A Igreja vê no maná uma figura clara do Corpo de Cristo na Sagrada Comunhão (CIC 1094, 1334)."
          },
          12: {
            reference: "Êxodo 17:6",
            text: "Ferirás a rocha, e dela sairá água para o povo beber.",
            explanation: "A rocha ferida simboliza Cristo, de cujo lado aberto jorraram sangue e água. A água viva representa o Batismo e o Espírito Santo (1Cor 10:4; CIC 694, 2562)."
          },
          13: {
            reference: "Êxodo 19:5-6",
            text: "Sereis minha propriedade particular entre todos os povos... um reino de sacerdotes e uma nação santa.",
            explanation: "Israel é chamado à santidade e ao sacerdócio universal. Isso se cumpre na Igreja, o novo povo de Deus (1Pd 2:9; CIC 1539-1540)."
          },
          14: {
            reference: "Êxodo 20:1-3",
            text: "Eu sou o Senhor, teu Deus... não terás outros deuses diante de mim.",
            explanation: "O Decálogo é o fundamento da moral cristã. Os Dez Mandamentos expressam a aliança com Deus e são caminho de vida plena. A Igreja os ensina como base da vida moral (CIC 2052-2074)."
          },
          15: {
            reference: "Êxodo 24:8",
            text: "Eis o sangue da aliança que o Senhor fez convosco.",
            explanation: "Moisés sela a Aliança com sangue, prefigurando a Nova Aliança no Sangue de Cristo. A Eucaristia é memorial desse sacrifício perfeito (Lc 22:20; CIC 613, 1339)."
          },
          16: {
            reference: "Êxodo 25:8",
            text: "Construirão para mim um santuário, para que eu habite no meio deles.",
            explanation: "O tabernáculo é o sinal da presença de Deus. A Igreja vê aqui o anúncio da encarnação e da presença real de Cristo no tabernáculo eucarístico (CIC 1091-1092, 1379)."
          },
          17: {
            reference: "Êxodo 32:1",
            text: "Faz-nos um deus que vá à nossa frente!",
            explanation: "A idolatria do bezerro de ouro revela a tendência humana de desviar-se de Deus. A Igreja ensina a vigilância contra os ídolos modernos (CIC 2112-2114)."
          },
          18: {
            reference: "Êxodo 32:14",
            text: "Então o Senhor arrependeu-se do mal que dissera que faria ao seu povo.",
            explanation: "Essa linguagem humana expressa a misericórdia de Deus diante da intercessão. Moisés é figura de Cristo, que intercede por nós continuamente (CIC 2577, 2634)."
          },
          19: {
            reference: "Êxodo 33:14",
            text: "Minha presença irá contigo e te darei descanso.",
            explanation: "Deus caminha com seu povo. Essa promessa se cumpre plenamente em Jesus: ‘Eis que estarei convosco todos os dias’ (Mt 28:20; CIC 2566, 2697)."
          },
          20: {
            reference: "Êxodo 34:6-7",
            text: "Senhor, Deus compassivo e misericordioso, paciente, rico em bondade e fidelidade.",
            explanation: "Essa é uma das autodefinições mais importantes de Deus no Antigo Testamento. A Igreja reconhece aqui os atributos essenciais da misericórdia divina (CIC 210, 211, 1846)."
          },
            21: {
              reference: "Êxodo 40:34",
              text: "A nuvem cobriu a tenda da reunião, e a glória do Senhor encheu o tabernáculo.",
              explanation: "A presença de Deus se manifesta no tabernáculo, simbolizando sua habitação entre seu povo. A Igreja vê nisso uma prefiguração da presença real de Cristo na Eucaristia e na Igreja (CIC 1152, 1374)."
            },
            22: {
              reference: "Êxodo 16:31",
              text: "O maná era como semente de coentro, de cor branca, e tinha o sabor de bolos de mel.",
              explanation: "O maná prefigura o pão celestial, o Corpo de Cristo na Eucaristia. A doçura do maná aponta para o sabor da comunhão com Deus (Jo 6:31-35; CIC 1323)."
            },
            23: {
              reference: "Êxodo 3:2",
              text: "O anjo do Senhor apareceu a Moisés numa chama de fogo, do meio de uma sarça.",
              explanation: "A sarça ardente é símbolo da presença de Deus no meio do sofrimento e da provação. A Igreja vê nisso a teofania e a manifestação divina (CIC 2574, 2593)."
            },
            24: {
              reference: "Êxodo 17:8-9",
              text: "Então veio Amaleque e pelejou contra Israel em Refidim. Moisés disse a Josué: ‘Escolhe-nos homens e sai para pelejar contra Amaleque’.",
              explanation: "A batalha contra Amaleque é uma metáfora da luta constante contra o mal. A intercessão de Moisés, com as mãos erguidas, prefigura a intercessão de Cristo na cruz, em nosso favor (CIC 1065, 2729)."
            },
            25: {
              reference: "Êxodo 6:6-7",
              text: "Eu sou o Senhor, e vos livrarei das vossas opressões, e vos redimirei com braço estendido.",
              explanation: "A libertação do Egito prefigura a redenção por Cristo. Deus se revela como Redentor, e na Páscoa de Cristo, somos libertados do pecado (CIC 541, 1346)."
            },
            26: {
              reference: "Êxodo 5:1-2",
              text: "Moisés e Aarão disseram ao faraó: ‘Assim diz o Senhor, Deus de Israel: Deixa ir o meu povo, para que me celebre uma festa no deserto’.",
              explanation: "A liberdade para adorar Deus é o objetivo da libertação. A verdadeira liberdade é viver para Deus. Na Igreja, a adoração é o centro da nossa vida (CIC 2089-2094)."
            },
            27: {
              reference: "Êxodo 14:15",
              text: "O Senhor disse a Moisés: ‘Por que clamas a mim? Dize aos filhos de Israel que marchem’.",
              explanation: "Deus exige ação junto com fé. Quando o povo de Deus se move, Ele abre os caminhos. A Igreja ensina que a fé sem obras é morta (Tiago 2:17; CIC 1815)."
            },
            28: {
              reference: "Êxodo 14:30-31",
              text: "Naquele dia, o Senhor salvou Israel da mão dos egípcios. E Israel viu os egípcios mortos à praia do mar.",
              explanation: "A vitória no Mar Vermelho é símbolo da vitória de Cristo sobre as forças do mal. A Igreja vive essa vitória de Cristo na Páscoa, a verdadeira libertação (CIC 1221, 1174)."
            },
            29: {
              reference: "Êxodo 19:3-6",
              text: "Moisés subiu ao monte de Deus e chamou-lhe o Senhor do monte, dizendo: ‘Assim dirás à casa de Jacó, e falarás aos filhos de Israel: Vós mesmos haveis visto o que fiz aos egípcios...’",
              explanation: "Deus reafirma sua Aliança com Israel. A Igreja se vê como o novo Israel, chamado a viver conforme os mandamentos e a graça de Deus (CIC 751, 763)."
            },
                      
      },
      march: {
        1: {
          reference: "Êxodo 14:21-22",
          text: "Então Moisés estendeu a mão sobre o mar, e o Senhor fez retirar-se o mar com um forte vento oriental durante toda a noite, e fez o mar secar, e as águas se dividiram.",
          explanation: "A travessia do mar Vermelho é um sinal da libertação de Deus. Para a Igreja, isso é visto como um símbolo do batismo, que nos liberta do pecado e nos conduz à salvação (1Cor 10:2, CIC 1219)."
        },
        2: {
          reference: "Êxodo 14:30-31",
          text: "Naquele dia, o Senhor salvou Israel da mão dos egípcios, e Israel viu os egípcios mortos na praia do mar. E o povo temeu ao Senhor e creu no Senhor e em Moisés, seu servo.",
          explanation: "Este evento é visto como a vitória de Deus sobre os inimigos do Seu povo. A Igreja ensina que Deus continua a proteger e libertar Seu povo através de Cristo, que vence o pecado e a morte para todos nós (Jo 16:33, CIC 1223)."
        },
        3: {
          reference: "Êxodo 15:1-2",
          text: "Então cantou Moisés e os filhos de Israel este cântico ao Senhor, e disseram: 'Cantarei ao Senhor, porque excelso é; lançou no mar o cavalo e o seu cavaleiro.'",
          explanation: "O cântico de Moisés é um hino de louvor pela salvação divina. A Igreja reconhece que, por meio da celebração da Eucaristia, nós também cantamos a vitória de Cristo sobre o pecado e a morte (CIC 1069)."
        },
        4: {
          reference: "Êxodo 17:5-6",
          text: "O Senhor disse a Moisés: 'Passa diante do povo e toma com você alguns dos anciãos de Israel; leva na mão a vara com que feriste o rio, e vai; eis que estarei diante de ti sobre a rocha em Horebe; tu ferirás a rocha, e dela sairá água, para que o povo beba.'",
          explanation: "A água que brota da rocha simboliza a graça divina que sacia nossa sede espiritual. A Igreja ensina que, assim como a rocha foi ferida, Cristo foi crucificado para nos dar a água viva, que é o Espírito Santo (Jo 4:10-14, CIC 1215)."
        },
        5: {
          reference: "Êxodo 17:7",
          text: "E chamou aquele lugar Massá e Meribá, por causa da contenda dos filhos de Israel, e porque tentaram ao Senhor, dizendo: 'Está o Senhor no meio de nós, ou não?'",
          explanation: "Este versículo ilustra a dúvida do povo de Israel quanto à presença de Deus. A Igreja ensina que devemos confiar plenamente na presença constante de Deus em nossas vidas, especialmente em tempos de dificuldade (CIC 303)."
        },
        6: {
          reference: "Êxodo 18:13-14",
          text: "No dia seguinte, Moisés assentou-se para julgar o povo, e o povo ficou em pé diante de Moisés, desde a manhã até a tarde.",
          explanation: "Moisés assume uma função de liderança e julgamento, mostrando a necessidade de orientação divina para governar. A Igreja ensina que a autoridade legítima é um dom de Deus, e devemos confiar nas lideranças que Ele escolhe (CIC 887)."
        },
        7: {
          reference: "Êxodo 19:3-6",
          text: "Moisés subiu a Deus, e o Senhor o chamou do monte, dizendo: 'Assim dirás à casa de Jacó e anuncias aos filhos de Israel: Vós mesmos vistes o que fiz aos egípcios, e como vos tomei sobre as asas da águia, e vos trouxe a mim.'",
          explanation: "Deus lembra o Seu poder ao libertar os israelitas. A Igreja vê isso como um sinal do cuidado de Deus por Seu povo, e também nos ensina que Ele deseja nos reunir e cuidar de nós como uma águia cuida dos seus filhotes (CIC 759)."
        },
        8: {
          reference: "Êxodo 19:5-6",
          text: "Agora, pois, se diligentemente ouvirdes a minha voz, e guardardes a minha aliança, sereis para mim a minha propriedade peculiar entre todos os povos, porque toda a terra é minha. E vós me sereis um reino de sacerdotes e uma nação santa.",
          explanation: "Deus convida o povo a se comprometer com Sua aliança. A Igreja ensina que, como membros do Corpo de Cristo, todos os cristãos são chamados a ser um 'reino de sacerdotes', chamados a viver a santidade e a mediadora da graça de Deus no mundo (CIC 784)."
        },
        9: {
          reference: "Êxodo 20:1-2",
          text: "E falou Deus todas estas palavras, dizendo: 'Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão.'",
          explanation: "A revelação dos Dez Mandamentos começa com o anúncio do Deus libertador. A Igreja ensina que os mandamentos são expressões da vontade de Deus para nos guiar em nossa vida espiritual e moral, para que possamos viver a liberdade verdadeira em Cristo (CIC 2056)."
        },
        10: {
          reference: "Êxodo 20:3-4",
          text: "Não terás outros deuses diante de mim. Não farás para ti imagem de escultura, nem semelhança alguma do que há em cima no céu, nem embaixo na terra.",
          explanation: "Este é o primeiro mandamento, que nos chama a adorar somente a Deus. A Igreja ensina que a idolatria é um grave pecado, e que a adoração a Deus deve ser exclusiva, sem substituir a verdadeira fé por objetos materiais ou ideais falsos (CIC 2113).          A principal distinção feita pela Igreja reside nos termos adoração e veneração.Adoração (Latria): Este é o culto supremo devido unicamente a Deus. A Igreja ensina que somente Deus é digno de adoração absoluta.Veneração (Dulia): Este é o respeito e a honra prestados aos santos, aos anjos e às imagens sagradas. A Igreja argumenta que essa veneração não se dirige ao objeto material em si, mas à pessoa ou ao santo que ele representa, direcionando, em última instância, a mente e o coração a Deus.2. As Imagens como Auxílio à Devoção:A Igreja vê as imagens sagradas como ferramentas que podem auxiliar na oração e na contemplação. Assim como uma fotografia de um ente querido nos lembra dessa pessoa e evoca sentimentos, as imagens religiosas podem nos ajudar a focar em Deus, em Jesus Cristo, na Virgem Maria e nos santos. Elas servem como um ponto de contato visual para a fé.3. A Encarnação como Ponto de Virada:Um argumento teológico central é a Encarnação de Jesus Cristo. Deus, ao se tornar homem em Jesus, assumiu uma forma visível. A Igreja argumenta que, uma vez que Deus se manifestou visivelmente em Jesus, torna-se possível representar essa imagem de Cristo. As imagens de Jesus não são vistas como tentativas de aprisionar a divindade, mas como representações da Sua natureza humana unida à divina."
        },
            11: {
              reference: "Êxodo 24:3-4",
              text: "Moisés veio e contou ao povo todas as palavras do Senhor e todos os juízos. E todo o povo respondeu a uma voz: 'Faremos tudo o que o Senhor falou.' Então Moisés escreveu todas as palavras do Senhor.",
              explanation: "A obediência do povo às palavras de Deus é uma demonstração de sua aliança com o Senhor. A Igreja ensina que a obediência à Palavra de Deus é essencial para nossa salvação e que, por meio de Cristo, somos chamados a cumprir a vontade de Deus em nossas vidas (Lc 6:46-49, CIC 2037)."
            },
            12: {
              reference: "Êxodo 24:7-8",
              text: "Tomou o livro da aliança e leu-o ao povo; e disseram: 'Faremos tudo o que o Senhor falou e obedeceremos.' Então Moisés tomou o sangue e o aspergiu sobre o povo, e disse: 'Eis o sangue da aliança que o Senhor fez convosco, sobre todas estas palavras.'",
              explanation: "O sangue da aliança simboliza o pacto entre Deus e Seu povo. Para a Igreja, o sacrifício de Cristo no Calvário ratifica a nova aliança, um pacto eterno em Seu sangue, que nos reconcilia com Deus (Mt 26:28, CIC 1365)."
            },
            13: {
              reference: "Êxodo 32:1-2",
              text: "Vendo o povo que Moisés demorava a descer do monte, reuniram-se ao redor de Arão e disseram-lhe: 'Levanta-te, faze-nos deuses que vão adiante de nós; porque este Moisés, o homem que nos fez subir da terra do Egito, não sabemos o que aconteceu com ele.'",
              explanation: "A desobediência do povo ao pedir um ídolo demonstra a tendência humana de buscar segurança em coisas visíveis e materiais. A Igreja ensina que a idolatria é qualquer forma de adoração ou confiança em algo que não seja Deus, e que a verdadeira fé deve ser centrada no Senhor, que é invisível mas real e presente (CIC 2113)."
            },
            14: {
              reference: "Êxodo 32:4-5",
              text: "Ele (Arão) tomou-lhes o ouro das mãos e fez com ele um bezerro de fundição; então disseram: 'Este é o teu Deus, ó Israel, que te fez subir da terra do Egito.'",
              explanation: "A criação do bezerro de ouro é um exemplo claro de idolatria. A Igreja ensina que os cristãos devem evitar qualquer forma de idolatria, seja na forma de imagens ou objetos que tomem o lugar de Deus na nossa vida (CIC 2113)."
            },
            15: {
              reference: "Êxodo 32:6",
              text: "E no dia seguinte levantaram-se cedo e ofereceram holocaustos, e trouxeram ofertas pacíficas; o povo se assentou para comer e beber, e levantaram-se para brincar.",
              explanation: "O pecado de idolatria é seguido de práticas imorais. A Igreja ensina que devemos viver de maneira digna e obedecer aos mandamentos de Deus, e que a verdadeira adoração a Deus deve ser pura e sem desvios (CIC 2131)."
            },
            16: {
              reference: "Êxodo 32:7-10",
              text: "O Senhor disse a Moisés: 'Vai, desce, porque o teu povo, a quem tiraste da terra do Egito, se corrompeu. Muito depressa se desviaram do caminho que eu lhes havia prescrito.'",
              explanation: "O afastamento do povo de Deus é uma tragédia, mas também é uma oportunidade para restaurar a aliança com Ele. A Igreja ensina que a misericórdia de Deus nunca se cansa de nos chamar ao arrependimento e ao retorno à sua graça (CIC 1447)."
            },
            17: {
              reference: "Êxodo 32:11-14",
              text: "Moisés, porém, intercedeu pelo povo e disse: 'Ó Senhor, por que se acende tua ira contra o teu povo, a quem tiraste da terra do Egito com grande força e mão poderosa?'",
              explanation: "A intercessão de Moisés é um modelo de oração por outros, algo que também é feito por Cristo, que intercede por nós diante de Deus Pai. A Igreja ensina que devemos interceder uns pelos outros, orando pelos pecadores e pelos necessitados (CIC 2634)."
            },
            18: {
              reference: "Êxodo 32:19-20",
              text: "E aconteceu que, quando Moisés se aproximou do acampamento e viu o bezerro e as danças, a ira se acendeu contra eles; e ele lançou das mãos as tábuas e as quebrou aos pés do monte.",
              explanation: "Moisés, ao ver a idolatria, exprime a gravidade do pecado com um gesto simbólico de quebrar as tábuas da aliança. A Igreja ensina que o pecado grave tem consequências, e que a ruptura da aliança com Deus precisa ser restaurada através do arrependimento e da confissão (CIC 1450)."
            },
            19: {
              reference: "Êxodo 32:21-22",
              text: "E Moisés disse a Arão: 'Que te fez este povo para que o fizesses cometer tão grande pecado?'",
              explanation: "Moisés acusa Arão pela gravidade do pecado do povo. A Igreja ensina que todos somos responsáveis por nossas ações e que os líderes, de maneira especial, têm grande responsabilidade diante de Deus (CIC 2264)."
            },
            20: {
              reference: "Êxodo 32:30-32",
              text: "No dia seguinte disse Moisés ao povo: 'Vós cometestes um grande pecado, mas agora subirei ao Senhor, talvez possa fazer expiação por vós.'",
              explanation: "A expiação pelos pecados é essencial. Para a Igreja, Cristo é o único mediador que fez expiação por nós através de Sua morte na cruz, e é através d'Ele que temos perdão e reconciliação com Deus (CIC 612)."
            },
            21: {
              reference: "Êxodo 32:33-34",
              text: "Moisés respondeu: 'Aquele que pecar contra mim, a esse riscarei do meu livro. Mas agora, vai, guia este povo ao lugar que te falei; eis que o meu anjo irá diante de ti.'",
              explanation: "A responsabilidade individual pelo pecado é ressaltada. A Igreja ensina que cada um é responsável pelo seu pecado e que o arrependimento é necessário para alcançar o perdão de Deus (CIC 1855)."
            },
            22: {
                reference: "Êxodo 34:1-2",
                text: "O Senhor disse a Moisés: 'Corte duas tábuas de pedra como as primeiras, e suba a mim no monte; farei com que escreva nas tábuas as palavras que estavam nas primeiras, que tu quebraste.'",
                explanation: "Deus, em Sua misericórdia, oferece uma nova chance para o povo e para Moisés. A Igreja ensina que, mesmo diante de nossos erros, Deus está sempre disposto a nos dar uma nova oportunidade de nos reconciliarmos com Ele e seguir Seus mandamentos (CIC 1430)."
              },
              23: {
                reference: "Êxodo 34:28",
                text: "E Moisés esteve ali com o Senhor quarenta dias e quarenta noites, sem comer pão, nem beber água. E escreveu nas tábuas as palavras da aliança, os dez mandamentos.",
                explanation: "O jejum e a oração de Moisés simbolizam a busca por uma renovação espiritual. A Igreja ensina que o jejum é uma prática que nos ajuda a crescer em fé e penitência, além de nos aproximar de Deus (Mt 6:16-18, CIC 1434)."
              },
              24: {
                reference: "Êxodo 40:34-35",
                text: "A nuvem cobriu a tenda da congregação, e a glória do Senhor encheu o tabernáculo. Moisés não podia entrar na tenda da congregação, porque a nuvem estava sobre ela, e a glória do Senhor enchia o tabernáculo.",
                explanation: "A glória de Deus que preenche o tabernáculo simboliza a presença divina no meio de Seu povo. Para a Igreja, a presença de Deus é real na Eucaristia, onde Cristo está verdadeiramente presente em Corpo, Sangue, Alma e Divindade (CIC 1374)."
              },
              25: {
                reference: "Levítico 1:1-2",
                text: "O Senhor chamou Moisés e falou com ele da tenda da congregação, dizendo: 'Fala aos filhos de Israel e diz-lhes: Quando alguém de vós trouxer uma oferta ao Senhor, a oferta será de animais, de gado ou de ovelhas.'",
                explanation: "O Livro de Levítico trata das leis e ordenanças de Deus para a santidade do povo. A Igreja ensina que Deus chama todos os cristãos a viverem em santidade, oferecendo suas vidas como sacrifício vivo, agradável a Deus (Rm 12:1, CIC 2028)."
              },
              26: {
                reference: "Levítico 1:9",
                text: "E as entranhas e as pernas o lavará com água, e o sacerdote queimará tudo sobre o altar, como holocausto, oferta queimada de aroma agradável ao Senhor.",
                explanation: "O holocausto é um sacrifício total, onde tudo é entregue a Deus. A Igreja ensina que o sacrifício de Cristo na cruz é o holocausto perfeito, que redimiu toda a humanidade, e que participamos desse sacrifício na Eucaristia (CIC 1366)."
              },
              27: {
                reference: "Levítico 4:27-31",
                text: "Se alguém, do povo, cometer pecado, fazendo o que é proibido por um dos mandamentos do Senhor, mas sem intenção, será culpado e deverá oferecer uma cabra sem defeito como oferta pelo pecado.",
                explanation: "O sacrifício pelo pecado é uma antecipação do sacrifício de Cristo. Para a Igreja, a confissão dos pecados e o arrependimento são necessários para a reconciliação com Deus, e Cristo é o verdadeiro Cordeiro de Deus que tira o pecado do mundo (Jo 1:29, CIC 1440)."
              },
              28: {
                reference: "Levítico 5:5-6",
                text: "Quando alguém for culpado em um pecado, deverá confessar o que fez e trazer ao Senhor, por sua culpa, um carneiro sem defeito como oferta de reparação.",
                explanation: "A confissão e a reparação são parte essencial do processo de arrependimento. A Igreja ensina que a confissão é um meio de restaurar a amizade com Deus e com a comunidade, e que, por meio dela, recebemos o perdão de nossos pecados (CIC 1420)."
              },
              29: {
                reference: "Levítico 8:6-13",
                text: "Moisés trouxe Arão e seus filhos e os lavou com água. Depois, vestiu Arão com as vestes sagradas, ungiu-o e o consagrou.",
                explanation: "O sacerdócio de Arão é uma prefiguração do sacerdócio de Cristo. A Igreja Católica ensina que Cristo é o Sumo Sacerdote, que se oferece como sacrifício perfeito por nossos pecados. Os sacerdotes atuais compartilham dessa missão, oferecendo a Eucaristia em Sua memória (CIC 1544)."
              },
              30: {
                reference: "Levítico 11:44-45",
                text: "Serei santo, porque eu sou santo, diz o Senhor, e separam-se de tudo que é impuro. Eu sou o Senhor que vos fiz subir da terra do Egito, para ser vosso Deus. Sede, pois, santos, porque eu sou santo.",
                explanation: "A santidade é um chamado universal para todos os cristãos. A Igreja ensina que a santidade é a vocação fundamental de todo cristão, e o objetivo da vida cristã é ser transformado à imagem de Deus, através de Sua graça (CIC 2013)."
              },
              31: {
                reference: "Levítico 16:29-30",
                text: "Este será para vós um estatuto perpétuo: no décimo dia deste mês, humilhai-vos, e não fareis nenhum trabalho, nem o natural, nem o estrangeiro, porque nesse dia se fará expiação por vós, para purificar-vos de todos os vossos pecados.",
                explanation: "A expiação no Antigo Testamento é prefiguração da obra de Cristo na cruz. A Igreja ensina que Cristo é o Cordeiro de Deus, que se imola por nós, fazendo a perfeita expiação pelos nossos pecados, e que a Eucaristia é o memorial desse sacrifício (CIC 1362)."
              },          
      },
      april: {
        1: {
          reference: "Números 6:22-27",
          text: "Disse o Senhor a Moisés: 'Fala a Arão e a seus filhos, dizendo: Assim abençoareis os filhos de Israel: O Senhor te abençoe e te guarde; o Senhor faça resplandecer o Seu rosto sobre ti, e te seja gracioso; o Senhor levante sobre ti o Seu rosto e te dê a paz.'",
          explanation: "A benção sacerdotal transmite a paz e a graça de Deus, e é um reflexo do amor de Deus pelo Seu povo. A Igreja ensina que, através da oração e da intercessão sacerdotal, os cristãos recebem as bênçãos divinas (CIC 1669)."
        },
        2: {
          reference: "Números 9:15-23",
          text: "No dia em que a morada foi levantada, a nuvem cobriu a tenda da congregação, e pela tarde parecia fogo, até pela manhã. Assim era continuamente: a nuvem cobria, e pela noite parecia fogo.",
          explanation: "A nuvem simboliza a presença de Deus, e a Igreja vê isso como uma prefiguração da presença do Espírito Santo, que acompanha e guia a Igreja. A presença de Deus, através da Eucaristia, é o sinal permanente de Sua ação em nosso meio (CIC 1374)."
        },
        3: {
          reference: "Números 11:16-17",
          text: "O Senhor disse a Moisés: 'Recolhe-me setenta homens dos anciãos de Israel, que sabes serem os anciãos do povo e os seus oficiais, e traze-os à tenda da congregação, para que fiquem ali contigo. Eu descerei e falarei ali contigo, e tomarei do espírito que está em ti, e o porei sobre eles.'",
          explanation: "A escolha dos 70 anciãos prefigura o episcopado e o sacramento da ordem, transmitido aos bispos e sacerdotes, com o objetivo de ensinar e governar o povo de Deus. A Igreja ensina que a sucessão apostólica é o meio pelo qual a Igreja mantém a continuidade da missão de Cristo (CIC 1592)."
        },
        4: {
          reference: "Números 21:8-9",
          text: "O Senhor disse a Moisés: 'Faz uma serpente de bronze e põe-a sobre um poste. Quem for mordido e olhar para ela, viverá.' Moisés fez a serpente de bronze e a colocou sobre o poste.",
          explanation: "A serpente de bronze é uma figura de Cristo na cruz, que nos salva do pecado. Jesus mesmo afirmou que, assim como Moisés levantou a serpente no deserto, Ele seria levantado na cruz para salvar a humanidade (Jo 3:14-15). A Igreja ensina que a cruz de Cristo é o meio pelo qual fomos redimidos (CIC 616)."
        },
        5: {
          reference: "Números 24:17",
          text: "Eu o vejo, mas não agora; eu o contemplo, mas não de perto: uma estrela sairá de Jacó, e um cetro se levantará de Israel.",
          explanation: "A profecia de Balaão é uma prefiguração do nascimento de Cristo, a estrela de Jacó. A Igreja ensina que Jesus é o cumprimento das promessas feitas a Israel, sendo Ele o Messias esperado (CIC 436)."
        },
        6: {
            reference: "Números 27:18-20",
            text: "O Senhor disse a Moisés: 'Toma Josué, filho de Num, homem em quem está o espírito, e põe a tua mão sobre ele; e apresentá-lo-ás ao sacerdote Eleazar e a toda a congregação, e o ordenarás diante deles.'",
            explanation: "A escolha de Josué como sucessor de Moisés prefigura a transmissão da autoridade espiritual dentro da Igreja. A sucessão apostólica garante que o ensino e a autoridade de Cristo permaneçam na Igreja, principalmente através dos bispos e sacerdotes (CIC 1592)."
          },
          7: {
            reference: "Números 33:50-54",
            text: "O Senhor falou a Moisés, nas campinas de Moabe, junto ao Jordão, de frente para Jericó, dizendo: 'Falai aos filhos de Israel, dizendo: Quando passardes o Jordão, para entrar na terra de Canaã, expulsareis de diante de vós todos os moradores da terra.'",
            explanation: "A entrada do povo de Israel na Terra Prometida simboliza a plenitude da promessa de Deus. Para a Igreja, a terra prometida é a vida eterna, e os cristãos devem lutar contra as tentações do mundo para alcançar a vida em Cristo (CIC 1040)."
          },
          8: {
            reference: "Números 35:9-15",
            text: "O Senhor falou a Moisés, dizendo: 'Fala aos filhos de Israel, e dize-lhes: Quando passardes o Jordão para a terra de Canaã, nomeareis cidades de refúgio, para que se acolham nelas os homicidas que tiverem matado alguém sem intenção.'",
            explanation: "As cidades de refúgio são uma figura de Cristo, que é nosso refúgio e salvação. A Igreja ensina que Jesus é nosso protetor, e, n'Ele, encontramos perdão e misericórdia para nossas faltas (CIC 1422)."
          },
          9: {
            reference: "Números 35:30-34",
            text: "Quem matar a alguém, será condenado à morte, com base no testemunho de duas ou três testemunhas, mas uma só testemunha não o fará culpado de morte. Não contaminarás a terra onde habitas, pois o sangue contamina a terra; e a terra não será purificada do sangue derramado, senão pela morte de quem o derramou.",
            explanation: "A proteção da vida humana é central na moral católica. A Igreja ensina que a vida é sagrada desde a concepção até a morte natural, e que o assassinato é gravemente imoral (CIC 2258)."
          },
          10: {
            reference: "Números 36:6-9",
            text: "Esta é a palavra que o Senhor ordenou acerca das filhas de Zelofeade: 'Dizem bem as filhas de Zelofeade. Não será tirada a herança de seu pai, mas ela será dada às suas filhas.'",
            explanation: "Este versículo trata da justiça divina e da proteção da herança, que é um símbolo de promessa e de bênção. A Igreja, no Catecismo, ensina que Deus não retira suas promessas e dá à humanidade a herança do Reino dos Céus, que é garantida por Cristo (CIC 2816)."
          },
          11: {
            reference: "Números 33:1-4",
            text: "Estas são as jornadas dos filhos de Israel, que saíram da terra do Egito por exércitos sob a condução de Moisés e Aarão. Moisés escreveu as suas saídas segundo as suas jornadas, conforme a ordem do Senhor.",
            explanation: "A jornada dos israelitas é um símbolo da vida cristã, que é um caminho de libertação e fé. Assim como Deus conduziu o povo de Israel, Ele também nos guia em nossa caminhada para o céu, a verdadeira Terra Prometida (CIC 1698)."
          },
          12: {
            reference: "Números 13:1-2",
            text: "O Senhor falou a Moisés, dizendo: 'Envie homens para espiar a terra de Canaã, que dou aos filhos de Israel; de cada tribo de seus pais, enviereis um homem, sendo todos príncipes entre eles.'",
            explanation: "Este episódio nos lembra da necessidade de fé ao encarar desafios. Apesar das dificuldades da terra prometida, a confiança em Deus deve ser superior aos medos e obstáculos que encontramos na vida. A Igreja ensina que devemos confiar na providência divina (CIC 1807)."
          },
          13: {
            reference: "Números 13:30",
            text: "Então Caleb fez calar o povo perante Moisés, e disse: 'Subamos, e possuamos a terra, porque certamente prevaleceremos sobre ela.'",
            explanation: "A coragem de Caleb é um exemplo da confiança em Deus. A Igreja nos ensina que, com fé, podemos superar qualquer desafio, pois Deus é nossa força e nossa fortaleza. Esta confiança é necessária para nossa vida cristã (CIC 2734)."
          },
          14: {
            reference: "Números 14:9",
            text: "Mas, não se revoltem contra o Senhor, nem temam o povo dessa terra, porque são nosso pão. A sua defesa se retirou de sobre eles, e o Senhor está conosco; não os temais.",
            explanation: "A palavra de Josué e Caleb reafirma a confiança em Deus contra as adversidades. A Igreja ensina que devemos confiar na proteção divina, sabendo que a força de Deus está ao nosso lado, e nos impede de cair no desespero (CIC 2659)."
          },
          15: {
            reference: "Números 14:18-19",
            text: "'O Senhor é longânimo e grande em misericórdia, que perdoa a iniquidade e a transgressão, mas de nenhum modo terá por inocente o culpado. Perdoa a iniquidade deste povo, segundo a grandeza da tua misericórdia, como perdoades a este povo desde o Egito até aqui.'",
            explanation: "A misericórdia de Deus é infinita e sempre disponível, mas também exige arrependimento e conversão. A Igreja ensina que Deus perdoa nossos pecados através do arrependimento, e que essa misericórdia deve ser vivida na vida cotidiana (CIC 1440)."
          },
          16: {
            reference: "Números 15:37-41",
            text: "Disse ainda o Senhor a Moisés: 'Fala aos filhos de Israel, e dize-lhes que se façam franjas nas bordas das suas vestes, por suas gerações, e ponham sobre as franjas das bordas um cordão de azul.'",
            explanation: "As franjas nas vestes eram um sinal da santidade e da obediência à lei de Deus. Para a Igreja, as nossas ações e vestes também devem refletir nossa santidade e nosso compromisso com Deus, e o uso de sinais e símbolos sagrados, como a cruz, é importante na vida cristã (CIC 1155)."
          },
          17: {
            reference: "Números 16:23-26",
            text: "O Senhor falou a Moisés e a Aarão, dizendo: 'Apartai-vos da tenda de Corá, Datan e Abirão.' Então Moisés se levantou e foi a Datan e Abirão, e os anciãos de Israel seguiram-no.",
            explanation: "A rebelião de Corá contra a autoridade de Moisés e Aarão é um alerta contra o orgulho e a resistência ao plano de Deus. A Igreja ensina que devemos respeitar a autoridade legítima, especialmente a autoridade espiritual, que vem de Deus (CIC 896)."
          },
          18: {
            reference: "Números 20:1-2",
            text: "Chegaram os filhos de Israel, toda a congregação, ao deserto de Zim, no primeiro mês, e o povo ficou em Cades. Ali morreu Miriam e foi sepultada ali.",
            explanation: "A morte de Miriam simboliza a transitoriedade da vida humana e a fidelidade de Deus em todas as circunstâncias. A Igreja ensina que a morte não é o fim, mas a passagem para a vida eterna, e que, como Miriam, somos chamados a permanecer firmes na fé (CIC 1020)."
          },
          19: {
            reference: "Números 21:4-5",
            text: "Partiram do monte Hor, pelo caminho do mar Vermelho, para contornar a terra de Edom, e o povo se impacientou no caminho. E falou o povo contra Deus e contra Moisés: 'Por que nos fizeste subir do Egito para morrer neste deserto?'",
            explanation: "O povo de Israel se rebelou novamente, mostrando a tendência humana de duvidar de Deus em tempos de dificuldades. A Igreja ensina que, mesmo em momentos de sofrimento, devemos confiar nas promessas de Deus e nunca perder a esperança (CIC 1501)."
          },
          20: {
            reference: "Números 21:6-9",
            text: "Então o Senhor enviou entre o povo serpentes abrasadoras, que mordiam o povo; e muitos do povo de Israel morreram. Então o povo veio a Moisés e disse: 'Pecamos, porque falamos contra o Senhor e contra ti; ora ao Senhor, para que tire de nós as serpentes.'",
            explanation: "As serpentes representavam o pecado e a morte. A Igreja ensina que a serpente de bronze erguida por Moisés prefigura a cruz de Cristo, que nos salva do pecado e da morte eterna (CIC 606)."
          },
          21: {
            reference: "Números 21:16-18",
            text: "De lá para Beer, onde o Senhor disse a Moisés: 'Ajunta o povo, e lhes darei água.' Então cantou Israel este cântico: 'Suba a fonte! Cante-lhe a canção!'",
            explanation: "O cântico de Israel celebra a provisão de Deus. A Igreja nos ensina que Deus provê para nós não apenas as necessidades materiais, mas também a água viva de sua graça, que é dada a todos os cristãos através do Espírito Santo (CIC 2603)."
          },
          22: {
            reference: "Números 23:19",
            text: "Deus não é homem, para que minta, nem filho do homem, para que se arrependa; porventura, tendo ele falado, não fará? Ou tendo ele prometido, não o cumprirá?",
            explanation: "A fidelidade de Deus em cumprir Suas promessas é um pilar da nossa fé. A Igreja ensina que as promessas de Deus, especialmente a promessa de salvação em Cristo, são infalíveis e confiáveis (CIC 157)."
          },
          23: {
            reference: "Números 24:17",
            text: "Vejo-lhe, mas não agora; olho-lhe, mas não de perto. Uma estrela sairá de Jacó, e um cetro se levantará de Israel.",
            explanation: "Este versículo é uma profecia messiânica que se refere a Jesus Cristo. Ele é a estrela que vem de Jacó, e a Igreja ensina que Cristo é o cumprimento das promessas feitas ao povo de Israel (CIC 436)."
          },
          24: {
            reference: "Números 27:18-23",
            text: "O Senhor disse a Moisés: 'Toma Josué, filho de Num, homem em quem está o espírito, e põe a tua mão sobre ele...'",
            explanation: "A escolha de Josué como sucessor de Moisés prefigura a sucessão apostólica. A Igreja ensina que a autoridade e liderança na Igreja devem ser passadas por meio da ordenação, assegurando a continuidade da missão de Cristo (CIC 1592)."
          },
          25: {
            reference: "Números 31:1-3",
            text: "O Senhor falou a Moisés, dizendo: 'Vinga os filhos de Israel dos midianitas; depois serás recolhido ao teu povo.'",
            explanation: "O juízo de Deus sobre os midianitas reflete a justiça divina, mas também a necessidade de pureza no povo de Deus. A Igreja ensina que a pureza de vida é essencial para os cristãos, pois a santidade é necessária para alcançar a salvação (CIC 2015)."
          },
          26: {
            reference: "Números 32:23",
            text: "Mas, se não fizerdes assim, eis que haveis pecado contra o Senhor; e sabei que o vosso pecado vos achará.",
            explanation: "A obediência a Deus é fundamental para manter a paz e a harmonia. A Igreja ensina que o pecado tem consequências, e é necessário arrependimento e reconciliação com Deus para ser restaurado à graça (CIC 1423)."
          },
          27: {
            reference: "Números 33:50-56",
            text: "O Senhor falou a Moisés, nas campinas de Moabe, junto ao Jordão, de frente para Jericó, dizendo: 'Falai aos filhos de Israel, dizendo: Quando passardes o Jordão, para entrar na terra de Canaã, expulsareis de diante de vós todos os moradores da terra.'",
            explanation: "Este versículo fala sobre a preparação para tomar posse da Terra Prometida, algo que representa o esforço contínuo do cristão para alcançar a salvação. A Igreja ensina que é necessário esforço contínuo e confiança em Deus para alcançar a vida eterna (CIC 1040)."
          },
          28: {
            reference: "Números 33:54",
            text: "A terra será repartida por sorte, segundo as vossas famílias; à maior dareis maior herança, e à menor, menor herança; a sorte determinará as heranças segundo as tribos dos vossos pais.",
            explanation: "A divisão da terra entre as tribos de Israel é um símbolo do plano de Deus de dar a cada um o que lhe é devido, conforme a Sua justiça e sabedoria. A Igreja ensina que a justiça divina é perfeita e que a salvação é um dom, dado por Deus conforme Sua vontade e misericórdia (CIC 1037)."
          },
          29: {
            reference: "Números 34:1-2",
            text: "O Senhor falou a Moisés, dizendo: 'Manda os filhos de Israel que, entrando na terra de Canaã, esta seja a terra que vos cairá em sorte, a terra de Canaã, segundo os seus limites.'",
            explanation: "A promessa de Canaã é um símbolo da promessa da vida eterna que Deus fez aos cristãos. A Igreja ensina que o Reino de Deus nos é prometido, mas exige perseverança na fé e na obediência a Deus até o fim (CIC 1047)."
          },
          30: {
            reference: "Números 36:13",
            text: "Estas são as ordens e os juízos que o Senhor ordenou aos filhos de Israel, por intermédio de Moisés, nas campinas de Moabe, junto ao Jordão, de frente para Jericó.",
            explanation: "Este versículo resume as instruções de Deus para a organização e as leis que regulam o povo de Israel. A Igreja ensina que as leis de Deus, como os Mandamentos, são fundamentais para a vida cristã, pois nos guiam no caminho da verdade e da vida (CIC 2070)."
          },
      },
    
      may: {
        1: {
          reference: "Deuteronômio 4:1-2, 5-6",
          text: "Agora, pois, ó Israel, ouve os estatutos e os juízos que eu vos ensino, para os cumprirdes... Nada acrescentareis à palavra que vos mando, nem diminuireis dela...",
          explanation: "Moisés adverte Israel a obedecer fielmente à Lei de Deus, sem alterar seus preceitos. A Igreja Católica ensina que a Revelação Divina está completa em Cristo e que nenhum ensinamento pode ser mudado (CIC 84, 86)."
        },
        2: {
          reference: "Deuteronômio 5:6-21",
          text: "Eu sou o Senhor, teu Deus, que te tirei do Egito... Não terás outros deuses diante de mim.",
          explanation: "Os Dez Mandamentos são reafirmados aqui como base da vida moral. A Igreja ensina que continuam válidos e fundamentais para nossa santidade (CIC 2056-2074)."
        },
        3: {
          reference: "Deuteronômio 6:4-9",
          text: "Ouve, Israel: o Senhor, nosso Deus, é o único Senhor. Amarás o Senhor, teu Deus, de todo o teu coração...",
          explanation: "O Shemá é o coração da fé judaica e inspira o maior mandamento de Jesus. A Igreja ensina que o amor a Deus com todo o ser é o primeiro dever do cristão (CIC 2083)."
        },
        4: {
          reference: "Deuteronômio 7:6-9",
          text: "Porque tu és povo santo ao Senhor, teu Deus... o Senhor te escolheu para que lhe fosses o seu povo particular.",
          explanation: "Deus elege Israel por amor e fidelidade. A Igreja reconhece essa eleição e ensina que, em Cristo, todos os batizados são o novo povo de Deus (CIC 781-782)."
        },
        5: {
          reference: "Deuteronômio 8:2-3",
          text: "Lembra-te de todo o caminho... para te humilhar, te provar... e te ensinar que nem só de pão viverá o homem...",
          explanation: "Jesus cita essa passagem ao ser tentado no deserto. A Igreja ensina que confiamos em Deus acima das necessidades materiais (CIC 2835)."
        },
        6: {
          reference: "Deuteronômio 10:12-13",
          text: "Agora, pois, ó Israel, que é que o Senhor teu Deus exige de ti?... senão que temas ao Senhor teu Deus, que andes em todos os seus caminhos...",
          explanation: "Moisés resume a verdadeira religião: temor reverente, obediência e amor. A Igreja ensina que a fé se manifesta em atos de justiça, amor e temor a Deus (CIC 2084-2094)."
        },
        7: {
          reference: "Deuteronômio 18:15-18",
          text: "O Senhor teu Deus te levantará um profeta do meio de ti... Eu porei as minhas palavras na sua boca...",
          explanation: "Profecia sobre o Messias. Os Apóstolos aplicam essa passagem a Jesus, o Profeta por excelência (Atos 3:22). A Igreja afirma: Ele é a plenitude da revelação (CIC 459, 528)."
        },
        8: {
          reference: "Deuteronômio 30:15-20",
          text: "Eis que hoje te proponho a vida e o bem, a morte e o mal... escolhe, pois, a vida, para que vivas...",
          explanation: "Deus dá ao homem liberdade, mas chama à vida e à fidelidade. A Igreja ensina que somos livres para escolher, mas somos responsáveis por nossas escolhas (CIC 1730-1742)."
        },
        9: {
            reference: "Josué 1:6-9",
            text: "Sê forte e corajoso... Não te assustes, nem te espantes, porque o Senhor, teu Deus, é contigo por onde quer que andares.",
            explanation: "Deus encoraja Josué na liderança de Israel. A coragem na fé é essencial. A Igreja nos lembra que, com Deus, podemos enfrentar toda dificuldade com esperança (CIC 1817-1821)."
          },
          10: {
            reference: "Josué 3:14-17",
            text: "Quando os sacerdotes que levavam a arca chegaram ao Jordão... as águas pararam e o povo passou em seco.",
            explanation: "Assim como o Mar Vermelho, o Jordão se abre. É símbolo do Batismo, onde somos conduzidos da escravidão para a vida nova. A Igreja vê aqui o prenúncio do sacramento (CIC 1223-1225)."
          },
          11: {
            reference: "Josué 6:2-5, 20",
            text: "As muralhas de Jericó cairão... o povo gritou, e os muros caíram.",
            explanation: "A vitória vem da obediência e fé em Deus. A Igreja ensina que a fé viva, acompanhada de obras, move montanhas e derruba as barreiras espirituais (CIC 1814-1816)."
          },
          12: {
            reference: "Josué 24:14-15",
            text: "Escolhei hoje a quem servireis... Eu e minha casa serviremos ao Senhor.",
            explanation: "Josué reafirma a Aliança. A decisão de servir a Deus deve ser pessoal e diária. A Igreja convida as famílias a viverem essa fidelidade no lar (CIC 1655-1658)."
          },
          13: {
            reference: "Juízes 2:10-13",
            text: "Levantou-se outra geração que não conhecia o Senhor... e serviram a Baal.",
            explanation: "O esquecimento de Deus leva à idolatria. A Igreja alerta para a importância da transmissão da fé entre gerações (CIC 2225-2229)."
          },
          14: {
            reference: "Juízes 4:4-9",
            text: "Débora, profetisa, julgava Israel... o Senhor entregará Sísera nas mãos de uma mulher.",
            explanation: "Débora, líder e profetisa, mostra que Deus age por meio de quem Ele quer. A Igreja reconhece o papel das mulheres na missão profética e evangelizadora (CIC 773, 871-873)."
          },
          15: {
            reference: "Juízes 6:11-16",
            text: "O Senhor está contigo, valente guerreiro... eu estarei contigo.",
            explanation: "Deus chama Gideão, fraco aos olhos humanos, para libertar Israel. A Igreja ensina que Deus escolhe os humildes e pequenos para manifestar seu poder (CIC 2086, 2099)."
          },
          16: {
            reference: "Juízes 13:3-5",
            text: "Eis que conceberás e darás à luz um filho... ele começará a livrar Israel.",
            explanation: "Nascimento de Sansão, consagrado desde o ventre. Aponta para o conceito de vocação desde antes do nascimento, como ensina a Igreja sobre o chamado à santidade (CIC 1265, 2013)."
          },
          17: {
            reference: "Juízes 16:28-30",
            text: "Senhor, lembra-te de mim... Sansão matou mais na morte do que em vida.",
            explanation: "Mesmo caído, Sansão se volta a Deus. A misericórdia divina alcança até os que erram profundamente. A Igreja destaca a esperança na conversão final (CIC 982)."
          },
          18: {
            reference: "Rute 1:16-17",
            text: "Teu povo será o meu povo, e teu Deus será o meu Deus.",
            explanation: "Rute é modelo de fidelidade. Sua história mostra que o amor e a fé não têm fronteiras. A Igreja vê nela um sinal da inclusão dos gentios no plano de salvação (CIC 60, 781)."
          },
          19: {
            reference: "Rute 4:13-17",
            text: "Rute gerou Obede... pai de Jessé, pai de Davi.",
            explanation: "Rute entra na genealogia de Cristo. A Igreja reconhece como Deus conduz sua história por caminhos inesperados, até a vinda do Messias (CIC 489)."
          },
          20: {
            reference: "1 Samuel 1:10-11",
            text: "Ana orava com amargura... Senhor, se me deres um filho, eu o dedicarei ao Senhor.",
            explanation: "A oração de Ana mostra o poder da súplica humilde. A Igreja ensina que a oração perseverante é escutada por Deus (CIC 2734-2737)."
          },
          21: {
            reference: "1 Samuel 3:8-10",
            text: "Fala, Senhor, pois teu servo escuta.",
            explanation: "Samuel escuta o chamado de Deus. A vocação nasce na escuta. A Igreja ensina que todos devem estar atentos ao chamado divino em sua vida (CIC 2562, 2570)."
          },
          22: {
            reference: "1 Samuel 8:4-7",
            text: "Constitui-nos um rei, como têm todas as nações.",
            explanation: "O povo rejeita o reinado de Deus pedindo um rei humano. A Igreja lembra que Cristo é o verdadeiro Rei, e sua autoridade deve guiar nossas vidas (CIC 2105, 450)."
          },
            23: {
              reference: "1 Samuel 10:1-9",
              text: "Então Samuel tomou um frasco de azeite... e o Espírito de Deus se apoderou de Saul.",
              explanation: "A unção de Saul prefigura o Sacramento da Confirmação, onde o Espírito Santo capacita o cristão a viver sua missão. A Igreja reconhece essa unção como símbolo da consagração (CIC 695, 1285)."
            },
            24: {
              reference: "1 Samuel 15:22-23",
              text: "Obedecer é melhor que sacrificar... a rebelião é como o pecado da feitiçaria.",
              explanation: "Deus exige obediência e não rituais vazios. A Igreja ensina que a verdadeira fé se expressa na obediência amorosa à vontade divina (CIC 2087-2094)."
            },
            25: {
              reference: "1 Samuel 16:7-13",
              text: "O Senhor não vê como vê o homem... então Samuel ungiu Davi.",
              explanation: "Deus escolhe Davi, o menor dos irmãos. A Igreja vê nisso o mistério de Deus que exalta os humildes e prepara o caminho para o Messias (CIC 436, 2593)."
            },
            26: {
              reference: "1 Samuel 17:45-47",
              text: "Davi disse a Golias: tu vens a mim com espada... eu venho em nome do Senhor dos Exércitos.",
              explanation: "Davi vence pela fé, não pela força. É imagem de Cristo, o Rei que vence o mal com humildade. A Igreja vê nessa cena o triunfo da fé sobre os gigantes espirituais (CIC 2632)."
            },
            27: {
              reference: "2 Samuel 5:1-5",
              text: "Ungiram Davi rei sobre Israel... ele reinou quarenta anos.",
              explanation: "Davi é estabelecido como rei unificador de Israel. É figura de Cristo, Rei eterno que governa com justiça (CIC 783, 2055)."
            },
            28: {
              reference: "2 Samuel 6:12-15",
              text: "Davi dançava com todas as suas forças diante do Senhor.",
              explanation: "Davi louva a Deus com alegria e liberdade. A liturgia da Igreja também expressa a fé por meio de canto, dança e louvor (CIC 1156-1158)."
            },
            29: {
              reference: "2 Samuel 7:12-16",
              text: "Estabelecerei o trono de teu reino para sempre.",
              explanation: "Aliança davídica aponta para o Reino de Cristo. A Igreja reconhece aqui o fundamento da esperança messiânica e do reinado eterno de Jesus (CIC 440, 2579)."
            },
            30: {
              reference: "2 Samuel 12:13-14",
              text: "Pequei contra o Senhor... o Senhor perdoou o teu pecado.",
              explanation: "Davi se arrepende após o pecado com Betsabé. A Igreja vê aqui o modelo de contrição e a misericórdia divina que perdoa até os pecados mais graves (CIC 1441-1449)."
            },
            31: {
              reference: "2 Samuel 24:10-14",
              text: "Davi disse: pequei gravemente... prefiro cair nas mãos do Senhor, pois sua misericórdia é grande.",
              explanation: "Mesmo após um erro, Davi confia na misericórdia divina. A Igreja ensina que mesmo em nossa fraqueza, Deus é rico em perdão (CIC 1846-1848, 1432)."
            },
      },
      
      june: {
        1: {
          reference: "1 Reis 3:5-12",
          text: "Dá, pois, ao teu servo um coração compreensivo para julgar teu povo.",
          explanation: "Salomão pede sabedoria, não riquezas ou poder. A Igreja valoriza a sabedoria como dom do Espírito Santo, essencial para julgar segundo o coração de Deus (CIC 1831, 2690)."
        },
        2: {
          reference: "1 Reis 6:11-14",
          text: "Se andares nos meus caminhos... habitarei no meio dos filhos de Israel.",
          explanation: "Deus promete habitar entre o povo se forem fiéis. A fidelidade é a chave da aliança. No Novo Testamento, Cristo é o verdadeiro Templo (CIC 756, 1197)."
        },
        3: {
          reference: "1 Reis 8:10-13",
          text: "A glória do Senhor encheu o templo.",
          explanation: "A presença de Deus se manifesta visivelmente no Templo. Isso prefigura a presença real de Cristo na Eucaristia (CIC 1373, 1088)."
        },
        4: {
          reference: "1 Reis 8:22-30",
          text: "Volta-te para este templo... ouve a súplica do teu servo.",
          explanation: "Salomão ora pedindo que Deus ouça quem orar voltado ao templo. Isso inspira a prática católica de orar voltados ao sacrário, onde está o verdadeiro Templo: Jesus (CIC 1183)."
        },
        5: {
          reference: "1 Reis 11:1-13",
          text: "Salomão amou muitas mulheres estrangeiras... seu coração não era totalmente fiel ao Senhor.",
          explanation: "Salomão, apesar de sua sabedoria, se afasta de Deus por causa da idolatria. A Igreja ensina que o pecado sempre começa quando nos afastamos da fé verdadeira (CIC 2113, 1855)."
        },
        6: {
          reference: "1 Reis 17:8-16",
          text: "A farinha da vasilha não se acabou... segundo a palavra do Senhor pela boca de Elias.",
          explanation: "O milagre com a viúva de Sarepta revela a providência de Deus. A Igreja vê aqui um símbolo da Eucaristia: um alimento que não se esgota (CIC 1335)."
        },
        7: {
          reference: "1 Reis 18:36-39",
          text: "O Senhor é Deus! O Senhor é Deus!",
          explanation: "Elias desafia os profetas de Baal e Deus manifesta sua glória. A Igreja vê nisso a vitória da verdadeira fé contra a idolatria (CIC 2110-2117)."
        },
        8: {
          reference: "1 Reis 19:11-13",
          text: "O Senhor estava no murmúrio de uma brisa suave.",
          explanation: "Deus fala na suavidade, não na violência. A espiritualidade católica ensina a escuta de Deus no silêncio e na oração interior (CIC 2716, 2728)."
        },
        9: {
          reference: "2 Reis 2:9-14",
          text: "Que me seja concedida porção dobrada do teu espírito.",
          explanation: "Eliseu pede o Espírito de Elias. É figura da sucessão apostólica, onde o Espírito continua operando na Igreja através dos sucessores dos apóstolos (CIC 861, 1577)."
        },
        10: {
          reference: "2 Reis 4:1-7",
          text: "O azeite parou de correr.",
          explanation: "A multiplicação do azeite por Eliseu mostra como Deus provê por meios simples. A Igreja reconhece nos milagres sinais da providência e amor divino (CIC 547-550)."
        },
        11: {
          reference: "2 Reis 5:1-14",
          text: "Naamã mergulhou sete vezes no Jordão e ficou curado.",
          explanation: "Esse episódio é figura do Batismo, onde o pecado (como a lepra) é purificado. A Igreja vê aqui a ação sacramental que cura e renova (CIC 1227, 1235)."
        },
        12: {
          reference: "2 Reis 6:15-17",
          text: "Mais são os que estão conosco do que os que estão com eles.",
          explanation: "Eliseu revela os exércitos celestiais. A Igreja crê na presença dos anjos como protetores e servidores do plano de Deus (CIC 328-336)."
        },
        13: {
          reference: "2 Reis 13:20-21",
          text: "O homem tocou os ossos de Eliseu e reviveu.",
          explanation: "Esse milagre atesta o valor das relíquias dos santos, pois Deus age até mesmo por seus restos mortais (CIC 1674, 957)."
        },
        14: {
          reference: "2 Reis 17:7-23",
          text: "Isto sucedeu porque os filhos de Israel pecaram contra o Senhor.",
          explanation: "A queda de Israel mostra as consequências da infidelidade. A Igreja ensina que a desobediência rompe a comunhão com Deus (CIC 1440, 1472)."
        },
        15: {
          reference: "2 Reis 22:8-13",
          text: "Achei o livro da Lei na casa do Senhor.",
          explanation: "A redescoberta da Lei mostra como a Palavra de Deus deve ser central na vida do fiel. A Igreja continua promovendo a leitura das Escrituras (CIC 131, 133)."
        },
        16: {
            reference: "2 Reis 23:1-3",
            text: "O rei fez uma aliança diante do Senhor, comprometendo-se a seguir o Senhor e guardar os seus mandamentos.",
            explanation: "O rei Josias renova a aliança com Deus, lembrando-nos da importância da conversão e do retorno à Palavra. A Igreja chama cada fiel à conversão constante e ao aprofundamento da fé (CIC 1427, 1431)."
          },
          17: {
            reference: "2 Reis 25:8-12",
            text: "Nebuzaradã... queimou a casa do Senhor, o palácio real e todas as casas de Jerusalém.",
            explanation: "A destruição do Templo mostra as consequências do pecado e da infidelidade. A Igreja nos convida à vigilância e à santidade como templo vivo de Deus (CIC 756, 797-798)."
          },
          18: {
            reference: "1 Crônicas 17:11-14",
            text: "Estabelecerei a tua descendência... e firmarei o seu trono para sempre.",
            explanation: "Profecia messiânica sobre o reinado eterno de Cristo, descendente de Davi. A Igreja vê neste versículo o anúncio do Reino de Deus inaugurado por Jesus (CIC 763, 544)."
          },
          19: {
            reference: "1 Crônicas 29:10-13",
            text: "Teu é, Senhor, o poder, a grandeza, a glória, a vitória e a majestade.",
            explanation: "Essa oração é ecoada na liturgia católica. Reconhecemos que tudo pertence a Deus, fundamento da nossa vida espiritual e das orações litúrgicas (CIC 1069, 2639)."
          },
          20: {
            reference: "2 Crônicas 7:1-3",
            text: "A glória do Senhor encheu a casa do Senhor.",
            explanation: "Como no Êxodo, Deus manifesta sua presença no Templo. A Igreja reconhece essa presença real hoje nos sacramentos, especialmente na Eucaristia (CIC 1373)."
          },
          21: {
            reference: "2 Crônicas 15:1-4",
            text: "Quando estiverem em angústia e buscarem ao Senhor, ele se deixará encontrar.",
            explanation: "A misericórdia divina sempre se faz presente a quem se volta a Ele. A confissão e o arrependimento sincero são caminhos seguros para o reencontro com Deus (CIC 982, 1465)."
          },
          22: {
            reference: "2 Crônicas 36:15-16",
            text: "Mas zombaram dos mensageiros de Deus... até que não houve remédio.",
            explanation: "Rejeitar os profetas leva à ruína. A Igreja também é profética e quando é ignorada, se colhe destruição espiritual. O pecado deliberado endurece o coração (CIC 2088, 1859)."
          },
          23: {
            reference: "Esdras 1:1-4",
            text: "Ciro, rei da Pérsia... edificai a casa do Senhor, Deus de Israel.",
            explanation: "Ciro, pagão, é instrumento de Deus. A providência divina age também fora dos limites visíveis da Igreja, pois Deus deseja salvar todos (CIC 843, 847)."
          },
          24: {
            reference: "Esdras 3:10-13",
            text: "Muitos anciãos... choravam em alta voz, vendo o fundamento da casa do Senhor.",
            explanation: "A reconstrução do Templo é símbolo da restauração espiritual. A Igreja ensina que é possível recomeçar com Deus após o pecado e a queda (CIC 1429)."
          },
          25: {
            reference: "Neemias 1:4-11",
            text: "Confessei os pecados dos filhos de Israel... Eu e a casa de meu pai temos pecado.",
            explanation: "Neemias intercede pelo povo. A oração de intercessão tem grande valor na Igreja. Os santos, especialmente Maria, intercedem conosco e por nós (CIC 2634-2635)."
          },
          26: {
            reference: "Neemias 8:1-10",
            text: "Todos escutavam com atenção a leitura da Lei.",
            explanation: "A leitura pública da Palavra era central no culto. A Igreja herdou essa prática, especialmente na Liturgia da Palavra da Missa (CIC 1154, 1349)."
          },
          27: {
            reference: "Neemias 9:1-3",
            text: "Estavam vestidos de pano de saco, e com terra sobre si... confessavam os seus pecados.",
            explanation: "A penitência pública reflete uma espiritualidade de arrependimento coletivo, base para o Sacramento da Penitência (CIC 1430-1432)."
          },
          28: {
            reference: "Neemias 9:6-8",
            text: "Só tu és o Senhor... escolheste Abrão e lhe deste o nome de Abraão.",
            explanation: "Relembrar os feitos de Deus é parte do culto. A tradição católica valoriza a memória dos atos salvíficos de Deus (CIC 1363, 1364)."
          },
          29: {
            reference: "Neemias 9:26-31",
            text: "Tu, porém, por tua grande misericórdia, não os abandonaste.",
            explanation: "Mesmo com a infidelidade do povo, Deus permanece fiel. Essa é a esperança cristã: Deus é sempre mais misericordioso que nossos pecados (CIC 210, 1846)."
          },
          30: {
            reference: "Tobias 12:6-15",
            text: "Eu sou Rafael, um dos sete santos anjos que apresentam as orações dos santos.",
            explanation: "A existência dos anjos e seu papel é doutrina firme da Igreja. São Rafael, especialmente, é protetor dos viajantes e curador (CIC 336, 352)."
          },
      },

      july: {
        1: {
          reference: "Tobias 4:5-11",
          text: "Faze esmola da tua substância... a esmola livra da morte e purifica todo pecado.",
          explanation: "Tobit ensina que a esmola, unida à justiça, tem valor redentor. A Igreja ensina que as obras de misericórdia corporais e espirituais são meios de santificação (CIC 2447, 2462)."
        },
        2: {
          reference: "Tobias 8:4-8",
          text: "Ambos se levantaram e oraram juntos, pedindo a bênção de Deus para seu matrimônio.",
          explanation: "Tobias e Sara mostram o verdadeiro sentido do matrimônio: união, oração e fidelidade. A Igreja vê o casamento como sacramento e caminho de santificação (CIC 1601, 1638-1641)."
        },
        3: {
          reference: "Judite 8:25-27",
          text: "Aceitemos tudo o que nos acontecer como vindo da sua vontade santa.",
          explanation: "Judite confia em Deus mesmo diante da aflição. A fé católica ensina que Deus permite provações para nosso bem espiritual e crescimento na santidade (CIC 164, 272, 307)."
        },
        4: {
          reference: "Judite 13:7-10",
          text: "Ela cortou-lhe a cabeça com o seu próprio gládio.",
          explanation: "Judite liberta Israel com coragem e fé. A Igreja honra as mulheres santas como modelos de virtude e ação conforme a vontade divina (CIC 2030, 2683)."
        },
        5: {
          reference: "Ester 4:16",
          text: "Se eu tiver de perecer, perecerei.",
          explanation: "Ester arrisca a vida por seu povo. A Igreja reconhece nela uma prefiguração de Maria: mulher intercessora e valente, unida ao plano de salvação (CIC 489)."
        },
        6: {
          reference: "Ester 15:9-13 (Vulgata)",
          text: "Seu rosto era radiante de beleza, mas o coração apertado de temor.",
          explanation: "Mesmo com medo, Ester se apresenta ao rei confiando em Deus. A tradição católica valoriza a coragem unida à confiança em Deus como virtude cristã (CIC 1805-1808)."
        },
        7: {
          reference: "Jó 1:20-22",
          text: "Nu saí do ventre de minha mãe, e nu voltarei para lá. O Senhor deu, o Senhor tirou; bendito seja o nome do Senhor!",
          explanation: "A paciência de Jó é modelo de confiança total em Deus mesmo na dor. A Igreja nos convida à fé firme nos momentos de provação (CIC 1502, 2279)."
        },
        8: {
          reference: "Jó 19:25-27",
          text: "Eu sei que o meu Redentor vive.",
          explanation: "Essa declaração é um anúncio da esperança na ressurreição. A Igreja proclama a ressurreição como o centro de nossa fé (CIC 989-991)."
        },
        9: {
          reference: "Salmo 1:1-3",
          text: "Bem-aventurado o homem que não anda segundo o conselho dos ímpios.",
          explanation: "Os salmos abrem com a promessa de bênção ao justo. A vida conforme a Lei do Senhor é caminho de verdadeira felicidade (CIC 1716-1717)."
        },
        10: {
          reference: "Salmo 23:1-4",
          text: "O Senhor é meu pastor, nada me faltará.",
          explanation: "Esse salmo é expressão da confiança absoluta no cuidado divino. A Igreja vê aqui a imagem do Bom Pastor, Cristo, que guia e protege seu rebanho (CIC 754, 2826)."
        },
        11: {
          reference: "Salmo 51(50):3-12",
          text: "Cria em mim, ó Deus, um coração puro.",
          explanation: "Esse salmo penitencial é base da espiritualidade da confissão. O arrependimento sincero é acolhido por Deus com misericórdia (CIC 1431-1432)."
        },
        12: {
          reference: "Salmo 91(90):1-6",
          text: "Aquele que habita no esconderijo do Altíssimo... não temerá.",
          explanation: "O Salmo 91 revela a proteção divina. A Igreja ora com ele especialmente nas Completas, pedindo segurança e paz (CIC 2585, 2691)."
        },
        13: {
          reference: "Salmo 139(138):13-16",
          text: "Tu formaste o meu interior, tu me teceste no seio de minha mãe.",
          explanation: "Fundamento bíblico da dignidade da vida desde a concepção. A Igreja defende a vida humana desde o primeiro instante (CIC 2270-2274)."
        },
        14: {
          reference: "Salmo 150:1-6",
          text: "Louvai o Senhor com címbalos sonoros.",
          explanation: "Todo ser que respira louve o Senhor! A liturgia e a música sacra são formas privilegiadas de louvor a Deus (CIC 1156-1158)."
        },
        15: {
          reference: "Provérbios 3:5-7",
          text: "Confia no Senhor de todo o teu coração... não te estribes no teu próprio entendimento.",
          explanation: "A sabedoria divina é superior à humana. A fé exige abandono confiado na providência (CIC 301, 2730)."
        },
        16: {
          reference: "Provérbios 3:5-6",
          text: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
          explanation: "Essa passagem mostra a importância da confiança em Deus sobre a própria razão. A fé católica ensina que a razão é um dom de Deus, mas deve ser guiada pela fé (cf. Catecismo §159). A confiança plena em Deus é o alicerce da vida espiritual."
        },
        17: {
          reference: "Provérbios 9:10",
          text: "O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é entendimento.",
          explanation: "O ‘temor do Senhor’ não é medo servil, mas reverência filial. É dom do Espírito Santo (cf. Is 11:2-3) e base da verdadeira sabedoria. A Igreja nos convida a cultivá-lo por meio da oração e dos sacramentos."
        },
        18: {
          reference: "Eclesiastes 3:1",
          text: "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu.",
          explanation: "Esta passagem fala da providência divina. A Igreja ensina que Deus governa todas as coisas com sabedoria e amor (Catecismo §302-305). Devemos confiar nos tempos de Deus para nossa vida."
        },
        19: {
          reference: "Eclesiastes 12:13",
          text: "Teme a Deus e guarda os seus mandamentos, porque isto é o dever de todo o homem.",
          explanation: "A conclusão do Eclesiastes remete à moral cristã: o dever humano é amar e obedecer a Deus. Isso é a essência da vida virtuosa, como ensina o Catecismo nos mandamentos (§2055)."
        },
        20: {
          reference: "Sabedoria 1:13-15",
          text: "Deus não fez a morte, nem se alegra com a destruição dos vivos...",
          explanation: "Essa passagem é fundamental contra a ideia de um Deus cruel. Deus é autor da vida, e a morte entrou no mundo pelo pecado (Sabedoria 2:23-24). A Igreja ensina que a morte é vencida em Cristo."
        },
        21: {
          reference: "Sabedoria 3:1-3",
          text: "As almas dos justos estão nas mãos de Deus...",
          explanation: "Uma das passagens mais citadas nos funerais católicos, ela expressa a esperança da ressurreição. Ensina sobre a imortalidade da alma, verdade central da fé cristã (cf. Catecismo §366)."
        },
        22: {
          reference: "Sabedoria 7:22-30",
          text: "Na sabedoria há um espírito inteligente, santo, único...",
          explanation: "Esse texto descreve a sabedoria como uma manifestação do Espírito Santo e do Verbo, sendo interpretado em chave cristológica."
        },
        23: {
          reference: "Eclesiástico 2:1",
          text: "Filho, se entrares para o serviço de Deus, prepara-te para a provação.",
          explanation: "A vida cristã implica cruz. A perseverança nas provações é virtude necessária para os santos (cf. Catecismo §1808)."
        },
        24: {
          reference: "Eclesiástico 3:2-6",
          text: "O Senhor honra o pai nos filhos e confirma sobre eles a autoridade da mãe...",
          explanation: "Base do quarto mandamento, mostra o valor da família. A Igreja defende o papel dos pais como educadores e protetores da fé (cf. Catecismo §2214-2220)."
        },
        25: {
          reference: "Eclesiástico 7:36",
          text: "Em todas as tuas ações, lembra-te do teu fim, e nunca pecarás.",
          explanation: "A meditação sobre a morte (memento mori) é prática cristã antiga que leva à santidade (cf. Eclo 14:12; Catecismo §1014)."
        },
        26: {
          reference: "Eclesiástico 15:14-17",
          text: "Deus criou o homem desde o princípio e o deixou nas mãos do seu próprio arbítrio...",
          explanation: "Confirma a liberdade humana e a responsabilidade moral, ensinamentos centrais do Catecismo (§1730-1742)."
        },
        27: {
          reference: "Eclesiástico 17:1-14",
          text: "Criou o homem da terra... pôs diante dele mandamentos...",
          explanation: "Ensina que a Lei de Deus foi gravada no coração humano. Ecoa a lei natural e a consciência (cf. Catecismo §1954-1960)."
        },
        28: {
          reference: "Eclesiástico 24:1-8",
          text: "A sabedoria louvará a si mesma... habitei em Sião.",
          explanation: "A sabedoria é aqui figura da Virgem Maria e do Verbo. A Igreja interpreta este texto marianamente na liturgia."
        },
        29: {
          reference: "Eclesiástico 38:1-8",
          text: "Honra o médico por causa da necessidade, porque foi o Altíssimo quem o criou...",
          explanation: "Reconhece a medicina como dom de Deus. A Igreja valoriza a ciência médica e a união entre fé e razão."
        },
        30: {
          reference: "Eclesiástico 51:13-30",
          text: "Desde a minha juventude procurei a sabedoria abertamente...",
          explanation: "Um louvor à busca da sabedoria, que é Cristo. A formação intelectual é parte da vida cristã, unida à vida espiritual."
        },
        31: {
          reference: "Baruc 3:36-38",
          text: "Este é o nosso Deus... apareceu na terra e conviveu com os homens.",
          explanation: "Profecia da Encarnação. Deus se fez homem, verdade central da fé católica (cf. Catecismo §456-460)."
        },
      },
      august: {
        1: {
          reference: "1 Macabeus 1:1-4",
          text: "Sucedeu que, depois de Alexandre, filho de Filipe, o macedônio... tomou o império.",
          explanation: "Este início da história de 1 Macabeus apresenta o contexto histórico da luta pela independência do povo judeu. A Igreja ensina que a fidelidade a Deus exige resistência ao paganismo, como vemos nos Macabeus."
        },
        2: {
          reference: "1 Macabeus 1:11-15",
          text: "Naqueles dias saíram de Israel homens ímpios, que incitaram muitos, dizendo: Vamos fazer um pacto com os gentios que nos cercam.",
          explanation: "O texto destaca a apostasia do povo, que escolhe seguir os caminhos dos gentios. A Igreja católica nos alerta contra as influências externas que podem nos afastar de Deus (cf. Catecismo §2112)."
        },
        3: {
          reference: "1 Macabeus 2:15-22",
          text: "Então os reis da terra se reuniram... e quem é fiel à aliança de Deus será honrado.",
          explanation: "Neste episódio, Matatias e seus filhos resistem à imposição da idolatria. A Igreja católica ensina que a fidelidade a Deus deve prevalecer, mesmo quando confrontada com perseguições (cf. Catecismo §2472)."
        },
        4: {
          reference: "1 Macabeus 2:42-50",
          text: "Matatias exorta seus filhos a manterem a fé em Deus, e declara: ‘O que vale é a obediência a Deus.’",
          explanation: "Matatias representa a coragem na fé, defendendo o princípio de que devemos viver de acordo com a Palavra de Deus, mesmo diante de adversidades. A fidelidade a Deus é central para a Igreja."
        },
        5: {
          reference: "1 Macabeus 2:59-60",
          text: "O Senhor fez com que Elias se levantasse como uma chama de fogo, e seu verbo queimava como uma tocha.",
          explanation: "Aqui, Matatias compara a luta pela fé com o exemplo de Elias. A Igreja ensina que os profetas como Elias nos mostram como devemos manter a fé firme, sem vacilar diante da adversidade."
        },
        6: {
          reference: "1 Macabeus 4:36-38",
          text: "Então Judas disse: ‘Hoje vamos dedicar o altar e purificar o templo’... E fizeram com que o altar fosse reconstruído.",
          explanation: "Este é o momento da dedicação do altar, restaurando a pureza do templo. A Igreja valoriza a purificação e o arrependimento, visto que a dedicação ao culto de Deus é uma parte central da vida cristã."
        },
        7: {
          reference: "1 Macabeus 4:59",
          text: "E Judas e seus irmãos celebraram a festa da dedicação do altar com alegria e exultação, porque foi um dia de grande vitória.",
          explanation: "A Festa da Dedicação (Hanucá) é uma lembrança da vitória contra as forças de opressão. Para a Igreja, celebrar a vitória de Cristo é uma festa de vitória sobre o pecado e a morte."
        },
        8: {
          reference: "2 Macabeus 1:18-36",
          text: "Quando Judas ouviu falar do ato de dar esmolas, ficou com grande alegria e louvou a Deus.",
          explanation: "2 Macabeus nos fala sobre as orações pelos mortos e a prática de dar esmolas. A Igreja católica utiliza essa passagem para ensinar a doutrina do purgatório (cf. Catecismo §1032), defendendo a oração pelos falecidos."
        },
        9: {
          reference: "2 Macabeus 2:1-8",
          text: "Após a morte de Jeremias, os judeus esconderam a Arca da Aliança, como nos ensina o livro de 2 Macabeus.",
          explanation: "Este texto apresenta a reverência pelas coisas sagradas. Para a Igreja, o respeito pelo que é sagrado deve ser transmitido de geração em geração."
        },
        10: {
          reference: "2 Macabeus 3:1-6",
          text: "O sumo sacerdote orava ao Senhor para que poupasse a cidade de Jerusalém de ser destruída.",
          explanation: "Aqui vemos a oração pelos bens espirituais e a cidade de Jerusalém. A Igreja ensina que nossas orações podem interceder por nossa cidade e pela Igreja (cf. Catecismo §2640)."
        },
        11: {
          reference: "2 Macabeus 5:1-19",
          text: "O rei Antíoco, perturbado por visões, ordena a execução de sacerdotes em Jerusalém.",
          explanation: "Este episódio mostra a perseguição dos justos. A Igreja católica ensina que devemos ser fiéis a Deus mesmo sob perseguições (cf. Catecismo §2473)."
        },
        12: {
          reference: "2 Macabeus 6:18-31",
          text: "Ele, tendo em mente a Lei de Deus, preferiu morrer antes de transgredir a Lei.",
          explanation: "O exemplo de Eleazar é uma grande lição sobre fidelidade. A Igreja ensina que a fidelidade à moral cristã, mesmo até a morte, é um dos maiores testemunhos de fé (cf. Catecismo §2473)."
        },
        13: {
          reference: "2 Macabeus 7:1-2",
          text: "Sete irmãos foram martirizados pela sua fé em Deus, e sua mãe os acompanhou na dor, sendo um grande testemunho de fé.",
          explanation: "Este é um grande exemplo de martírio cristão, demonstrando que a fidelidade a Deus deve ser mantida, mesmo diante da morte. A Igreja celebra esses mártires como heróis da fé."
        },
        14: {
          reference: "2 Macabeus 12:44-46",
          text: "Ele fez uma expiação pelos mortos, para que fossem libertados do pecado.",
          explanation: "Este versículo é um dos principais para a doutrina do purgatório, conforme ensinado pela Igreja Católica. O Catecismo explica que a oração pelos mortos é eficaz para a purificação da alma (cf. Catecismo §1032)."
        },
        15: {
          reference: "2 Macabeus 14:41-42",
          text: "Judas Maccabeus ordenou que se fizesse uma oferta pelo pecado dos homens que caíram durante a batalha.",
          explanation: "Judas continua a oração pelos mortos, mostrando a prática de interceder pelos falecidos. A Igreja católica vê nesta ação um apoio às orações pelo purgatório."
        },
        16: {
          reference: "2 Macabeus 15:12-14",
          text: "Judas Maccabeus teve uma visão de seus irmãos mortos e se alegraram, pois suas almas estavam na paz de Deus.",
          explanation: "Essa visão é uma expressão de esperança e confiança na misericórdia divina. A Igreja ensina que os justos, mesmo após a morte, estão com Deus em paz (cf. Catecismo §1020)."
        },
        17: {
          reference: "2 Macabeus 15:36-39",
          text: "Judas e seus irmãos, em um último esforço para reconquistar a terra, clamaram ao Senhor com grande fé.",
          explanation: "A luta de Judas Maccabeus é uma luta pela fidelidade a Deus, e a oração intensa de seu exército mostra como a Igreja católica ensina que a oração comunitária tem um poder profundo, especialmente quando é feita em nome da justiça divina (cf. Catecismo §2641)."
        },
        18: {
          reference: "1 Reis 18:36-39",
          text: "Ó Senhor, Deus de Abraão, de Isaque e de Israel, que fique claro hoje que Tu és Deus em Israel e que eu sou o Teu servo.",
          explanation: "O desafio de Elias contra os profetas de Baal mostra a necessidade de testemunharmos a fé pública em Deus. A Igreja católica nos ensina que devemos viver nossa fé abertamente, como um sinal de testemunho da verdade (cf. Catecismo §2472)."
        },
        19: {
          reference: "1 Reis 19:11-13",
          text: "Sai da caverna e fica em pé, diante do Senhor... e o Senhor passou, mas não estava no vento, no terremoto, nem no fogo, mas na brisa suave.",
          explanation: "Deus se revela a Elias na brisa suave, ensinando-nos que devemos estar atentos ao sussurro da Sua voz, que muitas vezes vem na quietude. A Igreja ensina que devemos ouvir e responder ao chamado divino em nosso coração (cf. Catecismo §2700)."
        },
        20: {
          reference: "1 Reis 20:28",
          text: "Diz o Senhor: ‘Eu entregarei esta grande multidão nas tuas mãos, para que saibas que eu sou o Senhor.’",
          explanation: "Deus age diretamente na história, provando que Ele é soberano sobre todas as coisas. A Igreja nos ensina que devemos confiar plenamente na providência divina, mesmo diante das dificuldades (cf. Catecismo §302)."
        },
        21: {
          reference: "Salmos 51:10-12",
          text: "Cria em mim um coração puro, ó Deus, e renova dentro de mim um espírito reto.",
          explanation: "O Salmo 51 é um apelo à purificação interior, expressando o desejo de reconciliação com Deus. A Igreja nos ensina que, ao confessar nossos pecados, somos purificados e renovados pela misericórdia divina (cf. Catecismo §1422)."
        },
        22: {
          reference: "Salmos 19:7-11",
          text: "A lei do Senhor é perfeita, ela reconforta a alma; o testemunho do Senhor é fiel, ele dá sabedoria aos simples.",
          explanation: "Este salmo celebra a perfeição da Lei de Deus, que é uma luz para nosso caminho. A Igreja católica ensina que a Lei divina, expressa nas Escrituras, é uma fonte constante de sabedoria e orientação para os fiéis (cf. Catecismo §2050)."
        },
        23: {
          reference: "Isaías 9:6-7",
          text: "Porque um menino nos nasceu, um filho nos foi dado, e o governo está sobre seus ombros.",
          explanation: "Este versículo, profético, é uma grande referência ao nascimento de Cristo. A Igreja celebra essa profecia como cumprimento em Jesus Cristo, a quem seguimos como o Salvador prometido, Senhor e Rei eterno (cf. Catecismo §436)."
        },
        24: {
          reference: "Isaías 11:1-2",
          text: "Um ramo sairá do tronco de Jessé, e das suas raízes brotará um renovo.",
          explanation: "Isaías antecipa a vinda de Cristo, que será descendente do rei Davi. A Igreja vê nesta passagem a promessa da encarnação de Cristo e a vinda do Messias (cf. Catecismo §711)."
        },
        25: {
          reference: "Isaías 53:3-5",
          text: "Ele foi desprezado e rejeitado pelos homens... mas ele foi ferido pelas nossas transgressões, moído pelas nossas iniquidades.",
          explanation: "A Igreja vê em Isaías 53 a profecia do sofrimento de Cristo, que se sacrificaria por nossos pecados. Esse texto é central na nossa compreensão da Paixão e Redenção de Jesus (cf. Catecismo §601)."
        },
        26: {
          reference: "Isaías 55:6-9",
          text: "Buscai o Senhor enquanto se pode achar, invocai-o enquanto está perto.",
          explanation: "Este convite à conversão é um apelo ao arrependimento. A Igreja católica ensina que devemos buscar o Senhor em todos os momentos da vida, especialmente quando Ele nos chama à conversão (cf. Catecismo §1427)."
        },
        27: {
          reference: "Jeremias 31:31-34",
          text: "Eis que virão dias, diz o Senhor, em que farei uma nova aliança com a casa de Israel e com a casa de Judá.",
          explanation: "Esta passagem anuncia a Nova Aliança, que será realizada em Cristo. A Igreja católica vê em Cristo o cumprimento da promessa de Deus de um novo pacto, que é realizado no sangue de Jesus (cf. Catecismo §1212)."
        },
        28: {
          reference: "Ezequiel 36:26-27",
          text: "Dar-vos-ei um coração novo e porei dentro de vós um espírito novo.",
          explanation: "A promessa de Deus de transformar os corações é cumprida em Cristo, que nos dá um coração novo por meio do Espírito Santo. A Igreja ensina que a graça do Espírito Santo é o que transforma e purifica nossas vidas (cf. Catecismo §698)."
        },
        29: {
          reference: "Daniel 7:13-14",
          text: "Eu vi alguém semelhante a um filho de homem, que se aproximou do ancião de dias e foi apresentado diante dele.",
          explanation: "Esta passagem é vista pela Igreja como uma profecia sobre a Ascensão de Cristo e seu domínio eterno. Jesus é o Filho do Homem que vem reinar sobre todas as nações (cf. Catecismo §668)."
        },
        30: {
          reference: "Oséias 6:1-3",
          text: "Vinde, voltemos para o Senhor... Ele nos curará, ele nos sarará das nossas feridas.",
          explanation: "Oséias faz um apelo ao arrependimento e à reconciliação com Deus. A Igreja ensina que o sacramento da Penitência nos cura dos pecados e nos restaura à amizade com Deus (cf. Catecismo §1422)."
        },
        31: {
          reference: "Amós 5:14-15",
          text: "Buscai o bem e não o mal, para que vivais, e assim o Senhor Deus estará convosco.",
          explanation: "O profeta Amós nos exorta a viver conforme a justiça de Deus, fazendo o bem. A Igreja nos ensina que a prática da justiça e da caridade é essencial para a vida cristã (cf. Catecismo §2447)."
        },
      },
      september: {
        1: {
          reference: "Amós 8:11-12",
          text: "Eis que vêm dias, diz o Senhor Deus, em que enviarei fome sobre a terra, não fome de pão, nem sede de água, mas de ouvir a palavra do Senhor.",
          explanation: "Amós profetiza um tempo de afastamento da palavra de Deus, um alerta para a importância de viver conforme os ensinamentos de Deus. A Igreja católica nos ensina que a palavra de Deus deve ser o alimento espiritual de cada dia (cf. Catecismo §103)."
        },
        2: {
          reference: "Miqueias 6:6-8",
          text: "Com que me apresentarei ao Senhor, e com que me inclinarei perante o Deus altíssimo? Farei sacrifícios de animais?",
          explanation: "O profeta Miqueias nos lembra que Deus não se agrada de sacrifícios vazios, mas do coração humilde e arrependido. A Igreja ensina que a verdadeira adoração a Deus envolve a conversão do coração e a prática da justiça (cf. Catecismo §2559)."
        },
        3: {
          reference: "Naum 1:7",
          text: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que nele se refugiam.",
          explanation: "Naum nos fala do refúgio que Deus oferece aos justos nos tempos de angústia. A Igreja nos ensina que Deus é nossa fortaleza em tempos de tribulação e que devemos confiar Nele em todos os momentos de dificuldade (cf. Catecismo §2688)."
        },
        4: {
          reference: "Habacuque 2:4",
          text: "O justo viverá pela sua fé.",
          explanation: "Este versículo é central para a compreensão da fé cristã. A Igreja católica ensina que a fé é o fundamento da nossa salvação, sendo a virtude pela qual nos relacionamos com Deus e confiamos em Sua promessa (cf. Catecismo §1814)."
        },
        5: {
          reference: "Sofonias 3:17",
          text: "O Senhor, teu Deus, está no meio de ti, Ele é poderoso para salvar.",
          explanation: "Sofonias nos lembra da presença e do poder de Deus em nossas vidas. A Igreja católica ensina que, em Cristo, temos um Salvador que nos dá a força para enfrentar as dificuldades da vida (cf. Catecismo §517)."
        },
        6: {
          reference: "Ageu 1:7-8",
          text: "Assim diz o Senhor dos Exércitos: Considerai os vossos caminhos. Sobe ao monte e traz madeira, e edifica a casa.",
          explanation: "Ageu nos exorta a voltar à obra de Deus com zelo e dedicação. A Igreja nos ensina que devemos estar sempre prontos a servir a Deus e à Sua Igreja, colocando nosso trabalho a serviço do Reino de Deus (cf. Catecismo §2175)."
        },
        7: {
          reference: "Zacarias 9:9",
          text: "Exulta muito, filha de Sião! Grita de alegria, filha de Jerusalém! Eis que o teu Rei vem a ti, justo e vitorioso.",
          explanation: "Este versículo é uma profecia sobre a entrada triunfal de Jesus em Jerusalém. A Igreja vê em Jesus o Rei prometido, que vem para salvar o Seu povo (cf. Catecismo §559)."
        },
        8: {
          reference: "Zacarias 12:10",
          text: "Sobre a casa de Davi e sobre os habitantes de Jerusalém, derramarei o espírito de graça e de súplica.",
          explanation: "Zacarias profetiza o derramamento do Espírito Santo, que ocorre em Pentecostes. A Igreja ensina que o Espírito Santo é o guia e consolador dos cristãos, conduzindo-nos à verdade e à santidade (cf. Catecismo §683)."
        },
        9: {
          reference: "Malaquias 3:1-4",
          text: "Eis que Eu envio o Meu mensageiro, que preparará o caminho diante de Mim; e de repente virá ao Seu templo o Senhor, a quem vós buscais.",
          explanation: "Malaquias profetiza a vinda de João Batista e de Cristo. A Igreja católica ensina que Cristo, o Messias esperado, veio para purificar e salvar o Seu povo (cf. Catecismo §524)."
        },
        10: {
          reference: "Mateus 5:3-12",
          text: "Bem-aventurados os pobres em espírito, porque deles é o Reino dos Céus.",
          explanation: "As bem-aventuranças representam a verdadeira felicidade segundo os valores do Reino de Deus. A Igreja ensina que a felicidade verdadeira é encontrada na humildade, misericórdia e pureza de coração (cf. Catecismo §1716)."
        },
        11: {
          reference: "Mateus 7:7-8",
          text: "Pedi, e vos será dado; buscai, e encontrareis; batei, e vos será aberto.",
          explanation: "Jesus nos ensina a confiar na generosidade de Deus. A Igreja nos ensina que devemos orar com confiança, sabendo que Deus nos escuta e responde às nossas necessidades (cf. Catecismo §2620)."
        },
        12: {
          reference: "Mateus 10:32-33",
          text: "Todo aquele que me confessar diante dos homens, eu também o confessarei diante de meu Pai que está nos céus.",
          explanation: "A Igreja católica ensina que devemos ser testemunhas de Cristo em nossa vida e em nossas palavras. Nossa profissão de fé é um testemunho da verdade (cf. Catecismo §1816)."
        },
        13: {
          reference: "Mateus 11:28-30",
          text: "Vinde a Mim, todos os que estais cansados e sobrecarregados, e Eu vos aliviarei.",
          explanation: "Jesus nos convida a descansar Nele. A Igreja nos ensina que Cristo é nosso refúgio em todos os momentos de aflição e dificuldade (cf. Catecismo §459)."
        },
        14: {
          reference: "Mateus 12:38-40",
          text: "Então alguns dos escribas e fariseus disseram: ‘Mestre, queremos ver um sinal da parte de Ti.’",
          explanation: "Jesus responde que o sinal que Ele dará é o sinal de Jonas, ou seja, Sua morte e ressurreição. A Igreja católica ensina que o maior sinal de Cristo é Sua paixão, morte e ressurreição, que nos garantem a salvação (cf. Catecismo §571)."
        },
        15: {
          reference: "Mateus 13:44-46",
          text: "O Reino dos Céus é semelhante a um tesouro escondido no campo... e, vendendo tudo o que tem, compra aquele campo.",
          explanation: "Jesus nos ensina que o Reino dos Céus é de valor incomparável, devendo ser buscado com todo o coração. A Igreja ensina que o Reino de Deus é o maior bem que podemos buscar (cf. Catecismo §545)."
        },
        16: {
          reference: "Mateus 14:22-33",
          text: "Jesus, vendo que eles estavam em grande angústia, veio até eles, andando sobre as águas.",
          explanation: "Este milagre de Jesus sobre as águas nos ensina que Ele está sempre presente para nos salvar nas tempestades da vida. A Igreja católica nos ensina que, em Cristo, temos nossa segurança e salvação, mesmo nas dificuldades (cf. Catecismo §2631)."
        },
        17: {
          reference: "Mateus 16:13-20",
          text: "Tu és Pedro, e sobre esta pedra edificarei a minha Igreja.",
          explanation: "Jesus confere a Pedro a missão de ser o fundamento da Sua Igreja. A Igreja católica ensina que Pedro é o primeiro papa, e sobre ele a Igreja foi edificada (cf. Catecismo §552)."
        },
        18: {
          reference: "Mateus 17:1-8",
          text: "Enquanto Ele orava, a aparência de Seu rosto mudou, e a Sua roupa ficou resplandecente.",
          explanation: "A transfiguração de Jesus diante de Pedro, Tiago e João revela a Sua glória divina. A Igreja nos ensina que esse evento prefigura a glória de Cristo após Sua ressurreição (cf. Catecismo §554)."
        },
        19: {
          reference: "Mateus 18:21-22",
          text: "Então Pedro, aproximando-se, lhe perguntou: ‘Senhor, até quantas vezes meu irmão pecará contra mim, e eu o perdoarei? Até sete vezes?’",
          explanation: "Jesus nos ensina sobre a necessidade de perdoar incondicionalmente. A Igreja católica ensina que o perdão é essencial para a vida cristã, pois é um reflexo do perdão que Deus nos concede (cf. Catecismo §2840)."
        },
        20: {
          reference: "Mateus 19:16-24",
          text: "E, eis que um jovem se aproximou de Jesus e perguntou: ‘Mestre, o que devo fazer de bom para ter a vida eterna?’",
          explanation: "Jesus ensina sobre a necessidade de desapego das riquezas e o seguimento fiel de Seus mandamentos para alcançar a vida eterna. A Igreja nos ensina que a salvação é dada àqueles que seguem Cristo com um coração puro (cf. Catecismo §2544)."
        },
        21: {
          reference: "Mateus 20:1-16",
          text: "O Reino dos Céus é semelhante a um proprietário de uma vinha que saiu ao amanhecer para contratar trabalhadores para a sua vinha.",
          explanation: "Jesus conta a parábola dos trabalhadores na vinha para ensinar sobre a generosidade de Deus e a igualdade do Reino de Deus. A Igreja ensina que o Reino de Deus é uma dádiva gratuita, disponível a todos (cf. Catecismo §546)."
        },
        22: {
          reference: "Mateus 21:28-32",
          text: "Mas, que vos parece? Um homem tinha dois filhos. Aproximando-se do primeiro, disse-lhe: ‘Filho, vai trabalhar hoje na minha vinha.’",
          explanation: "Jesus nos ensina a verdadeira obediência, que vai além das palavras e se reflete nas ações. A Igreja ensina que a fé se manifesta por meio de obras, e é pela obediência à vontade de Deus que mostramos nosso amor por Ele (cf. Catecismo §2068)."
        },
        23: {
          reference: "Mateus 22:1-14",
          text: "O Reino dos Céus é semelhante a um rei que fez um banquete de casamento para o seu filho.",
          explanation: "Jesus usa a parábola do banquete de casamento para ilustrar a abertura do Reino de Deus a todos, mas também para advertir sobre a necessidade de preparar-se adequadamente para a vida eterna. A Igreja ensina que a preparação para o Reino exige arrependimento e conversão sincera (cf. Catecismo §1069)."
        },
        24: {
          reference: "Mateus 22:15-22",
          text: "Dai, pois, a César o que é de César, e a Deus o que é de Deus.",
          explanation: "Jesus ensina sobre a separação entre os deveres civis e espirituais, enfatizando a importância de dar a Deus o que Lhe é devido. A Igreja ensina que, enquanto respeitamos a autoridade civil, nossa lealdade primeira deve ser a Deus (cf. Catecismo §2242)."
        },
        25: {
          reference: "Mateus 23:1-12",
          text: "Naquela hora, Jesus falou à multidão e aos seus discípulos, dizendo: ‘Na cadeira de Moisés, se assentaram os escribas e fariseus.’",
          explanation: "Jesus adverte contra a hipocrisia dos líderes religiosos que falam, mas não praticam. A Igreja ensina que os líderes devem dar exemplo de virtude e humildade, sendo verdadeiros seguidores de Cristo (cf. Catecismo §874)."
        },
        26: {
          reference: "Mateus 24:3-14",
          text: "E, estando Ele sentado no monte das Oliveiras, os discípulos aproximaram-se d'Ele e perguntaram em particular: ‘Dize-nos, quando serão essas coisas? E qual será o sinal da tua vinda e do fim do mundo?’",
          explanation: "Jesus fala sobre os sinais do fim dos tempos e a necessidade de vigilância. A Igreja católica ensina que devemos estar preparados para o retorno de Cristo, vivendo na esperança e na santidade (cf. Catecismo §672)."
        },
        27: {
          reference: "Mateus 25:1-13",
          text: "Então o Reino dos Céus será semelhante a dez virgens que, tomando as suas lâmpadas, saíram ao encontro do esposo.",
          explanation: "A parábola das dez virgens nos ensina sobre a importância de estar preparado para a vinda de Cristo. A Igreja ensina que a vigilância espiritual e a preparação através da fé são essenciais para a salvação (cf. Catecismo §674)."
        },
        28: {
          reference: "Mateus 25:14-30",
          text: "Pois será como um homem que, partindo para uma viagem, chamou os seus servos e lhes confiou os seus bens.",
          explanation: "A parábola dos talentos nos ensina que devemos usar bem os dons que Deus nos deu. A Igreja nos ensina que somos chamados a servir a Deus e aos outros com generosidade, utilizando os talentos recebidos para a glória de Deus (cf. Catecismo §2006)."
        },
        29: {
          reference: "Mateus 25:31-46",
          text: "Quando o Filho do Homem vier em Sua glória, e todos os anjos com Ele, então se assentará no Seu trono de glória.",
          explanation: "Jesus fala do juízo final, em que seremos julgados pelas obras de misericórdia. A Igreja ensina que a salvação depende da nossa prática da caridade e da misericórdia, especialmente para com os mais necessitados (cf. Catecismo §1039)."
        },
        30: {
          reference: "Mateus 26:36-46",
          text: "Então Jesus foi com eles a um lugar chamado Getsêmani, e disse aos discípulos: ‘Sentai-vos aqui, enquanto Eu vou orar.’",
          explanation: "No jardim do Getsêmani, Jesus nos dá exemplo de oração e submissão à vontade de Deus. A Igreja ensina que a oração é essencial para a vida cristã, especialmente em momentos de sofrimento e dificuldades (cf. Catecismo §2744)."
        },
      },
      october: {
        1: {
          reference: "Marcos 1:9-15",
          text: "Naqueles dias, veio Jesus de Nazaré, da Galileia, e foi batizado por João no Jordão.",
          explanation: "O batismo de Jesus é um exemplo de humildade e obediência ao plano de Deus. A Igreja ensina que o batismo é o sacramento da salvação, purificando-nos do pecado original e iniciando-nos na vida em Cristo (cf. Catecismo §1213)."
        },
        2: {
          reference: "Marcos 1:16-20",
          text: "E, passando ao longo do mar da Galileia, viu Simão e seu irmão André, que estavam lançando as redes ao mar, pois eram pescadores.",
          explanation: "Jesus chama os primeiros discípulos para segui-Lo, exemplificando o chamado à vocação cristã. A Igreja ensina que todos são chamados a seguir Cristo, cada um de acordo com sua vocação (cf. Catecismo §825)."
        },
        3: {
          reference: "Marcos 2:1-12",
          text: "Jesus, vendo a fé que eles tinham, disse ao paralítico: ‘Filho, os teus pecados estão perdoados.’",
          explanation: "Jesus perdoa os pecados e cura o paralítico, demonstrando Sua autoridade divina. A Igreja ensina que a misericórdia de Deus está disponível através do sacramento da reconciliação, para a remissão dos pecados (cf. Catecismo §1422)."
        },
        4: {
          reference: "Marcos 2:13-17",
          text: "E, passando outra vez por junto do mar, viu Jesus Levi, filho de Alfeu, sentado na coletoria, e disse-lhe: ‘Segue-me.’",
          explanation: "Jesus chama Levi, o cobrador de impostos, para ser Seu discípulo, demonstrando que Sua misericórdia alcança todos, sem exceções. A Igreja ensina que a salvação é para todos, inclusive para os pecadores, que são convidados à conversão (cf. Catecismo §850)."
        },
        5: {
          reference: "Marcos 3:1-6",
          text: "E entrou de novo na sinagoga, e estava ali um homem que tinha a mão ressequida. E observaram a Jesus, para ver se o curaria no sábado, para o acusarem.",
          explanation: "Jesus cura no sábado, mostrando que a misericórdia de Deus é mais importante que a observância rígida da lei. A Igreja ensina que as obras de misericórdia são superiores aos rituais, pois revelam a verdadeira vontade de Deus (cf. Catecismo §2464)."
        },
        6: {
          reference: "Marcos 4:35-41",
          text: "Naquele dia, ao cair da tarde, disse Ele a seus discípulos: ‘Vamos para o outro lado.’",
          explanation: "Jesus acalma a tempestade, revelando Seu poder sobre a criação e ensinando os discípulos a confiar n’Ele em meio às dificuldades. A Igreja ensina que devemos confiar em Deus, mesmo quando enfrentamos tempestades na vida (cf. Catecismo §305)."
        },
        7: {
          reference: "Marcos 5:21-43",
          text: "Vindo Jesus de novo para a outra margem do mar, reuniu-se grande multidão junto dele, e Ele ficou à beira-mar.",
          explanation: "Jesus cura a filha de Jairo e a mulher que sofria de hemorragia, mostrando Sua compaixão e poder de cura. A Igreja ensina que Jesus é o curador das nossas doenças físicas e espirituais, e que devemos ter fé em Seu poder (cf. Catecismo §1505)."
        },
        8: {
          reference: "Marcos 6:30-44",
          text: "E disse-lhes: ‘Dai-lhes vós mesmos de comer.’ Eles, porém, disseram-lhe: ‘Devemos ir comprar pão para dar-lhes de comer?’",
          explanation: "Jesus multiplica os pães e peixes, realizando o milagre da multiplicação para alimentar uma grande multidão. A Igreja ensina que o milagre da multiplicação é um sinal da abundância da graça de Deus, especialmente na Eucaristia, onde Jesus se oferece como alimento para a vida eterna (cf. Catecismo §1323)."
        },
        9: {
          reference: "Marcos 8:27-30",
          text: "E, no caminho, perguntou-lhes: ‘Quem dizem os homens que Eu sou?’",
          explanation: "Pedro confessa que Jesus é o Cristo, o Messias prometido. A Igreja ensina que Jesus é o Filho de Deus, o Salvador do mundo, e a fé em Sua divindade e missão é essencial para a salvação (cf. Catecismo §422)."
        },
        10: {
          reference: "Marcos 9:2-10",
          text: "E Jesus os conduziu a um alto monte, onde se transfigurou diante deles; e suas vestes se tornaram resplandecentes, extremamente brancas, como nenhum lavadeiro na terra poderia alvejar.",
          explanation: "A Transfiguração de Jesus revela Sua divindade e antecipa Sua glória no céu. A Igreja ensina que a Transfiguração nos mostra a verdadeira identidade de Jesus e nos fortalece na esperança de nossa própria transfiguração na vida eterna (cf. Catecismo §556)."
        },
        11: {
          reference: "Marcos 9:14-29",
          text: "E, ao chegar aonde estavam os discípulos, viu uma grande multidão ao redor deles, e os escribas que discutiam com eles.",
          explanation: "Jesus expulsa um espírito impuro e ensina sobre a necessidade de fé para realizar milagres. A Igreja ensina que a fé em Jesus é fundamental para a cura e a libertação, tanto espiritual quanto física (cf. Catecismo §1501)."
        },
        12: {
          reference: "Marcos 10:17-22",
          text: "E, quando estava indo a caminho, correu um homem e, ajoelhando-se diante dele, perguntou-lhe: ‘Bom Mestre, que farei para herdar a vida eterna?’",
          explanation: "Jesus ensina sobre o desapego das riquezas e a necessidade de seguir a vontade de Deus. A Igreja ensina que a salvação exige renunciar ao egoísmo e ao materialismo, colocando Deus e os outros em primeiro lugar (cf. Catecismo §2544)."
        },
        13: {
          reference: "Marcos 10:35-45",
          text: "Então Tiago e João, filhos de Zebedeu, aproximaram-se de Jesus, dizendo: ‘Mestre, queremos que nos faças o que te pedirmos.’",
          explanation: "Jesus ensina os discípulos sobre a verdadeira grandeza, que se manifesta no serviço e na humildade. A Igreja ensina que a liderança cristã é marcada pela humildade e pelo serviço aos outros (cf. Catecismo §922)."
        },
        14: {
          reference: "Marcos 11:1-10",
          text: "Quando se aproximaram de Jerusalém e chegaram a Betfagé, junto ao monte das Oliveiras, enviou Jesus dois de seus discípulos, e lhes disse: ‘Ide à aldeia que está em frente de vós.’",
          explanation: "Jesus entra em Jerusalém montado em um jumento, cumprindo a profecia messiânica. A Igreja ensina que a entrada triunfal de Jesus em Jerusalém marca o início de Sua paixão e morte pela salvação da humanidade (cf. Catecismo §559)."
        },
        15: {
          reference: "Marcos 11:15-19",
          text: "E entrou no templo e começou a expulsar os que vendiam e compravam no templo, e derrubou as mesas dos cambistas e as cadeiras dos que vendiam pombas.",
          explanation: "Jesus purifica o templo, mostrando que a casa de Deus deve ser um lugar de oração e santidade. A Igreja ensina que o templo, como a Igreja, deve ser um lugar de reverência e devoção (cf. Catecismo §1181)."
        },
        "16": {
      "reference": "Marcos 11:20-26",
      "text": "E, passando pela manhã, viram a figueira seca desde as raízes.",
      "explanation": "Jesus ensina sobre a importância da fé e da oração, mostrando que a fé inabalável pode mover montanhas. A Igreja ensina que a oração deve ser sincera e perseverante, e que a fé é o fundamento da vida cristã (cf. Catecismo §2558)."
    },
    "17": {
      "reference": "Marcos 12:13-17",
      "text": "Então enviaram a Ele alguns fariseus e herodianos, para que O apanhassem em alguma palavra.",
      "explanation": "Jesus responde à questão sobre o imposto a César, ensinando a importância de cumprir as obrigações civis e espirituais. A Igreja ensina que devemos dar a Deus o que é de Deus e ao Estado o que é do Estado, em equilíbrio (cf. Catecismo §2240)."
    },
    "18": {
      "reference": "Marcos 12:28-34",
      "text": "E, aproximando-se um dos escribas, que ouvira a discussão, perguntando-Lhe qual era o principal de todos os mandamentos.",
      "explanation": "Jesus resume os mandamentos em amar a Deus e ao próximo, mostrando que o amor é o fundamento da vida cristã. A Igreja ensina que o amor a Deus e ao próximo é a base de toda a moral cristã (cf. Catecismo §2055)."
    },
    "19": {
      "reference": "Marcos 12:35-37",
      "text": "E, ensinando no templo, disse: ‘Como dizem os escribas que o Cristo é Filho de Davi?’",
      "explanation": "Jesus questiona os fariseus sobre Sua identidade, revelando Sua divindade. A Igreja ensina que Jesus é o Filho de Deus, verdadeiro Deus e verdadeiro Homem, e que devemos reconhecer Sua autoridade divina (cf. Catecismo §443)."
    },
    "20": {
      "reference": "Marcos 12:38-40",
      "text": "E dizia-lhes, no seu ensinamento: ‘Acautelai-vos dos escribas, que gostam de andar com vestes longas, e de ser saudados nas praças.’",
      "explanation": "Jesus adverte contra a hipocrisia dos líderes religiosos, que buscam a fama e a honra humana. A Igreja ensina que a verdadeira liderança é marcada pela humildade e pelo serviço a Deus e aos outros (cf. Catecismo §2759)."
    },
    "21": {
      "reference": "Marcos 12:41-44",
      "text": "E, sentando-se diante do cofre das ofertas, observava como o povo lançava dinheiro no cofre.",
      "explanation": "Jesus exalta a viúva pobre que deu tudo o que tinha, ensinando que o valor da oferta está na generosidade e no sacrifício, e não na quantidade. A Igreja ensina que Deus olha para a intenção do coração, e não para as aparências (cf. Catecismo §2443)."
    },
    "22": {
      "reference": "Marcos 13:1-4",
      "text": "E, saindo Ele do templo, disse-lhe um dos seus discípulos: ‘Mestre, olha que pedras e que construções!’",
      "explanation": "Jesus profetiza a destruição do templo de Jerusalém, mostrando que as coisas terrenas são passageiras. A Igreja ensina que nossa esperança deve estar na vida eterna e nas promessas de Deus, e não nas riquezas e poderes deste mundo (cf. Catecismo §1170)."
    },
    "23": {
      "reference": "Marcos 13:5-13",
      "text": "E Jesus, respondendo, começou a dizer-lhes: ‘Olhai, que ninguém vos engane.’",
      "explanation": "Jesus alerta sobre os tempos de perseguição e engano, exortando à vigilância e perseverança na fé. A Igreja ensina que, em tempos de tribulação, devemos confiar em Deus e permanecer firmes na fé (cf. Catecismo §675)."
    },
    "24": {
      "reference": "Marcos 13:14-23",
      "text": "Mas, quando vires a abominação da desolação, situada onde não deve estar, o que ler, entenda.",
      "explanation": "Jesus fala sobre o fim dos tempos e os sinais da Sua segunda vinda, exortando a vigilância e a preparação espiritual. A Igreja ensina que devemos viver a expectativa da vinda de Cristo, mantendo-nos vigilantes e preparados (cf. Catecismo §673)."
    },
    "25": {
      "reference": "Marcos 13:24-31",
      "text": "Mas, naqueles dias, após aquela tribulação, o sol escurecerá, e a lua não dará a sua luz.",
      "explanation": "Jesus descreve os sinais cósmicos que precedem Sua segunda vinda, ensinando sobre a necessidade de esperança e confiança nas promessas de Deus. A Igreja ensina que, apesar das dificuldades, a vitória final de Cristo será o triunfo da vida e da verdade (cf. Catecismo §1040)."
    },
    "26": {
      "reference": "Marcos 13:32-37",
      "text": "Quanto, porém, àquele dia ou àquela hora, ninguém sabe, nem os anjos no céu, nem o Filho, senão o Pai.",
      "explanation": "Jesus ensina sobre a imprevisibilidade do fim dos tempos, exortando os discípulos à vigilância constante. A Igreja ensina que devemos viver a nossa vida cristã em constante preparação para o retorno de Cristo, sem saber o dia nem a hora (cf. Catecismo §672)."
    },
    "27": {
      "reference": "Marcos 14:1-11",
      "text": "Faltavam dois dias para a Páscoa e, estando Jesus em Betânia, na casa de Simão, o leproso,",
      "explanation": "Uma mulher unge Jesus com um caro perfume, antecipando Sua morte, enquanto os discípulos se indignam. A Igreja ensina que o sacrifício de Jesus é o ponto culminante de Sua missão, e que o amor a Ele se expressa em gestos de generosidade (cf. Catecismo §608)."
    },
    "28": {
      "reference": "Marcos 14:12-16",
      "text": "E, no primeiro dia dos pães asmos, quando se imolava o cordeiro pascal, os discípulos disseram a Jesus: ‘Onde queres que vamos preparar para que comas a Páscoa?’",
      "explanation": "Jesus prepara a Páscoa com Seus discípulos, institui a Última Ceia e revela o significado profundo do Seu sacrifício. A Igreja ensina que a Eucaristia é o memorial da paixão, morte e ressurreição de Cristo, sendo a fonte e o cume da vida cristã (cf. Catecismo §1324)."
    },
    "29": {
      "reference": "Marcos 14:17-21",
      "text": "E, quando chegou à tarde, veio com os doze. E, enquanto estavam à mesa, Jesus disse: ‘Em verdade vos digo que um de vós, o que come comigo, me trairá.’",
      "explanation": "Jesus revela que Judas o trairá, demonstrando a liberdade humana de escolha e a gravidade do pecado. A Igreja ensina que o pecado tem consequências e que a traição a Cristo é uma negação do amor e da fidelidade a Deus (cf. Catecismo §2840)."
    },
    "30": {
      "reference": "Marcos 14:22-25",
      "text": "E, comendo eles, tomou Jesus o pão e, abençoando-o, partiu-o e deu-lhes, dizendo: ‘Tomai, isto é o meu corpo.’",
      "explanation": "Jesus institui a Eucaristia, dando aos Seus discípulos Seu Corpo e Sangue como alimento para a vida eterna. A Igreja ensina que a Eucaristia é o sacrifício de Cristo renovado na missa e o meio pelo qual recebemos a graça divina (cf. Catecismo §1324)."
    },
    "31": {
      "reference": "Marcos 14:26-31",
      "text": "E, cantando um hino, saíram para o monte das Oliveiras.",
      "explanation": "Jesus e os discípulos cantam um hino, demonstrando a importância da oração e da união com Deus em momentos de tribulação. A Igreja ensina que a oração comunitária fortalece a nossa fé e nos prepara para enfrentar os desafios da vida cristã (cf. Catecismo §2626)."
    },
      },
      "november": {
  "1": {
    "reference": "Marcos 14:32-42",
    "text": "E foram para um lugar chamado Getsêmani, e disse aos Seus discípulos: ‘Sentei-vos aqui enquanto oro.’",
    "explanation": "Jesus ora no Getsêmani, mostrando Sua luta interior diante do sofrimento iminente. A Igreja ensina que a oração de Jesus no jardim é um exemplo de como devemos nos entregar à vontade de Deus, especialmente nos momentos de sofrimento (cf. Catecismo §2600)."
  },
  "2": {
    "reference": "Marcos 14:43-52",
    "text": "E logo, enquanto Ele ainda falava, chegou Judas, um dos doze, e com ele uma multidão com espadas e porretes, da parte dos principais sacerdotes, dos escribas e dos anciãos.",
    "explanation": "Judas trai Jesus com um beijo, e Jesus é preso. A Igreja ensina que a traição de Judas e a prisão de Jesus cumprem as Escrituras e mostram a profundidade do amor de Cristo, que Se entrega voluntariamente pelo bem da humanidade (cf. Catecismo §612)."
  },
  "3": {
    "reference": "Marcos 14:53-65",
    "text": "E levaram Jesus à presença do sumo sacerdote, e todos os principais sacerdotes, os anciãos e os escribas se reuniram.",
    "explanation": "Jesus é julgado pelo Sinédrio, e Seu silêncio diante das falsas acusações é um exemplo de Sua humildade e obediência ao Pai. A Igreja ensina que Jesus, mesmo diante da injustiça, revela Sua realeza divina por meio de Seu sofrimento redentor (cf. Catecismo §559)."
  },
  "4": {
    "reference": "Marcos 14:66-72",
    "text": "E, quando Pedro estava embaixo no pátio, chegou uma das criadas do sumo sacerdote, e, vendo a Pedro aquecendo-se, olhou-o e disse: ‘Tu também estavas com Jesus, o Nazareno.’",
    "explanation": "Pedro nega Jesus três vezes, cumprindo a profecia de Cristo. A Igreja ensina que, embora Pedro tenha falhado, o arrependimento e o perdão de Cristo oferecem a graça da restauração e da nova chance (cf. Catecismo §1443)."
  },
  "5": {
    "reference": "Marcos 15:1-5",
    "text": "Logo pela manhã, os principais sacerdotes, com os anciãos, os escribas e todo o Sinédrio, estabeleceram um plano para condenar à morte a Jesus, e o amarraram e o levaram e o entregaram a Pilatos.",
    "explanation": "Jesus é levado diante de Pilatos, e Sua condenação é preparada. A Igreja ensina que a condenação injusta de Cristo é o cumprimento da vontade de Deus para nossa salvação, pois Ele tomou sobre Si os pecados do mundo (cf. Catecismo §599)."
  },
  "6": {
    "reference": "Marcos 15:6-15",
    "text": "E, por ocasião da festa, costumava Pilatos soltar-lhes um prisioneiro, qualquer que fosse, a quem pedissem. E havia um chamado Barrabás, preso com seus companheiros, que havia cometido um homicídio na revolta.",
    "explanation": "Pilatos oferece à multidão a escolha entre Barrabás e Jesus, mas eles escolhem Barrabás. A Igreja ensina que, com Sua condenação, Jesus tomou o lugar do criminoso, mostrando Seu amor redentor, mesmo quando a humanidade O rejeita (cf. Catecismo §599)."
  },
  "7": {
    "reference": "Marcos 15:16-20",
    "text": "E os soldados o levaram para dentro do palácio, isto é, o Pretório, e reuniram toda a tropa. E o vestiram de púrpura, e, tecendo uma coroa de espinhos, a puseram na Sua cabeça.",
    "explanation": "Jesus é escarnecido e humilhado pelos soldados. A Igreja ensina que as humilhações que Jesus sofreu são um reflexo do Seu grande amor por nós, mostrando como Ele suportou todo o sofrimento por nossa redenção (cf. Catecismo §617)."
  },
  "8": {
    "reference": "Marcos 15:21-32",
    "text": "E obrigaram a passar a Simão, cireneu, pai de Alexandre e de Rufo, que passava pela cidade, para que carregasse a cruz d'Ele.",
    "explanation": "Simão de Cirene ajuda a carregar a cruz de Jesus, simbolizando a solidariedade de todos os cristãos na participação no sofrimento de Cristo. A Igreja ensina que tomar a cruz é um chamado a seguir Jesus em Sua paixão e a participar de Seu sofrimento redentor (cf. Catecismo §618)."
  },
  "9": {
    "reference": "Marcos 15:33-41",
    "text": "E, à hora sexta, houve trevas sobre toda a terra até à hora nona. E, à hora nona, exclamou Jesus em alta voz: ‘Eloí, Eloí, lamá sabactâni?’",
    "explanation": "Jesus clama em Sua agonia, expressando o abandono e sofrimento profundos, mas também Sua total entrega ao Pai. A Igreja ensina que, mesmo em Sua dor extrema, Jesus nos mostra o caminho para a fidelidade a Deus em todas as circunstâncias (cf. Catecismo §602)."
  },
  "10": {
    "reference": "Marcos 15:42-47",
    "text": "E, já sendo tarde, veio José de Arimateia, membro respeitável do conselho, que também esperava o Reino de Deus, e ousou entrar na presença de Pilatos e pedir o corpo de Jesus.",
    "explanation": "José de Arimateia sepulta Jesus com dignidade, cumprindo as Escrituras. A Igreja ensina que o sepultamento de Jesus é a preparação para Sua gloriosa ressurreição, e é um sinal da nossa esperança na vida eterna (cf. Catecismo §639)."
  },
  "11": {
    "reference": "Marcos 16:1-8",
    "text": "E, passados o sábado, Maria Madalena, Maria mãe de Tiago, e Salomé, compraram especiarias para irem ungir Jesus.",
    "explanation": "As mulheres descobrem o túmulo vazio e recebem a notícia da ressurreição de Jesus. A Igreja ensina que a ressurreição de Cristo é a base da nossa fé e a fonte da nossa esperança na vida eterna (cf. Catecismo §638)."
  },
  "12": {
    "reference": "Lucas 1:26-38",
    "text": "No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem, desposada com um homem de nome José, da casa de Davi; e o nome da virgem era Maria.",
    "explanation": "O anúncio do anjo Gabriel à Maria, que aceita ser a mãe do Salvador, é o momento da Encarnação. A Igreja ensina que Maria, com seu 'sim', colaborou com o plano de Deus de forma única, e é venerada como a Mãe de Deus e nossa intercessora (cf. Catecismo §721)."
  },
  "13": {
    "reference": "Lucas 2:1-20",
    "text": "Naqueles dias, saiu um decreto da parte de César Augusto, para que fosse recenseada toda a terra.",
    "explanation": "O nascimento de Jesus em Belém, conforme as profecias, é a realização da promessa de Deus de enviar o Salvador. A Igreja ensina que o nascimento de Jesus é o ponto de partida da nossa salvação, e nos lembra da humildade e simplicidade da encarnação (cf. Catecismo §525)."
  },
  "15": {
    "reference": "Lucas 9:18-27",
    "text": "E aconteceu que, enquanto orava em particular, seus discípulos estavam com ele, e perguntou-lhes, dizendo: ‘Quem diz a multidão que eu sou?’",
    "explanation": "A confissão de Pedro de que Jesus é o Cristo é uma declaração de fé central para a Igreja. A Igreja ensina que reconhecer Jesus como o Messias é o primeiro passo para a salvação, e é pela fé em Cristo que recebemos a vida eterna (cf. Catecismo §424)."
  },
  "16": {
    "reference": "Lucas 22:14-20",
    "text": "E, quando a hora chegou, pôs-se à mesa, e com ele os apóstolos.",
    "explanation": "Na Última Ceia, Jesus institui a Eucaristia, oferecendo Seu corpo e sangue para a redenção da humanidade. A Igreja ensina que a Eucaristia é o memorial do sacrifício de Cristo e é essencial para a vida cristã, pois nos une a Cristo e nos fortalece espiritualmente (cf. Catecismo §1323)."
  },
  "17": {
    "reference": "João 3:16-21",
    "text": "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    "explanation": "Este versículo revela o amor infinito de Deus pela humanidade, oferecendo Seu Filho para a nossa salvação. A Igreja ensina que a morte de Jesus na cruz é o ato supremo de amor de Deus pela humanidade e o meio pelo qual a salvação é alcançada (cf. Catecismo §609)."
  },
  "18": {
    "reference": "João 6:35-40",
    "text": "Disse-lhes Jesus: ‘Eu sou o pão da vida. Quem vem a mim não terá fome, e quem crê em mim nunca terá sede.’",
    "explanation": "Jesus se apresenta como o Pão da Vida, oferecendo-se como alimento para nossa vida espiritual. A Igreja ensina que, na Eucaristia, Jesus nos dá o alimento necessário para a nossa vida eterna, e que a comunhão com Ele é fundamental para nossa salvação (cf. Catecismo §1324)."
  },
  "19": {
    "reference": "João 13:1-15",
    "text": "Antes da festa da Páscoa, sabendo Jesus que a sua hora havia chegado, e que devia passar deste mundo para o Pai, como amou os seus que estavam no mundo, amou-os até o fim.",
    "explanation": "Jesus lavando os pés dos discípulos é um gesto de humildade e serviço, revelando o amor sacrificial que Ele tem por nós. A Igreja ensina que todos os cristãos são chamados a imitar esse amor servil, especialmente no serviço aos outros (cf. Catecismo §2449)."
  },
  "20": {
      "reference": "João 14:1-7",
      "text": "Não se turbe o vosso coração; credes em Deus, crede também em mim. Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar.",
      "explanation": "Jesus conforta os discípulos, prometendo-lhes a vida eterna. A Igreja ensina que Jesus, ao preparar um lugar para nós, oferece a promessa de que, após esta vida, estaremos com Ele na casa do Pai. A salvação é o dom de morar eternamente com Deus (cf. Catecismo §1020)."
    },
    "21": {
      "reference": "João 15:1-8",
      "text": "Eu sou a videira verdadeira, e o meu Pai é o agricultor. Toda a vara em mim que não dá fruto, ele a corta; e toda a que dá fruto, ele a poda, para que dê mais fruto.",
      "explanation": "Jesus é a videira verdadeira, e nós somos os ramos. A Igreja ensina que a união com Cristo é essencial para dar frutos espirituais. Sem Ele, não podemos fazer nada; é por meio d'Ele que recebemos a graça para viver uma vida de santidade (cf. Catecismo §787)."
    },
    "22": {
      "reference": "Atos 1:1-11",
      "text": "No primeiro livro, ó Teófilo, escrevi sobre tudo o que Jesus começou a fazer e a ensinar, até o dia em que foi levado ao céu, depois de ter dado instruções aos apóstolos que escolhera.",
      "explanation": "A Ascensão de Jesus é um sinal de Sua glória e de Sua autoridade divina. A Igreja ensina que, embora Jesus tenha subido ao céu, Ele continua presente em Sua Igreja, especialmente na Eucaristia, e nos envia o Espírito Santo para nos guiar até o fim dos tempos (cf. Catecismo §664)."
    },
    "23": {
      "reference": "Atos 2:1-4",
      "text": "Quando chegou o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um som, como de um vento impetuoso, e encheu toda a casa onde estavam assentados.",
      "explanation": "Pentecostes marca a vinda do Espírito Santo sobre os apóstolos, dando-lhes poder para pregar o Evangelho. A Igreja ensina que o Espírito Santo é o Paráclito, que nos fortalece, guia e nos santifica, realizando a missão de Cristo no mundo (cf. Catecismo §731)."
    },
    "24": {
      "reference": "Atos 2:42-47",
      "text": "E perseveravam na doutrina dos apóstolos, na comunhão, no partir do pão e nas orações. E em toda a alma havia temor, e muitas maravilhas e sinais eram feitos pelos apóstolos.",
      "explanation": "A vida comunitária dos primeiros cristãos é um modelo de vivência da fé. A Igreja ensina que a comunhão dos fiéis, a celebração da Eucaristia e a oração são essenciais para o crescimento na fé e a construção do Reino de Deus na terra (cf. Catecismo §1324)."
    },
    "25": {
      "reference": "Atos 9:1-19",
      "text": "Saulo, porém, respirando ainda ameaças e morte contra os discípulos do Senhor, foi ao sumo sacerdote, e lhe pediu cartas para as sinagogas de Damasco.",
      "explanation": "A conversão de Saulo, que se tornaria São Paulo, é um exemplo do poder transformador da graça de Deus. A Igreja ensina que ninguém está além da salvação, e que a graça de Deus pode mudar até mesmo os corações mais endurecidos (cf. Catecismo §847)."
    },
    "26": {
      "reference": "Atos 16:25-34",
      "text": "Por volta da meia-noite, Paulo e Silas oravam e cantavam hinos a Deus; e os outros presos os ouviam.",
      "explanation": "A prisão de Paulo e Silas é um exemplo de fé e perseverança em Deus, mesmo diante das adversidades. A Igreja ensina que devemos louvar a Deus em todas as circunstâncias, pois Ele é digno de nosso louvor e nos dá força para suportar as dificuldades (cf. Catecismo §2656)."
    },
    "27": {
      "reference": "Atos 20:28-35",
      "text": "Acautelai-vos por vós mesmos e por todo o rebanho, no qual o Espírito Santo vos constituiu bispos, para apascentar a Igreja de Deus, a qual ele adquiriu com o seu próprio sangue.",
      "explanation": "São Paulo exorta os presbíteros a cuidar do rebanho de Cristo, lembrando-lhes que a Igreja é preciosa e foi comprada com o sangue de Cristo. A Igreja ensina que os bispos, como sucessores dos apóstolos, têm a responsabilidade de guiar e proteger a Igreja (cf. Catecismo §877)."
    },
    "28": {
      "reference": "Atos 28:1-10",
      "text": "Quando escaparam, então souberam que a ilha se chamava Malta. Os habitantes da ilha nos trataram com grande humanidade.",
      "explanation": "São Paulo, após naufragar, é acolhido pelos habitantes de Malta, um exemplo de hospitalidade e cuidado cristão. A Igreja ensina que devemos ser como Cristo e acolher todos, especialmente os necessitados e os estrangeiros (cf. Catecismo §2443)."
    },
    "29": {
      "reference": "Apocalipse 1:9-20",
      "text": "Eu, João, irmão vosso e companheiro na tribulação, no reino e na paciência em Jesus, estava na ilha chamada Patmos, por causa da palavra de Deus e do testemunho de Jesus.",
      "explanation": "João vê Cristo glorificado e recebe a revelação do futuro. A Igreja ensina que o Apocalipse revela o triunfo final de Cristo sobre o mal e a promessa de uma nova Jerusalém, onde Deus habitará com Seu povo para sempre (cf. Catecismo §668)."
    },
    "30": {
      "reference": "Apocalipse 21:1-5",
      "text": "Vi novo céu e nova terra, porque o primeiro céu e a primeira terra passaram, e o mar já não existe.",
      "explanation": "A visão da nova Jerusalém é a esperança cristã da vida eterna, onde Deus enxugará todas as lágrimas e o mal será derrotado para sempre. A Igreja ensina que o céu é a união perfeita com Deus, onde todos os fiéis serão plenamente felizes (cf. Catecismo §1042)."
    },
},

    "december": {
    "1": {
      "reference": "Apocalipse 3:14-22",
      "text": "Ao anjo da igreja de Laodiceia escreve: 'Estas coisas diz o Amém, a testemunha fiel e verdadeira, o princípio da criação de Deus.'",
      "explanation": "Jesus faz uma reprovação à igreja de Laodiceia, chamando-os ao arrependimento e à conversão. A Igreja ensina que Cristo deseja a sinceridade e o fervor de todos os cristãos, e que é necessário viver em verdadeira união com Ele, afastando a mornidão espiritual (cf. Catecismo §2084)."
    },
    "2": {
      "reference": "Apocalipse 5:1-14",
      "text": "Vi na mão direita daquele que estava sentado no trono um livro, escrito por dentro e por fora, selado com sete selos.",
      "explanation": "A abertura do livro com sete selos simboliza a revelação do plano de Deus para a salvação e o juízo final. A Igreja ensina que, no fim dos tempos, Cristo revelará a plenitude do plano de Deus, e todos verão sua glória e justiça (cf. Catecismo §1042)."
    },
    "3": {
      "reference": "Apocalipse 7:9-17",
      "text": "Depois disso, vi uma grande multidão, que ninguém podia contar, de todas as nações, tribos, povos e línguas.",
      "explanation": "A visão de João mostra a grandeza do céu e a salvação de todos os povos. A Igreja ensina que a salvação em Cristo não tem fronteiras e que a Igreja é universal, sendo aberta a todos, independentemente de raça, etnia ou condição social (cf. Catecismo §849)."
    },
    "4": {
      "reference": "Apocalipse 12:1-6",
      "text": "E apareceu no céu um grande sinal: uma mulher vestida de sol, com a lua debaixo dos seus pés, e uma coroa de doze estrelas sobre a cabeça.",
      "explanation": "A mulher é um símbolo da Igreja, mas também da Virgem Maria, que dá à luz o Salvador e intercede por todos. A Igreja ensina que Maria é a Mãe da Igreja, modelo de fé e esperança, e nossa intercessora junto a Deus (cf. Catecismo §964)."
    },
    "5": {
      "reference": "Apocalipse 19:1-10",
      "text": "Depois disso, ouvi no céu uma grande voz, como de uma multidão imensa, que dizia: 'Aleluia! A salvação, a glória e o poder pertencem ao nosso Deus.'",
      "explanation": "O céu celebra a vitória de Deus e a queda de Babilônia, simbolizando a derrota do pecado e do mal. A Igreja ensina que no fim dos tempos haverá uma grande festa no céu, em que todos os justos cantarão louvores a Deus por Sua vitória sobre o mal (cf. Catecismo §1044)."
    },
    "6": {
      "reference": "Apocalipse 21:1-5",
      "text": "Vi novo céu e nova terra; porque o primeiro céu e a primeira terra passaram, e o mar já não existe.",
      "explanation": "O Apocalipse descreve a renovação do mundo, onde Deus habitará com Seu povo. A Igreja ensina que a renovação da criação será o cumprimento da promessa de um novo céu e nova terra, onde não haverá mais dor, nem morte, nem tristeza (cf. Catecismo §1042)."
    },
    "7": {
      "reference": "Apocalipse 21:9-14",
      "text": "Veio um dos sete anjos, que tinham as sete taças, cheias das sete últimas pragas, e falou comigo, dizendo: 'Vem, e te mostrarei a esposa, a mulher do Cordeiro.'",
      "explanation": "A esposa do Cordeiro é a Igreja, que se apresenta como uma noiva adornada para o encontro com o Esposo. A Igreja ensina que a Igreja é a noiva de Cristo, e que será plenamente unida a Ele no fim dos tempos, na Jerusalém celeste (cf. Catecismo §796)."
    },
    "8": {
      "reference": "Apocalipse 22:1-5",
      "text": "Mostrou-me o rio da água da vida, claro como cristal, que saía do trono de Deus e do Cordeiro.",
      "explanation": "A visão de João revela a plenitude da salvação, onde Deus será tudo em todos. A Igreja ensina que a vida eterna é a total comunhão com Deus, onde a felicidade será eterna e completa, sem mais dor ou separação (cf. Catecismo §1044)."
    },
    "9": {
      "reference": "1 Coríntios 11:23-26",
      "text": "Porque eu recebi do Senhor o que também vos ensinei: que o Senhor Jesus, na noite em que foi traído, tomou o pão.",
      "explanation": "São Paulo ensina sobre a importância da Eucaristia, que é o sacramento do Corpo e Sangue de Cristo. A Igreja ensina que a Eucaristia é a fonte e o ápice da vida cristã, e que deve ser recebida com fé e reverência (cf. Catecismo §1324)."
    },
    "10": {
      "reference": "2 Tessalonicenses 2:15",
      "text": "Assim, irmãos, permanecei firmes e guardai as tradições que vos foram ensinadas, seja por palavra, seja por carta nossa.",
      "explanation": "São Paulo exorta os cristãos a preservarem as tradições, tanto orais quanto escritas, transmitidas pelos apóstolos. A Igreja ensina que a Tradição, junto com a Sagrada Escritura, forma o depósito da fé e é essencial para a fé cristã (cf. Catecismo §82)."
    },
    "11": {
      "reference": "1 Timóteo 3:15",
      "text": "Se eu demorar, para que saibais como convém andar na casa de Deus, que é a Igreja do Deus vivo, coluna e sustentáculo da verdade.",
      "explanation": "São Paulo descreve a Igreja como a coluna e sustentáculo da verdade, reconhecendo sua autoridade em preservar e ensinar a verdade revelada por Deus. A Igreja ensina que a autoridade apostólica é dada por Cristo, e que o Papa, como sucessor de Pedro, é o líder da Igreja universal (cf. Catecismo §857)."
    },
    "12": {
      "reference": "Tiago 1:22-25",
      "text": "Sede praticantes da palavra e não apenas ouvintes, enganando-vos a vós mesmos.",
      "explanation": "Tiago ensina a importância de viver a palavra de Deus e colocar a fé em prática. A Igreja ensina que a fé sem obras é morta, e que os cristãos são chamados a viver a caridade e a misericórdia no cotidiano (cf. Catecismo §1827)."
    },
    "13": {
      "reference": "1 Pedro 1:18-19",
      "text": "Sabendo que não foi com coisas corruptíveis, como prata ou ouro, que fostes resgatados, mas com o precioso sangue de Cristo, como de um cordeiro imaculado e sem defeito.",
      "explanation": "São Pedro lembra os cristãos do valor imensurável do sacrifício de Cristo, que nos redimiu com Seu sangue. A Igreja ensina que a salvação é um dom gratuito de Deus, e que a redenção é oferecida a todos através do sacrifício de Jesus na cruz (cf. Catecismo §617)."
    },
    "14": {
      "reference": "2 Pedro 1:20-21",
      "text": "Sabendo primeiro isto, que nenhuma profecia da Escritura é de particular interpretação. Pois a profecia nunca foi dada por vontade humana, mas os homens santos de Deus falaram inspirados pelo Espírito Santo.",
      "explanation": "São Pedro ensina sobre a inspiração divina das Escrituras, reconhecendo sua autoridade como Palavra de Deus. A Igreja ensina que a Bíblia é inspirada por Deus e, portanto, infalível em suas verdades para a salvação (cf. Catecismo §105)."
    },
    "15": {
      "reference": "São João 21:15-17",
      "text": "Depois de terem comido, perguntou Jesus a Simão Pedro: 'Simão, filho de João, tu me amas mais do que estes?'",
      "explanation": "Jesus confia a Pedro o cuidado de Suas ovelhas, estabelecendo-o como líder da Igreja. A Igreja ensina que São Pedro é o primeiro Papa, e que seus sucessores têm a missão de guiar e ensinar o povo de Deus (cf. Catecismo §552)."
    },
    "16": {
            "reference": "1 João 4:1-6",
            "text": "Amados, não creiais em todo espírito, mas examinai se os espíritos são de Deus, porque muitos falsos profetas têm saído pelo mundo.",
            "explanation": "São João exorta os cristãos a discernirem os verdadeiros ensinos dos falsos, uma lição importante para a preservação da verdade na Igreja. A Igreja ensina que a Tradição e a Escritura são os critérios para discernir o que é verdadeiro e autêntico na fé (cf. Catecismo §84)."
        },
        "17": {
            "reference": "Judas 1:3-4",
            "text": "Amados, enquanto me esforçava para vos escrever acerca da nossa comum salvação, fui impelido a escrever-vos, exortando-vos a batalhar pela fé que uma vez foi entregue aos santos.",
            "explanation": "São Judas chama os cristãos a defenderem a fé original, que foi transmitida pelos apóstolos. A Igreja ensina que a fé apostólica é uma herança sagrada que deve ser guardada e defendida contra heresias e distorções (cf. Catecismo §85)."
        },
        "18": {
            "reference": "Tiago 2:14-18",
            "text": "Que aproveita, meus irmãos, se alguém disser que tem fé, e não tiver as obras? Acaso a fé pode salvá-lo?",
            "explanation": "São Tiago reforça que a fé sem obras é morta. A Igreja ensina que as boas obras são a manifestação da fé verdadeira e que a salvação não é apenas uma questão de crença, mas de vida prática em Cristo (cf. Catecismo §1827)."
        },
        "19": {
            "reference": "1 Pedro 2:9-12",
            "text": "Vós, porém, sois raça eleita, sacerdócio real, nação santa, povo adquirido por Deus, para que anunciéis as grandezas daquele que vos chamou das trevas para a sua maravilhosa luz.",
            "explanation": "São Pedro descreve a Igreja como um povo santo, chamado a ser testemunha da luz de Cristo no mundo. A Igreja ensina que todos os cristãos são chamados à santidade e à missão de evangelizar (cf. Catecismo §823)."
        },
        "20": {
            "reference": "Atos 2:42-47",
            "text": "E perseveravam na doutrina dos apóstolos, na comunhão, no partir do pão e nas orações. Em cada alma havia temor, e muitos prodígios e sinais se faziam pelos apóstolos.",
            "explanation": "O livro de Atos descreve a vida da Igreja primitiva, em unidade e comunhão. A Igreja ensina que a Tradição apostólica, representada na doutrina, nos sacramentos e na oração, continua a ser a base da vida cristã e a fonte de nossa união (cf. Catecismo §76)."
        },
        "21": {
            "reference": "1 Timóteo 3:14-15",
            "text": "Estas coisas te escrevo, esperando ir ter contigo brevemente; mas, se eu me demorar, para que saibas como convém andar na casa de Deus, que é a Igreja do Deus vivo, coluna e sustentáculo da verdade.",
            "explanation": "São Paulo ensina que a Igreja é a coluna e sustentáculo da verdade, responsável por transmitir o ensino correto. A Igreja ensina que, por meio da autoridade dos apóstolos e seus sucessores, a verdade de Cristo é guardada e ensinada ao mundo (cf. Catecismo §857)."
        },
        "22": {
            "reference": "Romanos 12:4-5",
            "text": "Porque assim como em um corpo temos muitos membros, mas nem todos os membros têm a mesma função, assim nós, sendo muitos, somos um só corpo em Cristo, e membros uns dos outros.",
            "explanation": "São Paulo descreve a unidade da Igreja como o Corpo de Cristo, no qual todos têm uma função. A Igreja ensina que a comunhão dos membros da Igreja é essencial para a vida cristã, e que todos são chamados a contribuir com seus dons para o bem comum (cf. Catecismo §794)."
        },
        "23": {
            "reference": "Efésios 2:19-22",
            "text": "Assim já não sois estrangeiros nem forasteiros, mas concidadãos dos santos e membros da família de Deus, edificados sobre o fundamento dos apóstolos e dos profetas, tendo como pedra angular o próprio Cristo Jesus.",
            "explanation": "São Paulo fala da Igreja como a família de Deus, edificada sobre o fundamento dos apóstolos. A Igreja ensina que os apóstolos, como os fundadores da Igreja, deixaram um legado espiritual que é preservado na Tradição e na autoridade dos seus sucessores (cf. Catecismo §858)."
        },
        "24": {
            "reference": "Mateus 16:13-19",
            "text": "Tu és Pedro, e sobre esta pedra edificarei a minha Igreja, e as portas do inferno não prevalecerão contra ela.",
            "explanation": "Neste momento, Jesus institui São Pedro como o líder da Igreja, conferindo-lhe uma autoridade única. A Igreja ensina que o Papa, sucessor de Pedro, possui autoridade divina para guiar a Igreja e proteger a fé contra as heresias (cf. Catecismo §552)."
        },
        "25": {
            "reference": "Lucas 10:16",
            "text": "Quem vos escuta, a mim escuta; e quem vos rejeita, a mim rejeita; e quem me rejeita, rejeita aquele que me enviou.",
            "explanation": "Jesus dá aos apóstolos uma autoridade divina para ensinar em Seu nome. A Igreja ensina que essa autoridade é transmitida até os dias de hoje aos bispos, especialmente ao Papa, que é o sucessor de São Pedro (cf. Catecismo §551)."
        },
        "26": {
            "reference": "2 Timóteo 1:13-14",
            "text": "Retém o modelo das sãs palavras que de mim ouviste, na fé e no amor que há em Cristo Jesus.",
            "explanation": "São Paulo instrui Timóteo a preservar o ensinamento apostólico. A Igreja ensina que a Tradição, tal como foi recebida dos apóstolos, deve ser fielmente transmitida e guardada em cada geração (cf. Catecismo §85)."
        },
        "27": {
            "reference": "Atos 1:8",
            "text": "Mas recebereis a força do Espírito Santo, que virá sobre vós, e sereis minhas testemunhas, tanto em Jerusalém, como em toda a Judeia e Samaria, e até os confins da terra.",
            "explanation": "Jesus promete o Espírito Santo, que capacitará os apóstolos a espalharem o evangelho. A Igreja ensina que o Espírito Santo guia a Igreja em sua missão de evangelização e santificação (cf. Catecismo §738)."
        },
        "28": {
            "reference": "1 Coríntios 15:12-22",
            "text": "Mas, se se prega que Cristo ressuscitou dos mortos, como dizem alguns entre vós que não há ressurreição dos mortos?",
            "explanation": "São Paulo afirma a centralidade da ressurreição de Cristo para a fé cristã. A Igreja ensina que a ressurreição de Cristo é o fundamento da nossa esperança na vida eterna, e que todos os cristãos ressuscitarão no último dia (cf. Catecismo §994)."
        },
        "29": {
            "reference": "Efésios 4:11-13",
            "text": "E ele deu uns para apóstolos, outros para profetas, outros para evangelistas, outros para pastores e doutores, com vista ao aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo.",
            "explanation": "São Paulo fala dos diversos ministérios na Igreja, que têm a missão de edificar o corpo de Cristo, que é a Igreja. A Igreja ensina que os ministérios são necessários para a santificação do povo de Deus e para o cumprimento da missão evangelizadora (cf. Catecismo §874)."
        },
        "30": {
            "reference": "Apocalipse 22:6-21",
            "text": "Estas palavras são fiéis e verdadeiras. O Senhor, o Deus dos espíritos dos profetas, enviou o seu anjo para mostrar aos seus servos as coisas que devem em breve acontecer.",
            "explanation": "O último capítulo de Apocalipse traz uma exortação final à perseverança e à esperança. A Igreja ensina que o fim dos tempos será a consumação da salvação, com a vinda gloriosa de Cristo e a restauração de todas as coisas em Deus (cf. Catecismo §1042)."
        },
        "31": {
            "reference": "Mateus 28:16-20",
            "text": "Então os onze discípulos foram para a Galileia, para o monte que Jesus lhes indicara. E, vendo-o, o adoraram; mas alguns duvidaram. E Jesus, aproximando-se, falou-lhes, dizendo: 'Toda a autoridade me foi dada no céu e na terra. Ide, pois, e fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo.'",
            "explanation": "Jesus confia aos apóstolos a missão de evangelizar e batizar em nome da Santíssima Trindade. A Igreja ensina que a missão confiada por Cristo à Igreja continua até hoje, e que a autoridade dos apóstolos é exercida pelo Papa e pelos bispos (cf. Catecismo §863)."
        },
  },


      
    };
  
    monthSelector.addEventListener("change", () => {
      const selectedMonth = monthSelector.value;
      daysContainer.innerHTML = ""; // limpa os dias anteriores
  
      if (!selectedMonth || !daysInMonth[selectedMonth]) return;
  
      const totalDays = daysInMonth[selectedMonth];
      for (let i = 1; i <= totalDays; i++) {
        const btn = document.createElement("button");
        btn.classList.add("day");
        btn.textContent = i;
        btn.addEventListener("click", () => {
          const data = passages[selectedMonth]?.[i];
          if (data) {
            referenceSpan.textContent = data.reference;
            textSpan.textContent = data.text;
            explanationSpan.textContent = data.explanation;
          } else {
            referenceSpan.textContent = "Sem passagem cadastrada";
            textSpan.textContent = "-";
            explanationSpan.textContent = "-";
          }
        });
        daysContainer.appendChild(btn);
      }
    });
  });
  
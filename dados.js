let dados = [
{
    Nome: "Yuji Itadori (虎杖悠仁)",
    Paragrafo01: "Yuji Itadori é o protagonista do anime Jujutsu Kaisen. Ele é um jovem estudante com uma força física extraordinária, que acidentalmente se torna o hospedeiro de Sukuna, o Rei das Maldições, após ingerir um de seus dedos amaldiçoados. Determinado a proteger as pessoas ao seu redor, Yuji se junta à escola de feiticeiros jujutsu para aprender a controlar suas habilidades e derrotar maldições. Ele é corajoso, altruísta e possui um forte senso de justiça.",
    Paragrafo02: "Yuji Itadori possui força física sobre-humana e grande habilidade em combate corpo a corpo. Após consumir o dedo de Sukuna, ele desenvolve a capacidade de usar energia amaldiçoada em seus ataques. Além disso, tem resistência à possessão de Sukuna, mantendo o espírito sob controle.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Yuji_Itadori"
},
{
    Nome: "Megumi Fushiguro (伏黒 恵)",
    Paragrafo01: "Megumi Fushiguro é um feiticeiro jujutsu talentoso que utiliza invocação de Shikigami, animais espirituais que o ajudam no combate. Ele é sério e reservado, com um forte senso de dever e justiça, sempre se preocupando com os outros.",
    Paragrafo02: "Megumi usa a técnica de manipulação das Sombras Dez, que lhe permite invocar Shikigami. Ele é um estrategista em batalha e usa sua energia amaldiçoada de forma eficiente.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Megumi_Fushiguro"
},
{
    Nome: "Nobara Kugisaki (釘崎 野薔薇)",
    Paragrafo01: "Nobara Kugisaki é uma jovem determinada, corajosa e confiante em suas habilidades. Ela luta com orgulho por seu estilo de vida e enfrenta maldições sem hesitar, sempre mantendo uma postura destemida.",
    Paragrafo02: "Nobara utiliza a Técnica de Boneca de Palha, usando martelo, pregos e bonecas amaldiçoadas para atacar. Ela também pode realizar a técnica de ressonância, conectando suas maldições às de seus inimigos.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Nobara_Kugisaki"
},
{
    Nome: "Satoru Gojo (五条 悟)",
    Paragrafo01: "Satoru Gojo é o feiticeiro mais poderoso do mundo e professor na escola de feiticeiros jujutsu. Ele é confiante, brincalhão e provocador, mas profundamente comprometido com a proteção contra maldições.",
    Paragrafo02: "Gojo usa a Técnica de Manipulação do Infinito, controlando o espaço ao seu redor para se defender e atacar. Ele também possui o raro poder Seis Olhos, amplificando suas técnicas amaldiçoadas.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Satoru_Gojo"
},
{
    Nome: "Suguru Geto (夏油 傑)",
    Paragrafo01: "Suguru Geto é um ex-feiticeiro jujutsu e principal antagonista de Jujutsu Kaisen. Ele acredita que apenas feiticeiros deveriam existir e busca criar um mundo onde não haja humanos normais, liderando maldições para alcançar seu objetivo.",
    Paragrafo02: "Geto manipula espíritos amaldiçoados, podendo exorcizá-los e controlá-los. Sua técnica principal é a Manipulação de Espíritos Amaldiçoados, absorvendo maldições para usá-las em combate.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Suguru_Geto"
},
{
    Nome: "Kento Nanami (七海 建人)",
    Paragrafo01: "Kento Nanami é um feiticeiro jujutsu sério e pragmático, que serve como mentor para Yuji. Ele tem uma abordagem prática à vida e ao trabalho, separando-os rigorosamente.",
    Paragrafo02: "Nanami utiliza a Técnica de Proporção, que divide seus alvos em uma proporção de 7/3 para maximizar o dano. Ele é um lutador corpo a corpo habilidoso e tem grande controle sobre sua energia amaldiçoada.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Kento_Nanami"
},
{
    Nome: "Ryomen Sukuna (両面宿儺)",
    Paragrafo01: "Ryomen Sukuna, o Rei das Maldições, é uma entidade poderosa e o principal antagonista. Após sua derrota, seu corpo foi selado em 20 dedos, que são objetos amaldiçoados. Ele agora reside dentro de Yuji, tentando tomar controle de seu corpo.",
    Paragrafo02: "Sukuna possui imenso poder, incluindo regeneração, controle de energia amaldiçoada e técnicas misteriosas. Ele é uma ameaça constante, já que pode tomar controle do corpo de Yuji em certas circunstâncias.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Ryomen_Sukuna"
},
{
    Nome: "Maki Zenin (禪院 真希)",
    Paragrafo01: "Maki Zenin é uma veterana da escola jujutsu e membro da família Zenin. Mesmo sem energia amaldiçoada, Maki se destaca pelo uso de armas amaldiçoadas e força física, buscando provar seu valor em uma sociedade que a menospreza.",
    Paragrafo02: "Maki é especialista em combate com armas amaldiçoadas e tem uma força física extraordinária. Ela compensa sua falta de energia amaldiçoada com habilidades marciais excepcionais.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Maki_Zenin"
},
{
    Nome: "Toge Inumaki (狗巻 棘)",
    Paragrafo01: "Toge Inumaki é um veterano da escola de feiticeiros e membro da família Inumaki, que usa a Técnica Verbal Amaldiçoada. Ele se comunica por meio de uma linguagem codificada para evitar acionar suas maldições por acidente.",
    Paragrafo02: "Toge usa palavras para atacar seus oponentes, dando comandos que forçam seus inimigos a obedecer ou sofrer danos. Sua técnica verbal é poderosa, mas requer cuidado devido aos efeitos colaterais sobre sua própria garganta.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Toge_Inumaki"
},
{
    Nome: "Panda (パンダ)",
    Paragrafo01: "Panda é um ser amaldiçoado consciente criado pelo diretor Masamichi Yaga. Ele possui inteligência humana e é um lutador forte, sempre disposto a proteger seus amigos.",
    Paragrafo02: "Panda pode alternar entre diferentes formas, cada uma com características próprias de combate. Ele é forte e ágil, sendo um oponente imprevisível no campo de batalha.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Panda"
},
{
    Nome: "Yuta Okkotsu (乙骨 憂太)",
    Paragrafo01: "Yuta Okkotsu é um estudante da escola jujutsu e protagonista de *Jujutsu Kaisen 0*. Ele carrega uma maldição de nível especial ligada a Rika Orimoto, sua amiga de infância, e está sob a tutela de Satoru Gojo. Yuta tem um grande potencial e busca controlar a maldição de Rika para proteger os outros.",
    Paragrafo02: "Yuta possui imensa energia amaldiçoada devido à ligação com Rika, permitindo-lhe usar técnicas poderosas. Ele também é hábil em combate corpo a corpo e no uso de espadas amaldiçoadas.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Yuta_Okkotsu"
},
{
    Nome: "Rika Orimoto (織本 里香)",
    Paragrafo01: "Rika Orimoto é uma maldição de nível especial que está ligada a Yuta Okkotsu. Antes de morrer, ela era a amiga de infância de Yuta e o amava profundamente. Após sua morte, ela se tornou uma poderosa maldição, protegendo Yuta e atacando qualquer um que o ameaçasse.",
    Paragrafo02: "Rika tem um poder devastador como maldição, com força sobre-humana e energia amaldiçoada praticamente ilimitada. Ela também pode manifestar-se fisicamente em combate.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Rika_Orimoto"
},
{
    Nome: "Mai Zenin (禪院 真依)",
    Paragrafo01: "Mai Zenin é a irmã gêmea de Maki Zenin e também uma feiticeira jujutsu. Ao contrário de sua irmã, Mai possui uma pequena quantidade de energia amaldiçoada, mas é relutante em seguir a vida de feiticeira. Ela mantém uma relação conflituosa com Maki devido à forma como foram tratadas pela família Zenin.",
    Paragrafo02: "Mai possui a Técnica de Construção, que lhe permite criar objetos do nada, embora essa habilidade consuma muita energia. Ela também é uma excelente atiradora.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Mai_Zenin"
},
{
    Nome: "Aoi Todo (東堂 葵)",
    Paragrafo01: "Aoi Todo é um feiticeiro jujutsu extremamente forte e excêntrico, conhecido por suas habilidades físicas e amor por lutas. Ele tem uma personalidade excêntrica e gosta de conversar sobre gostos pessoais com outros lutadores. Apesar de sua natureza despreocupada, ele é altamente habilidoso e sério quando se trata de combate.",
    Paragrafo02: "Aoi utiliza a Técnica de Boogie Woogie, que lhe permite trocar de lugar com qualquer coisa ou pessoa que ele bata palmas. Ele também tem uma força física extraordinária, sendo um lutador corpo a corpo formidável.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Aoi_Todo"
},
{
    Nome: "Kasumi Miwa (三輪 霞)",
    Paragrafo01: "Kasumi Miwa é uma estudante de Kyoto e feiticeira jujutsu em treinamento. Ela é educada, trabalhadora e quer apenas uma vida simples, mas acaba sendo arrastada para o perigoso mundo das maldições.",
    Paragrafo02: "Kasumi é uma espadachim habilidosa, usando sua espada amaldiçoada com grande destreza. Embora não possua técnicas avançadas, sua disciplina e habilidade com a lâmina a tornam eficaz em combate.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Kasumi_Miwa"
},
{
    Nome: "Noritoshi Kamo (加茂 憲紀)",
    Paragrafo01: "Noritoshi Kamo é um estudante de Kyoto e um dos herdeiros do clã Kamo, uma das três grandes famílias de feiticeiros. Ele é calmo e controlado, levando a sério suas responsabilidades como feiticeiro.",
    Paragrafo02: "Noritoshi utiliza a Técnica de Manipulação de Sangue, permitindo-lhe controlar seu sangue para ataques à distância e manipulação de projéteis. Ele também pode aumentar sua força e agilidade através da manipulação do sangue.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Noritoshi_Kamo"
},
{
    Nome: "Masamichi Yaga (夜蛾 正道)",
    Paragrafo01: "Masamichi Yaga é o diretor da Escola de Feiticeiros Jujutsu em Tóquio. Ele é um feiticeiro experiente e mentor de muitos estudantes, sendo responsável pela criação de seres amaldiçoados como o Panda.",
    Paragrafo02: "Yaga utiliza a Técnica de Marionete Amaldiçoada, permitindo-lhe criar bonecos amaldiçoados e controlá-los para lutar. Panda é um exemplo de suas criações.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Masamichi_Yaga"
},
{
    Nome: "Choso (脹相)",
    Paragrafo01: "Choso é um dos Irmãos da Pintura da Morte, criado a partir de maldições e células humanas. Apesar de ser uma maldição, ele possui um forte laço emocional com seus irmãos e entra em conflito com os feiticeiros jujutsu.",
    Paragrafo02: "Choso tem a habilidade de manipular seu próprio sangue, usando a Técnica de Manipulação de Sangue. Ele pode controlar seu sangue para criar ataques devastadores e curar-se.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Choso"
},
{
    Nome: "Hanami (花御)",
    Paragrafo01: "Hanami é um espírito amaldiçoado de alto nível que luta ao lado de Mahito e outros espíritos amaldiçoados. Hanami é apaixonado pela natureza e acredita que a humanidade a está destruindo.",
    Paragrafo02: "Hanami tem uma técnica de controle sobre a vegetação, permitindo-lhe manipular plantas para atacar ou se defender. Ele também possui grande resistência e capacidade de regeneração.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Hanami"
},
{
    Nome: "Jogo (漏瑚)",
    Paragrafo01: "Jogo é um espírito amaldiçoado de alto nível que deseja exterminar a humanidade. Ele é arrogante e confiante, acreditando que os espíritos amaldiçoados são superiores aos humanos.",
    Paragrafo02: "Jogo possui a habilidade de manipular fogo e magma, usando ataques baseados em calor extremo. Ele também tem uma técnica de expansão de domínio chamada 'Monte de Ferro', que incinera tudo ao redor.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Jogo"
},
{
    Nome: "Mahito (真人)",
    Paragrafo01: "Mahito é um espírito amaldiçoado que personifica o ódio da humanidade. Ele é sádico e curioso sobre os limites da alma humana, manipulando-a como bem entende. É um dos antagonistas principais da série.",
    Paragrafo02: "Mahito usa a Técnica de Manipulação da Alma, permitindo-lhe remodelar as almas de humanos e de si mesmo. Com isso, ele pode mudar de forma, curar-se, ou matar seus oponentes alterando suas almas.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Mahito"
},
{
    Nome: "Utahime Iori (庵 歌姫)",
    Paragrafo01: "Utahime Iori é uma professora e feiticeira de nível semi-especial na Escola de Feiticeiros Jujutsu. Ela é respeitada por seus colegas e possui uma relação descontraída com Satoru Gojo, apesar de sua personalidade séria.",
    Paragrafo02: "Utahime possui habilidades de suporte em batalhas, usando técnicas que amplificam as habilidades amaldiçoadas de seus aliados. Ela também é uma feiticeira competente em combate.",
    SaibaMais: "https://jujutsukaisen.fandom.com/pt-br/wiki/Utahime_Iori"
},
{
    Nome: "História",
    Paragrafo01: "Jujutsu Kaisen é um anime e mangá que segue a história de Yuji Itadori, um estudante do ensino médio que vive uma vida comum até se envolver no mundo do ocultismo. Após encontrar um dedo amaldiçoado de Ryomen Sukuna, o mais poderoso espírito maligno da história, Yuji acaba engolindo o artefato para salvar seus amigos, tornando-se o receptáculo de Sukuna. Agora, ele deve entrar para a Escola Técnica de Jujutsu, uma organização de feiticeiros especializados em combater maldições, para controlar o poder de Sukuna e lutar contra criaturas malignas que ameaçam a humanidade.",
    Paragrafo02: "Ao lado de seus novos colegas, como Megumi Fushiguro e Nobara Kugisaki, e sob a tutela do poderoso feiticeiro Satoru Gojo, Yuji aprende sobre as complexidades do mundo das maldições e a arte do jujutsu. O anime se destaca por suas batalhas emocionantes, repletas de habilidades sobrenaturais e confrontos épicos com maldições poderosas. Ao longo da trama, temas como sacrifício, amizade e sobrevivência se entrelaçam, enquanto Yuji busca encontrar um propósito maior em meio a um mundo repleto de perigos ocultos.",
    SaibaMais: "https://www.crunchyroll.com/pt-br/series/GRDV0019R/jujutsu-kaisen"
},


    ];

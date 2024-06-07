// Storage para as palestras que estavam na 3º JCPOLI
// certificado foi adicionado para caso o certificado daquela palestra tenha saido, coloque o link
// img e profile foram adicionados para que apareça a imagem o botão "leia completo" do palestrante ao lado da palestra
// caso o paletrante não tenha imagem, mas tenho um SpeakerProfile, coloque "profile = true", pq pelo menos vai aparecer o botão de "leia completo" junto com seu nome 
let Palestras = [

  {
    title: "Bioinsumos no Estado de Goiás",
    instructor: "João Asmar Junior",
    img: '/assets/img/speakers/Bioinsumos.jpg',
    profile: true,
    institution: "Superintendencia de Engenharia Agrícola e Desenvolvimento Sustentável ",
    desc: `Programa Estadual de Bioinsumos da Secretaria de Estado de Agricultura, Pecuária e Abastecimento (SEAPA) tem como objetivo ampliar e fortalecer a adoção de práticas para a evolução do setor agropecuário, com a expansão da produção, do desenvolvimento e da utilização de bioinsumos e sistemas de produção sustentáveis.`,
    date: "17/04",
    time: '08:00-09:30',
    place: 'Auditório 3, área II',
    
   },
  
  {
    title: "PROTEGENDO O FUTURO: SEGURANÇA DA INFORMAÇÃO E INTELIGÊNCIA ARTIFICIAL NO MERCADO ATUAL.",
    instructor: "Alisson Rodrigues Alves",
    img: '/assets/img/speakers/PALESTRANTE_VICENTE.jpeg',
    profile: true,
    institution: "UNIGOIÁS / FACULDADE SENAC - GO",
    desc: `Destaca as tecnologias da segurança da informação integrada com Inteligência Artificial.`,
    date: "17/04",
    time: '08:00-09:30',
    place: 'Auditório 2, área II',
    
   },
  
  {
    title: "Estado da Arte em Sistemas e Aplicações para Gerenciamento de Projetos de TI",
    instructor: "Messias Reis",
    img: '/assets/img/speakers/Messias_Reis.jpg',
    profile: true,
    institution: "Mundo de Projetos",
    desc: 'A palestra "Estado da Arte em Sistemas e Aplicações para Gerenciamento de Projetos de TI" abordará como a diferenciação entre projetos, processos e rotinas impacta na eficiência organizacional, especialmente em contextos de TI. Enfatizando a necessidade de distinguir projetos com início, meio e fim das atividades rotineiras, a apresentação introduzirá uma metodologia inovadora focada em aplicações computacionais para categorizar demandas e aplicar o gerenciamento adequado. Utilizando um fluxo metodológico que incorpora um modelo de tomada de decisão e uma classificação matemática baseada na matriz Stacey, a proposta visa otimizar o gerenciamento de projetos de tecnologia da informação alinhando métodos apropriados às características e requisitos específicos de cada demanda. A metodologia, apoiada na classificação por prioridades do protocolo de Manchester, tem se mostrado um possível marco na utilização de de softwares e aplicação estratégias diferenciadas para o gerenciamento de projetos, processos e rotinas no universo da tecnologia da informação.',
    date: "17/04",
    time: "19:00-20:30",
    place: 'Auditório 2, área II',
      
   },
  
  {
    title: "Panorama da Arquitetura em Goiás: Séculos XVIII, XIX e XX",
    instructor: "Eurípedes Afonso da Silva Neto",
    img: '/assets/img/speakers/Eurípedes_FREDERICO.jpeg',
    profile: true,
    institution: "UFG",
    desc: "Apresentação de parte da arquitetura realizada em Goiás durante os séculos XVIII, XIX e XX. Um panorama uniformizado graficamente através do olhar sobre cem edifícios. Organizando assim uma crônica da transformação da região por meio de suas edificações, demonstrando como foram espelho de um ideal político, social e arquitetônico que permeou a produção local.",
    date: "17/04",
    time: "19:00-20:30",
    place: "Auditório 3, área II",
  },
  
  {
    title: "Vencendo Hackathons!",
    instructor: "Franklin Silva de Castro Bonfim",
    img: '/assets/img/speakers/Franklin_ANA.png',
    profile: true,
    institution: "Serviço Nacional de Aprendizagem Comercial (SENAC-GO)",
    desc: 'A palestra "Vencendo Hackathons", destinada a graduandos de Análise e Desenvolvimento de Sistemas, Ciência da Computação, Ciência de Dados e IA e Engenharia de Computação, promete ser uma fonte inestimável de conhecimento e estratégias para aqueles interessados em se destacar nesses eventos competitivos de programação. Os palestrantes, com experiência comprovada em hackathons, compartilharão insights sobre como abordar esses desafios, enfatizando a importância do trabalho em equipe, pensamento criativo e habilidades técnicas afiadas. A apresentação cobrirá desde a preparação pré-evento, como formar equipes equilibradas e desenvolver uma mentalidade vencedora, até técnicas eficazes de brainstorming, prototipagem rápida e apresentação de projetos. Além disso, os participantes aprenderão como maximizar recursos limitados sob pressão de tempo, transformando ideias inovadoras em protótipos funcionais que impressionam os jurados. Essa palestra é uma oportunidade imperdível para quem aspira a dominar a arte de vencer hackathons, preparando os estudantes não apenas para competir, mas para triunfar nesse ambiente estimulante e altamente competitivo.',
    date: "17/04",
    time: "20:30-22:00",
    place: 'Auditório 2, área II',
  },
  
  {
    title: "Palestra institucional do CREA-GO JOVEM - Ética e Valorização Profissional",
    instructor: "Eng. Ana Renata Volpini Litfalla",
    img: '/assets/img/speakers/Palestrante_CREA-GO.jpeg',
    profile: true,
    institution: `CREA-GO `,
    /*desc: "Palestra institucional do CEEA-GO e CREA-GO JOVEM,  e uma palestra completar sobre Ética e Valorização profissional",*/
    date: "17/04",
    time: "10:00-11:30",
    place: "Auditório 3, área II",
  },

  {
    title: "Potencialidades do Design",
    instructor: "Fernando Felipe",
    /*institution: "xx",
    desc: `xx`,*/
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2902",
    date: "17/04",
    time: '19:30',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=tJXqGMl_iG4"
   },

   {
    title: "Ferramenta de desenvolvimento de Software low-code ",
    instructor: "Daiana Ribeiro",
    /*institution: "xx",
    desc: `xx`,*/
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2868",
    date: "17/04",
    time: '10:30',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=zQrZMSrmyhk"
   },

   {
    title: "Carreira até a Alemanha de aluno egresso da PUC Goiás",
    instructor: "Thalles Antônio de Urzedo Machado",
    /*institution: "xx",
    desc: `xx`,*/
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2888",
    date: "17/04",
    time: '18:00',
    place: 'Online: Teams',
    link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675268758?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
   },

   {
    title: "Manejo da Irrigação ",
    instructor: "Fernando Rezende da Costa",
    img: '/assets/img/speakers/fernandofoto.png',
    profile: true,
    institution: "Irriga Global/Nutrisolo",
    desc: `A irrigação é a tecnologia com maior potencial de contribuir para o aumento da segurança alimentar e ambiental, bem como para a redução da fome e da pobreza, além de gerar grande número de empregos. Ela traz benefícios importantes relacionados à produção de alimentos, à geração de empregos, ao desenvolvimento social e ao meio ambiente. É uma tecnologia fundamental em qualquer planejamento estratégico dos estados e regiões.`,
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2895",
    date: "17/04",
    time: '19:00',
    place: 'Online: Teams',
    link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675704751?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
   },

   {
    title: "Métodos de projeto sustentável ",
    instructor: "Halina Veloso e Zárate",
    img: '/assets/img/speakers/halinafoto.png',
    profile: true,
    /*institution: "xx",*/
    desc: `Um panorama sobre a pesquisa de doutorado que investiga a integração de dados sobre carbono no processo de projeto de arquitetura, explorando métodos de projeto baseados em dados focados nos estágios iniciais do projeto. Esta pesquisa visa testar a transferibilidade de dados entre escalas de arquitetura e design urbano. Para isso, realiza uma investigação empírica com profissionais, adotando casos tangíveis e identificando os desafios e gargalos na interação entre dados de carbono incorporados, em escala de construção, e dados urbanos georreferenciados.`,
    date: "17/04",
    time: '08:00',
    place: 'Online: Teams',
    link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675896432?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: "Potencialidade da fruticultura no Centro-Oeste",
    instructor: "Uirá do Amaral",
    img: '/assets/img/speakers/Amaral_MARTHA.jpeg',
    profile: true,
    institution: "IFGoiano - Urutaí",
    desc: `A fruticultura tem se destacado no Brasil como uma das principais atividades agropecuárias, demonstrando influência no setor econômico e social.  A região Centro Oeste que lidera na produção nacional de grãos, onde a mesma por possuir microrregiões bem definidas em seus estados, viabiliza o emprego da fruticultura em todos eles, visto que cada microrregião dispõe de condições especificas de temperatura, solo e umidade para cada tipo de cultura que venha a ser cultivada.`,
    date: "18/04",
    time: "08:00-09:30",
    place: "Auditório 3, área II",
  },
  
  {
    title: "",
    instructor: "Antônio Generoso",
    img: '/assets/img/speakers/user-vector-man.jpg',
    profile: true,
    institution: "Consultor em LGPD",
    desc: `Apresentação a respeito da LGPD  com IA`,
    date: "18/04",
    time: '08:00-09:30',
    place: "Auditório 2, área II",
    warning: "Lei Geral de Proteção de Dados, até que ponto a Inteligência Artificial pode me ajudar - CANCELADA",
  },
  
  {
    title: "Meio Ambiente e Comercialização Agrícola",
    instructor: "André Luiz Miranda Silva Zopelari",
    img: '/assets/img/speakers/user-vector-man.jpg',
    profile: true,
    institution: "AcadGeo",
    desc: "Meio Ambiente e Comercialização Agrícola",
    date: "18/04",
    time: "10:00-11:30",
    place: "Auditório 3, área II",
  },
  
  {
    title:"De Ciência de Dados a Engenharia de Inteligência Artificial: um achismo de como será o futuro",
    instructor: "João Paulo Marinho Martiins",
    img: '/assets/img/speakers/Paulo_ANDRE.png',
    profile: true,
    institution: "Advolve.AI",
    desc: "Como as profissões de Cientista de Dados e Engenheiro de Inteligência Artificial estão moldando o futuro não só da tecnologia, mas também de todas as outras profissões.",
    date: "18/04",
    time: "19:00-20:30",
    place: "Auditório 3, área II",
  },

  {
    title: "Trajetórias pelo Design - Egresso João Tiago Camargo ",
    instructor: "João Tiago Camargo",
    /*institution: "xx",
    desc: `xx`,*/
    date: "18/04",
    time: '08:30',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=ElxIwc_aHWc"
   },

   {
    title: "Trajetórias em Design - Egresso Ricardo Queiroz",
    instructor: "Ricardo Queiroz",
    /*institution: "xx",
    desc: `xx`,*/
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2905",
    date: "18/04",
    time: '10:30',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=UUlrAXK6Ltk"

   },

   {
    title: "Creator Economy, olhando para o futuro do empreendedorismo digital",
    instructor: "Adriane Maia Insuela",
    /*institution: "xx",
    desc: `xx`,*/
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2889",
    date: "18/04",
    time: '19:00',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=u3v8d7EBHYk"
   },

   {
    title: "Customer Experience and Artificial Intelligence",
    instructor: "Patrícia Amaral",
    img: '/assets/img/speakers/patriciafoto.png', 
    profile: true,
    /*institution: "xx",*/
    desc: `A experiência do cliente, enriquecida por jornadas bem desenhadas, serve como alavanca crucial para negócios ao criar interações personalizadas e memoráveis. Essa abordagem aumenta a satisfação e fidelidade, transformando clientes em defensores da marca, o que impulsiona a recompra e promove indicações, resultando em crescimento sustentável e maior rentabilidade. A IA está revolucionando a compreensão e interação com os dos clientes, tornando-a mais personalizada, eficiente e satisfatória. Entre novas tecnologias e modelos de negócios inovadores, vamos mergulhar
    neste mundo IA e CX.`,
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2891",
    date: "18/04",
    time: '20:30',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=JXmcZbQQOwk"
   },

   {
    title: "Os efeitos dos microplásticos em sedimentos de lagos e rios europeus ",
    instructor: "Anne Louise de Melo Dores",
    img: '/assets/img/speakers/user-vector-woman.jpg',
    profile: true,
    /*institution: "xx",*/
    desc: ` Palestrante Egressa do Curso de Engenharia Civil, realiza atualmente mestrado na Universidade de Stuttgart, na Alemanha. Irá tratar do tema: Os efeitos dos microplásticos em sedimentos de lagos e rios europeus.`,
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2899",
    date: "18/04",
    time: '09:00',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=QklGnm2gDho"
   },

   {
    title: "Por uma crítica da ecologia política: investigando a reprodução social da natureza",
    instructor: "Camilo Vladimir de Lima Amaral",
    /*institution: "xx",
    desc: `xx`,*/
    date: "18/04",
    time: '08:00',
    place: 'Online: Teams',
    link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675159930?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
   },

   {
    title: "Meteorologia operacional e sistemas sinóticos ",
    instructor: "Antônio Marcos Vianna Campos",
    /*institution: "xx",
    desc: `xx`,*/
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2896",
    date: "18/04",
    time: '19:00',
    place: 'Online: Teams',
    link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675569968?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
   },
  
  {
    title: "Praticas de Manejo e Conservação do Solo",
    instructor: "Vladia Correchel",
    img: '/assets/img/speakers/Correchel_MARTHA.jpg',
    profile: true,
    institution: "Escola de Agronomia UFG (Laboratório de Física do Solo)",
    desc: `Praticas de Manejo e Conservação do Solo`,
    date: "19/04",
    time: "08:00-09:30",
    place: "Auditório 3, área II",
  },
  
  {
    title: "A crítica da arquitetura contemporânea: sobre o prêmio Pritzker",
    instructor:"Sandra Catharinne Pantaleão Resende",
    img: '/assets/img/speakers/Sandra_FREDERICO.jpeg',
    profile: true,
    institution: "PUC Goiás, UEG",
    desc: `O prêmio Pritzker, desde 1982, aponta o arquiteto de maior destaque anualmente em que são consideradas suas contribuições para a disciplina, seja pela produção teórica ou prática. A partir de uma perspectiva histórica, apresentam-se reflexões sobre as transformações do campo disciplinar nos últimos 40 anos tendo em vista a consolidação e crise do Movimento Moderno, as manifestações pós-modernas e as posturas após a crise de 2008. 
    Toma-se como referência para as reflexões as posturas dos vencedores com o contexto histórico permitindo indicar mudanças na produção e crítica arquitetônica associadas aos desafios do século XXI.`,
    date: "19/04",
    time: "08:00-09:30",
    place: "Sala Multiuso, área IV",
    },
  
  {
    title:"Modelos Hidrológicos",
    instructor: "Elizon Nunes",
    img: '/assets/img/speakers/user-vector-man.jpg',
    profile: true,
    institution: "Labogef/UFG",
    desc: `Modelos Hidrológicos`,
    date: "19/04",
    time: "10:00-11:30",
    place: "Auditório 3, área II",
  },
  
  {
    title: "Visualizando o Invisível: A Arte da Representação Gráfica em Ciência de Dados",
    instructor: "Rodolfo Wenceslau R. Mota",
    img: '/assets/img/speakers/Rodolfo_Wencelau.jpg',
    profile: true,
    institution: `SEBRAE-GO`,
    desc: `Nessa palestra, mergulharemos na interseção fascinante entre a Ciência de Dados, a Inteligência Artificial e a incrível habilidade humana de traduzir dados complexos em representações visuais impactantes. Descubra como a aplicação de técnicas avançadas de visualização, aliada ao poder da Inteligência Artificial, desvenda padrões, insights e conexões que escapam à observação comum. Vamos juntos desvendar o invisível?`,
    date: '19/04',
    time: '19:00-20:30',
    place: 'Auditório 2, área II',    
  },
  
  {
    title: "Planejamento Urbano - Qual é a cidade que queremos?",
    instructor: "Benjamim Jorge Rodrigues dos Santos",
    img: '/assets/img/speakers/Foto_benjamim_MARTA.jpg',
    profile: true,
    institution: "PUC Goiás",
    desc: `Palestra ministrada pelo Prof. Dr. Benjamim Jorge discutindo questões fundamentais de mobilidade urbana.`,
    date: "19/04",
    time: "09:30-11:00",
    place: "Auditório 2, área II",
  },
  
  {
    title: "Palestra de abertura do VI Desafio em Ciências de Dados: Oportunidades e Desafios na era da Inteligência Artificial massificada",
    instructor: "Aníbal Tavares de Azevedo",
    img: '/assets/img/speakers/AnibalTavares.jpg',
    profile: true,
    institution: "Univesp/Canal próprio no YouTube",
    desc: `Nessa conversa serão apontados alguns desenvolvimentos da inteligência artificial massificada em diversos campos. Diversas aplicações práticas serão abordadas e exemplificadas. Possibilidades de novos negócios para resolver as dores do mundo combinando o uso das tecnologias habilitadoras da indústria 4.0 em conjunto com a inteligência artificial serão discutidas.`,
    date: "18/04",
    time: "20:00-21:00",
    place: "Online: Teams ",
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712676150634?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: "Por que somos minoria em STEM?",
    instructor: "Marta Pereira da Luz",
    img: '/assets/img/speakers/MartaPereira.png',
    profile: true,
    institution: "PUC Goiás e Eletrobrás Furnas",
    desc: `Na palestra será tratado sobre a realidade do mercado de trabalho e sobre a participação de mulheres em áreas de STEM e será discutido sobre as questões históricas da mulher nestes cenários.
    
    A conversa será sobre as mulheres nas áreas de Ciência, Tecnologia, Engenharia e Matemática (STEM). O objetivo é que as mulheres participantes da roda compartilhem suas experiências e dediquem um pouco de seu tempo para pensarem em ações para engajar meninas do ensino médio e universitárias, fomentando ações que as incentivem a explorar as áreas STEM. De acordo com dados da UNESCO, estima-se que apenas 30% dos cientistas do mundo sejam mulheres. A participação de mulheres e meninas deve ser fortalecida pois desempenham um papel essencial nas comunidades de ciência e tecnologia. `,
    date: "19/04",
    time: "21:00-22:00",
    place: "Online: Teams ",
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712676247016?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },

  {
    title: "Oficina: A pesquisa nos campos de Arquitetura e Urbanismo e Design.",
    instructor: "Deusa Maria Rodrigues Boaventura",
    institution: "PUC Goiás",
    desc: `A pesquisa na graduação desempenha um importante papel no desenvolvimento acadêmico e profissional dos docentes e discentes. Ao se envolver em atividades de pesquisa, o aluno tem a possibilidade de aprofundar seu conhecimento sobre determinados temas, desenvolver habilidades de pensamento crítico, analítico e criativo, de forma estruturada e metódica. A presente oficina visa apresentar para toda a comunidade da Escola Politécnica e de Artes, as pesquisas que estão sendo realizadas nos cursos de arquitetura e urbanismo e design, permitindo assim a divulgação de novos conhecimentos e a necessária ampliação de debates entre pesquisadores, quer sejam eles professores ou alunos. `,
    date: "19/04",
    time: "10:00",
    place: "Sala Multiuso, área IV",
    image: "assets/img/slider/oficina_FREDERICO_ANDRE_RABE.jpg"
  },

  {
    title: "Trabalho Remoto Internacional: desafios e perspectivas",
    instructor: "Flavio Signorelli Mendes e Walter Berchez",
    /*institution: "xx",
    desc: `xx`,*/
    date: "19/04",
    time: '19:00',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=7uB8vFgdhac"
   },

  {
    title: "Design inclusivo, exclusivo e ancestral ",
    instructor: "Ester Carro",
    /*institution: "xx",*/
    desc: `Ester Carro vem falar sobre o Fazendinhando, que é um instituto de transformação territorial, cultural e socioambiental que atua em favelas, feito por e para os moradores. 
    Esta palestra será transmitida ao vivo no Auditório 1, área II.`,
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2892",
    date: "19/04",
    time: '10:30',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=pZjeisIMHZM"
   },

   {
    title: "Harvesting rare earth elements and critical minerals from coal derived acid mine drainage",
    instructor: "Dr. Iuri Santos",
    img: '/assets/img/speakers/iurifoto.png',
    profile: true,
    /*institution: "xx",*/
    desc: `Palestra: Harvesting rare earth elements and critical minerals from coal derived acid mine drainage.`,
    certificado: "https://sites.pucgoias.edu.br/certificados/participantes/2914",
    date: "19/04",
    time: '18:45',
    place: 'Online',
    link:"https://www.youtube.com/watch?v=BXj_MrAXvh4"
   },

   {
    title: "Mercado de trabalho. Preparo, pespectivas e desafios.",
    instructor: "Mediador: Salmen Chaquip Bukzem; Componentes: Cmte Ciro Actis, Cmte Fernando Amado, Cmte Lucas Manoel, Cmte Estenio Ramos",
    /*institution: "xx", */
    desc: `Mesa redonda com egressos.

    Mediador: 
    Salmen Chaquip Bukzem;
    
    Componentes:
    Cmte Ciro Actis,
    Cmte Fernando Amado,
    Cmte Lucas Manoel,
    Cmte Estenio Ramos`,
    date: "16/04",
    time: '9:00',
    place: 'Auditório 3, área II',
    /*link:"XX"*/
   },

   {
    title: "",
    instructor: "Heitor Giuliano Matioli Candido",
    img: '/assets/img/speakers/user-vector-man.jpg',
    profile: true,
    institution: "Azul Linhas Aéreas",
    desc: `Seleção e recrutamento de aeronáutas na Azul Linhas Aéreas`,
    date: "17/04",
    time: '20:00',
    place: 'Online: Teams',
    link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1713177106593?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d",
    warning: "Seleção e recrutamento de aeronáutas na Azul Linhas Aéreas - CANCELADA",
   },


/*
  {
    title: "Trajetórias pelo Design",
    instructor: 'João Tiago Camargo',
    desc: `A palestra "Ai.rtista: uma imersão na construção da imagem digital através do Midjourney e suas barreiras no mercado da arte" aborda o desafio dos artistas em construir uma imagem digital coerente e atraente, que possa ajudá-los a se destacar no mercado da arte. O palestrante apresenta o conceito de Midjourney, que é uma ferramenta que ajuda os artistas a desenvolverem sua marca pessoal e construírem uma presença online consistente e eficaz. No entanto, o palestrante também aborda as barreiras que os artistas enfrentam nesse processo, como a falta de conhecimento técnico em marketing digital e a dificuldade em conciliar a produção artística com a gestão da imagem digital. A palestra busca oferecer insights e dicas práticas para que os artistas possam superar essas barreiras e construir uma imagem digital sólida e impactante.`,
    date: "18/04",
    time: "08:30",
    place: "Online",
    link: "https://www.youtube.com/watch?v=ElxIwc_aHWc"
  },
  
  {
    title: "Trajetórias em Design",
    instructor: "Ricardo Queiroz",
    date: "18/04",
    time: "10:30",
    place: "Online",
    link: "https://www.youtube.com/watch?v=UUlrAXK6Ltk"
  },
  
  {
    title:"Startups e ideias disruptivas",
    instructor: "Everaldo Lopes dos Santos",
    desc: `xx`,
    date: "16/04",
    time: "19:00",
    place: "Online",
    link: "https://www.youtube.com/watch?v=ReVSnabmLEs"
  },
  
  {
    title: "Inteligência Artificial aplicada nas Pesquisas Científicas",
    instructor: "Lucas de Suza Rodrigues",
    desc: `xx`,
    date: "11/04",
    time: "08:30",
    place: "Online",
    link: "https://www.youtube.com/watch?v=ntECqnRu57k"
  },
  
  {
    title: "Potencialidades do Design",
    instructor: "Fernando Felipe",
    desc: `xx`,
    date: "17/04",
    time: "19:30",
    place: "Online",
    link: "https://www.youtube.com/watch?v=tJXqGMl_iG4"
  },
  
  {
    title: "Design inclusivo, exclusivo e ancestral ",
    instructor: "Ester Carro",
    institution: "PUC Goiás",
    desc: `Ester Carro vem falar sobre o Fazendinhando que é um instituto de transformação territorial, cultural e socioambiental que atua em favelas, feito por e para os moradores.

    Esta palestra será transmitida ao vivo no Auditório 1, área II.`,
    date: "19/04",
    time: "10:30",
    place: "Online Transmissão no Auditório 1, área II",
    link: "https://www.youtube.com/watch?v=pZjeisIMHZM"
  },
  
  {
    title: "Como se Planejar para uma Carreira de TI Internacional",
    instructor: "Juliana Moreira Barbosa",
    desc: `xx`,
    date: "16/04",
    time: "20:30",
    place: "Online",
    link: "https://www.youtube.com/watch?v=j3m3TJS83d8"
  },
  
  {
    title: "Creator Economy, olhando para o futuro do empreendedorismo digital",
    instructor: "Adriane Maia Insuela",
    desc: `xx`,
    date: "18/04",
    time: "19:00",
    place: "Online",
    link: "https://www.youtube.com/watch?v=u3v8d7EBHYk"
  },
  
  { 
    title: 'Ferramenta de desenvolvimento de Software low-code ',
    instructor: 'Daiana Ribeiro',
    desc: `xx`, 
    date: '17/04',
    time: '10:30',
    place: 'Online',
    link: "https://www.youtube.com/watch?v=zQrZMSrmyhk"
   },
  
  { 
    title: 'Customer Experience and Artificial Intelligence',
    instructor: 'Patrícia Amaral',
    desc: `xx`, 
    date: '18/04',
    time: '20:30',
    place: 'Online',
    link: "https://www.youtube.com/watch?v=JXmcZbQQOwk"
   },
  
  {
    title: 'As tecnologias de reconhecimento de imagem assistindo à saúde com o planejamento neurocirúrgico ',
    instructor: 'Wallace Souza Loos',
    desc: `xx`,
    date: '12/04',
    time: '19:00',
    place: "Online",
    link: "https://www.youtube.com/watch?v=Ic1lfAhEqNM"
  },
  
  {
    title: 'Os efeitos dos microplásticos em sedimentos de lagos e rios europeus ',
    instructor: 'Anne Louise de Melo Dores',
    desc:`xx`,
    date: '18/04',
    time: '09:00',
    place: "Online",
    link:"https://www.youtube.com/watch?v=QklGnm2gDho"
  },
  
  {
    title: 'Harvesting rare earth elements and critical minerals from coal derived acid mine drainage',
    instructor: 'Dr. Iuri Santos',
    desc: `xx`,
    date: '19/04',
    time: '18:45',
    place: "Online",
    link: "https://www.youtube.com/watch?v=BXj_MrAXvh4"
  },
  
  {
    title: 'Por uma crítica da ecologia política: investigando a reprodução social da natureza',
    instructor: 'Camilo Vladimir de Lima Amaral',
    desc: `xx`,
    date: '18/04',
    time: '08:00',
    place: 'Online: Teams',
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675159930?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: 'Processo de seleção e recrutamento de pilotos em empresas aéreas ',
    instructor: 'Antonio Mousinho',
    desc: `xx`,
    date: '15/04',
    time: '20:00',
    place: "Online: Teams",
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675057762?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: 'Aviação civil, mercado de trabalho, oportunidades',
    instructor: 'Raoni Jacobson',
    desc: `xx`,
    date: '15/04',
    time: '20:00',
    place: 'Online: Teams',
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712673915601?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: 'Carreira até a Alemanha de aluno egresso da PUC Goiás',
    instructor: 'Thalles Antônio de Urzedo Machado',
    desc: `xx`,
    date: '17/04',
    time: '19:00',
    place: 'Online: Teams',
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675268758?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: 'Da Engenharia Mecatrônica à carreira de desenvolvedor de jogos no Canadá ',
    instructor: 'Lavio Fidélis',
    institution: 'PUC Goiás',
    //desc: `xx`,
    date: '10/04',
    time: '21:00',
    place: 'Online: Teams',
    link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712673915601?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },

  {
    title: 'Meteorologia operacional e sistemas sinóticos ',
    instructor: 'Antônio Marcos Vianna Campos',
    desc: `xx`,
    date: '18/04',
    time: '19:00',
    place: 'Online: Teams',
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675569968?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: 'Manejo da Irrigação ',
    instructor: 'Fernando Rezende da Costa',
    desc: `xx`,
    date: '17/04',
    time: '19:00',
    place: 'Online: Teams',
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675704751?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },
  
  {
    title: 'Métodos de projeto sustentável ',
    /*instructor: 'Marta Pereira da Luz, Rosana Brandão e Benjamin Jorge',
    institution: 'PUC Goiás',
    /*desc: `xx`,
    date: '17/04',
    time: '08:00',
    place: 'Online: Teams',
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675896432?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
  },

  {
    title: 'Trabalho Remoto Internacional: desafios e perspectivas',
    instructor: 'Flavio Signorelli Mendes e Walter Berchez',
    desc: `xx`,
    date: '19/04',
    time: '19:00',
    place: 'Online',
    link: "https://www.youtube.com/watch?v=7uB8vFgdhac"
  },
  
  {
    title: 'IA no mercado profissional',
    instructor: 'João Paulo Tavares',
    desc: `xx`,
    date: '15/04',
    time: '20:30',
    place: 'Online',
    link: 'xx'
  },
  */
  /*
  {
    title: "Avaliação de máquinas, equipamentos e bens móveis",
    instructor: "Ricardo Vitoy",
    institution: "PUC Goiás",
    desc: `O minicurso abordará temas como custos direto e indireto de instalação, depreciação inicial e desmontagem, valor de equipamentos (sucata, econômico, uso e de risco). Classificação de máquinas, equipamentos, instalações e bens industriais em geral. Metodologia de avaliação de máquinas.
    Vagas limitadas: 20`,
    date: "17/04",
    time: '08:30-12:00',
    place: 'Laboratório: sala 002, bloco J, área III ',
  },
  */
  {
    title: "Máquinas Síncronas: Conceitos básicos, princípios e funcionamento, aspectos construtivos, aplicabilidade.",
    instructor: "Márcio Victor Trevisan",
    institution: "WORKSOLAR IMPORTAÇÃO E DISTRIBUIÇÃO",
    desc: "As máquinas síncronas são dispositivos eletromecânicos que convertem energia mecânica em energia elétrica de forma eficiente. Seu funcionamento baseia-se no princípio da sincronização entre o campo magnético girante do rotor e o campo magnético do estator. Comumente utilizadas em aplicações de geração e transmissão de energia elétrica, as máquinas síncronas oferecem alta eficiência e controle preciso de frequência e tensão. Seus principais componentes incluem o estator, onde está localizado o enrolamento da armadura, e o rotor, que possui enrolamento de campo. Aspectos construtivos como a geometria dos polos e a disposição dos enrolamentos são essenciais para o seu desempenho. Além disso, as máquinas síncronas encontram aplicabilidade em diversas áreas, desde geração de energia em usinas até propulsão de navios e veículos elétricos, destacando-se pela sua versatilidade e confiabilidade em diferentes cenários industriais e tecnológicos.",
    date: "17/04",
    time: "08:00-09:30",
    place: "Auditório 1, área II",
  },
  
  {
    title: 'Enredo: a multipremiada "the branding inovation company"',
    instructor: "Gustavo Moura",
    institution: "Enredo: CO Goiânia",
    desc: "A agência de branding e inovação Enredo vem nos apresentar como combinar olhar analítico e criatividade para ampliar a competitividade das empresas, reimaginando negócios para vender mais, criando espaços que as pessoas amem estar e desenhando experiências que elevam o valor das marcas.",
    date: "19/04",
    time: "08:30-10:00",
    place: "Auditório 1, área II",
  },
]

const Palestras_Producao = [
  
]

const Palestras_Design = [

]

const Palestras_Caer = [
  
]

const Palestras_Mestrado = [
  
  
  
]



const Palestras_Agronomia = [
 
]


const Palestras_Civil = [

]

const Palestras_ArquiteturaUrbanismo = [
  
 
]

const Palestras_ControleAutomacao = [
  
  
]

const Palestras_IniciacaoCientifica = [
  
]


Palestras = Palestras.sort((a, b) => {
  if(a.date < b.date) return -1;
  if(a.date > b.date) return 1;
  if(a.time < b.time) return -1;
  if(a.time > b.time) return 1;
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
});

export const Palestras_Cursos = [

  {
    curso: 'Ciência da Computação',
    palestras: Palestras,
  },
  /*
  {
    curso: 'Agronomia',
    palestras: Palestras_Agronomia,
  },
  {
    curso: 'Arquitetura e Urbanismo',
    palestras: Palestras_ArquiteturaUrbanismo,
  },
  {
    curso: 'Ciências Aeronáuticas',
    palestras: Palestras_Caer,
  },
  {
    curso: 'Civil',
    palestras: Palestras_Civil,
  },
  {
    curso: 'Engenharia de Controle e Automação',
    palestras: Palestras_ControleAutomacao,
  },   
  {
    curso: 'Engenharia de Produção',
    palestras: Palestras_Producao,
  }, 
  {
    curso: 'Design',
    palestras: Palestras_Design,
  },  
  {
    curso: 'Mestrado',
    palestras: Palestras_Mestrado,
  },
  {
    curso: 'Iniciação Ciêntifica',
    palestras: Palestras_IniciacaoCientifica,
  },
  */  
]

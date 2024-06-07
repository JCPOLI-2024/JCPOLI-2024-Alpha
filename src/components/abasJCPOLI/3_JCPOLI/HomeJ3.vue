<!-- Pagina da JCPOLI - Pagina para Home da 3º JCPOLI-->
<template>
    <v-app class="home" id="inspire">

      <v-layout row wrap>
        <v-flex xs12 sm12>
          <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          >
            <v-layout id="whenwhere">
              <div>
                <!-- <v-flex> -->
                <div class="icontitle">
                  <i class="fas fa-clock"></i>
                  <h5>QUANDO</h5>
                </div>
                <span id="quando">
                  De 17 a 20 de
                  <br />Abril de 2024
                </span>
                <!-- </v-flex> -->
                <!-- <v-flex> -->
                <div class="icontitle">
                  <i class="fas fa-map-marked"></i>
                  <h5>ONDE</h5>
                </div>
                <div>
                  <v-flex class="onde">Escola Politécnica e de Artes</v-flex>
                  <v-flex class="onde"
                    >Pontifícia Universidade Católica de Goiás</v-flex
                  >
                </div>
                <span id="onde-endereco">
                  Av, 1ª Avenida, 458-590 - Setor Leste Universitário,
                  <br />Goiânia - GO, 74605-020
                </span>
                <!-- </v-flex> -->
              </div>
            </v-layout>
          </v-parallax>
        </v-flex>
      </v-layout>
  
      <!-- <Main>
        <Speakers :speakers="speakersList" :paginate="1" /> -->
  
        <!-- <Supporters /> -->
      <!-- </Main> -->
  
      <div mt-5 mb-5 id="inscricoes" class="footer-subscription">
        <div>
          <v-container>
            <v-layout class="call">
              <v-flex>
                <p>INSCREVA-SE JÁ</p>
              </v-flex>
            </v-layout>
            <v-layout class="subcall text-left">
              <v-flex>
                <p class="text-justify text-center">
                  A III JCPOLI será realizada de 17 a 20 de Abril de 2024, com tema:
                  Inovações Tecnológicas para o desenvolvimento humano integral. 
                  É com alegria que o convidamos para enviar um artigo para o comitê científico.
                </p>
              </v-flex>
            </v-layout>
  
            <v-layout row wrap class="button-actions">
              <!--
              <v-flex offset-md3 xs12 md3>
                <v-btn @click="goToSubscription" color="primary" large>Faça sua inscrição</v-btn>
              </v-flex>
            -->
              <v-flex>
                <v-btn
                  @click="goToSubmission"
                  large
                  class="btn-submission"
                  color="primary"
                  >Submeta seu artigo</v-btn
                >
              </v-flex>
            </v-layout>
            <v-layout class="line rights-reserved">
              <v-flex>
                <hr />
                <p>
                  &copy; 3º Jornada Científica da Escola Politécnica - III JCPOLI 2023
                </p>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </div>
    </v-app>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue'
  //import Carousel from '@/components/home/Carousel.vue'
  import Speakers from '@/components/organization/Speakers.vue'
  //import About from '@/components/home/About.vue'
  import Robot from '@/components/home/Robot.vue'
  import Main from '@/components/organization/Main.vue'
  import Paragraph from '@/components/organization/Paragraph.vue'
  //import Dates from '@/components/home/Dates.vue'
  //import Supporters from '@/components/organization/Supporters.vue'
  
  //import { speakers_list } from '@/storage/programacao/speakers'
  
  @Component({
    components: {
      HelloWorld,
      //Carousel,
      Speakers,
      //About,
      Robot,
      Main,
      Paragraph,
      //Dates
      //Supporters
    }
  })
  export default class Home extends Vue {
    private speakersList: any = null
  
    constructor() {
      super()
  // Alternativa achada para tirar toda essa lista de dados listada abaixo:
  // Foi adicionado as abas de "Palestras", "Minicursos" e "Ciencia em Casa" a foto e o botão de profile dos palestrantes
  // Assim, os arquivos "palestras_new_3JCPOLI.ts", "miniCourses3JCPOLI.ts" e "ciencia_em_casa3JCPOLI.ts" foi adicionado mais duas linhas de dados:
  // um com "img" e "profile", daí caso o palestrante tenha um arquivo de imagem e um página no "SpeakerProfile.vue" irá aparecer ao lado de sua palestra ou minicurso
  // proposta de melhoria: Caso tenha mais de um palestrante, usar essa mesma lógica que estava aqui nas abas "Home" e "Escola" onde fica passado para o lado as imagens dos palestrantes
  // proposta de melhoria: pensar numa maneira melhor de exibir ele no celular

  //     this.speakersList = 
  //     [
  
  //     {
  //     name: 'Lara Guerreiro Pires',
  //     institution: 'Instituto Nacional da Propriedade Industrial, INPI, Brasil',
  //     speaking: 'Propriedade Intelectual e Desenvolvimento Sustentável: Construindo nosso futuro comum com inovação e criatividade',
  //     description: 'Lara Guerreiro Pires é Analista em Propriedade Industrial, concursada no Instituto Nacional da Propriedade Industrial, desde 2007. Sua carreira no executivo foi construída no atendimento estratégico à comunidade para disseminação e qualificação em propriedade industrial. Atualmente, pesquisa a abordagem da propriedade intelectual na produção noticiosa sobre Inteligência Artificial, em seu doutorado na Universidade da Beira Interior, em Covilhã- Portugal.',
  //     subjectResume: 'Propriedade Intelectual e Desenvolvimento Sustentável: Construindo nosso futuro comum com inovação e criatividade',
  //     img: '/assets/img/speakers/foto_Iara.png',
  //     customSize: '100%',
  //     datentime: {
  //       date: '22/04/2024 (Segunda)',
  //       time: '17:00-18:00',
  //       place: 'https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712776179262?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d'
  //     }
  //   },
  
  //     {
  //   name: 'Dr. Iuri Santos',
  //   institution: '',
  //   speaking: 'Harvesting rare earth elements and critical minerals from coal derived acid mine drainage',
  //   description: 'Dr. Iuri Santos earned his B.S in Civil Engineering from the Polytechnic School of Pernambuco, Brazil, in 2011. He earned his MSCE in 2017 and Ph.D. in 2022 in Civil and Environmental Engineering from West Virginia University, Morgantown, WV. His expertise is in Geotechnical Engineering and laboratory testing of soils, including seepage and slope stability modeling, mine reclamation, and Acid Mine Drainage mitigation. His research helped implement the geomorphic landform design into coal reclamation in the Appalachian region. Currently, Dr. Santos researches the production, flocculation, filtration, and dewatering of Rare Earth Elements concentrate generated from Acid Mine Drainage. In addition, Dr. Santos works with undergraduate students performing geotechnical and environmental research at SRU’s labs. He believes that as Civil Engineers, we can improve society and help the environment. He is a member of the American Society of Civil Engineering and serves as the faculty advisor for the Student Civil Engineering club at SRU. He is also a member of the American Society of Reclamation Sciences.',
  //   subjectResume: 'Palestra: Harvesting rare earth elements and critical minerals from coal derived acid mine drainage.',
  //   img: '/assets/img/speakers/iurifoto.png',
  //   customSize: '100%',
  //   datentime: {
  //     date: '19/04/2024 (Sexta)',
  //     time: '18:45',
  //     place: 'https://www.youtube.com/watch?v=BXj_MrAXvh4'
  //   }
  // },
  
  //     {
  //     name: 'Anne Louise de Melo Dores',
  //     institution: '',
  //     speaking: 'Os efeitos dos microplásticos em sedimentos de lagos e rios europeus',
  //     description: 'Engenheira civil, graduada pela Pontifícia Universidade Católica de Goiás, com experiência significativa em pesquisa científica e projetos de saneamento. Atualmente, encontra-se na fase de mestrado na Universidade de Stuttgart, na Alemanha, com foco de pesquisa voltado para a investigação dos efeitos dos microplásticos em sedimentos de lagos e rios europeus. Simultaneamente, está finalizando tese de mestrado no Laboratório de Engenharia Ambiental do Instituto Politécnico Federal de Lausanne (EPFL), na Suíça. Nesse contexto, sua área pesquisa concentra-se na identificação da presença de aditivos associados a partículas de pneus em sedimentos de lagos e rios suíços, bem como nos impactos desses elementos na dinâmica da fauna e flora aquáticas.',
  //     subjectResume: 'Palestrante Egressa do Curso de Engenharia Civil, realiza atualmente mestrado na Universidade de Stuttgart, na Alemanha. Irá tratar do tema: Os efeitos dos microplásticos em sedimentos de lagos e rios europeus.',
  //     img: '/assets/img/speakers/user-vector-woman.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '18/04/2024 (Quinta)',
  //       time: '09:00',
  //       place: 'https://www.youtube.com/watch?v=QklGnm2gDho'
  //     }
  //   },
  
  //     {
  //   name: 'Patrícia Amaral',
  //   institution: '',
  //   speaking: 'Customer Experience and Artificial Intelligence',
  //   description: 'Graduada em Ciência da Computação pela PUC Goiás, especialista em Inovação com mais de vinte anos de experiência em tecnologias de ponta. Da evolução da User Experience para a Customer Experience, impulsionada pela Inteligência Artificial.',
  //   subjectResume: 'A experiência do cliente, enriquecida por jornadas bem desenhadas, serve como alavanca crucial para negócios ao criar interações personalizadas e memoráveis. Essa abordagem aumenta a satisfação e fidelidade, transformando clientes em defensores da marca, o que impulsiona a recompra e promove indicações, resultando em crescimento sustentável e maior rentabilidade. A IA está revolucionando a compreensão e interação com os dos clientes, tornando-a mais personalizada, eficiente e satisfatória. Entre novas tecnologias e modelos de negócios inovadores, vamos mergulhar neste mundo IA e CX.',
  //   img: '/assets/img/speakers/patriciafoto.png',
  //   customSize: '100%',
  //   datentime: {
  //     date: '18/04/2024 (Quinta)',
  //     time: '20:30',
  //     place: 'https://www.youtube.com/watch?v=JXmcZbQQOwk'
  //   }
  // },
  
  //     {
  //   name: 'Halina Veloso e Zárate',
  //   institution: '',
  //   speaking: 'Métodos de projeto sustentável',
  //   description: 'Halina formou-se em Arquitetura e Urbanismo (2014), pela Pontifícia Universidade Católica de Goiás no Brasil. Obteve seu mestrado em Arquitetura na UCLA, onde trabalhou como pesquisadora de pós-graduação no Now Institute, uma parceria entre UCLA e Morphosis Architects (agosto de 2015 a junho de 2016). Ela trabalhou com Skidmore, Owings e Merrill LLP, em Los Angeles, (junho de 2016 - novembro de 2017) e MVRDV (fevereiro de 2018 - junho de 2021), como arquiteta e urbanista, e como líder de projeto. Atualmente envolvida em um programa de doutorado em métodos de projeto baseados em dados na Universidade Técnica de Delft, na Holanda.',
  //   subjectResume: 'Um panorama sobre a pesquisa de doutorado que investiga a integração de dados sobre carbono no processo de projeto de arquitetura, explorando métodos de projeto baseados em dados focados nos estágios iniciais do projeto. Esta pesquisa visa testar a transferibilidade de dados entre escalas de arquitetura e design urbano. Para isso, realiza uma investigação empírica com profissionais, adotando casos tangíveis e identificando os desafios e gargalos na interação entre dados de carbono incorporados, em escala de construção, e dados urbanos georreferenciados.',
  //   img: '/assets/img/speakers/halinafoto.png',
  //   customSize: '100%',
  //   datentime: {
  //     date: '17/04/2024 (Quarta)',
  //     time: '08:00',
  //     place: 'https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675896432?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d'
  //   }
  // },
  
  //     {
  //     name: 'Fernando Rezende da Costa',
  //     institution: 'Irriga Global/Nutrisolo',
  //     speaking: 'Manejo da Irrigação',
  //     description: 'Doutor em Agronomia, pesquisador nas áreas de irrigação, automação de projetos irrigados, controle climático e irrigação de ambiente protegido. Responsável técnico na empresa Irriga Global/Nutrisolo.',
  //     subjectResume: 'A irrigação é a tecnologia com maior potencial de contribuir para o aumento da segurança alimentar e ambiental, bem como para a redução da fome e da pobreza, além de gerar grande número de empregos. Ela traz benefícios importantes relacionados à produção de alimentos, à geração de empregos, ao desenvolvimento social e ao meio ambiente. É uma tecnologia fundamental em qualquer planejamento estratégico dos estados e regiões.',
  //     img: '/assets/img/speakers/fernandofoto.png',
  //     customSize: '100%',
  //     datentime: {
  //       date: '17/04/2024 (Quarta)',
  //       time: '19:00',
  //       place: 'https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1712675704751?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d'
  //     }
  //   },
  
  //     {
  //     name: 'Heitor Giuliano Matioli Candido',
  //     institution: 'Azul Linhas Aéreas',
  //     speaking: 'Seleção e recrutamento de aeronáutas na Azul Linhas Aéreas',
  //     description: 'Coordenador de recrutamento de aeronáutas na Azul Linhas Aéreas.',
  //     subjectResume: 'Seleção e recrutamento de aeronáutas na Azul Linhas Aéreas',
  //     img: '/assets/img/speakers/user-vector-man.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '17/04/2024 (Quarta)',
  //       time: '20:00',
  //       place: 'https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1713177106593?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d'
  //     }
  //   },
  
  //     {
  //     name: 'FELIPE CORREA VELOSO DOS SANTOS',
  //     institution: 'PUC-Goiás',
  //     speaking: 'Introdução ao Power BI',
  //     description: `Tecnólogo em Irrigação e Drenagem. Doutor em Agronomia. Docente da PUC-Goiás na área de recursos hídricos e estatística (Modelagem matemática, Probabilidade e Estatística, Estatística Aplicada, Climatologia Agrícola, Irrigação e Drenagem, Fenômenos de Transporte, Hidráulica e Hidrologia). Atualmente é líder do Grupo de Pesquisa em Gestão e Modelagem em Recursos Hídricos (GEMORH).`,
  //     subjectResume: `Introdução ao Power BI`,
  //     img: '/assets/img/speakers/Felipe_Correa_Veloso_dos_Santos_MARTHA_NASCIMENTO_CA.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '17/04/2024 (Quarta);18/04/2024 (Quinta);',
  //       time: '14:00-17:00',
  //       place: 'Lab. Informática: sala 101, bloco C, área II'
  //     }
  //   },
  //   {
  //     name: 'Rafael Leal Martins',
  //     institution: 'PUC Goiás e Fundação Jaime Câmara',
  //     speaking: 'Módulos úteis em Python',
  //     description: `Rafael Leal Martins é professor de graduação dos cursos de TI da PUC Goiás desde 2014, atualmente também atua como professor na Faculdade Senac Goiás. Trabalha como Desenvolvedor Web Full Stack, atualmente presta serviços para a Organização Jaime Câmara.`,
  //     subjectResume: `A oficina apresentará módulos da linguagem Python, para solucionar diversos problemas computacionais.`,
  //     img: '/assets/img/speakers/Rafael_Leal_Martins_ANA_FLAVIA_MARINHO_D_1.jpeg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Ronice Alves Veloso',
  //     institution: 'Faculdades Integradas da América do Sul (INTEGRA)',
  //     speaking: 'Produção de óleos essenciais',
  //     description: `Engenheira agrônoma pela Universidade Federal do Tocantins-UFT desenvolvendo projetos com as culturas de abacaxi e caju anão precoce. Mestre pelo Programa de Pós-Graduação em Produção Vegetal da UFT, trabalhando na linha de pesquisa de Fitotecnia com plantas medicinais e extração de óleo essencial. Doutora em Produção Vegetal atuando na linha de pesquisa de Fitossanidade, com ênfase em controle alternativo de doenças utilizando óleos essenciais, pelo Programa de Pós-Graduação em Produção Vegetal da UFT, campus de Gurupi.`,
  //     subjectResume: `Produção de óleos essenciais`,
  //     img: '/assets/img/speakers/Dra.-Ronice-Alves-Veloso_MARTHA_NASCIMENTO_CA.jpeg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'João Asmar Junior',
  //     institution: 'Superintendencia de Engenharia Agrícola e Desenvolvimento Sustentável',
  //     speaking: 'Bioinsumos no Estado de Goiás',
  //     description: `Engenheiro Agrícola, Superintendente de Engenharia Agrícola e Desenvolvimento Sustentável da Secretaria de Estado de Agricultura, Pecuária e Abastecimento (SEAPA).`,
  //     subjectResume: `Programa Estadual de Bioinsumos da Secretaria de Estado de Agricultura, Pecuária e Abastecimento (SEAPA) tem como objetivo ampliar e fortalecer a adoção de práticas para a evolução do setor agropecuário, com a expansão da produção, do desenvolvimento e da utilização de bioinsumos e sistemas de produção sustentáveis.`,
  //     img: '/assets/img/speakers/Bioinsumos.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Alisson Rodrigues Alves',
  //     institution: 'UNIGOIÁS / FACULDADE SENAC - GO',
  //     speaking: 'PROTEGENDO O FUTURO: SEGURANÇA DA INFORMAÇÃO E INTELIGÊNCIA ARTIFICIAL NO MERCADO ATUAL.',
  //     description: `Mestre em Ciências da Computação pela Universidade Federal de Minas Gerais (UFMG), Bacharel e Técnico em Informática pelo Instituto Federal de Goiás (IFG). Atualmente é professor (com experiência em Ensino a Distância) no Centro Universitário de Goiás (UNIGOIÁS, antigo Uni-ANHAGUERA) e na Faculdade SENAC Goiás. Foi coordenador de Projetos de TI na Linkcon Consultoria em TI e analista de infraestrutura de TI no Centro Cultural Oscar Niemeyer. Possui interesse em Desenvolvimento de Software, Engenharia de Software, Segurança da Informação, Redes de Computadores com ênfase em Redes Programáveis (Redes Definidas por Software, Redes Definidas por Rádio e Internet das Coisas), Gerenciamento de Projetos. Foi agraciado com uma bolsa de mestrado resultado do 1 lugar do Prêmio Destaque de Iniciação Científica do CNPq na modalidade Iniciação Tecnológica. Possui certificações técnicas Sophos (ArcServe UDP 6.5 Backup tool e XG Firewall v.17 - Engineer).`,
  //     subjectResume: `Destaca as tecnologias da segurança da informação integrada com Inteligência Artificial.`,
  //     img: '/assets/img/speakers/PALESTRANTE_VICENTE.jpeg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Messias Reis',
  //     institution: 'Mundo de Projetos',
  //     speaking: 'Estado da Arte em Sistemas e Aplicações para Gerenciamento de Projetos de TI',
  //     description: `Bacharel em Ciência da Computação. Mestre em Engenharia Elétrica e Computação pela Universidade Federal de Goiás. MBA em Governança nas Tecnologias da Informação. MBA em Gerenciamento de Projetos. Certificado em Project Management Professional - PMP pelo Project Management Institute - PMI. Certificado MCTS (MS Project 2013) pela Microsoft. Certificado Agile Scum Master pela Exin. Certificado Itil e Cobit. Certificado em Kanban Management I. Atuou Líder PMO em empresa de grande porte. Professor des cursos de MBA em Gerenciamento de Projetos, Certificação PMP, ferramenta MS Project e Escritório de Gerenciamento de Projetos.
  // Está com Diretor de filiação do Project Management Instituto - PMI, capítulo Goiás. Autor do livro “MS Prject 2016 - Porque Planejar e Controlar é Preciso”, e da obra “Procedimentos para Gerenciamento de Projetos”. Sócio proprietário da empresa Mundo de Projetos, capacitações e consultorias em Gerenciamento de Projetos.`,
  //     subjectResume: `A palestra "Estado da Arte em Sistemas e Aplicações para Gerenciamento de Projetos de TI" abordará como a diferenciação entre projetos, processos e rotinas impacta na eficiência organizacional, especialmente em contextos de TI. Enfatizando a necessidade de distinguir projetos com início, meio e fim das atividades rotineiras, a apresentação introduzirá uma metodologia inovadora focada em aplicações computacionais para categorizar demandas e aplicar o gerenciamento adequado. Utilizando um fluxo metodológico que incorpora um modelo de tomada de decisão e uma classificação matemática baseada na matriz Stacey, a proposta visa otimizar o gerenciamento de projetos de tecnologia da informação alinhando métodos apropriados às características e requisitos específicos de cada demanda. A metodologia, apoiada na classificação por prioridades do protocolo de Manchester, tem se mostrado um possível marco na utilização de de softwares e aplicação estratégias diferenciadas para o gerenciamento de projetos, processos e rotinas no universo da tecnologia da informação.`,
  //     img: '/assets/img/speakers/Messias_Reis.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Eurípedes Afonso da Silva Neto',
  //     institution: 'UFG',
  //     speaking: 'Panorama da Arquitetura em Goiás: Séculos XVIII, XIX e XX',
  //     description: `Doutor em Arquitetura e Urbanismo, pela Universidade de Brasília (2022). Possui mestrado em Arquitetura e Urbanismo pela Universidade de Brasília (2010) e graduação em Arquitetura e Urbanismo pela Universidade Estadual de Goiás (2007). Professor nos cursos de Arquitetura junto as universidades: UFG, UnB, UniEvangélica, UDF e UNIP.`,
  //     subjectResume: `Apresentação de parte da arquitetura realizada em Goiás durante os séculos XVIII, XIX e XX. Um panorama uniformizado graficamente através do olhar sobre cem edifícios. Organizando assim uma crônica da transformação da região por meio de suas edificações, demonstrando como foram espelho de um ideal político, social e arquitetônico que permeou a produção local.`,
  //     img: '/assets/img/speakers/Eurípedes_FREDERICO.jpeg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Franklin Silva de Castro Bonfim',
  //     institution: 'Serviço Nacional de Aprendizagem Comercial (SENAC-GO)',
  //     speaking: 'Vencendo Hackathons!',
  //     description: `Graduação em Gestão da Tecnologia da Informação, Graduação em Gestão em Análise e desenvolvimento de Sistemas, Especialização em andamento em MBA Tecnologia de Informação para Estratégia de Negócios, DPO – Data Protection Officer do SESC e SENAC Goiás. Embaixador da Inovação pela Secretaria de Estado de Desenvolvimento e Inovação do Estado de Goiás - SEDI/Goiás. Entusiasta da inovação e empreendedorismo, é especialista em Tecnologia da Informação e líder adjunto no SESC e SENAC Goiás. Cofundador e um dos líderes da comunidade Black Stars, contribui ativamente para projetos inovadores em IoT e destacou-se como um dos embaixadores da Inovação em Goiás. Sua trajetória é marcada por vitórias em hackathons, palestras inspiradoras e engajamento na promoção de eventos de tecnologia e empreendedorismo em Goiás.`,
  //     subjectResume: `A palestra "Vencendo Hackathons", destinada a graduandos de Análise e Desenvolvimento de Sistemas, Ciência da Computação, Ciência de Dados e IA e Engenharia de Computação, promete ser uma fonte inestimável de conhecimento e estratégias para aqueles interessados em se destacar nesses eventos competitivos de programação. Os palestrantes, com experiência comprovada em hackathons, compartilharão insights sobre como abordar esses desafios, enfatizando a importância do trabalho em equipe, pensamento criativo e habilidades técnicas afiadas. A apresentação cobrirá desde a preparação pré-evento, como formar equipes equilibradas e desenvolver uma mentalidade vencedora, até técnicas eficazes de brainstorming, prototipagem rápida e apresentação de projetos. Além disso, os participantes aprenderão como maximizar recursos limitados sob pressão de tempo, transformando ideias inovadoras em protótipos funcionais que impressionam os jurados. Essa palestra é uma oportunidade imperdível para quem aspira a dominar a arte de vencer hackathons, preparando os estudantes não apenas para competir, mas para triunfar nesse ambiente estimulante e altamente competitivo.`,
  //     img: '/assets/img/speakers/Franklin_ANA.png',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Eng. Ana Renata Volpini Litfalla',
  //     institution: 'CREA-GO',
  //     speaking: 'Palestra institucional do CEEA-GO e CREA-GO JOVEM,  e uma palestra completar sobre Ética e Valorização profissional',
  //     description: `Engenheira Civil, Pós em Segurança do Trabalho, MBA em Gestão Ambiental e em Auditoria, Perícia e Meio Ambiente; Assessora Institucional do CREA-GO Jovem; Perita judicial do TRT (2015 - 2018) e Membro Diretor AGEST.`,
  //     subjectResume: `Palestra institucional do CEEA-GO e CREA-GO JOVEM,  e uma palestra completar sobre Ética e Valorização profissional`,
  //     img: '/assets/img/speakers/Palestrante_CREA-GO.jpeg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Uirá do Amaral',
  //     institution: 'IFGoiano - Urutaí',
  //     speaking: 'Potencialidade da fruticultura no Centro-Oeste',
  //     description: `Engenheiro Agrônomo, Doutor em Fitotecnia - Professor do Instituto Federal Goiano - Campus Urutaí, atuando nas áreas de Fruticultura, Olericultura e Plantas Medicinais e Aromáticas.`,
  //     subjectResume: `A fruticultura tem se destacado no Brasil como uma das principais atividades agropecuárias, demonstrando influência no setor econômico e social.  A região Centro Oeste que lidera na produção nacional de grãos, onde a mesma por possuir microrregiões bem definidas em seus estados, viabiliza o emprego da fruticultura em todos eles, visto que cada microrregião dispõe de condições especificas de temperatura, solo e umidade para cada tipo de cultura que venha a ser cultivada.`,
  //     img: '/assets/img/speakers/Amaral_MARTHA.jpeg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Antônio Generoso',
  //     institution: 'Consultor em LGPD',
  //     speaking: 'Lei Geral de Proteção de Dados, até que ponto a Inteligência Artificial pode me ajudar',
  //     description: `Advogado, Analista de Sistemas consultor em LGPD, Bacharel em Direito pela Universidade Salgado de Oliveira (2020). Bacharel em Análise de Sistemas pela Universidade Salgado de Oliveira (2001). Especialista em Direito Administrativo e Licitações pela Faculdade Prominas(2022). Especialização em andamento - Direito Público pela Faculdade Prominas(previsão 2023).Especialização pela Pontifícia Universidade Católica de Goiás em Qualidade e Gestão de Software(2010). Mestrando pela Universidad Europea del Atlantico com dupla titulação (Resolución de Conflictos y Mediación), e pela Universidad Internacional Iberoamericana (Maestría en Dirección Estratégica con especialidad en Gerencia),Espanha e Porto Rico, respectivamente(previsão 2023). Doutorado em "Nuevas Tecnologías de la Información y las Comunicaciones" (2005). Professor do curso de Direito - Direito Administrativo - Direito Civil - Sistemas inteligentes para tratamento de dados pessoais sensíveis de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD Lei 13.709/2018). Desenvolvimento de tecnologia para implementação de políticas públicas em negociação, mediação e conflito; Atuação em Análise de Sistemas no domínio corporativo, médico-sanitário. Sistemas inteligentes. Lógica Matemática. Inteligência Artificial aplicada à esportes coletivos. Inteligência Artificial aplicada ao domínio jurídico administração pública(desenvolvido no Tribunal de Contas do Estado de Goiás / GoiasPrev / Saneago) junto ao governo Espanhol e Brasileiro). Inteligência Artificial aplicada ao tratamento do câncer de mama, colo retal, pulmão e outros (Projeto junto à Universidad de Murcia, 2007 / Espanha ). Soluções em dispositivos móveis de comunicação (smartphones, tablets, wearables); Cálculos preditivos usando redes Bayesianas aplicadas ao domínio jurídico, médico e esportivo. Tratamento de dados clínicos pessoais utilizando o modelo HL7/2008. Arquiteto de Sistemas com inteligência ativa utilizando tecnologia CUDA.`,
  //     subjectResume: `Apresentação a respeito da LGPD  com IA`,
  //     img: '/assets/img/speakers/user-vector-man.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'André Luiz Miranda Silva Zopelari',
  //     institution: 'AcadGeo',
  //     speaking: 'Meio Ambiente e Comercialização Agrícola',
  //     description: `Graduado em Relações Internacionais (1998), Mestrado em Agronegócio (PPAGRO/UFG, 2011) e Doutor em Políticas Públicas, Estratégias e Desenvolvimento - linha pesquisa: estratégias e desenvolvimento sustentável (PPED/UFRJ). Possui experiência em Política Nacional de Pagamento por Serviços Ambientais e Zoneamento Agroecológico da Cana-de-açúcar em Goiás.`,
  //     subjectResume: `Meio Ambiente e Comercialização Agrícola`,
  //     img: '/assets/img/speakers/user-vector-man.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'João Paulo Marinho Martiins',
  //     institution: 'Sorcero',
  //     speaking: 'De Ciência de Dados a Engenharia de Inteligência Artificial: um achismo de como será o futuro',
  //     description: `Cientista de Dados e Engenheiro de Machine Learning trabalhando com projetos de ponta envolvendo Inteligência Artificial.`,
  //     subjectResume: `Como as profissões de Cientista de Dados e Engenheiro de Inteligência Artificial estão moldando o futuro não só da tecnologia, mas também de todas as outras profissões.`,
  //     img: '/assets/img/speakers/Paulo_ANDRE.png',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Vladia Correchel',
  //     institution: 'Escola de Agronomia UFG / Laboratório de Fisica do Solo',
  //     speaking: 'Praticas de Manejo e Conservação do Solo',
  //     description: `Graduação em Agronomia pela UFLA, mestrado em Agronomia (Solos e Nutrição de Plantas) pela USP/ESALQ  e doutorado em Ciências (Energia Nuclear na Agricultura) pela USP/CENA. Atua na Escola de Agronomia da UFG com as disciplinas Física do Solo e Erosão e Conservação do Solo.`,
  //     subjectResume: `Praticas de Manejo e Conservação do Solo`,
  //     img: '/assets/img/speakers/Correchel_MARTHA.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Sandra Catharinne Pantaleão Resende',
  //     institution: 'PUC Goiás / UEG',
  //     speaking: 'A crítica da arquitetura contemporânea: sobre o prêmio Pritzker',
  //     description: `Doutorado em Arquitetura e Urbanismo pela Universidade de Brasília (2016). Mestre em Geografia - Dinâmica Sócio-Ambiental, pela UEL (2010). Graduada em Arquitetura e Urbanismo pela PUC Goiás (2006) e em Artes Visuais - habilitação Design Gráfico pela UFG (2000). Mãe da Ana Caroline (2012) e do Paulo Vitor (2018). Líder do Grupo de Pesquisa Cidade, Morfologia, Paisagem e Morfologia (CIMPARQ - CNPQ/PUC Goiás). Docente desde 2009 na UEG e, 2010, na PUC Goiás nos cursos de Arquitetura e Urbanismo e, desde 2019, nos Programa de Pós Graduação em Desenvolvimento e Planejamento Territorial e no Programa de Pós Graduação em História ambos da PUC/Goiás, além de orientação de alunos de Iniciação Científica vinculados às bolsas PIBIC/CNPQ e BIC/PUC Goiás desde 2014.`,
  //     subjectResume: `O prêmio Pritzker, desde 1982, aponta o arquiteto de maior destaque anualmente em que são consideradas suas contribuições para a disciplina, seja pela produção teórica ou prática. A partir de uma perspectiva histórica, apresentam-se reflexões sobre as transformações do campo disciplinar nos últimos 40 anos tendo em vista a consolidação e crise do Movimento Moderno, as manifestações pós-modernas e as posturas após a crise de 2008. Toma-se como referência para as reflexões as posturas dos vencedores com o contexto histórico permitindo indicar mudanças na produção e crítica arquitetônica associadas aos desafios do século XXI.`,
  //     img: '/assets/img/speakers/Sandra_FREDERICO.jpeg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Elizon Nunes',
  //     institution: 'Labogef/UFG',
  //     speaking: 'Modelos Hidrológicos',
  //     description: `Doutor em Geografia com atuação nas áreas de Geoprocessamento, Sistemas de Informações Geográficas, Sensoriamento Remoto. Geógrafo no Instituto de Estudos Socioambientais, desenvolvendo atividades junto ao Laboratório de Geomorfologia, Pedologia e Geografia Física da Universidade Federal de Goiás`,
  //     subjectResume: `Modelos Hidrológicos`,
  //     img: '/assets/img/speakers/user-vector-man.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Rodolfo Wenceslau R. Mota',
  //     institution: 'SEBRAE-GO',
  //     speaking: 'Visualizando o Invisível: A Arte da Representação Gráfica em Ciência de Dados',
  //     description: `Trabalho na área de Tecnologia da Informação (TI) há mais de 15 anos e desde então venho vivenciando os diversos desafios e papéis existentes na área. Costumo dizer que o meu principal objetivo é ajudar os outros a alcançarem mais produtividade em suas áreas de negócios através das facilidades que a TI pode proporcionar. O meu foco principal é na identificação da solução do problema e não em encontrar culpados. No início da minha carreira atuei como programador Java em regime de fábrica de software no qual pude conhecer diversas ferramentas, tecnologias, padrões e metodologias. Em seguida vivenciei por alguns anos o papel de analista de testes ao ficar responsável por realizar os testes dos programas de outros amigos e com o passar do tempo obtive uma oportunidade para trabalhar como analista de sistemas terceirizado para o Governo do Estado de Goiás. Após este período participei de processo seletivo no SEBRAE/GO no qual tive o privilégio de passar em 1º lugar para o cargo de Analista no qual tenho trabalhado desde o ano de 2013.
  // Acredito muito no tripé PESSOAS, PROCESSOS e TECNOLOGIA como o caminho para ajudar o BRASIL a florescer e auxiliá-lo nesta travessia até se transformar no país dos nossos SONHOS!`,
  //     subjectResume: `Nessa palestra, mergulharemos na interseção fascinante entre a Ciência de Dados, a Inteligência Artificial e a incrível habilidade humana de traduzir dados complexos em representações visuais impactantes. Descubra como a aplicação de técnicas avançadas de visualização, aliada ao poder da Inteligência Artificial, desvenda padrões, insights e conexões que escapam à observação comum. Vamos juntos desvendar o invisível?`,
  //     img: '/assets/img/speakers/Rodolfo_Wencelau.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Benjamim Jorge Rodrigues dos Santos',
  //     institution: 'PUC Goiás',
  //     speaking: 'Planejamento Urbano - Qual é a cidade que queremos?',
  //     description: `Possui graduação em Engenharia Civil pela Universidade Federal de Goiás - UFG (1981), Licenciatura Plena em Construção Civil pelo Centro Federal de Educação Tecnológica de Minas Gerais - CEFET-MG (1989), Mestrado em Engenharia de Transportes pela Escola de Engenharia de São Carlos da Universidade de São Paulo - EESC/USP (1992) e Doutorado em Engenharia de Transportes pela Escola Politécnica da Universidade de São Paulo - POLI/USP (1998). Atualmente é professor titular da Pontifícia Universidade Católica de Goiás. Tem experiência na Área de Engenharia de Transportes, com ênfase em Infraestrutura e Planejamento de Transportes, atuando principalmente nos seguintes temas: Projetos executivos de rodovias, ferrovias, hidrovias e aeroportos; Planejamento de transporte urbano; Estudos de Engenharia de tráfego; Estudos de Impacto no Trânsito - EIT e Estudos de Impactos de Vizinhança - EIV.`,
  //     subjectResume: `Palestra ministrada pelo Prof. Dr. Benjamim Jorge discutindo questões fundamentais de mobilidade urbana.`,
  //     img: '/assets/img/speakers/Foto_benjamim_MARTA.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Aníbal Tavares de Azevedo',
  //     institution: 'Univesp/Canal próprio no YouTube',
  //     speaking: 'Palestra de abertura do VI Desafio em Ciências de Dados: Oportunidades e Desafios na era da Inteligência Artificial massificada',
  //     description: `Possui graduação em Matemática Aplicada e Computacional pela Universidade Estadual de Campinas (1999), mestrado em Engenharia Elétrica pela Universidade Estadual de Campinas (2002), doutorado em Engenharia Elétrica pela Universidade Estadual de Campinas (2006), e Livre-Docência pela Universidade Estadual de Campinas (2020). Tem experiência na produção de modelos matemáticos e de simulação para Engenharia de Produção e Planejamento e Programação da Operação do Sistema Elétrico com ênfase em Programação Linear, Não-Linear e Inteira Mista, atuando principalmente nos seguintes temas: planejamento e controle da produção da manufatura e da geração e transmissão de energia elétrica, desenvolvimento de modelos matemáticos e de simulação para logística e operação portuária, localização de facilidades como hospitais, centrais telefônicas e armazéns de soja com emprego dos seguintes métodos: algoritmos genéticos, Beam Search, Simulated Annealing, Simulação de sistemas e representação por regras.  Já criou mais de 1100 vídeo-aulas abordando temas como pesquisa operacional e simulação para a UNIVESP e o seu próprio canal no YouTube.`,
  //     subjectResume: `Nessa conversa serão apontados alguns desenvolvimentos da inteligência artificial massificada em diversos campos. Diversas aplicações práticas serão abordadas e exemplificadas. Possibilidades de novos negócios para resolver as dores do mundo combinando o uso das tecnologias habilitadoras da indústria 4.0 em conjunto com a inteligência artificial serão discutidas.`,
  //     img: '/assets/img/speakers/AnibalTavares.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  
  //   {
  //     name: 'Marta Pereira da Luz',
  //     institution: 'PUC Goiás e Eletrobrás Furnas',
  //     speaking: 'Por que somos minoria em STEM? Roda de Conversa: Mulheres na Ciência',
  //     description: ``,
  //     subjectResume: `Na palestra será tratado sobre a realidade do mercado de trabalho e sobre a participação de mulheres em áreas de STEM e será discutido sobre as questões históricas da mulher nestes cenários. A conversa será sobre as mulheres nas áreas de Ciência, Tecnologia, Engenharia e Matemática (STEM). O objetivo é que as mulheres participantes da roda compartilhem suas experiências e dediquem um pouco de seu tempo para pensarem em ações para engajar meninas do ensino médio e universitárias, fomentando ações que as incentivem a explorar as áreas STEM. De acordo com dados da UNESCO, estima-se que apenas 30% dos cientistas do mundo sejam mulheres. A participação de mulheres e meninas deve ser fortalecida pois desempenham um papel essencial nas comunidades de ciência e tecnologia. `,
  //     img: '/assets/img/speakers/MartaPereira.png',
  //     customSize: '100%',
  //     datentime: {
  //       date: '',
  //       time: '',
  //       place: ''
  //     }
  //   },
  // {
  //     name: 'Márcio Victor Trevisan',
  //     institution: 'WORKSOLAR IMPORTAÇÃO E DISTRIBUIÇÃO',
  //     speaking: 'Máquinas Síncronas: Conceitos básicos, princípios e funcionamento, aspectos construtivos, aplicabilidade.',
  //     description: 'Mais de 15 anos de experiência na área empresarial, educacional e engenharia elétrica, tendo atuado em empresas multinacionais de grande porte como: Puc-Goiás, Enel X e WorkSolar; desenvolvendo atividades com foco em engenharia como: projetos elétricos, telecomunicações e usinas fotovoltaicas, data centers , redes de telecomunicações estruturadas em prédios comerciais e industriais, redes de energia estáveis e ininterruptas; pós-graduações em engenharia de controle e automação industrial e gestão de projetos e processos; planejamento, construção e implantação de áreas estratégicas de mercado e gestão de negócios, com resultados frutíferos alcançados. Experiência em negociação com stakeholders, tomadores de decisão para obtenção de condições comerciais favoráveis ao negócio; habilidade de negociação e bom relacionamento interpessoal; capacidade de lidar com mudanças e se adaptar a novas situações com alto grau de resiliência e senso de urgência; foco em superação de metas, tomada de decisão firme, planejada, rápida; concepção de normas técnicas para desenvolvimento de redes de distribuição rurais e urbanas; ABNT NBR 5410-Instalações Elétricas de Baixa Tensão e Normas Regulamentadoras NR-10-Segurança nas Instalações e outras normas técnicas na área de serviços elétricos ; sólida formação acadêmica, principalmente sou graduado em Engenharia Elétrica pela PUC de Goiás e graduado pela Faculdade Única e Pós Graduação do Brasil, complementando meu perfil.',
  //     subjectResume: 'As máquinas síncronas são dispositivos eletromecânicos que convertem energia mecânica em energia elétrica de forma eficiente. Seu funcionamento baseia-se no princípio da sincronização entre o campo magnético girante do rotor e o campo magnético do estator. Comumente utilizadas em aplicações de geração e transmissão de energia elétrica, as máquinas síncronas oferecem alta eficiência e controle preciso de frequência e tensão. Seus principais componentes incluem o estator, onde está localizado o enrolamento da armadura, e o rotor, que possui enrolamento de campo. Aspectos construtivos como a geometria dos polos e a disposição dos enrolamentos são essenciais para o seu desempenho. Além disso, as máquinas síncronas encontram aplicabilidade em diversas áreas, desde geração de energia em usinas até propulsão de navios e veículos elétricos, destacando-se pela sua versatilidade e confiabilidade em diferentes cenários industriais e tecnológicos.',
  //     //img: '/assets/img/speakers/foto_MárcioVictorTrevisan.png',
  //     img: '/assets/img/speakers/user-vector-man.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '17/04/2024 (Quarta)',
  //       time: '08:00-09:30',
  //       place: 'Auditório 1, área II'
  //     }
  //   },
  //   {
  //     name: 'Ricardo Vitoy',
  //     institution: 'PUC Goiás',
  //     speaking: 'Avaliação de máquinas, equipamentos e bens móveis',
  //     description: 'Possui graduação em Engenharia Mecânica pela Universidade Federal de Santa Catarina (1993) e mestrado em Engenharia Mecânica pela Universidade Federal de Santa Catarina (1998). Atualmente é consultor - MUSA INDÚSTRIA E COMÉRCIO DE ALIMENTOS LTDA, engenheiro - TRAVAGLIA ENGENHARIA LTDA, prof especialização em avaliações e perícias do Instituto de Pós-graduação e Graduação, professor de pós graduação do Instituto de Pós-graduação e Graduação, professor do Instituto Federal de Educação, Ciência e Tecnologia de Goiás e professor do ensino superior da Pontifícia Universidade Católica de Goiás. Tem experiência na área de Engenharia Mecânica, com ênfase em Engenharia Mecânica, atuando principalmente nos seguintes temas: avaliação, mecânica dos fluidos, projeto e processamento industrial.',
  //     subjectResume: 'O minicurso abordará temas como custos direto e indireto de instalação, depreciação inicial e desmontagem, valor de equipamentos (sucata, econômico, uso e de risco). Classificação de máquinas, equipamentos, instalações e bens industriais em geral. Metodologia de avaliação de máquinas. Vagas limitadas: 20',
  //     //img: '/assets/img/speakers/ricardovitoy_LUCIANACASALETTI.jpeg',
  //     img: '/assets/img/speakers/user-vector-man.jpg',
  //     customSize: '100%',
  //     datentime: {
  //       date: '17/04/2024 (Quarta)',
  //       time: '08:30-12:00',
  //       place: 'Laboratório: sala 002, bloco J, área III'
  //     }
  //   },
  
  // ]
  
  
        /*
        {
      name: 'Me. Alberto Vilela Chaer',
      institution: 'PUC Goiás',
      speaking: 'Aplicações em Engenharia utilizando o software Smath Solver',
      description: `Mestre em Engenharia Civil / Estruturas pela Pontifícia Universidade Católica do Rio de Janeiro (1991). Graduado em Engenharia Civil pela Universidade Federal de Goiás (1986). Atualmente é Professor Adjunto-I do Curso de Engenharia Civil da Escola de Engenharia da Pontifícia Universidade Católica de Goiás (desde 1989) e Professor Assistente-I do Curso de Engenharia Civil da Escola de Engenharia Civil da Universidade Federal de Goiás (desde 2009). Tem experiência na área de Engenharia Civil, com ênfase em Estruturas de Concreto Armado e Protendido (Experiência Acadêmica: Magistério do Ensino Superior; Experiência Profissional: Elaboração de Projetos de Estruturas em Concreto Armado e Protendido; Consultoria em Estruturas). Poeta. Escreve poemas desde 1980. Artista visual. Produz poesia visual desde 2005.`,
      subjectResume: `O minicurso “Aplicações em Engenharia utilizando o software Smath Solver” tem como objetivo apresentar as possibilidades que este programa – gratuito a partir de download em página oficial na web (https://en.smath.com/view/SMathStudio/summary) – oferece para elaboração de cálculos e geração da respectiva memória de cálculo de um problema qualquer que tenha sua resolução a partir de utilização de expressões matemáticas.  Trata-se de um programa bastante robusto e amplamente conhecido pelo nome de “SMath Studio” utilizado em universidades do Brasil e exterior, sendo uma ferramenta de sedimentação do processo ensino-aprendizagem, através da simulação dos eventos envolvidos em um cálculo. O benefício da utilização deste programa é utilizar da rapidez dos cálculos feitos por meio da máquina, cujas operações e lógica são conduzidas pelo desenvolvimento do usuário, para que se possa tomar conclusões e decisões a partir dos resultados. Uma ferramenta que se constitui em um “caderno de exercícios” de Professores, Estudantes e Profissionais de Engenharia. Recomenda-se que os participantes do referido minicurso acessem a sessão por meio de computador pessoal (sistema operacional Windows e Linux; também por versão Open in browser) para melhor rendimento durante a preleção e atividades propostas, apesar de que o software também tem sua versão gratuita para ser instalada em aparelho celular no sistema Android.`,
      img: '/assets/img/speakers/albertovilela.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '14:00-18:00',
        place: 'Online: Microsoft Teams'
      }
    },
    
    {
      name: 'Alessandro Miguel de Oliveira',
      institution: 'PUC Goiás',
      speaking: 'Ferramentas computacionais para o desenho de projeto de arquitetura',
      description: `Graduado em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás (2008) e pós-graduado lato sensu em Projeto de Arquitetura pela Faculdade Ávila de Ciências Humanas e Exatas (2011). Atualmente exerce a atividade de docência como Professor Horista Auxiliar I pela Pontifícia Universidade Católica de Goiás desde 2014, nas disciplinas: desenho projetivo; expressão e representação; informática aplicada à arquitetura e projeto arquitetônico; e atua como arquiteto em escritório próprio. Tem experiência em Arquitetura e Urbanismo nas áreas de docência em arquitetura, arquitetura hospitalar, industrial, residencial, arquitetura de interiores, arquitetura promocional, representação gráfica, informática aplicada à Arquitetura e Urbanismo e computação gráfica.`,
      subjectResume: `Uso do AutoCAD para o desenho de projeto, geometria descritiva, elementos constitutivos das edificações e representação arquitetônica.`,
      img: '/assets/img/speakers/alessandromiguel.jpg',
      customSize: '100%',
      datentime: {
        date: '08, 09 e 10/05',
        time: '14:00-17:00',
        place: 'Presencial: Laboratóro 102, Bloco B, Área III'
      }
    },
    
    {
      name: 'Lucas Ribeiro Camargo Mendes',
      institution: 'MRV Engenharia',
      speaking: 'Processo construtivo da parede de concreto e produtividade',
      description: `Engenheiro Civil, formado na Uni-Goiás em 2019/2, atuando a 7 anos na construção civil e a 2 anos como Engenheiro residente de obras em parede de concreto pela MRV ENGENHARIA. Pós-Graduando em Gestão de Projetos e Processos pelo IPOG..`,
      subjectResume: `Processo construtivo da parede de concreto e produtividade`,
      img: '/assets/img/speakers/lucasribeiro.png',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '08:00-09:30',
        place: 'Presencial: Auditório 3'
      }
    },
  
  
    {
      name: 'Karine de Souza Costa',
      institution: 'URBS Connect',
      speaking: 'Mesa Bistrô URBS',
      description: `Formada em Recursos Humanos pela Uni-Anhanguera. Pós -graduada em RH 4.0. Responsável pela área de treinamentos da URBS Connect.`,
      subjectResume: `Mesa Bistrô URBS`,
      img: '/assets/img/speakers/karinesouza.png',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '19:00-20:30',
        place: 'Presencial: Hall de entrada da Área III'
      }
    },
   
    {
      name: 'André Luiz Dias da Silva',
      institution: 'DN Engenharia',
      speaking: 'Engenharia de Segurança no Agronegócio',
      description: `Engenheiro de Controle e Automação e Engenheiro de Segurança do Trabalho que atua na DN Engenharia com ênfase em segurança do trabalho no Agronegócio.`,
      subjectResume: `A engenharia de segurança no Agronegócio é importante para garantir a segurança dos trabalhadores e do ambiente de trabalho, bem como para aumentar a eficiência e a produtividade das atividades agrícolas. Conta com planejamento de medidas de prevenção e controle de incêndios nas áreas de plantio e armazenamento de produtos agrícolas, Desenvolvimento de estratégias para prevenção de acidentes com máquinas agrícolas, Implantação de medidas de segurança alimentar, como a adoção de boas práticas agrícolas e o controle de qualidade dos alimentos produzidos, Projeto de instalações de armazenamento de produtos agrícolas seguras e eficientes, incluindo sistemas de ventilação e controle de temperatura.`,
      img: '/assets/img/speakers/andreluiz.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '08:00-09:30',
        place: 'Presencial: Auditório 2'
      }
    },
  
    { 
      name: 'Scheila Ronconi Da Rolt',
      institution: 'Araguaia produtos agropecuários ', 
      speaking: 'Controle fitossanitário em hortaliças',
      description: `Engenheira Agrônoma, Coordenadora Técnica de Hortifruti - GO/MT na empresa Araguaia produtos agropecuários.`,
      subjectResume: `Controle fitossanitário em hortaliças é o conjunto de medidas adotadas para proteger as plantas cultivadas de doenças, pragas e outros agentes que possam afetar sua saúde e qualidade. Essas medidas podem incluir a adoção de práticas culturais adequadas, como rotação de culturas e manejo do solo, o uso de defensivos agrícolas quando necessário e a adoção de estratégias de controle biológico e integrado de pragas. O objetivo do controle fitossanitário é garantir a saúde e a produtividade das plantas, bem como a segurança alimentar e a proteção do meio ambiente. Além disso, o controle fitossanitário também pode contribuir para a sustentabilidade da produção agrícola, reduzindo o uso de defensivos químicos e promovendo práticas preventivas e curativas mais sustentáveis e ecologicamente corretas.`,
      img: '/assets/img/speakers/scheilaronconi.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '08:00-09:30',
        place: 'Presencial: Auditório 2'
      }
    },
  
    { 
      name: 'Lorenzo Czepak Gaston e Ana Makowich ',
      institution: 'Drones on Farm e MIP-UFG ',
      speaking: 'Uso de drones para liberação de macrobiológicos ',
      description: `Lorenzo Czepak Gaston é sócio proprietário da Drones on Farm, empresa especializada na liberação de macrobiológicos através de drones agrícolas e possui mais de 5 anos de experiência com manutenção e operação de drones agrícolas. 
      Ana Makowich é engenheira agrônoma formada pela Universidade Federal de Goiás, coordenadora em Aviação Agrícola e mestranda em Fitossanidade no PPGA/EA/UFG.`,
      subjectResume: `O uso de drones para liberação de macrobiológicos é uma técnica inovadora que tem sido cada vez mais utilizada na agricultura para controle biológico de pragas. Macrobiológicos são organismos vivos, como insetos, ácaros e nematoides, que são utilizados para o controle de pragas agrícolas, em substituição aos agrotóxicos.
      Os drones são utilizados para liberar os macrobiológicos nas áreas de cultivo de forma mais eficiente e precisa, em comparação com a liberação manual. Com o uso dos drones, é possível alcançar áreas de difícil acesso e distribuir os macrobiológicos de maneira uniforme, reduzindo o desperdício e aumentando a eficácia do controle biológico.
      Além disso, o uso de drones para liberação de macrobiológicos também pode reduzir os custos e o tempo necessários para a aplicação dos organismos de controle biológico, em comparação com as técnicas convencionais. A técnica também pode contribuir para a redução do uso de defensivos químicos e a promoção de práticas mais sustentáveis na agricultura.`,
      img: '/assets/img/speakers/lorenzoana.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '10:00-11:30',
        place: 'Presencial: Auditório 2'
      }
    },
  
    {
      name: 'Jefferson Lins',
      institution: 'Universidade de São Paulo',
      speaking: 'Durabilidade de Geossintéticos',
      description: `Professor Associado da USP, Depto. de Geotecnia da EESC
      Graduado em Engenheiro Civil - UFAL (2004), Mestre em Geotecnia - EESC/USP (2006), Doutor em Eng. Civil (Eng. de Estruturas) - EESC/USP (2011) com período sanduíche na University of Nebraska-Lincoln - EUA (2010). Pós-Doutor em Eng. Civil pela EESC/USP (2013) e pela Universidade do Porto - Portugal (2017). Livre-docente em Geotecnia pelo SGS-EESC-USP (2019). Leciona para os cursos de graduação em Engenharia Civil e Engenharia Ambiental sobre temas relacionados à Mecânica dos solos e Geossintéticos. É professor permanente no Programa de Pós-Graduação em Geotecnia e no Programa de Pós-graduação em Engenharia de Transportes, ambos na EESC/USP. Responsável pelo Laboratório de Geossintéticos da EESC/USP. Coordenador do Curso de Engenharia Civil da EESC/USP desde 2019. Vice-Chefe do Departamento de Geotecnia (SGS) da EESC/USP desde 2021. Coordenador da Comissão de Estudo Especial de Geossintéticos da Associação Brasileira de Normas Técnicas (ABNT) de 2014 a 2020. Parecerista de agências de fomento e de congressos e revistas nacionais e internacionais. Membro de sociedades de cunho científico e tecnológico, cultural e profissional: ABMS, ANPET, IGS e ABRATEC.`,
      subjectResume: 'Durabilidade de Geossintéticos',
      img: '/assets/img/speakers/jeffersonlins.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '19:00 - 20:30',
        place: 'Online: YouTube',
        link:'https://www.youtube.com/watch?v=8kJZoBHnn_4'
      }
    },
  
    {
      name: 'Maria Alejandra Aparicio Ardila',
      institution: 'Nortene Plásticos',
      speaking: 'Aplicações geotécnicas e ambientais das geomembranas',
      description: `Possui graduação em Engenheira Civil pela Universidade Industrial de Santander- Colômbia (2016) e mestrado em Geotecnia pela Universidade de São Paulo - EESC/USP (2020) na linha de pesquisa de geossintéticos. No mercado profissional tem experiência em elaboração e gerenciamento de projetos, realização de orçamentos e execução e acompanhamento de obras civis. Experiência na realização de ensaios geotécnicos e de geossintéticos. No âmbito acadêmico, desenvolve estudos nas áreas de Melhoria dos Solos, Geossintéticos e Bioengenharia, através da participação de grupos de pesquisa associados ao laboratório de geossintéticos da USP. Atualmente é doutoranda no programa de Geotecnia da EESC/USP estudando desaguamento de resíduos por meio de tubos geotêxteis. Secretária da Comissão de Estudo Especial de Geossintéticos (ABNT/CEE-175) desde 2021 e membro do núcleo jovem da IGS Brasil desde 2019.`,
      subjectResume: `Atualmente, a geomembrana de Polietileno é o único tipo de geossintético exigido pelos órgãos ambientais para garantir a segurança na destinação dos resíduos gerados em diversos tipos de indústrias. É um material polimérico de baixíssima permeabilidade, que atua como barreira, impedindo a passagem de fluidos, gases e vapores. Está presente em todos os sistemas de impermeabilização, desde a barreira simples até a barreira composta. É utilizado em diferentes trabalhos hidráulicos para o armazenamento ou condução de água. Nesta palestra serão abordadas algumas aplicações da geomembrana de polietileno.`,
      img: '/assets/img/speakers/mariaalejandra.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '10:00-11:30',
        place: 'Presencial: Auditório 2'
      }
    },
  
    {
      name: 'Patrick Morais de Souza Lima',
      institution: 'Gerente de Engenharia e Qualidade de Software na GFT Technologies',
      speaking: 'TI: Caminhos e oportunidades dentro de um mar de possibilidades',
      description: `Me chamo Patrick Morais, sou Goiano, possuo mais de 12 anos na área de TI. Sou bacharel em Ciência da Computação pela PUC, Especialista em Gestão de Projetos de TI pela USP, Diplomado em liderança e tecnologia pelo Tecnólogico de Monterrey no México, atualmente QA Manager no grupo GFT. Falo sobre tecnologia e migração de carreiras e nas horas vagas gosto de me dedicar aos esportes radicais.`,
      subjectResume: `Atualmente, nós da área de TI, vivemos em um mundo de possibilidades e incertezas. Foi pensando nisso que trouxe o tema "TI: Caminhos e oportunidades dentro de um mar de possibilidades", que irá falar um pouco de como planejar e o que fazer para ter uma carreira promissora dentro da área que mais cresce mundialmente. Qual caminho seguir? Como escolher sua carreira? Como ser um profissional desejado pelas empresas de tecnologia? Tudo isso será discutido no dia 10/05. Nos vemos lá!`,
      img: '/assets/img/speakers/patrick-morais-de-souza-lima.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '20:30-22:00',
        place: 'Presencial: Auditório 1'
      }
    },
  
    {
      name: 'Rangel Henrique Brandão Silva, Frederico André Rabelo e Guilherme de Andrade Bento',
      institution: 'Rangel Henrique Brandão Silva - UEG e RGB Estúdio | Frederico André Rabelo - PUC Goiás, UFG e RGB Estúdio | Guilherme de Andrade Bento - PUC Goiás e RGB Estúdio',
      speaking: 'Concursos de Projeto',
      description: `Rangel Henrique Brandão Silva - Mestre em Arquitetura - Projetos digitais pela FAV-UFG (2019), MBA em Gestão de Projeto em Engenharia e Arquitetura pelo IPOG (2014), Graduação em Arquitetura e Urbanismo pela PUC-GO (2011) . Sócio-fundador da RGB Estúdio, parceiro da Espaço Equipe de Planejamento e Arquitetura (Arquitetos Fernando Carlos Rabelo e Frederico André Rabelo). Experiência em projetos de médio e grande porte de Arquitetura e Urbanismo com ênfase na tecnologia BIM. Participa de concursos de projetos de arquitetura já obteve premiações e menções honrosas. Professor no curso de Arquitetura e Urbanismo da Universidade Estadual de Goiás - UEG.
      Frederico André Rabelo - Possui graduação em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás (1994) e mestrado em Arquitetura pela Universidade Federal do Rio Grande do Sul (2007). Atualmente é diretor técnico da Espaço Equipe de Planejamento Arquitetura e Consultoria ltda. e da Tecto Construtora ltda., Professor Assistente 1 da Pontifícia Universidade Católica de Goiás, lotado na Escola de Artes e Arquitetura e atual Coordenador do Curso e Professor Adjunto 2 da Universidade Federal de Goiás, lotado na Faculdade de Artes Visuais. Tem experiência na área de Arquitetura e Urbanismo, com ênfase em Planejamento e Projetos de Edificação e Urbanismo e Construção de Edificações.
      Guilherme de Andrade Bento - Possui graduação pela Pontifícia Universidade Católica de Goiás (2011) e Especialista em Docência no Ensino Superior pela FABEC (2014). Atualmente é sócio-fundador da RGB Estúdio, trabalha em parceria com o escritório Espaço Equipe de Planejamento e Arquitetura (Arquitetos Fernando Carlos Rabelo e Frederico André Rabelo), professor na Pontifícia Universidade Católica de Goiás (PUC GO). Experiência na área de Arquitetura e Urbanismo com ênfase em projetos de médio a grande porte.`,
      subjectResume: `Abordagem dos concursos públicos de projetos de Arquitetura e Urbanismo, a partir da experiência do escritório RGB Estúdio.`,
      img: '/assets/img/speakers/rangel.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '08:00-10:00',
        place: 'Presencial: Auditório 1'
      }
    },
  
    {
      name: 'Evelyn Cristine Moreira Soares',
      institution: 'PUC Goiás',
      speaking: 'Estudos de Impactos Urbanos e Engenharia de Tráfego',
      description: `Aluna Regular do Programa de Pós-Graduação da Faculdade de Arquitetura e Urbanismo da UNB, na área de concentração Projeto e Planejamento e Linha de Pesquisa Projeto e Planejamento Urbano e Regional (PP). Mestre pelo Programa de Pós Graduação Projeto e Cidade da Universidade Federal de Goiás (UFG/FAV/2016).  
      Possui graduação em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás (2004) e Pós Graduação em Construção Civil pela Universidade Federal de Goiás (2010). 
      Em 2012 iniciou carreira docente nos cursos de Engenharias, Design e Arquitetura e Urbanismo na Pontifícia Universidade Católica de Goiás - hoje leciona no ramo de Planejamento Urbano Municipal. Foi professora conteudista do IESB / DF e Professora Mestre da Instituição de 2017 a 2019, coordenou o TFC do curso de Engenharia Civil EAD.    
      Também se dedica, desde 2015, à elaboração de Estudos de Impacto de Trânsito e de Vizinhança, de empreendimentos diversos. Em 2018/2019 atuou como analista de empreendimentos (PGV) no Município de Aparecida de Goiânia, na Secretaria de Mobilidade e Defesa Social, Departamento de Engenharia de Tráfego.   
      Atualmente coordena o Curso de Especialização em Mobilidade Urbana e Infraestrutura (IDS) e os cursos de Engenharia de Tráfego e Impactos de Trânsito (PUC GO) e Estudos de Impacto Urbano e Ambiental (PUC GO).   `,
      subjectResume: `O que são os Estudos de Impactos – Ambiental (EIA), de Vizinhança (EIV) e de Trânsito (EIT), a importância dos conhecimentos específicos, atuação profissional, mercado de trabalho.`,
      img: '/assets/img/speakers/evelyncristine.png',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '19:00-20:30',
        place: 'Presencial: Auditório 3'
      }
    },
  
    {
      name: 'Dr. Bruno de Andrade Martins',
      institution: 'IFGoiano - Campus de Hidrolândia',
      speaking: 'Sistema Agroflorestal Biodiverso no Cerrado: Princípios e Dinâmicas',
      description: `Engenheiro de Alimentos (PUC-GO), Mestre em Ecologia e Produção Sustentável (PUC-GO) e Doutor em Tecnologia de Alimentos (UNICAMP).`,
      subjectResume: `Os SAFs são sistemas agroflorestais biodiversos e possuem alta capacidade para melhorar o meio ambiente. São formados por plantios de diversas/diferentes espécies vegetais na mesma área e, ao mesmo tempo (consórcios). Nesses sistemas incluem-se árvores e arbustos nativos ou exóticos e culturas agrícolas de diferentes ciclos. 
      Um dos importantes serviços ambientais que esses sistemas proporcionam é a melhoria do microclima. Ou seja, tanto a temperatura do ar como a do solo ficam mais estáveis, mais agradáveis aos agricultores(as) e a todas as espécies vegetais cultivadas, bem como aos organismos nativos que vivem nos SAFs, os quais ajudam a melhorar a qualidade do solo e o equilíbrio biológico.
      Outro serviço ambiental destacável é a melhoria do ciclo da água, pois facilita a sua infiltração no solo, alimentando o lençol freático e, consequentemente, fortalecendo as nascentes e os mananciais superficiais de água.
      Vários estudos também mostram o aumento da fertilidade, estrutura e da vida do solo, melhorando a sua qualidade, reduzindo e até dispensando o uso de fertilizantes.
      Com o aumento do equilíbrio biológico nesses sistemas, ocorre baixo ataque de pragas e doenças nos cultivos agrícolas, tornando-se desnecessária a utilização de defensivos e, consequentemente, facilitando a viabilização da produção orgânica.`,
      img: '/assets/img/speakers/brunoandrade.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '10:00-11:30',
        place: 'Presencial: Auditório 2'
      }
    },
  
    {
      name: 'Rafael Gonçalves ',
      institution: 'Butchart Gardens ',
      speaking: 'Como trabalhar no lugar mais bonito do mundo',
      description: `Engenheiro Agrônomo.`,
      subjectResume: `Butchart Gardens`,
      img: '/assets/img/speakers/rafael.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '19:00-20:30',
        place: 'Online'
      }
    },
  
    {
      name: 'Dr. Leônidas Albano e Dra. Maria José Pereira Dantas',
      institution: 'PUC Goiás',
      speaking: 'LION XPRO: DO BIM AO BEM INTELIGÊNCIA ARTIFICIAL APLICADA AO DESENVOLVIMENTO DE PROJETOS DE EDIFÍCIOS SUSTENTÁVEIS',
      description: `Leônidas Albano 
      Arquiteto e Urbanista. Doutor pela ETSA Barcelona, Universitat Politècnica de Catalunya, com dupla titulação pela UnB, obtido com a menção máxima “Excelente Cum Laude”, com a tese intitulada “Ambiente y Crítica”, perpassando temas relacionados a projeto, conforto ambiental, eficiência energética e sustentabilidade. Mestre em Integração de Energias Renováveis na Arquitetura pela Fundació Politècnica de Catalunya. Atualmente, dirige a startup Lion xPRO e o Instituto de Arquitetura e Conforto. É Membro de Comissões de Estudos na ABNT e professor e pesquisador na PUC Goiás. Colaborou em diferentes escritórios e empresas do Brasil e da Espanha, com trabalhos em diferentes países da Europa, África Mediterrânea e América Latina. Foi Coordenador de Extensão (2016-2018) e Coordenador da Pós-Graduação Lato Sensu da Universidade (2019-2021); Conselheiro titular do Conselho de Arquitetura e Urbanismo, por duas gestões (2012-2014 e 2015-2017); e Membro da Câmara da Indústria da Construção (FIEG).
      Maria José Pereira Dantas
      Matemática pela Universidade Católica de Goiás (1988), Especialista em Estatística pela PUC-MG (1992), Mestre em Engenharia Elétrica e da Computação, pela Universidade Federal de Goiás (2000), Dra. em Engenharia Elétrica pela Universidade de Brasília (2008), com a tese intitulada “Metodologia de Síntese de Filtros de Micro-ondas de Topologias Arbitrárias utilizando Algoritmo Evolucionário Híbrido (Memético) Associado a Conhecimento Especialista”. Atualmente é Professora e pesquisadora da Escola Politécnica e de Artes, da Pontifícia Universidade Católica de Goiás (PUC GO), atuando na graduação nos cursos de Computação e Engenharias; e na pós-graduação, no Mestrado em Engenharia de Produção e Sistemas. Coordena o Laboratório de Estatística e Modelagem Matemática. Atua nas Linhas de Pesquisa de Probabilidade e Estatística e Modelagem e Simulação de Sistemas. Tem experiência nas Áreas de Estatística Aplicada, Engenharia Elétrica e Ciência da Computação; com ênfase em Predição, Simulação e Otimização. Orienta alunos de iniciação científica e projetos finais de curso em otimização e predição, e alunos de mestrado, em modelagem e simulação de sistemas, desenvolvendo modelagens matemáticas e soluções de inteligência computacional, para resolver problemas de otimização combinatória e problemas não lineares.`,
      subjectResume: `Discussões com o time da startup Lion xPRO a respeito das possibilidades atuais de inovação tecnológica, a partir da aplicação de inteligência artificial a ferramentas de avaliação ambiental e energética integradas ao desenvolvimento de projetos de edifícios, contribuindo com processos evolutivos de metodologias BIM (Building Information Modeling) a conceitos BEM (Building Energy Model).`,
      img: '/assets/img/speakers/leonidasalbano.png',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '07:15-08:45',
        place: 'Online'
      }
    },
  
    {
      name: 'Deusa Maria Rodrigues Boaventura e Sandra Catharinne Pantaleão Resende ',
      institution: 'PUC Goiás',
      speaking: 'PESQUISA E PÓS-GRADUAÇÃO NA ARQUITETURA, NO URBANISMO E NO DESIGN',
      description: `Deusa Maria R. Boaventura, possui graduação em Arquitetura e Urbanismo pela Universidade Católica de Goiás (1986), especialização em Educação do Ensino Superior pela PUC-GO, especialização em História Cultural, pela Universidade Federal de Goiás; mestrado em Arquitetura e Urbanismo pela Escola de Engenharia de São Carlos- USP (2001) e doutorado em Arquitetura e urbanismo pela Universidade de São Paulo (2007). Atualmente é professora adjunto da Pontifícia Universidade Católica de Goiás (PUC- Go), onde trabalha na graduação e no Programa de Pós-graduação em História. Atua também, como docente, na Universidade Estadual de Goiás (UEG). Tem experiência na área de Arquitetura e Urbanismo, com ênfase em História da Arquitetura e Urbanismo, atuando principalmente nos seguintes temas: história das cidades coloniais e moderna. 
      Sandra C. Pantaleão Resende tem Doutorado em Arquitetura e Urbanismo pela Universidade de Brasília (2016). Mestre em Geografia - Dinâmica Sócio-Ambiental, pela UEL (2010). Graduada em Arquitetura e Urbanismo pela PUC Goiás (2006) e em Artes Visuais - habilitação Design Gráfico pela UFG (2000).  Líder do Grupo de Pesquisa Cidade, Morfologia, Paisagem e Morfologia (CIMPARQ - CNPQ/PUC Goiás). Professora do curso de Arquitetura e Urbanismo UEG e PUC Goiás e dos Mestrados de História e Desenvolvimento e Planejamento Territorial - PUc Goiás. Desenvolve pesquisas sobre historiografia urbana e dinâmicas contemporâneas, relacionadas às transformações da paisagem urbana, com os seguintes temas: expansão urbana, ordenamento territorial, metrópoles, aglomerados urbanos e cidades-região.`,
      subjectResume: `Discussões a respeito da realização de projeto de pesquisa e de cursos de pós-graduação ligados aos cursos da Escola Politécnica e de Artes.`,
      img: '/assets/img/speakers/deusamaria.png',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '19:00 - 20:30',
        place: 'Presencial: Auditório 2'
      }
    },
  
    {
      name: 'Santiago Meireles Rocha e Luciana Casaletti',
      institution: 'PUC Goiás',
      speaking: 'Desafio Produtivo',
      description: `Santiago Meireles Rocha: Mestre em Engenharia de Produção e Sistemas na PUC-GO (2017), MBA em Gerenciamento de Projetos - FGV (2011), Especialista em Engenharia de Software - Unicamp(2001). Graduação em Ciência da Computação - Faculdades Objetivo (1999). Professor na Pontifícia Universidade Católica de Goiás - PUC GO desde 2012, efetivo desde 2014, lecionando as disciplinas Sistemas de Informação Gerencial e Apoio à Decisão, Gerência de Projetos, Linguagem de Programação, Estágio Supervisionado, Integração e Avaliação de Sistemas e Professor orientador de trabalhos de conclusão de curso para os cursos de Engenharia de Produção, Engenharia Elétrica e Engenharia de Controle e Automação. Coordenador dos programas de Monitoria e Estágio Curricular Supervisionado da Escola de Engenharia da PUC-GO. Professor convidado dos programas de MBA em Operações Logísticas, Gestão Estratégica de Negócios e Gestão Comercial do Centro Universitário Alves Faria - UNIALFA, desde 2014. Vasta experiência em Tecnologia da Informação com ênfase em Gerenciamento de Projetos, Planejamento Estratégico e Governança de TI, Sistemas de Informação, Banco de Dados e Lógica e Linguagens de Programação.`,
      subjectResume: `Será proposto um desafio para equipes, onde cada uma será responsável por analisar uma das empresas indicadas e defender sua aquisição por parte dos investidores.`,
      img: '/assets/img/speakers/santiagomeireles.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '09:00-12:15',
        place: 'Presencial: Sala 211, bloco F, área III'
      }
    },
  
    {
      name: 'Lucia Bertazzo',
      institution: 'Lisboa, Portugal',
      speaking: 'Experimentações Editoriais',
      description: `Doutoranda em Museologia, com bolsa da Cátedra Unesco na Universidade Lusófona, possui graduação em Design - PUC-Goiás e mestrado em Cultura Visual pela UFG. 
      Trabalhou com produção no ateliê do artista Siron Franco entre 2005 e 2010. 
      No Rio de Janeiro inaugurou UQ! Editions com Leonel Kaz e começou a editar livros-objetos de importantes artistas e escritores brasileiros, entre eles: 
      - A revelação do avesso, de Ferreira Gullar
      - galáxias, de Antonio Dias e Haroldo de Campos
      - Galpão Gaveta, de Paulo Climachauska
      - Sem pé nem cabeça, de Roberto Magalhães
      - Outra natureza, de Frans Krajcberg
      - Série Envolvimento, de Wanda Pimentel
      - Minhas impressões, de Luiz Zerbini
      - Cântico Negro, de Pedro Cabrita Reis
      - Gramática do Instante e do Infinito, Alex Flemming e José Eduardo Agualusa
      - As esferas da percepção, de Leo Battistelli
      - 4CM, de Daniel Mattar.`,
      subjectResume: `A palestra da egressa do curso de Design da PUC Goiás, Lucia Bertazzo, vai abordar sua trajetória com experimentações gráficas que busca a melhor forma de unir artes plásticas e literatura. Seu trabalho é transformar livros em verdadeiras obras de arte com uma série de edições que contam com uma grande pesquisa de materiais e a colaboração de dezenas de tipógrafos, impressores de gravuras ou serigrafias, marceneiros, artífices em acrílico ou aço, fabricantes de papéis artesanais, moldureiros...e importantes artesãos.`,
      img: '/assets/img/speakers/luciabertazzo.png',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '10:00-11:30',
        place: 'Online: YouTube',
        link: 'https://www.youtube.com/watch?v=z-jTl09YYlI '
      }
    },
  
    {
      name: 'Representante da Pormade Portas',
      institution: 'Pormade Portas',
      speaking: 'Projeto Pormade Móvel',
      description: `Desde 1939 a Pormade trabalha para manter a mais alta qualidade de suas portas. A empresa tem um papel marcante na comunidade e na preservação ecológica. Com grandes áreas de florestas plantadas e um parque industrial completo, com 106.000 m² construídos, a Pormade controla a produção das portas desde o seu corte.
      Toda essa estrutura permite que a empresa tenha um dos melhores padrões de qualidade da América do Sul, com certificação ABNT atendendo a NBR 15930 Portas de Madeiras para Edificações, assegurando a excelência da produção, processo de venda e documentação da fábrica. E, além disso, nosso produto é fabricado com madeira reflorestada. Plantando a ideia da preservação e fazendo o manejo ambiental correto, mantemos a natureza a nosso favor, protegemos as próximas gerações e deixamos o mundo mais vivo.`,
      subjectResume: `Independente de onde você estiver, a Pormade vai até você! O projeto do Pormade Móvel tem como objetivo divulgar os produtos e serviços da empresa além das barreiras geográficas. O veículo passa por eventos de inúmeras cidades para que a comunidade local possa conhecer de perto o que a Pormade oferece ao mercado.
      O primeiro Showroom Móvel da Pormade estreou na “Feicon Batimat em 2019, depois dos comentários positivos sobre a novidade, a frota cresceu e os veículos passaram por vários eventos importantes e tradicionais de diferentes cidades, como Design Fair, Expoingá, Kiwi Fest, Feicon, High Design, Equipotel, ConstruSul, lojas de materiais de construção, entre outros.
      Ele apresenta em sua carroceria os modelos de portas da Pormade, as estampas dos papéis de parede, piso vinilico, rodapés e fechaduras. Além disso, mesas e cadeiras ficam dispostas próximas aos veículos para que os visitantes conversem com os especificadores e analisem os catálogos.
      A arquitetura dos veículos do projeto conta ainda com uma televisão, na qual vídeos sobre a cultura Pormade são exibidos durante as participações nas feiras.
      O Pormade Móvel participa de vários eventos, feiras e faz visitas aos seus parceiros como lojas, arquitetos, engenheiros e instaladores.`,
      img: '/assets/img/speakers/pormade-portas.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '09:00-10:30',
        place: 'Presencial: Auditório 1'
      }
    },
  
    {
      name: 'João Paulo de Morais Alves',
      institution: 'PUC Goiás',
      speaking: 'Ai.rtista, uma imersão na construção da imagem digital através do Midjourney e suas barreiras no mercado da arte',
      description: `Possui graduação em Design pela Pontifícia Universidade Católica de Goiás(2005) e especialização em Publicidade e Audiovisual pela Universidade Estadual de Goiás(2008). Atualmente é Professor Auxiliar da Pontifícia Universidade Católica de Goiás. Tem experiência na área de Artes, com ênfase em DESIGN GRÁFICO.`,
      subjectResume: `A palestra "Ai.rtista: uma imersão na construção da imagem digital através do Midjourney e suas barreiras no mercado da arte" aborda o desafio dos artistas em construir uma imagem digital coerente e atraente, que possa ajudá-los a se destacar no mercado da arte. O palestrante apresenta o conceito de Midjourney, que é uma ferramenta que ajuda os artistas a desenvolverem sua marca pessoal e construírem uma presença online consistente e eficaz. No entanto, o palestrante também aborda as barreiras que os artistas enfrentam nesse processo, como a falta de conhecimento técnico em marketing digital e a dificuldade em conciliar a produção artística com a gestão da imagem digital. A palestra busca oferecer insights e dicas práticas para que os artistas possam superar essas barreiras e construir uma imagem digital sólida e impactante.`,
      img: '/assets/img/speakers/joaopaulo.png',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '08:00-09:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NGMxZDYzYTMtZWVhZS00ODFmLThhMjMtMjI4YmY2MmFhMDhi%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
      }
    },
  
    {
      name: 'Frederico Mael e Marcos Costa de Freitas',
      institution: 'PUC Goiás',
      speaking: 'CRÔNICAS DO IGPA',
      description: `Marcos Costa, Doutorando do Programa de Pós-graduação em Arte e Cultura Visual PPGACV UFG, na linha de pesquisa de Poéticas Artísticas e Processos de Criação. Mestre em História pela PUC-GO na área de concentração de Cultura e Poder; Bacharel em Artes Visuais, habilitado para Comunicação Visual pela Universidade Federal de Goiás. Professor no ensino superior de design há 24 anos. Atuou como coordenador por 13 anos, participou da elaboração de Planos de Desenvolvimento Institucional e Projetos Pedagógicos de cursos diversos. Atuou como consultor do MEC/INEP na Comissão Assessora do Exame Nacional de Desempenho dos Estudantes dos Cursos Superiores de Tecnologia em Design Gráfico
      Federico Mael, Advogado e Historiador. É bacharel em Direito, especialista em Direito Civil e Processo Civil, licenciado e mestre em História pela Pontifícia Universidade Católica de Goiás. No mestrado, foi bolsista pesquisador da Fundação de Amparo à Pesquisa do Estado de Goiás (FAPEG) e na licenciatura foi bolsista de iniciação científica pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPQ). Atualmente advoga na área cível e trabalha no Instituto Goiano de Pré-história e Antropologia do IGPA/PUC Goiás.`,
      subjectResume: `O IGPA possui um acervo muito vasto, para cada peça há uma história, às vezes uma aventura perigosa, às vezes uma história engraçada. Assim, parte da "vida" dos artefatos está nessas histórias que expandem os seus sentidos. Nessa proposta vamos valorizar as crônicas e expor algumas peças do acervo. 
      Faremos uma apresentação breve de alguns cortes de vídeos que retratam momentos de produção de registros do acervo. Os relatos das crônicas do trabalho de campo serão trabalhados ao longo da projeção.`,
      img: '/assets/img/speakers/user-vector-man.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '10:00-11:30',
        place: 'Presencial: Auditório 1'
      }
    },
  
    {
      name: 'José Alecrim e Marcos Costa de Freitas',
      institution: 'Ciranda da Arte - Governo de Goiás e PUC Goiás',
      speaking: 'A IMAGEM DOS POVOS ORIGINÁRIOS BRASILEIROS ',
      description: `José Alecrim, artista indígena e arte educador do Centro de Estudo e Pesquisa Ciranda da Arte da Secretaria de Estado da Educação de Goiás (Seduc).
      Marcos Costa, Doutorando do Programa de Pós-graduação em Arte e Cultura Visual PPGACV UFG, na linha de pesquisa de Poéticas Artísticas e Processos de Criação. Mestre em História pela PUC-GO na área de concentração de Cultura e Poder; Bacharel em Artes Visuais, habilitado para Comunicação Visual pela Universidade Federal de Goiás. Professor no ensino superior de design há 24 anos. Atuou como coordenador por 13 anos, participou da elaboração de Planos de Desenvolvimento Institucional e Projetos Pedagógicos de cursos diversos. Atuou como consultor do MEC/INEP na Comissão Assessora do Exame Nacional de Desempenho dos Estudantes dos Cursos Superiores de Tecnologia em Design Gráfico.`,
      subjectResume: `Roda de conversa sobre a representação dos povos originários brasileiros. Propõe-se um passeio rápido ao longo da história, cobrindo momentos chave do Brasil colônia até a atualidade. A representação iconográfica, arquétipos e os estereótipos produzidos dos povos originários. O tema será apresentado por duas pessoas na condição de coordenadores da roda de conversa.`,
      img: '/assets/img/speakers/josealecrim.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '08:00-09:30',
        place: 'Presencial: Auditório 3'
      }
    },
  
    {
      name: 'Thiago da Mata Santos',
      institution: 'Oficina Damata',
      speaking: 'Oficina Damata - Design e marcenaria tradicional',
      description: `Prazer, meu nome é Thiago Damata!
      A Oficina Damata é uma marcenaria com foco em trabalhos em madeira, não uma Indústria. Aqui as peças são produzidas a partir de técnicas de marcenaria tradicional.
      Um hobby do meu pai (que produzia peças no sítio da nossa família), um avô materno marceneiro (que infelizmente se foi quando eu era criança, mas de onde trago o nome Da Mata com muito orgulho) e o amor por uma matéria prima única, renovável, com corpo, alma e coração, me trouxeram até aqui. 
      Minha produção, sob encomenda ou não, é pensada em acompanhar seus donos por toda vida e por isso o uso de encaixes, no lugar de pregos ou parafusos. Por falar em encaixes, mora aí minha grande paixão ... O móvel com encaixes tem a beleza e durabilidade que acredito que a madeira mereça.`,
      subjectResume: `A Oficina Damata é uma marcenaria com foco em trabalhos em madeira, não uma Indústria. Aqui as peças são produzidas a partir de técnicas de marcenaria tradicional. Penso em peças que tragam conexão! Desejo que a textura, a cor, o cheiro, de cada cadeira, banco ou mesa, que você se sentará para sua refeição ou trabalho, te levem a vivências e lembranças.`,
      img: '/assets/img/speakers/thiagodaMata.png',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '10:00-11:30',
        place: 'Presencial: Auditório 3'
      }
    },
  
    {
      name: 'Aguinaldo Aragon Fernandes',
      institution: 'Consultor independente',
      speaking: 'Transformação Digital e Tendências',
      description: `PhD em Engenharia pela Poli/USP. Autor de 9 livros sobre gestão e governança de tecnologia. Atualmente desenvolve projetos na área de Governança e Gestão de Dados, Governança de Cloud e implementação de Cidades Inteligentes. Atua no mercado a mais de 40 anos tendo observado as mudanças ocorridas nas empresas nas ultimas décadas. Como consultor já atuou em mais de 130 empresas, pública e privadas. Participa de grupos de pesquisa em indústria 4.0 e em governança da inteligência artificial. É professor convidado para bancas de mestrado e doutorado na FGV, USP, Uninove, Unip, UNIMEP.`,
      subjectResume: `O Que é a Transformação Digital. As Novas Tecnologias e Tendências. Fazendo o Mapa da Transformação Digital. Avaliando a Maturidade da Transformação Digital. O Roadmap de Implementação. Transformação Digital no Poder Público.`,
      img: '/assets/img/speakers/aguinaldoaragonfernandes.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '10:00-11:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDZmYWQzODItZTY4NS00ZWQxLWIwNjktOTgwMTAyNjE0YTky%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
      }
    },
    {
      name: 'Weber Martins',
      institution: 'PUC Goiás',
      speaking: 'Inteligências Artificiais Generativas: impactos e oportunidades',
      description: `Possui graduação em Engenharia Elétrica (primeiro colocado no vestibular e premiado como melhor aluno na formatura) pela Universidade Federal de Goiás (1985), mestrado em Engenharia Elétrica (dissertação em Redes Neurais Artificiais) pela Universidade Federal de Uberlândia (1989) e DPhil em Electronics (tese em Redes Neurais Artificiais e Algoritmos Genéticos) pela University of York, Inglaterra, UK (1994). Atualmente é professor titular da Universidade Católica de Goiás (Departamento de Psicologia, PSI/UCG) e da Universidade Federal de Goiás (Escola de Engenharia Elétrica e de Computação, EEEC/UFG), lecionando e orientando na graduação e pós-graduação. Organizou, em 1997, o Simpósio Brasileiro de Redes Neurais (IV SBRN) em Goiânia e participa ativamente como membro do Comitê de Programa de diversos congressos nacionais e internacionais na área. Possui experiência em Computação, particularmente, em Inteligência Artificial (Redes Neurais Artificiais, Algoritmos Genéticos e Lógica Nebulosa), com ênfase em sistemas tutores inteligentes, aplicação tecnológica de sistemas inteligentes, catálogos eletrônicos inteligentes, automação de experimentos psicológicos, metodologia cientifica, educação a distância, mapas auto-organizáveis e aprendizagem. Fundador e Coordenador do Grupo de Pesquisa em Sistemas Inteligentes (PIRENEUS/UFG) desde 1994, já orientou mais de 20 dissertações concluídas. Em termos administrativos, foi Vice-Diretor, Diretor e (Idealizador e) Primeiro Coordenador do Curso de Engenharia de Computação na UFG. Na área da Psicologia, tem impulsionado o Laboratório de Análise Experimental do Comportamento (LAEC/UCG) a ocupar posição de destaque nacional com a implementação de softwares para experimentação psicológica desde 1996, além de prover apoio em Estatística e Metodologia Científica. Como consultor, trabalha em automação de processos na área de Agronegócios, desenvolvendo, inclusive, soluções com componentes de Inteligência Artificial.`,
      subjectResume: `Explorar-se-á a evolução, implicações sociais e éticas, além das oportunidades e desafios das Inteligências Artificiais Generativas, apresentando reflexões importantes para a área de Engenharia de Computação.`,
      img: '/assets/img/speakers/webermartins.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '10:00-11:30',
        place: 'Presencial: Auditório 3'
      }
    },
  
    {
      name: 'Dr. Alexandre Delbem.',
      institution: 'ICMC USP São Carlos.',
      speaking: 'Modelos confiáveis gerados automaticamente por aprendizado de múltiplas bases de dados heterogêneas: exemplos de aplicações em Insegurança Alimentar, Risco de Crédito e Projeto de Injetores',
      description: `Professor Titular do Departamento de Sistemas de Computação do Instituto de Ciências Matemáticas e de Computação na Universidade de São Paulo (ICMC-USP) e Bolsista Produtividade 1C do CNPq. Foi chefe do Departamento de 2014 a 2018. Investiga soluções computacionais para análise ou projeto envolvendo problemas do mundo real que podem ser modelados como sistemas ciber-físicos. Destacam-se aplicações multidisciplinares em áreas como: restabelecimento de energia após apagões em redes de energia de larga-escala, dinâmica de populações e projetos integrados de redes de suprimento ou atendimento aplicadas ao agronegócio, à saúde, ao meio ambiente e à assistência social. Desenvolvem-se software and hardware para lidar de forma computacionalmente eficiente com alguns desafios inerentes aos sistemas complexos: larga-escala (complexidade computacional e algoritmos de estimação de distribuição), multidimensionalidade (construção automática de modelos multivariados para diferentes tipos de dados), tomada de decisão e otimização utilizando múltiplos critérios (algoritmos evolutivos multiobjetivos) e respostas em tempo-real (paralelização usando FPGAs).`,
      subjectResume: `Modelos confiáveis gerados automaticamente por aprendizado de múltiplas bases de dados heterogêneas: exemplos de aplicações em Insegurança Alimentar, Risco de Crédito e Projeto de Injetores.`,
      img: '/assets/img/speakers/prof.dr.alexandredelbem.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '19:00-20:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTQ4ZDUyYTYtMjI2MC00NDI0LWE0ZTQtY2M5NzA1M2U2ZjNj%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
      }
    },
  
    {
      name: 'Raphael de Aquino Gomes',
      institution: 'Instituto Federal de Educação, Ciência e Tecnologia de Goiás (IFG)',
      speaking: 'Cidades Inteligentes e Sustentáveis: Ferramentas e Desafios',
      description: `Doutor em Ciência da Computação pela Universidade Federal de Goiás com período sanduíche no Instituto Nacional de Pesquisa em Informática e Automação (INRIA), França. Atualmente é professor efetivo do Instituto Federal de Educação, Ciência e Tecnologia de Goiás (IFG) e coordena os cursos de Mestrado Profissional em Tecnologia, Gestão e Sustentabilidade e Especialização em Inteligência Artificial Aplicada. Tem vasta experiência na área de Sistemas Distribuídos, atuando principalmente nos seguintes temas: Cidades Inteligentes, Computação em Nuvem, Internet das Coisas, Sistemas Adaptativos, Inteligência Artificial e Energias Renováveis.`,
      subjectResume: `O crescimento populacional desordenado, a poluição, a mudança climática e a falta de infraestrutura adequada têm impactos significativos no meio ambiente e na qualidade de vida em centros urbanos. Diante desse cenário, o conceito de cidades inteligentes e sustentáveis surge como uma abordagem promissora para resolver os problemas destes centros, utilizando tecnologias inovadoras, planejamento inteligente e uma visão integrada para melhorar a qualidade de vida dos moradores e proteger o meio ambiente. Nesta perspectiva, esta palestra busca apresentar as ferramentas e desafios envolvidos no desenvolvimento de cidades inteligentes e sustentáveis, além de discutir o impacto dessa transformação na vida das pessoas e oportunidades a serem exploradas.`,
      img: '/assets/img/speakers/raphaeldeaquinogomes.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '19:00-20:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzNkNzk4YzgtY2VhOC00M2M0LWEyZDEtMWY0YzZlNjcwYmMy%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
      }
    },
  
    {
      name: 'Camila Christina Moreira.',
      institution: 'Accenture Brasil.',
      speaking: 'Como soft skills podem lhe garantir uma vaga ou salvar o seu emprego',
      description: `Camila Christina Moreira é goiana, formada em ciência da computação pela PUC Goiás e possui MBA em Design thinking e Gestão de Pessoas, analista senior na empresa Accenture Brasil. Passou por cursos de inovação e liderança, aplicando o desenvolvimento de pessoas na área de tecnologia.`,
      subjectResume: `Soft skills é um tema bastante popular na gestão de carreira, mas a aplicação desse tema na realidade não considerado algo fácil. Será discutido a forma de compreender essa jornada de aprendizado constante e situações que podem nos trazer uma oportunidade ou fechar uma porta.`,
      img: '/assets/img/speakers/camila-christina-moreira.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '20:30-22:00',
        place: 'Presencial: Auditório 1'
     }
    },
  
    {
      name: 'DANILO GREGÓRIO.',
      institution: 'Marcca engenharia',
      speaking: 'Como se comportar em uma entrevista de estágio',
      description: `Formado em Gestão de RH desde 2015 pela Universidade Estácio. Trabalho na área de RH a mais de 12 anos, com formações estar curriculares em plataformas de Avaliação Comportamental e R&S.`,
      subjectResume: `O palestrante é responsável pelo departamento Gente e Cultura da Marcca Engenharia e faz a seleção de estagiários para os diversos departamentos da empresa, ele trará dicas de como se comportar no momento de uma entrevista de estágio, como fazer seu currículo ficar mais atrativo para o entrevistador, e quais plataformas podem ajudar a alcançar seu estágio.`,
      img: '/assets/img/speakers/danilo-gregorio.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '18:00-19:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTIxYzQwZTAtNmJiYS00ZmQxLWI5NTktNDQzODhlMjYzYTk0%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
     }
    },
  
    {
      name: 'Miguel Moreira',
      institution: '',
      speaking: 'Programa de Licenciatura em Gestão do Transporte Aéreo da Atlantica, Portugal',
      description: ``,
      subjectResume: `O palestrante apresentará o curso de Licenciatura em Gestão do Transporte Aéreo da Universidade Atlantica, Portugal com vistas ao inicio de um intercambio internacional entre esta universidade e a PUC-Goiás.`,
      img: '/assets/img/speakers/user-vector-man.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '09:00-10:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmY3NGI0YjYtMzMyNS00MmE1LTkzY2QtZjk5OGI2NjZlZDMw%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
     }
    },
  
    {
      name: 'Gabriella Meireles',
      institution: '',
      speaking: 'Setor Aeroagrícola Brasileiro',
      description: ``,
      subjectResume: `Apresentação do setor aeroagricola do Brasil.`,
      img: '/assets/img/speakers/user-vector-woman.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '09:00-10:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWM0NGViNDItMTFlMi00MGQwLTliZWItNWJhY2ExYmM0MjQ5%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
    }
    },
    {
      name: 'Eliezer Furtado de Carvalho.',
      institution: 'Perito judicial',
      speaking: 'Perícia agronômica e assistência técnica em perícia',
      description: `Engenheiro Agrônomo, perito judicial e assistente técnico com mais de ampla experiência em laudos pericias e pareceres;
  
      – professor de cursos de aperfeiçoamento e pós-graduação em perícias, patrocinados por instituições como CONFEA, CONFAEAB, CREAs, IBAPE, INEAA, associações profissionais;
      – autor dos livros: Perícia agronômica: elementos básicos; Perícia agronômica e ambiental: conduta do perito, lados e pareceres, em face da legislação e co-autor do livro Perícia ambiental e assistência técnica: instrumento de defesa dos interesses individuais e coletivos.`,
      subjectResume: `A atividade de perícia relacionada a imóveis rurais e/ou atividades e produtos rurais, na sua quase totalidade, são da competência exclusiva do engenheiro agrônomo. Trata-se de atividade que possibilita melhores níveis de remuneração, quando comparada com outras áreas de atuação dos profissionais de agronomia.`,
      img: '/assets/img/speakers/eliezer-furtado-de-carvalho.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '10:00-11:30',
        place: 'Presencial: Auditório Marisa Roriz (Área III)'
    }
    },
  
    {
      name: 'João Paulo Martins.',
      institution: 'Sorcero',
      speaking: 'De Ciência de Dados a Engenharia de Inteligência Artificial: um achismo de como será o futuro',
      description: `Cientista de Dados e Engenheiro de Machine Learning trabalhando com projetos de ponta envolvendo Inteligência Artificial.`,
      subjectResume: `Como as profissões de Cientista de Dados e Engenheiro de Inteligência Artificial estão moldando o futuro não só da tecnologia, mas também de todas as outras profissões.`,
      img: '/assets/img/speakers/joao-paulo-martins.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '19:00-20:30',
        place: 'Presencial: Auditório 3'
    }
    },
  
    {
      name: 'Eugenio José Moura Neto',
      institution: 'Aluno da PUC Goiás.',
      speaking: 'Introdução a Python',
      description: `Aluno do curso de engenharia de computação.`,
      subjectResume: `Iniciação à linguagem de programação Python. Vagas limitadas a 20 alunos.`,
      img: '/assets/img/slider/python.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '14:00-16:00',
        place: 'Presencial: Laboratório 101, bloco C, área II'
    }
    },
  
    {
      name: 'Milton de Assis Ribeiro Neto',
      institution: 'PUC Goiás',
      speaking: 'Introdução ao Git/GitHub',
      description: `Engenheiro Eletricista com ênfase em Eletrônica
      Engenheiro de Segurança do Trabalho
      Especialista em Engenharia de Potência
      Mestrando em Engenharia de Produção e Sistemas
      Trabalho há 18 anos na área de distribuição de energia`,
      subjectResume: `Como usar o Git/Github? Minicurso presencial, porém com gravação pelo Teams.`,
      img: '/assets/img/speakers/milton-de-assis-ribeiro-neto.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '17:00-19:00',
        place: 'Presencial: Laboratório 101, bloco C, área II'
    }
    },
    
    {
      name: 'Alexandre Ribeiro',
      institution: 'PUC Goiás',
      speaking: 'Maratona de Programação - Primeiro Período',
      description: ``,
      subjectResume: `Competição realizada no sábado, dia 13/05/2023, entre 08:30-12:15.`,
      img: '/assets/img/slider/logo-maratona.jpeg',
      customSize: '100%',
      datentime: {
        date: '13/05',
        time: '08:30-12:15',
        place: 'Presencial: Laboratórios do bloco C (101C a 105C)'
    }
    },
  
    {
      name: 'Marília Rabelo Holanda Camarano',
      institution: 'PUC Goiás',
      speaking: 'Desenvolvendo Habilidades Sociais e de Liderança, por meio da Experiência de Monitoria: Celebrando 50 Anos na PUC Goiás',
      description: `Professora da Unidade Acadêmica de Fonoaudiologia da Pontifícia Universidade Católica de Goiás, nas disciplinas de Audição na Infância e na Adolescência, Audiologia Clínica I e II, Estágios Supervisionados em Audiologia, Otorrinolaringologia Aplicado à Fonoaudiologia e Metodologia do Trabalho Científico. Orienta Trabalho de Conclusão de Curso e Iniciação Científica. Atua na Educação Inclusiva. Atualmente é coordenadora da Coordenação de Estágio, Monitoria, Egressos e Empresa Juniores vinculada a Pró-Reitoria de Graduação da PUC Goiás. Membro do Núcleo Estruturante Docente do curso de Fonoaudiologia. Possui Mestrado (2003) em Ciências de Saúde pela Universidade de Brasília. É especialista (2010) em Saúde da Família pela Universidade Federal de Goiás - UFG. Especialização (1998) em Audiologia Clínica e Ocupacional pela Universidade de Franca/SP. Licenciatura em Português (2010) pela Universidade Estadual do Vale do Acaraú - UEVA. Membro Efetivo do Conselho Editorial da Revista Eletrônica Ciência e Saúde/CEAFI. Atua principalmente na docência, pesquisa e gestão no ensino superior.`,
      subjectResume: `Mesa redonda da Monitoria como processo de desenvolvimento de liderança e soft skills, para a o futuro profissional.`,
      img: '/assets/img/speakers/marília-rabelo-holanda-camarano.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '08:00-09:30',
        place: 'Presencial: Auditório 2'
    }
    },
    {
      name: 'Ivan Lourenço Costa',
      institution: 'Project Management Institute (PMI), Goiás, Go.',
      speaking: 'A carreira do profissional de gestão de projetos - desafios e oportunidades',
      description: `Ampla experiência na área de TI (22 anos) e em consultoria em gestão de projetos e de negócios digitais. Presidente do PMI-Go e Diretor de Projetos do Instituto Goiano de Direito Digital.`,
      subjectResume: `Quer saber quais são os desafios e as oportunidades de uma carreira em gestão de projetos? Então essa palestra é para você! Vamos falar sobre as habilidades necessárias para superar esses desafios, tais como liderança, comunicação, planejamento e resolução de problemas. Vamos abordar o que você precisa saber para se manter competitivo no mercado e oferecer insights valiosos para ajudá-lo a navegar nesse campo tão dinâmico.`,
      img: '/assets/img/speakers/ivan-lourenço-costa.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '08:00-09:30',
        place: 'Presencial: Auditório 3'
    }
    },
  
    {
      name: 'Lhiego Rodrigues de Paula.',
      institution: 'Project Management Institute (PMI), Goiânia, Go.',
      speaking: 'A carreira do profissional de gestão de projetos - desafios e oportunidades',
      description: `Engenheiro Mecânico e membro da Diretoria do Project Management Institute (PMI), Goiânia, Go.`,
      subjectResume: `Quer saber quais são os desafios e as oportunidades de uma carreira em gestão de projetos? Então essa palestra é para você! Vamos falar sobre as habilidades necessárias para superar esses desafios, tais como liderança, comunicação, planejamento e resolução de problemas. Vamos abordar o que você precisa saber para se manter competitivo no mercado e oferecer insights valiosos para ajudá-lo a navegar nesse campo tão dinâmico.`,
      img: '/assets/img/speakers/lhiego-rodrigues-de-paula.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '19:00-20:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_OGJhODNjYTAtNGM5Ni00Y2M5LWJlYWQtY2RjMWI2YzMzNmU1%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
    }
    },
  
    {
      name: 'Marta Pereira da Luz, Rosana Brandão e Benjamin Jorge',
      institution: 'PUC Goiás.',
      speaking: 'Enade engenharia civil 2023',
      description: `Marta Pereira da Luz: Pós doutorado em geotecnia e construções sustentáveis. Pesquisadora com bolsa produtividade CNPq. Editora associada da revista soils and rocks. Diretora de eventos técnicos da ABMS. Professora adjunta PUC Goiás; 
      ROSANA Melo de Lucas Brandão: Possui graduação em Engenharia pela Pontifícia Universidade Católica de Goiás (1989) e mestrado em Engenharia Civil pela Universidade Federal de Goiás (2007). Atualmente é coordenadora de planejamento e qualidade do Conselho Regional de Engenharia, Arquitetura e Agronomia e professor titular da Pontifícia Universidade Católica de Goiás. Tem experiência na área de Engenharia Civil, com ênfase em Estruturas de Concreto, atuando principalmente nos seguintes temas: levantamento patológico, edificações, patologia, qualidade e SGQ.
      Benjamim Jorge Rodrigues dos Santos: Possui graduação em Engenharia Civil pela Universidade Federal de Goiás (1981), Licenciatura Plena pelo Centro Federal de Educação Tecnológica de Minas Gerais (1989), mestrado em Engenharia de Transportes pela Escola de Engenharia de São Carlos da Universidade de São Paulo (1992) e doutorado em Engenharia de Transportes pela Escola Politécnica da Universidade de São Paulo (1998). Atualmente é professor titular da Pontifícia Universidade Católica de Goiás e professor de ensino superior da Universidade Estadual de Goiás. Tem experiência na área de Engenharia de Transportes, com ênfase em Infra-estrutura de Transportes, atuando principalmente nos seguintes temas: projeto de rodovias, hidrovias e aeroportos, transporte urbano, engenharia de tráfego e segurança no transito.`,
      subjectResume: `Informes gerais sobre Enade 2023 para o curso de Engenharia civil.`,
      img: '/assets/img/speakers/rosana-beijamin-marta.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '19:00-20:30',
        place: 'Presencial: Auditório 2'
    }
    },
  
    {
      name: 'Gabriel Mendonça de Paiva',
      institution: 'Photon Energia LTDA',
      speaking: 'Energia Solar Fotovoltaica: Histórico, Desafios e Tendências Tecnológicas da Energia Limpa e Renovável',
      description: `Engenheiro Eletricista graduado na Universidade Federal de Goiás (UFG) (2013), Especialista em Projetos de Engenharia Elétrica pelo IPOG (2015), Mestre (2016) e Doutor (2021) em Engenharia Elétrica pela UFG com período sanduíche no Politecnico di Milano.
      É engenheiro eletricista na Companhia Nacional de Abastecimento e sócio da Photon Engenharia, onde desenvolveu aproximadamente 100 projetos e 3 MWp de potência instalada de sistemas fotovoltaicos conectados à rede elétrica em Goiás e DF - Projetos Executivos, Orçamentos, Suprimentos e Gestão de Obras de Mini e Microgeração.`,
      img: '/assets/img/speakers/gabriel-mendonça-de-paiva.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '09:00-10:00',
        place: 'Presencial: Auditório 1 '
    }
    },
  
    {
      name: 'Rener Baptista.',
      institution: 'iNexxus Global (USA).',
      speaking: 'O poder do inglês no Marketing Digital: Uma visão integrada com a Engenharia de Produção',
      description: `CEO na iNexxus Global.
      Informática com ênfase em Gestão de Negócios - Fatec - 2009 - 201
      Engenharia de Produção - UNIP - 2009 - 2014
      CEO - iNexxus Global - 2023
      COO - Learnia - 2023
      CMO - Netshoes Miners - 2017 - 2023
      CMO - OligoFlora - 2013 - 2019
      CEO - iNexxus Brasil - 2013 - 2022
      Analista de Atendimento Senior - SHIFT - 2011 a 2013`,
      subjectResume: `Nesta palestra, exploramos a importância do inglês no marketing digital e como isso está associado à engenharia de produção. Discutimos como o inglês pode ser a chave para desbloquear oportunidades no mercado global e como ele pode ajudar a melhorar a comunicação com clientes e colaboradores estrangeiros. Também falamos sobre a relação entre o inglês e a engenharia de produção, mostrando como a fluência no idioma pode ajudar a entender melhor processos produtivos e gerar insights valiosos. Ao final da palestra, os participantes terão uma compreensão mais profunda da importância do inglês no contexto do marketing digital e da engenharia de produção, e estarão equipados com ferramentas e insights para avançar em suas carreiras.`,
      img: '/assets/img/speakers/rener-baptista.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '19:00-20:30',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWU1Yjk1YzgtNmNiMC00NDRjLThkMTctNDNjOGU0MDdjZDg2%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
    }
    },
  
    {
      name: 'Lorí Crízel',
      institution: 'Instituto Politécnico di Milano (Itália)',
      speaking: 'NEUROARQUITETURA',
      description: `Arquiteto e Urbanista | Presidente da ANFA no Brasil | Membro da ANFA Center for Education Latin America | Professor de Neuroarquitetura no Instituto Politécnico
      di Milano (Itália) e Coordenador dos Programas
      Internacionais do IPOG Brasil | Doutorando em Neuroarquitetura | Mestre em Conforto Ambiental | Especialista em Neurociências e Comportamento Humano | CEO da Plataforma NEURO AI | Mentor do Programa Design Tank Brasil | Membro Fundador do Projeto Neuro in Lab`,
      subjectResume: `DIÁLOGO DIRIGIDO`,
      img: '/assets/img/speakers/lorí-crízel.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '10:30-12:00',
        place: 'Online',
        link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NmMwZDk2YjMtZDljNC00NTZlLTllN2QtMTBkMjA3Njg5ODJk%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
    }
    },
    
    {
      name: 'Rafael Bomaro Ferreira',
      institution: 'AXS Energia – Florianópolis – SC',
      speaking: 'IMPACTO NO LONGO PRAZO DA MOBILIDADE ELÉTRICA NO SISTEMA ELÉTRICO BRASILEIRO',
      description: `Rafael Bomaro Ferreira, Tecnólogo em Sistemas Elétricos, MBA em Petróleo e Energias, Engenheiro Eletricista e Mestre em Engenharia Elétrica pela Universidade Federal de Santa Catarina, tem mais de 10 anos de experiência no mercado varejista e a 5 anos se dedica ao mercado de geração distribuída e mercado livre de energia, com passagem profissional pela Ambev, Natural One, Instituto Federal Fluminense e Grupo Cotesa, atualmente é Head de Gestão e Comercialização de Energia na AXS Energia e Professor de Inovação e Tecnologia na Faculdade SENAI de Santa Catarina.`,
      subjectResume: `Com o aumento das vendas de carros elétricos e híbridos surge a preocupação em relação à infraestrutura elétrica existente, e como faremos para recarregar tantos carros elétricos no futuro, um dos estudos que começou em 2016 pela Nissan e pela Renault foi o chamado "Vehicle-to-grid" (veículo para a rede) ou V2G onde as baterias do carro podem fornecer energia para uma casa ou região por um determinado tempo. A Geração Distribuída-GD tem um papel fundamental na utilização das baterias veiculares para armazenamento de energia (segunda vida útil), porém precisa-se se pensar também em qual será a visão de médio e longo prazo do Setor Elétrico de uma rede de transporte eletrificada.`,
      img: '/assets/img/speakers/rafael-bomaro-ferreira.jpg',
      customSize: '100%',
      datentime: {
        date: '10/05',
        time: '20:30-22:00',
        place: 'Online',
        link:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjQ3OTcwNDMtMTVjYS00YTk3LTg1ZWItMDkwZmMzM2NkNWZh%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d"
    }
    },
  
    {
      name: 'Egio Arruda',
      institution: 'EasyCrédito/FitBank',
      speaking: 'Dados real-time no BigQuery usando CDC',
      description: `Bacharel em Ciência da Computação pela UFG, além de pós-graduado pela FGV e pelo Insper. Possui 15 anos de experiência nas áreas de tecnologia e inovação, sendo atualmente CTO e Co-Founder do EasyCrédito, o maior Hub de Crédito do Brasil, e Head of Data no FitBank, uma das maiores Infratechs do Brasil. Além disso, atua como Google Developer Expert em GCP. É professor convidado nas pós-graduações da PUC Goiás, UniFasam e IPOG.`,
      subjectResume: `Esta palestra é um caso real de como utilizar o BigQuery como Data Warehouse de alto desempenho com ingestão de dados real-time usando CDC (Change Data Capture) para impacto mínimo nos bancos de dados de produção e baixo custo.`,
      img: '/assets/img/speakers/egio-arruda.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '17:00-18:30',
        place: 'Online'
    }
    },
  
    {
      name: 'André Carlos Ponce de Leon Ferreira de Carvalho',
      institution: 'USP - São Carlos',
      speaking: 'IARA: Centro de Pesquisa Aplicada em Inteligência Artificial para Cidades Inteligentes',
      description: `Professor Titular do Instituto de Ciências Matemáticas e de Computação, Universidade de São Paulo (ICMC-USP), campus São Carlos, Bolsista de Produtividade em Pesquisa 1A do CNPq e Vice-Presidente da Sociedade Brasileira de Computação (SBC). É coordenador da rede IARA, Inteligência Artificial Recriando Ambientes. Foi membro do Comitê de Assessoramento de Ciência da Computação do CNPq (CA-CC), de 2018 a 2021 (coordenador de 2019 a 2020). De 2013 a 2017 foi membro do conselho da International Association for Statistical Computing (IASC), do International Institute of Statistics. Possui Bacharelado (1987) e Mestrado em Ciência da Computação (1990) pela Universidade Federal de Pernambuco, e doutorado em Electronic Engineering pela University of Kent (1994). Seus principais interesses de pesquisa são Aprendizado de Máquina, Mineração de Dados e Ciência de Dados, com aplicações em várias áreas. Publicou vários artigos nessas áreas, alguns deles premiados em conferências organizadas por ACM, IEEE and SBC. Escreveu vários livros, entre eles Inteligência Artificial: Uma abordagem de Aprendizado de Máquina, publicado pelo GrupoGen em 2011 e prêmio Jabuti 2012, e A General Introduction to Data Analytics, publicado pela Wiley, em 2018. Foi Professor Associado na University of Guelph, Canada. Foi ainda Professor Visitante na University of Kent e Pesquisador Visitante na University of Kent e no Alan Turing Institute, UK. Avalia projetos para agências de fomento a pesquisa nacionais, CAPES, CNPq, FAPESP, FACEPE, FAPEMIG e Fundação Serrapilheira, e internacionais, NSERC (Canada), The Leverhulme Trust (Reino Unido), EPSRC Reino Unido), GACR (República Checa), CONICYT (Chile), Croatian Science Foundation (Croácia) e MIUR (Itália). É Diretor do ICMC-USP e do Centro de Ciências Matemáticas Aplicadas à Indústria da USP. É ainda Vice-Coordenador do MBA em Ciência de Dados do ICMC-USP. , do Conselho Consultivo da Rede MCTI-EMBRAPII de Inovação em Inteligência Artificial (IA), da Rede Ciência para Educação (CpE), do Comitê Diretivo para América Latina e Caribe da International Network for Government Science Advice (INGSA), do Conselho Universitário da Universidade de São Paulo e do Comitê Científico do Advanced Institute for Artificial Intelligence (AI2), do Strategy and Partnerships Board of the UKRI Centre for Doctoral Training in Accountable, Responsible and Transparent AI (ART-AI), at University of Bath, UK. Membro associado da Artificial Intelligence Institute - Te Ipu o te Mahara da University of Waikato, Nova Zelândia e do Grupo de Governança da Estratégia Brasileira de Inteligência Artificial (EBIA) do Ministério de Ciência, Tecnologia e Inovações, do Conselho Tecnológico da Associação Gestora de Fundo Patrimonial Chronos (?CHRONOS?) e do Comitê de Governança do Indicações Geográficas (IG) São Carlos. Foi membro do Conselho Técnico Científico da Escola de Matemática Aplicada da Fundação Getúlio Vargas (EMAp-FGV) de 2018 a 2020.`,
      subjectResume: `Assim como avanços econômicos e sociais permitem que as pessoas vivam mais e melhor, eles também aumentam a consciência de que estes avanços precisam ocorrer de uma forma mais rápida, sustentável e inclusiva. Isso gera uma crescente demanda por melhor qualidade de vida, tanto em regiões urbanas quanto rurais. Um dos principais caminhos para este aumento passa pela incorporação de novas tecnologias, que permitam, por exemplo, a transformação de cidades em cidades inteligentes. Uma cidade inteligente é uma cidade que melhor atende às necessidades de sua população, sendo, ao mesmo tempo, igualitária, inclusiva e sustentável. Dentre as tecnologias que estão sendo adotadas, merecem destaque aquelas baseadas em inteligência artificial.  Nesta palestra apresentarei o centro nacional de pesquisa em inteligência artificial IARA (Inteligência Artificial Recriando Ambientes), selecionado em chamada nacional para centros brasileiros de pesquisa em Inteligência Artificial Aplicada, da FAPESP, MCTI e CGI.br . Apresentarei ainda as primeiras iniciativas do centro, que funciona como uma rede nacional, representada nas 5 regiões do país. Ao final, falarei brevemente sobre algumas das pesquisas em inteligência artificial aplicada realizadas no ICMC USP.`,
      img: '/assets/img/speakers/andre-carlos-ponce-de-leon-ferreira-de-carvalho.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '17:00-18:30',
        place: 'Online: YouTube'
    }
    },
  
    {
      name: 'Hemmanoel Feitosa e Silva',
      institution: 'Secretaria Municipal de Inovação, Ciência e Tecnologia - SICTEC',
      speaking: 'Cidades Inteligentes',
      description: `Mestre em Engenharia de Produção e Sistemas. MBA, Especialista em Governança de TI pelo Instituto de Pós-Graduação IPOG. Possui graduação em Redes de Computadores pela Universidade Salgado de Oliveira (2002). Atualmente é Secretário Municipal de Inovação, Ciência e Tecnologia do município de Goiânia. Atuou como Analista na Procuradoria-Geral da República. Tem experiência no setor público na área de Educação, com ênfase em Ensino Superior. Tem experiência na área de Tecnologia da Informação, com ênfase em Governança, gestão de projetos de sistemas de informação e infraestrutura. Tem experiência na área de Tecnologia da Informação com ênfase em infraestrutura e segurança da informação. `,
      subjectResume: `Cidades inteligentes, ou smart cities, são aquelas que utilizam tecnologias avançadas para melhorar a qualidade de vida dos seus habitantes, otimizar a gestão dos serviços públicos e promover a sustentabilidade ambiental e econômica. Essas tecnologias incluem sensores, dispositivos de internet das coisas, sistemas de análise de dados, entre outros, que permitem a coleta e o processamento de informações em tempo real, facilitando a tomada de decisões e a otimização dos recursos. `,
      img: '/assets/img/speakers/hemmanoel-feitosa-e-silva.jpg',
      customSize: '100%',
      datentime: {
        date: '08/05',
        time: '09:00-10:30',
        place: 'Presencial: Auditório 1'
    }
    },
  
    {
      name: 'Lavio Ribeiro Fidelis Neto',
      institution: 'Ubisoft Toronto',
      speaking: 'Como a Engenharia Mecatrônica contribuiu para a minha atuação em Animação 3D',
      description: `Sou formado em Engenharia Mecatrônica pela PUC Goiás e em Animação 3D pelo Mohawk College. Trabalhei como animador 3D freelancer no Brasil e no Canadá antes de me juntar à equipe de da Ubisoft Toronto como Gameplay Animator.`,
      subjectResume: `A gestão de tempo e projetos foi fundamental para o desenvolvimento das minhas habilidades em animação 3D e transferir essas habilidades para a criação de animações foi natural. Criei um fluxo de trabalho que envolve o planejamento cuidadoso de cada cena e a definição de prazos realistas, garantindo que o resultado final atenda às expectativas do diretor de animação.`,
      img: '/assets/img/speakers/Lavio.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '18:00-19:00',
        place: 'Online',
        link:'https://teams.microsoft.com/l/meetup-join/19%3ameeting_OGEzZjk2ZWQtMGFmMi00NjU0LWFlZDUtNjhiMjhhN2E1NzIy%40thread.v2/0?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%224d5d6768-2ee9-4adc-ac86-4da09deed785%22%7d'
    }
    },
    */
  
    /*{
      name: 'Jefferson Lins',
      institution: 'Universidade de São Paulo',
      speaking: 'Geossintéticos aplicados a Engenharia Civil.',
      description: `Professor Associado da USP, Depto. de Geotecnia da EESC. Graduado em Engenheiro Civil - UFAL (2004), Mestre em Geotecnia - EESC/USP (2006), Doutor em Eng. Civil (Eng. de Estruturas) - EESC/USP (2011) com período sanduíche na University of Nebraska-Lincoln - EUA (2010). Pós-Doutor em Eng. Civil pela EESC/USP (2013) e pela Universidade do Porto - Portugal (2017). Livre-docente em Geotecnia pelo SGS-EESC-USP (2019). Leciona para os cursos de graduação em Engenharia Civil e Engenharia Ambiental sobre temas relacionados à Mecânica dos solos e Geossintéticos. É professor permanente no Programa de Pós-Graduação em Geotecnia e no Programa de Pós-graduação em Engenharia de Transportes, ambos na EESC/USP. Responsável pelo Laboratório de Geossintéticos da EESC/USP. Coordenador do Curso de Engenharia Civil da EESC/USP desde 2019. Vice-Chefe do Departamento de Geotecnia (SGS) da EESC/USP desde 2021. Coordenador da Comissão de Estudo Especial de Geossintéticos da Associação Brasileira de Normas Técnicas (ABNT) de 2014 a 2020. Parecerista de agências de fomento e de congressos e revistas nacionais e internacionais. Membro de sociedades de cunho científico e tecnológico, cultural e profissional: ABMS, ANPET, IGS e ABRATEC.`,
      subjectResume: `Geossintéticos aplicados a Engenharia Civil.`,
      img: '/assets/img/speakers/jeffersonlins.jpg',
      customSize: '100%',
      datentime: {
        date: '09/05',
        time: '19:00 - 20:30',
        place: 'Online: A definir'
      }
    },*/

    }
  
    private goToSubscription() {
      this.$router.push('/cadastro')
    }
  
    private goToSubmission() {
      this.$router.push('/JCPOLI3/Orientacoes')
    }
  }
  </script>
  
  <style>
  li {
    list-style-type: none !important;
  }
  
  #sobre p {
    font-size: 24px;
  }
  
  #inscricoes span {
    font-size: 18px;
  }
  
  .line {
    margin-top: 42px;
    justify-content: center;
    z-index: 100;
  }
  
  .call p {
    text-transform: uppercase;
  }
  
  .call p {
    font-size: 32px;
    font-weight: bold;
    color: #ddd;
  }
  
  .subcall {
    justify-content: center;
    padding: 0 15px;
  }
  
  .subcall p {
    font-size: 14px;
    color: #ddd;
  }
  
  .button-actions {
    margin-top: 20px;
  }
  
  .subcall > div {
    max-width: 900px !important;
  }
  
  .btn-submission {
    background-color: transparent !important;
    color: #eee !important;
    border: 1px solid #eee;
  }
  
  .line > div {
    max-width: 1150px !important;
  }
  
  .line hr {
    border: 1px solid #4e6083;
  }
  
  .rights-reserved p {
    color: #eee;
    padding: 20px 0 5px;
    justify-content: start;
  }
  
  #quando {
    font-size: 32px;
    font-weight: 600 !important;
  }
  
  .onde {
    font-size: 24px;
  }
  
  @media screen and (max-width: 576px) {
    .onde {
      padding: 0 20px !important;
    }
  }
  
  div > hr {
    color: #cecece;
  }
  
  .footer-subscription {
    background-color: #13264a;
    /* background-color: white; */
  }
  
  div > span {
    color: white;
  }
  
  /* .v-parallax__image {
    transform: none !important;
    width: 100% !important;
  } */
  
  /* Higor's resources */
  
  .banner .logo {
    position: absolute;
    width: auto;
    height: 480px;
    left: -50px;
    bottom: -80px;
    z-index: 101;
    filter: brightness(2);
  }
  .banner .back {
    z-index: 100;
    filter: blur(1px);
  }
  @media screen and (max-width: 768px) {
    .banner {
      padding: 30px 100px !important;
    }
    .banner .logo {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .banner {
      padding: 30px 5px !important;
    }
  }
  
  #sobre p {
    text-align: justify;
    font-size: 1.2em;
  }
  
  .icontitle {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  .icontitle > i {
    font-size: 18pt;
    margin-right: 15px;
  }
  .icontitle > h5 {
    margin: 0;
    margin-top: 4px;
  }
  
  #whenwhere {
    display: flex;
    align-items: center;
    text-align: center;
  }
  #whenwhere > div {
    max-width: 1170px;
    margin: 0 auto !important;
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 't1 t2' 'c1 c2' 'nn cc2';
  }
  #whenwhere > div > .icontitle {
    grid-area: t1;
  }
  #whenwhere > div > .icontitle:nth-child(3) {
    grid-area: t2;
  }
  #whenwhere > div #onde-endereco {
    grid-area: cc2;
  }
  @media screen and (max-width: 768px) {
    #whenwhere > div {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, auto);
      grid-template-areas: unset;
    }
    #whenwhere > div > .icontitle {
      grid-area: unset !important;
    }
    #whenwhere > div > .icontitle:nth-child(3) {
      margin-top: 22px;
    }
    #whenwhere > div #onde-endereco {
      grid-area: unset !important;
    }
    #whenwhere > div > span:nth-child(5) {
      margin-top: 5px;
    }
  }
  @media screen and (max-width: 425px) {
    #whenwhere > div span:nth-child(2) {
      font-size: 28px;
    }
    #whenwhere > div > div:nth-child(4) {
      font-size: 18px;
    }
    #whenwhere > div > div:nth-child(4) > div {
      font-size: inherit;
    }
  }
  </style>
  
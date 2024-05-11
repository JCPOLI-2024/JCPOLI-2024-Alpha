// Storage para os TCC's que estavam na Politécnica 
enum enum_tcc {
  TCC1 = 1,
  TCC2
}

enum enum_titulacoes {
  DR = 1,
  ESP,
  MSC,
  POS_DR,
  ENG_AGRONOMA,
  ENG_AGRONOMO,
  GRAD,
  ARQ, 
  VAZIO
}


enum enum_cursos {  
  CIENCIA_DA_COMPUTACAO = 1,
  AGRONOMIA,
  CIENCIAS_AERONAUTICAS,
  ENGENHARIA_CIVIL,
  ENGENHARIA_DE_COMPUTACAO,
  ENGENHARIA_DE_CONTROLE_E_AUTOMACAO,
  ENGENHARIA_DE_PRODUCAO,
  ENGENHARIA_ELETRICA,
  ARQUITETURA_E_URBANISMO,
  DESIGN
}

const cursos : { [key in enum_cursos]: string } = {
  [enum_cursos.CIENCIA_DA_COMPUTACAO] : "Ciência da Computação",
  [enum_cursos.AGRONOMIA] : "Agronomia",
  [enum_cursos.CIENCIAS_AERONAUTICAS] : "Ciências Aeronáuticas",
  [enum_cursos.ENGENHARIA_CIVIL] : "Engenharia Civil",
  [enum_cursos.ENGENHARIA_DE_COMPUTACAO] : "Engenharia de Computação",
  [enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO] : "Engenharia de Controle e Automação",
  [enum_cursos.ENGENHARIA_DE_PRODUCAO] : "Engenharia de Produção",
  [enum_cursos.ENGENHARIA_ELETRICA] : "Engenharia Elétrica",
  [enum_cursos.ARQUITETURA_E_URBANISMO] : "Arquitetura e Urbanismo",
  [enum_cursos.DESIGN] : "Design"
};

const titulacoes : { [key in enum_titulacoes]: string } = {
  [enum_titulacoes.DR] : "Dr(a).",
  [enum_titulacoes.ESP] : "Esp.",
  [enum_titulacoes.MSC] : "Msc.",
  [enum_titulacoes.POS_DR] : "Pós Dr(a).",
  [enum_titulacoes.ENG_AGRONOMA] : "Eng. Agrônoma",
  [enum_titulacoes.ENG_AGRONOMO] : "Eng. Agrônomo",
  [enum_titulacoes.GRAD] : "Grad.",
  [enum_titulacoes.ARQ] : "Arq.",
  [enum_titulacoes.VAZIO] : "",
}




let TCCs = [

  {
    title: "PenTest",
    titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    orientador: "CLAUDIO MARTINS GARCIA",
    estudantes: "Douglas Martins Ferreira", //se tiver mais de 1, separar por ;
    warning: "", //deixe vazio
    date: "16/12",
    time: "09:00-09:45",
    place: "",
    titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
    nomePrimeiroMembroBanca: "Nilson Cardoso Amaral",
    titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
    nomeSegundoMembroBanca: "",
    titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
    nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
    curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
    tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
  },

  {
    title: "PenTest em redes sem fio",
    titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    orientador: "CLAUDIO MARTINS GARCIA",
    estudantes: "Lídia Paula de Oliveira Silva", //se tiver mais de 1, separar por ;
    warning: "", //deixe vazio
    date: "15/12",
    time: "09:00-09:45",
    place: "",
    titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
    nomePrimeiroMembroBanca: "Nilson Cardoso Amaral",
    titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
    nomeSegundoMembroBanca: "",
    titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
    nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
    curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
    tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
  },


  {
    title: "USO DA BLOCKCHAIN PARA AUTENTICIDADE DE DOCUMENTOS",
    titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    orientador: "ADRIANA SILVEIRA DE SOUZA",
    estudantes: "Gustavo Toledo de Souza", //se tiver mais de 1, separar por ;
    warning: "", //deixe vazio
    date: "11/12",
    time: "09:00-10:30",
    place: "206D, área II",
    titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    nomePrimeiroMembroBanca: "André Luiz Alves",
    titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
    nomeSegundoMembroBanca: "Juliano Lopes de Oliveira ",
    titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
    nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
    curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
    tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
  },
  {
    title: "A percepção de profissionais de software sobre segurança em banco de dados",
    titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    orientador: "ADRIANA SILVEIRA DE SOUZA",
    estudantes: "Mariana Santa Clara Campelo Zanatta", //se tiver mais de 1, separar por ;
    warning: "", //deixe vazio
    date: "11/12",
    time: "18:00-19:30",
    place: "205D, área II",
    titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
    nomePrimeiroMembroBanca: "Solange Silva",
    titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
    nomeSegundoMembroBanca: "Juliano Lopes de Oliveira",
    titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
    nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
    curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
    tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
  },




    {
      title: "Aplicação web para Gestão de Fidelidade",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "LUIZ AUGUSTO VIEIRA BOSCO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "21:15-22:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "FERNANDO GONÇALVES ABADIA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "MONITORIA DE DISCIPLINAS UTILIZANDO CLEAN ARCHITECTURE E FLUTTER",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "WICTOR OLIVEIRA DE SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "GERALDO VALERIANO RIBEIRO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "FERNANDO GONÇALVES ABADIA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "WEBSOCKET COMO SOLUÇÃO PARA ENTREGA DE LANCES EM TEMPO REAL EM UMA APLICAÇÃO WEB DE LEILÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "ALUISIO LUCIO DOS SANTOS NETOA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "SEGURANÇA CIBERNÉTICA EM REDES SOCIAIS: SIMULAÇÃO DE ATAQUE DE ENGENHARIA SOCIAL COM CHATBOTS E ESTRATÉGIAS DE CONTRAMEDIDAS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "ANA ALINE DOURADO MACHADO ROCHA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "COBERTURA E ESTABILIZAÇÃO DE TALUDES RODOVIÁRIOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "MARTA PEREIRA DA LUZ",
      estudantes: "BRUNO DA SILVA PALHARES; MARIA EDUARDA OLIVEIRA DA SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Alessandra Carvalho",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    
    {
      title: "RELAÇÃO CUSTO-BENEFÍCIO DO USO DO BLOCO DE CONCRETO CELULAR AUTOCLAVADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "Gabriel Ávila Vasconcelos; Gabriel de Paula Moreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EDSON NISHI",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "A realidade em constante deformidade: Ciência de Dados aplicada a análise de Fake News no Brasil",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Gustavo Dias Martins", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "14:15-15:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nágela Bitar Lobo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Como BI e Big Data auxiliam na prevenção de fraudes e falhas em órgãos públicos",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "Matheus Gomes dos Santos Araujo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-11:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ronaldo Lopes de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "GERÊNCIA DE REDES COM ZABBIX EM AMBIENTE NUVEM",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "PEDRO HENRIQUE RIBEIRO DANTAS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "21:15-22:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "SEGURANÇA NA COMPUTAÇÃO EM NUVEM",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "RAFAEL OLIVEIRA PORFIRIO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "DESENVOLVIMENTO DE FERRAMENTA DE SOFTWARE PARA ANÁLISE TÉCNICA DA BOLSA DE VALORES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "CLAUDIO BERTINI BATISTA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anibal Vicente Vieira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Ferramentas Lean na Gestão da qualidade",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PRISCILLA BORGES DE F RODRIGUES",
      estudantes: "ERIKA PAULA MORAIS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "18/12",
      time: "10:30-11:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Tatiana Renata Pereira Jucá",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Estudo de viabilidade de uma usina móvel e a logística reversa do agregado reciclado na cidade de Goiânia",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "TATIANA RENATA PEREIRA JUCA",
      estudantes: "Fabiany Cogo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "17:45-18:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Priscilla Borges de F Rodrigues",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Do Eliza ao chatGPT: História e Evolução da Inteligência Artificial",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUCILIA GOMES RIBEIRO",
      estudantes: "Matheus Afonso Batista da Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:45-18:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Vicente Paulo de Camargo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Solange da Silva",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Desenvolvimento de um sistema web para avaliação abrangente de competências em engenharia de software",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "JHEOVANNY CAMPOS DE SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:00-18:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Joriver Canedo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Juliano Lopes de Oliveira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise de Guia de Validação de Sistemas da Anvisa pelo Processo de Validação da Norma 12207",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "Clysman Samuel Lima Cipriano", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "André Luiz Alves",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Juliano Lopes de Oliveira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },

    {
      title: "Sistema construtivo em painéis monolíticos de poliestireno expandido (EPS) em casa residenciais - Estudo de caso ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANE BORGES DE PAULA COUTO",
      estudantes: "CAROLINE TELES PINHEIRO; André Alves Bueno ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Mascarenhas Roriz ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Edson Nishi ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "ANÁLISE COMPARATIVA ENTRE OS MODELOS: MPS.BR (MELHORIA DE PROCESSOS DE SOFTWARE BRASILEIRO) RH e P-CMM (PEOPLE CAPABILITY MATURITY MODEL)	",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANA SILVEIRA DE SOUZA",
      estudantes: "ROMÁRIO EDUARDO DE ALMEIDA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Solange Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marco Aurelio de Souza Mangan",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Sistema construtivo em light steel frame - método engenheirado, em obras civis ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANE BORGES DE PAULA COUTO",
      estudantes: "Victor Ataídes Freitas; Fidelis Porto Palhares ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Mascarenhas Roriz ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Edson Nishi ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "HIBRIDIZAÇÃO ENTRE A OTIMIZAÇÃO DE COLÔNIA DE FORMIGAS E RECOZIMENTO SIMULADO PARA O PROBLEMA DE ROTEAMENTO E LOCALIZAÇÃO DO SISTEMA DE VEÍCULOS ELÉTRICOS AUTÔNOMOS COMPARTILHADOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALEXANDRE RIBEIRO",
      estudantes: "Vitor Antonio Pimenta Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "18/12",
      time: "20:30-22:00",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria José Pereira Dantas",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Max de Oliveira Gontijo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desenvolvimento de um aplicativo para apoiar pessoas com TDAH",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Douglas Soares de Souza Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "Auditório 2, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Paulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Projeto de Software utilizando Flutter",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Marcel Douglas Cirqueira Castro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:15-08:45",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Joriver Rodrigues Canêdo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Paulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Aplicação de Ciências de Dados no Setor Financeiro",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Gabriel Soares Ribeiro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:15-08:45",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Nágela Bitar Lobo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Roadmap de Infraestrutura para a Transformação Digital",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "João Victor Nunes de Melo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "Sala de reuniões da DTI, área IV",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Dinailton José da Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Elias Batista Ferreira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desenvolvimento Web do Site M2: Catálogo Online para a Empresa Mattia Móveis",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Heverton Thyago Barbosa", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Paulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Automatização de Processos Organizacionais: Desenvolvimento e Implementação de uma Solução RPA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Yves Yuji Carvalho Monma", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schlag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vicente Paulo de Camargo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "UTILIZAÇÃO DA VPN NO CENÁRIO DE TELETRABALHO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "ISABELLA ALVES CARVALHO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Wilmar Oliveira de Queiroz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SISTEMA DE RECOMENDAÇÃO DE LIVROS ATRAVÉS DO ALGORITMO ALS(ALTERNATIVE LEAST SQUARES)",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "Hiago Laurenço Donha", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "20:30-22:00",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "LUCÍLIA GOMES RIBEIRO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "FERNANDO GONÇALVES ABADIA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Aplicação Low Code Web para Controle De Ações",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "Alexssander Pereira de Morais", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45-20:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Vicente Paulo de Camargo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Solange da Silva",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },            


    {
      title: "Aplicativo para auxiliar e monitorar o planejamento estratégico de organizações",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANDRE LUIZ ALVES",
      estudantes: "Pedro Henrique Albuquerque Roriz", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Joriver Rodrigues Canêdo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "COMPUTAÇÃO EM NUVEM E DEVOPS NA CONSTRUÇÃO DE APLICAÇÃO WEB",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANGELICA DA SILVA NUNES",
      estudantes: "VINICIUS ELIAS DA SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:45-10:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anibal Vicente Vieira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "ESTUDO DE CASO DE PATOLOGIA NA ENGENHARIA CIVIL EM EDIFICAÇÃO VERTICAL NA CIDADE DE GOIÂNIA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARCELO TSUYOSHI HARAGUCHI",
      estudantes: "ADIMAR PRAXEDES JORGE; ARTHUR FERNANDES ALVIM", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "FELIPE CORREA VELOSO DOS SANTOS",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Reconhecimento e classificação de músicas utilizando inteligência artificial",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "CARLOS HENRIQUE DE SOUZA SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:15-08:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "MONITORAMENTO DE REDES DE COMPUTADORES UTILIZANDO GRAFANA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "GABRIEL DE CASTRO GONÇALVES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Wilmar Oliveira de Queiroz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Desenvolvimento do Software “Stickerz”: Um Aplicativo Para Troca de Figurinhas da Copa do Mundo",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUCILIA GOMES RIBEIRO",
      estudantes: "HAYANN GONÇALVES SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Max Gontijo de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Aplicação de Redes Neurais para Previsão de ações no Mercado Financeiro",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "HENRIQUE HONORATO CRUVINEL", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:00-11:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "INTELIGÊNCIA ARTIFICIAL NO MERCADO IMOBILIÁRIO Um cenário no mercado norte-americano de 2019 a 2023",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCILON FONSECA DE LIMA",
      estudantes: "Hugo Tocha Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Antônio Claret de Almeida Gama Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "ENGENHARIA SOCIAL NA SEGURANÇA DA INFORMAÇÃO",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "LEONARDO DE MOURA ALVES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Automação de uma indústria de fertilizantes - Estudo de caso",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "CARLOS ALBERTO VASCONCELOS BEZERRA",
      estudantes: "Leonardo Rocha Rodrigues", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Daniel de Sousa Bezerra",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Segurança e Privacidade no IoT em Ambientes de Saúde: Ajustando as Práticas à LGPD",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "Matheus Rodrigues Tenaglia", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anibal Santos Jukemura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Desenvolvimento e Avaliação de Métodos de Completamento de Dados Faltantes em Bases Climáticas",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARIA JOSE PEREIRA DANTAS",
      estudantes: "Norton Pereira Ricardo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "20:30-21:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marta Pereira da Luz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Análise de Ataques de Ransomware: Identificação e Medidas de Segurança Efetivas",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "FERNANDO GONCALVES ABADIA",
      estudantes: "Samuel Bernardes de Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Solange da Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "EFICIÊNCIA ENERGÉTICA EM TREINAMENTO DE MODELOS DE IA EM NUVEM",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "VITOR FRANÇA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "08:00-09:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Inovações na Metodologia de Dimensionamento de Pavimentos Flexíveis de Rodovias: O Método MeDiNa.",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "BENJAMIM JORGE RODRIGUES DOS SANTOS",
      estudantes: "Ana Beatriz Souza Souto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "19:30-20:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Edson Nishi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Mascarenhas Roriz",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "PATOLOGIA DAS FUNDAÇÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO SERGIO DE OLIVEIRA RESENDE",
      estudantes: "ARTHUR SIMONTON ANDRADE DE JESUS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Divino Gabriel Lima Pinheiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "Sistema de Monitoramento de Vibrações Baseado em IA para Manutenção Preditiva",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "WANDERSON RAINER HILARIO ARAUJO",
      estudantes: "Hellora Rodrigues Souza; José Francisco Mendes Neto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrícia Neres Borges",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "ESTUDO DOS PRINCIPAIS RISCOS NA ETAPA DO PLANEJAMENTO DE OBRA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "HIGOR PASSOS FREIRE", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "08:00-08:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "VIVIANE VAZ MONTEIRO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Rsid aplicado ao confinamento bovino.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELO ANTONIO ADAD DE ARAUJO",
      estudantes: "ISMAEL CARLOS DO NASCIMENTO GALVAO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },


    {
      title: "PATOLOGIA DAS FUNDAÇÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO SERGIO DE OLIVEIRA RESENDE",
      estudantes: "JOSÉ AUGUSTO FAUSTINO DE OLIVEIRA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "18:45-19:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Divino Gabriel de Lima Pinheiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },

    {
      title: "Otimização da Aplicação de Adubo Foliar no Agronegócio: Um Estudo de Viabilidade da Programação Linear para Redução de Custos",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "Matheus Dias Barros", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "16/12",
      time: "09:00-09:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "BRUNO QUIRINO DE OLIVEIRA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCOS ANTONIO DE SOUSA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },



    /*                FIM DE TCC 1 E COMEÇO DE TCC 2
    ========================================================================
    ========================================================================
    ========================================================================
    ========================================================================
    ========================================================================
    
    
    */

    {
      title: "Connect Hub - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Júlia Netto Medeiros", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Deusa M.Rodrigues Boaventura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Carlos Rabelo",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Simone Buiate Brandão", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Parque Amazônia, um Bairro Eldorado. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Larissa de Freitas Gerais", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "08:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Deusa M.Rodrigues Boaventura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Carlos Rabelo",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Simone Buiate Brandão", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },

    {
      title: "Moradia Estudantil - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Pietra Neto Teles de Paula", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Deusa M.Rodrigues Boaventura",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Carlos Rabelo",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Simone Buiate Brandão", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Complexo Hoteleiro em Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Marcos Paulo de Carvalho Cardoso", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de bem-estar para cães e gatos - Goiânia- GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Arthur Gonçalves Borba", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "08:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "(Des)Fragmentar com mobilidade: intervenção Urbana em Senador Canedo - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Nathália Aureliano Lopes ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Transcender - Centro de Acolhimento e Apoio LGBTQIA+ - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Thyago Henrique Cardoso B. Borges", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Jesus Henrique Cheregati",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antônio Fernando Banon Simon",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Ana Flávia Rêgo Mota", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "CRIEC - Centro de Referência em Inovação e Empreendedorismo Criativo em Goiânia. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Melquisedeque Alves Tibúrcio ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "13:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Guia de Plano de Bairro para a população de Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Camilla Duarte Viana", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "14:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Tratamento Psiquiátrico Bieno - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Natália Siqueira Gonçalves Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Circuito Turístico da Região das Serras Gerais do Tocantins - Taguatinga - TO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Bethânia Chaves de Almeida Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Isabela Paiva Gomes Ferrante",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Cintra Campos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Fernando Antônio Oliveira Mello", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Cicatriz Urbana: intervenção urbana paisagística nos córregos do perímetro urbano de Mineiros - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Lanyerre Oliveira Castro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "13:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Complexo de pesquisa e produção de vacinas do Estado de Goiás - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Lucas Gomes Santana", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "14:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Tiny House: uma habitação móvel sustentável",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Victor da Rocha Fernandes de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "SESC Jóquei Clube de Goiás - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Guilherme Rocha de Oliveira Gonçalves", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "15:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria Eliana Jubé Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula de Oliveira Zimmermann",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Thalita Pereira da Fonseca", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },

    {
      title: "Requalificação de praças: Córrego Calção de Couro- Goianésia-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Thiago Felipe de Magalhães Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Florescer: Centro de Educação Infantil - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Isabella de Almeida Castro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Hotel Executivo - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Rodolfo Machado Pacheco Pereira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "19:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Convívio para idosos em Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Fernando Henrique B. Marques",
      estudantes: "Thays Galvão Batista", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "20:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Dias Pimentel",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Pedro Batista dos Santos",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Manoel Balbino Carvalho", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Requalificar na Orla de Aruanã. Aruanã - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Verônica Gomes da Silveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Convívio Intergeracional - Jovens e Idosos - Goiânia-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Beatriz de Carvalho Carrazzoni", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Museu Contemporâneo de Arte Urbana. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Jeferson Sales Torres Lima Santos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "19:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Reurbanização do Córrego Pontilhão - Palmeiras de Goiás",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Elaine Neves da Silva",
      estudantes: "Hugo Pereira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "20:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Renato de Castro e Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Guilherme de Andrade Bento",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Maurício Telles Alves da Costa", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Memorial Césio - 137 - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Jaqueline Ramos Arantes", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Ensino para Surdos - Goiânia-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Lyndon Johnson Rodrigues Silva Junior", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "08:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Aeroporto de Catalão-GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Luana Rodrigues Tomazett", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "(Re)ocupar: guia para intervenção em loteamentos irregulares",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Bruna do Carmo Perotto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Adriana de Oliveira Bernardi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Carvalho C. Japiassu",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rangel Henrique Brandão Silva", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "EDUCART - Centro de Dança. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Narayanna Ribeiro Pinheiro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Hidro: um bioparque em uma hidrelétrica em ruínas - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Camilla Pompêo de C. e Silva",
      estudantes: "Matheus de Oliveira Santana", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "08:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Parque Linear e Centro Comercial Aberto - Piracanjuba - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Mírian de Paula R. Belo",
      estudantes: "Hevelin Borges Duarte", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Abrigo para crianças e adolescentes KOA - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Ana Clara Spadeto Aires", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mirci Kuramoto Nucada",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Alessandro Miguel de Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Pedro Henrique Máximo Pereira", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Reabilitação Urbana no Centro de Goiânia: Circuito histórico cultural no Centro - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Júlia Souza Abdallah Mynssen", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "13:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Requalificação do Centro de Esporte e Lazer Antônio Nélio Lopes Valadão - Goiatuba- GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Therena Maria de Sousa Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "14:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Arterapia Flora - apoio a pessoas com TEA e TDAH - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Beatriz de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Sala Goiás: sede da Orquestra Filarmônica de Goiás - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Ídila Ferreira Borges", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcelo Granato de Araújo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ênio Nery Oliveira",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Christine Ramos Mahler", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Gestar: fundação de acolhimento à gestante - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Luana de Sousa Nunes", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "13:30",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Intervenção Urbana no Setor Sul: sistema de espaços livres de uso público. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Júlia Alves Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "14:15",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Habitação Estudantil - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Frederico André Rabelo",
      estudantes: "Ana Beatriz Carvalho Soares", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:00",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Intervenção Urbana no bairro Campinas. Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Laíssa Eduarda M de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:45",
      place: "Área II Auditório 03",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Diogo Antônio da Paixão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Roberto da Costa",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.ARQ], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Vítor Cavalcanti Garcia", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Parque Cultural SETE ARTES - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Isadora Vieira Frota", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:00",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro Hípico-Equoterápico - Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Maria Antônia Pereira Freire", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Centro de Cultura e Artes em Goiânia – GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Sandra Catharinne P. Resende",
      estudantes: "Mila Fonseca Apolinário", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "19:30",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },


    {
      title: "Complexo Welness . Goiânia - GO",
      titulacaoOrientador: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
      orientador: "Maria Ester de Souza",
      estudantes: "Júlia Rezende Saddi", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "20:15",
      place: "Área II Auditório 02",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Leônidas Albano da Silva Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Evelyn Cristine Moreira Soares",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Eurípedes Afonso da Silva Neto", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ARQUITETURA_E_URBANISMO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },



      
    {
      title: "DESENVOLVIMENTO DE UM APLICATIVO PARA GESTÃO DE PEQUENAS PROPRIEDADES RURAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANIBAL SANTOS JUKEMURA",
      estudantes: "JOÃO AUGUSTO BATISTA CAMARGO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "18:45-20:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "SOLANGE DA SILVA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "RAFAEL LEAL MARTINS",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A RELEVÂNCIA DAS ESTRATÉGIAS DE MARKETING PARA A AVIAÇÃO ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Jaime Batista da Silva Sobrinho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "07:15-08:45",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "OS BIOCOMBUSTÍVEIS E A INOVAÇÃO DE RUPTURA NA AVIAÇÃO CIVIL ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Nathan Santana do Couto Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Ycarim Melgaço Barbosa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A IMPORTÂNCIA DA QUALIDADE NA MANUTENÇÃO PREVENTIVA NA AVIAÇÃO CIVIL",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "AURÉLIO AUGUSTO GOULART SOARES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Andréluiz da Silva Fernandes",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Salmen Chaquip Bukzem",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Monitoramento Ambiental Com Veículos Operados Remotamente",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "MARCOS VINICIUS XAVIER GUIMARÃES SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno Quirino de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Alexandre Ferreira de Lima ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "IMPLEMENTAÇÃO E APLICAÇÃO DE UMA REDE NEURAL EM UM FPGA PARA AGRICULTURA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "NERCILIO ANTONIO URIAS CAVALCANTE JUNIOR", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno de Quirino de Oliveira ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "LUIS FERNANDO PAGOTTI",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BIOINFORMATICA E A UTILIZAÇÃO DA GENETICA NA AGRICUTLURA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "Gabriel Henrique Lima Picouto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno Quirino de Oliveira ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCOS ANTONIO DE SOUSA ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESENVOLVIMENTO DE PLACA DE CIRCUITO IMPRESSO BIODEGRADÁVEL COM LAMINADO TERMOPLÁSTICO RECICLADO UTILIZANDO MANUFATURA ADITIVA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANTONIO MARCOS MELO MEDEIROS",
      estudantes: "LUIZ HEITOR DIMITRI REIS DE DAMACENA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "BRUNO QUIRINO DE OLIVEIRA",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "DANNS PEREIRA BARBOSA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Digitalização na Indústria 4.0 - Aplicação do protocolo OPC UA na digitalização de fábricas",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "CARLOS ALBERTO VASCONCELOS BEZERRA",
      estudantes: "Gabriel Sales Mendes da Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Daniel de Sousa Bezerra",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luis Fernando Pagotti",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "CLASSIFICAÇÃO DE TIPOS DE BANANAS UTILIZANDO IMAGENS HIPERESPECTRAIS E REDES NEURAIS PERCEPTRON MUTICAMADA",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "CLARIMAR JOSE COELHO",
      estudantes: "MANOELLA CRISTYNA BORGES MATIAS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "15:15-16:45",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Viana de Carvalho",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.GRAD], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Walcy Junior Rios",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DIAGNÓSTICO MÉDICO USANDO RACIOCÍNIO BASEADO EM CASOS E APRENDIZAGEM DE MÁQUINA",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "CLARIMAR JOSE COELHO",
      estudantes: "ALISSON VIANA DE ANDRADE", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "17:00-18:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Viana de Carvalho",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.GRAD], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Walcy Junior Rios",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Levantamento e caracterização dos erros técnicos praticados por engenheiros civis",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EDSON NISHI",
      estudantes: "Gabriela Guedes Miranda; Hyollanda Cantuária Santos ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:45",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marta Pereira da luz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Adriane Borges de Paula  Couto",
      titulacaoTerceitoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "Rosana Melo de Lucas Brandão", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Avaliação de propriedades de argamassa industrializada utilizada em alvenaria estrutural em empreendimentos na cidade de Goiânia.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EPAMINONDAS LUIZ FERREIRA JUNIOR",
      estudantes: "Ana Eugênia Barbosa Faleiro; Cindy Ohanna da Cruz Maciel", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45-20:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo Sérgio de Oliveira Resende",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Murilo Meiron de Pádua Soares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise da execução de serviços de impermeabilização em um empreendimento na cidade de Goiânia.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EPAMINONDAS LUIZ FERREIRA JUNIOR",
      estudantes: "Brenda Peixoto de Alencar Santiago", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rosana Melo de Lucas Brandão",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Adriane Borges de Paula Couto",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Arquitetura de Software",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "EUGENIO JULIO M C CARVALHO",
      estudantes: "LIANDRA DE OLIVEIRA LOPES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Daniel Correa da Silva",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "OLEGARIO CORREA DA SILVA NETO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SOLIDARIZE: Aplcação WEB para busca de organizações não-governamentais",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "FERNANDO GONCALVES ABADIA",
      estudantes: "Gabriel Torres Bahia", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "20:30-22:00",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rafael Leal Martins",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Anibal Santos Jukemura",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SISTEMA DE CONTROLE DE TEMPERATURA PARA CHURRASQUEIRA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "MARCUS VINICIUS DE SOUZA SANTOS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A INFLUÊNCIA DA INTELIGÊNCIA ARTIFICIAL NO SETOR DE NEGÓCIOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "FERNANDO CARLOS PEREIRA JUNIOR", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nilson Cardoso Amaral",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESAFIOS NA WEB3: RISCOS E VULNERABILIDADES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "Gustavo Miranda de Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Flávia Marinho de Lima Garrote",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BUSINESS INTELLIGENCE E GESTÃO DE NEGÓCIO: ESTUDO DE CASO SOBRE A APLICAÇÃO DE BUSINESS INTELLIGENCE NA OBTENÇÃO DE INFORMAÇÕES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "GUSTAVO SIQUEIRA VINHAL",
      estudantes: "FELIPE ANDRADE DE PAIVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "13:30-15:00",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Flavia Marinho de Lima Garrote",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise de dados de incidentes e acidentes aéreos relacionada conflitos de pista;",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "HUMBERTO CESAR MACHADO",
      estudantes: "Arthur Fernandes Monteiro", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schilag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Henrique Linares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A segurança de voo e seus aspectos comportamentais e neuropsicológicos na operação aérea",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "HUMBERTO CESAR MACHADO",
      estudantes: "João Francisco de Souza Oliveira Filho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "10:45-12:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fabrício Schilag",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Carlos Henrique Linares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "OS DESCOMPASSOS JURÍDICOS ENTRE CONSUMIDOR, COMPANHIAS AEREAS E A LEGISLAÇÃO REGULAMENTAR",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "HUMBERTO CESAR MACHADO",
      estudantes: "Moacir Antônio Guimarães Bragança", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "13:30-15:00",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Henrique Linares",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Cinthya Amaral Santos",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "EXPLORANDO O DESENVOLVIMENTO FRONT-END: UM ESTUDO DE CASO EM CATÁLOGO DE FILMES ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "JOSÉ LUIZ DE FREITAS JÚNIOR",
      estudantes: "TAYNÁ RODRIGUES DE SOUSA CARVALHO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MARCIO GIOVANE CUNHA FERNANDES (UEG)",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "EUGÊNIO JÚLIO MESSALA CÂNDIDO CARVALHO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desenvolvimento de uma Aplicação Web para Controle de Tarefas na Área de Suporte de TI ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "JOSÉ LUIZ DE FREITAS JÚNIOR",
      estudantes: "HIAGHO JUNIO GOMES OLIVEIRA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MARCIO GIOVANE CUNHA FERNANDES (UEG)",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "EUGÊNIO JÚLIO MESSALA CÂNDIDO CARVALHO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SISTEMA EMBARCADO DE CONTROLE DE NAVEGAÇÃO TERRESTRE",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "LEONARDO GUERRA DE REZENDE GUEDES",
      estudantes: "GABRIEL PAZ DE PAULA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EUGENIO JULIO MESSALA CANDIDO CARVALHO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "PEDRO ARAUJO VALE",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Sistema para controle e monitoramento de energia elétrica residencial",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUDMILLA REIS PINHEIRO DOS SANTOS",
      estudantes: "ERICK RIAN BARBOSA DE SOUSA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MARCELO ANTONIO ADAD DE ARAUJO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "FERNANDO GONÇALVES ABADIA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Estudo de Caso de Viabilidade de Entrada no Mercado Livre de Energia para Consumidor com Demanda Inferior a 500kW",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "LUIS FERNANDO PAGOTTI",
      estudantes: "KAIO LEONARDO OLIVEIRA ROSA; VINICIUS SOUZA MAGALHÃES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Bruno Quirino de Oliveira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Antonio Marcos Melo Medeiros",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Implantação de firewall em Raspberry Pi",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELO ANTONIO ADAD DE ARAUJO",
      estudantes: "Hebert Cordeiro De Souza", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Nilson Cardoso Amaral",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Controle Inteligente deTráfego Terrestre: Uma revisão literária",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELO ANTONIO ADAD DE ARAUJO",
      estudantes: "Huggo Campos da Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Nilson Cardoso Amaral",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Estudo da viabilidade de reúso de água cinza proveniente da máquina de lavar roupas.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MARCELUS ISAAC LEMOS GOMES",
      estudantes: "Lucas Gonçalves Canedo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Viviane Vaz Monteiro.",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Mascarenhas Roriz.",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "REDES NEURAIS APLICADAS NA CLASSIFICAÇÃO DE DISTÚRBIOS DA REDE ELÉTRICA",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARCOS ANTONIO DE SOUSA",
      estudantes: "Matheus Felipe da Silva Mariano; Victor Pinheiro Borges", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Luís Fernando Pagotti ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Bruno Quirino de Oliveira ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO + ";" + enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise Comparativa de Fundações sob Influência de Diferentes Tipos de Solo e a Importância da Sondagem – Um estudo de Caso",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "MARTA PEREIRA DA LUZ",
      estudantes: "Jhordan Henrique Carvalho Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-20:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MURILO MEIRON",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "FLÁVIO LEAL DA CUNHA",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Emprego de Técnicas e Algoritmos para o Desenvolvimento de Jogos de Terror Realistas",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "MAX GONTIJO DE OLIVEIRA",
      estudantes: "GABRIEL HÚGLIO PINELI SIMÕES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "19/12",
      time: "18:45-20:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Comparativo de custos de alvenaria estrutural e vedação para casas populares",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Murilo Meiron de P. Soares",
      estudantes: "Ernani Vaz Carneiro; Watson Kalley Alves dos Santos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "17:00-18:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Luciano Caetano do Carmo",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "José Elmo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BIOCONCRETO: AUTO RECUPERAÇÃO DE PATOLOGIAS DO CONCRETO ESTRUTURAL",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "Maria Alicia Pereira Morais; Sabrina Ferreira Gonçalves", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EDSON NISHI",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCELUS ISAAC LEMOS GOMES",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "CONDICIONAMENTOS DE USO DO DRYWALL EM EDIFICAÇÕES VERTICAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO JOSE MASCARENHAS RORIZ",
      estudantes: "Gabriel Vantuille de Godoy Freitas; Gabriel Carvalho Desidério Protasio", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "EDSON NISHI",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MARCELUS ISAAC LEMOS GOMES",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Logística de suprimentos na construção civil: Impactos em obras distantes dos grandes centros urbanos no estado de Goiás – Estudo de caso. ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PAULO SERGIO DE OLIVEIRA RESENDE",
      estudantes: "Lucas Gonçalves de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "20:30-22:00",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Epaminondas Luiz Ferreira Junior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Murilo Meiron de Pádua Soares",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Lean Construction - Uso da Ferramenta A3 Para Melhoria Contínua",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "PRISCILLA BORGES DE F RODRIGUES",
      estudantes: "KAICK BARCELOS DOSSA; WARLEY DANIEL DA SILVA FERNANDES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "18:45-20:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Antonio Claret A. G. Junior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marcilon Fonseca de Lima",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise Comparativa da Viabilidade da Implementação de Usinas Fotovoltaicas de até 6000 kWh após a Implementação da Lei 14.300: Um Estudo de Transição Energética Sustentável",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RICARDO VITOY",
      estudantes: "SHAMIR QUEIROZ ROSADO ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "13:30-15:00",
      place: "104D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Vitor Hugo Martins e Resende",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ricardo Caetano Rezende ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_PRODUCAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "ANÁLISE DAS PROPRIEDADES FÍSICAS DO CONCRETO NÃO ESTRUTURAL EM MISTURAS UTILIZANDO REÍDUOS DE VIDRO E PLÁSTICO PET",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RODRIGO MARTINEZ CASTRO",
      estudantes: "ANNA CAROLINA SEVERO; LETHÍCIA PEREIRA E SILVA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "17:00-18:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Murilo Meiron de P. Soares",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marta Pereira da Luz",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "APLICAÇÃO DO CHATGPT NA GERAÇÃO DE SENTENÇAS JUDICIAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "SIBELIUS LELLIS VIEIRA",
      estudantes: "Caio de Paula Milhomem Santos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:45",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Gustavo Siqueira Vinhal",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "USO DAS NORMAS NBR ISO/IEC 27017 E 27018 PARA GARANTIR A SEGURANÇA DA COMPUTAÇÃO EM NUVEM ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "HIANKA RODRIGUES SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "15:15-16:45",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Gustavo Siqueira Vinhal",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fernando Gonçalves Abadia",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "SEGURANÇA DE REDES DE COMPUTADORES: UM ESTUDO SOBRE O ENDIAN FIREWALL ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "JOSÉ RODRIGO DA FONSECA GOMES ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Wilmar de oliveira Queiroz",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "MELHORIA DO TRÂNSITO URBANO USANDO AUTOMAÇÃO DE VEÍCULOS ATRAVÉS DA INTELIGÊNCIA ARTIFICIAL ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "CAIO MARQUES SILVA ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:00-10:30",
      place: "107D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: " Lucilia Gomes Ribeiro ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Gustavo Vinhal",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "CRIPTOGRAFIA E SEGURANÇA DE DADOS: TÉCNICAS PARA GARANTIR A SEGURANÇA DA INFORMAÇÃO",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "LUIS GUILHERME RIBEIRO CAMPOS ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Luiz de Freitas Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "VULNERABILIDADE EM REDES DE COMPUTADORES CORPORATIVAS: ESTUDOS DE CASO SOBRE ATAQUES DE RANSOMWARE ",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "SOLANGE DA SILVA",
      estudantes: "MARCO AURÉLIO SIRQUEIRA DE SÁ ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "José Luiz de Freitas Júnior",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rafael Leal Martins",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Perspectivas da aviação comercial supersônica: uma análise comparativa dos desafios e oportunidades para sua revitalização",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Daniella Borges Lopes", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Andréluiz da Silva Fernandes",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "William de Carvalho Xavier",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Abordagem sobre as correntes de jato nas aerovias UZ38 E UM540: desafios para a navegação aérea e o planejamento de voo",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Lucas Santos Rodrigues de Paula", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:45",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anna Paula Bechepeche",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Raul Francé Monteiro",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Desdobramentos financeiros da pandemia: estudo de caso sobre o endividamento da Azul Linhas Aéreas",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Henrique Ferreira de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Wagno Pereira da Costa",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Viabilidade técnica da semeadura de nuvens como alternativa para minimizar impactos da seca na agricultura do Centro-Oeste",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Lincoln Baptista Gonzaga Filho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:45-12:15",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nagi Hanna Salm Costa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marília Ribeiro Rodrigues Paixão",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A acessibilidade no atendimento para passageiros nos aeroportos: perspectivas do ponto de vista do usuário surdo e da legislação",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Milena Alves de Oliveira Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Paulo José Gonzaga Ribeiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ycarim Melgaço Barbosa",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Estudo da incidência de nuvens CBS no Centro-Oeste brasileiro: uma avaliação decenal (2013-2023) a partir das CARTAS SIGWX PROG",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "TAMMYSE ARAUJO DA SILVA",
      estudantes: "Volnei Gabriel Zoboli", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Raul Francé Monteiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Andréluiz da Silva Fernandes",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "MÉTODO O EXECUTIVO E ESTUDO DE VIABILIDADE DE PAINÉIS SANDUICHE EM EPS PARA VEDAÇÕES VERTICAIS ",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "TATIANA RENATA PEREIRA JUCA",
      estudantes: "Paulo Augusto Alves Ferraz", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "17:00-18:30",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Cybelle Luiza Barbosa Musse",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Adriane Borges",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Analise comparativa entre alvenaria de bloco cerâmico convencional e racionalizada: estudo de caso",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "TATIANA RENATA PEREIRA JUCA",
      estudantes: "Maria Eduarda Ferreira Lima; Geovanna Campos de Sousa Bastos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "18:45-20:15",
      place: "206D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Priscilla Borges da F Rodrigues ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Paulo José Mascarenhas Roeiz",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise comparativa de viabilidade técnica e econômica dos sistemas de tratamento de esgoto doméstico convencional e ecofossa",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "VIVIANE VAZ MONTEIRO",
      estudantes: "Daniel Damásio Vieira; Renan Antônio Clemente Pinto ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcellus Isaac Lemos Gomes ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Prof Paulo José Mascarenhas Roriz ",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Um estudo sobre o protocolo Lora com a plataforma ESP32",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "DANIEL CORREA DA SILVA",
      estudantes: "WILLIAN PIRES LIMA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Olegário Corrêa da Silva Neto",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Eugênio Júlio M. Candido Carvalho",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "USANDO BLOCKCHAIN PARA EMITIR CERTIFICADOS E DIPLOMAS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "DANIEL CORREA DA SILVA",
      estudantes: "VALTECI MARCELINO COELHO JÚNIOR", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Olegário Corrêa da Silva Neto",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Eugênio Júlio M. Candido Carvalho",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "VIGAS DE SEÇÃO RETANGULAR - FLEXÃO PURA - ARMADURA SIMPLES E DUPLA - PLANILHAS PARA O AUTOAPRENDIZADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALBERTO VILELA CHAER",
      estudantes: "FÁBIO DE PAULA NEVES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "16/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "MANOEL DA SILVA ÁLVARES",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "ELIAS CALIXTO CARRIJO",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "PUNÇÃO EM LAJE LISA – TEORIA E CÁLCULO DE ARMADURA - MATERIAL DIDÁTICO PARA AUTOAPRENDIZADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALBERTO VILELA CHAER",
      estudantes: "LUCAS CASTELO BRANCO DE SOUZA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "16/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "ELIAS CALIXTO CARRIJO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MANOEL DA SILVA ÁLVARES",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "TESTE DE VIABILIDADE DE ACESSO PARA Xanthomonas axonopodis e Colletotrichum  lindemuthianum SUBMETIDOS AO PROCESSO DE LIOFILIZAÇÃO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANA MARIA DA SILVA CURADO LINS",
      estudantes: "Yara Jessie Alves Ferreira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:00-10:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Flávio Gonçalves de Oliveira Filho",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberta Paula de Jesus",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "TESTE DE COMPATIBILIDADE DO BRADYRHIZOBIUM COM 24 ESPÉCIES DE TRICHODERMA NA SOJA (Glycine max)",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ANA MARIA DA SILVA CURADO LINS",
      estudantes: "RODRIGO FERNANDES SALES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "08:00-09:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Roberta Paula de Jesus ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Andressa Almeida",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },

    {
      title: "Método construtivo de uma laje de subpressão no município de Goiânia - Estudo de caso",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ADRIANE BORGES DE PAULA COUTO",
      estudantes: "Raquel Cristina; LORENA CARVALHO PADILHA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "07:15-08:45",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Edson Nishi",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Rosana Melo de Lucas Brandão",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    
    {
      title: "Inoculação Bacteriana no Desenvolvimento do Arroz Irrigado",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "FELIPE CORREA VELOSO DOS SANTOS",
      estudantes: "Carlos Antônio da Silva Filho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "15:15-16:45",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Roberta de Paula Jesus",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fábio José Gonçalves",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Efeito de diferentes dosagens de FTE na germinação e crescimento inicial do arroz ( Oriza sativa L.).",
      titulacaoOrientador: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      orientador: "JALES TEIXEIRA CHAVES FILHO",
      estudantes: "Alan Calixto Alvarenga", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "11:00-12:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Roberta Paula de Jesus",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Adriano de Melo Ferreira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Análise microbiológica do açafrão-índia e do açafrão-da-terra",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "LUCIANA CASALETTI",
      estudantes: "INGRID NASCIMENTO BALDUINO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "08:00-09:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ENG_AGRONOMA], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Caroline Domingos Bittencourt (UFG)",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Domingues Bittencourt Ferreira (UEG)",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Qualidade pós-colheita de alface submetida a diferentes tratamentos de sanitização",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "LUCIANA CASALETTI",
      estudantes: "MARLUCIO FRANÇA PEDROSO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Danns Pereira Barbosa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Luciana Domingues Bittencourt Ferreira (UEG)",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Avaliação de Métodos para superação da dormência de sementes de acácia australiana (Acacia mangium)",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "LUIZ CARLOS BARCELLOS",
      estudantes: "Brenno Neri Peixoto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "10:45-11:45",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rízia da Silva Andrade",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Jales Teixeira Chaves Filho",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Estudo da Viabilidade Econômica e Uso de Produtos Biológicos na Cultura do Feijão (Phaseolus vulgaris L.)",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARTHA NASCIMENTO CASTRO",
      estudantes: "ANA CAROLINA AOKI DE SOUSA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fábio José Gonçalves",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberta Paula de Jesus",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Qualidade fisiológica de sementes salvas e certificadas de soja Glycine max L.)",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "MARTHA NASCIMENTO CASTRO",
      estudantes: "VITOR VINICIUS CARVALHO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "10:00-11:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ENG_AGRONOMO], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Mateus de Souza Valente",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberta Paula de Jesus",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Avaliação do consumo foliar da largarta Chrysodeixis includens alimentada com de soja tratada com bioinsumos.",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RIZIA DA SILVA ANDRADE",
      estudantes: "EDUARDO SILVA REZIO", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "14:00-15:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Roberta Paula de Jesus",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Aline Cristiane Kamyia",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Avaliação do consumo foliar da largarta Rachiplusia nu alimentada com soja tratada com bioinsumos",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RIZIA DA SILVA ANDRADE",
      estudantes: "GUILHERME HENRIQUE BORGES OLIVEIRA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "15:00-16:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Aline Cristiane Kamyia",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberta Paula de Jesus",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Isolamento e caracterização de bactérias da rizosfera de um bambuzal",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ROBERTA PAULA DE JESUS",
      estudantes: "Igor Cabral Servalo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "08:00 - 09:00",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Rízia da Silva Andrade ",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Fabio José Gonçalves (AgroLab)",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "INFLUÊNCIA DE TRÊS BIOPRODUTOS EM PARÂMETROS AGRONÔMICOS DE CULTIVAR DE MILHO PARA SILAGEM",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RODRIGO MARTINEZ CASTRO",
      estudantes: "HYGOR NEVES BERQUÓ DE PASSOS", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "13:30-14:30",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fábio José Gonçalves",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberta Paula de Jesus",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Uso do sensoriamento remoto no monitoramento de plantas daninhas na cana-de-açúcar",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "RODRIGO MARTINEZ CASTRO",
      estudantes: "GABRIEL NETTO NAVES", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "10:45-11:45",
      place: "Auditório Bloco S (Campus 2)",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Luiz Carlos Barcellos",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Vanessa Honorato Domingos",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.AGRONOMIA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A influência do treinamento em simulador de voo no âmbito de gerenciamento de emergências",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Gabriel Figueiredo Vilela", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "William de Carvalho Xavier",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Francis Ferronato",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "O voo a vela como ferramenta de desenvolvimento de habilidades cognitivas para pilotos",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Raul Francé Monteiro",
      estudantes: "Otávio Augusto Costa Lara", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "10:45-12:15",
      place: "204D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nagi Hanna Salm Costa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Salmen Chaquip Bukzem",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "O uso da inteligência artificial aplicado na aviação geral",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Alessandro Roque Dias Júnior ", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:00-10:30",
      place: "602D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Raul Francé Monteiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Francis Ferronato",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "MODELAGEM MATEMÁTICA E META-HEURÍSTICA ANSGA-II APLICADAS NA OTIMIZAÇÃO DE CUSTO E EMISSÃO DE CO2 PARA O PROBLEMA DO TRANSPORTE INTERMODAL DE SOJA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALEXANDRE RIBEIRO",
      estudantes: "Eliel Lucas de Oliveira Silba", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "20:30-22:00",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Maria José Pereira Dantas",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Max Gontijo de Oliveira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Customer Experience",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "Andréluiz da Silva Fernandes",
      estudantes: "Geraldo Cordeiro de Toledo Neto", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:15-08:45",
      place: "205D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nagi Hanna Salm Costa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Impactos dos emissores de gases de efeito estufa e estratégias de sustentabilidade na aviação",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Vitor Ricardo Fiuza Teodoro Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:15-08:45",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ycarim Melgaço Barbosa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "William de Carvalho Xavier",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Dificuldades com a implantação do SRM na aviação executiva e o potencial para uma padronização nos níveis de segurança operacionais adequados",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Raul Francé Monteiro",
      estudantes: "Kaê Felipe de Frazão Tibúrcio", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:00-10:30",
      place: "202D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Anna Paula Bechepeche",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "William de Carvalho Xavier",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "IMPLEMENTAÇÃO COMPUTACIONAL PARA O AUTOAPRENDIZADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "ALBERTO VILELA CHAER",
      estudantes: "ÍGOR SOARES SIQUEIRA", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "18/12",
      time: "17:00-18:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "LUCIANO CAETANO",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "MURILO MEIRON DE PÁDUA SOARES",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A influência do treinamento em simulador de voo no âmbito de gerenciamento de emergências",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "ANNA PAULA BECHEPECHE",
      estudantes: "Gabriel Figueiredo Vilela", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "10:45-12:15",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "William de Carvalho Xavier",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Francis Ferronato",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "O DESIGN DE AMBIENTES COMO AGENTE PARA A REVITALIZAÇÃO DA BIBLIOTECA PÚBLICA MUNICIPAL MARIETA TELLES MACHADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Marília Teixeira",
      estudantes: "Eliane Souto Silva", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "07:15-08:15",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Genilda Alexandria",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tai Hsuan An",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESIGN DE AMBIENTES PARA ESPAÇOS MAKER",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Tai Hsuan An",
      estudantes: "Julio Marques da Silva Santos", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "08:30-09:30",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marília Teixeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Denise Pacheco",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "VALORIZAÇÃO DE ELEMENTOS NATIVOS DO CERTADO GOIANO NO DESIGN DE JOIAS CONTEMPORÂNEAS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Tai Hsuan An",
      estudantes: "Daniel Sabino de Freitas Neves", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "09:45-10:45",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Vânia Bueno",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Maurício Azeredo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "INTRODUÇÃO DE ELEMENTOS CULTURAIS BRASILEIROS EM CRIAÇÃO DE HISTÓRIAS EM QUADRINHOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Tai Hsuan An",
      estudantes: "Gabriel Franco de Sousa Gomes Gerais", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "12/12",
      time: "11:00-12:00",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Nélio Neves",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "João Paulo Alves",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESIGN COMO FERRAMENTA DE CONTRIBUIÇÃO PARA LIDAR COM A PROCRASTINAÇÃO ACADÊMICA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Marília Teixeira",
      estudantes: "Mateus do Carmo Abreu", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "07:15-08:15",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Genilda Alexandria",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Ana Paula Bandeira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "ESTRATÉGIAS SUSTENTÁVEIS PARA DESIGN DE AMBIENTES EDUCACIONAIS BASEADOS EM VALORES HUMANOS: A ESCOLA SATHYA SAY",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Marília Teixeira",
      estudantes: "Clara Resplande Lopes", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "08:30-09:30",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Genilda Alexandria",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tai Hsuan An",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "COLORDALT: DESIGN E ACESSIBILIDADE PARA COMPOSIÇÃO DE PALETAS DE COR POR PROFISSIONAIS CRIATIVOS COM DALTONISMO",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "Genilda Alexandria",
      estudantes: "Gabriel Gomes Martins", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "09:45-10:45",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Paula Bandeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Nancy de Melo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "RPG E SEU POTENCIAL NO DESENVOLVIMENTO DE HABILIDADES SOCIAIS E PEDAGÓGICAS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Tai Hsuan An",
      estudantes: "Eduardo Rodelli Magri", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "11:00-12:00",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Paula Bandeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: " João Paulo Alves",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "PROJETO DE TALHERES PARA PESSOAS COM REDUÇÃO DE MOBILIDADE DOS MEMBROS SUPERIORES",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Denise Pacheco",
      estudantes: "Sara Machado Firmino", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "07:15-08:15",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Tai Hsuan An",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Genilda Alexandria",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "MOBILIARIO PARA ESPACOS REDUZIDOS, AUTO PRODUÇÃO",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "Maurício Azeredo",
      estudantes: "Diogo Silva Póvoa", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "08:30-09:30",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Tai Hsuan An",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marília Teixeira",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "STOP MOTION COMO FERRAMENTA DE CONSCIENTIZAÇÃO SOBRE A IMPORTÂNCIA DO SÍTIO ARQUEOLÓGICO DE SERRANÓPOLIS - GOIÁS",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "Genilda Alexandria",
      estudantes: "Natália Cordeiro Rocha", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:45-10:45",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Paula Bandeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Flávio Gomes",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A APROPRIAÇÃO DE SÍMBOLOS NO GOVERNO BOLSONARO: O AUDIOVISUAL E SUAS POSSIBILIDADES DE REFLEXÃO",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Ana Paula Bandeira",
      estudantes: "João Sávio Almeida Carvalho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "11:00-12:00",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Flávio Gomes",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marcos Costa",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "HAVVA DESIGN BOX: O DESIGN THINKING COMO ABORDAGEM PARA SE PENSAR O BEM-ESTAR DO DESIGNER",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "Genilda Alexandria",
      estudantes: "Luiza Carvalho e Sousa", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:15",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Paula Bandeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marcos Costa",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "DESIGN E DESENVOLVIMENTO INFANTIL: O USO DE PERSONAGENS PARA UM CONSULTÓRIO PEDIÁTRICO MAIS HUMANIZADO",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "Genilda Alexandria",
      estudantes: "Pedro Henrique da Veiga Rodarte Vale", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "08:30-09:30",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Paula Bandeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Cláudio Aleixo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "AFETO SONORO: UMA EXPERIÊNCIA IMERSIVA ATRAVÉS DA MÚSICA E DO DESIGN",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Ana Paula Bandeira",
      estudantes: "Camilla Giovanna Carvalho Carneiro Brazão", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "09:45-10:45",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marília Teixeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Genilda Alexandria",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "BORBOLETAS DE VIDRO: JOIAS SEM PARADIGMAS - PROJETO DE MARCA DE JOIAS INCLUSIVA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Ana Paula Bandeira",
      estudantes: "Lucas Vinícius Valadares", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "11:00-12:00",
      place: "208D, área III",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Fernanda Manço",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Genilda Alexandria",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A importância da gestão de riscos para a eficiência operacional em aeroportos",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "Anna Paula Bechepeche",
      estudantes: "Jhulie Ferreira Holanda", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "13/12",
      time: "13:30-15:00",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Raul Francé Monteiro",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Salmen Chaquip Buckzem",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "Hidrogênio: O Futuro Combustível da Aviação Sustentável",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "ANDRELUIZ DA SILVA FERNANDES",
      estudantes: "Felipe Fante de Oliveira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "14/12",
      time: "09:00-10:30",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Humberto César Machado",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Márcio dos Santos",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "A evolução dos materiais e dos padrões de manutenção na construção aeronáutica como fator de mitigação no descarte de resíduos",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "ANDRELUIZ DA SILVA FERNANDES",
      estudantes: "Osmar Paulo de Freitas Vieira Reis", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "15/12",
      time: "07:15-08:45",
      place: "207D, área II",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Salmen Chaquip Bukzem",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Roberto Márcio dos Santos",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    {
      title: "ACESSIBILIDADE DIGITAL",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "Maurício Azeredo",
      estudantes: "Janer Rêgo", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "08/12",
      time: "08:45-09:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marília Teixeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tai Hsuan An",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "DESIGN DE AMBIENTES: DO APÁTICO AO EMPÁTICO",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "Maurício Azeredo",
      estudantes: "Maria Eduarda Teixeira", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "08/12",
      time: "09:30-10:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marília Teixeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tai Hsuan An",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "TELAS NA INFÂNCIA PÓS-PANDEMIA: EXPLORANDO AS POSSÍVEIS DIFICULDADES E ESTRATÉGIAS DE INTERVENÇÃO ATRAVÉS DE ATIVIDADES SENSORIAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      orientador: "Maurício Azeredo",
      estudantes: "Mariana Assmus", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "08/12",
      time: "10:15-11:00",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marília Teixeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Tai Hsuan An",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "PRÁTICA DE EXERCÍCIOS FÍSICOS EM ESPAÇOS RESIDENCIAIS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Tai Hsuan An",
      estudantes: "João Vitor Carvalho", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "08/12",
      time: "11:00-11:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marília Teixeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Maurício Azeredo",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "O USO DE LIVRO EXPERIMENTAL NO PROCESSO DE ALFABETIZAÇÃO DE CRIANÇAS: UM ESTUDO SOBRE O IMPACTO NA FORMAÇÃO DE PROFESSORES E NO DESENVOLVIMENTO DAS HABILIDADES DE LEITURA E ESCRITA",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Ana Paula Bandeira",
      estudantes: "Rodrigo Fidelis", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "08:00-08:45",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Marcos Costa",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Genilda Alexandria",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "O OURO DO CERRADO GOIANO: UM PROJETO DE MANUTENÇÃO E VALORIZAÇÃO DE PRODUTOS COM INDICAÇÃO GEOGRÁFICA ATRAVÉS DA ÓTICA DO DESIGN",
      titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      orientador: "Genilda Alexandria",
      estudantes: "Débora Antônia", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "08:45-09:30",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Paula Bandeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Marcos Costa",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    {
      title: "A VISUALIDADE DAS OBRAS DE J.R.R. TOLKIEN REPRESENTADA POR MEIO DE INFOGRÁFICOS",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "Marcos Costa",
      estudantes: "Gustavo Mendonça", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "11/12",
      time: "09:30-10:15",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "Ana Paula Bandeira",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "Genilda Alexandria",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.DESIGN], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
    },
    /*
    {
      title: "",
      titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
      orientador: "",
      estudantes: "", //se tiver mais de 1, separar por ;
      warning: "", //deixe vazio
      date: "",
      time: "",
      place: "",
      titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
      nomePrimeiroMembroBanca: "",
      titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
      nomeSegundoMembroBanca: "",
      titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
      nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
      curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
      tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
    },
    */
  ]
  
  TCCs = TCCs.sort((a, b) => {
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    if(a.time < b.time) return -1;
    if(a.time > b.time) return 1;
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  
  export const apresentacoes_TCC = [
  
    {
      tccs: TCCs,
    },
    
  ]
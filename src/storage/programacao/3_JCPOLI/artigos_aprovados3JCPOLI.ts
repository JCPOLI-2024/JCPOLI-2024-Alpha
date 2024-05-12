// Storage para os artigos que foram aprovados durante a 3º Edição da JCPOLI
let Palestras = [
    // Apresentação do artigo: "Os biocombustíveis e a inovação de ruptura na aviação civil"
    {
      title: "Os biocombustíveis e a inovação de ruptura na aviação civil",
      instructor: "Nathan Santana do Couto Souza",
      date: "22/04/2024",
      time: '19:00',
      place: 'Online: Teams',
      link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1713537465984?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
    },
    
    // Apresentação do artigo: "Protegendo saúde digital: ajustando IOT à LGPD para privacidade"
    {
      title: "Protegendo saúde digital: ajustando IOT à LGPD para privacidade",
      instructor: "Matheus Rodrigues Tenaglia",
      date: "22/04/2024",
      time: '19:30',
      place: 'Online: Teams',
      link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1713537465984?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
    },
    
    // Apresentação do artigo: "Monitoramento de redes de computadores utilizando grafana"
    {
      title: "Monitoramento de redes de computadores utilizando grafana",
      instructor: "Gabriel Castro Gonçalves",
      date: "22/04/2024",
      time: '20:00',
      place: 'Online: Teams',
      link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1713537465984?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
    },
    
    // Apresentação do artigo: "Indústria 4.0: digitalização de fábricas, sistemas de monitoramento, coleta de dados e automação"
    {
      title: "Indústria 4.0: digitalização de fábricas, sistemas de monitoramento, coleta de dados e automação",
      instructor: "Gabriel Sales Mendes da Silva",
      date: "22/04/2024",
      time: '20:30',
      place: 'Online: Teams',
      link:"https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1713537465984?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2272de42cb-2066-4981-b6e6-af2344b756bd%22%7d"
    }
    
      
      
      
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
    
let CienciaEmCasa = [

    {
      title: "xx",
      instructor: "xx",
      institution: "xx",
      desc: `xx`,
      date: "11/04",
      time: 'xx',
      place: 'xx',
      
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
  
  
  CienciaEmCasa = CienciaEmCasa.sort((a, b) => {
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
      palestras: CienciaEmCasa,
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
  

// Esse arquivo é destinado para criar rotas do site
// Aqui se situam tanto rotas da Politécnica, quanto rotas da JCPOLI
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
//########################################## Pagina da Escola Politecnica e de Artes - Rotas que estão na Politecnica  ##########################################
    /*{
      path: "/",
      name: "home",
      component: Home
    },*/
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "evento2" */ "./views/Escola.vue")
    },
    {
      path: "/manutencao",
      name: "manutencao",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/Maintenance.vue")
    },
    // Pagina da JCPOLI - Página de manutenção
     {
       path: "/Manutencao",
       name: "Manutencao",
       component: () =>
         import(/* webpackChunkName: "account" */ "./views/MaintenanceJCPOLI.vue")
     },
    {
      path: "/TCC",
      name: "TCC",
      component: () =>
        import(/* webpackChunkName: "account" */ "./views/TCC.vue")
    },
    /*{
      path: "/minicursos",
      name: "minicursos",
      component: () =>
        import( "./views/MiniCourses.vue")
    },*/
    {
      path: "/hackathon",
      name: "hackaton",
      component: () =>
        import(/* webpackChunkName: "hackaton" */"./views/Hackaton.vue")
        //import(/* webpackChunkName: "minicurso" */ "./views/MiniCourses.vue")
    }, 
    {
      path: "/palestras",
      name: "palestras",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/Palestras.vue")
    },

    {
      path: "*",
      component: () =>
        import(/* webpackChunkName: "ops" */ "./views/four04.vue")
    },
///////////////////////////////////////////////// Pagina da JCPOLI - Rotas que estão na JCPOLI ///////////////////////////////////////////////////////////////////////////////
    // Adicionado lógica para que antes de cada aba selecionada, tenhamos em qual edição da JCPOLI está sendo selecionada
    // Ou seja, temos uma unica rota para as abas "Home", "Escoal", "Palestras". Porém o que vai determinar qual informação que será exibida é o número da edição
    // Assim, podendo ter a rota "JCPOLI1/Palestras" para exibir as palestras que ocorrer na 1º edição da JCPOLI. 
    // Ou, "JCPOLI2/Palestras" para exibir as palestras que ocorrer na 2º edição da JCPOLI
    // E assim sucessivamente
    {
      path: "/JCPOLI:edicao", // Definindo o parâmetro :edicao, assim, toda rota da Home vai ser: JCPOLI1, JCPOLI2, JCPOLI3, seguindo de acordo com qual edição vai estar selecionada 
      //name: "Home",
      component: () =>
        import(/* webpackChunkName: "JCPOLI" */"./views/Jcpoli.vue"),
    },
    // Rota para a aba "Escola" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Escola",
      name: "Escola",
      component: () =>
        import(/* webpackChunkName: "escola" */ "./views/EscolaJCPOLI.vue")
    },
    // Rota para a aba "Palestras" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Palestras",
      name: "Palestras",
      component: () =>
        import(/* webpackChunkName: "palestra" */ "./views/PalestrasJCPOLI.vue")
    },
   // Rota para a aba "Minicursos" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Minicursos",
      name: "Minicursos",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/MiniCoursesJCPOLI.vue")
    },
   // Rota para a aba "Competições" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Competicoes",
      name: "Competicoes",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/CompeticaoJCPOLI.vue")
    },
    // Rota para a aba "Ciencia em Casa" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/CienciaEmCasa",
      name: "CienciaEmCasa",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/CienciaEmCasaJCPOLI.vue")
    },
    // Rota para a aba "Exposições" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Exposicoes",
      name: "Exposicoes",
      component: () =>
        import(/* webpackChunkName: "exposicoes" */ "./views/ExposicoesJCPOLI.vue")
    },
    // Rota para a aba "Publicações" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Anais",
      name: "Anais",
      component: () =>
        import(/* webpackChunkName: "egressos" */ "./views/AnaisJCPOLI.vue")
    },
    // Rota para a aba "Orientações" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Orientacoes",
      name: "Orientacoes",
      component: () =>
        import(/* webpackChunkName: "orientacoes" */ "./views/SubmissionRulesJCPOLI.vue")
    },
    // Rota para a aba "Fotos" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Fotos",
      name: "Fotos",
      component: () =>
        import(/* webpackChunkName: "orientacoes" */ "./views/FotosJCPOLI.vue")
    },
    // Rota para a aba do "Edições" dos palestrantes dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Edicoes",
      name: "Edicoes",
      component: () =>
        import(/* webpackChunkName: "edicoes" */ "./views/EdicoesJCPOLI.vue")
    },
    // Rota para a aba do perfil dos palestrantes dentro da aba JCPOLI
    // Como não é algo que depende da edição para aparecer, então não tema lógica da JCPOLI:Edição
    {
      path: "/profile",
      name: "speakerProfile",
      component: () =>
        import(/* webpackChunkName: "speakerProfile" */ "./views/SpeakerProfile.vue")
    },

// //########################################## Pagina da JCPOLI e Escola Politecnica de Artes - Rotas inativas de abas não utilizadas por enquanto ##########################################
//     // Para a página de programação da Escola Politecnica
//     {
//       path: "/programacao",
//       component: () =>
//         import(/* webpackChunkName: "programacao" */ "./views/Programacao.vue")
//     },
//     // Para a página de programação da JCPOLI
//     {
//       path: "/Programacao",
//       component: () =>
//         import(/* webpackChunkName: "programacao" */ "./views/ProgramacaoJCPOLI.vue")
//     },
//     //Pagina da JCPOLI -  Pagina de Egressos
//     {
//       path: "/Egressos",
//       component: () =>
//         import(/* webpackChunkName: "egressos" */ "./views/EgressosJCPOLI.vue")
//     },

//########################################## Pagina da JCPOLI - Rotas que estão na JCPOLI mas que estão inutilizadas ##########################################
    // {
    //   path: "/cadastro",
    //   name: "cadastro",
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/SignUp/SignUp.vue")
    // },
    // {
    //   path: "/cadastro/confirmacao",
    //   name: "confirmacao",
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/SignUp/Confirm.vue")
    // },
    // {
    //   path: "/conta",
    //   name: "conta",
    //   component: () =>
    //     import(/* webpackChunkName: "account" */ "./views/Admin/MyAccount.vue")
    // },

////////////////////////////////////////////////// Pagina da JCPOLI - Rascunho para lógica de rotas usando children  ////////////////////////////////////////////////////////////////////////////////
    // Rota para a aba geral JCPOLI
    // {
    //   path: "/JCPOLI:edicao", // Definindo o parâmetro :edicao
    //   //name: "Homej",
    //   component: () =>
    //     import(/* webpackChunkName: "JCPOLI" */"./views/Jcpoli.vue"),
    // // },
    //   children: [
    //     // Pagina da JCPOLI - Home
    //     //  {
    //     //    path: "",
    //     //    name: "Homej",
    //     //    component: () =>
    //     //      import(/* webpackChunkName: "JCPOLI" */"./views/Jcpoli.vue")
    //     //  },
    //       {
    //       path: "escolaj",
    //       name: "escolaj",
    //       component: Escolaj,
    //       },
    //      {
    //        path: "palestrasj",
    //        name: "palestrasj",
    //        component: () =>
    //          import(/* webpackChunkName: "palestra" */ "./views/Palestrasj.vue")
    //      },
    //    ]
    // },

//########################################## Pagina da JCPOLI- Lógica antiga  ##########################################

//     // Pagina da JCPOLI - Home
//     {
//       path: "/JCPOLI",
//       name: "JCPOLI",
//       component: () =>
//         import(/* webpackChunkName: "JCPOLI" */"./views/Jcpoli.vue")
//     },
//     // Pagina da JCPOLI -  Pagina dos perfil dos palestrantes 
//     {
//       path: "/profile",
//       name: "speakerProfile",
//       component: () =>
//         import(/* webpackChunkName: "speakerProfile" */ "./views/SpeakerProfile.vue")
//     },
//     // Pagina da JCPOLI -  Pagina da Escola
//     {
//       path: "/escolaj",
//       name: "escolaj",
//       component: () =>
//         import(/* webpackChunkName: "evento2" */ "./views/Escolaj.vue")
//     },
//     // Pagina da JCPOLI -  Pagina das Palestras
//     {
//       path: "/palestrasj",
//       name: "palestrasj",
//       component: () =>
//         import(/* webpackChunkName: "minicurso" */ "./views/Palestrasj.vue")
//     },
//     // Pagina da JCPOLI -  Pagina de Minicuros
//     {
//       path: "/minicursosj",
//       name: "minicursosj",
//       component: () =>
//         import(/* webpackChunkName: "minicurso" */ "./views/MiniCoursesj.vue")
//     },
//     // Pagina da JCPOLI -  Pagina de Competições
//     {
//       path: "/competicoesj",
//       name: "competicoes",
//       component: () =>
//         import(/* webpackChunkName: "programacao" */ "./views/Competicaoj.vue")
//     },
//     // Pagina da JCPOLI -  Pagina de Exposições
//     {
//       path: "/exposicoesj",
//       name: "exposicoesj",
//       component: () =>
//         import(/* webpackChunkName: "exposicoes" */ "./views/Exposicoesj.vue")
//     },
//     // Pagina da JCPOLI -  Pagina de Publicações/Anais
//     {
//       path: "/anaisj",
//       name: "anaisj",
//       component: () =>
//         import(/* webpackChunkName: "egressos" */ "./views/Anaisj.vue")
//     },
//     // Pagina da JCPOLI -  Pagina de Orientações
//     {
//       path: "/orientacoesj",
//       name: "orientacoesj",
//       component: () =>
//         import(/* webpackChunkName: "orientacoes" */ "./views/SubmissionRulesj.vue")
//     },
//     {
//       path: "/edicoesj",
//       name: "edicoesj",
//       component: () =>
//         import(/* webpackChunkName: "edicoes" */ "./views/Edicoesj.vue")
//     },
    
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path.startsWith("/manutencao")) {
//     next();
//   } else {
//     next("/manutencao");
//   }
// });

export default router;

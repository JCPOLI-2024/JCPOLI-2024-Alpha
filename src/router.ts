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
    // Rota para a sub-aba "Escolaj" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao", // Definindo o parâmetro :edicao
      //name: "Homej",
      component: () =>
        import(/* webpackChunkName: "JCPOLI" */"./views/JCPOLI.vue"),
    },
    // Rota para a sub-aba "Palestrasj" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Escola",
      name: "Escola",
      component: () =>
        import(/* webpackChunkName: "escola" */ "./views/EscolaJCPOLI.vue")
    },
    {
      path: "/JCPOLI:edicao/Palestras",
      name: "Palestras",
      component: () =>
        import(/* webpackChunkName: "palestra" */ "./views/PalestrasJCPOLI.vue")
    },
    // Pagina da JCPOLI -  Pagina de Minicuros
    {
      path: "/JCPOLI:edicao/Minicursos",
      name: "Minicursos",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/MiniCoursesJCPOLI.vue")
    },
    // Pagina da JCPOLI -  Pagina de Competições
    {
      path: "/JCPOLI:edicao/Competicoes",
      name: "Competicoes",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/CompeticaoJCPOLI.vue")
    },
    // Pagina da JCPOLI -  Pagina de Exposições
    {
      path: "/JCPOLI:edicao/Exposicoes",
      name: "Exposicoes",
      component: () =>
        import(/* webpackChunkName: "exposicoes" */ "./views/ExposicoesJCPOLI.vue")
    },
    // Pagina da JCPOLI -  Pagina de Publicações/Anais
    {
      path: "/JCPOLI:edicao/Anais",
      name: "Anais",
      component: () =>
        import(/* webpackChunkName: "egressos" */ "./views/AnaisJCPOLI.vue")
    },
    // Pagina da JCPOLI -  Pagina de Orientações
    {
      path: "/JCPOLI:edicao/Orientacoes",
      name: "Orientacoes",
      component: () =>
        import(/* webpackChunkName: "orientacoes" */ "./views/SubmissionRulesJCPOLI.vue")
    },
       
    {
      path: "/profile",
      name: "speakerProfile",
      component: () =>
        import(/* webpackChunkName: "speakerProfile" */ "./views/SpeakerProfile.vue")
    },

    {
      path: "/Edicoes",
      name: "Edicoes",
      component: () =>
        import(/* webpackChunkName: "edicoes" */ "./views/EdicoesJCPOLI.vue")
    },

// //########################################## Pagina da JCPOLI e Escola Politecnica de Artes - Rotas ativas, porém de dificil acesso ##########################################
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

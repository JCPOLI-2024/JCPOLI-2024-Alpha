import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
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
    // {
    //   path: "/manutencao",
    //   name: "manutencao",
    //   component: () =>
    //     import(/* webpackChunkName: "account" */ "./views/Maintenance.vue")
    // },
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

    // Pagina da JCPOLI - Home
    {
      path: "/JCPOLI",
      name: "JCPOLI",
      component: () =>
        import(/* webpackChunkName: "JCPOLI" */"./views/Jcpoli.vue")
    },
    // Pagina da JCPOLI -  Pagina dos perfil dos palestrantes 
    {
      path: "/profile",
      name: "speakerProfile",
      component: () =>
        import(/* webpackChunkName: "speakerProfile" */ "./views/SpeakerProfile.vue")
    },
    // Pagina da JCPOLI -  Pagina da Escola
    {
      path: "/escolaj",
      name: "escolaj",
      component: () =>
        import(/* webpackChunkName: "evento2" */ "./views/Escolaj.vue")
    },
    // Pagina da JCPOLI -  Pagina das Palestras
    {
      path: "/palestrasj",
      name: "palestrasj",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/Palestrasj.vue")
    },
    // Pagina da JCPOLI -  Pagina de Minicuros
    {
      path: "/minicursosj",
      name: "minicursosj",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/MiniCoursesj.vue")
    },
    // Pagina da JCPOLI -  Pagina de Competições
    {
      path: "/competicoesj",
      name: "competicoes",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/Competicaoj.vue")
    },
    // Pagina da JCPOLI -  Pagina de Exposições
    {
      path: "/exposicoesj",
      name: "exposicoesj",
      component: () =>
        import(/* webpackChunkName: "exposicoes" */ "./views/Exposicoesj.vue")
    },
    // Pagina da JCPOLI -  Pagina de Publicações/Anais
    {
      path: "/anaisj",
      name: "anaisj",
      component: () =>
        import(/* webpackChunkName: "egressos" */ "./views/Anaisj.vue")
    },
    // Pagina da JCPOLI -  Pagina de Orientações
    {
      path: "/orientacoesj",
      name: "orientacoesj",
      component: () =>
        import(/* webpackChunkName: "orientacoes" */ "./views/SubmissionRulesj.vue")
    },

    // Pagina da JCPOLI - Rotas ativas, porém de dificil acesso
    // Para a página de programação da Escola Politecnica
    {
      path: "/programacao",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/Programacao.vue")
    },
    // Para a página de programação da JCPOLI
    {
      path: "/programacaoj",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/Programacaoj.vue")
    },
    // {
    //   path: "/egressos",
    //   component: () =>
    //     import(/* webpackChunkName: "egressos" */ "./views/Egressos.vue")
    // },

    // Pagina da JCPOLI - Rotas que estão na JCPOLI mas que estão inutilizadas
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

    /* REMOVE PATH JGES
    {
      path: "/jges",
      component: () =>
        import(/* webpackChunkName: "jges"  "./views/JGES.vue")
    },
    */
   
    
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

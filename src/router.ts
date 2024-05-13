// Esse arquivo é destinado para criar rotas do site
// Aqui se situam tanto rotas da JCPOLI
import Vue from "vue";
import Router from "vue-router";
import Jcpoli from "./views/Jcpoli.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
///////////////////////////////////////////////// Pagina da JCPOLI - Rotas que estão na JCPOLI ///////////////////////////////////////////////////////////////////////////////
    // Adicionado lógica para que antes de cada aba selecionada, tenhamos em qual edição da JCPOLI está sendo selecionada
    // Ou seja, temos uma unica rota para as abas "Home", "Escoal", "Palestras". Porém o que vai determinar qual informação que será exibida é o número da edição
    // Assim, podendo ter a rota "JCPOLI1/Palestras" para exibir as palestras que ocorrer na 1º edição da JCPOLI. 
    // Ou, "JCPOLI2/Palestras" para exibir as palestras que ocorrer na 2º edição da JCPOLI
    // E assim sucessivamente
    
    // Para que quando inicia a aplicação "8080/", não cair na página 404, assim, o caminho "/" redireciona para a ultima edição
    // Futuramente mudar para redirecionar a página de edições
    {
      path: "/",
      redirect: "/JCPOLI3" // ou para a edição que desejar
    },
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
        import(/* webpackChunkName: "escola" */ "./views/Escola.vue")
    },
    // Rota para a aba "Palestras" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Palestras",
      name: "Palestras",
      component: () =>
        import(/* webpackChunkName: "palestra" */ "./views/Palestras.vue")
    },
   // Rota para a aba "Minicursos" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Minicursos",
      name: "Minicursos",
      component: () =>
        import(/* webpackChunkName: "minicurso" */ "./views/MiniCourses.vue")
    },
   // Rota para a aba "Competições" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Competicoes",
      name: "Competicoes",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/Competicao.vue")
    },
    // Rota para a aba "Ciencia em Casa" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/CienciaEmCasa",
      name: "CienciaEmCasa",
      component: () =>
        import(/* webpackChunkName: "programacao" */ "./views/CienciaEmCasa.vue")
    },
    // Rota para a aba "Exposições" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Exposicoes",
      name: "Exposicoes",
      component: () =>
        import(/* webpackChunkName: "exposicoes" */ "./views/Exposicoes.vue")
    },
    // Rota para a aba "Publicações" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Anais",
      name: "Anais",
      component: () =>
        import(/* webpackChunkName: "egressos" */ "./views/Anais.vue")
    },
    // Rota para a aba "Orientações" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Orientacoes",
      name: "Orientacoes",
      component: () =>
        import(/* webpackChunkName: "orientacoes" */ "./views/Orientacoes.vue")
    },
    // Rota para a aba "Fotos" dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Fotos",
      name: "Fotos",
      component: () =>
        import(/* webpackChunkName: "orientacoes" */ "./views/Fotos.vue")
    },
    // Rota para a aba do "Edições" dos palestrantes dentro da aba JCPOLI
    {
      path: "/JCPOLI:edicao/Edicoes",
      name: "Edicoes",
      component: () =>
        import(/* webpackChunkName: "edicoes" */ "./views/Edicoes.vue")
    },
    // Rota para a aba do perfil dos palestrantes dentro da aba JCPOLI
    // Como não é algo que depende da edição para aparecer, então não tema lógica da JCPOLI:Edição
    {
      path: "/profile",
      name: "speakerProfile",
      component: () =>
        import(/* webpackChunkName: "speakerProfile" */ "./views/SpeakerProfile.vue")
    },
  
//########################################## Rotas para exibir páginas de manutenção ou erro ##########################################
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
      path: "*",
      component: () =>
        import(/* webpackChunkName: "ops" */ "./views/four04.vue")
    },

// //########################################## Pagina da JCPOLI e Escola Politecnica de Artes - Rotas inativas de abas não utilizadas por enquanto ##########################################
//     // Para a página de programação da JCPOLI
//     {
//       path: "/Programacao",
//       component: () =>
//         import(/* webpackChunkName: "programacao" */ "./views/Programacao.vue")
//     },
//     //Pagina da JCPOLI -  Pagina de Egressos
//     {
//       path: "/Egressos",
//       component: () =>
//         import(/* webpackChunkName: "egressos" */ "./views/Egressos.vue")
//     },

////////////////////////////////////////////////// Pagina da JCPOLI - Rascunho para lógica de rotas usando children (não consegui dar certo) ////////////////////////////////////////////////////////////////////////////////
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

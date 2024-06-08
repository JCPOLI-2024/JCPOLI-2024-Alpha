<!-- Pagina da JCPOLI - Pagina para Orientações da 3º JCPOLI-->
<template>
    <div class="view">
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-5">
            <div class="info-arquivo">
              <h4>Orientações aos Professores e Alunos:</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/Orientações_professores_e_alunos_II_JC_POLI_v2.pdf"
                target="_blank"
              >
                ACESSAR ORIENTAÇÕES
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
  
            <div class="info-arquivo">
              <h4>Edital do Desafio de Ciência dos Dados</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/Edital-DESAFIO-CIÊNCIA DOS DADOS-VF-2024-1.pdf"
                target="_blank"
              >
                ACESSAR EDITAL
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
  
          <!--
            <div class="info-arquivo">
              <h4>Edital do I Concurso de Fotografia da Escola Politécnica e de Artes</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/Concurso_Artes.pdf"
                target="_blank"
              >
                ACESSAR EDITAL
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
  
            <div class="info-arquivo">
              <h4>Edital do CodeCraft</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/Edital-CodeCraft-2023-1.pdf"
                target="_blank"
              >
                ACESSAR EDITAL
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
            -->
  
            <div class="info-arquivo">
              <h4>Certificado:</h4>
              <v-btn
                type="submit"
                color="primary"
                href="https://sites.pucgoias.edu.br/certificados/participantes/2940"
                target="_blank"
              >
                ACESSAR CERTIFICADO
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
  
            <div class="info-arquivo">
              <h4>Template de artigo:</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/Template_Artigo.docx"
                target="_blank"
              >
                ACESSAR TEMPLATE
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
  
            <!--
            <div class="info-arquivo">
              <h4>Template de resumo estendido:</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/Template_resumo_expandido_JCPOLI.docx"
                target="_blank"
              >
                ACESSAR TEMPLATE
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
          -->
  
  
            <div class="info-arquivo">
              <h4>Edital para submissão de artigo:</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/edital_III_JCPOLI.pdf"
                target="_blank"
              >
                ACESSAR EDITAL
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
  
            <div class="info-arquivo">
              <h4>Formatação dos artigos:</h4>
              <v-btn
                type="submit"
                color="primary"
                href="/assets/GUIA_DE_FORMATAÇÃO_DO_ARTIGO.pdf"
                target="_blank"
              >
                ACESSAR FORMATAÇÃO
                <v-icon right dark>cloud_download</v-icon>
              </v-btn>
            </div>
  
  
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  // import { Component, Vue } from "vue-property-decorator";
  
  import { mixins } from 'vue-class-component'
  // import PhotoHeader from "@/components/organization/PhotoHeader.vue";
  // import Main from "@/components/organization/Main.vue";
  // import Paragraph from "@/components/organization/Paragraph.vue";
  // import Login from "@/views/Login.vue";
  // import { getSession, refreshSession } from "../services/authentication";
  // import { CognitoUserSession } from "amazon-cognito-identity-js";
  import LoaderMixin from '@/mixins/loader'
  
  // @Component({
  //   components: {
  //     PhotoHeader,
  //     Main,
  //     Paragraph,
  //     Login
  //   }
  // })
  export default class SubmissionRules extends mixins(LoaderMixin) {
    private panel = [true, false, false, false]
  
    //   private async created() {
    //     try {
    //       this.showLoader();
    //       const session = await getSession();
  
    //       if (session instanceof CognitoUserSession) {
    //         if (session.isValid()) {
    //           this.hideLoader();
    //           this.$router.push("/conta");
    //         } else {
    //           const newSession = await refreshSession(session.getRefreshToken());
  
    //           if (newSession instanceof CognitoUserSession) {
    //             this.hideLoader();
    //             this.$router.push("/conta");
    //           } else {
    //             this.hideLoader();
    //             this.$router.push("/submissao");
    //           }
    //         }
    //       }
    //     } catch (error) {
    //       this.hideLoader();
    //       this.$router.push("/submissao");
    //     }
    //   }
  }
  </script>
  
  <style scoped>
  #aceitacao li {
    list-style-type: disc !important;
  }
  
  #temas li {
    list-style-type: decimal-leading-zero !important;
    margin-left: 10px;
  }
  
  .ordenado li {
    list-style-type: decimal !important;
  }
  
  .titles {
    font-size: 16px !important;
    font-weight: 500;
  }
  
  .info-arquivo {
    margin-top: 3rem;
  }
  
  @media screen and (max-width: 576px) {
    .row {
      flex-direction: column-reverse;
    }
  
    .col-md-5 {
      margin-bottom: 3rem;
    }
  }
  
  .v-btn {
    font-size: 1.1rem;
    width: 18rem;
  }
  </style>
  
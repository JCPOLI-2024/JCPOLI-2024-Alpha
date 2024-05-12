<!-- Pagina da JCPOLI -  Pagina da aba "Ciencia em Casa" que foi incluida a partir da 3º edição da JCPOLI  -->
<template>
    <v-app class="home" id="inspire">
      <!-- 1º Edição da JCPOLI -->
      <template v-if="edicaoAtual === 1">
        <!--  -->
      </template>
      <!-- 2º Edição da JCPOLI -->
      <template v-else-if="edicaoAtual === 2">
        <!-- -->
      </template>
      <!-- 3º Edição da JCPOLI -->
      <template v-else-if="edicaoAtual === 3">
        <CienciaEmCasaJ3 />
      </template>
     
     
    </v-app>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import CienciaEmCasaJ3 from '@/components/abasJCPOLI/CienciaEmCasaJ3.vue' // Página de CienciaEmCasa da 1º Edição da JCPOLI
  
  @Component({
    components: {
      CienciaEmCasaJ3,
    }
  })
  export default class CienciaEmCasa extends Vue {
  
    // Para indentificar atraves do link em qual versão da JCPOLI tá
    get edicaoAtual() {
      // Obtém o caminho completo da rota atual
      const caminho = this.$route.fullPath;
      // Usa expressão regular para extrair o número da edição da rota
      const match = caminho.match(/\/JCPOLI(\d+)/);
      // Se houver uma correspondência, retorna o número da edição, caso contrário, retorna null
      return match ? parseInt(match[1]) : null;
    }
  
  }
  </script>
  
  <style>
  </style>
  
<!-- Pagina da JCPOLI -  Pagina da aba "Publicações"  -->
<template>
  <v-app class="home" id="inspire">
    <!-- 1º Edição da JCPOLI -->
    <template v-if="edicaoAtual === 1">
      <AnaisJ1 />
    </template>
    <!-- 2º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 2">
      <AnaisJ2 />
    </template>
    <!-- 3º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 3">
      <AnaisJ3 />
    </template>
   
   
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AnaisJ1 from '@/components/abasJCPOLI/1_JCPOLI/AnaisJ1.vue' // Página das Publicações da 1º Edição da JCPOLI
import AnaisJ2 from '@/components/abasJCPOLI/2_JCPOLI/AnaisJ2.vue' // Página das Publicações da 2º Edição da JCPOLI
import AnaisJ3 from '@/components/abasJCPOLI/3_JCPOLI/AnaisJ3.vue' // Página das Publicações da 3º Edição da JCPOLI

@Component({
  components: {
    AnaisJ1,
    AnaisJ2,
    AnaisJ3
  }
})
export default class Anais extends Vue {

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

<!-- Pagina da JCPOLI -  Pagina da aba "Orientações"  -->
<template>
  <v-app class="home" id="inspire">
    <!-- 1º Edição da JCPOLI -->
    <template v-if="edicaoAtual === 1">
      <OrientacoesJ1 />
    </template>
    <!-- 2º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 2">
      <OrientacoesJ2 />
    </template>
    <!-- 3º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 3">
      <OrientacoesJ3 />
    </template>
   
   
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OrientacoesJ1 from '@/components/abasJCPOLI/1_JCPOLI/OrientacoesJ1.vue' // Página das Orientações da 1º Edição da JCPOLI
import OrientacoesJ2 from '@/components/abasJCPOLI/2_JCPOLI/OrientacoesJ2.vue' // Página das Orientações da 2º Edição da JCPOLI
import OrientacoesJ3 from '@/components/abasJCPOLI/3_JCPOLI/OrientacoesJ3.vue' // Página das Orientações da 3º Edição da JCPOLI

@Component({
  components: {
    OrientacoesJ1,
    OrientacoesJ2,
    OrientacoesJ3
  }
})
export default class Orientacoes extends Vue {

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

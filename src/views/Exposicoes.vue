<!-- Pagina da JCPOLI -  Pagina da aba "Exposições"  -->
<template>
  <v-app class="home" id="inspire">
    <!-- 1º Edição da JCPOLI -->
    <template v-if="edicaoAtual === 1">
      <ExposicoesJ1 />
    </template>
    <!-- 2º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 2">
      <ExposicoesJ2 />
    </template>
    <!-- 3º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 3">
      <ExposicoesJ3 />
    </template>
   
   
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ExposicoesJ1 from '@/components/abasJCPOLI/ExposicoesJ1.vue' // Página das Exposições 1º Edição da JCPOLI
import ExposicoesJ2 from '@/components/abasJCPOLI/ExposicoesJ2.vue' // Página das Exposições 2º Edição da JCPOLI
import ExposicoesJ3 from '@/components/abasJCPOLI/ExposicoesJ3.vue' // Página das Exposições 3º Edição da JCPOLI

@Component({
  components: {
    ExposicoesJ1,
    ExposicoesJ2,
    ExposicoesJ3
  }
})
export default class Exposicoes extends Vue {

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

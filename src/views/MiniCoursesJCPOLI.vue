<!-- Pagina da JCPOLI -  Pagina da aba "Minicursos"  -->
<template>
  <v-app class="home" id="inspire">
    <!-- 1º Edição da JCPOLI -->
    <template v-if="edicaoAtual === 1">
      <MinicursosJ1 />
    </template>
    <!-- 2º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 2">
      <MinicursosJ2 />
    </template>
    <!-- 3º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 3">
      <MinicursosJ3 />
    </template>
   
   
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MinicursosJ1 from '@/components/abasJCPOLI/MinicursosJ1.vue' // Página de Minicursos da 1º Edição da JCPOLI
import MinicursosJ2 from '@/components/abasJCPOLI/MinicursosJ2.vue' // Página de Minicursos da 2º Edição da JCPOLI
import MinicursosJ3 from '@/components/abasJCPOLI/MinicursosJ3.vue' // Página de Minicursos da 3º Edição da JCPOLI

@Component({
  components: {
    MinicursosJ1,
    MinicursosJ2,
    MinicursosJ3
  }
})
export default class MiniCoursesJCPOLI extends Vue {

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

<!-- Pagina da JCPOLI -  Pagina da aba "Escola"  -->
<template>
  <v-app class="home" id="inspire">
    <!-- 1º Edição da JCPOLI -->
    <template v-if="edicaoAtual === 1">
      <EscolaJ1 />
    </template>
    <!-- 2º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 2">
      <EscolaJ2 />
    </template>
    <!-- 3º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 3">
      <EscolaJ3 />
    </template>
   
   
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EscolaJ1 from '@/components/abasJCPOLI/EscolaJ1.vue' // Págiana da Escola da 1º Edição da JCPOLI
import EscolaJ2 from '@/components/abasJCPOLI/EscolaJ2.vue' // Págiana da Escola da 2º Edição da JCPOLI
import EscolaJ3 from '@/components/abasJCPOLI/EscolaJ3.vue' // Págiana da Escola da 3º Edição da JCPOLI

@Component({
  components: {
    EscolaJ1,
    EscolaJ2,
    EscolaJ3
  }
})
export default class EscolaJCPOLI extends Vue {

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

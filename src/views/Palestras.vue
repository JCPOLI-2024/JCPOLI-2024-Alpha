<!-- Pagina da JCPOLI -  Pagina da aba "Palestras"  -->
<template>
  <v-app class="home" id="inspire">
    <!-- 1º Edição da JCPOLI -->
    <template v-if="edicaoAtual === 1">
      <PalestrasJ1 />
    </template>
    <!-- 2º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 2">
      <PalestrasJ2 />
    </template>
    <!-- 3º Edição da JCPOLI -->
    <template v-else-if="edicaoAtual === 3">
      <PalestrasJ3 />
    </template>
   
   
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PalestrasJ1 from '@/components/abasJCPOLI/1_JCPOLI/PalestrasJ1.vue' // Página de Palestras da 1º Edição da JCPOLI
import PalestrasJ2 from '@/components/abasJCPOLI/2_JCPOLI/PalestrasJ2.vue' // Página de Palestras da 2º Edição da JCPOLI
import PalestrasJ3 from '@/components/abasJCPOLI/3_JCPOLI/PalestrasJ3.vue' // Página de Palestras da 3º Edição da JCPOLI

@Component({
  components: {
    PalestrasJ1,
    PalestrasJ2,
    PalestrasJ3
  }
})
export default class Palestras extends Vue {

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

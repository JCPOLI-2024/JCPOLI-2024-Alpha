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
import PalestrasJ1 from '@/components/abasJCPOLI/PalestrasJ1.vue' // 1º Edição da JCPOLI
import PalestrasJ2 from '@/components/abasJCPOLI/PalestrasJ2.vue' // 2º Edição da JCPOLI
import PalestrasJ3 from '@/components/abasJCPOLI/PalestrasJ3.vue' // 3º Edição da JCPOLI

//import { speakers_jcpoli1 } from '@/storage/programacao/storageJCPOLI/speakers1JCPOLI'

@Component({
  components: {
    PalestrasJ1,
    PalestrasJ2,
    PalestrasJ3
  }
})
export default class PalestrasJCPOLI extends Vue {

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

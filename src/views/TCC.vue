<!-- Pagina da Politécnica -  Pagina da aba "TCC" -->
<template>
  <div>
    <!-- <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-150/500)*100vw + 67.304015296px)"
    ></PhotoHeader> -->

    <Main class="main">
      
      <h4 class="text-center">APRESENTAÇÕES DE TCC</h4>
      <br>
      <br>
      

      <div class="filtro">
        <div class="text-center">
          <form>
            <div class="form">
              <div class="radioButton">
                <input v-on:click="filtrarTCC1()" type="radio" id="tcc1" name="tcc" value="tcc1">
                <label for="tcc1" class="label-radioButton"><b>TCC I</b></label>
              </div>
    
              <div class="radioButton">
                <input type="radio" v-on:click="filtrarTCC2()" id="tcc2" name="tcc" value="tcc2" checked>
                <label for="tcc2" class="label-radioButton"><b>TCC II</b></label>
              </div>
            </div>
          </form>
        </div>
        <div class="button-container">
          <button class="button" v-on:click="clearFilter">Todas as datas</button>
          <button class="button" v-on:click="filterPalestras">11/12</button>
          <button class="button" v-on:click="filterPalestras">12/12</button>
          <button class="button" v-on:click="filterPalestras">13/12</button>
          <button class="button" v-on:click="filterPalestras">14/12</button>
          <button class="button" v-on:click="filterPalestras">15/12</button>
          <button class="button" v-on:click="filterPalestras">16/12</button>          
        </div>        
      </div>
      <br>
      <br>
      <div class="courses-list">
        <div v-for="(props, index) in filtered_tccs" :key="index">
          <!--<h3 class="section-course">{{ props.curso }}</h3> -->
          <div v-for="(tcc, index) in props.tccs" :key="index">
            <TccSection :tcc="tcc"></TccSection>
            <hr />
          </div>
        </div>
      </div>
    </Main>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PhotoHeader from '../components/organization/PhotoHeader.vue'
import Main from '../components/organization/Main.vue'
import TccSection from '../components/tccSection/index.vue'

import { apresentacoes_TCC } from '@/storage/programacao/TCCs'



@Component({
  components: {
    PhotoHeader,
    Main,
    TccSection
  }
})
export default class TCC extends Vue {

  private tipo_TCC
  private ultima_data
  

  private all_tccs

  private filtered_tccs

  private title = 'TCC'
  private description = 'Trabalho De Conclusão De Curso'
  private background = 'assets/img/slider/6.jpg'

  filterPalestras(e) {
    let data = e.target.innerText
    this.ultima_data = data;

    this.filtered_tccs = this.all_tccs.map(item => {
      let tccs = item.tccs.filter(aux => {
        return (aux.date == data) && (aux.tipoTCC == this.tipo_TCC)
      })
      return { ...item, tccs }
    })
  }

  clearFilter() {
    this.ultima_data = null;
    this.filtered_tccs = this.all_tccs

    this.filtered_tccs = this.all_tccs.map(item => {
      let tccs = item.tccs.filter(aux => {
        return aux.tipoTCC == this.tipo_TCC
      })
      return { ...item, tccs }
    })
  }

  filtrarTCC1() {
    this.tipo_TCC = 1;

    if (this.ultima_data === null) {
      this.filtered_tccs = this.all_tccs.map(item => {
        let tccs = item.tccs.filter(aux => {
          return aux.tipoTCC == this.tipo_TCC
        })
        return { ...item, tccs }
      })

      return;
    } 

    this.filtered_tccs = this.all_tccs.map(item => {
      let tccs = item.tccs.filter(aux => {
        return  (aux.date == this.ultima_data) && (aux.tipoTCC == this.tipo_TCC)
      })
      return { ...item, tccs }
    })    
  }

  filtrarTCC2() {
    this.tipo_TCC = 2;

    if (this.ultima_data === null) {
      this.filtered_tccs = this.all_tccs.map(item => {
        let tccs = item.tccs.filter(aux => {
          return aux.tipoTCC == this.tipo_TCC
        })
        return { ...item, tccs }
      })

      return;
    } 

    this.filtered_tccs = this.all_tccs.map(item => {
      let tccs = item.tccs.filter(aux => {
        return  (aux.date == this.ultima_data) && (aux.tipoTCC == this.tipo_TCC)
      })
      return { ...item, tccs }
    })
  }

  constructor() {
    super()

    this.ultima_data = null
    this.tipo_TCC = 2
    this.all_tccs = apresentacoes_TCC
    this.filtered_tccs = this.all_tccs

    this.filtered_tccs = this.all_tccs.map(item => {
      let tccs = item.tccs.filter(aux => {
        return aux.tipoTCC == this.tipo_TCC
      })
      return { ...item, tccs }
    })
  }

  
}
</script>

<style scoped>

.main {
  padding-top: 50px;
}

.form {
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.filtro {
  margin-bottom: 20px;
}

.radioButton {
  padding: 10px;
  margin: 1rem;
  font-size: 1.7rem;
}

.label-radioButton {
  margin-left: 5px;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
}



.linha {
  border: 1px solid #777;
}

.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

.section-course {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
    0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
    0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
    0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
  padding: 1rem;
  color: black;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5rem;
}

.button {
  padding: 0.6rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
  font-weight: 700;
  background-color: #006ca3;
  margin-right: 2rem;
  color: white;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

.button:focus {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

@media screen and (max-width: 745px) {
  .button-container {
    flex-direction: column;
  }
  .button {
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 800px) {
  .button {
    width: 10.5rem;
  }
}

h4 {
  color: black;
  margin-bottom: 3rem;
}
</style>

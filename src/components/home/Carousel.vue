<!-- Carousel para a página da aba "Home" da Politécnica -->
<template>
  <v-layout row wrap class="jcecec-slider" v-if="test.length > 0">
    <v-flex xs12>
      <v-carousel hide-delimiters height="500px" :interval="5000">
        <v-carousel-item
          v-for="(item, i) in test"
          :key="i"
          :src="item.src"
          hide-controls
          cover
        >
          <v-container fill-height>
            <v-layout align-center fill-height justify-center>
              
             
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component
export default class Carousel extends Vue {
  private items: any
  private test: any

  constructor() {
    super()

    this.items = [
      {
        src: '/assets/img/carrossel/3.jpeg'
      }
    ]

    this.test = []
      
    this.carregar();
    
  
  }

  async carregar() {

    const requests = [];

    for (let i = 1; i < 5; i++) {
      const request = Axios.head(`/assets/img/carrossel/${i}.png`)
      .then(res => {
        if (res.headers['content-type'] === 'image/png')
          return { src: `/assets/img/carrossel/${i}.png` };
        
        return null;
      })
      .catch(error => {
        console.error(error);
      })
    
      requests.push(request);
    }
  
    const results = await Promise.all(requests);
    this.test = results.filter(result => result !== null);
    console.log(this.test[0].src);
    console.log(this.test[1].src);
  }

}
</script>

<style scoped>


.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: flex-start;
  width: 7rem;
  margin-right: 0rem;
  margin-left: 2rem;
}

.banner {
  display: flex;
  opacity: 0.8;
  background-color: white;
  color: #fff;
  position: relative;
  padding: 3rem 3rem 3rem 4rem;
}

@media screen and (max-width: 576px) {
  .banner {
    padding: 30px 5px;
  }
}

.banner span {
  text-align: center;
}

#description {
  letter-spacing:
}

.jcecec {
  text-transform: uppercase;
  font-size: 5em;
  font-weight: 300;
}

.jcecec-sub {
  font-size: 0.9em;
}

#logo {
  width: 10rem;
  height: 6rem;
  position:relative;
  right: 1rem;
}

#cienciaemcasa {
  width: 8rem;
}

hr {
  border: 1px solid black;
}

.date {
  font-weight: bold;
}

span {
  color: black;
  font-weight: normal;
}

@media only screen and (max-width: 760px) {
  /*
  .jcecec-slider {
    display: none;
  }
  */
}
</style>

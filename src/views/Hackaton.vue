<!-- Pagina da Politécnica -  Pagina da aba "Hackaton"  -->
<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-100/523)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main id="root">
      <h4 class="text-center"></h4>      
      <div class="button-container">
        <button class="button" v-on:click="mostrar_apenas_geral">Geral</button>
        <button class="button" v-on:click="mostrar_apenas_checkpoint">Checkpoints</button>
        <button class="button" v-on:click="filterCourses">Minicursos</button>
        <button class="button" v-on:click="mostrar_apenas_mentores">Mentores</button>
        <button class="button" v-on:click="mostrar_apenas_avaliadores">Avaliadores</button>        
        <button class="button" v-on:click="abrir_edital">Edital</button>
        <button class="button" v-on:click="mostrar_apenas_desafio">Desafio</button>
      </div>

      

      <div class="courses-list" id="cursos" v-if="visibleCursos">
        <div v-for="(props, index) in coursesList" :key="index">
          <div v-for="(course, index) in props.minicurso" :key="index">
            <MiniCourse :course="course"></MiniCourse>
            <hr />
          </div>
        </div>
      </div>

      
      <div id="mentores" v-if="visibleMentores">
        <h2>MENTORES</h2>
        <br>
        <br>

        <div class="mentor">          
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/geraldo_valeriano_ribeiro.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>GERALDO VALERIANO RIBEIRO</h4>
                <p>Engenharia de Dados</p>
              </div>
            </div>

            <div class="conteiner-icones">              
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>19:00 - 22:00</p></div>
                </div>
              </div>

                <div class="item local">
                  <i class="fas fa-map-marker-alt fa-3x"></i>
                  <div><p>Online: Teams</p></div>
                </div>
            
            </div>
        </div>

        <hr>

        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/andre_luiz_alvez.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>ANDRÉ LUIZ ALVEZ</h4>
                <p>Engenharia de Software</p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                  <div><p>19/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>09:00 - 11:00</p></div>
                  <div><p>09:00 - 11:00</p></div>
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p>Teams ou incubadora</p></div>
              </div>
            </div>
        </div>
                
        <hr>

        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/fabricio_schlag.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>Fabricio Schlag</h4>
                <p>Engenharia de Software</p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                  <div><p>19/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>09:00 - 11:00</p></div>
                  <div><p>09:00 - 11:00</p></div>
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p>Teams ou incubadora</p></div>
              </div>
            </div>
        </div>

        <hr>

        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/angelica_da_silva_nunes.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>Angelica da Silva Nunes</h4>
                <p>Marketing</p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>                  
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>09:00 - 11:00</p></div>                  
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p>Online: Teams</p></div>
              </div>
            </div>
        </div>

        <hr>

        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/anibal_santos_jukemura.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>Anibal Santos Jukemura</h4>
                <p>Usabilidade e Front End</p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                  <div><p>19/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>18:45 - 22:00</p></div>
                  <div><p>18:45 - 22:00</p></div>
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p>Online: Teams</p></div>
              </div>
            </div>
        </div>
        
        <hr>
        

        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/fernando_goncalves_abadia.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>Fernando Gonçalves Abadia</h4>
                <p>Programação e gameficação</p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                  <div><p>19/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>09:00 - 12:15</p></div>
                  <div><p>09:00 - 12:15</p></div>
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p>Teams ou incubadora</p></div>
              </div>
            </div>
        </div>

        <hr>

        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/user-vector-man.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>Max Gontijo de Oliveira</h4>
                <p></p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p></p></div>
                  <div><p></p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p></p></div>
                  <div><p></p></div>
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p></p></div>
              </div>
            </div>
        </div>

        <hr>

        <div class="mentor">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/lucilia_gomes_ribeiro.jpg" alt="foto mentor" />
              <div class="nome-e-descricao">
                <h4>Lucilia Gomes Ribeiro</h4>
                <p>Viabilidade e usabilidade</p>
              </div>
            </div>

            <div class="conteiner-icones">
              <div class="data-hora">
                <div class="item">
                  <i class="far fa-calendar-alt fa-3x"></i>
                  <div><p>18/10</p></div>
                  <div><p>19/10</p></div>
                </div>

                <div class="item">
                  <i class="far fa-clock fa-3x"></i>
                  <div><p>14:00 - 17:00</p></div>
                  <div><p>14:00 - 17:00</p></div>
                </div>
              </div>

              <div class="item local">
                <i class="fas fa-map-marker-alt fa-3x"></i>
                <div><p>Online: Teams</p></div>
              </div>
            </div>
        </div>



      </div>
      

      <!--
        ===================================================
        ===================================================
              FIM DE MENTORES E COMEÇO DE AVALIADORES 
        ===================================================
        ===================================================
      -->

      <div id="avaliadores" v-if="visibleAvaliadores">
        <h2>AVALIADORES</h2>
        <br>
        <br>

        <div class="avaliador">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/leonardo_guerra.jpg" alt="foto avaliador" />
              <div class="nome-e-descricao">
                <h4>Leonardo Guerra</h4>
                <p>Prof. Dr. da PUC Goiás</p>
              </div>
            </div>            
        </div>

        <hr>

        <div class="avaliador">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/matheus_dias_ferlin_moura.jpg" alt="foto avaliador" />
              <div class="nome-e-descricao">
                <h4>Matheus Dias Ferlin Moura</h4>
                <p>Desenvolvedor da LG</p>
              </div>
            </div>            
        </div>

        <hr>

        <div class="avaliador">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/carbio_almeida_waqued.jpg" alt="foto avaliador" />
              <div class="nome-e-descricao">
                <h4>Carbio Almeida Waqued</h4>
                <p>Incubadora PUC Goiás</p>
              </div>
            </div>            
        </div>

        <hr>

        <div class="avaliador">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/ronisson_cabral.jpg" alt="foto avaliador" />
              <div class="nome-e-descricao">
                <h4>Ronisson Cabral</h4>
                <p>CTO na UNI</p>
              </div>
            </div>            
        </div>

        <hr>

        <div class="avaliador">
            <div class="pessoa-informacao">
              <img src="/assets/img/speakers/felipe_issa_santiago.jpg" alt="foto avaliador" />
              <div class="nome-e-descricao">
                <h4>Felipe Issa Santiago</h4>
                <p>Product Designer na Fitbank</p>
              </div>
            </div>            
        </div>

      </div>



    </Main>    


    <div id="geral" v-if="visibleGeral">
        <h2 style="text-align: left;">Hackapuc 2023</h2>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="text-align: justify; font-size: 18px;">
          Temos a alegria de anunciar a Hackapuc 2023, que será realizada 
          de 17 a 19 de outubro. A abertura ocorrerá no dia 17/10 as 18:30 no auditorio 3 da Area 2,
          com encerramento e anuncio dos vencedores no dia 19/10 as 18:30 no mesmo local.
          A Hackapuc é um grande evento que envolve 
          o desenvolvimento de uma solução inovadora para um determinado 
          problema ou desafio. Os interessados devem formar grupos para 
          participarem.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> 
        <h3 style="text-align: left;">Campanha de Arrecadação</h3>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="text-align: justify; font-size: 18px;">
          Nesta edição do Hackathon ajudaremos nossos irmãos e irmãs. Doe alimentos 
          não perecíveis ou itens de higiene pessoal e ganhe um botton do HackaPuc 
          como agradecimento. Coleta será realizada no dia 17/10/2023 durante a 
          abertura e no dia 19/10/2023 durante o encerramento no auditório 3 da área 2. 
          Contamos com sua ajuda!!!!
          <br/>
          No dia 19/10, após o encerramento, teremos sorteio de brindes aos doadores.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>     
        <h3 style="text-align: left;">Inscrições</h3>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="text-align: justify; font-size: 18px;">
          As incrições podem ser feitas gratuitamente no dia 17/10 às 18:30, na 
          abertura da Hackapuc. Os interessados devem formar grupos 
          e efetuar as incrições por meio de um formulário que será 
          disponibilizado.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>      
        <h3 style="text-align: left;">Como Funciona</h3>
        <hr style="border-top: 3px solid #333; margin: 20px auto;">
        <p style="text-align: justify; font-size: 18px;">
          A abertura da Hackathon será no dia 17/10. Nesse dia, o tema 
          do desafio será revelado. As equipes devem trabalhar para 
          poderem cumprir os checkpoints. Cada checkpoint representa 
          um marco no hackathon em que as equipes devem apresentar 
          os trabalhos solicitados dentro de um prazo. Os checkpoints 
          são de caráter eliminatório, isso significa que a cada 
          checkpoint menos equipes vão estar na disputa. Os resultados 
          serão avaliados pela banca examinadora e publicados no site.     
        </p>
    </div>

    
    <div id="checkpoint" v-if="visibleCheckpoint">
        <Programacao id="checkpoint-element"></Programacao>
    </div>

    <div id="desafio" v-if="visibleDesafio">
      <h2 style="text-align: left;">Tema proposto</h2>
      <hr style="border-top: 3px solid #333; margin: 20px auto;">
      <p style="text-align: justify; font-size: 18px;">
        <strong>Dia do Pobre</strong>. O uso da tecnologia para diminuir distâncias sociais.
        <br>
        <br>
        <strong>Desafio</strong>: Como podemos utilizar a tecnologia e a inovação para criar 
        soluções práticas que promovam a solidariedade, a justiça social e a atenção à 
        desigualdade social?
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3 style="text-align: left;">
        Mensagem do Santo Padre Francisco Para o VII Dia Mundial Dos Pobres
      </h3>
      <hr style="border-top: 3px solid #333; margin: 20px auto;">
      <p style="text-align: justify; font-size: 18px;">
        O Dia Mundial dos Pobres, sinal fecundo da misericórdia do Pai, vem pela 
        sétima vez alentar o caminho das nossas comunidades. Trata-se duma ocorrência 
        que se está a radicar progressivamente na pastoral da Igreja, fazendo-a 
        descobrir cada vez mais o conteúdo central do Evangelho. Empenhamo-nos todos 
        os dias no acolhimento dos pobres, mas não basta; a pobreza permeia as nossas 
        cidades como um rio que engrossa sempre mais até extravasar; e parece 
        submergir-nos, pois o grito dos irmãos e irmãs que pedem ajuda, apoio e 
        solidariedade ergue-se cada vez mais forte. Por isso, no domingo que antecede a 
        festa de Jesus Cristo, Rei do Universo, reunimo-nos ao redor da sua Mesa para 
        voltar a receber d’Ele o dom e o compromisso de viver a pobreza e servir os pobres.
        <strong>«Nunca afastes de algum pobre o teu olhar» (Tb 4, 7).</strong>
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3 style="text-align: left;">
        Contexto: Secretaria estima aumento de 108% dos moradores de rua em Goiânia.
      </h3>
      <hr style="border-top: 3px solid #333; margin: 20px auto;">
      <p style="text-align: justify; font-size: 18px;">
        A Superintendência de Direitos Humanos da Secretaria de Estado de Desenvolvimento 
        Social (Seds) estima que existam 2,5 mil moradores em situação de rua em Goiânia. 
        Trata-se de um aumento de 108%, quando comparado ao número de 2019, antes da pandemia 
        da Covid-19, quando censo realizado pelo Núcleo de Estudos e Pesquisas sobre Criminalidade 
        e Violência (Necrivi), da Universidade Federal de Goiás (UFG), apontou 1,2 mil pessoas 
        nessa condição. Em Goiás, seriam 4 mil, conforme a pasta.
      </p>
      <br>
      <p style="text-align: justify; font-size: 18px;">
        No País, de 2021 para 2022, o número de pessoas em situação de rua cresceu 50%. 
        Eram 158,06 mil no primeiro ano e 236.400 mil no segundo. A informação é do 
        relatório População em situação de rua, divulgado pelo Ministério dos Direitos 
        Humanos e da Cidadania (MDHC).
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3 style="text-align: left;">
        Materiais de apoio:
      </h3>
      <hr style="border-top: 3px solid #333; margin: 20px auto;">
      <p style="text-align: justify; font-size: 18px;">
        <a href="https://www.vatican.va/content/francesco/pt/messages/poveri/documents/20230613-messaggio-vii-giornatamondiale-poveri-2023.html" 
            target="_blank">
          VII Dia Mundial dos Pobres, 2023: «Nunca afastes de algum pobre o teu olhar» (Tb 4, 7) | 
          Francisco (vatican.va)
        </a>
        <br>
        <br>

        <a href="https://www.aves.org.br/jornada-mundial-dos-pobres-de-12-a-19-de-novembro/"
          target="_blank">
        Jornada Mundial dos Pobres de 12 a 19 de novembro - Arquidiocese de Vitória (aves.org.br)
        </a>
        <br>
        <br>

        <a href="https://ohoje.com/noticia/cidades/n/1534955/t/populacao-de-pessoas-em-situacao-de-rua-chega-a-4-mil-em-goias/"
          target="_blank">
          População de pessoas em situação de rua chega a 4 mil em Goiás (ohoje.com)
        </a>
        <br>
        <br>

        <a href="https://www.politize.com.br/pessoas-em-situacao-de-rua/"
          target="_blank">
          Pessoas em situação de rua: a complexidade da vida nas ruas | Politize!
        </a>
        <br>
        <br>
        
      </p>

    </div>

    
  </div>

    
</template>

<script lang="ts">
  
  import PhotoHeader from '../components/organization/PhotoHeader.vue'
  import Main from '../components/organization/Main.vue'
  import Paragraph from '@/components/organization/Paragraph.vue'
  import Speakers from '@/components/organization/Speakers.vue'
  import MiniCourse from '../components/miniCourse/index.vue'
  import Programacao from './Programacao.vue'
  import { miniCourses_Section } from '@/models/miniCourses'
  import { Component, Vue, Prop } from 'vue-property-decorator'
  


  @Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse,
    Paragraph,    
    Programacao
  },
})
export default class MiniCourses extends Vue {  

  //@Prop(String) private title: String = "";
  //@Prop(String) private description: String = "";
  //@Prop(String) private background: String = "assets/img/bannerhackthon.png";

  private visibleCheckpoint = false;
  private visibleMentores = false;
  private visibleCursos = false;
  private visibleGeral = true;
  private visibleAvaliadores = false;
  private visibleDesafio = false;
  private filtered_courses = {};
  private coursesList = miniCourses_Section;
  private title = "";
  private description = "";
  private background = "assets/img/bannerhackthon.jpg";

  constructor() {
    super();

  }

  data () {
    return {
    publicPath: process.env.BASE_URL
    }
  }

  mostrar_apenas_geral() {
    this.visibleCheckpoint  = false;
    this.visibleMentores    = false;
    this.visibleCursos      = false;
    this.visibleGeral       = true;
    this.visibleAvaliadores = false;
    this.visibleDesafio = false;

  const func = () => {
    const geral = document.getElementById("geral");
    geral.scrollIntoView({behavior: "smooth"})
  }

  setTimeout(func, 100);
  }

  abrir_edital() {
    const caminho = process.env.BASE_URL;
    const caminhoPdf = `${caminho}EDITAL HACKA PUC 2023.pdf`;
    window.open(caminhoPdf, '_blank');
  }

  /* baixar_desafio() {
    const caminho = process.env.BASE_URL;
    const caminhoDocx = `${caminho}RACKATHON LG - Dia do Pobre.docx`;
    window.open(caminhoDocx);
  } */


  mostrar_apenas_checkpoint() {
    
    this.visibleMentores    = false;
    this.visibleCursos      = false;
    this.visibleGeral       = false;
    this.visibleCheckpoint  = true;
    this.visibleAvaliadores = false;
    this.visibleDesafio     = false;

    const func = () =>{
      const checkpoint = document.getElementById("checkpoint");
      checkpoint.scrollIntoView({behavior: 'smooth'})
    }
    

    setTimeout(func, 100);
  }

  filterCourses() {      
    this.mostrar_apenas_lista_cursos()
    //let data = e.target.innerText
    let filtro = ''
    this.filtered_courses = this.coursesList.map(item => {
      const minicurso = item.minicurso.filter(aux => {
        return aux.date == filtro
      })

      return { ...item, minicurso }
    })

    const func = () => {
      const cursos = document.getElementById("cursos");
      cursos.scrollIntoView({behavior: "smooth"})
    }

    setTimeout(func, 100);

  }

  mostrar_apenas_lista_cursos() {
    this.visibleCheckpoint  = false;
    this.visibleMentores    = false;      
    this.visibleGeral       = false;
    this.visibleCursos      = true;
    this.visibleAvaliadores = false;
    this.visibleDesafio     = false;
  }

  mostrar_apenas_mentores() {

    this.visibleCheckpoint  = false;      
    this.visibleCursos      = false;
    this.visibleGeral       = false;
    this.visibleMentores    = true;
    this.visibleAvaliadores = false;
    this.visibleDesafio     = false;

    const func = () => {
      const mentores = document.getElementById("mentores");
      mentores.scrollIntoView({behavior: "smooth"})
    }

    setTimeout(func, 100);

  }

  mostrar_apenas_avaliadores() {
    this.visibleCheckpoint  = false;      
    this.visibleCursos      = false;
    this.visibleGeral       = false;
    this.visibleMentores    = false;
    this.visibleAvaliadores = true;
    this.visibleDesafio     = false;

    const func = () => {
      const avaliadores = document.getElementById("avaliadores");
      avaliadores.scrollIntoView({behavior: "smooth"})
    }

    setTimeout(func, 100);

  }

  mostrar_apenas_desafio() {
    this.visibleMentores    = false;
    this.visibleCursos      = false;
    this.visibleGeral       = false;
    this.visibleCheckpoint  = false;
    this.visibleAvaliadores = false;
    this.visibleDesafio     = true;

    const func = () =>{
      const desafio = document.getElementById("desafio");
      desafio.scrollIntoView({behavior: 'smooth'})
    }
    

    setTimeout(func, 100);
  }

}



</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

button {
  display: block;
}

.button-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
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
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;
}

.button {
  padding: 1rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
  font-weight: 700;
  background-color: #006ca3;
  margin-right: 2rem;
  color: white;
  transition: all 0.2s ease-in-out;
}

.button-container a:focus {
  
  outline: none;  
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

@media screen and (max-width: 800px) {
  .button-container {
    flex-direction: column;        
  }
  .button {
    margin-bottom: 1rem;
    margin-left: 2rem;
  }

 

  #checkpoint {
    bottom: 2600px;
  }

  #root {
    margin-bottom: 0px;
  }

  #body {
    top: 0.9%;
    margin-top: 0px;
  }
}

@media screen and (min-width: 801px) {
  .button {
    width: 10.5rem;
  }
}

h4 {
  color: black;
  margin-bottom: 3rem;
}


#mentores #avaliadores{
  
  margin-top: 0px;
  bottom: 0px;
  visibility: visible;
  margin-bottom: 0px;
}

#mentores hr, #avaliadores hr {
  border: 1px solid #000;
}

#root {
  position: relative;
  margin-bottom: 0px;  
  
}

#body {
  padding-top: 0px;  
}

#cursos {
  position: relative;
  margin-bottom: 0px;  
}

#checkpoint {
  position: relative;
  margin-bottom: 0px;
  margin-top: -150px;
  padding-top: 0px;
  bottom: 0px;
  visibility: visible;
}

#checkpoint-element {
  margin-top: 0px;
}

#geral, #desafio {
  position: relative;
  margin-bottom: 0px;
  visibility: visible;
  bottom: 0px;
  width: 70%;
  margin: 20px auto;
}

#geral h2, #desafio h2, h3, h4 {
  color: #2776f5;
}


@media screen and (max-width: 532px) {

  #body {
    bottom: 1000px;
  }

  #root {
    margin-bottom: -100px;
  }

  #mentores, #avaliadores{
    bottom: 50px;
  }
  
}

@media screen and (max-width: 471px) {


  #mentores, #avaliadores{
    bottom: -30px;
  }
  
}

@media screen and (max-width: 371px) {

 

  #body {
    bottom: 3000px;
    padding-top: 0px;
  }

  #mentores, #avaliadores {
    margin-top: 200px;
  }

}




@media screen and (max-width: 331px) {  

  #mentores, #avaliadores {
    margin-top: 300px;

  }


}

/*

=========================================================================
=========================================================================
=========================================================================
  

                      secao dos mentores




*/
#mentores img, #avaliadores img {
    width: 150px;
    height: 150px;
    border-radius: 100%;    
}

.mentor, .avalidador {
    display: flex;
    margin: 10px;
    justify-content: space-between;
}

.pessoa-informacao {
    margin: 10px;
    display: flex;
}

.nome-e-descricao {
    margin-left: 10px;
    width: 300px;
    word-wrap: break-word;
    text-align: center;
}

.conteiner-icones {
    display: flex;
    margin-right: 0px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.data-hora {
  display: flex;
}

.item {
    margin: 0px 25px;
    display: flex;
    flex-direction: column;
}

.item i, p {
    text-align: center;
}

.item div {
    width: 100px;
    word-wrap: break-word;
    padding-top: 10px;
    margin-bottom: -10px;

}

@media screen and (max-width: 1100px) {

  #mentores, #avaliadores {
      display: flex;
      margin: 10px;
      flex-direction: column;        
  }

  .mentor, .avaliador {
    display: flex;
    flex-direction: column;
  }

  .pessoa-informacao {
    flex-direction: column;
    align-items: center;
  }

  .conteiner-icones {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      margin-top: 10px;
      margin-bottom: 30px;
  }

  .data-hora {
    margin: 0px auto;
    padding: 0px;
  }

  .item div {
    align-items: center;
    margin-bottom: 5px;
    margin: 0px auto;
    margin-top: 5px;
  }

    
}

@media screen and (max-width: 800px) {

  #mentores h2, #avaliadores h2 {
    text-align: center;
  }


}

@media screen and (max-width: 421px) {

  .data-hora .item {
    margin: 0px
  }


}


</style>





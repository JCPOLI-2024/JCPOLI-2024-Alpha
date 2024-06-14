<!--
Este é um componente Vue que serve para exibir itens de um banco de dados Firebase 
Realtime Database e fornecer opções para editar ou excluir esses itens.

+ Template: A parte do template contém uma interface de usuário para selecionar o 
banco de dados e exibir os itens em cartões. Cada cartão contém o título e o conteúdo 
do item, bem como botões para editar e excluir o item.

+ Data: A função data retorna o estado inicial do componente. Isso inclui um array para 
armazenar os itens (items) e a referência ao banco de dados onde os itens estão 
armazenados (databaseRef).

+ Watch: A opção watch observa mudanças na referência ao banco de dados. Quando a 
referência ao banco de dados muda, ela recarrega os itens.

+ Mounted: A opção mounted é uma função que é chamada quando o componente é montado. 
Ela chama a função loadItems para carregar os itens do banco de dados.

+ Methods: A opção methods contém várias funções:
  - loadItems: Esta função carrega os itens do banco de dados. Ela cria uma referência 
    para os itens no banco de dados e escuta as mudanças nos itens. Quando os itens mudam, 
    ela atualiza o estado do componente.
  - getTitle e getContent: Estas funções retornam o título e o conteúdo do item, respectivamente. 
    Elas verificam a referência ao banco de dados para determinar como formatar o título e o conteúdo.
  - editItem: Esta função é chamada quando o botão “Editar” é clicado. Ela navega para a 
    página de edição com o item e a referência ao banco de dados.
  - deleteItem: Esta função é chamada quando o botão “Excluir” é clicado. 
    Ela remove o item do banco de dados.
-->
<template>
  <div>
    <!-- A interface do usuário para selecionar o banco de dados e exibir os itens -->
    <div class="d-flex flex-column justify-content-center align-items-center">
      <!-- O seletor para escolher o banco de dados -->
      <b-form-select v-model="databaseRef" :options="['versao1/palestras', 'versao1/anais', 'escola/versao2/postergados','escola/versao2/reprovados', 'escola/versao2/tcc1', 'escola/versao2/tcc2' ]"></b-form-select>
      <!-- Loop através de cada item e exibir em um cartão -->
      <div class="col-6 mt-2" v-for="item in items" :key="item.id">
        <!-- O cartão para exibir o item -->
        <b-card :title="getTitle(item)">
          <!-- O conteúdo do item -->
          <b-card-text v-html="getContent(item)"></b-card-text>
          <!-- Botões para editar e excluir o item -->
          <b-button variant="info" class="mr-2" @click="editItem(item)">Editar</b-button>
          <b-button variant="danger" class="mr-2" @click="deleteItem(item)">Excluir</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>
<!--
Instrucoes de como adicionar mais caminhos para leitura do banco: 

1 - Adicionar o novo caminho ao seletor: No componente Vue, 
  você tem um seletor (b-form-select) que permite ao usuário escolher o caminho do banco de dados. 
  Para adicionar um novo caminho, você precisa adicionar a nova opção à lista de opções do seletor. 
  Por exemplo, se você quiser adicionar um caminho chamado versao2/workshops, você pode fazer isso da seguinte maneira:

  <b-form-select v-model="databaseRef" :options="['versao1/palestras', 'versao1/anais', 'versao2/workshops']"></b-form-select>

2 - Atualizar as funções getTitle e getContent: Essas funções são usadas para formatar o título e 
  o conteúdo do item com base na estrutura do item. Se a estrutura dos itens no novo caminho for diferente, 
  você precisará atualizar essas funções para lidar com a nova estrutura. Por exemplo, se os itens em 
  versao2/workshops tiverem uma propriedade instructor em vez de speaker, você pode fazer isso da seguinte maneira:

  getTitle(item) {
  if (this.databaseRef === 'versao1/palestras') {
    return item.date + ' - ' + item.time;
  } else if (this.databaseRef === 'versao1/anais') {
    return item.title;
  } else if (this.databaseRef === 'versao2/workshops') {   <--- SEU NOVO FORMATO (CARTAO) ! ESSA FUNCAO E SO PARA O TITULO DO CARTAO 
    return item.date + ' - ' + item.instructor;
  }
},

getContent(item) {
  if (this.databaseRef === 'versao1/palestras') {
    return `Palestra: ${item.description}<br>
            Local: ${item.place}<br>
            Palestrante: ${item.speaker}`;
  } else if (this.databaseRef === 'versao1/anais') {
    return `Título: ${item.title}<br>
            Autor: ${item.autor}<br>
            Caminho: ${item.path}`;
  } else if (this.databaseRef === 'versao2/workshops') { <--- O CORPO PARA SEU NOVO (CARTAO) ESPECIFICA-SE OS CAMPOS QUE SARAO LIDOS
    return `Workshop: ${item.description}<br>
            Local: ${item.place}<br>
            Instrutor: ${item.instructor}`;
  }
},

3 - Testar: Depois de fazer essas alterações, você deve testar o componente para garantir que ele possa ler, 
  editar e excluir itens no novo caminho corretamente.
-->

<script>
// Importando a instância do aplicativo Firebase
import { app } from '../firebaseDB';
// Importando as funções do Firebase que serão usadas abaixo
import { getDatabase, ref, onValue, remove } from "firebase/database";

export default {
  data() {
    return {
      items: [], // Array para armazenar os itens do banco de dados
      databaseRef: 'versao1/palestras', // A referência ao banco de dados
    };
  },

  watch: {
    // Quando a referência ao banco de dados muda, recarrega os itens
    databaseRef() {
      this.loadItems();
    },
  },

  // Quando o componente é montado, carrega os itens
  mounted() {
    this.loadItems();
  },

  methods: {
    // Carrega os itens do banco de dados
    loadItems() {
      // Obtém a instância do banco de dados
      const db = getDatabase(app);
      // Cria uma referência para os itens no banco de dados
      const itemsRef = ref(db, this.databaseRef);

      // Escuta as mudanças nos itens
      onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Transforma os itens em um array e armazena no estado do componente
          this.items = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
        }
      });
    },

    // Retorna o título do item baseado na sua estrutura
    getTitle(item) {
      if (this.databaseRef === 'versao1/palestras') {
        return item.date + ' - ' + item.time;
      } else if (this.databaseRef === 'versao1/anais') {
        return item.title;
      }
    },

    // Retorna o conteúdo do item baseado na sua estrutura
    getContent(item) {
      if (this.databaseRef === 'versao1/palestras') {
        return `Palestra: ${item.description}<br>
                Local: ${item.place}<br>
                Palestrante: ${item.speaker}`;
      } else if (this.databaseRef === 'versao1/anais') {
        return `Título: ${item.title}<br>
                Autor: ${item.autor}<br>
                Caminho: ${item.path}`;
      } else if (this.databaseRef === 'escola/versao2/postergados') {
        return `Título: ${item.TituloTrabalho}<br>
                Estudante: ${item.Estudante}<br>
                Curso: ${item.Curso}<br>
                Data: ${item.Data}<br>
                Disciplina: ${item.Disciplina}<br>
                Membro 1: ${item.NomeMembro1}<br>
                Membro 2: ${item.NomeMembro2}<br> 
                Justificativa: ${item.Justificativa}<br>
                Local: ${item.Local}<br>
                Orientador: ${item.Orientador}<br>
                Titulacao Membro1:${item.TitulacaoMembro1}<br>
                Titulacao Membro2:${item.TitulacaoMembro2}<br>
                Titulacao Orientador:${item.TitulacaoOrientador}`;
      }else if (this.databaseRef === 'escola/versao2/reprovados') {
        return `Orientador: ${item.Orientador}<br>
                Estudante: ${item.Estudante}<br>        
                Curso: ${item.Curso}<br>
                Justificativa: ${item.Justificativa}<br>`;
      }else if (this.databaseRef === 'escola/versao2/tcc1') {
        return `Título: ${item.TituloTrabalho}<br>
                Estudante: ${item.Estudante}<br>
                Curso: ${item.Curso}<br>
                Disciplina: ${item.Disciplina}<br>
                Membro 1: ${item.NomeMembro1}<br>
                Membro 2: ${item.NomeMembro2}<br>
                Membro 3: ${item.NomeMembro3}<br>
                Email Membro 1: ${item.EmailMembro1}<br>
                Email Membro 2: ${item.EmailMembro2}<br>
                Email Membro 2: ${item.EmailMembro3}<br> 
                Data: ${item.Data}<br>
                Horario: ${item.Horario}<br>
                Local: ${item.Local}<br>
                Orientador: ${item.Orientador}<br>
                Titulacao Membro1:${item.TitulacaoMembro1}<br>
                Titulacao Membro2:${item.TitulacaoMembro2}<br>
                Titulacao Membro3:${item.TitulacaoMembro3}<br>
                Titulacao Orientador:${item.TitulacaoOrientador}<br>
                ID:${item.ID}`;
      }else if (this.databaseRef === 'escola/versao2/tcc2') {
        return `Título: ${item.TituloTrabalho}<br>
                Estudante: ${item.Estudante}<br>
                Curso: ${item.Curso}<br>
                Disciplina: ${item.Disciplina}<br>
                Membro 1: ${item.NomeMembro1}<br>
                Membro 2: ${item.NomeMembro2}<br>
                Membro 3: ${item.NomeMembro3}<br>
                Email Membro 1: ${item.EmailMembro1}<br>
                Email Membro 2: ${item.EmailMembro2}<br>
                Email Membro 2: ${item.EmailMembro3}<br> 
                Data: ${item.Data}<br>
                Horario: ${item.Horario}<br>
                Local: ${item.Local}<br>
                Orientador: ${item.Orientador}<br>
                Titulacao Membro1:${item.TitulacaoMembro1}<br>
                Titulacao Membro2:${item.TitulacaoMembro2}<br>
                Titulacao Membro3:${item.TitulacaoMembro3}<br>
                Titulacao Orientador:${item.TitulacaoOrientador}<br>
                ID:${item.ID}`;
      }
    },

    // Navega para a página de edição com o item e a referência ao banco de dados
    editItem(item) {
      this.$router.push({ name: 'edicaoDados', params: { item: item, databaseRef: this.databaseRef } });
    },
    
    // Remove o item do banco de dados
    deleteItem(item) {
      const db = getDatabase();
      remove(ref(db, this.databaseRef + '/' + item.id))
        .then(() => {
          console.log("Item removido com sucesso");
        })
        .catch((error) => {
          console.error("Erro ao remover item:", error);
        });
    },
  }
};
</script>

<style>

</style>

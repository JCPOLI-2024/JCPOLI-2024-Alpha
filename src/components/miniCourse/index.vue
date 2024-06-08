<!-- Index para a exibição de informações como as de palestras, minicursos e ciencia em casa -->
<template>
  <div class="miniCourse">
    <div class="title">
      <i class="fas fa-graduation-cap"></i>
      <h3
        :title="course.title"
        v-bind:id="'true' ? course.title === 'Palestra de Abertura da Jornada: AskBlue, dos 0 aos 500' : ''"
      >
        {{ course.title }} <font color="red">{{ course.warning }}</font>
      </h3>
    </div>

    <div class="info-h">
      <div>
        <!-- Para aparecer imagem do palestrante caso tenha -->
        <div class="avatar" v-if="course.img">
          <div
            v-bind:style="{ backgroundImage: `url(${course.img || defaultImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }"
          ></div>
        </div>
        <h6 class="text-wrap" :title="course.instructor">
          Palestrante: {{ course.instructor }}
        </h6>
        <h7 class="text-wrap" :title="course.institution">
          Instituição: {{ course.institution }}
        </h7>
        <!-- Para aparecer o botão "leia completo" caso o palestrante tenha profile -->
        <div class="more" v-if="course.profile">
          <v-btn color="primary" @click="showProfile(course.instructor)">Leia completo</v-btn>
        </div>
      </div>
    </div>

    <div class="desc">
      <div class="date-time-place">
        <i class="far fa-calendar-alt"></i>
        <i class="far fa-clock"></i>
        <i class="fas fa-map-marker-alt"></i>
        <div>{{ course.date }}</div>
        <div>{{ course.time }}</div>
        <div>
          <a v-if="course.link" :href="course.link" target="_blank">{{ course.place }}</a>
          <div v-if="course.link == null">{{ course.place }}</div>
        </div>
      </div>
      <p>
        {{ course.desc }}
      </p>
      <!-- Para aparecer o certificado caso tenha saido -->
      <div class="more" v-if="course.certificado">
        <p>
          <v-btn
            color="primary"
            :href="course.certificado"
            target="_blank"
          >
            Certificado
          </v-btn>
        </p>
      </div>
    </div>
  </div>
</template>


<script src="./miniCourse.ts" lang="ts"></script>

<style src="./miniCourse.css" scoped></style>

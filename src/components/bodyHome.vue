<template>
  <div class="home">

      <div class="container mx-auto max-w-screen-lg mb-20 container-feria-virtual">
        <div class="flex flex-row mx-auto mar-5 feria-container text-left">
            <div class="text-left flex flex-row px-5">
              <div class="items-center mx-2 container-foco">
                <img class="image-foco" v-bind:src="icon_foco" alt="">
              </div>
              <div class="max-w-full">
                <span class="text-green text-2xl font-sans font-bold">Feria Virtual </span>
                <p class="w-full text-blue text-left font-sans font-bold text-5xl text-concurso-big">Concurso de proyectos Educativos Innovadores</p>
                <img  class="flex items-center justify-end py-5" v-bind:src="line_yellow" alt="">
              </div>
            </div>
            <div class="font-sans font-normal text-left text-blue-l text-xl pr-10 flex items-end pad-8 container-promoviendo">
              <p class="">Promoviendo la educación para el desarrollo sostenible en Perú</p>
            </div>
        </div>
      </div>

    <div class="relative flex flex-wrap content-start overflow-hidden my-10">
        <a href="" @click="changeSoundVideo" class="">
            <div
                class="absolute z-30 p-3 rounded-full bg-white m-5"
            >
                    <img v-if="isMuted" id="sound" class="w-4 h-4" src="../assets/images/mute.png" alt="" >
                    <img v-else id="sound" class="w-4 h-4" src="../assets/images/volume.png" alt="">
            </div>
        </a>
        <video
            loop="true" autoplay="autoplay"
            playsinline
            muted
            preload=auto
            class="object-contain w-full"
            ref="video"
        >
            <source
                src="https://feria-aprendiendo-unidos-bbva.s3.amazonaws.com/static/video-feria-unesco.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    </div>

    <div class="mar-5 py-10">
            <div class="flex flex-row-reverse">
                <span class="absolute" id="line-yellow-2-container">
                    <img v-bind:src="line_yellow2" alt="" class="w-22 h-5">
                </span>
            </div> 
            <div class="container max-w-screen-lg m-auto justify-center">
                <span class="text-green text-2xl font-sans font-bold">
                    Proyectos Finalistas 2021
                    <div>
                        <p class="md:text-center text-blue text-3xl font-normal container mt-0.5 texto-felicitaciones">Felicitamos a los 15 proyectos finalistas y a los 7 seleccionados. Te invitamos a conocer más sobre cada uno de ellos y su aporte a la innovación educativa en el Perú.</p>
                    </div>
                </span> 
                <div class="mt-10 max-w-screen-lg">
                    <div  class="grid grid-cols-5 gap-2 my-5" id="container-cards">
                        <div class="card mt-1" v-for="project in projects" :key="project.id">  
                            <!-- <div class="flex items-end justify-end h-f w-full bg-cover" group-hover:opacity-25>
                            </div> -->
                            <div class="card_main">
                                <div v-if="project.selected" class="bg-yellow-300 proyecto-seleccionado">
                                  <p class="text-blue"><i class="fa fa-star"></i> Proyecto seleccionado</p>
                                </div>
                                <div class="absolute z-30 text-white m-2  text-left card_main_text bottom-0">
                                    <h3 class="font-bold text-xl line-clamp-3">{{project.nombre}}</h3>
                                    <span class="mt-2"><router-link :to="{ name: 'Project', params: { slug: project.slug } }"> > Conoce más</router-link> </span>
                                </div>
                                <div class="relative">
                                    <img class="" :src=project.home_image alt="">
                                </div>
                            </div>
                                
                            <div class="card__overlay text-left">
                                <div class="m-2 mt-3 card__text__overlay h-full">
                                    <h3 class="font-bold text-xl line-clamp-2 text-white">{{project.nombre}}</h3>
                                    <p class="line-clamp-3 text-white">{{project.institucion}}</p>
                                    <p class="line-clamp-2 text-green">{{project.region}}</p>
                                    <div class="bottom-0 absolute mb-2">
                                        <span class=" text-white"> <router-link :to="{ name: 'Project', params: { slug: project.slug } }"> > Conoce más</router-link></span>
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        
                        
                    </div>
                </div>
        </div>
    </div>
  </div>
  
</template>
<script>
import icon_foco from "../assets/images/icon-foco.png"
import line_yellow from "../assets/images/linea-amarilla.png"
import line_yellow2 from "../assets/images/linea-amarilla-2.png"
import DataProject from '@/data.json'
export default {
  props: {
    
  },
  data () {
    return {
      isMuted: true,
      line_yellow: line_yellow,
      line_yellow2: line_yellow2,
      icon_foco: icon_foco,
      projects: DataProject
      
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    changeSoundVideo: function(el){
        el.preventDefault();
        var vid = this.$refs.video
        vid.muted = !vid.muted
        this.isMuted = vid.muted
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
   position: relative;
   transition: all .5s ease-in;
}
.card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: .5s ease;
  background-color: #004481;
  z-index: 5;
}
.card:hover .card__overlay {
  opacity: 0.8;
}

.card:hover .card__text__overlay {
  opacity: 1;
}
.card:hover .card_main_text{
    opacity: 0;
}
.card:hover .proyecto-seleccionado{
    opacity: 0;
}
.image-foco{
  width: 43px;
}
.pad-6{
  padding-bottom: 6%;
}
.pad-8{
  padding-bottom: 8%;
}
.padding-t-8{
  padding-top: 5%;
}

.mar-3{
  margin: 3%;
}
.mar-5{
  margin: 5%;
}
.container-foco{
  min-width: 43px;

}
.proyecto-seleccionado{
  z-index: 1;
  max-height: 30px;
  width: 100%;
  height: 26px;
  display: flex;
  text-align: left;
  position: absolute;
}
.proyecto-seleccionado p {
  font-size: 12px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.5rem;
}
#container-cards{
  justify-items: center;
}
@media (max-width: 930px) {
  .text-concurso-big{
    font-size: 30px;
  }
  .texto-felicitaciones{
    font-size: 30px;
  }
}

@media (max-width: 840px) {
  .feria-container{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container-promoviendo{
    margin-left: 5%;
    padding-right: 0%;
  }
  .container-feria-virtual{
    margin-bottom: 2em;
  }
  #container-cards{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {

  #container-cards{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  #line-yellow-2-container{
    position: relative;
  }
}




</style>

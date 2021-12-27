<template>
  <div class="body">
    <div class="estudiante-banner bg-local flex flex-col">
      <!-- <img v-bind:src="banner_project" alt="" class="w-screen"> -->
      <div class="h-100 my-auto flex pb-4">
        <p class="text-white  mx-auto  self-end f-size-20">
          <a href="" @click="previousProject">
           &#60; Atrás
          </a>
          <strong>|</strong> <router-link to="/"><a href="">Inicio</a></router-link> <strong>|</strong> 
          <a href="" @click="nextProject">
            Siguiente &#62;
          </a>
        </p>
      </div>
    </div>
    <section class="mx-auto max-w-screen-lg padding-5 pt-16  text-left">
      
      <div class="text-green sm:text-left text-2xl font-sans font-bold  w-full">
        Proyecto Educativo 
        <p class="w-full text-blue text-left font-sans font-medium text-5xl title-responsive">{{proyecto.nombre}}</p>
      </div>
      <div class="pt-10">
        <div class="flex flex-wrap">
          <div class="grid text-left max-w-1/2 object-contain	self-start pr-5 container-table">
            <div class="divide-gray-400 border-b-2 m-auto grid grid-cols-2 w-full">
              <p class="text-at-bottom p-1"> 
                Institución educativa       
              </p>
              <p class="text-at-bottom p-1">
                {{proyecto.institucion}}
              </p>
            </div>
            <div class="divide-gray-400 border-b-2 mx-auto  grid grid-cols-2 w-full">
              <p class="text-at-bottom p-1">
                Código Modular              
              </p>
              <p class="text-at-bottom p-1">
                {{proyecto.codigo_institucion}}
              </p>
            </div>
            <div class="divide-gray-400 border-b-2 mx-auto grid grid-cols-2 w-full">
              <p class="text-at-bottom p-1">
                Región                      
              </p>
              <p class="text-at-bottom p-1">
                {{proyecto.region}}
              </p>
            </div>
            <div class="divide-gray-400 border-b-2 mx-auto grid grid-cols-2 w-full">
              <p class="text-at-bottom p-1">
                Coordinador/a del proyecto  
              </p>
              <p class="text-at-bottom p-1">
                {{proyecto.coordinador}}
              </p>
            </div>
          </div>

          <div class="ml-7 h-auto flex-1 container-description">
            <h2 class="text-blue text-2xl font-medium mb-5">Descripción General</h2>
            <p class="text-base text-justify">
            {{proyecto.descripcion}}
            </p>
            
            <div class="flex flex-wrap justify-between	mt-5 "> 
              <div class="flex">
                <a 
                  v-if="proyecto.pdf"
                  :href="proyecto.pdf"
                  target="_blank"
                  class="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-bold p-2 rounded"
                  @click="clickDownload"
                >
                  Descargar Proyecto
                </a>
              </div>
                <div class="grid grid-rows-1 grid-flow-col gap-4">
                  <a href="#" @click="sharedFacebook"><i class="fa fa-facebook square-icon fa-2x fb-bg  p-1"></i></a>
                  <a href="#" @click="sharedWhatsapp"><i class="fa fa-dribbble square-icon fa-2x fa-whatsapp  p-1"></i></a>
                  <a href="#" @click="sharedMail"><i class="fa fa-envelope square-icon fa-2x mail-bg  p-1"></i></a>
                </div>
            </div>
          </div>
        </div>

        
      </div>
      

      
    </section>

    <section class="m-l-r-5">
      <div  class="mx-auto max-w-screen-lg">
        <div  class="video-responsive" v-if="proyecto.video">
          <iframe
            :src="getYoutubeEmbedURL(proyecto.video)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <div  class="grid grid-cols-3 gap-2 my-5 rounded-none" id="container-cards">
          <div v-for="image in proyecto.images" :key="image">
            <div class="card w-full shadow-md mt-1" >  
              <div class="card_main">
                  <div class="relative">
                      <img class="w-full" :src="image" alt="">
                  </div>
              </div>
            </div>
          </div>  

        </div>
      </div>
    </section>

    <div class="bg-local flex flex-col">
      <!-- <img v-bind:src="banner_project" alt="" class="w-screen"> -->
      <div class="h-100 my-auto flex pb-4">
        <p class="text-black  mx-auto  self-end f-size-20">
          <a href="" @click="previousProject">
           &#60; Atrás
          </a>
          <strong>|</strong> <router-link to="/"><a href="">Inicio</a></router-link> <strong>|</strong> 
          <a href="" @click="nextProject">
            Siguiente &#62;
          </a>
        </p>
      </div>
    </div>
  </div>
    

  
</template>
<script>
    import logo_unesco_project from "../assets/images/logo-unesco.png"
    import logo_bbva_project from "../assets/images/Logo-BBVA.png"
    import line_yellow_project from "../assets/images/linea-amarilla.png"
    import banner_project from "../assets/images/Banner-header-proyecto.png"
    import DataProject from '@/data.json'
    export default {
        data: function () {
            return {
              logo_unesco_project: logo_unesco_project,
              logo_bbva_project: logo_bbva_project,
              line_yellow_project: line_yellow_project,
              banner_project: banner_project
            }
        },
        mounted() {
          window.scrollTo(0, 0)
        },
        
        props: ['proyecto'],
        methods:{
          clickDownload: function (){
            this.$gtag.event('click', {
              'event_category' : 'descargas',
              'event_label' : 'download-' + this.proyecto.slug
            })
          },
          previousProject:function (el) {
            el.preventDefault();
            let previous_project
            let id = this.proyecto.id
            try {
              previous_project =  DataProject[id - 2]
            } finally {
              if (!previous_project){
                previous_project = DataProject.at(-1)
              }
            }
            this.$router.push({ name: 'Project', params: { slug: previous_project.slug } })
            window.scrollTo(0, 0)
          },
          nextProject:function (el) {
            el.preventDefault();
            let next_project
            let id = this.proyecto.id
            try {
              next_project =  DataProject[id]
            } finally {
              if (!next_project){
                next_project = DataProject[0]
              }
            }
            
            this.$router.push({ name: 'Project', params: { slug: next_project.slug } })
            window.scrollTo(0, 0)
          },
          getYoutubeEmbedURL: function(url) {
              const res = url.split("/");
              return "https://www.youtube.com/embed/"+res.at(-1);
          },
          sharedFacebook: function(){
            let domain = 'https://feriavirtualdeinnovacion.com'
            let url="https://www.facebook.com/sharer/sharer.php?u=:u&title=:title".replace(':u',  domain + this.$route.fullPath).replace(':title', this.proyecto.nombre);
            window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
            this.$gtag.event('click', {
              'event_category' : 'shared-facebook',
              'event_label' : 'shared-fc-' + this.proyecto.slug
            })
          },
          sharedWhatsapp: function(){
            let domain = 'https://feriavirtualdeinnovacion.com'
            let url="https://api.whatsapp.com/send?text=:text".replace(':text',  domain + this.$route.fullPath)
            window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
            this.$gtag.event('click', {
              'event_category' : 'shared-whatssap',
              'event_label' : 'shared-ws-' + this.proyecto.slug
            })
          },
          sharedMail: function(){
            let domain = 'https://feriavirtualdeinnovacion.com'
            let url="mailto:?subject=:subject&body=:text".replace(':text',  domain + this.$route.fullPath).replace(':subject', this.proyecto.nombre)
            window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
            this.$gtag.event('click', {
              'event_category' : 'shared-email',
              'event_label' : 'shared-mail-' + this.proyecto.slug
            })
          },
          track () {
            this.$gtag.screenview({
              screen_name: this.proyecto.slug,
            })
          }
        }
      }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.height{
  height:800px;

}
.body{
  margin-top: 30px;
}
.card {
   position: relative;
   transition: all .5s ease-in;
}
.m-l-r-5{
  margin-left: 5%;
  margin-right: 5%;
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

.estudiante-banner{
  /* background-image: url(../assets/images/banner-interna-1280.png);
  background-repeat:no-repeat;
  width: 100%;
  height: auto;
  background-size: 100%; */
  background-image: url(../assets/images/banner-interna-1280.png);
   background-repeat: no-repeat;
        background-size: cover;
        /* background-position: 50% 50%; */
        width: 100%;
        height: 250px;
        position:relative;
}
.h-100{
  height:100%;
}
.f-size-20{
  font-size: 20px;
}

.text-at-bottom{
  display: flex;
  align-items: flex-end;
  font-size: 15px;
}
.padding-5{
  padding: 5%;
}
.video-responsive {
	height: 0;
	overflow: hidden;
	padding-bottom: 56.25%;
	padding-top: 30px;
	position: relative;
	}
.video-responsive iframe, .video-responsive object, .video-responsive embed {
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
}


@media (max-width: 1000px) {
  .estudiante-banner{
    height: 150px;
  }
  #container-cards{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .container-table{
    width: 100%;
    max-width: 100%;
    padding-right: 0px;
  }
  .container-description{
    margin-left: 0px;
    margin-top: 5%;
}
.title-responsive{
  font-size: 30px;
}

@media (max-width: 700px) {
  
  #container-cards{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .estudiante-banner{
    height: 125px;
  }
}
@media (max-width: 400px) {
  .estudiante-banner{
    height: 80px;
  }
}


}



</style>
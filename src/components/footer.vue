<template>
  <footer class="mt-20 max-w-5xl mx-auto padding-lr-10">
    <div class="divide-gray-400 border-b-2  mx-auto">
    </div >
    <div>
       <p class="py-6  text-gray-500 text-center text-p">
         La Oficina de UNESCO en Perú y la Fundación BBVA en Perú felicitan a las 15 comunidades educativas finalistas en este concurso. Los 7 proyectos educativos innovadores que han resultado seleccionados por el Comité Evaluador recibirán un acompañamiento pedagógico y una asistencia técnica para su incubación en la dinámica integral de las instituciones educativas.
       </p>
    </div>
    <div class="container mx-auto px-6 py-3">
      <a  href="https://feria-aprendiendo-unidos-bbva.s3.amazonaws.com/static/Bases+Concurso.pdf"
      target="_blank"
      @click="downloadBases"
      class="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-bold p-2  rounded mx-auto">
        Bases del Concurso
      </a>
      
    </div>
    <div class="flex-wrapper container-footer-logos mt-6">
      <div class="image-wrapper">
        <router-link to="/"><img v-bind:src="logo_bbva_footer" align="left" class="scale-image"></router-link>
      </div>
      <div class="image-wrapper">
       <router-link to="/"><img v-bind:src="logo_unesco_footer" align="right" class="scale-image"></router-link>
      </div>
    </div>
  </footer>

</template>    
 <script>
    import logo_unesco_footer from "../assets/images/logo-unesco.png"
    import logo_bbva_footer from "../assets/images/Logo-BBVA.png"
    export default {
        data: function () {
            return {
                logo_unesco_footer: logo_unesco_footer,
                logo_bbva_footer: logo_bbva_footer,
            }
        },
        methods: {
          downloadBases: function (){
            this.$gtag.event('click', {
              'event_category' : 'descargas',
              'event_label' : 'download-base'
            })
          }
        }
    }
</script>
<style scoped>
  .container-footer-logos{
    max-width: 1280px;
    max-height: 108px;
    

  }
  .image-wrapper {
    max-width: 40%;
    padding-bottom: 30px;
}

.scale-image {
    width: 100%;
    height: auto;
}

.flex-wrapper {
    display: flex;
    justify-content: space-between;
}
.text-p{
  font-size: 18px;
}

@media (max-width: 1024px) {
  .padding-lr-10{
    padding-left: 10%;
    padding-right: 10%;
  }
}





</style>
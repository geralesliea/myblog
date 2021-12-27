<template>
  <div class="about">
    <ProjectView :proyecto="project"/>
  </div>
</template>
<script>
// @ is an alias to /src
// import Home from '@/components/HelloWorld.vue'
import ProjectView from '@/components/bodyProject.vue'
import DataProject from '@/data.json'
// import projectBuilder from '@/project.js'

export default {
  name: 'hone',
  components: {
    ProjectView
  },
  data() {
    return {
      project: {
        "id": 0,
        "slug": "",
        "region": "",
        "nombre": "",
        "institucion": "",
        "codigo_institucion": "",
        "coordinador": "",
        "descripcion": "",
        "video": "",
        "images": [  
        ],
        "cod_proyecto": 0,
        "pdf": ""
      }
    }
  },
  mounted() {
   this.getProject()
  },
  watch: {
    $route() {
      this.getProject();
    }
  },
  methods: {
     getProject(){
      DataProject.forEach(e => {
        if(e.slug == this.$route.params.slug){
          this.project = e
          document.title = 'Proyecto | ' + e.slug
        }
      });
    },

  },
}

</script>
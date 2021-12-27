<template>
  <div class="">
  <bodyHome />

  </div>
</template>

<script>
// @ is an alias to /src
// import Home from '@/components/HelloWorld.vue'
import BodyHome from '@/components/bodyHome.vue'

export default {
  name: 'hone',
  components: {
    BodyHome
  },
  mounted() {
   document.title = 'UNESCO - Feria Virtual | Home'
  },
}
</script>

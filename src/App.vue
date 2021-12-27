<template>
  <Header/>
  <!-- <Home/> -->
  <router-view/>  
  <Footer/>
</template>

<script>
// import Home from './views/home.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'home',
  components: {
    // Home,
    Header,
    Footer

  },
  mounted(){
    // let yourScript= document.createElement('script')
    // yourScript.setAttribute('src', 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js')
    // document.head.appendChild(yourScript)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

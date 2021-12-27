<template>
  <header>
    <div class="flex-wrapper">
      <div class="image-wrapper">
          <router-link to="/"><img v-bind:src="logo_unesco" align="left" class="scale-image"></router-link>
      </div>
      <div class="image-wrapper">
       <router-link to="/"><img v-bind:src="logo_bbva" align="right" class="scale-image"></router-link>
      </div>
    </div>
  </header>
</template>
<script>
    import logo_unesco from "../assets/images/logo-unesco.png"
    import logo_bbva from "../assets/images/Logo-BBVA.png"

    export default {
        data: function () {
            return {
              logo_unesco: logo_unesco,
              logo_bbva: logo_bbva
            }
        }
    }
</script>
<style scoped>
  .container{
    max-width: 1280px;
    max-height: 108px;
    

  }
  .image-wrapper {
    max-width: 40%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30px;
}

.scale-image {
    width: 100%;
    height: auto;
}

.flex-wrapper {
    display: flex;
    justify-content: space-between;
}

</style>
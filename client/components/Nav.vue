<template>
  <div class="nav">

  </div>
</template>
<script>
export default {
  props: {
    page: String
  },
  mounted() {
    console.log('nav mounted')
  }
}
</script>
<style lang="scss" scoped>
.nav {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}
</style>

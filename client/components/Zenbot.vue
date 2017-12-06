<template>
  <div class="zenbot-config">

  </div>
</template>
<script>
export default {
  props: {
    submit: Function
  },
  mounted() {
    console.log('zenbot config mounted')
  },
  computed: {
    command() {
      
      return 'trade'
    }
  }
}
</script>
<style lang="scss" scoped>
.zenbot-config {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}
</style>

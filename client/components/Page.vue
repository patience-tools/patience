<template>
  <div class="page">
    <div class="nav-cont">
      <nav></nav>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Nav from './Nav'

export default {
  name: 'Page',
  components: {
    Nav
  }
}
</script>
<style lang="scss">

$material-curve: all 375ms cubic-bezier(0.4, 0.0, 0.2, 1);
$navWidth: 40px;

.page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .nav-cont {
    z-index: 1;
    position: absolute;
    top: 0;
    left: -$navWidth;
    width: $navWidth;
    height: 100%;
    transition: $material-curve;
  }
  .body {
    z-index: 0;
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 0;
    transition: $material-curve;
  }

  &.open-nav {
    .nav-cont {
      left: 0;
    }
    .body {
      padding-left: $navWidth;
    }
  }
}
</style>

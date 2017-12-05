<template>
  <div id="app">
    <div class="nav-cont">
      <nav></nav>
    </div>
    <div class="body">
      <dashboard></dashboard>
    </div>
  </div>
</template>
<script>
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'

export default {
  name: 'app',
  components: {
    Nav,
    Dashboard
  }
}
</script>
<style lang="scss">

$material-curve: all 375ms cubic-bezier(0.4, 0.0, 0.2, 1);
$navWidth: 40px;

#app {
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

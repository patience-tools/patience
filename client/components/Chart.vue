<template>
  <div class="chart" ref="chart"></div>
</template>
<script>
import Highcharts from 'highcharts/highstock'

export default {
  mounted() {
    console.log('chart mounted')
  }
}
</script>
<style lang="scss" scoped>
.chart {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}
</style>

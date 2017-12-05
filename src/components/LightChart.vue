<template>
  <div class="light-chart" ref="lightChart"></div>
</template>
<script>
import Highcharts from 'highcharts/highstock'

export default {
  props: {
    chart: Array
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>

.light-chart {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
</style>

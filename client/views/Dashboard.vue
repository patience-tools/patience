<template>
  <div class="dashboard page">

  </div>
</template>
<script>
import CoinMarketCap from 'node-coinmarketcap'
const cm = new CoinMarketCap()

export default {
  name: 'dashboard',
  mounted() {
    console.log('dashboard page mounted')
    cm.get('bitcoin', coin => {
      console.log('$BTC', coin)
    })
  }
}
</script>
<style lang="scss" scoped>

.dashboard {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}
</style>

<template>
  <div class="zenbot-config">

  </div>
</template>
<script>
export default {
  props: {
    submit: Function
  },
  data() {
    return {
      commands: [{
        name: 'trade',
        flags: [{
          name: 'paper',
          description: 'Only perform simulated trades while watching the market',
          value: false,
          raw: '--paper'
        }, {
          name: 'manual',
          description: '',
          value: false,
          raw: '--manual'
        }, {
          name: 'disable stats',
          description: '',
          value: false,
          raw: '--disable_stats'
        }, {
          name: 'reset profit',
          description: '',
          value: false,
          raw: '--reset_profit'
        }, {
          name: 'debug',
          description: '',
          value: false,
          raw: '--debug'
        }],
        options: [{
          raw: '--conf',
          type: '<path>',
          description: 'path to optional conf overrides file'
        }, {
          raw: '--strategy',
          type: '<name>',
          description: 'strategy to use',
        }, {
          raw: '--order_type',
          type: '<type>',
          description: 'order type to use (maker/taker)'
        }, {
          raw: '--currency_capital',
          type: '<amount>',
          description: 'for paper trading, amount of start capital in currency'
        }, {
          raw: '--asset_capital',
          type: '<amount>',
          description: 'for paper trading, amount of start capital in asset'
        }, {
          raw: '--avg_slippage_pct',
          type: '<pct>',
          description: 'avg. amount of slippage to apply to paper trades'
        }, {
          raw: '--buy_pct',
          type: '<pct>',
          description: 'buy with this % of currency balance'
        }, {
          raw: '--sell_pct',
          type: '<pct>',
          description: 'sell with this % of asset balance'
        }, {
          raw: '--markdown_buy_pct',
          type: '<pct>',
          description: '% to mark down buy price (previously the --markup_pct property)'
        }, {
          --markup_sell_pct',
          type: '<pct>',
          description: '% to mark up sell price (previously the --markup_pct property)'
        }, {
          raw: '--order_adjust_time', 
          type: '<ms>',
          description: 'adjust bid/ask on this interval to keep orders competitive'
        }, {
          raw: '--order_poll_time',
          type: '<ms>',
          description: 'poll order status on this interval'
        }, {
          raw: '--sell_stop_pct',
          type: '<pct>',
          description: 'sell if price drops below this % of bought price'
        }, {
          raw: '--buy_stop_pct',
          type: '<pct>',
          description: 'buy if price surges above this % of sold price'
        }, {
          raw: '--profit_stop_enable_pct',
          type: '<pct>',
          description: 'enable trailing sell stop when reaching this % profit'
        }, {
          raw: '--profit_stop_pct',
          type: '<pct>',
          description: 'maintain a trailing stop this % below the high-water mark of profit'
        }, {
          raw: '--max_sell_loss_pct',
          type: '<pct>',
          description: 'avoid selling at a loss percent under this float'
        }, {
          raw: '--max_slippage_pct',
          type: '<pct>',
          description: 'avoid selling at a slippage percent above this float'
        }, {
          raw: '--rsi_periods', 
          type: '<periods>',
          description: 'number of periods to calculate RSI at'
        }, {
          raw: '--poll_trades',
          type: '<ms>',
          description: 'poll new trades at this interval in ms'
        }]
      }, {
        name: 'sim'
      }]
    }
  }
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

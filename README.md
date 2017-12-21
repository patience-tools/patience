# Patience

A front end for [patience.broker](https://github.com/patience-tools/patience.broker). Patience is a cryptocurrency bot management platform. In other words, Patience is a UI for trading cryptocurrencies on various exchanges, but it controls bots to do the trading instead of manually trading. The major way Patience can do this is through the implementation of a client-server model.

## Client and Server

Patience is the client, and patience.broker is the server. Patience can run a broker locally, but it is better to run the broker on a VPS so your bots can run 24/7. If you turn off or sleep your computer while running a local broker, your bots will stop trading.

## Compartmentalized configuration

You can choose to keep configuration knowledge on either the server or the client. If you want bot configuration on the server or wallet knowledge on just the client, Patience can handle all of it.

## How to install

You need a modern installation of Nodejs, and you need [yarn](https://yarnpkg.com/en/docs/install). To install it is really easy after that

```shell
git clone https://github.com/patience-tools/patience.git
cd patience
yarn
npm run build 
```

## Todo

- [ ] add [etherdelta](https://etherdelta.com)
- [ ] add [ledger]()
- [ ] dashboard
- [ ] wallet
- [ ] login
- [ ] chart and bot controls
- [ ] add [bittrex](https://bittrex.com/home/api)
- [ ] add [gdax](https://docs.gdax.com/)
- [ ] add [kraken](https://www.kraken.com/help/api)
- [ ] add [bitfinex](https://docs.bitfinex.com/v1/docs/api-access)
- [ ] add [poloniex](https://poloniex.com/support/api/)
- [ ] add [quadriga](https://www.quadrigacx.com/api_info)
- [ ] add [gemini](https://docs.gemini.com/rest-api/)
- [ ] add [cex.io](https://cex.io/cex-api)
- [ ] add [bitstamp](https://www.bitstamp.net/websocket/) ([http](https://www.bitstamp.net/api/))

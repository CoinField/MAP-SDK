const expect = require('expect.js')
const { ManticoreSDK } = require('../testHelper')

describe('TickersApi', () => {
  const api = new ManticoreSDK.TickersApi();

  describe('getV2Tickers', () => {
    it('should call getV2Tickers successfully', (done) => {
      api.getV2Tickers((error, data, request) => {
        if (error) throw error;

        if (Object.keys(data).length > 0) {
          let key = Object.keys(data)[0];
          expect(data[key]).to.be.a(ManticoreSDK.TickerInfo);
        }

        done();
      });
    });
  });

  describe('getV2TickersMarket', () => {
    it('should call getV2TickersMarket successfully', (done) => {
      let market = 'btcusd';

      api.getV2TickersMarket(market, (error, data, request) => {
        if (error) throw error;

        expect(data).to.be.a(ManticoreSDK.TickerInfo);

        done();
      });
    });
  });
});

const expect = require('expect.js')
const { ManticoreSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new ManticoreSDK.DepositsApi();

  describe('DepositsApi', () => {
    describe('getV2Deposits', () => {
      it('should call getV2Deposits successfully', (done) => {
        let params = {
          'currency': "btc",
          'limit': 3,
          'state': "checked"
        };

        api.getV2Deposits(params, (error, data, request) => {
          if (error) throw error;

          // add more tests here

          done();
        });
      });
    });
  });
});

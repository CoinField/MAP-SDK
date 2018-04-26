const expect = require('expect.js')
const { ManticoreSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new ManticoreSDK.DepositApi();

  describe('DepositApi', () => {
    describe('getV2Deposit', () => {
      it('should call getV2Deposit successfully', (done) => {
        //uncomment below and update the code to test getV2DepositAddress
        //instance.getV2Deposit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});

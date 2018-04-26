const expect = require('expect.js')
const { ManticoreSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new ManticoreSDK.KApi();

  describe('KApi', () => {
    describe('getV2K', () => {
      it('should call getV2K successfully', (done) => {
        //uncomment below and update the code to test getV2K
        //instance.getV2K(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});

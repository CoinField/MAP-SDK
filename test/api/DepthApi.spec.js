const expect = require('expect.js')
const { ManticoreSDK, runWithMember } = require('../testHelper')

runWithMember((member) => {
  const api = new ManticoreSDK.DepthApi();

  describe('DepthApi', () => {
    describe('getV2Depth', () => {
      it('should call getV2Depth successfully', (done) => {
        //uncomment below and update the code to test getV2Depth
        //instance.getV2Depth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});

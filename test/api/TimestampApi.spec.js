const expect = require('expect.js')
const { ManticoreSDK } = require('../testHelper')

describe('TimestampApi', () => {
  const api = new ManticoreSDK.TimestampApi()

  describe('timestamp', () => {
    it('should return server time', (done) => {
      api.timestamp((error, data, request) => {
        if (error) { throw error }

        // allow 10 seconds delay
        let serverTime = Math.floor(data / 10)
        let localTime = Math.floor(Date.now() / 10000)

        expect(serverTime).to.equal(localTime)

        done()
      })
    })
  })
})

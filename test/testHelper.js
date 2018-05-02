const superagent = require('superagent')
const ManticoreSDK = require('../src/sdk')

const manticoreHost = process.env.MANTICORE_URL || 'http://localhost:8000'

module.exports = {
  ManticoreSDK,

  runWithMember (handler) {
    superagent.get(manticoreHost + '/test/members').end((error, response) => {
      if (error) { throw error }

      let member = response.body.members[0]
      ManticoreSDK.init(member.jwt, { basePath: manticoreHost + '/api/v2' })

      handler(member)
    })
  }
}

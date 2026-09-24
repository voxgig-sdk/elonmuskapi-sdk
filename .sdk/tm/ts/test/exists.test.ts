
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ElonmuskapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ElonmuskapiSDK.test()
    equal(testsdk instanceof ElonmuskapiSDK, true,
      'ElonmuskapiSDK.test() must return a client synchronously')
  })

})

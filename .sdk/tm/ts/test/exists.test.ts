
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ElonmuskapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ElonmuskapiSDK.test()
    equal(null !== testsdk, true)
  })

})

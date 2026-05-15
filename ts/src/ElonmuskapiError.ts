
import { Context } from './Context'


class ElonmuskapiError extends Error {

  isElonmuskapiError = true

  sdk = 'Elonmuskapi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ElonmuskapiError
}


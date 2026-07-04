# Elonmuskapi SDK utility: make_error

from __future__ import annotations
from core.operation import ElonmuskapiOperation
from core.result import ElonmuskapiResult
from core.control import ElonmuskapiControl
from core.error import ElonmuskapiError


def make_error_util(ctx, err):
    if ctx is None:
        from core.context import ElonmuskapiContext
        ctx = ElonmuskapiContext({}, None)

    op = ctx.op
    if op is None:
        op = ElonmuskapiOperation({})
    opname = op.name
    if opname == "" or opname == "_":
        opname = "unknown operation"

    result = ctx.result
    if result is None:
        result = ElonmuskapiResult({})
    result.ok = False

    if err is None:
        err = result.err
    if err is None:
        err = ctx.make_error("unknown", "unknown error")

    errmsg = ""
    if isinstance(err, ElonmuskapiError):
        errmsg = err.msg
    elif hasattr(err, "msg") and err.msg is not None:
        errmsg = err.msg
    elif isinstance(err, str):
        errmsg = err
    else:
        errmsg = str(err)

    msg = "ElonmuskapiSDK: " + opname + ": " + errmsg
    msg = ctx.utility.clean(ctx, msg)

    result.err = None

    spec = ctx.spec

    if ctx.ctrl.explain is not None:
        ctx.ctrl.explain["err"] = {"message": msg}

    sdk_err = ElonmuskapiError("", msg, ctx)
    sdk_err.result = ctx.utility.clean(ctx, result)
    sdk_err.spec = ctx.utility.clean(ctx, spec)

    if isinstance(err, ElonmuskapiError):
        sdk_err.code = err.code

    ctx.ctrl.err = sdk_err

    if ctx.ctrl.throw_err is False:
        return result.resdata

    raise sdk_err

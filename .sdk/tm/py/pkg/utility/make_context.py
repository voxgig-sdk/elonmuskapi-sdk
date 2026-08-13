# Elonmuskapi SDK utility: make_context

from projectname_sdk.core.context import ElonmuskapiContext


def make_context_util(ctxmap, basectx):
    return ElonmuskapiContext(ctxmap, basectx)

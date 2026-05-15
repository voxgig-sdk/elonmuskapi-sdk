# ProjectName SDK exists test

import pytest
from elonmuskapi_sdk import ElonmuskapiSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ElonmuskapiSDK.test(None, None)
        assert testsdk is not None

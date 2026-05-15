# Elonmuskapi SDK feature factory

from feature.base_feature import ElonmuskapiBaseFeature
from feature.test_feature import ElonmuskapiTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ElonmuskapiBaseFeature(),
        "test": lambda: ElonmuskapiTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

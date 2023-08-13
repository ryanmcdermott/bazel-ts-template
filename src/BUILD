load("@aspect_rules_ts//ts:defs.bzl", "ts_config")

exports_files([
    "package.json",
    "tsconfig.json",
    "package-lock.json",
])

ts_config(
    name = "app_config",
    src = "tsconfig.json",
    visibility = ["//visibility:public"],
)
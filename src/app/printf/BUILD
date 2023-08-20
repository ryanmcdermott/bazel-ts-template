load("@aspect_rules_ts//ts:defs.bzl", "ts_project")

ts_project(
    name = "printf",
    srcs = [
        "printf.ts", 
    ],
    declaration = True,
    tsc = "//src/third_party/js/typescript/lib:tsc_bin",
    tsconfig = "//src:app_config",
    visibility = ["//visibility:public"],
)
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@aspect_rules_js//js:defs.bzl", "js_binary")

ts_project(
    name = "adder",
    srcs = [
        "adder.ts",
    ],
    deps = [
        "//src/app/printf:printf"
    ],
    declaration = True,
    tsconfig = "//src:app_config",
    tsc = "//src/third_party/js/typescript/lib:tsc_bin",
    visibility = ["//visibility:public"],
)

ts_project(
    name = "main",
    srcs = [
        "main.ts",
    ],
    deps = [
        ":adder",
    ],
    tsc = "//src/third_party/js/typescript/lib:tsc_bin",
    declaration = True,
    tsconfig = "//src:app_config",
    visibility = ["//visibility:public"],
)

js_binary(
    name = "main_bin",
    data = [":main"],
    entry_point = "main.js",
)

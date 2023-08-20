load("@aspect_rules_js//js:defs.bzl", "js_binary")

js_binary(
    name = "tsc_bin",
    data = ["tsc", ":deps"],
    entry_point = "tsc",
    visibility = ["//visibility:public"],
)

filegroup(
    name = "deps",
    srcs = glob(
        [
            "**/*.ts",
            "**/*.js",
            "**/*.json",
        ],
    ),
    visibility = ["//visibility:public"],
)
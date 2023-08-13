load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
# load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
# load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")
load("@aspect_rules_js//js:defs.bzl", "js_run_binary")

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
    visibility = ["//visibility:public"],
    # link_workspace_root = True,
)

# ts_project(
#     name = "adder_test_lib",
#     srcs = [
#         "adder_test.ts",
#     ],
#     deps = [
#         ":adder",
#         "@npm//@types/jasmine",
#         "@npm//@types/node"
#     ],
#     declaration = True,
#     tsconfig = "//src:tsconfig.json",
#     visibility = ["//visibility:public"],
#     # link_workspace_root = True,
# )

# jasmine_node_test(
#     name = "adder_test",
#     templated_args = ["--bazel_patch_module_resolver"],
#     deps = [
#         ":adder_test_lib",
#     ],
# )


ts_project(
    name = "main",
    srcs = [
        "main.ts",
    ],
    deps = [
        ":adder",
    ],
    declaration = True,
    tsconfig = "//src:app_config",
    visibility = ["//visibility:public"],
    # link_workspace_root = True,
)

# js_binary(
#     name = "main_bin",
#     data = [":main"],
#     entry_point = "main.js",
# )

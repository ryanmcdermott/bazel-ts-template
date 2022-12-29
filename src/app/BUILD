load("@npm//@bazel/typescript:index.bzl", ts_proj = "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_binary")
load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")

ts_proj(
    name = "adder",
    srcs = [
        "adder.ts",
    ],
    deps = [
        "//src/app/printf:printf"
    ],
    declaration = True,
    tsconfig = "//src:tsconfig.json",
    visibility = ["//visibility:public"],
    link_workspace_root = True,
)

ts_proj(
    name = "adder_test_lib",
    srcs = [
        "adder_test.ts",
    ],
    deps = [
        ":adder",
        "@npm//@types/jasmine",
        "@npm//@types/node"
    ],
    declaration = True,
    tsconfig = "//src:tsconfig.json",
    visibility = ["//visibility:public"],
    link_workspace_root = True,
)

jasmine_node_test(
    name = "adder_test",
    templated_args = ["--bazel_patch_module_resolver"],
    deps = [
        ":adder_test_lib",
    ],
)


ts_proj(
    name = "main",
    srcs = [
        "main.ts",
    ],
    deps = [
        ":adder",
    ],
    declaration = True,
    tsconfig = "//src:tsconfig.json",
    visibility = ["//visibility:public"],
    link_workspace_root = True,
)

nodejs_binary(
    name = "main_bin",
    data = [":main"],
    entry_point = ":main.ts",
)

load("@npm//@bazel/typescript:index.bzl", ts_proj = "ts_project")

ts_proj(
    name = "printf",
    srcs = [
        "printf.ts", 
    ],
    declaration = True,
    tsconfig = "//src:tsconfig.json",
    visibility = ["//visibility:public"],
    link_workspace_root = True,
)
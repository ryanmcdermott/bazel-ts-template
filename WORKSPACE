workspace(name = "bazel_ts_template")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.8.0/rules_nodejs-5.8.0.tar.gz"],
)
load("@build_bazel_rules_nodejs//:repositories.bzl", "build_bazel_rules_nodejs_dependencies")
build_bazel_rules_nodejs_dependencies()


load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "npm_install")
node_repositories(
    node_version = "18.12.1",
)
npm_install(
    name = "npm",
    package_json = "//src:package.json",
    package_lock_json = "//src:package-lock.json",
)
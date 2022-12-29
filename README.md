# bazel-ts-template

This is a template for a TypeScript project using Bazel.

## Installation

First, ensure that you have [installed Bazel](https://bazel.build/install). Then run the following:

```
git clone https://github.com/ryanmcdermott/bazel-ts-template
```

## Running

### Main

```
bazel run //src/app:main_bin
```

### Tests

```
bazel test //src/app:adder_test
```
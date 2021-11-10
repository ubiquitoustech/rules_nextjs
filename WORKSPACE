# Declare the local Bazel workspace.
# This is *not* included in the published distribution.
workspace(
    name = "ubiquitous_tech_rules_nextjs",
)

# Install our "runtime" dependencies which users install as well
load("//nextjs:repositories.bzl", "rules_nextjs_dependencies")

rules_nextjs_dependencies()

load(":internal_deps.bzl", "rules_nextjs_internal_deps")

rules_nextjs_internal_deps()


load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")

node_repositories(
    node_version = "16.10.0",
)
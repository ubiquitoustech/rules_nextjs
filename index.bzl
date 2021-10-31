"NPM Public API re-exports"

load(
    "@ubiquitous_tech_rules_nextjs//nextjs/defs.bzl",
    _nextjs = "nextjs_build",
    _nextjs_dev = "nextjs_devserver_macro",
)

nextjs = _nextjs
nextjs_dev = _nextjs_dev

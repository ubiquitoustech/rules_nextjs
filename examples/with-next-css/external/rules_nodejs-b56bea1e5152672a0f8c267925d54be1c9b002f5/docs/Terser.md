<!-- *********************
  DO NOT EDIT THIS FILE
  It is a generated build output from Stardoc.
  Instead you must edit the .bzl file where the rules are declared,
  or possibly a markdown file next to the .bzl file
 ********************* -->

# Terser rules for Bazel

The Terser rules run the Terser JS minifier with Bazel.

Wraps the Terser CLI documented at https://github.com/terser-js/terser#command-line-usage

## Installation

Add the `@bazel/terser` npm package to your `devDependencies` in `package.json`.

## Installing with user-managed dependencies

If you didn't use the `yarn_install` or `npm_install` rule, you'll have to declare a rule in your root `BUILD.bazel` file to execute terser:

```python
# Create a terser rule to use in terser_minified#terser_bin
# attribute when using user-managed dependencies
nodejs_binary(
    name = "terser_bin",
    entry_point = "//:node_modules/terser/bin/uglifyjs",
    # Point bazel to your node_modules to find the entry point
    data = ["//:node_modules"],
)
```


## terser_minified

**USAGE**

<pre>
terser_minified(<a href="#terser_minified-name">name</a>, <a href="#terser_minified-args">args</a>, <a href="#terser_minified-config_file">config_file</a>, <a href="#terser_minified-debug">debug</a>, <a href="#terser_minified-sourcemap">sourcemap</a>, <a href="#terser_minified-src">src</a>, <a href="#terser_minified-terser_bin">terser_bin</a>)
</pre>

Run the terser minifier.

Typical example:
```python
load("@npm//@bazel/terser:index.bzl", "terser_minified")

terser_minified(
    name = "out.min",
    src = "input.js",
    config_file = "terser_config.json",
)
```

Note that the `name` attribute determines what the resulting files will be called.
So the example above will output `out.min.js` and `out.min.js.map` (since `sourcemap` defaults to `true`).
If the input is a directory, then the output will also be a directory, named after the `name` attribute.
Note that this rule is **NOT** recursive. It assumes a flat file structure. Passing in a folder with nested folder
will result in an empty output directory.


**ATTRIBUTES**


<h4 id="terser_minified-name">name</h4>

(*<a href="https://bazel.build/docs/build-ref.html#name">Name</a>, mandatory*): A unique name for this target.


<h4 id="terser_minified-args">args</h4>

(*List of strings*): Additional command line arguments to pass to terser.

Terser only parses minify() args from the config file so additional arguments such as `--comments` may
be passed to the rule using this attribute. See https://github.com/terser/terser#command-line-usage for the
full list of terser CLI options.

Defaults to `[]`

<h4 id="terser_minified-config_file">config_file</h4>

(*<a href="https://bazel.build/docs/build-ref.html#labels">Label</a>*): A JSON file containing Terser minify() options.

This is the file you would pass to the --config-file argument in terser's CLI.
https://github.com/terser-js/terser#minify-options documents the content of the file.

Bazel will make a copy of your config file, treating it as a template.

Run bazel with `--subcommands` to see the path to the copied file.

If you use the magic strings `"bazel_debug"` or `"bazel_no_debug"`, these will be
replaced with `true` and `false` respecting the value of the `debug` attribute
or the `--compilation_mode=dbg` bazel flag.

For example

```
{
    "compress": {
        "arrows": "bazel_no_debug"
    }
}
```

Will disable the `arrows` compression setting when debugging.

If `config_file` isn't supplied, Bazel will use a default config file.

Defaults to `@npm//@bazel/terser:terser_config.default.json`

<h4 id="terser_minified-debug">debug</h4>

(*Boolean*): Configure terser to produce more readable output.

Instead of setting this attribute, consider using debugging compilation mode instead
bazel build --compilation_mode=dbg //my/terser:target
so that it only affects the current build.

Defaults to `False`

<h4 id="terser_minified-sourcemap">sourcemap</h4>

(*Boolean*): Whether to produce a .js.map output

Defaults to `True`

<h4 id="terser_minified-src">src</h4>

(*<a href="https://bazel.build/docs/build-ref.html#labels">Label</a>, mandatory*): File(s) to minify.

Can be a .js file, a rule producing .js files as its default output, or a rule producing a directory of .js files.

Note that you can pass multiple files to terser, which it will bundle together.
If you want to do this, you can pass a filegroup here.


<h4 id="terser_minified-terser_bin">terser_bin</h4>

(*<a href="https://bazel.build/docs/build-ref.html#labels">Label</a>*): An executable target that runs Terser

Defaults to `@npm//@bazel/terser/bin:terser`


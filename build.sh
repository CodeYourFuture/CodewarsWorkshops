#!/bin/bash

set -euo pipefail

./download-claat-linux.sh
PATH="/tmp/claat:${PATH}" python3 ./build.py

sed -e 's#https://storage.googleapis.com/claat-public#/static#g' -i build/*/index.html

# The public static hosting seems offline (e.g. https://storage.googleapis.com/claat-public/codelab-elements.css) so we vendor these assets:
# Built by running `USE_BAZEL_VERSION=0.19.1 bazel build :bundle` with patches to:
# 1. `//codelab-elements/google-codelab-analytics`: `suppress = ["strictDependencies", "missingProvide", "checkVars", "missingProperties", "unusedLocalVariables", "unusedLocalVariables"],`
# 2. `//codelab-elements/google-codelab`: `suppress = ["unusedLocalVariables"],`
mkdir build/static
cp static/* build/static/

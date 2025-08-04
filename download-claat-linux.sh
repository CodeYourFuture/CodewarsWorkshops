#!/bin/bash

set -euo pipefail

mkdir /tmp/claat
curl --fail -L -o /tmp/claat/claat https://github.com/googlecodelabs/tools/releases/download/v2.2.6/claat-linux-amd64
chmod 0755 /tmp/claat/claat

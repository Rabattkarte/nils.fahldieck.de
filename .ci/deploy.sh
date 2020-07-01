#!/usr/bin/env bash
set -e

if [ -z ${deploy_host+x} ]; then echo "E: Variable 'deploy_host' is unset" && exit 1; fi
if [ -z ${deploy_dest+x} ]; then echo "E: Variable 'deploy_dest' is unset" && exit 1; fi

hugo --cleanDestinationDir && rsync -avz --delete public/ "$deploy_host:$deploy_dest"

exit 0

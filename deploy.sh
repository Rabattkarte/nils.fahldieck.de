#!/bin/sh

set -x
set -e

# CURRENT_COMMIT=$(git rev-parse HEAD)
HOST=$1
HOSTNAME=nils.fahldieck.de

hugo && rsync -avz --delete public/ $HOST:"\$HOME/www/$HOSTNAME"
# hugo && rsync -avz --delete public/ $HOST:"\$HOME/www/$HOSTNAME/$CURRENT_COMMIT"
#   && ssh $HOST ln -vsf \$HOME/www/$HOSTNAME/current \./$CURRENT_COMMIT
# ssh $HOST ln -vsf \$HOME/www/$HOSTNAME/$CURRENT_COMMIT ./current

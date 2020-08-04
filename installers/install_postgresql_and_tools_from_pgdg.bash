#!/bin/bash

set -u
set -e


GIT_DIR="$BLUE_DIR/third_party_software"
mkdir "$GIT_DIR"
cd "$GIT_DIR"

for GIT_URL in https://github.com/pgexperts/flexible-freeze.git \
               https://github.com/pgexperts/pgx_scripts \
               https://github.com/pgexperts/add-pgdg-apt-repo; do
    git clone $GIT_URL
done


BPG="postgresql${BLUE_POSTGRESQL_VERSION}"
./add-pgdg-apt-repo/add-pgdg-apt-repo.sh
sudo yum install --yes \
     "$BPG-client" \
     "$BPG-server" \
     "$BPG-contrib" \
     "$BPG-dev" \
     "$BPG-pgfincore" \
     "$BPG-pgbadger" \
     "$BPG-pgbackrest" \
     "$BPG-pgrepack" \
     "$BPG-pgcenter" \
     "$BPG-pgbouncer"

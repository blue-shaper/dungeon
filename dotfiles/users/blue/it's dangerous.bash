#!/bin/bash

# set -e

unalias t 2> /dev/null
function t() {
    cd "$BLUE_DIR/db"
    mkdir -p backups

    if pg_dump -Fc blue_shaper > backups/blue_shaper-$(timestamp).dump; then
        psql -d "$PGDATABASE" -c "DROP TABLE IF EXISTS sigs"
        psql -d "$PGDATABASE" -f schema.sql
        psql -c "COPY sigs FROM '/Users/quinn/Desktop/blue_shaper/db/sigs.csv' csv header"
    else
        echo 'Backup command failed: "pg_dump -Fc blue_shaper > backups/blue_shaper-$(timestamp).dump"'
        echo "I made no DB changes, since it would be unsafe to do so without first making a successful backup."
        exit 255
    fi
}

#!/bin/bash

set -u

cd "$BLUE_DIR/db"

createdb > /dev/null 2>&1 || exit
psql --quiet -f "db/schema.sql"

set -a
VISUAL='emacs -nw'
EDITOR="$EDITOR"

HISTFILESIZE=
HISTSIZE=
HISTTIMEFORMAT='%Y%m%dT%H%M%S%z  '
set +a

## Broken; leaves you in a psql prompt after it runs. Figure out why.
# function psql() {
#     PGOPTIONS='--client-min-messages=warning' $(which psql) --no-psqlrc --quiet --expanded
# }

# ta $SESSION_NAME ("Tmux Attach"): attach to named session, creating if needed.
function ta() {
    if (! tmux has-session -t $1 2> /dev/null); then
        tmux new-session -d -s $1 -n $1
    fi
    tmux -2 attach-session -t $1
}

# tl ("Tmux List"): list running tmux sessions.
function tl() {
    tmux list-sessions 2> /dev/null
}

function timestamp() {
    date +%Y%m%dT%H%M%S%z
}

"use strict";

window.onload = main;


const debug = true;
const r = function (string) {
    if (debug) {
        console.log(string);
    }
}


class Move {
    constructor (startRoom, dir) 
        this.startRoom = startRoom;
        

        possibleDirections =
        if (dir in (startRoom.exits(
        this.turns = turns;
    }
}


class GridBug extends Error {
    constructor (i, room, dir, errorString) {
        this.name = 'GridBug';
        this.message = errorString + "\nThis room: '" + this + "'.\nOther room (exit '" + i + "' (" + dir + ") of this room): '" + room + "'");
    }
}


class Room {
    const directions = {
        'n': 's',
        's': 'n',
                 
        'e': 'w',
        'w': 'e'
    };

    validate (i, dir, room) {
        if (!(dir in directions)) {
            throw new GridBug("Invalid exit direction '" + dir + "' at element " + i + " of array exits = " + exits + " (" + pair + "). Valid directions are " + directions.keys();
        }
        else {
            let opposite = directions[dir];

            for (e of room.exits) {
                if (e[0] === this) {
                    if (e[1] !== opposite) {
                        throw new GridBug(i, dir, room, "This room leads '" + dir + "' to another room, but that other room leads '" + e[1] + "' to this room!");
                    }
                }
                else if (e[1] === opposite) {
                    throw new GridBug(i, dir, room, "This room leads '" + dir + "' to another room, but that other room already leads '" + opposite + "to a third room! Third room: '" + e[0] + "'.");
                }
            }
        }
    }

    constructor (exits, items, creatures) {
        this.items = items;
        this.creatures = creatures;

        /*
        The exits arg must be an array of two-element arrays, like this:
            [[roomA, 'n'], [roomB, 'w']]
        The first element of each sub-array must be a Room object.
        The second element must be a cardinal direction: 'n', 's', 'e', or 'w'.
        */

        for (let i = 0; i < exits.length; i++) {
            let pair, room, dir;
            pair = exits[i];
            [room, dir] = pair;

            if (room === undefined) {
                oppositeDirection = directions[dir];
                room = new Room([[this, oppositeDirection]], [], []);
                pair[0] = room;
            }
            else {
                this.validate(i, room, dir);
                if (this.....in exits) {
                if (opposite in rooms.exit
                if opposite not in room.exits.map(x => x[1]) {
                    room.exits.append([this, opposite]);
                }
                else {
                    
                dir in room.exits.map {
                
            }
        }
        this.exits = exits;
            
    }
}


function main () {
    return;
}
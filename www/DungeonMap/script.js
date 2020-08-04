"use strict";

window.onload = main;

const debug = true;
const r = function (string) {
    if (debug) {
        console.log(string);
    }
    return;
}


class ColorScheme {
    constructor (background_color, unexplored_color, wall_color, room_color, door_color) {
        this.room = room_color;
        this.door = door_color;
        this.wall = wall_color;
        this.unexplored = unexplored_color;
        this.background = background_color;
    }
}


class Dungeon {
    constructor (w, h) {
        this.w_in_rooms = w;
        this.h_in_rooms = h;
        this.center_coords_in_rooms = [
            Math.floor(w/2),
            Math.floor(h/2)
        ];
    }
}


/*
class RoguelikeDungeonMap {
    const charFor = {
        'player': '@',

        'unexplored': '.',
        'emptySpace': ' ',
        'hWall': '-',
        'vWall': '|',
        'hDoor': '+',
        'vDoor': '+',
    };
    
    constructor (dungeon, preElement) {
        this.dungeon = dungeon;
        this.pre = preElement;
        
        // Square rooms, 3 x 3 tiles.
        this.roomW = 3;
        this.roomH = 3;

        // Rectangular doors, vertical and horizontal
        this.vDoorW = 1;
        this.vDoorH = 3;

        this.hDoorW = 3;
        this.hDoorH = 1;

        // Dimension in characters.
        this.mapW = dungeon.w_in_rooms * (this.roomW + this.vDoorW) - this.vDoorW;
        this.mapH = dungeon.h_in_rooms * (this.roomH + this.hDoorH) - this.hDoorH);

        this.arr = new Array(mapH);
        for (let y = 0; y < this.mapH; y++) {
            arr[y] = new Array(this.mapW).fill(charFor.unexplored);
        }
    }

    drawRoomAt (x, y) {
        let xChars = x * (this.roomW + this.hdoorW);
        let yChars = y * (this.roomH + this.vdoorH);
        this.arr[yChars].splice[xChars]


    drawRow (y) {
        
    }

    draw () {
    }
*/

class BitmapDungeonMap {
    constructor (dungeon, canvas, scale, color_scheme) {
        this.dungeon = dungeon;
        this.scale = scale;
        this.color_scheme = color_scheme;
        this.canvas = canvas;
        this.c = canvas.getContext('2d');

        // Square rooms, 3 x 3 tiles.
        this.room_w_in_tiles = 3;
        this.room_h_in_tiles = 3;

        // Rectangular doors, vertical and horizontal
        this.vdoor_w_in_tiles = 1;
        this.vdoor_h_in_tiles = 3;

        this.hdoor_w_in_tiles = 3;
        this.hdoor_h_in_tiles = 1;

        // Multiply scale * tiles to get measurements in pixels.
        this.room_w = scale * this.room_w_in_tiles;
        this.room_h = scale * this.room_h_in_tiles;
        this.vdoor_w = scale * this.vdoor_w_in_tiles;
        this.vdoor_h = scale * this.vdoor_h_in_tiles;
        this.hdoor_w = scale * this.hdoor_w_in_tiles;
        this.hdoor_h = scale * this.hdoor_h_in_tiles;

        this.map_w = this.dungeon.w_in_rooms * (this.room_w + this.hdoor_w) - this.hdoor_w;
        this.map_h = this.dungeon.h_in_rooms * (this.room_h + this.vdoor_h) - this.vdoor_h;
}

    draw_row (y) {
        var c = this.c;

        for (var i = 0; i < this.map_w; i += (this.room_w + 2 * this.vdoor_w)) {
            var x = i + this.room_w;
            
            r('drawing room at [' + x + ', ' + y + ']')
            c.beginPath();
            c.rect(x, y, this.room_w, this.room_h);
             c.fillStyle = this.color_scheme.room_color;
            c.closePath();

            var xd = x + this.room_w + this.vdoor_w;

            r('drawing vertical door at [' + xd + ', ' + y + ']');
            c.beginPath();
            c.rect(xd, y, this.vdoor_w, this.vdoor_h);
            c.fillStyle = this.color_scheme.door_color;
            c.closePath();
        }
    }

    draw () {
        r('room_h is ' + this.room_h);
        r('hdoor_h is ' + this.hdoor_h);
        var decr = this.room_h + this.hdoor_h;
        r('y decrement is ' + decr);

        for (var y = this.map_h; y > 0; y -= (this.room_h + this.hdoor_h)) {
            r('drawing row at y = ' + y);
            this.draw_row(y);
        }
    }

}

    
function main() {
    r('in main()')

    let pixelsPerTile = 15;
    let roomsWide = 3;
    let roomsHigh = 3;

    let colorScheme = new ColorScheme('black', 'lightsteelblue', 'green', 'mediumblue', 'midnightblue');

    let dungeon = new Dungeon(roomsWide, roomsHigh);
    

    let canvas = document.getElementById('bitmapMap');
    let bitmapMapMapMap = new BitmapDungeonMap(dungeon, canvas, pixelsPerTile, colorScheme);
    bitmapMapMapMap.draw();

    let rogueOne = new RoguelikeDungeonMap(dungeon);
    rogueOne.draw();
}

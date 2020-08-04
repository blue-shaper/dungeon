Dungeon Detritus Directories
============================

db
--

* Currently just data for a l337 ASCII .signature rotator.
    * I might later add code here for persisting the state of a dungeon,
      but I'm leaning towards doing that in some non-relational
      format better suited to the object-oriented representation
      of the dungeon in memory — maybe just a JSON dump.

dotfiles
--------

* Various generic (and personal) config files for working with the Blue Shaper
  code on the Unix command line.

installers
----------

* Just a little code for setting up a game server. So far all it does is to
  install PostgreSQL. Works on the Ubuntu Linux distro (and Debian, but
  I may break Debian compatibility later).

prototypes
----------

* roll: an abortive attempt at a spreadsheet-based roller, since superseded
  by the VBA code (see repo #FIXME: add a URL once he uploads this code).

www
---

JavaScript, HTML, and CSS for setting up the webapp game.

* DungeonMap: drawing routines for bitmapped and roguelike dungeons.
  The bitmapped code (based on the HTML5 canvas) works.
  The roguelike code is still a work-in-progress.

* RoomGraph: work-in-progress routines for representing the exits from
  a room and their directions, adding a room, validating that the
  exits line up, et cetera. Not yet working.

  A room is represented as an array of [exit, direction] pairs, where
  _exit_ is a reference to another room object, and direction is one of
  'n', 's', 'e', or 'w'.

  The array of exits let us model the dungeon as a graph, which will
  be useful for monster AI and other purposes. For more on graph theory
  as it applies to games, see [Red Blob's excellent introduction|https://www.redblobgames.com/pathfinding/a-star/introduction.html].

  The _direction_ element tells us the spatial layout of the graph nodes,
  which allows us to draw them.

  Eventually I'll hook up this code to the drawing routines in DungeonMap,
  so we'll have both a screen representation and an OO representation
  driving it.

//
// REMEMBER / TIPS
//
// Add feature support checks:
	window.TouchEvent.isPresent();
	window.WebSocket.isPresent();
	navigator.geolocation.isPresent();
	window.DeviceOrientationEvent.isPresent();
	window.localStorage.isPresent();
	window.openDatabase.isPresent();
// Hardware acceleration for animation
// Data URIs for images, or sprites
// RequestAnimationFrame() for animations
// e.preventDefault() , cancelBubble() for IE (look up IE spelling)
// Debugging with try/catch or "I'm still here" alert
// Look into HTML5 web SQL database
// Websocket URL: http://technologeeks.com/e65/submit.php?user=<fill_your_name_here>


Get screen orientation - portrait or landscape

If landscape
	width = 15
	height = 10
If portrait
	width = 10
	height = 15

pit object
	height
	width
	matrix
		array of 0s based on height and width 
	getFirstOccupiedRowForColumn(column)
		for (var row = 0; row < height; row++) {
			if (matrix[row][column] != 0) {
				firstOccupiedRow = row;
				break; 
			}
			return firstOccupiedRow;
		}
	getFirstOccupiedColumnToRightForRow(currentColumn, row)
		for (var column = currentColumn + 1; column < width; column++) {
			if (matrix[row][column] != 0) {
				firstOccupiedColumn = column;
				break; 
			}
			return firstOccupiedColumn;
		}
	getFirstOccupiedColumnToLeftForRow(currentColumn, row)
		for (var column = currentColumn - 1; column >= 0; column--) {
			if (matrix[row][column] != 0) {
				firstOccupiedColumn = column;
				break; 
			}
			return firstOccupiedColumn;
		}

function Pit(height, width) {
	this.height = height;
	this.width = width;
	var pitArray = "["
	for (var i = 0; i < height; i++) {
		pitArray = pitArray + "["
		for (var i = 0; i < width-1; i++) {
			pitArray = pitArray + "0,";
		};
		pitArray = pitArray + "0],"
	};
	pitArray = pitArray + "]"
	this.pitMatrix = pitArray;
}



var pit = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
]

Pit array (matrix cells)
	row 0 				// top of pit
		col 0
		col 1
		col 2
		…
		col 9
	row 1
	…
	row 20				// bottom of pit


Pit array (matrix cell) values
0 	// empty
C 	// cube
R 	// rod
L 	// L shape
J 	// reverse L shape
T 	// T shape
Z 	// Z shape
S 	// reverse Z shape


Block properties
	topleft_x 	// vertical matrix position of top left corner of block
	topleft_y	// horizontal matrix position of top left corner of block
	filled_char	// uppercase letter used to denote a filled space for this block type

Block matrices
	Cube
		XX
		XX
Orientation 0, 90, 180, 270
			row 0
				col 0 = C
col 1 = C
			row 1
				col 0 = C
col 1 = C
	
	Rod
		X
		X
		X
		X
		Orientation 0, 180
			row 0
				col 0 = r
			row 1
				col 0 = r		
			row 2
				col 0 = r
			row 3
				col 0 = R
		
		XXXX
		Orientation 90, 270
			row 0
				col 0 = R
				col 1 = R
				col 2 = R
				col 3 = R

	L shape
		X
		X
		XX
		Orientation 0
			row 0
				col 0 = l
			row 1
				col 0 = l
			row 2
				col 0 = L
				col 1 = L

		XXX
		X
		Orientation 90
			row 0
				col 0 = l
				col 1 = L
				col 2 = L
			row 1
				col 0 = L

		XX
		  X
		  X
		Orientation 180
			row 0
				col 0 = L
				col 1 = l
			row 1
				col 1 = l		// okay to start at 1?
			row 2
				col 1 = L		// okay to start at 1?

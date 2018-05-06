var t;
var startx, starty, x, y, tsize;
var xstep, ystep;
var dirBallx, dirBally;
var dirBallStartx, dirBallStarty;
var amount = 35;
var drag = 5;
var startTyping;
var myFont;
var myImage;


function preload() {
	myFont = loadFont('fonts/bebas.ttf');
	myImage = loadImage('img/legenda.png');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont(myFont);
	tsize = 100;
	t = 'HELLO WORLD';
	startTyping = false;
	noFill();
	stroke(255);
	strokeWeight(1);
	dirBallx = (width / 2) + (amount * (1 * drag));
	dirBally = (height / 2) + (amount * (-1 * drag));
	rectMode(CENTER);
}


function draw() {
	background(0);



	textSize(tsize);
	x = (width / 2) - (textWidth(t) / 2);

	if (mouseIsPressed) {
		dirBallx = dirBallStartx + (mouseX - startx);
		dirBally = dirBallStarty + (mouseY - starty);
	}

	xstep = (dirBallx - width / 2) / amount;
	ystep = (dirBally - height / 2) / amount;


	txt();

	if (!startTyping) {
		image(myImage, (width / 2) - (myImage.width / 2), (height / 2) + 100);
	} else {
	    stroke(255, 100);
	    //rect(width/2, height/2, 720, 720);
	}


}


function keyTyped() {
	if (startTyping === false) {
		t = '';
		startTyping = true;
	}
	t += key;
}


function keyPressed() {

	print(keyCode);

	if (keyCode == 8 && startTyping === true) {
		if (t.length > 0) {
			t = t.substring(0, t.length - 1);
			if (t === '') {
				t = 'HELLO WORLD';
				startTyping = false;
			}
		}
	} else if (keyCode === 38) {
		tsize += 10;
	} else if (keyCode === 40) {
		tsize -= 10;
	} else if (keyCode === 37) {
		amount -= 5;
	} else if (keyCode === 39) {
		amount += 5;
	} else if (keyCode === 27) {
		t = 'HELLO WORLD';
		startTyping = false;
	}
}


function txt() {
	var xoff = 0;
	var yoff = 0;
	var o = 0;
	for (var i = 0; i < amount; i++) {
		//stroke(255, 100 + o, 225, o);

		if (i < (amount / 4)) {
			stroke(255, 100, 225, 50);
		}

		if (i > (amount / 4) && i < ((amount / 4 ) * 3)) {
			stroke(255, 150, 225, 100);
		}

		if (i > ((amount / 4) * 3) && i < (amount - 2)) {
			stroke(255, 100);
		}

		if (i === (amount - 1)) {
			stroke(255, 200);
		}


		y = (height / 2) + (tsize / 4);
		text(t, x + xoff, y + yoff);
		xoff += xstep / drag;
		yoff += ystep / drag;
		o += 4;
	}
}


function mousePressed() {
	startx = mouseX;
	starty = mouseY;
	dirBallStartx = dirBallx;
	dirBallStarty = dirBally;
}

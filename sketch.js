var gameState, intro1, intro2, start, startButtonImg, startButton, rightArrowImg, rightArrowButton, diaRoomImage, officeImage;
var levi, ryan, leon, owen, lukas, jack, evan, steve, jace, jose, allPlayers, player2Score, player1Score;
var leviImage, ryanImage, leonImage, owenImage, lukasImage, jackImage, evanImage, steveImage, jaceImage, joseImage;
var clue1, clue2, clue3, clue4, clue5, clue6, clue7, clue8, clue9, clue10, lostImage1, wonImage1, lostImage2, wonImage2;
var min, sec, currentHr, currentMin, currentSec, endHour, playerCount, timer, score, submitImage, submitBG, submitButton;
var part2IntroWonImage, part2IntroLostImage, part2IntroBothLostImage, part2IntroBothWonImage, player1x, player2x;
var player1Image, player2Image, noelImage, noel2, policeImage, police, player1, player2, contButton, contImage, bankImage;
var noelX, policeX, readyImage, ready, player1Ready, player2Ready, player2Score2, player1Score2, stillBoy, stillGirl;
var players, bulletGroup, bulletImage, stillPolice, stillNoel, paperSound, bulletSound, clueSound, lostSound, submitSound;
var startMusic,  playMusic, endMusic, obstacleGroup, invGround, winBG, escapeBG, jailBG;
var endTime = 0;
var counter = 0;

function preload() {

    //background images with no text
    startImg = loadImage("images/start.jpg");
    diaRoomImage = loadImage("images/diamondRoom.jpg");
    officeImage = loadImage("images/office.png");
    submitBG = loadImage("images/submitImg.jpg");
    bankImage = loadImage("images/bank.png");
    winBG = loadImage("images/winBG.jpg");
    escapeBG = loadImage("images/citiesBG.jpg");
    jailBG = loadImage("images/jailBG.jpg");
    
    //background images with text
    intro1 = loadImage("images/Intro1.png");
    intro2 = loadImage("images/Intro2.png");
    lostImage1 = loadImage("images/lost1.png");
    lostImage2 = loadImage("images/lost2.png");
    wonImage1 = loadImage("images/won1.png");
    wonImage2 = loadImage("images/won2.png");
    part2IntroWonImage = loadImage("images/won.png");
    part2IntroLostImage = loadImage("images/lost.png");
    part2IntroBothLostImage = loadImage("images/bothLost.png");
    part2IntroBothWonImage = loadImage("images/bothWon.png");

    //button images
    startButtonImg = loadImage("images/startButton.png");
    rightArrowImg = loadImage("images/rightArrow.png");
    submitImage = loadImage("images/submit.png");
    contImage = loadImage("images/continue.png");
    readyImage = loadImage("images/ready.png");

    //sprite images
    player1Image = loadAnimation("images/player11.png", "images/player12.png", "images/player13.png", "images/player13.png");
    player2Image = loadAnimation("images/player24.png", "images/player23.png", "images/player22.png", "images/player21.png", );
    noelImage = loadAnimation("images/noel1.png", "images/noel2.png", "images/noel3.png", "images/noel4.png", "images/noel5.png", "images/noel6.png", "images/noel7.png", "images/noel8.png", "images/noel9.png", "images/noel10.png");
    policeImage = loadAnimation("images/police8.png", "images/police7.png", "images/police6.png", "images/police5.png", "images/police4.png", "images/police3.png", "images/police2.png", "images/police1.png");
    stillBoy = loadImage("images/player12.png");
    stillGirl = loadImage("images/player23.png");
    stillPolice = loadImage("images/police2.png");
    stillNoel = loadImage("images/noel1.png");
    bulletImage = loadImage("images/bullet.png")
    
    //suspect images
    leviImage = loadImage("images/levi.png");
    ryanImage = loadImage("images/ryan.png");
    leonImage = loadImage("images/leon.png");
    owenImage = loadImage("images/owen.png");
    lukasImage = loadImage("images/lukas.png");
    jackImage = loadImage("images/jack.png");
    evanImage = loadImage("images/evan.png");
    steveImage = loadImage("images/steve.png");
    jaceImage = loadImage("images/jace.png");
    joseImage = loadImage("images/jose.png");

    //clue backgrounds
    clue1 = loadImage("images/clue1.png");
    clue2 = loadImage("images/clue2.png");
    clue3 = loadImage("images/clue3.png");
    clue4 = loadImage("images/clue4.png");
    clue5 = loadImage("images/clue5.png");
    clue6 = loadImage("images/clue6.png");
    clue7 = loadImage("images/clue7.png");
    clue8 = loadImage("images/clue8.png");
    clue9 = loadImage("images/clue9.png");
    clue10 = loadImage("images/clue10.png");

    //obstacle images
    ob1 = loadImage("obstacles/ice.png");
    ob2 = loadImage("obstacles/water.png");
    ob3 = loadImage("obstacles/water2.png");
    ob4 = loadImage("obstacles/mud.png");
    ob5 = loadImage("obstacles/mud2.png");

    //sounds
    paperSound = loadSound("sound/paperSound.mp3");
    buttonSound = loadSound("sound/buttonSound.mp3");
    bulletSound = loadSound("sound/bulletSound.mp3");
    clueSound = loadSound("sound/clueSound.mp3");
    submitSound = loadSound("sound/submitSound.mp3");
    lostSound = loadSound("sound/lostSound.mp3");
    startMusic = loadSound("sound/startMusic.mp3");
    playMusic = loadSound("sound/playMusic.mp3");
    endMusic = loadSound("sound/endMusic.mp3");
}

function setup() {
    createCanvas(1300,700);
    gameState = "start";

    bulletGroup = createGroup();
    obstacleGroup = createGroup();

    currentSec = second();
    currentHr = hour();

    //people sprites
    noel2 = createSprite(1000,500,10,10);
    noel2.addImage(stillNoel);
    noel2.scale = 1.7;
    noel2.visible = false;

    player2 = createSprite(400,500,50,50);
    player2.addImage(stillGirl);
    player2.scale = 0.7;
    player2.visible = false;

    player1 = createSprite(800,500,50,50);
    player1.addImage(stillBoy);
    player1.scale = 0.7;
    player1.visible = false;

    players = [player1, player2];

    police = createSprite(100,500,10,10);
    police.addImage(stillPolice);
    police.scale = 1;
    police.visible = false;

    //button sprites
    submitButton = createSprite(1150,600,10,10);
    submitButton.addImage(submitImage);
    submitButton.scale = 0.3;

    ready = createSprite(650,350,10,10);
    ready.addImage(readyImage);
    ready.scale = 0.3;
    ready.visible = false;

    contButton = createSprite(650,500,10,10);
    contButton.addImage(contImage);
    contButton.scale = 0.7;
    contButton.visible = false;

    startButton = createSprite(650,390,50,50);
    startButton.addImage(startButtonImg);
    startButton.scale = 0.20;
    submitButton.visible = false;

    rightArrowButton = createSprite(1200,600,50,50);
    rightArrowButton.addImage(rightArrowImg);
    rightArrowButton.scale = 0.20;

    //suspect sprites
    levi = createSprite(80,500);
    levi.addImage(leviImage);
    levi.scale = 0.25;
    
    ryan = createSprite(200,500);
    ryan.addImage(ryanImage);
    ryan.scale = 0.25;
    
    leon = createSprite(320,500);
    leon.addImage(leonImage);
    leon.scale = 0.25;
   
    owen = createSprite(440,500);
    owen.addImage(owenImage);
    owen.scale = 0.25;
   
    lukas = createSprite(560,500);
    lukas.addImage(lukasImage);
    lukas.scale = 0.25;
   
    jack = createSprite(80,620);
    jack.addImage(jackImage);
    jack.scale = 0.25;
   
    evan = createSprite(200,620);
    evan.addImage(evanImage);
    evan.scale = 0.25;
  
    steve = createSprite(320,620);
    steve.addImage(steveImage);
    steve.scale = 0.25;
  
    jace = createSprite(440,620);
    jace.addImage(jaceImage);
    jace.scale = 0.25;
   
    jose = createSprite(560,620);
    jose.addImage(joseImage);
    jose.scale = 0.25;

    //setting up database
    database = firebase.database();
    player = new Player();
    player.getCount();
    player.getScore();
    Player.getPlayerInfo();
}

function draw() {

    min = minute();
    sec = second();
    endTime = nf(endTime,2);

    //creating invisible ground
    if(player.index !== null) {
        if(player.index === 1) {
            invGround = createSprite(player1.x,635,1300,10);
            player1.collide(invGround);
            invGround.visible = false;
        } else if(player.index === 2) {
            invGround = createSprite(player2.x,635,1300,10);
            player2.collide(invGround);
            invGround.visible = false;
        }
    }

    //defining variables from database
    var noelVRef = database.ref('noel/visible');
    noelVRef.on("value",(data)=>{
        noel2.visible = data.val();
    })

    var player1ScoreRef = database.ref('players/player1/score');
    player1ScoreRef.on("value",(data)=>{
        player1Score = data.val();
    })

    var player2ScoreRef = database.ref('players/player2/score');
    player2ScoreRef.on("value",(data)=>{
        player2Score = data.val();
    })

    var player1Score2Ref = database.ref('players/player1/score2');
    player1Score2Ref.on("value",(data)=>{
        player1Score2 = data.val();
    })

    var player2Score2Ref = database.ref('players/player2/score2');
    player2Score2Ref.on("value",(data)=>{
        player2Score2 = data.val();
    })

    var player1ReadyRef = database.ref('players/player1/ready');
    player1ReadyRef.on("value",(data)=>{
        player1Ready = data.val();
    })

    var player2ReadyRef = database.ref('players/player2/ready');
    player2ReadyRef.on("value",(data)=>{
        player2Ready = data.val();
    })

    var player1xRef = database.ref('players/player1/x');
    player1xRef.on("value",(data)=>{
        player1x = data.val();
    })

    var player2xRef = database.ref('players/player2/x');
    player2xRef.on("value",(data)=>{
        player2x = data.val();
    })

    var noelRef = database.ref('noel/x');
    noelRef.on("value",(data)=>{
        noelX = data.val();
    })

    var policeRef = database.ref('police/x');
    policeRef.on("value",(data)=>{
        policeX = data.val();
    })

    //defining the ending hour and current hour
    if(min+30 > 60) {
        endHour = currentHr+1;
    } else {
        endHour = currentHr;
    }
    endHour = nf(endHour,2);

    if(endHour > 12) {
        endHour = endHour-12;
    }

    if(endTime > 60) {
        endTime = endTime-60;
    }

    if(gameState==="start") {
        background(startImg);
        textSize(50);
        textFont("georgia");
        strokeWeight(5);
        stroke(random(0,255),random(0,50),random(0,255));
        fill(255);
        push();
        textAlign(CENTER);
        text("Crack the Case or Crumble in Court",650,325);
        pop();

        //making buttons and suspects invisible
        rightArrowButton.visible = false;
        submitButton.visible = false;
        levi.visible = false;
        ryan.visible = false;
        leon.visible = false;
        owen.visible = false;
        lukas.visible = false;
        jack.visible = false;
        evan.visible = false;
        steve.visible = false;
        jace.visible = false;
        jose.visible = false;
        
        if(mousePressedOver(startButton)) {
            gameState = "intro";
            startMusic.play();
            buttonSound.play();
            playerCount++;
            player.updateCount(playerCount);
        }
    }

    if(gameState === "intro") {
        background(intro1);
        startButton.remove();

        //right arrow button
        rightArrowButton.visible = true;
        if(mousePressedOver(rightArrowButton)) {
            gameState = "intro2";
            buttonSound.play();
        }

        //making suspects invisible
        levi.visible = false;
        ryan.visible = false;
        leon.visible = false;
        owen.visible = false;
        lukas.visible = false;
        jack.visible = false;
        evan.visible = false;
        steve.visible = false;
        jace.visible = false;
        jose.visible = false;
    }

    if(gameState === "intro2") {
        background(intro2);
        submitButton.visible = false;
        rightArrowButton.visible = false;
        
        //advancing to game when two players are in
        textFont("georgia");
        textSize(20);
        fill("white");
        if(playerCount!==2) {
            text("Wait for another detective to join...",800,680);
        } else {
            text("Press the right arrow key to continue",800,680);
            if(keyDown("right")) {
                gameState = "diamondRoom";
                buttonSound.play();

                //starting timer
                endTimeFunction();
                endTime = currentMin+30;
                timer = select("#timer");
                timer.html(convertSeconds(1800 - counter));
                function timeIt() {
                    counter++;
                    timer.html(convertSeconds(1800 - counter));
                    if(counter === 1800) {
                        gameState = "lost1";
                    }
                }
                setInterval(timeIt,1000);
            }
        }

        //making all suspects invisible
        levi.visible = false;
        ryan.visible = false;
        leon.visible = false;
        owen.visible = false;
        lukas.visible = false;
        jack.visible = false;
        evan.visible = false;
        steve.visible = false;
        jace.visible = false;
        jose.visible = false;
    }

    if(gameState === "diamondRoom") {
        background(diaRoomImage);
        startMusic.stop();
        rightArrowButton.visible = false;
        submitButton.visible = true;

        //all instructions
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press 'i' to go back to the instructions.",10,20);
        text("Your time will end at "+endHour+": "+endTime,10,50);
        text("Press 1, 2, 3, 4, 5, 6, 7, 8, 9, and 0 to reveal the suspect names.",10,80);
        text("Click on the suspect names anytime to eliminate them.",10,110);
        text("After eliminating a name, you can bring it back with its respective number key.",10,140);
        text("Search for hidden clues by clicking on multiple objects.",10,170);

        //to go back to instructions
        if(keyDown("i")){
            gameState = "intro";
            buttonSound.play();
        }

        //to enter office
        if(mouseX > 1198 && mouseX < 1227 && mouseY < 133 && mouseY > 103) {
            gameState = "officeRoom";
        }

        //all clue sprites
        var clue1Sprite = createSprite(380,105,60,50);
        clue1Sprite.visible = false;
        if(mousePressedOver(clue1Sprite) && gameState === "diamondRoom") {
            gameState = "clue1";
            clueSound.play();
        }

        var clue2Sprite = createSprite(380,330,20,10);
        clue2Sprite.visible = false;
        if(mousePressedOver(clue2Sprite) && gameState === "diamondRoom") {
            gameState = "clue2";
            clueSound.play();
        }

        var clue3Sprite = createSprite(1250,660,200,85);
        clue3Sprite.visible = false;
        if(mousePressedOver(clue3Sprite) && gameState === "diamondRoom") {
            gameState = "clue3";
            clueSound.play();
        }

        var clue4Sprite = createSprite(890,190,100,20);
        clue4Sprite.visible = false;
        if(mousePressedOver(clue4Sprite) && gameState === "diamondRoom") {
            gameState = "clue4";
            clueSound.play();
        }

        var clue5Sprite = createSprite(1000,300,60,80);
        clue5Sprite.visible = false;
        if(mousePressedOver(clue5Sprite) && gameState === "diamondRoom") {
            gameState = "clue5";
            clueSound.play();
        }

        var clue6Sprite = createSprite(800,330,30,25);
        clue6Sprite.visible = false;
        if(mousePressedOver(clue6Sprite) && gameState === "diamondRoom") {
            gameState = "clue6";
            clueSound.play();
        }

    }

    if(gameState === "officeRoom") {
        background(officeImage);
        submitButton.visible = true;

        //all instructions
        textFont("georgia");
        textSize(20);
        fill("black")
        text("Press 'i' to go back to the instructions.",10,20);
        text("Your time will end at "+endHour+": "+endTime,10,50);
        text("Press 1, 2, 3, 4, 5, 6, 7, 8, 9, and 0 to reveal the suspect names.",10,80);
        text("Click on the suspect names anytime to eliminate them.",10,110);
        text("After eliminating a name, you can bring it back with its respective number key.",10,140);
        text("Search for hidden clues by clicking on multiple objects.",10,170);

        //to go back to instructions
        if(keyDown("i")){
            gameState = "intro";
            buttonSound.play();
        }

        //going to diamond room
        if(mouseX > 1189 && mouseX < 1209 && mouseY < 82 && mouseY > 63) {
            gameState = "diamondRoom";
        }

        //all clue sprites
        var clue7Sprite = createSprite(200,105,60,45);
        clue7Sprite.visible = false;
        if(mousePressedOver(clue7Sprite) && gameState === "officeRoom") {
            gameState = "clue7";
            clueSound.play();
        }

        var clue8Sprite = createSprite(100,400,35,35);
        clue8Sprite.visible = false;
        if(mousePressedOver(clue8Sprite) && gameState === "officeRoom") {
            gameState = "clue8";
            clueSound.play();
        }

        var clue9Sprite = createSprite(910,280,65,40);
        clue9Sprite.visible = false;
        if(mousePressedOver(clue9Sprite) && gameState === "officeRoom") {
            gameState = "clue9";
            clueSound.play();
        }

        var clue10Sprite = createSprite(820,350,80,170);
        clue10Sprite.visible = false;
        if(mousePressedOver(clue10Sprite) && gameState === "officeRoom") {
            gameState = "clue10";
            clueSound.play();
        }
    }

    //all clue game states
    if(gameState === "clue1") {
        background(clue1);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "diamondRoom";
            buttonSound.play();
        }
    }

    if(gameState === "clue2") {
        background(clue2);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "diamondRoom";
            buttonSound.play();
        }
    }

    if(gameState === "clue3") {
        background(clue3);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "diamondRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue4") {
        background(clue4);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "diamondRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue5") {
        background(clue5);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("black");
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "diamondRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue6") {
        background(clue6);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "diamondRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue7") {
        background(clue7);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "officeRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue8") {
        background(clue8);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "officeRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue9") {
        background(clue9);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "officeRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue10") {
        background(clue10);
        submitButton.visible = false;
        textFont("georgia");
        textSize(20);
        fill("white")
        text("Press the left arrow to return to the room",10,685);
        if(keyDown("left")) {
            gameState = "officeRoom"
            buttonSound.play();
        }
    }

    if(gameState === "clue1" || gameState === "clue2" || gameState === "clue3" || gameState === "clue4" || gameState === "clue5" || gameState === "clue6" || gameState === "clue7" || gameState === "clue8" || gameState === "clue9" || gameState === "clue10" || gameState === "diamondRoom" || gameState === "officeRoom") {
        
        //timer runs out
        if(counter === 1800) {
            gameState = "lost1";
            startMusic.play();
        }
        
        //feature to eliminate suspect sticky notes
        if(keyWentDown("1") && levi.visible === false) {
            levi.visible = true;
            paperSound.play();
        } else if(mousePressedOver(levi) && levi.visible === true) {
            levi.visible = false;
            paperSound.play();
        }

        if(keyWentDown("2") && ryan.visible === false) {
            ryan.visible = true;
            paperSound.play();
        } else if(mousePressedOver(ryan) && ryan.visible === true) {
            ryan.visible = false;
            paperSound.play();
        }

        if(keyWentDown("3") && leon.visible === false) {
            leon.visible = true;
            paperSound.play();
        } else if(mousePressedOver(leon) && leon.visible === true) {
            leon.visible = false;
            paperSound.play();
        }

        if(keyWentDown("4") && owen.visible === false) {
            owen.visible = true;
            paperSound.play();
        } else if(mousePressedOver(owen) && owen.visible === true) {
            owen.visible = false;
            paperSound.play();
        }

        if(keyWentDown("5") && lukas.visible === false) {
            lukas.visible = true;
            paperSound.play();
        } else if(mousePressedOver(lukas) && lukas.visible === true) {
            lukas.visible = false;
            paperSound.play();
        }

        if(keyWentDown("6") && jack.visible === false) {
            jack.visible = true;
            paperSound.play();
        } else if(mousePressedOver(jack) && jack.visible === true) {
            jack.visible = false;
            paperSound.play();
        }

        if(keyWentDown("7") && evan.visible === false) {
            evan.visible = true;
            paperSound.play();
        } else if(mousePressedOver(evan) && evan.visible === true) {
            evan.visible = false;
            paperSound.play();
        }

        if(keyWentDown("8") && steve.visible === false) {
            steve.visible = true;
            paperSound.play();
        } else if(mousePressedOver(steve) && steve.visible === true) {
            steve.visible = false;
            paperSound.play();
        }

        if(keyWentDown("9") && jace.visible === false) {
            jace.visible = true;
            paperSound.play();
        } else if(mousePressedOver(jace) && jace.visible === true) {
            jace.visible = false;
            paperSound.play();
        }

        if(keyWentDown("0") && jose.visible === false) {
            jose.visible = true;
            paperSound.play();
        } else if(mousePressedOver(jose) && jose.visible === true) {
            jose.visible = false;
            paperSound.play();
        }

        //displaying timer
        fill(255);
        text("Time Left: "+convertSeconds(1800 - counter),1100,680);
    }

    if(gameState === "diamondRoom" || gameState === "officeRoom") {

        //submission instructions
        text("When you are ready to submit your final answer, click the submit button.",10,200);
        text("Remember, you only get one chance to submit, so choose wisely.",10,230);
        submitButton.visible = true;
        if(mousePressedOver(submitButton)) {
            gameState = "submit";
            submitSound.play();
        }

        //displaying names to switch from room to room
        textSize(20)
        fill(0);
        text("Main Bank Office",1135,125);
        text("Diamond Room",1150,80);
    }
    if(gameState === "submit") {
        background(submitBG);

        //making all suspects visible (not optionally)
        levi.visible = true;
        ryan.visible = true;
        leon.visible = true;
        owen.visible = true;
        lukas.visible = true;
        jack.visible = true;
        evan.visible = true;
        steve.visible = true;
        jace.visible = true;
        jose.visible = true;
        submitButton.visible = false;

        //submission text
        textFont("georgia");
        textSize(50);
        fill("red")
        text("Click on the suspect you believe is guilty...",20,300)
        
        if(mousePressedOver(leon)) {
            //if you correctly click on leon
            gameState = "won1";
            submitSound.stop();
            buttonSound.play();
            startMusic.play();

            //making score1 2
            player.score = player.score+2;
            player.updateScore();

            levi.visible = false;
            ryan.visible = false;
            leon.visible = false;
            owen.visible = false;
            lukas.visible = false;
            jack.visible = false;
            evan.visible = false;
            steve.visible = false;
            jace.visible = false;
            jose.visible = false;
        } else if(mousePressedOver(levi) || mousePressedOver(ryan) || mousePressedOver(lukas) || mousePressedOver(evan) || mousePressedOver(steve) || mousePressedOver(jace) || mousePressedOver(jose) || mousePressedOver(owen) || mousePressedOver(jack)) {
            //if you incorrectly click on any other suspect
            gameState = "lost1";
            submitSound.stop();
            startMusic.play();
            buttonSound.play();

            //making score1 1
            player.score = player.score+1;
            player.updateScore();

            levi.visible = false;
            ryan.visible = false;
            leon.visible = false;
            owen.visible = false;
            lukas.visible = false;
            jack.visible = false;
            evan.visible = false;
            steve.visible = false;
            jace.visible = false;
            jose.visible = false;
        }
    }

    //gameStates if you submitted wrong
    if(gameState === "lost1") {
        submitSound.stop();
        background(lostImage1);

        //right arrow button to continue
        rightArrowButton.visible = true;
        if(mousePressedOver(rightArrowButton)) {
            gameState = "lost2"
            buttonSound.play();
        }
    }
    if(gameState === "lost2") {
        background(lostImage2);
        rightArrowButton.visible = false;
        
        //pressing right arrow key to continue or wait for other player
        textFont("georgia");
        textSize(20);
        fill("white")
        if(player1Score === 0 || player2Score === 0){
            text("Wait for the other detective to finish...",900,670);
        } else {
            if(player1Score === 1 && player2Score === 1) { 
                text("Press the right arrow to continue",1000,670);
                if(keyDown("right")) {
                    gameState = "part2IntroBothLost";
                    buttonSound.play();
                }
            } else if(player.score === 1 && player1Score === 2 || player2Score === 2){
                text("Press the right arrow to continue",1000,670);
                if(keyDown("right")) {
                    gameState = "part2IntroLost";
                    buttonSound.play();
                }
            }
        }
    }

    //gameStates if you submitted Leon
    if(gameState === "won1") {
        submitSound.stop();
        background(wonImage1);

        //right arrow button to continue
        rightArrowButton.visible = true;
        if(mousePressedOver(rightArrowButton)) {
            gameState = "won2"
            buttonSound.play();
        }
    }
    if(gameState === "won2") {
        background(wonImage2);
        rightArrowButton.visible = false;
        
        //pressing right arrow key to continue or wait for other player
        textFont("georgia");
        textSize(20);
        fill("white")
        if(player1Score === 0 || player2Score === 0){
            text("Wait for the other detective to finish...",900,670);
        } else {
            if(player1Score === 2 && player2Score === 2) {
                text("Press the right arrow to continue",1000,670);
                if(keyDown("right")) {
                    gameState = "part2IntroBothWon";
                    buttonSound.play();
                }
            } else if(player.score === 2 && player1Score === 1 || player2Score === 1){
                text("Press the right arrow to continue",1000,670);
                if(keyDown("right")) {
                    gameState = "part2IntroWon";
                    buttonSound.play();
                }
            }
        }
    }

    //instructions for play if you won
    if(gameState === "part2IntroWon") {
        background(part2IntroWonImage);
        contButton.visible = true;
        if(mousePressedOver(contButton)) {
            gameState = "readyForPlay";
            buttonSound.play();
        }
    }

    //instructions for play if you lost
    if(gameState === "part2IntroLost") {
        background(part2IntroLostImage);
        contButton.visible = true;
        if(mousePressedOver(contButton)) {
            gameState = "readyForPlay";
            buttonSound.play();
        }
    }

    //instructions for play if both won
    if(gameState === "part2IntroBothWon") {
        background(part2IntroBothWonImage);
        contButton.visible = true;
        if(mousePressedOver(contButton)) {
            gameState = "readyForPlay";
            buttonSound.play();
        }
    }

    //instructions for play if both lost
    if(gameState === "part2IntroBothLost") {
        background(part2IntroBothLostImage);
        contButton.visible = true;
        if(mousePressedOver(contButton)) {
            gameState = "readyForPlay";
            buttonSound.play();
        }
    }

    if(gameState === "readyForPlay") {
        background("white");
        startMusic.stop();

        //making people visible for play
        contButton.visible = false;
        noel2.visible = true;
        player2.visible = true;
        player1.visible = true;
        police.visible = true;
        ready.visible = true;

        //making background and positioning police & noel
        imageMode(CENTER);
        image(bankImage,2000,350,4000,700);
        noel2.x = 1200;
        police.x = 100;

        //NOEL and POLICE text under them
        textSize(30);
        textFont("georgia");
        fill("white");
        push();
        textAlign(CENTER);
        if(noel2.visible === true) {
            text("NOEL",noel2.x,noel2.y+160);
        }
        text("POLICE",police.x,police.y+160);
        pop();

        //Pressing "I'm Ready"
        if(mousePressedOver(ready) && player.ready === 0) {
            player.ready++;
            buttonSound.play();
            player.updateScore();
            ready.remove();
            startMusic.play();
            
        }

        //changing to "play"
        if(player1Ready === 1 && player2Ready === 1) {

            //adding animations
            player1.addAnimation("boyRunning",player1Image);
            player1.changeAnimation("boyRunning");
            player2.addAnimation("girlRunning",player2Image);
            player2.changeAnimation("girlRunning");
            police.addAnimation("policeRunning",policeImage);
            police.changeAnimation("policeRunning");
            noel2.addAnimation("noelRunning",noelImage);
            noel2.changeAnimation("noelRunning");

            gameState = "play";
            playMusic.play();
            updateState();
        }

        //if the player is ready display text saying "Wait..."
        if(player.ready === 1) {
            textSize(30);
            push();
            fill(0);
            textFont("georgia");
            text("Wait for the other detective to finish...",100,100);
            pop();
        }

        //displaying players with for loop (no animations & not moving)
        var x = 175;
        var x2;
        var index = 0;
        for(var plr in allPlayers) {
            index = index+1;
            x = x+300;
            x2 = x + allPlayers[plr].x;
            players[index-1].x = x2;
            players[index-1].y = 500;

            if(player.index === index) {
                //YOU
                textFont("georgia");
                textSize(30);
                fill("white");
                push();
                textAlign(CENTER);
                text("YOU",x2, 650);
                pop();
            } else if(player.index !== index) {
                //OTHER DETECTIVE
                push();
                textAlign(CENTER);
                fill(255)
                text("OTHER", x2, 650);
                text("DETECTIVE", x2, 680);
                pop();
            }
        }
    }

    if(gameState === "play") {
        background("white");
        startMusic.stop();

        //displaying bank images
        imageMode(CENTER);
        image(bankImage,2000,350,4000,700);
        image(bankImage,6000,350,4000,700);
        image(bankImage,10000,350,4000,700);
        image(bankImage,14000,350,4000,700);

        //space key and up instructions
        textFont("georgia");
        textSize(20);
        fill("black");
        text("Press the space key to dodge bullets.",camera.position.x + 300, camera.position.y - 325);
        text("Jump over puddles with the up",camera.position.x + 300, camera.position.y - 300);
        text("arrow to prevent being slowed down.",camera.position.x + 300, camera.position.y - 275);
        //out of town
        textSize(40);
        text("OUT OF TOWN ->",14400,500);

        if(player1Score2 !==2 && player2Score2 !==2 && noel2.x <=14500) {
            //making noel visible when both players are not done and he is not out of town
            database.ref("noel").update({
                visible: true
            });
        } else if(noel2.x >= 14500) {
            //making noel invisible if he os out of town
            database.ref("noel").update({
                visible: false,
                x: -100000000
            });
        }

        //labeling NOEL and POLICE
        textFont("georgia");
        textSize(30);
        fill("white");
        push();
        textAlign(CENTER);
        if(noel2.visible === true) {
            text("NOEL",noel2.x,noel2.y+160);
        }
        text("POLICE",police.x,police.y+160);
        pop();
        
        //making noel and police start moving and spawning obstacles
        if(player.x > 0) {
            noelX = noelX + 9;
            policeX = policeX + 9;
            spawnObstacles();
            spawnBullets();
        }
        
        //positioning noel and police
        noel2.x = 1000+noelX;
        police.x = 100+policeX;
        database.ref("police").update({
            x: policeX
        })
        database.ref("noel").update({
            x: noelX
        })
        
        if(player.index===1) {
            camera.position.x = player1.x;
            
            //making the player disappear if they finish
            if(player1Score2 !== 0 && player2Score2 !== 0) {
                database.ref("players/player2").update({
                    x: -100000
                })
            }

            //player escapes
            if(player.x >= 14000) {
                gameState = "gameOverOut"
                endMusic.play();
                player.score2 = player.score2 + 3;
                player.updateScore();
                clueSound.play();
            }

            //player is hit by bullet or captured
            if(player1.isTouching(bulletGroup)) {
                gameState = "gameOverShot"
                endMusic.play();
                player.score2 = player.score2 + 1;
                player.updateScore();
                lostSound.play();
            }
            if(player1.isTouching(police)) {
                gameState = "gameOverPolice";
                endMusic.play();
                player.score2 = player.score2 + 1;
                player.updateScore();
                lostSound.play();
            }

            //making noel invisible if a player get him and switching the gameState
            if(player1.isTouching(noel2) && noel2.visible === true) {
                gameState = "gameOverNoel";
                endMusic.play();
                database.ref("noel").update({
                    visible: false,
                    x: -100000000
                });
                player.score2 = player.score2 + 2;
                player.updateScore();
                clueSound.play();
            }

            //player controls and slows down if touches puddle
            if(player1.isTouching(obstacleGroup)) {
                if(keyDown("right")) {
                    player.x = player.x + 5;
                    player.updateScore();
                }
            } else {
                if(keyDown("right")) {
                    player.x = player.x + 10;
                    player.updateScore();
                }
            }

            //jumping
            if(keyDown("up") && player1.y >= 400) {
                player1.velocityY = -7;

            }
            player1.velocityY = player1.velocityY + 0.8;

            //evading bullets
            if(keyDown("space")){
                bulletGroup.destroyEach();
            }

            //text for if other player finishs
            fill(0);
            if(player2Score2 === 1 || player1Score2 ===1 ) {
                text("The other detective has been captured & arrested.",player1.x-600,40);
            }
            if(player2Score2 === 2 || player1Score2 === 2 ) {
                text("The other detective has captured & arrested Noel!",player1.x-600,40);
                text("The other detective has also been proven not guilty!",player1.x-600,70);
                text("Now your main goal is to escape the town, otherwise you will be arrested!",player1.x-600,100);
            }
            if(noel2.x >= 14500) {
                text("Noel has escaped the town! Now you cannot catch him!",player1.x-600,40);
                text("Now your main goal is to escape the town, otherwise you will be arrested!",player1.x-600,70);
            }
        } else if(player.index===2) {
            camera.position.x = player2.x;

            //making player disappear if they finish
            if(player1Score2 !== 0 && player2Score2 !== 0) {
                database.ref("players/player1").update({
                    x: -100000
                })
            } 

            //player escapes
            if(player.x >= 14000) {
                gameState = "gameOverOut";
                endMusic.play();
                clueSound.play();
                player.score2 = player.score2 + 3;
                player.updateScore();
            }

            //player touches bullet or is captured
            if(player2.isTouching(bulletGroup)) {
                gameState = "gameOverShot"
                endMusic.play();
                player.score2 = player.score2 + 1;
                player.updateScore();
                lostSound.play();
            }
            if(player2.isTouching(police)) {
                gameState = "gameOverPolice";
                endMusic.play();
                player.score2 = player.score2 + 1;
                player.updateScore();
                lostSound.play();
            }

            //making noel invisible if a player get him and switching the gameState
            if(player2.isTouching(noel2) && noel2.visible === true) {
                gameState = "gameOverNoel";
                endMusic.play();
                player.score2 = player.score2 + 2;
                player.updateScore();
                database.ref("noel").update({
                    visible: false,
                    x: -100000000
                });
                clueSound.play();
            }

            //jumping
            if(keyDown("space")){
                bulletGroup.destroyEach();
            }

            //player controls and slows down if touches puddle
            if(player2.isTouching(obstacleGroup)) {
                if(keyDown("right")) {
                    player.x = player.x + 5;
                    player.updateScore();
                }
            } else {
                if(keyDown("right")) {
                    player.x = player.x + 10;
                    player.updateScore();
                }
            }

            //jumping
            if(keyDown("up") && player2.y >= 400) {
                player2.velocityY = -7;
            }
            player2.velocityY = player2.velocityY + 0.8;

            //text for if other player finishs
            fill(0)
            if(player2Score2 === 1 || player1Score2 ===1 ) {
                text("The other detective has been captured & arrested.",player2.x-600,40);
            }
            if(player2Score2 === 2 || player1Score2 === 2 ) {
                text("The other detective has captured & arrested Noel!",player2.x-600,40);
                text("The other detective has also been proven not guilty!",player2.x-600,70);
                text("Now your main goal is to escape the town, otherwise you will be arrested!",player2.x-600,100);
            }
            if(noel2.x >= 14500) {
                text("Noel has escaped the town! Now you cannot catch him!",player2.x-600,40);
                text("Now your main goal is to escape the town, otherwise you will be arrested!",player2.x-600,70);
            }
        }

        //displaying the players as they move
        var x = 600;
        var x2;
        var index = 0;
        for(var plr in allPlayers) {
            index = index+1;
            x = x;
            x2 = x + allPlayers[plr].x;
            players[index-1].x = x2;
            
            if(player.index === index) {
                //YOU
                textFont("georgia");
                textSize(30);
                fill("white");
                push();
                textAlign(CENTER);
                text("YOU",x2, 650);
                pop();
            } else if(player.index !== index) {
                //OTHER DETECTIVE
                push();
                textAlign(CENTER);
                fill(255);
                text("OTHER", x2, 650);
                text("DETECTIVE", x2, 680);
                pop();
            }
        }
    }

    if(gameState === "gameOverShot") {
        background(jailBG);
        playMusic.stop();

        //main message that you have been arrested
        textSize(40);
        textFont("georgia");
        fill(255)
        text("You have been shot and are now being arrested!",100,100);

        //making bullets & sprites disappear
        bulletGroup.destroyEach();
        player1.visible = false;
        player2.visible = false;
        police.visible = false;
        noel2.visible = false;
        camera.position.x = 650;

        //text to show the other player's progress
        if(player1Score2 === 0 || player2Score2 === 0) {
            text("Wait until the other detective finishes to see what happens...",100,200)
        } else {
            if(player1Score2 === 2 && player2Score2 === 1) {
                text("The other detective captured Noel and got Noel arrested!",100,200);
                text("The other detective also was proven not guilty!",100,300);
            } 
            if(player1Score2 === 1 && player2Score2 === 2) {
                text("The other detective captured Noel and got Noel arrested!",100,200);
                text("The other detective also was proven not guilty!",100,300);
            } 
            if(player1Score2 === 1 && player2Score2 === 1) {
                text("The other detective was captured by the police and also arrested!",100,200);
                text("Noel got away!",100,300);
            }
            if(player1Score2 === 3 && player2Score2 > 0) {
                text("The other detective escaped the town and is now on the run!",100,300);
            } 
            if(player1Score2 > 0 && player2Score2 === 3) {
                text("The other detective escaped the town and is now on the run!",100,300);
            } 
        }
    }

    if(gameState === "gameOverPolice") {
        background(jailBG);
        playMusic.stop();

        //main message that the police captured you
        textSize(40);
        textFont("georgia");
        fill(255)
        text("You have been captured by the police and are now being arrested!",100,100);

        //making bullets & sprites disappear
        bulletGroup.destroyEach();
        player1.visible = false;
        player2.visible = false;
        police.visible = false;
        noel2.visible = false;
        camera.position.x = 650;

        //text to show the other player's progress
        if(player1Score2 === 0 || player2Score2 === 0) {
           text("Wait until the other detective finishes to see what happens...",100,200)
        } else {
            if(player1Score2 === 2 && player2Score2 === 1) {
                text("The other detective captured Noel and got Noel arrested!",100,200);
                text("The other detective also was proven not guilty!",100,300);
            } 
            if(player1Score2 === 1 && player2Score2 === 2) {
                text("The other detective captured Noel and got Noel arrested!",100,200);
                text("The other detective also was proven not guilty!",100,300);
            } 
            if(player1Score2 === 1 && player2Score2 === 1) {
                text("The other detective was captured by the police and also arrested!",100,200);
                text("Noel got away!",100,300);
            } 
            if(player1Score2 === 3 && player2Score2 > 0) {
                text("The other detective escaped the town and is now on the run!",100,300);
            } 
            if(player1Score2 > 0 && player2Score2 === 3) {
                text("The other detective escaped the town and is now on the run!",100,300);
            } 
        }
    }

    if(gameState === "gameOverNoel") {
        background(winBG);
        playMusic.stop();

        //main message that you won
        textSize(40);
        textFont("georgia");
        fill(255)
        strokeWeight(2);
        stroke(0);
        text("YOU WON!",100,100);
        text("You caught Noel and are now proven not guilty! Great work!",100,200);
        
        //making bullets & sprites disappear
        bulletGroup.destroyEach();
        player1.visible = false;
        player2.visible = false;
        police.visible = false;
        noel2.visible = false;
        camera.position.x = 650;

        //making noel not visible
        database.ref("noel").update({
            visible: false
        })

        //text to show the other player's progress
        if(player1Score2 === 0 || player2Score2 === 0) {
            text("Wait until the other detective finishes to see what happens...",100,300)
        } else {
            if(player1Score2 === 2 && player2Score2 === 1) {
                text("The other detective was captured and arrested!",100,300);
            } 
            if(player1Score2 === 1 && player2Score2 === 2) {
                text("The other detective was captured and arrested!",100,300);
            } 
            if(player1Score2 === 3 && player2Score2 > 0) {
                text("The other detective escaped the town and is now on the run!",100,300);
            } 
            if(player1Score2 > 0 && player2Score2 === 3) {
                text("The other detective escaped the town and is now on the run!",100,300);
            } 
        }
    }

    if(gameState === "gameOverOut") {
        background(escapeBG);
        playMusic.stop();

        //main message that the player has escaped
        textSize(40);
        textFont("georgia");
        fill(0)
        text("You have escaped the town and are now on the run!",100,100);
        
        //making bullets and sprites disappear
        bulletGroup.destroyEach();
        player1.visible = false;
        player2.visible = false;
        police.visible = false;
        noel2.visible = false;
        camera.position.x = 650;

        //text to show the other player's progress
        if(player1Score2 === 0 || player2Score2 === 0) {
            text("Wait until the other detective finishes to see what happens...",100,200)
        } else {
            if(player1Score2 === 2 && player2Score2 === 1) {
                text("The other detective was captured and arrested!",100,200);
            } 
            if(player1Score2 === 1 && player2Score2 === 2) {
                text("The other detective was captured and arrested!",100,200);
            }
            if(player1Score2 === 2 && player2Score2 === 2) {
                text("The other detective captured Noel and got Noel arrested!",100,300);
                text("The other detective also was proven not guilty!",100,300);
            }
            if(player1Score2 === 3 && player2Score2 === 3) {
                text("The other detective also escaped town and is on the run!",100,300);
                
            }
        }
    }

    reset();
    drawSprites();
}

function updateState() {
    database.ref("/").update({
        gameState: gameState
    })
}

function spawnBullets() {
    if(frameCount%50===0) {
        var bullet = createSprite(police.x,random(350,600),100,20);
        bullet.addImage(bulletImage);
        bullet.scale = 0.1;
        bullet.velocityX = 15;
        bullet.lifetime = 10000;
        bulletGroup.add(bullet);
      }
    if(frameCount%50 === 0) {
        bulletSound.play();
    }
}

function spawnObstacles() {
    if(frameCount%60 === 0) {
        if(player.index === 1) {
            var obstacle = createSprite(player1.x+650,625,100,20);
        } else if(player.index === 2) {
            var obstacle = createSprite(player2.x+650,625,100,20);
        }
        var rand = Math.round(random(1,5))
        if(rand === 1) {
            obstacle.addImage(ob1);
        } else if(rand === 2) {
            obstacle.addImage(ob2);
        } else if(rand === 3) {
            obstacle.addImage(ob3);
        } else if(rand === 4) {
            obstacle.addImage(ob4);
        } else if(rand === 5) {
            obstacle.addImage(ob5);
        }
        obstacle.scale = 0.25;
        obstacle.lifetime = 10000;
        obstacleGroup.add(obstacle);
    }
}

function convertSeconds(s) {
    var min = floor(s/60);
    var sec = s % 60;
    return nf(min,2) + ": " + nf(sec,2);
}

function endTimeFunction() {
    currentMin = minute();
}

function reset() {
    if(keyDown("r")) {
        database.ref("/").update({
            playerCount: 0,
        })
        database.ref("players/player1").update({
            score: 0,
            score2: 0,
            x: 0,
            ready: 0
        })
        database.ref("players/player2").update({
            score: 0,
            score2: 0,
            x: 0,
            ready: 0
        })
        database.ref("police").update({
            x: 0
        })
        database.ref("noel").update({
            x: 0,
            visible: false
        })
        database.ref("/").update({
            gameState: null
        })
    }
}
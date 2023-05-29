<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Castle adventures</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="board" id="board">
        <div class="menu">
            <h1>Welcome in Castle adventures</h1>
            <ul>
            <a href="#" id="startgame"><li>Start demo</li></a>
            <a href="clean.php"><li>Clear Inventory</li></a>
            </ul>
        </div>
        
        
        <?php
            if(isset($_SESSION['page_views'])) {
                $_SESSION['page_views']++;
            } else {
                $_SESSION['page_views'] = 1;
            }
            echo 'Liczba wejść na stronę: ' . $_SESSION['page_views'];
        ?>    
    </div>

    <div class="hall displaynone" id="hall">
        <img class="scene" src="img/castlehall.png" usemap="#scena1map">
        <map name="scena1map">
            <area alt="sign corridor" title="sign corridor" href="#" coords="1675,520,1905,723" shape="rect" onclick="signCorridor()">
            <area alt="sign prison" title="sign prison" href="#" coords="11,520,241,723" shape="rect" onclick="signPrison()">
            <area alt="triss" title="triss" href="#" coords="1450,180,1650,515" shape="rect" onclick="triss()">
            <area alt="yen" title="yen" href="#" coords="228,181,476,508" shape="rect" onclick="yen()">
        </map>
        <img id="player1" src="img/player.gif" alt="Player" />
    </div>

    <div class="corridor displaynone" id="corridor">
        <img class="scene" src="img/castlecorridor.png" usemap="#scena2map">
        <map name="scena2map">
            <area alt="jaskier" title="jaskier" href="#" coords="260,190,476,514" shape="rect"  onclick="jaskier()">
            <area alt="merchant" title="merchant" href="#" coords="1445,190,1640,514" shape="rect"  onclick="merchant()">
            <area alt="sign tower" title="sign tower" href="#" coords="1675,520,1905,723" shape="rect" onclick="signTower()">
            <area alt="sign hall" title="sign hall" href="#" coords="11,520,241,723" shape="rect" onclick="signHall()">
        </map>
        <img id="player2" src="img/player.gif" alt="Player" />
    </div>

    <div class="prison displaynone" id="prison">
        <img class="scene" src="img/castleprison.png" usemap="#scena3map">
        <map name="scena3map">
            <area alt="sign hall" title="sign hall" href="#" coords="1675,520,1905,723" shape="rect" onclick="signHall()">
            <area alt="Ciri" title="Ciri" href="#" coords="1456,200,1604,551" shape="rect" onclick="ciri()">
            <area alt="werewolf" title="werewolf" href="#" coords="18,330,580,732" shape="rect" onclick="werewolf()">
        </map>
        <img id="player3" src="img/player.gif" alt="Player" />
    </div>
    
    <div class="tower displaynone" id="tower">
        <img class="scene" src="img/castletower.png" usemap="#scena4map">
        <map name="scena4map">
        <area alt="sign corridor" title="sign corridor" href="#" coords="11,520,241,723" shape="rect" onclick="signCorridor()">
        <area alt="archer" title="archer" href="#" coords="320,200,576,500" shape="rect" onclick="archer()">
        <area alt="monster" title="monster" href="#" coords="1530,320,1900,704" shape="rect" onclick="monster()">
        </map>
        <img id="player4" src="img/player.gif" alt="Player" />
    </div>
    <!-- <img id="player" class="displaynone" src="img/player.gif" alt="Player"/> -->

    <div class="conversationsHidden" id="conversations">
        <div class="flextext">
            <h3 id="characterName"></h3>
            <p id="conversationsText"></p>
            <a href="#" id="nextConversation">Next</a>
        </div>
    </div>

    <div id="inventory">
            <div id="itemsContainer">
                <!-- <img src="img/amulet.webp">
                <img src="img/elixir.webp">
                <img src="img/healthelixir.webp">
                <img src="img/key.png">
                <img src="img/trap.webp"> -->
            </div>
    </div>

    <audio id="backgroundMusic" src="audio/music.mp3" loop></audio>

<script src="js/startgame.js"></script>
</body>
</html>
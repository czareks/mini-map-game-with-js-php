const board = document.getElementById('board');
const startGame = document.getElementById('startgame');
const prison = document.getElementById('prison');
const hall = document.getElementById('hall');
const corridor = document.getElementById('corridor');
const tower = document.getElementById('tower');
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");
const conversationsDiv = document.getElementById("conversations");
const conversationsText = document.getElementById("conversationsText");
const nextConversation = document.getElementById("nextConversation");
const characterName = document.getElementById("characterName");
const backgroundMusic = document.getElementById("backgroundMusic");
const inventory = document.getElementById("inventory");
const itemsContainer = document.getElementById("itemsContainer");
let eq=[];
let countText = 0;
let conversationsTextTab=[];
let x = 0;
let y =0;
let isMoving = true;
let startingGame = false;
let scenePrison = false;
let sceneHall = false;
let sceneCorridor = false;
let sceneTower = false;
let inventoryOpen = false; 

loadEq()

function saveEq(eqArray) {
  fetch('save.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eqArray)
  })
  .then(function(response) {
    if (response.ok) {
      console.log('Tablica eq została zapisana.');
    } else {
      console.error('Wystąpił błąd podczas zapisywania tablicy eq.');
    }
  })
  .catch(function(error) {
    console.error('Wystąpił błąd:', error);
  });
}

function loadEq() {
  fetch('load.php')
    .then(function(response) {
      if (response.ok) {
        return response.json(); 
      } else {
        throw new Error('Wystąpił błąd podczas odczytywania tablicy eq.');
      }
    })
    .then(function(data) {
      if (data.eq) {
        var eqArray = data.eq; 
        console.log('Odczytana tablica eq:', eqArray);
        eq = eqArray;
      } else {
        console.log('Tablica eq nie istnieje w sesji.');
        eq =[];
      }
    })
    .catch(function(error) {
      console.error('Wystąpił błąd:', error);
    });
}

function generatePhotos(arrayInventory) {

  while (itemsContainer.firstChild) {
    itemsContainer.removeChild(itemsContainer.firstChild);
  }
  for (let i = 0; i < arrayInventory.length; i++) {
    let name = arrayInventory[i];

    let img = document.createElement('img');
    img.src = 'img/' + name;

    itemsContainer.appendChild(img);
  }
}

function toggleInventory() {
  loadEq();
  generatePhotos(eq);
  inventoryOpen = !inventoryOpen; 

  if (inventoryOpen) {
    inventory.classList.add("open");
  } else {
    inventory.classList.remove("open");
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "i") { 
    toggleInventory();
  }
});

startGame.addEventListener('click',()=>{
  backgroundMusic.play();
  backgroundMusic.volume = 1;
  scenePrison = false;
  sceneHall = true;
  sceneCorridor = false;
  sceneTower = false;
  alert(`
  Game Instructions:
  - Move by clicking the left mouse button (LMB).
  - Open and close the inventory using the 'i' key.
  - When there is an interactive element, the mouse cursor will change to a hand with an extended finger.
  `);
    board.classList.add('animation1');
    setTimeout(() => {
        board.classList.add('displaynone');
        board.classList.remove('animation1');    
        hall.classList.remove('displaynone');
        hall.classList.add('animation2');
        startingGame = true;
      }, 1000);
});

function resetPlayerPosiotion(player){
  player.style.top = 466+'px';
  player.style.left = 966+'px';
}

function movePlayer(player) {
    let currentX = parseInt(player.style.left) || 966;
    let currentY = parseInt(player.style.top) || 466;
    let stepX = (x - currentX) / 200;
    let stepY = (y - currentY) / 200;

    let intervalId = setInterval(function() {
    currentX += stepX;
    currentY += stepY;

    if (Math.abs(currentX - x) < Math.abs(stepX) || Math.abs(currentY - y) < Math.abs(stepY)) {
      clearInterval(intervalId);
      player.style.left = x + "px";
      player.style.top = y + "px";
      isMoving = true;
    } else {
      player.style.left = currentX + "px";
      player.style.top = currentY + "px";
    }
  }, 10);
}
document.addEventListener('click', function(event) {
  if(startingGame){
    if(isMoving){
      x = event.clientX;
      y = event.clientY;
      if(scenePrison){
        movePlayer(player3);
      }else if(sceneHall){
        movePlayer(player1);
      }else if(sceneCorridor){
        movePlayer(player2);
      }else if(sceneTower){
        movePlayer(player4);
      }
      isMoving = false;
    }
    // console.log(isMoving);
  }
});

function typeWriter(text, elementId) {
  nextConversation.classList.add('disabled');
  const speed = 50;

  const element = document.getElementById(elementId);
  let i = 0;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
      isMoving=false;
    }else {
      nextConversation.classList.remove('disabled');
    }
  }
  type();
}


function signPrison(){
  scenePrison = true;
  sceneHall = false;
  sceneCorridor = false;
  sceneTower = false;
  isMoving=false;
  resetPlayerPosiotion(player3);
  hall.classList.add('animation1');
  prison.classList.remove('animation1');
  setTimeout(() => {
    hall.classList.add('displaynone');
    hall.classList.remove('animation2');
    prison.classList.remove('displaynone');
    prison.classList.add('animation2');
    isMoving=true;
  }, 1000);
}
function signHall(){
  scenePrison = false;
  sceneHall = true;
  sceneCorridor = false;
  sceneTower = false;
  isMoving=false;
  resetPlayerPosiotion(player1);
  hall.classList.remove('animation1');
  prison.classList.add('animation1');
  corridor.classList.add('animation1');
  setTimeout(() => {
    prison.classList.add('displaynone');
    prison.classList.remove('animation2');
    corridor.classList.add('displaynone');
    corridor.classList.remove('animation2');
    hall.classList.remove('displaynone');
    hall.classList.add('animation2');
    isMoving=true;
  }, 1000);
}

function signCorridor(){
  scenePrison = false;
  sceneHall = false;
  sceneCorridor = true;
  sceneTower = false;
  isMoving=false;
  resetPlayerPosiotion(player2);
  corridor.classList.remove('animation1');
  hall.classList.add('animation1');
  tower.classList.add('animation1');
  setTimeout(() => {
    hall.classList.add('displaynone');
    hall.classList.remove('animation2');
    tower.classList.add('displaynone');
    tower.classList.remove('animation2');
    corridor.classList.remove('displaynone');
    corridor.classList.add('animation2');
    isMoving=true;
  }, 1000);
}

function signTower(){
  scenePrison = false;
  sceneHall = false;
  sceneCorridor = false;
  sceneTower = true;
  isMoving=false;
  resetPlayerPosiotion(player4);
  tower.classList.remove('animation1');
  corridor.classList.add('animation1');
  setTimeout(() => {
    corridor.classList.add('displaynone');
    corridor.classList.remove('animation2');
    tower.classList.remove('displaynone');
    tower.classList.add('animation2');
    isMoving=true;
  }, 1000);
}

function yen(){
  eq.push('elixir.webp');
  console.log(eq);
  saveEq(eq);
  conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Yennefer";
  conversationsTextTab = [
    "I have a health elixir that will fully restore your life points. Your safety is my priority.",
    "Don't forget about our magical abilities. Together, we can cast powerful spells and inflict tremendous damage on our enemies.",
    "You receive 'Health Elixir' from Yennefer"
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        if(countText == (conversationsTextTab.length-1)){
          nextConversation.innerHTML = "Take the item";
        }
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
        nextConversation.innerHTML = "Next";
      }
    }
  }); 
}

function triss(){
  eq.push('amulet.webp');
  console.log(eq);
  saveEq(eq);
    conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Triss";
  conversationsTextTab = [
    "I've prepared a magical amulet that increases your strength by 20%. Wearing it, you'll become unbeatable!",
    "Magic is our advantage. Use my powers to destroy the obstacles in our path. Together, we can defeat any enemy!",
    "You receive 'Strength Amulet' from Triss"
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        if(countText == (conversationsTextTab.length-1)){
          nextConversation.innerHTML = "Take the item";
        }
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
        nextConversation.innerHTML = "Next";
      }
    }
    
  }); 
}

function jaskier(){
    conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Jaskier";
  conversationsTextTab = [
    "Listen, I have a map that will show us the hidden passage through the corridor. It's our only chance to escape from here.",
    "Everything seems hopeless, but don't give up! Your bravery and my tricks will surely save us."
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
      }
    }
    
  }); 
}

function merchant(){
  eq.push('healthelixir.webp');
  eq.push('trap.webp');
  console.log(eq);
  saveEq(eq);
    conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Merchant";
  conversationsTextTab = [
    "I have excellent healing potions that can help you in tough situations. I've also prepared some traps for the enemies.",
    "Look around carefully. Maybe we'll find valuable items or treasures that will aid us on our journey.",
    "You receive 'Healing Potions and traps' from Merchant"
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        if(countText == (conversationsTextTab.length-1)){
          nextConversation.innerHTML = "Take the item";
        }
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
        nextConversation.innerHTML = "Next";
      }
    }
    
  }); 
}

function werewolf(){
    conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Werewolf";
  conversationsTextTab = [
    "Run while you still can! In a moment, I'll devour your heart! There's no escaping my wolfish wrath!",
    "I knew this day would come. The cage is strong, but not immortal. Don't give me a chance to break free!",
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
      }
    }
    
  }); 
}

function ciri(){
  eq.push('key.png');
  console.log(eq);
  saveEq(eq);
    conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Ciri";
  conversationsTextTab = [
    "We need to find the key to our shackles. It might be somewhere in this room. Search thoroughly!",
    "The werewolf hasn't noticed us yet. Maybe we can catch him off guard and avoid a direct confrontation.",
    "You receive 'Key to the Shackles' from Ciri"
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        if(countText == (conversationsTextTab.length-1)){
          nextConversation.innerHTML = "Take the item";
        }
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
        nextConversation.innerHTML = "Next";
      }
    }
    
  }); 
}

function archer(){
    conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Archer";
  conversationsTextTab = [
    "I'll shoot at the monsters from a distance. I'll handle them, and you focus on fighting the boss. Together, we'll defeat this terrifying creature!",
    "Don't fear my arrows. My skills are unmatched. Concentrate on evading, and I'll decide the fate of the monsters."
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
      }
    }
    
  }); 
}

function monster(){
    conversationsDiv.classList.remove('conversationsHidden');
  conversationsDiv.classList.add('conversationsShowed');

  characterName.innerHTML = "Monster";
  conversationsTextTab = [
    "I sense your fears, mortal. I'll make you suffer, and your screams will echo throughout this tower!",
    "You're no match for my strength. Prepare to meet your doom!"
  ];
  typeWriter(conversationsTextTab[countText], 'conversationsText');

  nextConversation.addEventListener('click',()=>{
    if(nextConversation.classList.value !== 'disabled'){
      conversationsText.innerHTML = '';
      countText++;
      if(countText < conversationsTextTab.length){
        typeWriter(conversationsTextTab[countText], 'conversationsText');
      }else{
        conversationsDiv.classList.remove('conversationsShowed');
        conversationsDiv.classList.add('conversationsHidden');
        countText=0;
        nextConversation.classList.add('disabled');
        
        setTimeout(()=>{isMoving=true;}, 200);
      }
    }
    
  }); 
}
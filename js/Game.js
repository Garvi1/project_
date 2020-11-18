class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hidden();
    textSize(30);
    text("Game start",120,100);
    Player.getPlayerinfo();
    if(allPlayers !== undefined){ 
   var y = 130;  
   for(var i in allPlayers){
      y = y + 20;
      textSize(15);
      text(allPlayers[i].name + " " + allPlayers[i].distance
      ,120,y);
    }
  }
    if(keyDown(UP_ARROW) && player.index !== null){
player.distance  = player.distance + 50;
player.update();
    }
    
    
  
}
}

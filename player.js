class Player {
    constructor(){
      this.index = 0;
      this.score = 0;
      this.score2 = 0;
      this.x = 0;
      this.ready = 0;
      //this.visible = true;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
        database.ref('/').update({
        playerCount: count
      });
      player.index = playerCount;
    }
  
    updateScore(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
            score: this.score,
            x: this.x,
            ready: this.ready,
            score2: this.score2,
            ready: this.ready, 
            //visible: this.visible
        });
    }
  
    getScore() {
        var playerIndex = "players/player" + this.index;
        var scoreRef = database.ref(playerIndex);
            scoreRef.on("value", (data)=> {
            score = data.val();
        })
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
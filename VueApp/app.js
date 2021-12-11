
new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startNewGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() { 
            this.monsterHealth -= this.changeHealth(12, 3);
            if (this.winLossCheck()){
                return;
            }
            this.monsterAttacks();
            
        },
        specialAttack: function(){
            this.monsterHealth -= this.changeHealth(20, 3);
            this.monsterAttacks();
        },
        heal: function(){
            if (this.playerHealth <= 90){
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }
            this.monsterAttacks();
        },
        giveUp: function(){
            this.gameIsRunning = false;
            this.playerHealth = 0;
        },
        monsterAttacks: function(){
            this.playerHealth -= this.changeHealth(12, 5);
            this.winLossCheck()
        },        
        winLossCheck: function() {
            if(this.monsterHealth <= 0){
                if(confirm('You won! Start new game?')){
                    this.startNewGame();
                    this.gameIsRunning = true;
                }
                else{
                    this.gameIsRunning = false;
                }
                
                return true;
            }
            else if (this.playerHealth <= 0){
                alert('You Lost');
                this.gameIsRunning = false;
                return true;
            }
            return false;
        },
        changeHealth: function(max, min){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }
    }
});

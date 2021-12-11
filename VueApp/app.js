
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
            this.turns = [];
        },
        attack: function() { 
            var damage = this.changeHealth(12, 3);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage + ' points'
            });

            if (this.winLossCheck()){
                return;
            }
            this.monsterAttacks();
            
        },
        specialAttack: function(){
            var damage = this.changeHealth(20, 3);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage + ' points'
            });
            this.monsterAttacks();
        },
        heal: function(){
            if (this.playerHealth <= 90){
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }
            
            this.turns.unshift({
                isPlayer: true,
                text: 'Player is healed 10 points'
            });

            this.monsterAttacks();
        },
        giveUp: function(){
            this.gameIsRunning = false;
            this.playerHealth = 0;
        },
        monsterAttacks: function(){
            var damage = this.changeHealth(12, 5);
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage + ' points'
            });
            this.playerHealth -= damage;
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

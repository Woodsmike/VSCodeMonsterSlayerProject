
new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startNewGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            
            this.monsterHealth = this.changeHealth(10, 3, this.monsterHealth, '-');
            //this.gameIsRunning = this.winLossCheck();
            if (this.winLossCheck() ){
                return;
            }
            
            this.playerHealth = this.changeHealth(12, 5, this.playerHealth, '-');
            if (this.winLossCheck() ){
                return;
            }
            
        },
        specialAttack: function(){
            
        },
        heal: function(){
            this.playerHealth = this.changeHealth(12, 5, this.playerHealth, '+');
            this.monsterHealth = this.changeHealth(5, 2, this.monsterHealth, '+');
        },
        giveUp: function(){
            
        },
        winLossCheck: function() {
            if(this.monsterHealth <= 0){
                if(confirm('You won! Start new game?')){
                    this.startNewGame();
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
        changeHealth: function(max, min, health, operator){
            var damage = 0;
            if(operator == '+'){
                damage = (health + Math.max(Math.floor(Math.random() * max) + 1, min));
            }
            else{
                damage = (health - Math.max(Math.floor(Math.random() * max) + 1, min));
            }

            if (damage < 0){
                damage = 0;
            }
            return damage;
        }
    }
});

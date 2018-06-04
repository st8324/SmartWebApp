function Lotto(){
    this.number = new Array();
    this.lotteryNumber = new Array();
    this.rank = -1;
    this.generateNumber = function(){
        this.number = this.createArrayNumber(1,45,6);
    };
    this.generateLotteryNumber = function(){
        this.lotteryNumber = this.createArrayNumber(1,45,7);
    }
    this.checkRank = function(){
        //로또 번호와 추첨번호와 비교하여 몇등인지 확인
    }
    this.randomInt = function(min, max){
        if(min > max){
            var tmp = min;
            min = max;
            max = tmp;
        }
        return parseInt(Math.random()*(max-min+1) + min);
    }
    this.createArrayNumber = function(min, max, count){
        var res = new Array();
        while(res.length < count){
            var i = 0;
            var tmp = this.randomInt(min,max);
            while(i < res.length){
                if(res[i] == tmp)
                    break;
                i++;
            }
            if(i == res.length)
                res.push(tmp);
        }
        return res;
    }
}
var lotto1 = new Lotto();
lotto1.generateNumber();
lotto1.generateLotteryNumber();
console.log(lotto1.number);
console.log(lotto1.lotteryNumber);
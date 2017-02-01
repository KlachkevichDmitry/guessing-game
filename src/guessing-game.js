class GuessingGame {
    constructor() {
        this.mingue=0;
        this.maxgue=0;
        this.gue=0;
    }

    setRange(min, max) {  /* принимаются мин и макс значения диапазон из которого необходимо выбирать */
        this.mingue=min;
        this.maxgue=max;
        return this.mingue;
        return this.maxgue;
    }

    guess() { /* этот метод возвращает число основываясь на диапазоне и полученных данных */
        /* необходимо делить диапазон чисел из которых выбирать на два */
        this.gue=Math.ceil((this.maxgue-this.mingue)/2+this.mingue);
        return this.gue;
    }

    lower() { /* вызывается если guess был больше чем ответ */
        this.maxgue=this.gue;
        return this.maxgue;
    }

    greater() { /* возвращается если guess был больше чем ответ */
        this.mingue=this.gue;
        return this.mingue;
    }
}

module.exports = GuessingGame;

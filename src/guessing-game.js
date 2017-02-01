class GuessingGame {
    constructor() {
        this.mingue=0;
        this.maxgue=0;
        this.gue=0;
    }



    setRange(min, max) {  /* принимаются мин и макс значения диапазон из которого необходимо выбирать */

        this._gue=(max-min)/2+min;
        return this._gue;
    }

    guess() { /* этот метод возвращает число основываясь на диапазоне и полученных данных */
        /* необходимо делить диапазон чисел из которых выбирать на два */
        /*range/2;*/

        result= Math.ceil(this._gue);
        return result;


    }

    lower() { /* вызывается если guess был больше чем ответ */

        max=result;
        return max;
        setRange(min,max);


    }

    greater() { /* возвращается если guess был больше чем ответ */
        min=results;
        return setRange(min,max);

    }
}

module.exports = GuessingGame;

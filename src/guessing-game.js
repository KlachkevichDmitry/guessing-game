class GuessingGame {
    constructor() {}

    var range;

    setRange(min, max) {  /* принимаются мин и макс значения диапазон из которого необходимо угадать */


           
            range=max-min;
            

            return range;


    }

    guess() { /* этот метод возвращает число основываясь на диапазоне и полученных данных */
        /* необходимо делить диапазон чисел из которых выбирать на два */
        range/2;
    }

    lower() { /* вызывается если guess был меньше чем ответ */




    }

    greater() { /* возвращается если guess был больше чем ответ */

    }
}

module.exports = GuessingGame;

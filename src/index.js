class Calculator {
    // sum()

    substract(...args) {
        // return a - b;
        // a > b ? a - b : b - a;
        return args
            .slice()
            .sort((a,b) =>  {
            return a === b ? 0: b - a
            })
            .reduce((acc, cur) => {

                return acc -= cur;
            })


    }

    sum(...args) {
        // let res = 0;
        // for(let i = 0; i < arguments.length; i++) {
        //     res += arguments[i];
        // }
        // return res;

        return args.reduce((acc, cur) => {
            return acc += cur;
        })
    }

    divide(a, b) {
        if(!b) {
            throw new Error('Dividing by zero');
        } else {
            return a / b;
        }
    }

    calculate(string) {
        // return parse(string)
        //     .map((str) => parseInt(str))
        //     .reduce( (acc, cur) => {
        //     return acc += cur;
        // });
        return parse(string);
    }
}

export const parse = (string) => {
    let res = 0;
    string
        .split('+')
        .map( sum => {
            sum.split('-')
                .map( div => {
                    if(isFinite(div))
                        res -= +div;
                });
            if(isFinite(sum))
                res += +sum;
        });
    return res;
};

export default Calculator;
let fibonacci = {
    [Symbol.iterator]: function (){

        let current = 1;
        let previous = 0;
        let nextNum  = previous + current;

        return{
            next: function (){

                previous = current
                current = nextNum
                nextNum = previous + current;

                return{
                    value: current,
                    done: false,
                }
            }
        }
    }
}

for (const fibNum of fibonacci) {
    if (fibNum > 100) break;
    console.log(fibNum);
}
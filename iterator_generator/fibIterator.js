let fibonacci = {
    [Symbol.iterator]: () => {
        let current = 1;
        let previous = 0;
        let nextNum  = previous + current;
        return{
            next: () => {
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

function* fib(max){
    let current = 1;
    let previous = 0;
    let nextNum  = previous + current;
    while (nextNum <= max){
        yield nextNum
        previous = current
        current = nextNum
        nextNum = previous + current;
    }
}

console.log("With iterator\n")
for (const fibNum of fib(100)) {
    console.log(fibNum);
}

console.log("\nWith generator\n")
for (const fibNum of fibonacci) {
    if (fibNum > 100) break;
    console.log(fibNum);
}
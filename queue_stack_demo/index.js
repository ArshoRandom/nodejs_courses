function createStack() {
    let container = [];
    let index = -1;
    return {
        //get top element from stack
        pop: function () {
            if (container.length > 0) {
                let el = container[index--];
                container.length--;
                return el;
            }else {
                return undefined;
            }
        },
        // add element in stack from tail
        push: function (element) {
            container[++index] = element;

        },
        //return stack size
        size: function () {
            return container.length;
        },

        toString: function () {
            return container.toString();
        }
    }
}


function createQueue() {
    let first = createStack();
    let second = createStack();
    return {
        // add element in queue from tail
        offer: function (element) {

            let full = second.size() > 0 ? second : first;
            let empty = second.size() > 0 ? first : second;

            let size = full.size();
            for (let i = 0; i < size; i++) {
                empty.push(full.pop());
            }
            empty.push(element);
            for (let i = 0; i < size + 1; i++) {
                full.push(empty.pop());
            }


        },
        //get first element from queue
        poll: function () {
            return second.size() > 0 ? second.pop() : first.pop()
        },
        //get last element from queue
        pop: function() {
            let full = second.size() > 0 ? second : first;
            let empty = second.size() > 0 ? first : second;

            let size = full.size();
            for (let i = 0; i < size; i++) {
                empty.push(full.pop());
            }
            let res =  empty.pop();

            for (let i = 0; i < size - 1; i++) {
                full.push(empty.pop());
            }

            return res;
        },
        //return queue size
        size: function () {
            return second.size() > 0 ? second.size() : first.size()
        },

    }
}

let queue = createQueue();

queue.offer(1);
queue.offer(2);
queue.offer(3);
queue.offer(4);

console.log(queue.size(),'size');

console.log(queue.pop(),' - pop last');
console.log(queue.poll(),' - poll first');


console.log(queue.size(),'size');


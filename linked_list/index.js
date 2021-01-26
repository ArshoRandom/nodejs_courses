function createLinkedList() {
    let current = undefined;
    let size = 0;

    // get list node
    function getNode(data) {
        return {
            data: data,
            next: undefined
        }
    }

    return {
        //add next element
        add: function (element) {
            let node = getNode(element);
            if (!current) {
                current = node;
                size++;
            } else {
                let last = current;
                while (last.next) {
                    last = last.next;
                }
                last.next = node;
                size++;
            }
        },
        //remove element
        remove: function (element) {
            if (size === 0) {
                return;
            }
            if (element === current.data) {
                current = current.next;
                size--;
                return;
            }
            let next = current;
            let prev = undefined;
            while (next) {
                prev = next;
                next = next.next;
                if (next && next.data === element) {
                    prev.next = next.next;
                    size--;
                    return;
                }
            }
        },
        //get element by index
        get: function (index) {
            let next = current;
            while (next && index !== 0) {
                next = next.next;
                index--;
            }
            return next ? next.data : undefined;

        },
        //get list size
        size: function () {
            return size;
        },
        //print all list
        printList: function () {
            let next = current;
            while (next) {
                console.log(next.data);
                next = next.next;
            }
        }
    }
}


let list = createLinkedList();

list.add(2);
list.add(5);
list.add(6);
list.add(6);

list.printList();
console.log('get element with index 3 -', list.get(3));
console.log('size', list.size());

list.remove(5);
console.log("\nAfter remove 5");
list.printList();
console.log('size', list.size());
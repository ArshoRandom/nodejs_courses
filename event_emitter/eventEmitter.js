class EventEmitter {

    events = [];

    emit(event,data){
        if (typeof event === 'string') {
            let pairs = this.events.filter(e => e.event === event);
            pairs.forEach(e => {
              e.action.call(this,data)
            })
        }
    }

    on(event,action){
        if (typeof event === 'string' && typeof action === 'function') {
            this.events.push({event, action})
        }else {
            throw new Error('Invalid function structure')
        }
    }
}

let em = new EventEmitter();

em.on("mess",(data) => {
    console.log("hello - " + data)
})



em.emit("mess","emitter")


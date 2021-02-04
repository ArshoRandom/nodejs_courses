let fsAsync = require('fs').promises
let fs = require('fs')

function promisify(cb){
    return function (...args){
        return new Promise(((resolve, reject) => {
            try {
                cb(...args,(err,data) => {
                    if (err) reject(err);
                    else resolve(data)
                })
            }catch (e) {
                reject(e)
            }
        }))
    }
}

let readDirAsync = promisify(fs.readdir)

readDirAsync(__dirname).then(data => {
    console.log("Promisify")
    console.log(data)
})

function callbackify(asyncFunc){
    return function (...args){
        let cb = typeof args[0] === 'function' ? args.shift() : args.pop()
        asyncFunc(...args)
            .then((data => cb(null,data)))
            .catch(err => cb(err))
    }
}



let readDirCb = callbackify(fsAsync.readdir)

readDirCb((err,data) =>{
    console.log("\nCallbackify")
    if (err) console.log(err);
    else console.log(data)
},__dirname)














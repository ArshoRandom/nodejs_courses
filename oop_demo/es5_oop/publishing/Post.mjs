function Post(publisher,text){
    this.publisher = publisher;
    this.text = text;
    this.comments = []
}

Post.prototype.printPost = function (){
    console.log(`
Publisher - ${this.publisher}
Text - ${this.text}`)
    this.comments.forEach(e => console.log(e.printComment()))
}


export default Post
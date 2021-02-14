function Comment(commentWriter,text){
    this.commentWriter = commentWriter;
    this.text = text;
}

Comment.prototype.printComment = function (){
    console.log(`
${this.commentWriter} : ${this.text}
    `)
}

export default Comment
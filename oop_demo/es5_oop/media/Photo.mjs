function Photo(id, hashtags, url){
    this.id = id;
    this.hashtags = hashtags;
    this.url = url;
}

Photo.prototype.printPhotoInfo = function (){
    console.log(`
ID : ${this.id}
Hashtags : ${this.hashtags}
Url : ${this.url}`
    );
}

export default Photo
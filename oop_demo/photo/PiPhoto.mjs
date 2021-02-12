function PiPhoto(id,hashtags,url){
    this.id = id;
    this.hashtags = hashtags;
    this.url = url;
}

PiPhoto.prototype.printPhotoInfo = function (){
    console.log(`ID : ${this.id}`);
    console.log(`Hashtags : ${this.hashtags}`);
    console.log(`Url : ${this.url}`);
}

export default PiPhoto
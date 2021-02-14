import Account from "./Account.mjs";
import UserDB from "../util/UserDB.mjs";
import Post from "../publishing/Post.mjs";
import Comment from "../publishing/Comment.mjs";

function User(id, name, surname, uname,pass, photo_url, isGold) {
    Account.call(this, id, name, surname, uname,pass, photo_url)
    this.isGold = isGold;
    this._photos = [];
    this._isBlocked = false;
    UserDB.addUser(this)
}

//extends from PiAccount
User.prototype = Object.create(Account.prototype)
User.prototype.constructor = User

//overriding printInfo()
User.prototype.printInfo = function () {
    if (!this._isBlocked) {
        Account.prototype.printInfo.call(this);
        console.log(`Is gold account : ${this.isGold ? 'Yes' : 'No'}`)
    } else {
        console.log(`${this.uname} account is blocked`)
    }
}

// show user media list
User.prototype.showPhotos = function () {
    if (!this._isBlocked) {
        this._photos.forEach(e => {
            e.printPhotoInfo()
            console.log(" - - - - - - - - - ")
        })
    } else {
        console.log(`${this.uname} account is blocked`)
    }
}

// add media in list
User.prototype.addPhoto = function (photo) {
    if (!this._isBlocked) {
        this._photos.push(photo);
        console.log('Photo successfully added\n')
    } else {
        console.log(`${this.uname} account is blocked`)
    }
}

//remove media from list
User.prototype.removePhoto = function (photo) {
    if (!this._isBlocked) {
        this._photos = this._photos.filter((e) => photo.id !== e.id)
        console.log('Photo successfully removed\n')
    } else {
        console.log(`${this.uname} account is blocked`)
    }

}

User.prototype.sharePost = function (text){
    if (!this._isBlocked) {
        this.posts.push(new Post(this.uname, text))
    }else {
        console.log(`${this.uname} account is blocked`)
    }
}
User.prototype.getPostsByUname = function (){
    return this.posts;
}
User.prototype.addComment = function (post, text){
    if (post){
        post.comments.push(new Comment(this.uname,text))
    }
}

export default User

import Photo from "./media/Photo.mjs";
import User from "./account/User.mjs";
import Admin from "./account/Admin.mjs";

let piUser = new User(
    1,
    'John',
    'Travolta',
    'travoltaJ',
    'travoltaPass',
    'https://media.newyorker.com/photos/59096d8e1c7a8e33fb38e55c/master/w_2560%2Cc_limit/Clegg-John-Travolta-Has-Yet-to-Be-Recognized-at-This-Pizzeria.jpg',
    true);

let piAdmin = new Admin(
    1,
    'PicsArtAdmin',
    'PicsArtAdmin',
    'picsArt',
    'picsPass',
    'https://dlpure.com/wp-content/uploads/2020/04/1587457075-190x190.png'
    )
//**********************************************************************************
//Demo user and media functionality
piUser.printInfo()

let moviePhoto = new Photo(1,['#action,#movie'],'https://someMovie.com')
let cityPhoto = new Photo(2,['#action,#city'],'https://someCity.com')
let mountainsPhoto = new Photo(3,['#action,#mountains'],'https://someMountians.com')

console.log('\nAdd photos\n')
piUser.addPhoto(moviePhoto)
piUser.addPhoto(cityPhoto)
piUser.addPhoto(mountainsPhoto)

console.log('Show photos')
piUser.showPhotos()

piUser.removePhoto(cityPhoto)
console.log('\nAfter removing media\n')
piUser.showPhotos()

//******************************************************************************
//Demo admin functionality
piAdmin.unsetGoldAccountByUname(piUser.uname)
console.log('Unset gold account\n')
piUser.printInfo();

piAdmin.blockUser(piUser.uname)
console.log('\nBlock user and try to add media\n')
piUser.addPhoto(new Photo(5,['#animal'],'https://animalPhoto.com/dog'))

piUser.sharePost('Nice post');
piUser.addComment(piUser.posts[0],'Thanks')



import PiPhoto from "./photo/PiPhoto.mjs";
import PiUser from "./account/PiUser.mjs";
import PiAdmin from "./account/PiAdmin.mjs";

let piUser = new PiUser(
    1,
    'John',
    'Travolta',
    'travoltaJ',
    'https://media.newyorker.com/photos/59096d8e1c7a8e33fb38e55c/master/w_2560%2Cc_limit/Clegg-John-Travolta-Has-Yet-to-Be-Recognized-at-This-Pizzeria.jpg',
    true);

let piAdmin = new PiAdmin(
    1,
    'PicsArtAdmin',
    'PicsArtAdmin',
    'picsArt',
    'https://dlpure.com/wp-content/uploads/2020/04/1587457075-190x190.png'
    )
//**********************************************************************************
//Demo user and photo functionality
piUser.printInfo()

let moviePhoto = new PiPhoto(1,['#action,#movie'],'https://someMovie.com')
let cityPhoto = new PiPhoto(2,['#action,#city'],'https://someCity.com')
let mountainsPhoto = new PiPhoto(3,['#action,#mountains'],'https://someMountians.com')

console.log('\nAdd photos\n')
piUser.addPhoto(moviePhoto)
piUser.addPhoto(cityPhoto)
piUser.addPhoto(mountainsPhoto)

console.log('Show photos')
piUser.showPhotos()

piUser.removePhoto(cityPhoto)
console.log('\nAfter removing photo\n')
piUser.showPhotos()

//******************************************************************************
//Demo admin functionality
piAdmin.unsetGoldAccountByUname(piUser.uname)
console.log('Unset gold account\n')
piUser.printInfo();

piAdmin.blockUser(piUser.uname)
console.log('\nBlock user and try to add photo\n')
piUser.addPhoto(new PiPhoto(5,['#animal'],'https://animalPhoto.com/dog'))


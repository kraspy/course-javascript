const friendsDB = require('./friends.json');
const photosDB = require('./photos.json');

const obj = {
  getRandomElement: function (array) {
    const randint = parseInt(Math.random() * array.length);
    return array[randint];
  },
  getNextPhoto: function () {
    const randomFriend = this.getRandomElement(friendsDB);
    return {
      firstName: randomFriend.firstName,
      url: this.getRandomElement(photosDB[randomFriend.id]),
    };
  },
};

console.log(obj.getRandomElement(friendsDB));

const photo = obj.getNextPhoto();

console.log(photo.firstName);
console.log(photo.url);

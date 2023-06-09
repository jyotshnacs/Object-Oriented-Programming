// var userOne = {
//   email: "ryu@ninjas.com",
//   name: "Ryu",
//   login() {
//     console.log(this.email, "has logged in");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };

// var prop = "name";

// // userOne.email = 'ryu2k18@ninjas.com';
// // userOne['email'] = 'ryu2k18@ninjas.com';
// // userOne[prop] = 'Ryuke';

// // console.log(userOne);

// userOne.age = 25;
// userOne.logInfo = function () {
//   console.log(this.name, this.age, this.email);
// };

// userOne.logInfo();
// userOne.login();
// userOne.logout();

// Constructor
// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//     this.score = 0;
//   }
//   login() {
//     console.log(this.email, "just logged in");
//     return this;
//   }
//   logout() {
//     console.log(this.email, "just logged out");
//     return this;
//   }
//   updateScore() {
//     this.score++;
//     console.log(this.email, "score is now", this.score);
//     return this;
//   }
// }

// class Admin extends User {
//   deleteUser(user) {
//     users = users.filter((el) => {
//       return el.email != user.email;
//     });
//   }
// }
// var userOne = new User("scream@blahblah.com", "scream");
// var userTwo = new User("calm@down.com", "calm");
// var admin = new Admin("example@ex.com", "example");

// var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
// console.log("users:", users);

// userOne.login().updateScore().updateScore().logout();
// userTwo.login().updateScore().updateScore().logout();

// console.log(userOne);
// console.log(userTwo);
/** the new keyword does 3 things under the hood
 * 1) creates new empty object {}
 * 2) sets the value of this to be the new empty object
 * 3) calls the constructor method
 */

// Constructor function
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, "has logged in");
  };
}

var userOne = new User("scream@blahblah.com", "scream");
var userTwo = new User("calm@down.com", "calm");

console.log(userOne);
userTwo.login();

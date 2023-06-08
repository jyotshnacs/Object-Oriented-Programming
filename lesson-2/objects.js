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
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}
var userOne = new User("scream@blahblah.com", "scream");
var userTwo = new User("calm@down.com", "calm");

console.log(userOne);
console.log(userTwo);
/** the new keyword does 3 things under the hood
 * 1) creates new empty object {}
 * 2) sets the value of this to be the new empty object
 * 3) calls the constructor method
 */

userOne.login();
userTwo.logout();

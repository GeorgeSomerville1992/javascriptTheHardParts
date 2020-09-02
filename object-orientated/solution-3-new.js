function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function () {this.score ++; }
userCreator.prototype.login = function() { console.log("login"); };

const user1 = new userCreator("eva", 9);

user1.increment();
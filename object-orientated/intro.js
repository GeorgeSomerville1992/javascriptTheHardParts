const user1 = {
  name: "will",
  score: 3,
  increment: function() {user1.score++}
}

const user2 = {}

user2.name = 'George'
user2.score = 5
user2.increment = function() {user2.score++}


function userCreator (name, score) {
  const newUser = object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser
}

const userFunctionStore = {
  increment: function() {
    const add1 = () => { this.score ++; }
    add1();
  },
  login: function(){console.log('logged it')}
}

const user1 = userCreator('will', 3);
const user2 = userCreator('Tim', 5);
user1.increment();

// we have gthrough the prootty a link up the the main 

// javascripts behaviour woth objects, when we look for a property, 
// we dont ggve up, we look up the proto__ cahin 

// how can we do the above automating with new keyword?

function autoUserCreator (name, score) {
  this.name = name;
  this.score = score;
}

autoUserCreator.prototype.increment = function () {
  this.score++;
}

const user1 = new autoUserCreator('Eva', 9);
const user2 = new autoUserCreator("Tim", 4);

// functions are both objects and functions

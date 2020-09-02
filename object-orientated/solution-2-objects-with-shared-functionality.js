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
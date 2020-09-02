// object orienttaited javascript

function makePerson (name, age) {
  const personStore = {
    name: name,
    age: age
  }
  return personStore;
}


const personStore = {
  greet: () => 'Hello'
}

function personFromPersonStore(name, age) {
  // add code here
  // When called, the function will create person objects using the Object.create method on the personStore object.
  const person = Object.create(personStore)
  person.name = name;
  person.age = age;
  return person
}

function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = () => 'Hello!'
  this.introduce = () => `Hello my name is ${this.name}`
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor(name, age)
  return person;
}

class PersonClass {
  constructor(name) {
    this.name = name;
    this.greet = () => 'hello'
  }
}

const userFunctionStore = {
  sayType: function() {
    return `I am a ${this.type}`
  }
}

const adminFunctionStore = Object.create(userFunctionStore);

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

function adminFactory(name, score) {
  // Put code here
  // proto in here maybe?
  const admin = Object.create(userFactory(name, score))
  admin.type = 'Admin'
  return admin;
}

Object.assign(adminFactory.prototype, adminFunctionStore);

// const sharePublic challange 5 which is not working
const sharePublicMessageObj = {
  sharePublicMessage: () => 'Welcome users!'
};

Object.assign(adminFactory.prototype, sharePublicMessageObj);



class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

/* The old way*/
const robotMixin = {
  skin: 'metal',
  speak: function() { return `I have ${this.legs} legs and am made of ${this.skin}` },
}

Object.assign(Dog.prototype, robotMixin);

/* The new way */
class Shitzu extends Dog {
  constructor() {
    super();
    this.isCute = true;
  }
}

class InjuredDog extends Dog {
  constructor() {
    /* reference error called is parents constructor this methods not called */
    /* super allows access to parents object functions, without you get a reference error */
    super();
    this.legs = 3;
  }
}

export { makePerson, personStore, personFromPersonStore, personFromConstructor, PersonConstructor, adminFunctionStore, adminFactory, PersonClass, Dog, Shitzu, InjuredDog }



// mixins
// a mixin is a class containing methods which can used bu other classes without the need to inherit from it

/*
*   Classic example, using the User class to asdd speech to it
*
* */

let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
// this is not the inheritene method
// its a simple way to mix in the methods ahove to our user prototype
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

/* Mixins themselves can make use of inheritence inside themselves */

let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHelloMixin = {
  __proto__: sayMixin, // (or we could use Object.create to set the prototype here)
  // inheriting directly
  // didit know you could do it this way..
  sayhello() {
    // call parent method
    super.say(`Hello ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  }
};

class newUser {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
// not inherit
Object.assign(newUser.prototype, sayHelloMixin);

// now User can say hi
const george = newUser("Dude") // Hello Dude!
george.sayHello();
george.sayBye();


// praticel mixins

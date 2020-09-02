/* Working with Object Literals */
import { makePerson, personStore, personFromPersonStore, person, personFromConstructor, adminFunctionStore, adminFactory, PersonClass, Dog, Shitzu, InjuredDog } from './oop-prototyping';


describe('object-orientatated tests', () => {

  // Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
  // create an empty object
  // add a name property to the newly created object with its value being the 'name' argument passed into the function
  // add an age property to the newly created object with its value being the 'age' argument passed into the function
  // return the object
  // Using Object.create

  const George = makePerson('George', 27);
  it('returns the correct object', () => {

  });

  it('returns the correct persons name', () => {
    expect(George.name).toBe('George');
  });

  it('returns the correct persons age', () => {
    expect(George.age).toBe(27);
  });

  describe('Object.create', () => {
    // console.log(sandra.name); // -> Logs 'Sandra'
    // console.log(sandra.age); //-> Logs 26
    // sandra.greet(); //-> Logs 'hello'
    const George = personFromPersonStore('George', 27)
    it('logs Hello', () => {
      expect(personStore.greet()).toEqual('Hello')
    });


    it('personFromPersonStore will create objects using object create method', () => {
      expect(George.name).toBe('George');
      expect(George.age).toBe(27);
      expect(George.greet()).toBe('Hello')
    });
  });
  describe('New Keyword', () => {
    const George = personFromConstructor('George', 27);
    it('shows the correct age', () => {
      expect(George.age).toBe(27);
    })
    it('shows the correct name', () => {
      expect(George.name).toBe('George');
    })
    it('greets the person', () => {
      expect(George.greet()).toBe("Hello!");
    });
    it('introduces himself to somebody else', () => {
      expect(George.introduce()).toBe('Hello my name is George');
    })
  });

  describe('es6 classes', () => {

    /* Create a class PersonClass. PersonClass should have a constructor
    that is passed an input of name and saves it to a property by the same name.
      PersonClass should also have a method called greet that logs the string 'hello'. */

    const George = new PersonClass('George');
    it('logs hello on Greet', () => {
      expect(George.greet()).toEqual('hello')
    });

    it('displays name', () => {
      expect(George.name).toEqual('George')
    });

    describe('Subclassing', () => {
      /* Create an object adminFunctionStore that has access to all methods in the userFunctionStore object,
        without copying them over individually. */
      test('Challenge 1: adminFunctionStore has access to userfunctionStore methods', () => {
        expect(adminFunctionStore.sayType()).toEqual('I am a undefined')
      })

      /* Create an admin factory function which has methods to user factory without copying them directly */
      // function userFactory(name, score) {
      //   let user = Object.create(userFunctionStore);
      //   user.type = "User";
      //   user.name = name;
      //   user.score = score;
      //   return user;
      // }
      const georgeAdmin = adminFactory('George', 22);
      test('Challenge 2: adminFactory has access to all user factory methods', () => {
        expect(georgeAdmin.name).toBe('George');
        expect(georgeAdmin.score).toBe(22);
      });

      /*
        Then make sure the value of the 'type' field for adminFactory objects
       is 'Admin' instead of 'User'.
      */
      test('Challenge 3: admin type is user', () => {
        expect(georgeAdmin.type).toBe('Admin');
      });

      /* Make sure that adminFactory objects have access to adminFunctionStore methods,
        without copying them over. */
      test('Challenge 4: george can useType', () => {
        expect(georgeAdmin.sayType()).toEqual('I am a Admin');
      });

      /* Create a method called sharePublicMessage that logs 'Welcome users!' a
      nd will be available to adminFactory objects, but not userFactory objects.
        Do not add this method directly in the adminFactory function. */
      test('Challenge 5: george can welcome users', () => {
        expect(georgeAdmin.sharePublicMessage()).toBe('welcome users!')
      });
    });

    describe('mixins', () => {
      let robotFido = new Dog();
      let lady = new Shitzu();
      let dogInAccident = new InjuredDog();
      it('New robot dog class has access to all original class methods', () => {
        expect(robotFido.speak()).toBe('I have 4 legs and am made of metal');
      });

      it('the Shitzu class has access to original class using new es6 way', () => {
        expect(lady.isCute).toBe(true);
      });
      /* injured dogs legs properties value overrides original dogs */
      it('injuredDogs legs has 3', () => {
        expect(dogInAccident.legs).toBe(3);
      })
    })
  })
});

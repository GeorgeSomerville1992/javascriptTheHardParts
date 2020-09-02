class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment (){ this.score++; }
  login () {console.log("login"); }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();

// problems

// 99% of developers have no idea how it works
// they cant solve the problems.. 


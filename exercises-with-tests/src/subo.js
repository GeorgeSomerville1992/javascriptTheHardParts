/*
  Jane, Jakc and Zarar are in a band
  Jane hits a cymbal every 2 beats
  Jack hits athe dru, everyt 5 beats
  Zafar blows a hro nevery 8 beats

  they all start together, how many beats is it before they all play again at the same time?
 */

const blowHorn = () => {
  console.log('HORN ==>');
}

const hitCymbal = () => {
  console.log('BISH! ==>')
}

const hitDrum = () => {
  console.log('DUM ===>')
}

for(var i = 0; i < 100; i+=1) {
  console.log('i ==>', i);
  if(i % 2 === 0) {
    hitCymbal()
  }

  if(i % 5 === 0) {
    hitDrum()
  }

  if(i % 8 === 0) {
    blowHorn();
  }
}

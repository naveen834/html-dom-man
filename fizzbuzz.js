function fizzbuzz() {
  for (let i = 1; i < 100; i++) {
    if (i % 15 === 0) console.log('fizzbuzz');
    else if (i % 3 === 0) console.log('fizz');
    else if (i % 5 === 0) console.log('buzz');
    else console.log(i);
  }
}

fizzbuzz();

const button = document.getElementById('button');

button.addEventListener('click', () => {
  console.log(this);
  // this.classList.toggle('on');
  button.classList.toggle('on');
});

let cat = {
  lives: 9,
  jump: () => {
    console.log(this.lives);
  },
};

cat.jump();

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const El = document.getElementsByClassName('master');
  El[2].innerHTML = 'i need a job ';
  const tags = document.getElementsByTagName('p');
  tags[3].innerHTML += ' Awesome';
  const master = document.querySelector('.master');
  // above statement will only grab first element of given class
  master.innerHTML = 'i need to understand ins and outs of js';
  const masters = document.querySelectorAll('.master');
  masters[1].innerHTML = 'i need to understand ins and outs of react';
});

const last_element_child = document.getElementById('parent').lastElementChild;
console.log(parent);

const children_3 = document.getElementById('parent').children[3];
console.log(children_3);

const secondChild = document.getElementById('secondchild');
console.log(secondChild);
console.log(secondChild.parentNode);
console.log(secondChild.nextElementSibling);
console.log(secondChild.previousElementSibling);

const createEl = document.createElement('h1');
createEl.innerHTML = 'i am frontend developer';
const parentEl = document.getElementById('parent');
parentEl.appendChild(createEl);
parentEl.insertBefore(createEl, secondChild);

const replaceEl = document.createElement('h3');
replaceEl.innerHTML = 'Hmmm! how should i get a job?';
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', () => {
  parentEl.replaceChild(replaceEl, children_3);
  parentEl.removeChild(secondChild);
});

btn2.addEventListener('click', () => {
  parentEl.classList.toggle('color1');
});

// DOM Traversal
// getElements by Class--more specific than Tag

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const El = document.getElementsByClassName('master');
  El[2].innerHTML = 'i need a job ';
  // getElements by Tag--least specific

  const tags = document.getElementsByTagName('p');

  // getElements by querySelector

  tags[3].innerHTML += ' Awesome';
  const master = document.querySelector('.master');
  // above statement will only grab first element of given class
  master.innerHTML = 'i need to understand ins and outs of js';
  const masters = document.querySelectorAll('.master');
  masters[1].innerHTML = 'i need to understand ins and outs of react';
});
// getElements by Id--more specific than class

const last_element_child = document.getElementById('parent').lastElementChild;
console.log(parent);

const children_3 = document.getElementById('parent').children[3];
console.log(children_3);
// Way to know about parentNode,nextElementSibling,previousELementSibling
const secondChild = document.getElementById('secondchild');
console.log(secondChild);
console.log(secondChild.parentNode);
console.log(secondChild.nextElementSibling);
console.log(secondChild.previousElementSibling);
// Creating new Node and appending to DOM
const createEl = document.createElement('h1');
createEl.innerHTML = 'i am frontend developer';
const parentEl = document.getElementById('parent');
parentEl.appendChild(createEl);
// above insert at the end of all child of parent, while below inserts above Node specified
parentEl.insertBefore(createEl, secondChild);

const replaceEl = document.createElement('h3');
replaceEl.innerHTML = 'Hmmm! how should i get a job?';
const btn2 = document.getElementById('btn2');
// replace/remove Node
btn.addEventListener('click', () => {
  parentEl.replaceChild(replaceEl, children_3);
  parentEl.removeChild(secondChild);
});
// toggle Class
btn2.addEventListener('click', () => {
  parentEl.classList.toggle('color1');
});

// difference between attribute AND property
const inputEl = document.querySelector('input');
const element = document.createElement('h4');
document.body.addEventListener('click', () => {
  element.innerHTML = `${inputEl.getAttribute('value')},${inputEl.value}`;

  document.body.appendChild(element);
});

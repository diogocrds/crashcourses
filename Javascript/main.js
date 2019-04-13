// var, let, const
// string, numbers, boolean, null, undefined, symbols

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;let z;
//console.log(typeof age);

//===================== String

//console.log('my name is '+name+' and i am '+age); // concatenation
const hello = `my name is ${name} and i am ${age}`; // template string
//console.log(hello);
//console.log(hello.toUpperCase().substring(5,15).split(' '));


//===================== Array

const numbers = new Array('1',2,3,4,5);
numbers [numbers.length] = 'oi';
numbers.push('mangos');
numbers.unshift(15.8);
//console.log(numbers.pop());
//console.log(numbers);
//console.log(numbers.indexOf('oi'));


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main str',
        city: 'Boston',
        state: 'MA'
    }
}

//console.log(person.address.city, person.hobbies[0]);
//const {firstName, lastName, address: { city } } = person;
//person.email = 'john@gmail.com'

//===================== object literal
const todos = [
    {
        id: 1,
        text: 'take ou trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist',
        isCompleted: false
    }
];

const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

//===================== For, while, forof
for(let i = 0; i < 10; i++){
    //console.log(i);
};
let j = 0;
while(j<10){
    //console.log(j);
    j++;
}
for(let t of todos){
    //console.log(t.text);
};

//===================== forEach, map, filter
todos.forEach(function(t) {
    //console.log(t.text);
});
const tText1 = todos.map(function(t) {
    return t.text;
});
//console.log(tText);
const tText2 = todos.filter(function(t) {
    return t.isCompleted == true;
}).map(function(t){
    return t.text
});
//console.log(tText2);

//===================== ternary operator
const c = 11;
const color = c > 10 ? 'red' : 'blue'
//console.log(color);

/*switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}*/

//===================== function
function addNum1(num1=0, num2=0){
    return num1+num2;
}
const addNum2 = (num1=0, num2=0) => { return num1+num2;}
const addNum3 = (num1=0, num2=0) => num1+num2;
const addNum4 = (num1=0) => num1+5;
const addNum5 = num1 => num1+5;
//console.log(addNum4(0));
//todos.forEach((t) => console.log(t));

//===================== OOP ES5
// constructor function
function Pers(fN, lN, dob){
    this.fN = fN;
    this.lN = lN;
    this.dob = new Date(dob);
}

Pers.prototype.getBirthYear = function (){
    return this.dob.getFullYear();
}
// instantiate object
const p1 = new Pers('lara', 'doe', '4-3-2002');

//console.log(p1.dob.getFullYear());
//console.log(p1);

//===================== OOP ES6
class Pers2 {
    constructor(fN, lN, dob){
        this.fN = fN;
        this.lN = lN;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
}
const p2 = new Pers2('lara', 'doe', '4-3-2002');
//console.log(p2);

//===================== DOM
// single element
const form = document.getElementById('my-form');
//console.log(document.querySelector('h1'));

//multiple elements
const items = document.querySelectorAll('.item');
//items.forEach((i)=>{console.log(i);});

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'brad';
//ul.lastElementChild.innerHTML = '<h1>hello</h1>';

const btn = document.querySelector('.btn');
//btn.style.background = 'red';
btn.addEventListener('click', (e) => {// mouseover, mouseout
    //e.preventDefault();
    //console.log(e.target.className);
    //document.querySelector('#my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'enter name or email';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear
        nameInput.value = '';
        emailInput.value = '';
    }
}
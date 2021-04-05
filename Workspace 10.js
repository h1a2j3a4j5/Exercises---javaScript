let header = document.getElementById("name");
header.innerHTML = "moshe";

let per = document.getElementById("love");
per.innerHTML = "אין עוד מלבדו";

let p = document.createElement('p');
p.innerHTML = 'I am a paragraph';
document.body.appendChild(p);

let button = document.getElementById('myButton');
let great = document.getElementById("myInput");
let short = document.getElementById('myList');

let content = great.value;

button.addEventListener('click' , (event) => {
let myP = document.createElement('li');
myP.innerHTML = great.value;
document.body.appendChild(myP);
console.log('yoni!');
});

let inlude = document.getElementById('myDivId');

inlude .style.width = '100px';
inlude .style.height = '50px';
inlude .style.backgroundColor = 'red';

let name = document.getElementsByClassName('name');

for(let all of name){
    all.style.width = '100px'; 
    all.style.height = '50px';
    all.style.backgroundColor = 'blue';
}

let names = document.getElementsByClassName("name's");

names[0].style.backgroundColor = 'yellow';
names[0].style.height = '100px';
names[0].style.width = '100px';




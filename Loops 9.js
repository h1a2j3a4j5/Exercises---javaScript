for(let i = 0;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}

let array = ["76" , "23" , "90" , "45"];
console.log(array);

for(let x = 0;x<array.length;x++){
    console.log(array[x]*=2);
}
let phrase = " ";
const foo = ['hello', 'I', 'am', 'Inigo', 'Montoya'];
for(let k = 0;k<foo.length;k++){
    phrase += foo[k];
}
console.log(phrase);

let num = 0;
while(num<10){
    if(num%2==0){
        console.log(num);
    }
    num++;
}
let s = 0;
let foor = ['hello', 'I', 'am', 'Inigo', 'Montoya'];
while(s<=foor.length){
    console.log(foor[s]);
    s++;
}
let myArray = ['first', 'second', 'third'];
myArray.forEach((value, key) => {
 console.log(`value: ${value}, key: ${key}`);
})

let orderArray = [
    { name: 'pen', price: 11 },
    { name: 'pencil', price: 5 },
    { name: 'TV', price: 2345 },
   ];
   for (let order of orderArray) {
    console.log(`The price of ${order.name} is ${order.price}.`);
}
   
const baz = ['hello', 'I', 'am', 'Inigo', 'Montoya'];
baz.forEach((two,loction) =>  
console.log(`name: ${two} , and: ${loction}`)
);

let  how = [100, 22, 4, 31, 99];

how.forEach((el) =>  el);
console.log(how);

how = how.filter(a => a > 10);
console.log(how);

let  cehk = ['name', 'param1', 2, 'city', undefined];
cehk = cehk.filter((bl) => {
        let type = typeof bl;
        if (type == 'string') {
          return true;
        } else {
          return false;
        }
      });
      console.log(cehk);


 const plas = ['hello', 'I', 'am', 'Inigo', 'Montoya'];
 plas.map((arg , arg2) => {
  console.log(`first: ${arg} and: ${arg2}`);
});
let res =  [52, 242, 551, 345, 21];
 res  = res.map((sl) => sl * 2);
console.log(res );

let sef = [ 
    {first: "yoni", price: 5,},
    {last: "Meir",  price: 2,},
    {end: "hajaj",  price: 4 },
]
sef.map((value) => {
       let ram = value.price * 2;
       value.price = ram;
       return value;
});
console.log(sef);

let active = sef.filter((sinon) => {
    if(sinon.price < 5){
        return true;
    }
    else{
        return  false;
    }
});
console.log(active);
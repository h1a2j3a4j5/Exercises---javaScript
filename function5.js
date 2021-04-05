function myFunc () {
     let num = "aba";
     return num;
}
console.log(myFunc());

function yesBiggy() {
     let foo = 'bar';
     let res = foo.toUpperCase()
     return res;
}
console.log(yesBiggy());

function name() {
     let faa = yesBiggy();
     let rse = yesBiggy();
     let x = rse + faa;
     return x;
}
console.log(name());

function calculateMe() {
     let number = 10;
     let number2 = 20;
     let add = number + number2;
     return add;
}
console.log(calculateMe())

function calculateMe2() {
     let are = 5;
     let erd = 20;
     return are * erd;
}
console.log(calculateMe2())

function Func() {
     let foor = 10;
     return foor;
 }
 let foor = 20;
 console.log(foor);

 function myFunc2() {
     let pool = 10;
     return pool;
 }
 let pool = 20;
 console.log(pool);

 function name2(params) {
      return params;
 }
 console.log(name2("aba"))

 function number2(hazar) {
      return hazar * 2;
 }
 console.log(number2(10));

function name3(one) {
      let uor = " ahla bahla "
      return one + uor;
}
console.log(name3("yosi"));

function yesBiggy2 (name4) {
     let well = name4.toUpperCase();
     return well;
}
console.log(yesBiggy2("good"));


function complex (name5) {
     let type = typeof name5;
     if(type == 'number'){
          return name5 * 2;
     }
    
}
console.log(complex(5));

function  date (February) {
     switch (February) {
          case 12 : 
            February = "December";
         case 1 : 
             February = "January";
         case 2 : 
             February = "February";
           
     }
        return February;    
}
console.log(date(2));

function allTogether (name7 , name8) {
     let adds = " ";
     return name7 + adds + name8;
}
console.log(allTogether("moshe","cohen"));


function isMultuplyBig (number7 , number8) {
   let moltiple  = number7 * number8;   
   if(moltiple>100){
        return true;
   }
   else{
        return false;
   }
     
}
console.log(isMultuplyBig(10 , 4));


function isMultuplyOdd (number9 , number10) {
     let how = number9 * number10;
     if(how%2==0){
     return true;
     }
     else {
          return false;
     }
}
console.log(isMultuplyOdd(2 , 10));

function  myFunc5(dvd = 'error') {
     return dvd;
   
}
console.log(myFunc5());

const  num9 = (free = 5) => {
     return free * 2 ;
}
console.log(num9(5));
console.log(num9(10))
console.log(num9());

function text2(frist  = 'Java script  ahla bahla' ) {
     return frist ;
}
console.log(text2("yosi ahla bahla"));
console.log(text2());

const fun4 = (exmple = "OK") => {
     return exmple;
}
console.log(fun4("OK"));
console.log(fun4());

const will = (arg) =>{
     return arg ();
}


const arrowFunction = () => {
     return 5;
}
console.log(will(arrowFunction));

let dor = "ari";
let are2 = () => {
      dor = 'hello';
}
are2();
console.log(dor);

function tot(cris) {
    console.log(cris);
   let answer = cris + 3;
    return answer;
}
let vrin = tot(3);
console.log(vrin);

function whoAmI (aviel) {
     if(aviel > 0){
          console.log(" + ")
     }
     else if (aviel < 0){
          console.log(" - ")
     }
     else{
          console.log(" ? ");
     }
     return aviel;
}
whoAmI(12);
whoAmI(-10);
whoAmI();

function fainel (cheks) {
     if(typeof cheks == 'string'){
         console.log("n\a")
         return;
     }
     if(cheks%2==0){
          return true;
     }
     else{
          return false;
     }

}
console.log(fainel(9));
console.log(fainel(10));


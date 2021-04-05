   let user = {
    ip: 1,
    name1: 'Moshe',
   };
   let profileExtendedData = {
    profileImg: null,
    address: 'Derech Hashalom',
    language: 'HE-IL',
   }
   user.moreData = profileExtendedData;
   console.log(user); 


   let computer = {
       it: 'how',
       modeName: 'good',
       price: 1000,
   }
   console.log(computer);

   
let two = {
    foor:  1,
    bari: "text",
}
two.foor = 5;
let ibiza = two.bari;
console.log(ibiza);




function name(first , last) {
    let objekt = {
        first,
        last,
    
    }
    return objekt;
}
console.log(name("yoni" , "hajaj"))


let objekt2 = {
    id: 1,
    myName: "meir",
    fullName: function () {
        return ` my number is ${this.id} and ${this.myName}`
    },
    whereYouWork: function (num1 , num2) {
        return num1 + num2 * 2;
    },
    howAreYou: function() {
        let foo = "yoni"
        let bar = "hajaj";
        let spase = " ";
         return foo + spase + bar;
    }
}
console.log(objekt2.fullName());
console.log(objekt2.whereYouWork(2 , 3));
console.log(objekt2.howAreYou());

let objekt5 = {
    array5: [2,546,2234,566,2456,234]
}
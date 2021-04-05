let foo = function (name ,nameF) {
    this.userName = name;
    this.userLastName = nameF;
    let id = '6382020'; 
    this.getId = function () {
        return id
    }
    this.setId = function (news) {
         return id = news;
    }
    this.getFullName = function () {
        return  this.userName + ' ' + this.userLastName;
    }
}
let res = new foo ('moshe' , 'haim');
console.log(res);
console.log(res.getId());
console.log(res.setId('8739654'));
console.log(res.getId());
console.log(res.getFullName());


const user = {
    id: 235,
    sum: 1000,
    currency: 'usd',
    it: 20,
    getUsdNum: function (it) {
        return it;
    },
    getUsdSum: function (sum) {
      return  it =  sum * 4;
    }
}
console.log(user.getUsdNum(20));
console.log(user.getUsdSum());
// 

let a =25;
const b =23;
function nam (){

    return console.log(b)

}

nam()
console.log(b);


class User  {
constructor(username, email, password){
this.username = username ;
this.email =  email ;
this.password = password ;
}
encryptPassword(){
    return `${this.password}abc`
}
}
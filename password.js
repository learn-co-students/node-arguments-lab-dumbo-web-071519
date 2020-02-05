// code solution here

process.argv.shift()
process.argv.shift()

if (process.argv.length!=2){
  console.log("Wrong Number of Arguments: Enter 2 Arguments")
} else if (process.argv[0]) {

}

function generatePassword(a, b){
  let passwords=[]
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let password=""
  let num=1
  while (num<=b){
    num++
    for (let i=1; i<=a;i++){
      password+=characters.charAt(Math.floor(Math.random() * characters.length))
    }
    passwords.push(password)
    password=""
  }
  passwords.forEach(password=>console.log(password))
}

generatePassword(process.argv[0], process.argv[1])

process.exit(0)
